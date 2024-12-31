import { ref } from 'vue'
import { defineStore } from 'pinia'
import PersonalDefense from '@/objects/PersonalDefense'

export const useDefenseStore = defineStore('defense', () => {
  const device = ref(new PersonalDefense())

  return {
    device,
  }
})
