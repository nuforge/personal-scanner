<template>
  <v-switch class="round-sm" v-model="scanner.device.power" inset color="green" density="compact" variant="filled"
    false-icon="mdi-power" true-icon="mdi-power-on" @click.stop>
  </v-switch>
</template>

<script setup lang="ts">
import { useScannerStore } from '@/stores/scanner';

const scanner = useScannerStore()

</script>
