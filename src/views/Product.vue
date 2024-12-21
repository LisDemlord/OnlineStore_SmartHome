<!-- src\views\Product.vue -->
<template>
  <div v-if="product" class="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-800 mb-6">{{ product.name }}</h1>
    <img
      :src="product.imageUrl"
      :alt="product.name"
      class="w-full h-auto rounded-lg shadow-md mb-6"
    />
    <p class="text-xl text-gray-700 mb-4">
      <strong>Цена:</strong> {{ product.price }} руб.
    </p>
    <h2 class="text-2xl font-bold text-gray-800 mb-2">Описание товара</h2>
    <p class="text-gray-600 mb-6">{{ product.description }}</p>
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Характеристики</h2>
    <table class="w-full border-collapse border border-gray-300 text-left">
      <tr
        v-for="(value, key) in product.specs"
        :key="key"
        class="border-b border-gray-300"
      >
        <td class="py-3 px-4 font-semibold text-gray-800">{{ key }}</td>
        <td class="py-3 px-4 text-gray-600">{{ value }}</td>
      </tr>
    </table>
    <button
      @click="addToCart(product)"
      class="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 shadow-md mt-6"
    >
      Добавить в корзину
    </button>
  </div>
  <p v-else class="text-center text-gray-500 text-xl">Товар не найден</p>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useCartStore } from '../stores/cart'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Product',
  setup() {
    const route = useRoute()
    const cartStore = useCartStore()

    // Временные данные о товарах
    const products = [
      {
        id: 1,
        name: 'Умная лампа',
        price: 1500,
        imageUrl: '/src/assets/images/smart-lamp.jpg',
        description: 'Энергоэффективная лампа с управлением через смартфон.',
        specs: {
          Мощность: '10 Вт',
          'Цветовая температура': '2700K - 6500K',
          'Срок службы': '25,000 часов',
        },
      },
      {
        id: 2,
        name: 'Умная розетка',
        price: 2000,
        imageUrl: '/src/assets/images/smart-socket.jpg',
        description:
          'Управляемая розетка с функцией таймера и дистанционного управления.',
        specs: {
          Напряжение: '220-240 В',
          'Максимальная мощность': '16 А',
          'Поддержка Wi-Fi': 'Да',
        },
      },
    ]

    // Ищем товар по ID из маршрута
    const product = computed(() =>
      products.find(item => item.id === parseInt(route.params.id as string)),
    )

    // Функция добавления товара в корзину
    const addToCart = (product: {
      id: number
      name: string
      price: number
    }) => {
      cartStore.addToCart(product)
    }

    return {
      product,
      addToCart,
    }
  },
})
</script>
