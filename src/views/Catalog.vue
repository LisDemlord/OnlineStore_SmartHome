<template>
  <h1>Каталог товаров</h1>
  <!-- Заголовок страницы каталога -->
  <ul>
    <!-- Перебираем массив products и создаем элемент списка для каждого продукта -->
    <li v-for="product in products" :key="product.id">
      <!-- Ссылка на страницу продукта с использованием router-link -->
      <router-link :to="'/product/' + product.id"
        >{{ product.name }} - {{ product.price }} руб.</router-link
      >
    </li>
  </ul>
</template>

<script lang="ts">
// Импортируем функцию defineComponent из Vue
import { defineComponent } from 'vue'

// Определяем компонент Catalog
export default defineComponent({
  name: 'Catalog', // Имя компонента
  data() {
    return {
      // Массив продуктов, который будет отображаться в каталоге
      products: [
        { id: 1, name: 'Умная лампа', price: 1500 }, // Продукт 1
        { id: 2, name: 'Умная розетка', price: 2000 }, // Продукт 2
      ],
    }
  },
})
</script>
