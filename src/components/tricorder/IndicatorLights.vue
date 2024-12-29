<template>
  <v-list class="bg-background">
    <v-list-item v-for="light in lights" :key="light">
      <v-btn :prepend-icon="state.getIcon(light)" variant="text" @click="state.toggleSystem(light)" :text="light"
        :disabled="!state.powered" append-icon="mdi-checkbox-blank" block class="d-flex justify-space-between">
        <template v-slot:prepend>
          <v-icon :color="state.checkActive(light) ? state.getColor(light) : 'disabled'"
            :disabled="!state.checkPowered(light)"></v-icon>
          <v-tooltip activator="parent" location="bottom" content-class="bg-surface">{{ light }}
          </v-tooltip>
        </template>
        <template #default> <v-label>{{ light }}</v-label>
        </template>
        <template #append>
          <v-icon :icon="state.checkPowered(light) ? 'mdi-checkbox-blank' : 'mdi-checkbox-blank-outline'"
            :disabled="!state.checkActive(light)" color="success"></v-icon>
        </template>
      </v-btn>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
const lights = ['alpha', 'beta', 'delta', 'gamma']
const state = useStateStore()



</script>
