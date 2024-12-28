<template>
  <v-responsive class=" rounded">
    <v-app :theme="theme">

      <v-main>
        <v-container>
          <v-row>
            <v-col>
              <PowerSwitch />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-card>
                <v-card-text>
                  <PowerButton :disabled="!state.powered" />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card>
                <v-card-text class="d-inline-flex flex-column">
                  <v-label class="text-subtitle-1">Σx</v-label>
                  <v-label class="text-subtitle-1">sys</v-label>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card :disabled="!state.powered">
                <v-card-text class="d-inline-flex flex-column">
                  <FunctionButtons />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card :disabled="!state.powered">
                <v-card-text class="d-inline-flex flex-column">
                  <v-label><v-icon icon="mdi-arrow-left"></v-icon> data</v-label>
                  <v-label>sense <v-icon icon="mdi-arrow-right"></v-icon></v-label>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card :disabled="!state.powered">
                <v-card-text>
                  <v-btn text="I" variant="flat" density="compact"></v-btn>
                  <v-btn text="E" variant="flat" density="compact"></v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-spacer> </v-spacer>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-card>
                <v-card-text class="d-flex flex-column align-center">
                  <IndicatorLights :disabled="!state.powered" />
                </v-card-text>
              </v-card>
              <v-card>
                <v-card-text class="d-flex flex-column align-center">
                  <LibrarySlider />
                </v-card-text>
                <v-card-title>Library</v-card-title>
              </v-card>
            </v-col>
            <v-col>
              <MainScreen :disabled="!state.powered" />
              <v-card :disabled="!state.powered">
                <v-card-title>device input</v-card-title>
                <v-card-text class="d-inline-flex flex-column align-center">
                  <DeviceInput />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card>
                <v-card-title>com transmission</v-card-title>
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
                <v-card-title>image record</v-card-title>
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
