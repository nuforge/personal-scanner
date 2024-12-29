<template>
  <v-responsive class="rounded">
    <v-app :theme="theme">
      <v-main max-width="400" class="mx-auto">
        <v-toolbar>
          <v-btn variant="plain" :ripple="false">
            <PowerSwitch />
          </v-btn>
        </v-toolbar>

        <v-card>
          <v-card-actions class="d-flex justify-space-between ">
            <v-sheet>
              <PowerButton :disabled="!state.powered" />
            </v-sheet>
            <v-sheet>
              <v-label class="text-subtitle-2" text="Σx" />
              <v-label class="text-subtitle-2" text="sys" />
            </v-sheet>
            <v-sheet>
              <FunctionButtons />
            </v-sheet>
            <v-sheet>
              <v-label class="text-subtitle-2"><v-icon icon="mdi-arrow-left"></v-icon> data</v-label>
              <v-label class="text-subtitle-2" text="sense"><v-icon icon="mdi-arrow-right"></v-icon></v-label>
            </v-sheet>
            <v-btn text="I" size="small" :disabled="!state.powered"></v-btn>
            <v-btn text="E" size="small" :disabled="!state.powered"></v-btn>
          </v-card-actions>
        </v-card>


        <v-row no-gutters>
          <v-col class="d-flex flex-column align-center" cols="auto">
            <v-card>
              <v-card-actions>
                <IndicatorLights :disabled="!state.powered" />
              </v-card-actions>
            </v-card>
            <v-card>
              <v-card-actions>
                <LibrarySlider :disabled="!state.powered" />
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-text>
                <MainScreen :disabled="!state.powered" />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-card :disabled="!state.powered" class="d-inline-flex flex-column ">
          <v-card-title>
            <v-label>device input</v-label>
          </v-card-title>
          <v-card-actions>
            <DeviceInput />
          </v-card-actions>
        </v-card>

        <v-card :disabled="!state.powered" class="d-inline-flex flex-column ">
          <v-card-title><v-label>com transmission</v-label></v-card-title>
          <v-card-actions>
            <BtnAcctPool />
            <BtnIntershpTricrdr />
            <EmergencyButton />
          </v-card-actions>
        </v-card>


        <v-card :disabled="!state.powered" class="d-inline-flex flex-column ">
          <v-card-title><v-label>image record</v-label></v-card-title>
          <v-card-actions>
            <BtnFwdInput />
            <BtnRwdErase />
            <InternalExternalButtons />
          </v-card-actions>
        </v-card>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PowerSwitch from '@/components/tricorder/PowerSwitch.vue';
const theme = ref('dark')
import LibrarySlider from '@/components/tricorder/LibrarySlider.vue';
import IndicatorLights from '@/components/tricorder/IndicatorLights.vue';
import MainScreen from '@/components/tricorder/MainScreen.vue';
import PowerButton from '@/components/tricorder/PowerButton.vue';
import DeviceInput from '@/components/tricorder/DeviceInput.vue';
import FunctionButtons from '@/components/tricorder/FunctionButtons.vue';



import { useStateStore } from '@/stores/state';
import EmergencyButton from '@/components/tricorder/EmergencyButton.vue';
import BtnAcctPool from '@/components/tricorder/BtnAcctPool.vue';
import BtnIntershpTricrdr from '@/components/tricorder/BtnIntershpTricrdr.vue';
import BtnFwdInput from '@/components/tricorder/BtnFwdInput.vue';
import BtnRwdErase from '@/components/tricorder/BtnRwdErase.vue';
import InternalExternalButtons from '@/components/tricorder/InternalExternalButtons.vue';
const state = useStateStore()

</script>

<style scoped></style>
