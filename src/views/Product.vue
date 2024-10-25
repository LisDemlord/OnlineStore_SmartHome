<template>
  <div v-if="product">
    <!-- Название товара -->
    <div class="product-name">
      <h1>{{ product.name }}</h1>
    </div>
    <!-- Изображение товара -->
    <div class="block-image">
      <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    </div>

    <!-- Цена товара -->
    <p><strong>Цена:</strong> {{ product.price }} руб.</p>

    <!-- Описание товара -->
    <h2>Описание товара</h2>
    <p>{{ product.description }}</p>

    <!-- Характеристики товара -->
    <h2>Характеристики</h2>
    <table class="spec-table">
      <tr v-for="(value, key) in product.specs" :key="key">
        <td>
          <strong>{{ key }}</strong>
        </td>
        <td>{{ value }}</td>
      </tr>
    </table>

    <!-- Кнопка добавления товара в корзину -->
    <button @click="addToCart(product)">Добавить в корзину</button>
  </div>
  <!-- Сообщение об отсутствии товара -->
  <p v-else>Товар не найден</p>
</template>

<script lang="ts">
// Импорт стилей для компонента продукта
import '../assets/styles/Product.css'

import { defineComponent, computed } from 'vue'
import { useCartStore } from '../stores/cart'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Product', // Уникальное имя компонента для идентификации
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
