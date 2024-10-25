// Импортируем функцию defineStore из библиотеки Pinia
import { defineStore } from 'pinia'

// Определяем хранилище для корзины с уникальным идентификатором 'cart'
export const useCartStore = defineStore('cart', {
  // Определяем состояние хранилища
  state: () => ({
    // Массив items будет хранить товары в корзине
    items: [] as Array<{ id: number; name: string; price: number }>, // Массив объектов с полями id, name и price
  }),
  // Определяем действия (actions) для работы с состоянием
  actions: {
    // Метод для добавления товара в корзину
    addToCart(product: { id: number; name: string; price: number }) {
      // Добавляем переданный продукт в массив items
      this.items.push(product)
    },
  },
})
