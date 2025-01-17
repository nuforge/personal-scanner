<template>
  <v-label class="emrg mx-1">E<br />M<br />R<br />G</v-label>
  <v-btn :icon="scanner.emergency ? `mdi-alert-box` : `mdi-checkbox-blank`" class="rounded-lg"
    :color="scanner.emergency ? `warning` : `black`" @click="scanner.emergency = !scanner.emergency" variant="elevated">
    <v-icon :color="scanner.emergency ? `background` : `red`"></v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { useScannerStore } from '@/stores/scanner';
const scanner = useScannerStore()


</script>

<style scoped>
.emrg {
  font-size: 0.6rem;
  font-weight: bold;
  text-align: center;
}

.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: upright;

}
</style>
