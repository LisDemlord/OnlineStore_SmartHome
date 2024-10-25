<template>
  <div>
    <header>
      <nav>
        <!-- Ссылки для навигации по маршрутам приложения -->
        <router-link to="/">Главная</router-link> |
        <router-link to="/catalog">Каталог</router-link> |
        <router-link to="/cart">Корзина</router-link>
      </nav>
    </header>
    <main>
      <!-- Компонент, который будет отображать контент в зависимости от текущего маршрута -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
// Определяем основной компонент приложения
export default {
  name: 'App', // Имя компонента
}
</script>

<style>
/* Стили для заголовка */
header {
  background-color: #f8f9fa; /* Цвет фона заголовка */
  padding: 1rem; /* Отступы внутри заголовка */
}

/* Стили для ссылок навигации */
nav a {
  margin-right: 1rem; /* Отступ справа для ссылок */
}

/* Стили для основного контента */
main {
  padding: 2rem; /* Отступы внутри основного контента */
}
</style>
