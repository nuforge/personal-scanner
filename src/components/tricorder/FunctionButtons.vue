<template>
  <v-btn size="small" :disabled="scanner.powered">F<sub>1</sub></v-btn>
  <v-btn size="small" :disabled="scanner.powered">F<sub>2</sub></v-btn>
</template>

<script setup lang="ts">
import { useScannerStore } from '@/stores/scanner';
const scanner = useScannerStore()

</script>
