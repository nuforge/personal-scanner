export default class PersonalDefense {
  protected _power = true
  protected _battery = 4.5 * 107 // Megajoules of energy (@TNG Illustrated Handbook)
  protected _beam_width = 1
  protected _beam_intensity = 0
  protected _intensity_max = 10
  protected _width_max = 10

  protected _active = false

  constructor() {}

  lightMap: { [key: number]: string } = {
    0: 'disabled',
    1: 'success',
    2: 'success',
    3: 'success',
    4: 'success',
    5: 'warning',
    6: 'warning',
    7: 'warning',
    8: 'warning',
    9: 'error',
    10: 'error',
  }
  // Getters
  get power() {
    return this._power
  }

  get powered() {
    return this._power && this._battery > 0
  }

  get intensity() {
    return this._beam_intensity
  }

  get intensityPercent() {
    return this._beam_intensity / this._intensity_max
  }

  get width() {
    return this._beam_width
  }
  get widthPercent() {
    return this._beam_width / this._width_max
  }

  get active() {
    return this._active
  }

  // Setters

  set power(value: boolean) {
    this._power = value
  }

  set intensity(value: number) {
    this._beam_intensity = value
  }

  set width(value: number) {
    this._beam_width = value
  }

  // Methods

  increaseBeamWidth(increment: number = 1) {
    this._beam_width += increment
    if (this._beam_width > this._intensity_max) {
      this._beam_width = 1
    }
  }
  increaseIntensity(increment: number = 1) {
    this._beam_intensity += increment
    if (this._beam_intensity > this._intensity_max) {
      this._beam_intensity = 0
    }
  }

  fireBeam() {
    return (this._active = true)
  }

  stopBeam() {
    return (this._active = false)
  }

  // Components

  buttonTrigger() {
    return this.fireBeam()
  }

  releaserTrigger() {
    return this.stopBeam()
  }

  buttonBeamWidth() {
    this.increaseBeamWidth()
  }

  buttonBeamIntensity() {
    this.increaseIntensity()
  }

  lightBeamIntensity() {
    return this.lightMap[this._beam_intensity]
  }
  lightBeamWidth() {
    return this.lightMap[this._beam_width]
  }
}
