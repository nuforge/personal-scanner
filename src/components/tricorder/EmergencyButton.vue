<template>
  <v-btn :icon="state.emergency ? `mdi-alert-box` : `mdi-checkbox-blank`" class="rounded-lg"
    :color="state.emergency ? `warning` : `background`" @click="state.emergency = !state.emergency">
    <v-icon :color="state.emergency ? `background` : `red`"></v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
const state = useStateStore()


</script>
