<template>
  <v-responsive class="rounded">
    <v-app :theme="theme">
      <v-main max-width="390" class="mx-auto">
        <v-toolbar>
          <v-btn variant="plain" :ripple="false">
            <PowerSwitch />
          </v-btn>
        </v-toolbar>

        <v-card :disabled="!state.powered">
          <v-card-actions class="d-flex justify-space-evenly">
            <v-sheet>
              <PowerButton />
            </v-sheet>
            <v-sheet>
              <LabelExSys />
            </v-sheet>
            <v-sheet>
              <FunctionButtons />
            </v-sheet>
            <v-sheet>
              <LabelDataSense />
            </v-sheet>
            <InternalExternalButtons />
          </v-card-actions>
        </v-card>

        <v-card class="d-flex" :disabled="!state.powered">
          <v-card-actions class="d-flex flex-column align-center">
            <IndicatorLights />
            <LibrarySlider />
          </v-card-actions>
          <v-card-text>
            <MainScreen class="h-100" />
          </v-card-text>
        </v-card>

        <v-card :disabled="!state.powered">
          <v-card-title>
            <v-label>device input</v-label>
          </v-card-title>
          <v-card-actions class="d-flex justify-space-evenly align-center">
            <DeviceInput />
            <DeviceLights />
          </v-card-actions>
        </v-card>

        <v-card :disabled="!state.powered">
          <v-card-title><v-label>com transmission</v-label></v-card-title>
          <v-card-actions class="d-flex justify-space-evenly">
            <BtnAcctPool />
            <BtnIntershpTricrdr />
            <EmergencyButton />
          </v-card-actions>
        </v-card>


        <v-card :disabled="!state.powered">
          <v-card-title><v-label>image record</v-label></v-card-title>
          <v-card-actions class="d-flex justify-space-evenly">
            <BtnFwdInput />
            <BtnRwdErase />
            <InternalExternalButtons />
          </v-card-actions>
        </v-card>

        <v-card :disabled="!state.powered">
          <v-card-actions>
            <BtnID />
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
import DeviceLights from '@/components/tricorder/DeviceLights.vue';
import FunctionButtons from '@/components/tricorder/FunctionButtons.vue';



import { useStateStore } from '@/stores/state';
import EmergencyButton from '@/components/tricorder/EmergencyButton.vue';
import BtnAcctPool from '@/components/tricorder/BtnAcctPool.vue';
import BtnIntershpTricrdr from '@/components/tricorder/BtnIntershpTricrdr.vue';
import BtnFwdInput from '@/components/tricorder/BtnFwdInput.vue';
import BtnRwdErase from '@/components/tricorder/BtnRwdErase.vue';
import BtnID from '@/components/tricorder/BtnID.vue';
import InternalExternalButtons from '@/components/tricorder/InternalExternalButtons.vue';
import LabelExSys from '@/components/tricorder/LabelExSys.vue';
import LabelDataSense from '@/components/tricorder/LabelDataSense.vue';
const state = useStateStore()

</script>

<style scoped></style>
