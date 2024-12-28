<template>
  <v-row>
    <v-col class="d-flex text-center align-center">
      <v-label><v-icon icon="mdi-arrow-up"></v-icon>A</v-label>
    </v-col>
    <v-col>
      <v-range-slider direction="vertical" v-model="slider" min="-1" max="1" step="0.1" :thumb-color="trackColor"
        track-color="transparent" prepend-icon="mdi-minus" thumb-size="20" append-icon="mdi-plus"
        :track-fill-color="trackColor" track-size="8" @end="endDrag" show-ticks="always"
        @click:append="slider[1] += 0.1" @click:prepend="slider[0] -= 0.1" :disabled="!state.powered">
      </v-range-slider>
    </v-col>
    <v-col class="d-flex text-center align-center">
      <v-label><v-icon icon="mdi-arrow-down"></v-icon>
        B</v-label>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="text-center">
      <v-label>Library</v-label>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStateStore } from '@/stores/state';
const state = useStateStore()

const slider = ref([0, 0])

/*const trackSize = computed(() => {
  const [min, max] = slider.value
  return Math.abs(min - max)
})*/

const trackColor = computed(() => {
  const [min, max] = slider.value
  const sum = min + max
  if (sum === 0) return 'text'
  return sum != 0 && sum > 0 ? 'primary' : 'warning'
})

const endDrag = () => {
  slider.value = [0, 0]
}

</script>
