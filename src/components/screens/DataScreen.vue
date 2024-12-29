<template>
  <v-table class="text-center" density="compact" hover>
    <tbody>
      <tr v-for="[key, system] in state.getActiveSystems()" :key="key">
        <td><v-icon :icon="system.icon" :color="system.color"></v-icon> </td>
        <td>{{ system.value
          }}</td>
      </tr>
    </tbody>
  </v-table>
  <v-btn prepend-icon="mdi-circle-outline" append-icon="mdi-circle" text="data" :color="color" variant="tonal"
    :disabled="!state.powered" block class="d-flex justify-space-between">
    <template #prepend>
      <v-icon :color="appearance"></v-icon>
    </template>
    <template #default>
      Label
    </template>
    <template #append>
      <v-icon :color="appearance"></v-icon>
    </template>
  </v-btn>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import { useStateStore } from '@/stores/state';
const state = useStateStore()

const color = computed(() => `rgb(${state.getValue('delta')}, ${state.getValue('gamma')}, ${state.getValue('beta')})`)

const appearance = computed(() => `rgba(${state.getValue('delta')}, ${state.getValue('gamma')}, ${state.getValue('beta')}, ${state.getValue('alpha')})`)



</script>
