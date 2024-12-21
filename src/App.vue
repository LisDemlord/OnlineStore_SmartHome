<!-- src\App.vue -->
<template>
  <div>
    <header class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 shadow-md">
      <nav class="flex space-x-4">
        <router-link to="/" class="view-router-button">
          <button class="bg-white text-blue-600 py-2 px-4 rounded-lg shadow hover:bg-gray-100">
            Главная
          </button>
        </router-link>
        <router-link to="/catalog" class="view-router-button">
          <button class="bg-white text-blue-600 py-2 px-4 rounded-lg shadow hover:bg-gray-100">
            Каталог
          </button>
        </router-link>
        <router-link to="/cart" class="view-router-button">
          <button class="bg-white text-blue-600 py-2 px-4 rounded-lg shadow hover:bg-gray-100">
            Корзина
          </button>
        </router-link>
      </nav>
    </header>
    <main class="p-6 bg-gray-50 min-h-screen">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import './assets/main.css'

export default {
  name: 'App',
}
</script>
