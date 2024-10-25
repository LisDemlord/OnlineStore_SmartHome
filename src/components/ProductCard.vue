<template>
  <div class="product-card">
    <!-- Ссылка на страницу товара с изображением -->
    <router-link :to="'/product/' + product.id">
      <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    </router-link>
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }} руб.</p>
    <!-- Кнопка для просмотра товара с обёрткой router-link -->
    <router-link :to="'/product/' + product.id" class="view-product-button">
      <button>Посмотреть товар</button>
    </router-link>
  </div>
</template>

<script lang="ts">
// Импорт стилей для карточки товара
import '../assets/styles/ProductCard.css'

import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'ProductCard', // Уникальное имя компонента для идентификации
  props: {
    product: {
      type: Object as PropType<{
        id: number
        name: string
        price: number
        imageUrl: string
      }>,
      required: true, // Обязательный пропс для передачи данных о товаре
    },
  },
})
</script>
