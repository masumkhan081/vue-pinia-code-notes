<template>
  <div class="about">
    <h1>About</h1>

    <button class="btn-counter">{{ storeCounter.count }}</button>
  </div>
</template>

<script setup> 
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
</script>

<style>
.btn-counter {
  color: brown;
}
</style>
