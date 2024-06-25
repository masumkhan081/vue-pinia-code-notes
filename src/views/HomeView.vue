<template>
  <div class="home">
    <h1>Home</h1>

    <h3>Count: {{ count }}</h3>
    <h3>Count: {{ oddOrEven }}</h3>

    <div class="actions">
      <button @click="increaseCount">+</button>
      <button @click="decreaseCount">-</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const count = ref(0)
const oddOrEven = computed(() => {
  if (count.value % 2 == 0) {
    return 'even'
  } else {
    return 'odd'
  }
})

const increaseCount = () => {
  count.value++
}
const decreaseCount = () => {
  count.value--
}
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
