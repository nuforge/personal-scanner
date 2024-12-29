<template>
  <v-item-group>
    <v-item v-for="light in lights" :key="light">
      <v-btn :prepend-icon="state.getIcon(light)" variant="text" @click="state.toggleSystem(light)"
        :disabled="!state.powered" append-icon="mdi-checkbox-blank" block class="d-flex justify-space-between"
        :text="show ? light : undefined">
        <template #prepend>
          <v-icon :color="state.checkActive(light) ? state.getColor(light) : 'disabled'"
            :disabled="!state.checkPowered(light)"></v-icon>
          <v-tooltip activator="parent"><v-icon></v-icon> {{ light }}
          </v-tooltip>
        </template>
        <template #append>
          <v-icon :icon="state.checkPowered(light) ? 'mdi-checkbox-blank' : 'mdi-checkbox-blank-outline'"
            :disabled="!state.checkActive(light)" color="success"></v-icon>
        </template>
      </v-btn>
    </v-item>
  </v-item-group>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
const lights = ['alpha', 'beta', 'delta', 'gamma']
const state = useStateStore()

const show = false

</script>
