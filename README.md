# NEO WEST Conference — Vercel Ready

A multi-page static website recreated closely from the supplied NEO WEST reference image.

## Pages
- `index.html` — Home
- `about.html` — About
- `scientific-program.html` — Scientific Program
- `speakers.html` — Speakers
- `registration.html` — Registration
- `sponsors.html` — Sponsors
- `venue.html` — Venue
- `contact.html` — Contact

## Deploy to Vercel
This is a plain static site. Import the folder/repository into Vercel and use:
- Framework: Other
- Build command: empty
- Output directory: `.`

No Node.js build is required.

## Note
The visual assets are cropped from the user-supplied reference image. Replace them with the original high-resolution/owned assets if available for a pixel-perfect production result.


## Registration
The Registration page and QR registration have been removed. The Register Now buttons remain in the design.
When the Google Form is ready, open `site.js` and set:

```js
const REGISTRATION_URL = 'YOUR_GOOGLE_FORM_LINK';
```

The same link will be used by all Register Now buttons.
