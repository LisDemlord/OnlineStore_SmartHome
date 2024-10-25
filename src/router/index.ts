// Импортируем необходимые функции и компоненты из библиотеки Vue Router
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' // Импортируем компонент главной страницы
import Catalog from '../views/Catalog.vue' // Импортируем компонент каталога
import Product from '../views/Product.vue' // Импортируем компонент страницы продукта
import Cart from '../views/Cart.vue' // Импортируем компонент корзины

// Определяем массив маршрутов
const routes = [
  {
    path: '/', // URL-адрес для главной страницы
    name: 'Home', // Имя маршрута
    component: Home, // Компонент, который будет отображаться при переходе по этому маршруту
  },
  {
    path: '/catalog', // URL-адрес для страницы каталога
    name: 'Catalog', // Имя маршрута
    component: Catalog, // Компонент, который будет отображаться при переходе по этому маршруту
  },
  {
    path: '/product/:id', // URL-адрес для страницы продукта с параметром id
    name: 'Product', // Имя маршрута
    component: Product, // Компонент, который будет отображаться при переходе по этому маршруту
  },
  {
    path: '/cart', // URL-адрес для страницы корзины
    name: 'Cart', // Имя маршрута
    component: Cart, // Компонент, который будет отображаться при переходе по этому маршруту
  },
]

// Создаем экземпляр маршрутизатора с использованием истории браузера
const router = createRouter({
  history: createWebHistory(), // Используем режим истории для управления URL
  routes, // Передаем массив маршрутов
})

// Экспортируем созданный маршрутизатор для использования в приложении
export default router
