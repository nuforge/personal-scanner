<template>
  <v-btn size="small" :disabled="!state.powered">F<sub>1</sub></v-btn>
  <v-btn size="small" :disabled="!state.powered">F<sub>2</sub></v-btn>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/scanner';
const state = useStateStore()

</script>
