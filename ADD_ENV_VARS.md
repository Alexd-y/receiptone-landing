# 🔧 Добавление переменных окружения в Vercel

Проект успешно задеплоен! Теперь нужно добавить переменные окружения.

## Способ 1: Через веб-интерфейс (рекомендуется)

1. Откройте: https://vercel.com/alexds-projects-110e6fa8/receiptone-landing/settings/environment-variables

2. Добавьте следующие переменные (для Production):

### Обязательные переменные:

| Переменная | Значение | Описание |
|------------|----------|----------|
| `NEXT_PUBLIC_CANONICAL_URL` | `https://receiptone-landing.vercel.app` | URL вашего сайта |
| `NEXT_PUBLIC_COMPANY_NAME` | `FLUTTER HORIZON` | Название компании |
| `NEXT_PUBLIC_APP_NAME` | `ReceiptOne` | Название приложения |
| `LEAD_STORAGE` | `postgres` | Тип хранилища (postgres или firebase) |
| `DATABASE_URL` | `postgresql://...` | Connection string PostgreSQL |
| `NODE_ENV` | `production` | Окружение |

### Опциональные переменные:

| Переменная | Значение | Описание |
|------------|----------|----------|
| `NEXT_PUBLIC_ENABLE_ANALYTICS_CONSENT` | `true` | Включить согласие на аналитику |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Google Analytics ID (если используется) |
| `NEXT_PUBLIC_GTM_ID` | `GTM-XXXXXXX` | Google Tag Manager ID (если используется) |

## Способ 2: Через CLI

Выполните команды в PowerShell:

```powershell
cd D:\Developer\ReceiptOne\receiptone-landing

# Обязательные переменные
vercel env add NEXT_PUBLIC_CANONICAL_URL production
# Введите: https://receiptone-landing.vercel.app

vercel env add NEXT_PUBLIC_COMPANY_NAME production
# Введите: FLUTTER HORIZON

vercel env add NEXT_PUBLIC_APP_NAME production
# Введите: ReceiptOne

vercel env add LEAD_STORAGE production
# Введите: postgres

vercel env add DATABASE_URL production
# Введите ваш PostgreSQL connection string

vercel env add NODE_ENV production
# Введите: production
```

После добавления переменных выполните redeploy:
```powershell
vercel --prod
```

## ⚠️ Важно: Настройка базы данных

### Вариант 1: Vercel Postgres (самый простой)

1. Откройте проект в Vercel
2. Перейдите в раздел "Storage"
3. Создайте новую базу данных PostgreSQL
4. Vercel автоматически создаст переменную `POSTGRES_URL`
5. Используйте `POSTGRES_URL` как `DATABASE_URL`

### Вариант 2: Supabase (бесплатный вариант)

1. Создайте проект на https://supabase.com
2. Перейдите в Settings → Database
3. Скопируйте Connection String (URI)
4. Добавьте его как `DATABASE_URL` в Vercel

### Вариант 3: Другой провайдер PostgreSQL

Используйте connection string в формате:
```
postgresql://user:password@host:5432/database
```

## Выполнение миграций базы данных

После настройки `DATABASE_URL`:

```powershell
# Получите переменные окружения локально
vercel env pull .env.local

# Выполните миграции
npx prisma migrate deploy
```

Или выполните миграции через Vercel CLI:
```powershell
vercel env pull .env.local
npx prisma migrate deploy
```

## ✅ Проверка после настройки

1. Откройте https://receiptone-landing.vercel.app
2. Проверьте форму заявки - отправьте тестовую заявку
3. Проверьте страницы:
   - https://receiptone-landing.vercel.app/privacy
   - https://receiptone-landing.vercel.app/terms
   - https://receiptone-landing.vercel.app/robots.txt
   - https://receiptone-landing.vercel.app/sitemap.xml

## 🔗 Полезные ссылки

- Проект в Vercel: https://vercel.com/alexds-projects-110e6fa8/receiptone-landing
- Логи деплоя: https://vercel.com/alexds-projects-110e6fa8/receiptone-landing/deployments
- Переменные окружения: https://vercel.com/alexds-projects-110e6fa8/receiptone-landing/settings/environment-variables

