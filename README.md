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

### SoundFont

The app plays a single General MIDI SoundFont 2 file (for example GeneralUser GS).
It is not included in this repository. Put your file at:

```
public/soundfont.sf2
```

The browser fetches it as-is: no size limit, no compression format, no Cache Storage, no per-device variants.
It must be an uncompressed `.sf2` with the standard GM layout (programs 0–127 in bank 0, drum kits in the drum bank).
If the file is missing or is not a real SF2, the console shows an explicit error instead of playing noise.

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

- The app's audio engine runs client-side in the browser and plays one raw SoundFont 2 file.
- Vite uses relative asset paths so the app works when hosted at a GitHub Pages project URL such as `https://USERNAME.github.io/REPOSITORY/`.
- The previous Express/AI server remains in the repository for reference, but it is **not used by the GitHub Pages deployment**. GitHub Pages cannot run that server or protect server-side API keys.
- Do not commit real API keys or `.env` files.

## Project structure

```text
├── .github/workflows/   # GitHub Pages deployment
├── public/              # soundfont.sf2 (you add this) and the audio worklet processor
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
