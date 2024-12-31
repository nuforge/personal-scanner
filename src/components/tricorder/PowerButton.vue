<template>
  <v-btn text="PWR" stacked append-icon="mdi-power"
    :color="scanner.device.checkPowered('power') ? scanner.device.getColor('power') : `disabled`" variant="plain"
    density="compact" size="small"></v-btn>
</template>

<script setup lang="ts">
import { useScannerStore } from '@/stores/scanner';

const scanner = useScannerStore()

</script>
