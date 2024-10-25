<template>
  <div v-if="product">
    <!-- Проверяем, существует ли продукт -->
    <h1>{{ product.name }}</h1>
    <!-- Отображаем название продукта -->
    <p>Цена: {{ product.price }} руб.</p>
    <!-- Отображаем цену продукта -->
    <button @click="addToCart">Добавить в корзину</button>
    <!-- Кнопка для добавления продукта в корзину -->
  </div>
</template>

<script lang="ts">
// Импортируем необходимые функции и хранилище
import { defineComponent } from 'vue'
import { useCartStore } from '../stores/cart' // Импортируем хранилище корзины
import { useRoute } from 'vue-router' // Импортируем функцию для работы с маршрутом

export default defineComponent({
  name: 'Product', // Имя компонента
  data() {
    return {
      // Инициализируем переменную product как null
      product: null as { id: number; name: string; price: number } | null,
    }
  },
  setup() {
    const route = useRoute() // Получаем текущий маршрут
    const cartStore = useCartStore() // Получаем доступ к хранилищу корзины
    const products = [
      { id: 1, name: 'Умная лампа', price: 1500 }, // Продукт 1
      { id: 2, name: 'Умная розетка', price: 2000 }, // Продукт 2
    ]

    // Находим продукт по id, полученному из параметров маршрута
    const product = products.find(p => p.id === Number(route.params.id))

    return {
      product, // Возвращаем найденный продукт
      addToCart: () => {
        // Метод для добавления продукта в корзину
        if (product) {
          cartStore.addToCart(product) // Добавляем продукт в корзину
          alert('Товар добавлен в корзину') // Уведомляем пользователя
        }
      },
    }
  },
})
</script>
