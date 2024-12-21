<!-- src\components\ProductCard.vue -->
<template>
  <div class="w-60 flex-shrink-0 border rounded-lg shadow-md p-4">
    <!-- Ссылка на страницу товара с изображением -->
    <router-link :to="'/product/' + product.id" class="block">
      <img
        :src="product.imageUrl"
        :alt="product.name"
        class="w-full h-40 object-cover rounded-md mb-4"
      />
    </router-link>
    <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
    <p class="text-gray-600 mb-4">{{ product.price }} руб.</p>
    <!-- Кнопка для просмотра товара с обёрткой router-link -->
    <router-link
      :to="'/product/' + product.id"
      class="bg-blue-500 text-white py-2 px-4 rounded block text-center hover:bg-blue-600"
    >
      Посмотреть товар
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

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
