<template>
  <v-switch v-model="state.powerSwitch" inset color="green" density="compact" variant="filled" append-icon="mdi-power"
    false-icon="mdi-power-off" @click.stop>

  </v-switch>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';

const state = useStateStore()

</script>

<style scoped></style>
