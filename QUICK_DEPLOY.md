# ⚡ Быстрый деплой за 5 минут

## Шаг 1: Подготовка Git (если еще не сделано)

```powershell
cd D:\Developer\ReceiptOne\receiptone-landing
git init
git add .
git commit -m "ReceiptOne Landing - готов к деплою"
```

## Шаг 2: Создайте репозиторий на GitHub

1. Откройте [github.com/new](https://github.com/new)
2. Название: `receiptone-landing`
3. Создайте репозиторий (можно приватный)
4. Выполните команды, которые GitHub покажет:

```powershell
git remote add origin https://github.com/Alexd-y/receiptone-landing.git
git branch -M main
git push -u origin main
```

## Шаг 3: Деплой на Vercel

1. Откройте [vercel.com/new](https://vercel.com/new)
2. Войдите через GitHub
3. Нажмите "Import" рядом с репозиторием `receiptone-landing`
4. **Настройте переменные окружения** (кнопка "Environment Variables"):

```
NEXT_PUBLIC_CANONICAL_URL=https://receipt-one.com
NEXT_PUBLIC_COMPANY_NAME=FLUTTER HORIZON
NEXT_PUBLIC_APP_NAME=ReceiptOne
LEAD_STORAGE=postgres
DATABASE_URL=your-postgres-connection-string
NODE_ENV=production
```

5. Нажмите "Deploy"
6. Готово! Ваш сайт будет доступен по адресу `receiptone-landing.vercel.app`

## ⚠️ Важно: Настройте базу данных

После деплоя нужно:
1. Создать PostgreSQL базу (Vercel Postgres, Supabase, или другой провайдер)
2. Обновить `DATABASE_URL` в переменных окружения Vercel
3. Выполнить миграции: `npx prisma migrate deploy` (через Vercel CLI или вручную)

## 📝 Полная инструкция

См. `DEPLOY.md` для детальных инструкций.

