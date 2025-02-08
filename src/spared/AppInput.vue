<script setup lang="ts">
import {computed} from "vue";

type Props = {
    type?: string
    name?: string
    placeholder?: string
    modelValue: string | number
    max?: number
}
const props = withDefaults(defineProps<Props>(), {
    type: 'text'
})

const emits = defineEmits(['update:modelValue'])
const model = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emits("update:modelValue", value);
    }
})

</script>

<template>
    <div :class="['input']">
        <input
                :type="type"
                :name="name"
                :placeholder="placeholder"
                v-model.trim="model"
        >
    </div>
</template>

<style lang="scss">

.input {

  input {
    background: transparent;
    width: 100%;
    height: var(--input-height, 40px);
    border-radius: var(--min-xl-radius);
    border: 1px solid var(--border-color);
    padding: 11px 12px;
    display: block;
    transition: .3s;
    outline: none;
    color: var(--light-text);
    background: none;

    &::placeholder {
      color: var(--light-text);
    }
  }
}
</style>