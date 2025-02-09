<script setup lang="ts">
type Props = {
    width?: string;
    title?: boolean,
    h1?: true
}
withDefaults(defineProps<Props>(), {
    width: '100%'
})

</script>

<template>
    <div :class="['app-text', {'app-text_title': title, 'app-text_h1': h1,}]" :style="{'width': width}">
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
  max-width: 100%;

  &_title {
    padding: 13px;
    margin-bottom: 24px;
  }

  &_h1 {
    padding: 18px 13px;
    margin-bottom: 24px;
  }

  + .app-text {
    margin-top: 16px;
  }
}
</style>