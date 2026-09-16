# PowerShell Deployment Script for Cloudflare Pages, D1 Database, and R2 Storage
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host "  Deploying Thanatorn Portfolio to Cloudflare" -ForegroundColor Cyan
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Login
Write-Host "[1/4] Checking Cloudflare Authentication..." -ForegroundColor Yellow
npx wrangler whoami
if ($LASTEXITCODE -ne 0) {
    Write-Host "Opening browser for Cloudflare login..." -ForegroundColor Magenta
    npx wrangler login
}

# 2. D1 Database
Write-Host "`n[2/4] Setting up Cloudflare D1 Database (portfolio-db)..." -ForegroundColor Yellow
npx wrangler d1 create portfolio-db
npx wrangler d1 execute portfolio-db --file=./schema.sql --remote

# 3. R2 Storage Bucket
Write-Host "`n[3/4] Creating R2 Storage Bucket (portfolio-assets)..." -ForegroundColor Yellow
npx wrangler r2 bucket create portfolio-assets

# 4. Pages Deploy
Write-Host "`n[4/4] Deploying to Cloudflare Pages (Project: thanatorn)..." -ForegroundColor Yellow
npx wrangler pages deploy . --project-name=thanatorn --commit-dirty=true

Write-Host "`n=======================================================" -ForegroundColor Green
Write-Host "  Deployment Successful!" -ForegroundColor Green
Write-Host "  Domain URL: https://thanatorn.pages.dev" -ForegroundColor Green
Write-Host "=======================================================" -ForegroundColor Green
