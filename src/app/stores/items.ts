import {computed, reactive, ref} from 'vue'
import {defineStore} from 'pinia'

export const useItems = defineStore('items', () => {
    const open = ref(null)
    const list = ref({
        1: {
            img: '/img/cell-1.png',
            amount: 4,
        },
        2: {
            img: '/img/cell-2.png',
            amount: 2,
        },
        3: {
            img: '/img/cell-3.png',
            amount: 5,
        }
    })

    const indexList = reactive(JSON.parse(localStorage.getItem('list')) || {})
    const initialIndex = () => {
        if (Object.keys(indexList).length) return;
        Object.keys(list.value).forEach((i, idx) => indexList[i] = idx + 1)
    }
    const cellItem = computed(() => {
        const swappedObject = {};
        for (const key in indexList) {
            if (indexList.hasOwnProperty(key)) {
                const value = indexList[key];
                swappedObject[value] = Number(key);
            }
        }
        return swappedObject;
    })
    const updateList = (id: any, idx: any): void => {
        indexList[id] = idx
        localStorage.setItem('list', JSON.stringify(indexList))
    }

    const itemRemove = (val) => {
        const id = open.value
        const amount = list.value[id].amount - val
        if (amount <= 0) {
            open.value = null
            delete indexList[id]
            delete list.value[id]
        } else {
            list.value[id].amount = amount
        }
        localStorage.setItem('list', JSON.stringify(indexList))
    }

    return {
        open, list, cellItem, updateList, initialIndex, itemRemove
    }
})
