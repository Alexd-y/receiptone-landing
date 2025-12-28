# GitHub Configuration

Конфигурация GitHub репозитория хранится в файле `.github-config.json`.

## Текущая конфигурация

- **GitHub Username:** `Alexd-y`
- **Repository Name:** `receiptone-landing`
- **Repository URL:** `https://github.com/Alexd-y/receiptone-landing.git`

## Изменение конфигурации

Если нужно изменить GitHub username или название репозитория, отредактируйте файл `.github-config.json`:

```json
{
  "githubUsername": "Alexd-y",
  "repositoryName": "receiptone-landing",
  "repositoryUrl": "https://github.com/Alexd-y/receiptone-landing.git"
}
```

## Использование в коде

В TypeScript коде можно использовать утилиты из `lib/github-config.ts`:

```typescript
import { GITHUB_USERNAME, REPOSITORY_URL, getGitHubRepositoryUrl } from "@/lib/github-config";

// Получить URL репозитория
const repoUrl = getGitHubRepositoryUrl(); // https://github.com/Alexd-y/receiptone-landing.git

// Получить команду для добавления remote
const command = getGitRemoteCommand(); // git remote add origin https://github.com/Alexd-y/receiptone-landing.git
```

## Использование в скриптах

PowerShell скрипт `push-and-deploy.ps1` использует переменные:

```powershell
$GITHUB_USERNAME = "Alexd-y"
$REPOSITORY_NAME = "receiptone-landing"
$REPOSITORY_URL = "https://github.com/$GITHUB_USERNAME/$REPOSITORY_NAME.git"
```

## Обновление документации

После изменения конфигурации обновите следующие файлы вручную:

- `FINAL_DEPLOY_STEPS.md`
- `GITHUB_PUSH_FIREBASE.md`
- `DEPLOY_FIREBASE.md`
- `DEPLOY.md`
- `GITHUB_SETUP.md`
- `push-and-deploy.ps1`

Или используйте поиск и замену по всему проекту:
- Найдите: `github.com/YOUR_USERNAME` или `Alexd-y`
- Замените на новый username

