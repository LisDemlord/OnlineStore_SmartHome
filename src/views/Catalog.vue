<!-- src\views\Catalog.vue -->
<template>
  <div class="p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Каталог товаров</h1>
    <div class="flex flex-wrap justify-start gap-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
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
