# Run doc — MishriKitchen dev server (this workspace)

Static Next.js 16 (App Router) site for Mishri Kitchen. This workspace has no
system Node.js, so a portable Node runtime lives inside `.freebuff/tools/node`
(gitignored, no admin needed).

## Reproduce the artifacts

1. **Portable Node** (already done; only needed on a fresh machine):
   ```bash
   mkdir -p .freebuff/tools
   curl -sL -o .freebuff/tools/node.zip "https://nodejs.org/dist/latest-v22.x/node-v22.23.2-win-x64.zip"
   cd .freebuff/tools && unzip -q node.zip && mv node-v22.23.2-win-x64 node && rm node.zip
   ```
2. **Dependencies** (uses the workspace's npm, since `node` is not on PATH):
   ```bash
   export PATH="$PWD/.freebuff/tools/node:$PATH" && npm ci --no-audit --no-fund
   ```
3. **Env file**: copy `.env.example` to `.env.local` (optional for dev; the only
   var is the public site URL used for metadata/sitemap). Values, if ever set,
   come from the main checkout — never store secrets in this doc.

## Run the server (detached, survives the session)

Use the PowerShell launcher (sets PATH for the child, redirects stdout/stderr
to the preview logs, prints the top-level pid):

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File "C:\Users\pooja\Downloads\MishriKitchen\.freebuff\preview-launch.ps1"
```

It runs: `node.exe node_modules\next\dist\bin\next dev -p 3000` from the
workspace root.

- **URL:** http://localhost:3000
- **Port:** 3000 is pinned explicitly (`-p 3000`) — this Next build
  auto-picks a random port when 3000 is unavailable, so pin it.
- **Logs:** `.freebuff/preview-cf9ef908-e920-4404-9e92-c98e80009125.log`
  (stdout) and `.log.err` (stderr — must be separate files).
- **Stop:** `taskkill /PID <top-level-pid> /T /F` (the CLI spawns a
  `start-server.js` child plus workers; `/T` takes the whole tree).
