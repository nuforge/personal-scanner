<template>
  <v-responsive class=" rounded">
    <v-app :theme="theme">

      <v-main>
        <v-container class="bg-background">
          <v-row class="bg-surface">
            <v-col>
              <PowerSwitch />
              <v-divider></v-divider>
            </v-col>
          </v-row>
          <v-row class="bg-background">
            <v-col cols="auto">
              <v-card class="d-inline-flex flex-column">
                <PowerButton :disabled="!state.powered" />
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card class="d-inline-flex flex-column pa-2">
                <v-label class="text-subtitle-1">Σx</v-label>
                <v-label class="text-subtitle-1">sys</v-label>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card class="d-inline-flex flex-column" :disabled="!state.powered">
                <FunctionButtons />
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card class="d-inline-flex flex-column pa-2" :disabled="!state.powered">
                <v-label><v-icon icon="mdi-arrow-left"></v-icon> data</v-label>
                <v-label>sense <v-icon icon="mdi-arrow-right"></v-icon></v-label>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card class="d-inline-flex  pa-2" :disabled="!state.powered">
                <v-btn text="I" variant="flat" density="compact"></v-btn>
                <v-btn text="E" variant="flat" density="compact"></v-btn>
              </v-card>
            </v-col>
            <v-spacer> </v-spacer>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-card class="d-inline-flex flex-column">
                <IndicatorLights :disabled="!state.powered" />
              </v-card>
              <v-card class="d-flex flex-column">
                <LibrarySlider :disabled="!state.powered" />
              </v-card>
            </v-col>
            <v-col class="">
              <MainScreen :disabled="!state.powered" />
              <DeviceInput :disabled="!state.powered" />


              <v-container>
                <v-row>
                  <v-col>
                    <v-card class="bg-surface rounded-lg pa-2">
                      <v-card-title>hello world
                        <v-divider></v-divider>
                      </v-card-title>
                      <v-card-text></v-card-text>
                      <v-card-actions class="d-flex justify-space-between align-center">
                        <v-divider></v-divider>
                        <v-btn icon="mdi-close" variant="plain" size="small"></v-btn>
                        <v-btn icon="mdi-check" variant="plain" size="small"></v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>


            </v-col>
          </v-row>
        </v-container>

      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PowerSwitch from './components/tricorder/PowerSwitch.vue';
const theme = ref('dark')
import LibrarySlider from './components/tricorder/LibrarySlider.vue';
import IndicatorLights from './components/tricorder/IndicatorLights.vue';
import MainScreen from './components/tricorder/MainScreen.vue';
import PowerButton from './components/tricorder/PowerButton.vue';
import DeviceInput from './components/tricorder/DeviceInput.vue';
import FunctionButtons from './components/tricorder/FunctionButtons.vue';



import { useStateStore } from '@/stores/state';
const state = useStateStore()

</script>

<style scoped></style>
