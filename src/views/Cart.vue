<template>
  <h1>Корзина</h1>
  <!-- Заголовок страницы корзины -->
  <ul v-if="cartItems.length">
    <!-- Проверяем, есть ли товары в корзине -->
    <li v-for="item in cartItems" :key="item.id">
      <!-- Перебираем товары в корзине -->
      {{ item.name }} - {{ item.price }} руб.
      <!-- Отображаем название и цену товара -->
    </li>
  </ul>
  <p v-else>Ваша корзина пуста</p>
  <!-- Сообщение, если корзина пуста -->
</template>

<script lang="ts">
// Импортируем необходимые функции и хранилище
import { defineComponent } from 'vue'
import { useCartStore } from '../stores/cart' // Импортируем хранилище корзины

export default defineComponent({
  name: 'Cart', // Имя компонента
  setup() {
    const cartStore = useCartStore() // Получаем доступ к хранилищу корзины
    return {
      cartItems: cartStore.items, // Возвращаем массив товаров из корзины
    }
  },
})
</script>
