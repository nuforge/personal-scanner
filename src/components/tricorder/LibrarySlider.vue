<template>
  <v-sheet>
    <v-slider direction="vertical" v-model="slider" min="0" max="1" step="0.01" :thumb-color="thumbColor"
      track-size="20" :track-color="deltaNeg ? trackColor : 'background '" :thumb-size="slider ? 40 : 0"
      :track-fill-color="deltaPos ? trackColor : 'background '" @start="startDrag" @end="endDrag"
      :disabled="scanner.powered">
    </v-slider>
    <v-label>library</v-label>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useScannerStore } from '@/stores/scanner';
const scanner = useScannerStore()

const slider = ref(0)
const initVal = ref(0)


// better to track change, not just the value

// const positive = computed(() => {
//   return slider.value > 0
// })
// const negative = computed(() => {
//   return slider.value < 0
// })

const deltaPos = computed(() => {
  return deltaValue.value > 0
})
const deltaNeg = computed(() => {
  return deltaValue.value < 0
})

const deltaValue = computed(() => {
  return slider.value - initVal.value
})



const thumbColor = computed(() => {
  const sum = deltaValue.value
  if (sum === 0) return 'surface'
  return sum != 0 && sum > 0 ? 'success' : 'text'
})

const trackColor = computed(() => {
  const sum = deltaValue.value
  if (sum === 0) return 'text'
  return sum != 0 && sum > 0 ? 'success' : 'text'
})

const startDrag = () => {
  initVal.value = slider.value
}

const endDrag = () => {
  scanner.applyDelta(deltaValue.value)
  resetSlider()
}

const resetSlider = () => {
  initVal.value = 0
  slider.value = 0
}

</script>

<style scoped>
.v-slider.v-input--vertical:deep(.v-input__control) {
  min-height: 100px !important;
  height: 100%;
}
</style>
