# 📦 Выгрузка проекта в GitHub

## Вариант 1: Установка Git + GitHub (рекомендуется)

### Шаг 1: Установите Git

1. **Скачайте Git для Windows:**
   - https://git-scm.com/download/win
   - Или: https://github.com/git-for-windows/git/releases/latest

2. **Установите Git:**
   - Запустите установщик
   - Выберите "Git from the command line and also from 3rd-party software"
   - Остальные настройки - по умолчанию
   - Перезапустите PowerShell после установки

### Шаг 2: Настройте Git (первый раз)

```powershell
git config --global user.name "AlexD"
git config --global user.email "rukkov@gmail.com"
```

### Шаг 3: Инициализируйте репозиторий

```powershell
cd D:\Developer\ReceiptOne\receiptone-landing
git init
git add .
git commit -m "ReceiptOne Landing - initial commit"
```

### Шаг 4: Создайте репозиторий на GitHub

1. Откройте https://github.com/new
2. Название репозитория: `receiptone-landing`
3. Описание: `ReceiptOne Landing Page - веб-страница для самозанятых и малого бизнеса`
4. Выберите Public или Private
5. НЕ добавляйте README, .gitignore или лицензию (они уже есть)
6. Нажмите "Create repository"

### Шаг 5: Подключите и запушьте код

GitHub покажет команды. Выполните:

```powershell
git remote add origin https://github.com/Alexd-y/receiptone-landing.git
git branch -M main
git push -u origin main
```

Если попросит авторизацию:
- Используйте Personal Access Token (не пароль)
- Создайте токен: https://github.com/settings/tokens
- Выберите scope: `repo`

---

## Вариант 2: GitHub Desktop (графический интерфейс)

1. **Скачайте GitHub Desktop:**
   - https://desktop.github.com/

2. **Установите и войдите** в свой GitHub аккаунт

3. **Создайте репозиторий:**
   - File → New Repository
   - Name: `receiptone-landing`
   - Local Path: `D:\Developer\ReceiptOne\receiptone-landing`
   - Нажмите "Create Repository"

4. **Закоммитьте и запушьте:**
   - В GitHub Desktop увидите все изменения
   - Напишите commit message: "ReceiptOne Landing - initial commit"
   - Нажмите "Commit to main"
   - Нажмите "Publish repository"

---

## Вариант 3: Через веб-интерфейс GitHub (без Git)

1. **Создайте репозиторий на GitHub:**
   - https://github.com/new
   - Название: `receiptone-landing`
   - Создайте репозиторий (можно с README)

2. **Загрузите файлы через браузер:**
   - В репозитории нажмите "uploading an existing file"
   - Перетащите все файлы из папки `receiptone-landing`
   - НЕ загружайте:
     - `node_modules/`
     - `.env`
     - `.next/`
     - `.vercel/`
   - Нажмите "Commit changes"

---

## Вариант 4: GitHub CLI (если установлен)

```powershell
# Войдите в GitHub
gh auth login

# Создайте репозиторий и запушьте код
cd D:\Developer\ReceiptOne\receiptone-landing
gh repo create receiptone-landing --public --source=. --remote=origin --push
```

---

## После выгрузки в GitHub

### Подключите Vercel к GitHub (для автоматических деплоев):

1. Откройте проект в Vercel: https://vercel.com/alexds-projects-110e6fa8/receiptone-landing
2. Перейдите в Settings → Git
3. Нажмите "Connect Git Repository"
4. Выберите GitHub и ваш репозиторий `receiptone-landing`
5. Теперь каждый push в GitHub будет автоматически деплоить проект!

---

## Что НЕ нужно коммитить в Git

Убедитесь, что в `.gitignore` есть:
- `node_modules/`
- `.env`
- `.env.local`
- `.next/`
- `.vercel/`
- `dist/`
- `build/`

Все эти файлы уже добавлены в `.gitignore` проекта.

---

## Быстрая команда (после установки Git)

```powershell
cd D:\Developer\ReceiptOne\receiptone-landing
git init
git add .
git commit -m "ReceiptOne Landing - initial commit"
# Создайте репозиторий на GitHub, затем:
git remote add origin https://github.com/Alexd-y/receiptone-landing.git
git branch -M main
git push -u origin main
```

