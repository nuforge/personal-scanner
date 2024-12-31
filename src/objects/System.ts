export class System {
  protected _id: string
  protected _state: boolean
  protected _active: boolean
  protected _color: string
  protected _icon: string
  protected _value: number
  protected _max: number
  protected _rgba: string

  constructor(id: string, color: string, icon: string, value: number, max: number, rgba: string) {
    this._id = id
    this._color = color
    this._icon = icon
    this._value = value
    this._max = max
    this._rgba = rgba
    this._state = false
    this._active = false
  }

  get id() {
    return this._id
  }

  get state() {
    return this._state
  }

  set state(state: boolean) {
    this._state = state
  }

  get active() {
    return this._active
  }

  set active(active: boolean) {
    this._active = active
  }

  get color() {
    return this._color
  }

  get icon() {
    return this._icon
  }

  get value() {
    return this._value
  }

  set value(value: number) {
    this._value = value
  }

  get max() {
    return this._max
  }

  get rgba() {
    return this._rgba
  }
}

/*
  }

  systems = reactive(
    new Map<
      string,
      {
        state: boolean
        color: string
        icon: string
        value: number
        active: boolean
        max: number
        rgba: string
      }
    >([
      [
        'power',
        {
          state: true,
          color: 'success',
          icon: 'mdi-power',
          value: 100,
          active: false,
          max: 100,
          rgba: 'green',
        },
      ],
      [
        'alpha',
        {
          state: false,
          color: 'primary',
          icon: 'mdi-alpha',
          value: 0,
          active: false,
          max: 1,
          rgba: 'white',
        },
      ],
      [
        'beta',
        {
          state: false,
          color: 'secondary',
          icon: 'mdi-beta',
          value: 0,
          active: false,
          max: 255,
          rgba: 'blue',
        },
      ],
      [
        'delta',
        {
          state: false,
          color: 'success',
          icon: 'mdi-delta',
          value: 0,
          active: false,
          max: 255,
          rgba: 'red',
        },
      ],
      [
        'gamma',
        {
          state: false,
          color: 'warning',
          icon: 'mdi-gamma',
          value: 0,
          active: false,
          max: 255,
          rgba: 'green',
        },
      ],
    ]),
)
    }
    */
