<template>
  <v-btn :color="rgb" variant="tonal" :disabled="!defense.device.active" :width="`${width}%`"></v-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDefenseStore } from '@/stores/defense';

const defense = useDefenseStore();





const alpha = computed(() => defense.device.intensityPercent * 255)

const red = computed(() => 255)
const blue = computed(() => (defense.device.widthPercent * 255) / 100)
const green = computed(() => (defense.device.widthPercent * 255) / 5)

const width = computed(() => 100 * defense.device.widthPercent)

const rgb = computed(() => `rgba(${red.value}, ${blue.value}, ${green.value}, ${alpha.value})`)


</script>
