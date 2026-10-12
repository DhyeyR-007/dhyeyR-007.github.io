# dhyeyr-007.github.io

Personal research website. Plain HTML/CSS/JS, no build step, works on GitHub Pages as-is.

## Files

| File | What it is | Edit it? |
|---|---|---|
| `data.js` | All the text, papers, projects, news, links | **Yes, this is the only file you normally touch** |
| `assets/` | Your photo, paper thumbnails, logos, CV | Drop files in here |
| `index.html` | Page skeleton | Rarely |
| `style.css` | Colours, fonts, spacing | Only to restyle |
| `main.js` | Builds the page from `data.js` | No |

## Common edits

**Add a paper.** In `data.js`, copy one `{ ... },` block inside `publications: [ ... ]`, paste it at the top (newest first), and change the fields. Your name is bolded automatically.

**Add a thumbnail.** Put `displace.png` in `assets/`, then set `image: "assets/displace.png"`. Works for `.png`, `.jpg`, `.gif`. For a video, use `video: "assets/displace.mp4"`. Add `imageHover: "assets/displace_2.png"` to swap images when someone hovers the row. A 16:10 image (e.g. 640×400) fits best.

**Feature a paper.** Add `highlight: true` to give it a tinted background.

**Change the filter buttons.** They're made from each paper's `topic` value, so a new topic creates a new button.

**Add news.** Add a line at the top of `news: [ ... ]`. Only the first 5 show until a visitor clicks "Show older news" (change `newsVisible` to adjust).

**Change the typing line.** Edit `typingPrefix` and `typingPhrases` in `profile`.

**Hide something.** Set it to `""` or delete the line. Empty sections disappear from the page and the nav.

**Add Google Scholar.** Paste the URL into `links.scholar`.

## Preview locally

Open `index.html` in a browser. That's it, no server needed.

## Deploy

Commit and push to the `main` branch of `DhyeyR-007.github.io`. GitHub Pages updates in about a minute.
