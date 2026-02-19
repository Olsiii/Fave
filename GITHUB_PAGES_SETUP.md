# GitHub Pages Setup Guide

## ✅ Files Are Now Ready!

All HTML files (`index.html`, `about.html`, `flavors.html`, `find_fave.html`) are now at the repository root with corrected paths. GitHub Pages should work automatically!

## Setup Steps

1. **Push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Fix GitHub Pages - move files to root"
   git push
   ```

2. **Configure GitHub Pages:**
   - Go to your GitHub repository
   - Click **Settings** → **Pages** (left sidebar)
   - Under **Source**, select **Deploy from a branch**
   - Select branch: `main` (or `master`)
   - Select folder: **`/ (root)`** ← This is the default
   - Click **Save**

3. **Wait 1-2 minutes** for GitHub Pages to rebuild

4. **Visit your site:**
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## What Was Fixed

- ✅ All HTML files moved to root directory
- ✅ All paths updated (removed `../` prefixes)
- ✅ CSS and JS files copied to root
- ✅ All internal links use correct paths

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
