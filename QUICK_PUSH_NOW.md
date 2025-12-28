# Быстрый Push в GitHub и Deploy в Vercel

## Вариант 1: Использовать batch файл (Windows)

Просто запустите:
```cmd
push-and-deploy.bat
```

## Вариант 2: Использовать PowerShell скрипт

```powershell
.\push-and-deploy.ps1
```

## Вариант 3: Выполнить команды вручную

### 1. Добавить и закоммитить изменения

```bash
git add -A
git commit -m "Update GitHub config to Alexd-y and migrate to Firebase"
```

### 2. Настроить remote (если еще не настроен)

```bash
git remote add origin https://github.com/Alexd-y/receiptone-landing.git
```

Или если remote уже существует, но нужно обновить URL:
```bash
git remote set-url origin https://github.com/Alexd-y/receiptone-landing.git
```

### 3. Запушить в GitHub

```bash
git push origin main
```

Если это первый push:
```bash
git branch -M main
git push -u origin main
```

### 4. Деплой в Vercel

#### Через CLI:
```bash
vercel --prod
```

#### Через веб-интерфейс:
1. Откройте https://vercel.com
2. Импортируйте проект из GitHub
3. Убедитесь, что все переменные окружения настроены (см. `FINAL_DEPLOY_STEPS.md`)
4. Нажмите "Deploy"

## Проверка

После выполнения команд проверьте:

1. ✅ Изменения появились на GitHub: https://github.com/Alexd-y/receiptone-landing
2. ✅ Деплой завершился успешно в Vercel
3. ✅ Сайт работает: `https://your-project.vercel.app`

## Если возникли ошибки

**Git push failed:**
- Убедитесь, что репозиторий существует на GitHub
- Проверьте права доступа к репозиторию
- Убедитесь, что вы авторизованы: `git config --global user.name` и `git config --global user.email`

**Vercel deploy failed:**
- Проверьте переменные окружения в Vercel
- Убедитесь, что Firebase credentials настроены правильно
- Проверьте логи деплоя в Vercel Dashboard

