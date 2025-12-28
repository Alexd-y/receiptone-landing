# Инструкция: Push в GitHub после миграции на Firebase

## Быстрый способ

Выполните PowerShell скрипт:
```powershell
.\push-and-deploy.ps1
```

## Ручной способ

### 1. Инициализация Git (если нужно)

```bash
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### 2. Добавление файлов и коммит

```bash
git add -A
git commit -m "Migrate to Firebase Firestore - remove PostgreSQL/Prisma dependencies"
```

### 3. Настройка GitHub remote

Если репозитория еще нет на GitHub:
1. Создайте новый репозиторий на GitHub (https://github.com/new)
2. Название: `receiptone-landing`
3. Не добавляйте README, .gitignore или лицензию (они уже есть)

Затем выполните:
```bash
git remote add origin https://github.com/Alexd-y/receiptone-landing.git
git branch -M main
git push -u origin main
```

Если репозиторий уже существует:
```bash
git remote add origin https://github.com/Alexd-y/receiptone-landing.git
git push origin main
```

### 4. Деплой в Vercel

#### Вариант A: Через CLI
```bash
vercel --prod
```

#### Вариант B: Через веб-интерфейс
1. Откройте https://vercel.com
2. Импортируйте проект из GitHub
3. Добавьте переменные окружения (см. ниже)
4. Нажмите "Deploy"

## Переменные окружения для Vercel

Добавьте в Vercel → Project Settings → Environment Variables:

**Обязательные:**
- `FIREBASE_PROJECT_ID` - ваш Firebase project ID
- `FIREBASE_CLIENT_EMAIL` - email из service account JSON
- `FIREBASE_PRIVATE_KEY` - private key из service account JSON (в кавычках, с `\n`)

**Публичные:**
- `NEXT_PUBLIC_CANONICAL_URL` - URL вашего сайта (например, `https://receipt-one.com`)
- `NEXT_PUBLIC_COMPANY_NAME` - название компании (`FLUTTER HORIZON`)
- `NEXT_PUBLIC_APP_NAME` - название приложения (`ReceiptOne`)
- `NEXT_PUBLIC_ENABLE_ANALYTICS_CONSENT` - включить cookie banner (`true` или `false`)

**Системные:**
- `NODE_ENV` - `production`

## Получение Firebase Credentials

1. Откройте [Firebase Console](https://console.firebase.google.com)
2. Выберите проект ReceiptOne
3. Project Settings → Service Accounts
4. Нажмите "Generate new private key"
5. Скачайте JSON файл
6. Скопируйте значения:
   - `project_id` → `FIREBASE_PROJECT_ID`
   - `client_email` → `FIREBASE_CLIENT_EMAIL`
   - `private_key` → `FIREBASE_PRIVATE_KEY` (весь ключ в кавычках, замените реальные переносы строк на `\n`)

## Проверка деплоя

После деплоя проверьте:
1. Сайт открывается: `https://your-project.vercel.app`
2. Форма отправки лидов работает
3. Данные сохраняются в Firebase Firestore → Collection `leads`

