# 🔧 Исправление ошибки Git Credential Manager

Ошибка "Неправильная строка привязки" возникает из-за проблем с Git Credential Manager.

## ✅ Решение 1: Использовать Personal Access Token (рекомендуется)

### Шаг 1: Создайте Personal Access Token на GitHub

1. Откройте: https://github.com/settings/tokens
2. Нажмите "Generate new token" → "Generate new token (classic)"
3. Название: `ReceiptOne Landing`
4. Выберите срок действия (например, 90 дней или No expiration)
5. Выберите scope: **`repo`** (полный доступ к репозиториям)
6. Нажмите "Generate token"
7. **Скопируйте токен** (он показывается только один раз!)

### Шаг 2: Используйте токен вместо пароля

При выполнении `git push`:
- Username: `Alexd-y`
- Password: **вставьте ваш Personal Access Token** (не пароль от GitHub!)

---

## ✅ Решение 2: Использовать SSH (альтернатива)

### Шаг 1: Проверьте наличие SSH ключа

```powershell
Test-Path $env:USERPROFILE\.ssh\id_rsa.pub
```

Если файла нет, создайте SSH ключ:

```powershell
ssh-keygen -t ed25519 -C "rukkov@gmail.com"
# Нажмите Enter для всех вопросов
```

### Шаг 2: Добавьте SSH ключ в GitHub

1. Скопируйте публичный ключ:
```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | Set-Clipboard
```

2. Откройте: https://github.com/settings/keys
3. Нажмите "New SSH key"
4. Вставьте ключ и сохраните

### Шаг 3: Используйте SSH URL

```powershell
cd D:\Developer\ReceiptOne\receiptone-landing
& "C:\Program Files\Git\bin\git.exe" remote set-url origin git@github.com:Alexd-y/receiptone-landing.git
& "C:\Program Files\Git\bin\git.exe" push -u origin main
```

---

## ✅ Решение 3: Очистить кэш credentials

```powershell
# Очистить сохраненные credentials
& "C:\Program Files\Git\bin\git.exe" credential-manager-core erase
# Или через Windows Credential Manager:
# Win + R → control /name Microsoft.CredentialManager
# Удалите все записи с github.com
```

---

## ✅ Решение 4: Использовать GitHub Desktop (самый простой)

1. Скачайте: https://desktop.github.com/
2. Установите и войдите в GitHub
3. File → Add Local Repository
4. Выберите: `D:\Developer\ReceiptOne\receiptone-landing`
5. Нажмите "Publish repository"

---

## 🚀 Быстрое решение (используйте токен)

```powershell
cd D:\Developer\ReceiptOne\receiptone-landing

# Убедитесь, что remote настроен правильно
& "C:\Program Files\Git\bin\git.exe" remote set-url origin https://github.com/Alexd-y/receiptone-landing.git

# Попробуйте push (используйте токен как пароль)
& "C:\Program Files\Git\bin\git.exe" push -u origin main
```

Когда попросит пароль - используйте **Personal Access Token**, а не пароль от GitHub!

---

## 📝 Проверка настроек

```powershell
# Проверить remote
& "C:\Program Files\Git\bin\git.exe" remote -v

# Проверить настройки пользователя
& "C:\Program Files\Git\bin\git.exe" config --global user.name
& "C:\Program Files\Git\bin\git.exe" config --global user.email

# Проверить credential helper
& "C:\Program Files\Git\bin\git.exe" config --global credential.helper
```

