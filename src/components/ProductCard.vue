<template>
  <div class="product-card">
    <router-link :to="'/product/' + product.id">
      <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    </router-link>
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }} руб.</p>
    <!-- Кнопка с обёрткой router-link -->
    <router-link :to="'/product/' + product.id" class="view-product-button">
      <button>Посмотреть товар</button>
    </router-link>
  </div>
</template>

<script lang="ts">
// Определяем основной компонент приложения
import '../assets/styles/ProductCard.css' // Импортируем файл стилей

import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<{
        id: number
        name: string
        price: number
        imageUrl: string
      }>,
      required: true,
    },
  },
})
</script>
