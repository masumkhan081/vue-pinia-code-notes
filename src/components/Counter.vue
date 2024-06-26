<template>
  <div class="home">
    <h3>Count: {{ storeCounter.count }}</h3>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
</script>
