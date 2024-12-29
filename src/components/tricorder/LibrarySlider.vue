<template>
  <v-sheet class="bg-background px-2 ma-0 rounded-lg">
    <v-slider direction="vertical" v-model="slider" min="-1" max="1" step="0.01" :thumb-color="trackColor"
      :track-color="deltaNeg ? trackColor : 'surface'" :thumb-size="valueSize"
      :track-fill-color="deltaPos ? trackColor : 'surface'" track-size="16" @start="startDrag" @end="endDrag"
      :disabled="!state.powered">
    </v-slider>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStateStore } from '@/stores/state';
const state = useStateStore()

const slider = ref(0)
const scale = ref(.2)
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


const valueSize = computed(() => {
  return Math.abs(deltaValue.value) * scale.value
})

const trackColor = computed(() => {
  const sum = deltaValue.value
  if (sum === 0) return 'text'
  return sum != 0 && sum > 0 ? 'primary' : 'warning'
})

const startDrag = () => {
  initVal.value = slider.value
}

const endDrag = () => {
  state.applyDelta(slider.value)
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
