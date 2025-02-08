<script setup lang="ts">
defineProps(['active'])
defineEmits(['action'])
</script>

<template>
    <div :class="['app-toggle', {active: active}]" @click="$emit('action')"></div>
</template>

<style scoped lang="scss">
.app-toggle {
  background: var(--main-white);
  padding: 1px;
  border-radius: 12px;
  height: 25px;
  width: 51px;
  position: relative;
  cursor: pointer;

  &.active {
      &:after {
          left: 27px;
      }
  }

  &:after {
    transition: .3s;
    content: '';
    position: absolute;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: var(--main-background);
    top: 50%;
    transform: translateY(-50%);
    left: 1px;
  }
}
</style>