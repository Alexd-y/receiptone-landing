# 🔐 Push в GitHub с Personal Access Token

Git не может запросить credentials интерактивно. Используйте один из способов ниже.

## ✅ Способ 1: Встроить токен в URL (быстро)

```powershell
cd D:\Developer\ReceiptOne\receiptone-landing

# Замените YOUR_TOKEN на ваш Personal Access Token
& "C:\Program Files\Git\bin\git.exe" remote set-url origin https://YOUR_TOKEN@github.com/Alexd-y/receiptone-landing.git

# Выполните push
& "C:\Program Files\Git\bin\git.exe" push -u origin main
```

**После успешного push верните URL обратно (без токена):**
```powershell
& "C:\Program Files\Git\bin\git.exe" remote set-url origin https://github.com/Alexd-y/receiptone-landing.git
```

---

## ✅ Способ 2: Использовать GitHub Desktop (рекомендуется)

1. Скачайте: https://desktop.github.com/
2. Установите и войдите в GitHub
3. File → Add Local Repository
4. Выберите: `D:\Developer\ReceiptOne\receiptone-landing`
5. Нажмите "Publish repository"

**Это самый простой способ!**

---

## ✅ Способ 3: Создать файл .git-credentials

1. Создайте файл `%USERPROFILE%\.git-credentials` с содержимым:
```
https://YOUR_TOKEN@github.com
```

2. Настройте Git:
```powershell
& "C:\Program Files\Git\bin\git.exe" config --global credential.helper store
```

3. Выполните push:
```powershell
& "C:\Program Files\Git\bin\git.exe" push -u origin main
```

---

## ✅ Способ 4: Использовать GitHub CLI

Если установлен GitHub CLI:

```powershell
# Войдите в GitHub
gh auth login

# Выполните push через gh
cd D:\Developer\ReceiptOne\receiptone-landing
gh repo create Alexd-y/receiptone-landing --public --source=. --remote=origin --push
```

---

## 📝 Создание Personal Access Token

1. Откройте: https://github.com/settings/tokens
2. "Generate new token" → "Generate new token (classic)"
3. Название: `ReceiptOne Landing`
4. Scope: выберите **`repo`**
5. Нажмите "Generate token"
6. **Скопируйте токен** (показывается только один раз!)

---

## 🎯 Рекомендация

**Используйте GitHub Desktop** - это самый простой и надежный способ:
- ✅ Не нужно вручную вводить токены
- ✅ Графический интерфейс
- ✅ Автоматически создает репозиторий
- ✅ Работает без проблем с credentials

