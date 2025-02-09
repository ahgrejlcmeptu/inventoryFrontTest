<script setup lang="ts">
import AppButton from "@/spared/AppButton.vue";
import AppClose from "@/spared/AppClose.vue";
import AppText from "@/spared/AppText.vue";
import AppInput from "@/spared/AppInput.vue";
import AppScroll from "@/spared/AppScroll.vue";
import {useItems} from "@/app/stores/items.ts";
import {computed, ref, watch} from "vue";

interface Item {
    img: string
    amount: number
    description?: any
}

const items = useItems()
const item = computed<Item | null>(() => items.open ? items.list[items.open] : null)
const isRemove = ref<boolean>(false)
const amount = ref<null | number>(null)
const onClose = (): void => {
    items.open = null
}
const onRemove = (): void => {
    items.itemRemove(amount.value ? amount.value : item.value?.amount || 0)
}

watch(
    () => item.value?.amount,
    () => {
        amount.value = null
    }
)

watch(
    () => items.open,
    () => {
        isRemove.value = false
        amount.value = null
    }
)
</script>

<template>
    <transition>
        <div v-if="items.open" class="popup block-card">
            <AppClose @action="onClose"/>
            <div class="popup__image">
                <img :src="item?.img" alt="">
            </div>
            <app-scroll>
                <AppText width="80%" :title="true"/>
                <AppText
                    v-for="p in item?.description"
                    :width="p"/>
            </app-scroll>
            <div class="popup__footer">
                <app-button v-if="!isRemove" full @action="isRemove = true">Удалить предмет</app-button>
                <template v-else>
                    <AppInput placeholder="Введите количество" type="number" name="amount"
                              v-model.trim.number="amount"/>
                    <app-button @action="isRemove = false" color="white" size="small">Отмена</app-button>
                    <app-button @action="onRemove" size="small">Подтвердить</app-button>
                </template>
            </div>
        </div>
    </transition>
</template>

<style scoped lang="scss">
.popup {
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;

  border-left: 1px solid var(--border-color);
  z-index: 1;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--add-background_rgb);
    backdrop-filter: blur(8px);
  }

  &__image {
    padding: 30px;
    height: 200px;
    border-bottom: 1px solid var(--border-color);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__footer {
    margin-top: auto;
    padding-top: 18px;
    border-top: 1px solid var(--border-color);
    display: flex;
    flex-wrap: wrap;
    gap: 20px 10px;

    > * {
      flex-grow: 1;
    }
  }
}
</style>