<template>

  <v-btn-toggle class="w-100 d-flex justify-space-between">
    <v-btn elevation="4" variant="tonal" rounded="lg" icon="mdi-wifi-strength-2"
      @click="defense.device.buttonBeamWidth()">
      <v-icon color="surface" />
    </v-btn>
    <v-btn elevation="4" variant="tonal" rounded="lg" icon="mdi-wifi" @click="defense.device.buttonBeamIntensity()">
      <v-icon color="surface" />
    </v-btn>
  </v-btn-toggle>

</template>

<script setup lang="ts">

import { useDefenseStore } from '@/stores/defense';

const defense = useDefenseStore();

</script>
