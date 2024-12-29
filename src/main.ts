import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    VBtn: {
      variant: 'plain',
    },
    VCard: {
      flat: true,
      class: 'bg-background mb-2',
    },
    VCardActions: {
      class: 'bg-surface rounded pa-2',
      VBtn: {
        variant: 'tonal',
      },
    },
    VTooltip: {
      location: 'bottom',
    },
    vBtnToggle: {},
    VLabel: {
      class: 'text-uppercase text-disabled text-caption	',
    },
  },
  components,
  directives,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
