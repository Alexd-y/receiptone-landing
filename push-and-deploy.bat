@echo off
echo === ReceiptOne Landing - Push to GitHub and Deploy ===
echo.

REM GitHub configuration
set GITHUB_USERNAME=Alexd-y
set REPOSITORY_NAME=receiptone-landing
set REPOSITORY_URL=https://github.com/%GITHUB_USERNAME%/%REPOSITORY_NAME%.git

echo GitHub: %REPOSITORY_URL%
echo.

REM Check Git
echo 1. Checking Git...
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed!
    pause
    exit /b 1
)

REM Initialize repository if needed
if not exist .git (
    echo Initializing Git repository...
    git init
    git config user.name "ReceiptOne Dev"
    git config user.email "dev@receipt-one.com"
)

REM Add files
echo.
echo 2. Adding files...
git add -A

REM Commit
echo.
echo 3. Creating commit...
git commit -m "Move loop arrow to left side pointing to Get early access button"
if %errorlevel% neq 0 (
    echo Warning: Could not create commit (maybe no changes)
)

REM Check remote
echo.
echo 4. Checking GitHub remote...
git remote -v >nul 2>&1
if %errorlevel% equ 0 (
    echo Found remote:
    git remote -v
    echo.
    echo 5. Pushing to GitHub...
    git push origin main
    if %errorlevel% neq 0 (
        echo ERROR: Push failed. Check remote settings.
        echo If repository doesn't exist, create it on GitHub and run:
        echo   git remote add origin %REPOSITORY_URL%
        echo   git branch -M main
        echo   git push -u origin main
    ) else (
        echo Push completed successfully!
    )
) else (
    echo Remote not configured. Configure manually:
    echo   git remote add origin %REPOSITORY_URL%
)

REM Deploy to Vercel
echo.
echo 6. Deploying to Vercel...
where vercel >nul 2>&1
if %errorlevel% equ 0 (
    echo Running Vercel CLI...
    vercel --prod
) else (
    echo Vercel CLI not installed. Install: npm i -g vercel
    echo Or deploy via web interface: https://vercel.com
)

echo.
echo === Done! ===
pause

