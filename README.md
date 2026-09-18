# Mix Genres

Build a song in one of dozens of musical genres, then rework its parts, chords, rhythms and instruments and export it as an MP3. Runs entirely in your browser.

Under the hood it is a browser-based music generation engine built with React, TypeScript, Vite, Tailwind CSS, and Web Audio. It generates grooves, arrangements, harmony, melodies, and synthesized audio on the client.

## GitHub Pages

The project is configured as a **static client-side application** and can be deployed directly to GitHub Pages. No Node/Express server is required for the Pages build.

### Automatic deployment

1. Push the repository to GitHub.
2. Use the `main` branch for deployment.
3. In **Settings → Pages**, set the source to **GitHub Actions**.
4. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually).

The workflow in `.github/workflows/deploy-pages.yml` runs `npm ci`, builds the Vite app, and publishes `dist/` to GitHub Pages.

### Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000. (`npm run dev` starts the legacy Express wrapper around Vite; the app itself doesn't call it.)

### Local production build

```bash
npm run build
npm run preview
```

### Notes

- The app's audio engine and SoundFont assets run client-side in the browser.
- Vite uses relative asset paths so the app works when hosted at a GitHub Pages project URL such as `https://USERNAME.github.io/REPOSITORY/`.
- The previous Express/AI server remains in the repository for reference, but it is **not used by the GitHub Pages deployment**. GitHub Pages cannot run that server or protect server-side API keys.
- Do not commit real API keys or `.env` files.

## Project structure

```text
├── .github/workflows/   # GitHub Pages deployment
├── public/              # SoundFonts and audio processor assets
├── src/
│   ├── data/            # Genre, instrument, and chord data
│   ├── engine/          # Music/audio generation engine
│   ├── ui/              # Sheets, chips, glyphs, genre colour plates
│   ├── App.tsx
│   └── main.tsx
├── server.ts            # legacy Express + Gemini server (dev wrapper only, not deployed)
├── index.html
├── metadata.json        # AI Studio applet metadata
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

## License

MIT
