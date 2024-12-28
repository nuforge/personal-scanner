import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', () => {
  const power = ref(true)

  const systems = reactive(
    new Map<string, { state: boolean; color: string; icon: string; value: number }>([
      ['power', { state: true, color: 'success', icon: 'mdi-power', value: 0 }],
      ['alpha', { state: false, color: 'primary', icon: 'mdi-alpha', value: 0 }],
      ['beta', { state: false, color: 'secondary', icon: 'mdi-beta', value: 0 }],
      ['delta', { state: false, color: 'success', icon: 'mdi-delta', value: 0 }],
      ['gamma', { state: false, color: 'warning', icon: 'mdi-gamma', value: 0 }],
    ]),
  )
  // Components
  const librarySlider = ref(0)
  const powerSwitch = ref(false)
  const powerButton = ref(true)
  const deviceInput = ref([''])

  // Computed
  const powered = computed(() => power.value && powerSwitch.value)
  const library = computed(() => librarySlider.value)

  const checkOn = (key: string) => systems.get(key)?.state
  const checkPowered = (key: string) =>
    systems.get(key)?.state && powered.value && powerButton.value

  const On = (key: string) => systems.get(key)!.state

  const powerAll = () => {
    systems.forEach((light) => {
      light.state = true
    })
  }

  const togglePower = () => {
    power.value = !power.value
  }

  const toggleSystem = (key: string) => {
    systems.get(key)!.state = !systems.get(key)!.state
  }

  const getLight = (key: string) => systems.get(key)
  const getColor = (key: string) => systems.get(key)?.color
  const getIcon = (key: string) => systems.get(key)?.icon
  const getValue = (key: string) => systems.get(key)?.value

  const Light = (key: string) => systems.get(key)?.color && powered.value

  return {
    power,
    powered,
    library,
    librarySlider,
    powerSwitch,
    powerButton,
    deviceInput,
    systems,
    Light,
    On,
    powerAll,
    checkOn,
    checkPowered,
    getLight,
    getIcon,
    getValue,
    getColor,
    togglePower,
    toggleSystem,
  }
})
