# React Microfrontend Template

## Описание

Это шаблон React приложения, созданный с использованием микрофронтов, TypeScript, и других современных инструментов для разработки масштабируемых и поддерживаемых веб-приложений.

## Предварительные требования

*   [Node.js](https://nodejs.org/) (версия 16 или выше)
*   [npm](https://www.npmjs.com/) (версия 7 или выше)
*   [Git](https://git-scm.com/)

## Структура проекта

*   `src/app/`: Основной модуль приложения.
*   `src/features/`: Независимые фичи (микрофронты).
*   `src/pages/`: Страницы приложения.
*   `src/shared/`: Переиспользуемые компоненты и утилиты.

## Конфигурация

*   `tsconfig.json`: Конфигурация TypeScript.
*   `.eslintrc.js`: Конфигурация ESLint.
*   `.prettierrc.js`: Конфигурация Prettier.
*   `webpack.config.js`: Конфигурация Webpack (для микрофронтов).

## Запуск проекта

*   `npm start`: Запуск приложения в режиме разработки.
*   `npm run build`: Сборка приложения для production.
*   `npm test`: Запуск юнит тестов.
*   `npm run e2e`: Запуск E2E тестов.
*   `npm run storybook`: Запуск Storybook.
