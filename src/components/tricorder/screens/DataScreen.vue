<template>
  <v-table class="text-center" density="compact" hover>
    <thead>
      <tr>
        <th class="text-center"><v-icon icon="mdi-check"></v-icon></th>
        <th class="text-center"><v-icon icon="mdi-battery-80"></v-icon></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="[key, system] in scanner.device.systems" :key="key">
        <td><v-icon icon="mdi-circle-small" :color="system.rgba" v-if="system.active"></v-icon> </td>

        <td>{{ Math.ceil(system.value / system.max * 100) }}%</td>
      </tr>
    </tbody>
  </v-table>
  <v-btn prepend-icon="mdi-circle-outline" append-icon="mdi-circle" text="data" :color="color" variant="tonal"
    :disabled="scanner.device.powered" block class="d-flex justify-space-between">
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
import { useScannerStore } from '@/stores/scanner';
const scanner = useScannerStore()

const color = computed(() => `rgb(${scanner.device.getValue('delta')}, ${scanner.device.getValue('gamma')}, ${scanner.device.getValue('beta')})`)

const appearance = computed(() => `rgba(${scanner.device.getValue('delta')}, ${scanner.device.getValue('gamma')}, ${scanner.device.getValue('beta')}, ${scanner.device.getValue('alpha')})`)



</script>
