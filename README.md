# Описание:

**Проект создан с использование фреймфорка Vue JS 3 и представялет онлайн магазин с тематикой "Умный дом".**

На данный момент реализованы:

- Каталог
- Корзина
- Карточка товара
- Добавление и удаление товара в корзине

## Параметры, заданные при создании проекта:

```
Vue.js - The Progressive JavaScript Framework

✔ Project name: … OnlineStore_SmartHome
✔ Package name: … onlinestore-smarthome
✔ Add TypeScript? … Yes
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … Yes
✔ Add Pinia for state management? … Yes
✔ Add Vitest for Unit Testing? … No
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No
```

## Основная структура проекта:

```
OnlineStore_SmartHome
├── index.html                      # Главный HTML-файл приложения, который загружает и инициализирует Vue.js приложение.
├── public                          # Директория для статических файлов, доступных для клиента.
│   └── favicon.png                 # Иконка сайта, отображаемая в вкладке браузера.
├── README.md                       # Файл с описанием проекта, инструкциями по установке и использованию.
└── src                             # Директория с исходным кодом приложения.
    ├── App.vue                     # Главный компонент Vue приложения, корень для всех других компонентов.
    ├── assets                      # Директория для хранения статических ресурсов (стили, изображения).
    │   ├── base.css                # Основной файл стилей с глобальными стилями для приложения.
    │   ├── images                  # Директория для хранения изображений, используемых в приложении.
    │   │   ├── smart-lamp.jpg      # Изображение умной лампы.
    │   │   └── smart-socket.jpg    # Изображение умной розетки.
    │   └── styles                  # Директория для файлов стилей, специфичных для компонентов.
    │       ├── App.css             # Стили для главного компонента приложения.
    │       ├── Cart.css            # Стили для страницы корзины.
    │       ├── Catalog.css         # Стили для страницы каталога товаров.
    │       ├── Home.css            # Стили для главной страницы.
    │       ├── ProductCard.css     # Стили для карточки товара.
    │       └── Product.css         # Стили для страницы товара.
    ├── components                  # Директория для Vue компонентов.
    │   └── ProductCard.vue         # Компонент для отображения карточки товара.
    ├── main.ts                     # Главный файл, инициализирующий Vue приложение.
    ├── router                      # Директория для настройки маршрутизации приложения.
    │   └── index.ts                # Файл с определением маршрутов приложения.
    ├── stores                      # Директория для управления состоянием приложения.
    │   └── cart.ts                 # Файл для управления состоянием корзины.
    └── views                       # Директория для представлений (страниц) приложения.
        ├── Cart.vue                # Страница корзины.
        ├── Catalog.vue             # Страница каталога товаров.
        ├── Home.vue                # Главная страница приложения.
        └── Product.vue             # Страница с подробной информацией о товаре.

```

# OnlineStore_SmartHome

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
