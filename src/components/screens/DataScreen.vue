<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Energy Level
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="system in state.systems.keys()" :key="system">
        <td><v-icon :icon="state.getIcon(system)" :color="state.getColor(system)"></v-icon> {{ system }}</td>
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
