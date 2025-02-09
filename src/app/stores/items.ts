import {computed, onMounted, reactive, ref} from 'vue'
import {defineStore} from 'pinia'


export const useItems = defineStore('items', () => {
    const open = ref<null | string | number>(null)
    const list = reactive(JSON.parse(localStorage.getItem('list')) || {
        c1: {
            img: '/img/cell-1.png',
            amount: 4,
            description: ['90%','80%','70%','60%','50%','90%','80%','70%','60%','50%']
        },
        c2: {
            img: '/img/cell-2.png',
            amount: 2,
            description: ['90%','80%','70%','60%']
        },
        c3: {
            img: '/img/cell-3.png',
            amount: 5,
            description: ['105%','80%','70%','60%','50%']
        }
    })

    const cellItem = computed(() => {
        const sortList = {};
        for (const key in list) {
            const index = list[key].index
            if (index) sortList[index] = key;
        }
        return sortList;
    })
    const updateList = (id: any, idx: any): void => {
        if (cellItem.value[idx]) list[cellItem.value[idx]].index = list[id].index
        list[id].index = idx
        localStorage.setItem('list', JSON.stringify(list))
    }
    const initialIndex = (): void => {
        let index = 1;
        if (!localStorage.getItem('list')) {
            for (let key in list) {
                list[key].index = index
                index++
            }
        }
    }

    const itemRemove = (val: number): void => {
        const id: string | number | null = open.value
        if (id === null) return
        const amount = list[id].amount - val
        if (amount <= 0) {
            open.value = null
            delete list[id]
        } else {
            list[id].amount = amount
        }
        localStorage.setItem('list', JSON.stringify(list))
    }

    onMounted((): void => {
        initialIndex()
    })

    return {
        open, list, cellItem, updateList, initialIndex, itemRemove
    }
})
