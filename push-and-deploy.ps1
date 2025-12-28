# Скрипт для пуша в GitHub и деплоя в Vercel
# Выполните: .\push-and-deploy.ps1

# GitHub конфигурация
$GITHUB_USERNAME = "Alexd-y"
$REPOSITORY_NAME = "receiptone-landing"
$REPOSITORY_URL = "https://github.com/$GITHUB_USERNAME/$REPOSITORY_NAME.git"

Write-Host "=== ReceiptOne Landing - Push to GitHub and Deploy ===" -ForegroundColor Cyan
Write-Host "GitHub: $REPOSITORY_URL" -ForegroundColor Gray

# Проверка Git
Write-Host "`n1. Проверка Git..." -ForegroundColor Yellow
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "ОШИБКА: Git не установлен!" -ForegroundColor Red
    exit 1
}

# Инициализация репозитория (если нужно)
if (-not (Test-Path .git)) {
    Write-Host "Инициализация Git репозитория..." -ForegroundColor Yellow
    git init
    git config user.name "ReceiptOne Dev"
    git config user.email "dev@receipt-one.com"
}

# Добавление файлов
Write-Host "`n2. Добавление файлов..." -ForegroundColor Yellow
git add -A

# Проверка статуса
$status = git status --short
if ($status) {
    Write-Host "Изменения:" -ForegroundColor Green
    Write-Host $status
} else {
    Write-Host "Нет изменений для коммита." -ForegroundColor Yellow
}

# Коммит
Write-Host "`n3. Создание коммита..." -ForegroundColor Yellow
git commit -m "Move loop arrow to left side pointing to Get early access button" 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
    Write-Host "Коммит создан успешно!" -ForegroundColor Green
} else {
    Write-Host "Предупреждение: Не удалось создать коммит (возможно, нет изменений)" -ForegroundColor Yellow
}

# Проверка remote
Write-Host "`n4. Проверка GitHub remote..." -ForegroundColor Yellow
$remote = git remote -v
if ($remote) {
    Write-Host "Найден remote:" -ForegroundColor Green
    Write-Host $remote
    Write-Host "`n5. Push в GitHub..." -ForegroundColor Yellow
    git push origin main 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Push выполнен успешно!" -ForegroundColor Green
    } else {
        Write-Host "ОШИБКА при push. Проверьте настройки remote." -ForegroundColor Red
        Write-Host "Если репозитория нет, создайте его на GitHub и выполните:" -ForegroundColor Yellow
        Write-Host "  git remote add origin $REPOSITORY_URL" -ForegroundColor Cyan
        Write-Host "  git branch -M main" -ForegroundColor Cyan
        Write-Host "  git push -u origin main" -ForegroundColor Cyan
    }
} else {
    Write-Host "Remote не настроен. Настройте его вручную:" -ForegroundColor Yellow
    Write-Host "  git remote add origin $REPOSITORY_URL" -ForegroundColor Cyan
}

# Деплой в Vercel
Write-Host "`n6. Деплой в Vercel..." -ForegroundColor Yellow
if (Get-Command vercel -ErrorAction SilentlyContinue) {
    Write-Host "Запуск Vercel CLI..." -ForegroundColor Green
    vercel --prod
} else {
    Write-Host "Vercel CLI не установлен. Установите: npm i -g vercel" -ForegroundColor Yellow
    Write-Host "Или деплойте через веб-интерфейс: https://vercel.com" -ForegroundColor Cyan
}

Write-Host "`n=== Готово! ===" -ForegroundColor Green
