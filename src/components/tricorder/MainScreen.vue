<template>
  <v-card border="text md" class="bg-background rounded" variant="outlined" min-height="256">
    <v-card-text>
      <DataCard />
      <DataScreen />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import DataCard from '@/components/tricorder/screens/DataCard.vue';
import DataScreen from './screens/DataScreen.vue';

</script>
