<template>
  <v-sheet class="bg-background d-inline-flex flex-column rounded pa-1">
    <v-icon v-for="button in buttons" :key="button"
      :icon="!scanner.deviceInput.includes(button) ? 'mdi-label-outline' : 'mdi-label-variant'"
      :color="!scanner.deviceInput.includes(button) ? 'error' : 'success'"
      :disabled="!scanner.deviceInput.includes(button)"></v-icon>
  </v-sheet>
</template>

<script setup lang="ts">
import { useScannerStore } from '@/stores/scanner';
const scanner = useScannerStore()

// Ensure deviceInput is typed as an array of strings

const buttons = ['GEO', 'MET', 'BIO']


</script>
