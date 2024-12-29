<script setup lang="ts">
import DataScreen from '../screens/DataScreen.vue';

</script>

<template>
  <v-container class="bg-background rounded-lg pa-2">
    <v-card border="primary md" class="bg-background rounded" variant="outlined">
      <v-card-title class="d-flex justify-space-between align-center">
        <v-spacer></v-spacer>
        <v-btn icon="mdi-close" variant="plain" size="small"></v-btn>
      </v-card-title>
      <v-card-text>

        <DataScreen />

      </v-card-text>
      <v-card-actions class="d-flex justify-space-between align-center">
        <v-btn icon="mdi-check" variant="plain" size="small" block class="rounded-lg"></v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
