<template>
  <v-card flat>
    <v-card-text class="d-inline-flex">
      <v-row class="bg-background rounded-lg pa-2 ga-2" no-gutters>
        <v-col cols="auto">
          <v-btn-toggle class="bg-surface" v-model="state.deviceInput" multiple>
            <v-btn stacked :text="button" v-for="button in buttons" :key="button" append-icon="mdi-label"
              variant="plain" :value="button">
              <template #append>
                <v-icon :color="!state.deviceInput.includes(button) ? 'disabled' : 'success'"
                  :disabled="!state.deviceInput.includes(button)" icon="mdi-label"></v-icon>
              </template></v-btn>
          </v-btn-toggle>
        </v-col>
        <v-col cols="auto">
          <div class="d-flex flex-column bg-surface pa-1 rounded">
            <v-icon v-for="button in buttons" :key="button"
              :icon="!state.deviceInput.includes(button) ? 'mdi-label-outline' : 'mdi-label-variant'"
              :color="!state.deviceInput.includes(button) ? 'error' : 'success'"
              :disabled="!state.deviceInput.includes(button)"></v-icon>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
const state = useStateStore()

// Ensure deviceInput is typed as an array of strings

const buttons = ['GEO', 'MET', 'BIO']


</script>
