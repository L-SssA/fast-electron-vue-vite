<template>
  <div>count: {{ store.count }}</div>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore() 
</script>

<style scoped lang="scss"></style>