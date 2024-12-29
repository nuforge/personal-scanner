<template>
  <v-sheet class="d-inline-flex align-center">
    <v-btn-toggle class="bg-surface" v-model="state.deviceInput" multiple>
      <v-btn stacked :text="button" v-for="button in buttons" :key="button" append-icon="mdi-label" variant="plain"
        :value="button">
        <template #append>
          <v-icon :color="!state.deviceInput.includes(button) ? 'disabled' : 'success'"
            :disabled="!state.deviceInput.includes(button)" icon="mdi-label"></v-icon>
        </template></v-btn>
    </v-btn-toggle>
    <div class="bg-background d-flex flex-column pa-1 rounded">
      <v-icon v-for="button in buttons" :key="button"
        :icon="!state.deviceInput.includes(button) ? 'mdi-label-outline' : 'mdi-label-variant'"
        :color="!state.deviceInput.includes(button) ? 'error' : 'success'"
        :disabled="!state.deviceInput.includes(button)"></v-icon>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
const state = useStateStore()

// Ensure deviceInput is typed as an array of strings

const buttons = ['GEO', 'MET', 'BIO']


</script>
