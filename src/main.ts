// Импортируем необходимые функции и компоненты
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Создаем экземпляр приложения Vue
const app = createApp(App)

// Подключаем маршрутизатор и хранилище Pinia
app.use(router)
app.use(createPinia())

// Монтируем приложение в элемент с ID 'app'
app.mount('#app')
