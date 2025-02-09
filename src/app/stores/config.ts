import {ref} from 'vue'
import {defineStore} from 'pinia'
export const useConfig = defineStore('config', () => {
    const numberCells = ref<number>(25)
    const themeLight = ref<boolean>(localStorage.getItem('theme_light') === 'true')

    const updateTheme = (): void => {
        themeLight.value = !themeLight.value

        if (themeLight.value) {
            localStorage.setItem('theme_light', 'true');
        } else {
            localStorage.removeItem('theme_light');
        }
    }
    return {
        numberCells, themeLight, updateTheme
    }
})
