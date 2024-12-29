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
          <v-card-title><v-label>device input</v-label></v-card-title>
          <v-card-text>
            <DeviceInput />
          </v-card-text>
        </v-card>

        <v-card :disabled="!state.powered" class="d-inline-flex flex-column ">
          <v-card-title><v-label>com transmission</v-label></v-card-title>
          <v-row>
            <v-col cols="auto">
              <v-card class="d-inline-flex" :disabled="!state.powered">
                <v-card-text>
                  <v-btn-toggle class="d-inline-flex flex-column justify-space-around" variant="plain">
                    <v-btn text="acpt"></v-btn>
                    <v-divider></v-divider>
                    <v-btn text="pool"></v-btn>
                  </v-btn-toggle>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card class="d-inline-flex" :disabled="!state.powered">
                <v-card-text>
                  <v-btn-toggle class="d-inline-flex flex-column justify-space-around" variant="plain">
                    <v-btn text="intershp"></v-btn>
                    <v-divider></v-divider>
                    <v-btn text="tricrdr"></v-btn>
                  </v-btn-toggle>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card>
                <v-card-text>
                  <v-label class="emrg me-2">E<br />M<br />R<br />G</v-label>
                  <EmergencyButton />
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>


        <v-card class="rounded-lg pa-2">
          <v-card-title><v-label>image record</v-label></v-card-title>
          <v-row>
            <v-col cols="auto">
              <v-card class="d-inline-flex" :disabled="!state.powered">
                <v-card-text class="bg-surface pa-2 rounded">
                  <v-btn-toggle class="d-inline-flex flex-column  justify-space-around" variant="plain">
                    <v-btn text="fwd"></v-btn>
                    <v-divider></v-divider>
                    <v-btn text="imput"></v-btn>
                  </v-btn-toggle>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card class="d-inline-flex" :disabled="!state.powered">
                <v-card-text class="bg-surface pa-2 rounded">
                  <v-btn-toggle class="d-inline-flex flex-column justify-space-around" variant="plain">
                    <v-btn text="rwd"></v-btn>
                    <v-divider></v-divider>
                    <v-btn text="erase"></v-btn>
                  </v-btn-toggle>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-btn text="I" :disabled="!state.powered"></v-btn>
              <v-btn text="E" :disabled="!state.powered"></v-btn>
            </v-col>
          </v-row>
        </v-card>



        <v-spacer></v-spacer>
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
import EmergencyButton from './components/tricorder/EmergencyButton.vue';
const state = useStateStore()

</script>

<style scoped>
.emrg {
  font-size: 0.5rem;
  font-weight: bold;
  text-align: center;
}

.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: upright;

}
</style>
