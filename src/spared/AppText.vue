<script setup lang="ts">
const props = defineProps<{
    width?: string;
    title?: boolean
}>();

const defaultWidth = props.width ?? '100%';
</script>

<template>
    <div :class="['app-text', {'app-text_title': title}]" :style="{'width': defaultWidth}">
        <slot/>
    </div>
</template>

<style scoped lang="scss">
.app-text {
  padding: 5px;
  border-radius: var(--min-radius);
  background: var(--main-gradient);
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  &_title {
    padding: 13px;
    margin-bottom: 24px;
  }

  + .app-text {
    margin-top: 16px;
  }
}
</style>