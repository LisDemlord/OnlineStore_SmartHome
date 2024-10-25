<template>
  <div class="header-container"><h1>Каталог товаров</h1></div>
  <div class="product-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script lang="ts">
// Определяем основной компонент приложения
import '../assets/styles/Catalog.css' // Импортируем файл стилей
import '../assets/base.css'

import { defineComponent } from 'vue'
import ProductCard from '../components/ProductCard.vue'

export default defineComponent({
  name: 'Catalog',
  components: { ProductCard },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Умная лампа',
          price: 1500,
          imageUrl: '/src/assets/images/smart-lamp.jpg',
        },
        {
          id: 2,
          name: 'Умная розетка',
          price: 2000,
          imageUrl: '/src/assets/images/smart-socket.jpg',
        },
      ],
    }
  },
})
</script>
