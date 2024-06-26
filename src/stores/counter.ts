import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2,

    oddOrEven: (state) => (state.count % 2 === 0 ? 'even' : 'odd')
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})
