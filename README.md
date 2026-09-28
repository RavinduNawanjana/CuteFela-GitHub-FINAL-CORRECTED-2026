# CuteFela — final GitHub Pages build (2026)

Production-oriented static website prepared to replace the existing Google Sites site after preview and DNS cutover.

## What is included

- Responsive static HTML, CSS and JavaScript
- 12 main indexable pages plus 29 wildlife/ecosystem guides
- Local CuteFela programme videos and project media
- Global environmental media library and species-specific media
- GSAP + ScrollTrigger, Anime.js, Motion.dev, React/React Spring enhancements
- Reduced-motion handling and mobile-specific layout behaviour
- Semantic HTML, accessible navigation, skip link, alt text and keyboard-friendly controls
- Unique page titles, descriptions and canonical URLs
- Organization/WebSite JSON-LD, plus Article and BreadcrumbList schema on wildlife guides
- robots.txt, sitemap.xml, manifest.webmanifest, llms.txt, humans.txt and .nojekyll
- Web3Forms contact form

## GitHub Pages preview

1. Create or open the GitHub repository intended for the website.
2. Upload the CONTENTS of this folder to the repository root. Do not add an extra enclosing folder.
3. In GitHub repository Settings → Pages, publish from the main branch/root (or the branch you use for Pages).
4. Test the GitHub Pages preview thoroughly on phone and desktop before changing the live domain.

## IMPORTANT — custom domain cutover

`CNAME.example` is intentionally NOT an active `CNAME` file. This prevents a preview deployment from taking over the production domain before you are ready.

When the GitHub Pages preview is approved:
1. Configure `www.cutefela.com` as the custom domain in GitHub Pages.
2. Update the DNS records at the domain provider using GitHub's current custom-domain instructions.
3. Rename `CNAME.example` to `CNAME` only as part of the planned cutover.
4. Enable HTTPS once GitHub makes the option available.
5. Keep the old Google Sites deployment available until the new domain resolves correctly and the main pages/forms have been tested.

## Search launch checklist

- Verify `https://www.cutefela.com/robots.txt` and `/sitemap.xml` after cutover.
- Add/verify the domain in Google Search Console and submit `/sitemap.xml`.
- Request indexing for the homepage and highest-priority programme pages after the domain resolves.
- Keep canonical URLs on `https://www.cutefela.com/` consistent.
- Avoid changing the main URL structure after launch unless redirects are planned.

## Contact form

The form posts to Web3Forms. Test a real submission after deployment.

## Updating media

The website primarily uses local assets under `assets/media/`. Keep filenames stable when replacing an image/video and the layout will continue to work. Compress new video before committing to GitHub; short H.264 MP4 loops are preferred.

## Notes

The site does not depend on JavaScript for core page copy or navigation links. Motion is progressive enhancement, and `prefers-reduced-motion` is respected.


## Final refinement notes
This package keeps the original folder structure and page architecture. The SDG section now introduces the official SDG wheel before the target media cards, removes the extra white card treatment and uses the supplied cards without their thin white source borders. Global Engagement uses a responsive editorial grid instead of a pinned horizontal layout. Disaster Response adds a local natural media set inside `assets/media/disaster/` and `assets/video/disaster/`. Public copy was also revised to remove production language and decorative dash based phrasing.
