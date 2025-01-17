<template>
  <v-item-group>
    <v-item v-for="light in lights" :key="light">
      <v-btn :prepend-icon="scanner.device.getIcon(light)" variant="text" @click="scanner.device.toggleSystem(light)"
        :disabled="!scanner.device.powered" append-icon="mdi-checkbox-blank" block class="d-flex justify-space-between"
        :text="show ? light : undefined">
        <template #prepend>
          <v-icon :color="scanner.device.checkActive(light) ? scanner.device.getColor(light) : 'disabled'"
            :disabled="!scanner.device.checkPowered(light)"></v-icon>
          <v-tooltip activator="parent"><v-icon></v-icon> {{ light }}
          </v-tooltip>
        </template>
        <template #append>
          <v-icon :icon="scanner.device.checkPowered(light) ? 'mdi-checkbox-blank' : 'mdi-checkbox-blank-outline'"
            :disabled="!scanner.device.checkActive(light)" color="success"></v-icon>
        </template>
      </v-btn>
    </v-item>
  </v-item-group>
</template>

<script setup lang="ts">
import { useScannerStore } from '@/stores/scanner';
const lights = ['alpha', 'beta', 'delta', 'gamma']
const scanner = useScannerStore()

const show = false

</script>
