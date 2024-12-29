<template>
  <v-switch v-model="state.powerSwitch" inset color="green" density="compact" variant="filled" icon="mdi-power"
    false-icon="mdi-power-off" true-icon="mdi-power">

    <template v-slot:prepend>
      <v-icon :color="state.getLight('power') ? `disabled` : state.getColor('power')" :icon="`mdi-power`"
        size="large" />
    </template>
  </v-switch>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';

const state = useStateStore()

</script>

<style scoped></style>
