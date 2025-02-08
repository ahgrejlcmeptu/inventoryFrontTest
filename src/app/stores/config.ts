import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useConfig = defineStore('config', () => {
    const numberCells = ref(25)
    const themeLight = ref(localStorage.getItem('theme_light'))

    const updateTheme = () => {
        themeLight.value = !themeLight.value
        localStorage.setItem('theme_light', themeLight.value)
    }
    return {
        numberCells, themeLight, updateTheme
    }
})
