# Fix GitHub Pages Setup
# This script fixes the double extension issue and updates paths

Write-Host "Fixing GitHub Pages setup..." -ForegroundColor Green

# Step 1: Rename files to remove double extension
Write-Host "`nStep 1: Renaming files..." -ForegroundColor Yellow
Get-ChildItem -Path "Main\*.html.html" | ForEach-Object {
    $newName = $_.Name -replace '\.html\.html$', '.html'
    Write-Host "  Renaming: $($_.Name) -> $newName" -ForegroundColor Cyan
    Rename-Item -Path $_.FullName -NewName $newName -ErrorAction SilentlyContinue
}

# Step 2: Update all links in HTML files (remove .html.html references)
Write-Host "`nStep 2: Updating links in HTML files..." -ForegroundColor Yellow
Get-ChildItem -Path "Main\*.html" | ForEach-Object {
    Write-Host "  Updating: $($_.Name)" -ForegroundColor Cyan
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace '\.html\.html', '.html'
    Set-Content -Path $_.FullName -Value $content -NoNewline
}

Write-Host "`nDone! Files are ready for GitHub Pages." -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Go to GitHub repo → Settings → Pages" -ForegroundColor White
Write-Host "2. Set Source to: Deploy from branch 'main' → folder '/Main'" -ForegroundColor White
Write-Host "3. Save and wait 1-2 minutes" -ForegroundColor White
Write-Host "4. Your site will be at: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/Main/" -ForegroundColor White
