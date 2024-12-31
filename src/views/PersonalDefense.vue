<template>

  <v-card class="bg-surface d-flex flex-column align-center my-10 mx-auto rounded-pill pb-16" max-width="230">
    <BeamEmitter />
    <v-row class="my-2 ">
      <v-col>
        <v-btn variant="tonal" class="py-14 rounded-ts-xl elevation-3"></v-btn>
      </v-col>
      <v-col>
        <v-btn variant="tonal" class="py-14 rounded-te-xl elevation-3"></v-btn>
      </v-col>
    </v-row>
    <v-sheet class="d-flex flex-column align-center justify-center py-2 ga-4 pb-16 mb-16">
      <IndicatorBars />
      <v-sheet class="d-flex flex-column align-center bg-background py-2 px-6 rounded-lg ga-2">
        <IntensityButtons />
        <TriggerButton />
      </v-sheet>
    </v-sheet>
  </v-card>
</template>

<script setup lang="ts">
import BeamEmitter from '@/components/phaser/BeamEmitter.vue';
import IndicatorBars from '@/components/phaser/IndicatorBars.vue';
import IntensityButtons from '@/components/phaser/IntensityButtons.vue';
import TriggerButton from '@/components/phaser/TriggerButton.vue';

</script>
