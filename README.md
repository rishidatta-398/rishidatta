# Rishi Datta — personal site

Five static pages. No build step, no dependencies. Open `index.html` in a browser to view it.

```
index.html         Home
work.html          Business plans, research, competition record
leadership.html    Soccer, music, community service
about.html         Bio, education, skills, activities
contact.html       Email and LinkedIn
assets/style.css   All styling, including dark mode
assets/site.js     Dark mode toggle
```

## Add the photo

Two pages have a placeholder box where a portrait should go: the home page hero and the
About page. Save a photo as `assets/portrait.jpg`, then in `index.html` and `about.html`
replace the contents of the `<div class="portrait">` block with:

```html
<img src="assets/portrait.jpg" alt="Rishi Datta">
```

A square or slightly tall crop works best, at least 800px wide.

## Publishing it

**GitHub Pages** (free, gives you `username.github.io`)

1. Create a GitHub account and a new public repository.
2. Upload every file, keeping the `assets` folder intact.
3. Repository Settings → Pages → Source: `main` branch, `/root`.
4. The URL appears within a minute or two.

**Netlify Drop** (free, fastest, no account needed to try)

1. Go to app.netlify.com/drop.
2. Drag the whole `rishi-datta-site` folder onto the page.
3. It goes live immediately at a random URL you can rename.

Either host will let you point a custom domain at it later.

## Editing content

Everything is plain HTML. To change a competition result or add a new one, find the
matching `<div class="row">` block and edit the text. To add a work item, copy an existing
`<article class="card work">` block and change the number and text.

## Things to update before this goes live

- Replace the portrait placeholders with a real photo.
- Confirm the LinkedIn URL. The career portfolio PDF lists `linkedin.com/in/rishidatta1`,
  which does not match the `linkedin.com/in/rishi-datta1` used throughout this site. One of
  them is wrong.
- The credit risk paper is described as in progress. Update `work.html` when it's finished
  and add a link.
- Deliberately not included: phone number and home address. Both appear in the references
  PDF, and neither belongs on a public website.
