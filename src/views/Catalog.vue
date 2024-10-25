<template>
  <!-- Контейнер для заголовка и списка продуктов -->
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
// Импорт стилей для компонента каталога
import '../assets/styles/Catalog.css'
import '../assets/base.css'

import { defineComponent } from 'vue'
import ProductCard from '../components/ProductCard.vue'

export default defineComponent({
  name: 'Catalog', // Уникальное имя компонента для идентификации
  components: { ProductCard }, // Регистрация компонента ProductCard
  data() {
    return {
      // Массив товаров для отображения в каталоге
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
