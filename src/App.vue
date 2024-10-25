<template>
  <div>
    <header>
      <nav>
        <!-- Навигационное меню для перемещения по приложениям -->
        <router-link to="/" class="view-router-button">
          <button>Главная</button>
        </router-link>
        <router-link to="/catalog" class="view-router-button">
          <button>Каталог</button>
        </router-link>
        <router-link to="/cart" class="view-router-button">
          <button>Корзина</button>
        </router-link>
      </nav>
    </header>
    <main>
      <!-- Основной контент приложения, загружаемый через маршрутизацию -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import './assets/styles/App.css' // Импорт глобальных стилей приложения

export default {
  name: 'App', // Определение имени компонента
}
</script>
