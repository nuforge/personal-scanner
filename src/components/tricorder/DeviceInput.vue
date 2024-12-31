<template>
  <v-item-group v-model="scanner.deviceInput" multiple>
    <v-item v-slot="{ toggle }" v-for="button in buttons" :key="button" :value="button">
      <v-btn stacked variant="plain" append-icon="mdi-label" :text="button" @click="toggle">
        <template #append>
          <v-icon :color="!scanner.deviceInput.includes(button) ? 'disabled' : 'success'"
            :disabled="!scanner.deviceInput.includes(button)" icon="mdi-label"></v-icon>
        </template>
      </v-btn>
    </v-item>
  </v-item-group>
</template>

<script setup lang="ts">
import { useScannerStore } from '@/stores/scanner';
const scanner = useScannerStore()

// Ensure deviceInput is typed as an array of strings

const buttons = ['GEO', 'MET', 'BIO']


</script>
