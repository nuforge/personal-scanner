<template>
  <v-sheet class="bg-background d-inline-flex flex-column rounded pa-1">
    <v-icon v-for="button in buttons" :key="button"
      :icon="!state.deviceInput.includes(button) ? 'mdi-label-outline' : 'mdi-label-variant'"
      :color="!state.deviceInput.includes(button) ? 'error' : 'success'"
      :disabled="!state.deviceInput.includes(button)"></v-icon>
  </v-sheet>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/scanner';
const state = useStateStore()

// Ensure deviceInput is typed as an array of strings

const buttons = ['GEO', 'MET', 'BIO']


</script>
