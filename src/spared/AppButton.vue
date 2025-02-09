<script setup lang="ts">
import {computed} from "vue";
import {checkUndefined} from "@/app/utils/checkUndefined.ts";

type Color = 'main' | 'white'

type Props = {
    type?: string;
    full?: string;
    size?: string;
    color?: Color | undefined;
    disabled?: boolean | undefined
}

const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    color: 'main'
})
const emits = defineEmits(['action'])

const color = computed<string>(() => 'btn_' + props.color)
const onClick = (): void => {
    if (props.disabled) return;
    emits('action')
}
const size = computed<string>(() => props.size ? 'btn_' + props.size : '')
</script>

<template>
    <button
            :type="type"
            :class="['btn', color, size, {'btn_full': checkUndefined(full)}]"
            @click="onClick"
            :disabled="disabled"
    >
        <slot/>
    </button>
</template>

<style scoped lang="scss">
@use "/src/app/style/mixins";

.btn {
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: var(--min-radius);
  font-weight: 500;
  transition: .3s;
  background-color: var(--btn-background, transparent);
  color: var(--btn-color);
  padding: 11px 15px;

  @include mixins.hover {
    --btn-background: var(--btn-background-hover);
    --btn-border: var(--btn-border-hover);
    --btn-color: var(--btn-color-hover)
  }

  &:disabled {
    opacity: .5;
    filter: grayscale(1);
    cursor: no-drop;
  }

  &_full {
    width: 100%;
  }

  &_small {
    height: 33px;
    padding: 8px 15px;
  }

  &_main {
    --btn-background: var(--warning);
    --btn-color: var(--text-white);
    --btn-background-hover: var(--warning-hover);
    --btn-color-hover: var(--text-white);
  }

  &_white {
    --btn-background: var(--text-white);
    --btn-color: var(--text-black);
    --btn-background-hover: var(--warning-hover);
    --btn-color-hover: var(--text-white);
  }

}
</style>