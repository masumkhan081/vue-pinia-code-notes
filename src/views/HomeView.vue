<template>
  <div class="home">
    <h1>Home</h1>


    <Counter/>

    <h3>Count: {{ storeCounter.count }}</h3>
    <h3>Count: {{ storeCounter.oddOrEven }}</h3>


    <div class="actions">
      <button @click="storeCounter.increment">+</button>
      <button @click="storeCounter.decrement">-</button>
    </div>
    <div class="actions">
       <input type="number" v-model="storeCounter.count">
    </div>
  </div>
</template>

<script setup>
import Counter from '@/components/Counter.vue'
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
</script>

<style>
.home {
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  padding: 50px;
}

.actions {
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 15px;
  padding: 10px 0px;
}

.actions button {
  padding: 2px 15px;
  font-size: large;
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
