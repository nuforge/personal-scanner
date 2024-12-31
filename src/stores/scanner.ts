import { ref } from 'vue'
import { defineStore } from 'pinia'
import PersonalScanner from '@/objects/PersonalScanner'

export const useScannerStore = defineStore('scanner', () => {
  const device = ref(new PersonalScanner())

  const openCase = ref(false)
  const powerButton = ref(true)
  const powerSwitch = ref(true)

  const librarySlider = ref(0)
  const deviceInput = ref([''])

  // Functions
  const applyDelta = (value: number) => {
    Array.from(device.value.systems.entries())
      .filter(([, system]) => system.active === true)
      .forEach(([, system]) => {
        system.value += value * system.max
        system.value = Math.round(Math.max(0, Math.min(system.max, system.value)) * 100) / 100
      })
  }

  return {
    device,

    openCase,
    powerButton,
    powerSwitch,
    librarySlider,
    deviceInput,
    applyDelta,
  }
})
