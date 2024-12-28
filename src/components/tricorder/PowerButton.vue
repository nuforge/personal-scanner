<template>
  <v-btn text="PWR" stacked append-icon="mdi-power"
    :color="state.checkPowered('power') ? state.getColor('power') : `disabled`" variant="plain" density="compact"
    size="small"></v-btn>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
const state = useStateStore()

</script>
