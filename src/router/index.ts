// Импортируем необходимые функции для создания маршрутизатора
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'

// Определяем маршруты приложения
const routes = [
  { path: '/', name: 'Home', component: Home }, // Главная страница
  { path: '/catalog', name: 'Catalog', component: Catalog }, // Страница каталога
  { path: '/cart', name: 'Cart', component: Cart }, // Страница корзины
  { path: '/product/:id', name: 'Product', component: Product, props: true }, // Страница товара
]

// Создаем экземпляр маршрутизатора
const router = createRouter({
  history: createWebHistory(), // Используем историю браузера
  routes, // Определяем маршруты
})

// Экспортируем маршрутизатор для использования в приложении
export default router
