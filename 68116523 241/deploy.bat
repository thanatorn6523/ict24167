@echo off
echo =======================================================
echo   Deploying Thanatorn Portfolio to Cloudflare
echo =======================================================
echo.

echo [1/4] Checking Cloudflare Authentication...
call npx wrangler whoami
if %errorlevel% neq 0 (
    echo.
    echo Please log in to your Cloudflare account in the browser window that opens...
    call npx wrangler login
)

echo.
echo [2/4] Initializing Cloudflare D1 Database...
call npx wrangler d1 create portfolio-db
call npx wrangler d1 execute portfolio-db --file=./schema.sql --remote

echo.
echo [3/4] Creating R2 Storage Bucket...
call npx wrangler r2 bucket create portfolio-assets

echo.
echo [4/4] Deploying Website to Cloudflare Pages (Domain: Thanatorn)...
call npx wrangler pages deploy . --project-name=thanatorn --commit-dirty=true

echo.
echo =======================================================
echo   Deployment Completed!
echo   Your website is live at: https://thanatorn.pages.dev
echo =======================================================
pause
