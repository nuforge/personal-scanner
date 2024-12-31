<template>
  <v-expansion-panels bg-color="transparent" flat static variant="accordion">

    <v-expansion-panel v-model="scanner.openCase" value="bar">
      <v-expansion-panel-title color="surface" :icon="false" variant="plain" hide-actions>
        <v-btn variant="plain" :ripple="false">
          <PowerSwitch />
        </v-btn>
      </v-expansion-panel-title>

      <v-expansion-panel-text>

        <v-card :disabled="!scanner.device.powered">
          <v-card-actions class="d-flex justify-space-around">
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

        <v-card class="d-flex" :disabled="!scanner.device.powered">
          <v-card-actions class="d-flex flex-column align-center">
            <IndicatorLights />
            <LibrarySlider />
          </v-card-actions>
          <v-card-text>
            <MainScreen class="h-100" />
          </v-card-text>
        </v-card>

        <v-card :disabled="!scanner.device.powered">
          <v-card-title>
            <v-label>device input</v-label>
          </v-card-title>
          <v-card-actions class="d-flex justify-space-evenly align-center">
            <DeviceInput />
            <DeviceLights />
          </v-card-actions>
        </v-card>

        <v-card :disabled="!scanner.device.powered">
          <v-card-title><v-label>com transmission</v-label></v-card-title>
          <v-card-actions class="d-flex justify-space-evenly">
            <BtnAcctPool />
            <BtnIntershpTricrdr />
            <EmergencyButton />
          </v-card-actions>
        </v-card>

        <v-card :disabled="!scanner.device.powered">
          <v-card-title><v-label>image record</v-label></v-card-title>
          <v-card-actions class="d-flex justify-space-evenly">
            <BtnFwdInput />
            <BtnRwdErase />
            <InternalExternalButtons />
          </v-card-actions>
        </v-card>

        <v-card :disabled="!scanner.device.powered">
          <v-card-actions>
            <BtnID />
          </v-card-actions>
        </v-card>

      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import { useScannerStore } from '@/stores/scanner';
const scanner = useScannerStore()

import PowerSwitch from '@/components/tricorder/PowerSwitch.vue';
import LibrarySlider from '@/components/tricorder/LibrarySlider.vue';
import IndicatorLights from '@/components/tricorder/IndicatorLights.vue';
import MainScreen from '@/components/tricorder/MainScreen.vue';
import PowerButton from '@/components/tricorder/PowerButton.vue';
import DeviceInput from '@/components/tricorder/DeviceInput.vue';
import DeviceLights from '@/components/tricorder/DeviceLights.vue';
import FunctionButtons from '@/components/tricorder/FunctionButtons.vue';



import EmergencyButton from '@/components/tricorder/EmergencyButton.vue';
import BtnAcctPool from '@/components/tricorder/BtnAcctPool.vue';
import BtnIntershpTricrdr from '@/components/tricorder/BtnIntershpTricrdr.vue';
import BtnFwdInput from '@/components/tricorder/BtnFwdInput.vue';
import BtnRwdErase from '@/components/tricorder/BtnRwdErase.vue';
import BtnID from '@/components/tricorder/BtnID.vue';
import InternalExternalButtons from '@/components/tricorder/InternalExternalButtons.vue';
import LabelExSys from '@/components/tricorder/LabelExSys.vue';
import LabelDataSense from '@/components/tricorder/LabelDataSense.vue';

</script>
