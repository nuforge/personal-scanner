<template>
  <v-label class="emrg mx-1">E<br />M<br />R<br />G</v-label>
  <v-btn :icon="state.emergency ? `mdi-alert-box` : `mdi-checkbox-blank`" class="rounded-lg"
    :color="state.emergency ? `warning` : `black`" @click="state.emergency = !state.emergency" variant="elevated">
    <v-icon :color="state.emergency ? `background` : `red`"></v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/scanner';
const state = useStateStore()


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
