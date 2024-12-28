<template>
  <v-sheet>
    <v-row class="bg-background">
      <v-col class="d-flex text-center align-center">
        <v-label><v-icon icon="mdi-arrow-up"></v-icon>A</v-label>
      </v-col>
      <v-col class="rounded-lg">
        <v-slider direction="vertical" v-model="slider" min="-1" max="1" step="0.1" :thumb-color="trackColor"
          :track-color="negative ? trackColor : 'surface'" :thumb-size="valueSize"
          :track-fill-color="positive ? trackColor : 'surface'" track-size="10" @end="endDrag"
          :disabled="!state.powered">
        </v-slider>
      </v-col>
      <v-col class="d-flex text-center align-center">
        <v-label><v-icon icon="mdi-arrow-down"></v-icon>
          B</v-label>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStateStore } from '@/stores/state';
const state = useStateStore()

const slider = ref(0)


// better to track change, not just the value

const positive = computed(() => {
  return slider.value > 0
})

const negative = computed(() => {
  return slider.value < 0
})
const valueSize = computed(() => {
  return Math.abs(slider.value) * 5 + 20
})

const trackColor = computed(() => {
  const sum = slider.value
  if (sum === 0) return 'text'
  return sum != 0 && sum > 0 ? 'primary' : 'warning'
})

const endDrag = () => {
  slider.value = 0
}

</script>
