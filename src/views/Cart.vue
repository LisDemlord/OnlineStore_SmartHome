<!-- src\views\Cart.vue -->
<template>
  <div class="p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Корзина</h1>
    <ul v-if="cartItems.length" class="space-y-4">
      <li
        v-for="item in cartItems"
        :key="item.id"
        class="flex justify-between items-center border-b py-4"
      >
        <span class="text-gray-700">
          {{ item.name }} - {{ item.price }} руб. x {{ item.quantity }}
        </span>
        <button
          @click="removeFromCart(item.id)"
          class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow"
        >
          Удалить один
        </button>
      </li>
    </ul>
    <p v-else class="text-gray-500 text-lg">Ваша корзина пуста</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useCartStore } from '../stores/cart'

export default defineComponent({
  name: 'Cart',
  setup() {
    const cartStore = useCartStore()
    const cartItems = computed(() => cartStore.items)
    const removeFromCart = (id: number) => cartStore.removeFromCart(id)

    return { cartItems, removeFromCart }
  },
})
</script>
