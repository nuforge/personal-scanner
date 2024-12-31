<template>
  <v-sheet rounded="lg" class="d-flex flex-column bg-background w-100 pa-4 py-3 ga-1">
    <v-progress-linear class="bg-background" :model-value="defense.device.width * 10"
      :color="defense.device.lightBeamWidth()" :height="16"></v-progress-linear>
    <v-progress-linear :model-value="defense.device.intensity * 10" :color="defense.device.lightBeamIntensity()"
      :height="16"></v-progress-linear>
  </v-sheet>
</template>

<script setup lang="ts">
import { useDefenseStore } from '@/stores/defense';


const defense = useDefenseStore();



</script>
