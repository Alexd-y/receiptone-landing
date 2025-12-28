/**
 * Конфигурация GitHub репозитория
 * Используется в скриптах и документации
 */

import config from "../.github-config.json";

export const GITHUB_USERNAME = config.githubUsername;
export const REPOSITORY_NAME = config.repositoryName;
export const REPOSITORY_URL = config.repositoryUrl;

/**
 * Получить URL репозитория GitHub
 */
export function getGitHubRepositoryUrl(): string {
  return `https://github.com/${GITHUB_USERNAME}/${REPOSITORY_NAME}.git`;
}

/**
 * Получить команду для добавления remote
 */
export function getGitRemoteCommand(): string {
  return `git remote add origin ${getGitHubRepositoryUrl()}`;
}

