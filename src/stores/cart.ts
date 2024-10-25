import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Array<{
      id: number
      name: string
      price: number
      quantity: number
    }>,
  }),
  actions: {
    addToCart(product: { id: number; name: string; price: number }) {
      const existingItem = this.items.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(productId: number) {
      const itemIndex = this.items.findIndex(item => item.id === productId)
      if (itemIndex !== -1) {
        if (this.items[itemIndex].quantity > 1) {
          this.items[itemIndex].quantity -= 1
        } else {
          this.items.splice(itemIndex, 1)
        }
      }
    },
  },
})
