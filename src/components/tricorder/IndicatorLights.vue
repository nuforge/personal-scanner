<template>
  <v-list>
    <v-list-item v-for="light in lights" :key="light">
      <v-chip :text="light" :prepend-icon="state.getIcon(light)" variant="text" @click="state.toggleSystem(light)"
        :disabled="!state.powered">
        <template v-slot:prepend>
          <v-icon :color="state.getLight(light).state ? state.getColor(light) : 'disabled'"
            :disabled="!state.checkPowered(light)"></v-icon>
        </template>
      </v-chip>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
const lights = ['alpha', 'beta', 'delta', 'gamma']
const state = useStateStore()



</script>
