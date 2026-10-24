<template>
  <div>
    <div>💖 Hello World!</div>
    <div>Welcome to your Electron application.</div>
    <button class="btn" @click="store.increment()">add</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore() 
</script>

<style scoped lang="scss"></style>