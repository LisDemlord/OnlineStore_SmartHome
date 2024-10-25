<template>
  <div class="product-card">
    <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }} руб.</p>
    <router-link :to="'/product/' + product.id">Посмотреть товар</router-link>
  </div>
</template>

<script lang="ts">
// Определяем основной компонент приложения
import '../assets/style.css' // Импортируем файл стилей

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
