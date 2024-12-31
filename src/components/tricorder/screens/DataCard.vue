<template>
  <v-sparkline :gradient="gradient" :model-value="value" height="100%" padding="24" :color="color"
    stroke-linecap="round" smooth>
  </v-sparkline>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScannerStore } from '@/stores/scanner';
const scanner = useScannerStore()

const color = computed(() => `rgb(${scanner.device.getValue('delta')}, ${scanner.device.getValue('gamma')}, ${scanner.device.getValue('beta')})`)


const value = computed(() => [
  scanner.device.getValue('alpha') as number,
  scanner.device.getValue('beta') as number,
  scanner.device.getValue('gamma') as number,
  scanner.device.getValue('delta') as number,
])

const gradient = computed(() => ['white', 'red', 'green', 'blue'],)



</script>
