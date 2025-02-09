<template>
    <div class="scroll-block">
        <div class="scroll-block__content">
            <slot/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.scroll-block {
  height: 50%;
  flex-grow: 1;
  overflow: hidden;
  &__content {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    scrollbar-width: none;
    padding: var(--scroll-padding, 18px 10px);

    &::-webkit-scrollbar {
      width: 0;
    }
  }
}
</style>