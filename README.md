# Beatrix Mahd Soltani — ciagency.nyc (current live site)

Static copy of the live portfolio site for Beatrix Mahd Soltani, photo editor, art buyer and producer.
Taken from the cPanel backup (`public_html/index.html`, last edited 1 Sep 2025) with only the assets it uses.

No build step. To preview locally:

```sh
python3 -m http.server 4321
# then open http://localhost:4321
```

Deployed with Vercel. Domain is managed at GoDaddy and pointed at Vercel via DNS.

Known gaps carried over from the live site: the `images/sam/` gallery files and `galerie2.css`
were never in the backup, so those references 404 exactly as they did on the old host.
