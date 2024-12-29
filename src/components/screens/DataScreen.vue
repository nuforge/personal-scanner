<template>
  <v-table class="text-center" density="compact" hover>
    <thead>
      <tr>
        <th class="text-center"><v-icon icon="mdi-check"></v-icon></th>
        <th class="text-center"><v-icon icon="mdi-battery-80"></v-icon></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="[key, system] in state.systems" :key="key">
        <td><v-icon icon="mdi-circle-small" :color="system.rgba" v-if="system.active"></v-icon> </td>

        <td>{{ Math.ceil(system.value / system.max * 100) }}%</td>
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
