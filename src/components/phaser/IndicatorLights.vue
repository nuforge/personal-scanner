<template>
  <v-list class="pa-0" rounded="sm" density="compact">
    <v-list-item class="bg-background">
      <v-icon v-for="lightIndex in 10" :key="lightIndex" size="small"
        :icon="defense.device.width >= lightIndex ? `mdi-checkbox-blank` : `mdi-checkbox-blank-outline`"
        :color="defense.device.width >= lightIndex ? defense.device.lightBeamWidth() : defaultColor"></v-icon>
    </v-list-item>
    <v-list-item class="bg-background">
      <v-icon v-for="lightIndex in 10" :key="lightIndex" size="small"
        :icon="defense.device.intensity >= lightIndex ? `mdi-checkbox-blank` : `mdi-checkbox-blank-outline`"
        :color="defense.device.intensity >= lightIndex ? defense.device.lightBeamIntensity() : defaultColor"></v-icon>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { useDefenseStore } from '@/stores/defense';

const defaultColor = 'surface'

const defense = useDefenseStore();



</script>
