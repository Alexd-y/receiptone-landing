# Финальные шаги: Push в GitHub и Deploy в Vercel

Проект успешно мигрирован на Firebase Firestore. Выполните следующие команды вручную:

## ✅ Что уже сделано:

1. ✅ Удалены зависимости Prisma и PostgreSQL
2. ✅ Добавлен `firebase-admin` в зависимости
3. ✅ Обновлен `lib/leadStore.ts` для работы с Firebase
4. ✅ Обновлен `lib/firebaseAdmin.ts` с правильной типизацией
5. ✅ Созданы типы Firebase в `lib/types/firebase.ts`
6. ✅ Обновлен README.md
7. ✅ Создан `env.example` с Firebase переменными
8. ✅ Удалена папка `prisma`

## 📋 Выполните следующие команды:

### 1. Установите зависимости (если еще не установлены)

```bash
npm install
```

### 2. Инициализируйте Git репозиторий (если нужно)

```bash
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### 3. Добавьте файлы и создайте коммит

```bash
git add -A
git commit -m "Migrate to Firebase Firestore - remove PostgreSQL/Prisma dependencies"
```

### 4. Настройте GitHub remote и запушьте

**Если репозитория еще нет на GitHub:**
1. Создайте новый репозиторий на https://github.com/new
2. Название: `receiptone-landing`
3. Не добавляйте README, .gitignore или лицензию

Затем выполните:
```bash
git remote add origin https://github.com/Alexd-y/receiptone-landing.git
git branch -M main
git push -u origin main
```

**Если репозиторий уже существует:**
```bash
git remote add origin https://github.com/Alexd-y/receiptone-landing.git
git push origin main
```

### 5. Деплой в Vercel

#### Вариант A: Через Vercel CLI

```bash
vercel --prod
```

#### Вариант B: Через веб-интерфейс

1. Откройте https://vercel.com
2. Нажмите "Add New Project"
3. Импортируйте репозиторий `receiptone-landing` из GitHub
4. Vercel автоматически определит Next.js

### 6. Настройте переменные окружения в Vercel

В Vercel → Project Settings → Environment Variables добавьте:

**Обязательные Firebase переменные:**
```
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxx@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

**Публичные переменные:**
```
NEXT_PUBLIC_CANONICAL_URL=https://receipt-one.com
NEXT_PUBLIC_COMPANY_NAME=FLUTTER HORIZON
NEXT_PUBLIC_APP_NAME=ReceiptOne
NEXT_PUBLIC_ENABLE_ANALYTICS_CONSENT=true
```

**Системная переменная:**
```
NODE_ENV=production
```

### 7. Получение Firebase Credentials

1. Откройте [Firebase Console](https://console.firebase.google.com)
2. Выберите проект ReceiptOne
3. Перейдите в **Project Settings** → **Service Accounts**
4. Нажмите **"Generate new private key"**
5. Скачайте JSON файл
6. Скопируйте значения:
   - `project_id` → `FIREBASE_PROJECT_ID`
   - `client_email` → `FIREBASE_CLIENT_EMAIL`
   - `private_key` → `FIREBASE_PRIVATE_KEY` (весь ключ в кавычках, замените реальные переносы строк на `\n`)

**Пример формата `FIREBASE_PRIVATE_KEY`:**
```
"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

### 8. Проверка деплоя

После деплоя проверьте:

1. ✅ Сайт открывается: `https://your-project.vercel.app`
2. ✅ Форма отправки лидов работает
3. ✅ Данные сохраняются в Firebase Firestore → Collection `leads`

## 🔍 Структура данных в Firebase

Лендинг сохраняет лиды в коллекцию `leads` со следующей структурой:

```typescript
{
  email: string;                    // Email пользователя
  name?: string;                    // Имя (опционально)
  persona?: string;                 // Персона (опционально)
  consentMarketing: boolean;        // Согласие на маркетинг
  consentAnalytics: boolean;        // Согласие на аналитику
  source?: string;                  // Источник ("landing" по умолчанию)
  userAgent?: string;               // User Agent браузера
  ipHash?: string;                  // SHA-256 хеш IP адреса
  country?: string;                 // Страна
  message?: string;                 // Сообщение (опционально)
  createdAt: string;                // ISO timestamp
}
```

## 📚 Дополнительная документация

- `README.md` - Основная документация проекта
- `GITHUB_PUSH_FIREBASE.md` - Подробная инструкция по GitHub
- `DEPLOY_FIREBASE.md` - Инструкция по деплою
- `receiptone-db-docs/` - Документация структуры базы данных ReceiptOne

## ⚠️ Важные замечания

1. **Firebase Private Key**: Должен быть в кавычках и содержать `\n` для переносов строк
2. **Права доступа**: Убедитесь, что Firebase Service Account имеет права на запись в Firestore
3. **Безопасность**: Никогда не коммитьте `.env` файл с реальными credentials
4. **Коллекция leads**: Автоматически создается при первом сохранении лида

## 🆘 Troubleshooting

**Ошибка "Firebase not configured":**
- Проверьте, что все три Firebase переменные добавлены в Vercel
- Убедитесь, что `FIREBASE_PRIVATE_KEY` правильно отформатирован (с `\n`)

**Ошибка "Permission denied" в Firestore:**
- Проверьте права Service Account в Firebase Console
- Убедитесь, что Service Account имеет роль "Cloud Datastore User" или "Firestore User"

**Форма не отправляется:**
- Проверьте логи Vercel Functions
- Убедитесь, что rate limiting не блокирует запросы
- Проверьте CSP headers в `next.config.js`

