# IT Cert Prep — iOS Edition (PWA)

Offline-ready Progressive Web App. Built for iPhone "Add to Home Screen" install. Pure static — no server, no Electron, no build step.

## Tracks

| # | Track | Code | Type |
|---|---|---|---|
| 1 | A+ Core 1 | 220-1101 | CompTIA |
| 2 | A+ Core 2 | 220-1102 | CompTIA |
| 3 | Network+ | N10-009 | CompTIA |
| 4 | Security+ | SY0-701 | CompTIA |
| 5 | Linux+ | XK0-005 | CompTIA |
| 6 | Cloud+ | CV0-004 | CompTIA |
| 7 | Azure Fundamentals | AZ-900 | Microsoft entry cert |
| 8 | PowerShell Mastery | — | Skill track |

Each track ships with 10–12 lessons + 15 practice questions. Designed to be extended — drop more lessons or questions into `data/courses.js` and they appear automatically.

## File layout

```
index.html
manifest.webmanifest
sw.js                 # service worker (offline cache)
css/style.css
js/app.js             # view router, lesson reader, quiz runner
data/courses.js       # ALL course content (edit to extend)
icons/icon.svg
```

## Run locally (desktop preview)

Any static server works. Pick one:

```powershell
# Python (built-in)
python -m http.server 8080

# Node http-server (one-time install)
npx http-server -p 8080 -c-1

# PowerShell quick server (no install)
# See run-local.ps1 below.
```

Open `http://localhost:8080`.

## Install on your iPhone (the goal)

iOS PWA install requires the site be served over **HTTPS** on a real hostname. Two free options:

### Option A — Netlify Drop (easiest, 60 seconds)

1. Go to https://app.netlify.com/drop
2. Drag the entire `D:\IOS IT Course COmptia Cert edition` folder onto the page.
3. Netlify gives you a public HTTPS URL like `https://random-name.netlify.app`.
4. Open that URL on your iPhone in **Safari** (must be Safari, not Chrome).
5. Tap the **Share** button → **Add to Home Screen** → Add.
6. App now lives on your home screen, runs full-screen, works offline.

### Option B — GitHub Pages

1. `git init` in the folder, commit, push to a public GitHub repo.
2. Repo → Settings → Pages → Source: `main` branch, `/ (root)`.
3. GitHub gives you `https://<user>.github.io/<repo>/`.
4. Open in iPhone Safari → Share → Add to Home Screen.

### Option C — Cloudflare Pages

Same idea as Netlify; drag-and-drop or connect to Git.

## Updating content

Open `data/courses.js`. Each course has this shape:

```js
{
  id: 'unique-id',
  name: 'Display name',
  short: 'Short name (top bar)',
  code: 'EXAM-CODE',
  badge: 'CompTIA | Microsoft | Skill Track',
  type: 'comptia | microsoft | powershell',
  desc: 'One-line description.',
  lessons: [ { title: '...', body: '<h2>...</h2><p>...</p>' }, ... ],
  quiz:    [ { q: '...', options: ['A','B','C','D'], answer: 0, explain: '...' }, ... ]
}
```

Save the file, hard-refresh (or bump `CACHE` version in `sw.js`). Done.

## Why a PWA and not a native iOS app?

True native `.ipa` build needs:
- a Mac
- Xcode
- Apple Developer account ($99/yr)
- App Store review (or sideload via TestFlight)

For a personal study tool, a PWA gives you:
- Home Screen icon, full-screen mode, offline support
- Zero build step, zero accounts beyond the host
- Same code edits anywhere — no Mac required
- Works on Android too (bonus)

If you ever DO want a native build later, this codebase is exactly what Capacitor wraps into a real iOS project. The work is not wasted.

## Optional: better icon

The current icon is a single SVG. iOS supports SVG for the home-screen icon since iOS 16. For best results across older iOS or Android, generate PNG variants:

1. Open `icons/icon.svg` in any browser.
2. Use https://realfavicongenerator.net or `pwa-asset-generator` to produce `icon-192.png` and `icon-512.png`.
3. Drop them in `icons/` and edit `manifest.webmanifest` + `index.html` to reference both.

## License

Personal use. Course content authored from public exam objectives — verify against current vendor blueprints before exam day.
