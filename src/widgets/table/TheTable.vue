<script setup lang="ts">
import ThePopup from "@/widgets/popup/ThePopup.vue";
import AppCard from "@/spared/AppCard.vue";

import {useConfig} from "@/app/stores/config.ts";
import {useItems} from "@/app/stores/items.ts";
import {ref} from "vue";

const items = useItems()
const dragId = ref<number | string | null>(null)
const onDrop = (idx: number): void => items.updateList(dragId.value, idx)
const drag = (id: number | string): void => {
    dragId.value = id
}
const onClick = (event: any): void => {
    const el = event.target
    if (!el.closest('.card')) items.open = null
}
</script>

<template>
    <div class="table">
        <div class="table__content" @click="onClick">
            <div
                    class="table-cell"
                    v-for="item in useConfig().numberCells"
                    :key="item"
                    @drop="onDrop(item)"
                    @dragover.prevent
            >
                <AppCard
                        v-if="items.cellItem[item]"
                        :id="items.cellItem[item]"
                        draggable="true"
                        @dragstart="drag(items.cellItem[item])"
                        @click="items.open = items.cellItem[item]"
                />
            </div>
        </div>
        <ThePopup/>
    </div>
</template>

<style scoped lang="scss">
.table {
  width: 50%;
  flex-grow: 1;
  border-radius: var(--main-radius);
  background: var(--add-background);
  border: 1px solid var(--border-color);
  overflow: hidden;
  position: relative;

  &__content {
    display: grid;
    grid-template-columns: repeat(var(--max-column-cell), 1fr);
    margin: -1px;
    height: 100%;
  }

  &-cell {
    position: relative;
    padding-bottom: 80px;
    border: 1px solid var(--border-color);
  }
}
</style>