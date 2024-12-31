<template>
  <v-btn icon="mdi-laser-pointer" variant="tonal" rounded="lg" color="warning" class="px-16  elevation-4"
    @mousedown="defense.device.buttonTrigger()" @mouseup="defense.device.releaserTrigger()"
    @mouseleave="defense.device.releaserTrigger()">
    <v-icon color="surface"> </v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { useDefenseStore } from '@/stores/defense';

const defense = useDefenseStore();


</script>
