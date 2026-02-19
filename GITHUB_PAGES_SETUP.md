# GitHub Pages Setup Guide

## Problem
Your files are in `Main/` subdirectory with double extensions (`.html.html`), but GitHub Pages expects `index.html` at the root.

## Solution Options

### Option 1: Configure GitHub Pages to serve from `Main/` folder (EASIEST)

1. Go to your GitHub repository
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Select branch: `main` (or `master`)
5. Select folder: **`/Main`** (not `/ (root)`)
6. Click **Save**

Now GitHub Pages will serve from the `Main/` folder, and your site should work!

**Note:** You'll still need to fix the double extension issue (`.html.html` → `.html`) for cleaner URLs.

---

### Option 2: Move files to root (if Option 1 doesn't work)

If you prefer to serve from root, you need to:

1. Copy all HTML files from `Main/` to root
2. Rename them from `.html.html` to `.html`
3. Copy `styles.css` and `main.js` to root
4. Update all paths in HTML files:
   - Change `../Images/` → `Images/`
   - Change `../1x/` → `1x/`
   - Change `../Asset_Cans/` → `Asset_Cans/`
   - Change all links from `.html.html` → `.html`

---

## Quick Fix Script (PowerShell)

Run this in your repository root to fix the double extension issue:

```powershell
# Rename files to remove double extension
Get-ChildItem -Path "Main\*.html.html" | ForEach-Object {
    $newName = $_.Name -replace '\.html\.html$', '.html'
    Rename-Item -Path $_.FullName -NewName $newName
}

# Update all links in HTML files
Get-ChildItem -Path "Main\*.html" -Recurse | ForEach-Object {
    (Get-Content $_.FullName) -replace '\.html\.html', '.html' | Set-Content $_.FullName
}
```

---

## After Setup

1. Push your changes to GitHub
2. Wait 1-2 minutes for GitHub Pages to rebuild
3. Visit: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

If you used Option 1 (serving from `/Main`), your URL will be:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/Main/`
