 $(document).ready(function() {
 
   // JQuery Elements
   $thumbList = $('#thumbs-inner');
   $sectionTexts = $('#section-texts div');
   $sectionSwitcher = $('#section-switcher li');
   $photos = $('#photos');
   $video = $('#video');
   
   // Init Variables
   section = prevSection = 'section_1';
   
   // Change Section Function
   
   function changeSection(section) {
     
     // Get Current Section
     $sectionDiv = $('#'+section+'_text');
     $sectionTexts.hide();
     $sectionDiv.show();
     
     //Highlight Button
     $sectionSwitcherLi = $('#'+section+'_switcher a');
     $sectionSwitcher.children().removeClass();
     $sectionSwitcherLi.addClass('hilite');
     
     // Video Functionality
     
     if (section == 'video-section') {
       $photos.hide();
       $video.show();
       gallery.pause();
     } else {
       if ($photos.is(":hidden")) {
         $photos.show();
       }
       if ($video.is(":visible")) {
         $video.hide();
       }
     }
   }
 
   // Galleriffic Gallery
   
    var gallery = $('#thumbs').galleriffic({
      autoStart: true,
      imageContainerSel:  '#slideshow',
      controlsContainerSel: '#controls',
      captionContainerSel:  '#caption',
      playLinkText: 'Play Slideshow',
      pauseLinkText: 'Pause Slideshow',
      renderSSControls: true,
      renderNavControls: false,
      enableKeyboardNavigation: false, // Specifies whether keyboard navigation is enabled
      enableHistory: true, // Specifies whether the url's hash and the browser's history cache should update when the current slideshow image changes
      delay: 3000, // in milliseconds
      numThumbs: 9999, // The number of thumbnails to show page
      preloadAhead: 3, // Set to -1 to preload all images
      syncTransitions: false, // Specifies whether the out and in transitions occur simultaneously or distinctly
      defaultTransitionDuration: 1000, // If using the default transitions, specifies the duration of the transitions					
      onSlideChange: function(prevIndex, nextIndex) {
        section = $thumbList.children().eq(nextIndex).children().eq(1).attr('class');
        if (section != prevSection) {
          changeSection(section);
        }
        prevSection = section;
      }
   });
   
   $('#slide-prev').click(function(e) {
     gallery.previous();
     e.preventDefault();
   });
 
   $('#slide-next').click(function(e) {
     gallery.next();
     e.preventDefault();
   });
   
   /**** Functions to support integration of galleriffic with the jquery.history plugin ****/
 
   function pageload(hash) {
     if(hash) {
       $.galleriffic.gotoImage(hash);
     } else {
       gallery.gotoIndex(0);
     }
   }
 
   $.historyInit(pageload);
   $("a[rel='history']").live('click', function(e) {
     if (e.button != 0) return true;
     var hash = this.href;
     hash = hash.replace(/^.*#/, '');
     $.historyLoad(hash);
     return false;
   });
  
    
});