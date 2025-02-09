<script setup lang="ts">
import {useItems} from "@/app/stores/items.ts";
import {computed} from "vue";
type Props = {
    id: number | string
}
interface Item {
    img: string;
    amount: number;
}

const props = defineProps<Props>()
const items = useItems()
const item = computed<Item>(() => items.list[props.id])

</script>

<template>
    <div class="card">
        <img :src="item.img" alt="">
        <div class="card__amount">{{item.amount}}</div>
    </div>
</template>

<style scoped lang="scss">
.card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;

  img {
    margin: auto;
    width: 54px;
    height: 54px;
    object-fit: contain;
      pointer-events: none;
  }

  &__amount {
    position: absolute;
    bottom: 0;
    right: 0;
    border-top-left-radius: var(--amount-radius);
    border-width: 1px 1px 0 1px;
    border-style: solid;
    border-color: var(--border-color);
    font-weight: 500;
    font-size: 10px;
    padding: 2px;
    min-width: 18px;
    text-align: center;
  }
}
</style>