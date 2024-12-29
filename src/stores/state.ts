import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', () => {
  const power = ref(true)
  const emergency = ref(false)

  const systems = reactive(
    new Map<
      string,
      { state: boolean; color: string; icon: string; value: number; active: boolean; max: number }
    >([
      [
        'power',
        { state: true, color: 'success', icon: 'mdi-power', value: 0, active: false, max: 100 },
      ],
      [
        'alpha',
        { state: false, color: 'primary', icon: 'mdi-alpha', value: 0, active: false, max: 1 },
      ],
      [
        'beta',
        { state: false, color: 'secondary', icon: 'mdi-beta', value: 0, active: false, max: 256 },
      ],
      [
        'delta',
        { state: false, color: 'success', icon: 'mdi-delta', value: 0, active: false, max: 256 },
      ],
      [
        'gamma',
        { state: false, color: 'warning', icon: 'mdi-gamma', value: 0, active: false, max: 256 },
      ],
    ]),
  )
  // Components
  const powerSwitch = ref(true)
  const powerButton = ref(true)

  const librarySlider = ref(0)
  const deviceInput = ref([''])

  // Computed
  const powered = computed(() => power.value && powerSwitch.value)
  const library = computed(() => librarySlider.value)

  const checkOn = (key: string) => systems.get(key)?.state
  const checkPowered = (key: string) =>
    systems.get(key)?.state && powered.value && powerButton.value
  const checkActive = (key: string) =>
    systems.get(key)?.active && powered.value && powerButton.value

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
    systems.get(key)!.active = !systems.get(key)!.active
  }

  const getLight = (key: string) => systems.get(key)
  const getColor = (key: string) => systems.get(key)?.color
  const getIcon = (key: string) => systems.get(key)?.icon
  const getValue = (key: string) => systems.get(key)?.value
  const getMax = (key: string) => systems.get(key)?.max

  const Light = (key: string) => systems.get(key)?.color && powered.value

  const applyDelta = (value: number) => {
    Array.from(systems.entries())
      .filter(([key, system]) => system.active === true)
      .forEach(([key, system]) => {
        system.value += value
        system.value = Math.round(Math.max(0, Math.min(system.max, system.value)) * 100) / 100
      })
  }

  return {
    power,
    powered,
    library,
    librarySlider,
    powerSwitch,
    powerButton,
    deviceInput,
    systems,
    emergency,
    Light,
    On,
    powerAll,
    checkOn,
    checkPowered,
    checkActive,
    getLight,
    getIcon,
    getValue,
    getColor,
    getMax,
    togglePower,
    toggleSystem,
    applyDelta,
  }
})
