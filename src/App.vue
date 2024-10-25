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
import './assets/styles/App.css' // Импортируем файл стилей

// Определяем основной компонент приложения
export default {
  name: 'App', // Имя компонента
}
</script>
