import { System } from './System'

export default class Scanner {
  protected _power = true
  protected _emergency = false
  protected _systems = new Map<string, System>()

  constructor() {
    this._power = true
    this._emergency = false
    this._systems.set('power', new System('power', 'success', 'mdi-power', 100, 100, 'green'))
    this._systems.set('alpha', new System('alpha', 'primary', 'mdi-alpha', 0, 1, 'white'))
    this._systems.set('beta', new System('beta', 'secondary', 'mdi-beta', 0, 255, 'blue'))
    this._systems.set('delta', new System('delta', 'success', 'mdi-delta', 0, 255, 'red'))
    this._systems.set('gamma', new System('gamma', 'warning', 'mdi-gamma', 0, 255, 'green'))
  }
  // Components
  openCase = false
  powerSwitch = true
  powerButton = true

  librarySlider = 0
  deviceInput = ['']

  // Computed
  powered = this._power && this.powerSwitch
  library = this.librarySlider

  systemsColor = `rgb(${this._systems.get('delta')}, ${this._systems.get('gamma')}, ${this._systems.get('beta')})`
  systemsAppearance = `rgba(${this._systems.get('delta')}, ${this._systems.get('gamma')}, ${this._systems.get('beta')}, ${this._systems.get('alpha')})`

  checkOn = (key: string) => this._systems.get(key)?.state
  checkPowered = (key: string) => this._systems.get(key)?.state && this.powered && this.powerButton
  checkActive = (key: string) => this._systems.get(key)?.active && this.powered && this.powerButton

  On = (key: string) => this._systems.get(key)!.state

  // Power
  powerAll = () => {
    this._systems.forEach((light) => {
      light.state = true
    })
  }

  togglePower = () => {
    this._power = !this._power
  }

  // Systems
  getActiveSystems = () => {
    return Array.from(this._systems.entries()).filter(([, system]) => system.active === true)
  }

  toggleSystem = (key: string) => {
    this._systems.get(key)!.state = !this._systems.get(key)!.state
    this._systems.get(key)!.active = !this._systems.get(key)!.active
  }

  getLight = (key: string) => this._systems.get(key)
  getColor = (key: string) => this._systems.get(key)?.color
  getIcon = (key: string) => this._systems.get(key)?.icon
  getMax = (key: string) => this._systems.get(key)?.max

  Light = (key: string) => this._systems.get(key)?.color && this.powered
}
