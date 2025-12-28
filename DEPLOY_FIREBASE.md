# Деплой после миграции на Firebase

Проект обновлен для работы с Firebase Firestore. Выполните следующие шаги:

## 1. Установите зависимости

```bash
npm install
```

## 2. Настройте переменные окружения

Скопируйте `env.example` в `.env` и заполните Firebase credentials:

```bash
cp env.example .env
```

## 3. Закоммитьте изменения в Git

```bash
git add -A
git commit -m "Migrate to Firebase Firestore - remove PostgreSQL/Prisma dependencies"
```

## 4. Запушьте в GitHub

Если репозиторий уже существует:
```bash
git push origin main
```

Если нужно создать новый репозиторий:
```bash
# Создайте репозиторий на GitHub, затем:
git remote add origin https://github.com/Alexd-y/receiptone-landing.git
git branch -M main
git push -u origin main
```

## 5. Деплой в Vercel

### Вариант A: Через Vercel CLI

```bash
vercel --prod
```

### Вариант B: Через веб-интерфейс

1. Откройте [vercel.com](https://vercel.com)
2. Импортируйте проект из GitHub
3. Добавьте переменные окружения:
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_CLIENT_EMAIL`
   - `FIREBASE_PRIVATE_KEY`
   - `NEXT_PUBLIC_CANONICAL_URL`
   - `NEXT_PUBLIC_COMPANY_NAME`
   - `NEXT_PUBLIC_APP_NAME`
   - `NEXT_PUBLIC_ENABLE_ANALYTICS_CONSENT`
4. Нажмите "Deploy"

## Важно: Firebase Credentials

Получите credentials из Firebase Console:
1. Project Settings → Service Accounts
2. Generate new private key
3. Скопируйте значения в `.env`:
   - `project_id` → `FIREBASE_PROJECT_ID`
   - `client_email` → `FIREBASE_CLIENT_EMAIL`
   - `private_key` → `FIREBASE_PRIVATE_KEY` (в кавычках, с `\n`)

