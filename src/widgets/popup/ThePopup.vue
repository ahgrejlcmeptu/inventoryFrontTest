<script setup lang="ts">
import AppButton from "@/spared/AppButton.vue";
import AppClose from "@/spared/AppClose.vue";
import AppText from "@/spared/AppText.vue";
import AppInput from "@/spared/AppInput.vue";
import {useItems} from "@/app/stores/items.ts";
import {computed, ref, watch} from "vue";

const items = useItems()
const item = computed(() => items.list[items.open])
const isRemove = ref(false)
const amount = ref('')
const onClose = () => items.open = null
const onRemove = () => {
    items.itemRemove(amount.value)
}

watch(
    ()=> items.open,
    () => {
        isRemove.value = false
        amount.value = ''
    }
)
</script>

<template>
    <transition>
        <div v-if="items.open" class="popup block-card">
            <AppClose @action="onClose"/>
            <div class="popup__image">
                <img :src="item.img" alt="">
            </div>
            <div class="scroll-block">
                <AppText width="80%" :title="true"/>
                <AppText width="80%"/>
                <AppText width="90%"/>
                <AppText width="80%"/>
                <AppText width="70%"/>
                <AppText width="60%"/>
                <AppText width="50%"/>
                <AppText width="90%"/>
                <AppText width="80%"/>
                <AppText width="70%"/>
                <AppText width="60%"/>
                <AppText width="50%"/>
            </div>
            <div class="popup__footer">
                <app-button v-if="!isRemove" full @action="isRemove = true">Удалить предмет</app-button>
                <template v-else>
                    <AppInput placeholder="Введите количество" type="number" name="amount"
                              v-model.trim.number="amount"/>
                    <app-button @action="isRemove = false" color="white" size="small">Отмена</app-button>
                    <app-button @action="onRemove" size="small" :disabled="!amount">Подтвердить</app-button>
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