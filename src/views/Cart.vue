<template>
  <div class="header-container"><h1>Корзина</h1></div>
  <ul v-if="cartItems.length">
    <li v-for="item in cartItems" :key="item.id">
      {{ item.name }} - {{ item.price }} руб. x {{ item.quantity }}
      <button @click="removeFromCart(item.id)">Удалить один</button>
    </li>
  </ul>
  <p v-else>Ваша корзина пуста</p>
</template>

<script lang="ts">
// Определяем основной компонент приложения
import '../assets/style.css' // Импортируем файл стилей

import { defineComponent, computed } from 'vue'
import { useCartStore } from '../stores/cart'

export default defineComponent({
  name: 'Cart',
  setup() {
    const cartStore = useCartStore()

    const cartItems = computed(() => cartStore.items)

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
