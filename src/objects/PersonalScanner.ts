import { System } from '@/objects/System'
import { reactive } from 'vue'

export default class PersonalScanner {
  protected _power = true
  protected _battery = 100
  protected _emergency = false
  protected _systems = reactive(new Map<string, System>())

  constructor() {
    this._power = true
    this._emergency = false
    this._systems.set('power', new System('power', 'success', 'mdi-power', 100, 100, 'green'))
    this._systems.set('alpha', new System('alpha', 'primary', 'mdi-alpha', 0, 1, 'white'))
    this._systems.set('beta', new System('beta', 'secondary', 'mdi-beta', 0, 255, 'blue'))
    this._systems.set('delta', new System('delta', 'success', 'mdi-delta', 0, 255, 'red'))
    this._systems.set('gamma', new System('gamma', 'warning', 'mdi-gamma', 0, 255, 'green'))
  }

  // Getters
  get power() {
    return this._power
  }

  get powered() {
    return this._power && this._battery > 0
  }

  get emergency() {
    return this._emergency
  }

  get systems() {
    return this._systems as unknown as Map<string, System>
  }

  // Setters

  set power(value: boolean) {
    this._power = value
  }

  set emergency(value: boolean) {
    this._emergency = value
  }

  set systems(value: Map<string, System>) {
    this._systems = value
  }

  // Methods

  // Components

  // Computed

  systemsColor = `rgb(${this._systems.get('delta')}, ${this._systems.get('gamma')}, ${this._systems.get('beta')})`
  systemsAppearance = `rgba(${this._systems.get('delta')}, ${this._systems.get('gamma')}, ${this._systems.get('beta')}, ${this._systems.get('alpha')})`

  checkOn = (key: string) => this._systems.get(key)?.state
  checkPowered = (key: string) => this._systems.get(key)?.state && this._power
  checkActive = (key: string) => this._systems.get(key)?.active && this._power

  On = (key: string) => this._systems.get(key)!.state

  // Power
  powerAll = () => {
    this._systems.forEach((light) => {
      light.state = true
    })
  }

  togglePower = () => {
    console.log('togglePower', this._power)
    this._power = !this._power
  }

  // Systems
  getActiveSystems = () => {
    return Array.from(this._systems.entries()).filter(([, system]) => system.active === true)
  }

  toggleSystem = (key: string) => {
    console.log('toggleSystem', this._systems.get(key)?.state)
    this._systems.get(key)!.state = !this._systems.get(key)!.state
    this._systems.get(key)!.active = !this._systems.get(key)!.active
  }

  getValue = (key: string) => this._systems.get(key)?.value
  getLight = (key: string) => this._systems.get(key)
  getColor = (key: string) => this._systems.get(key)?.color
  getIcon = (key: string) => this._systems.get(key)?.icon
  getMax = (key: string) => this._systems.get(key)?.max

  Light = (key: string) => this._systems.get(key)?.color && this._power

  // Functions
  applyDelta = (value: number) => {
    Array.from(this._systems.entries())
      .filter(([, system]) => system.active === true)
      .forEach(([, system]) => {
        system.value += value * system.max
        system.value = Math.round(Math.max(0, Math.min(system.max, system.value)) * 100) / 100
      })
  }
}
