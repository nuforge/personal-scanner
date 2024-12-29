<template>

  <v-table class="text-center">
    <thead>
      <tr>
        <th class="text-center">
          sys
        </th>
        <th class="text-center">
          pwr
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="system in state.systems.keys()" :key="system">
        <td><v-icon :icon="state.getIcon(system)" :color="state.getColor(system)"></v-icon> </td>
        <td>{{ state.getValue(system)
          }}</td>
      </tr>
    </tbody>
  </v-table>

  <v-card :style="{
    background: `rgba(${state.getValue('delta')}, ${state.getValue('gamma')},
  ${state.getValue('beta')},${state.getValue('alpha')})`
  }"><v-icon icon="mdi-home"></v-icon>
  </v-card>

</template>


<script setup lang="ts">
import { useStateStore } from '@/stores/state';
const state = useStateStore()

</script>
