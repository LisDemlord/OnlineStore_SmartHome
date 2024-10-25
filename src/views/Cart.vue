<template>
  <div class="header-container"><h1>Корзина</h1></div>
  <ul v-if="cartItems.length">
    <!-- Список товаров в корзине -->
    <li v-for="item in cartItems" :key="item.id">
      {{ item.name }} - {{ item.price }} руб. x {{ item.quantity }}
      <!-- Кнопка для удаления товара из корзины -->
      <button @click="removeFromCart(item.id)">Удалить один</button>
    </li>
  </ul>
  <!-- Сообщение о пустой корзине -->
  <p v-else>Ваша корзина пуста</p>
</template>

<script lang="ts">
// Импорт стилей для компонента корзины
import '../assets/styles/Cart.css'
import '../assets/base.css'

import { defineComponent, computed } from 'vue'
import { useCartStore } from '../stores/cart'

export default defineComponent({
  name: 'Cart', // Уникальное имя компонента для идентификации
  setup() {
    const cartStore = useCartStore()

    // Получаем товары из корзины
    const cartItems = computed(() => cartStore.items)

    // Функция для удаления товара из корзины
    const removeFromCart = (id: number) => {
      cartStore.removeFromCart(id)
    }

    return {
      cartItems,
      removeFromCart,
    }
  },
})
</script>
