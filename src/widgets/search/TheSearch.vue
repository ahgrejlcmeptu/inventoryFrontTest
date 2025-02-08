<script setup lang="ts">
// import AppInput from "@/spared/AppInput.vue";
import AppClose from "@/spared/AppClose.vue";

const close = () => {
    console.log('close search')
}
</script>

<template>
    <div class="search">
        <div class="search__input">
<!--            <AppInput/>-->
        </div>
        <AppClose @action="close"/>
    </div>
</template>

<style scoped lang="scss">
.search {
  width: 100%;
  border-radius: var(--main-radius);
  background: var(--add-background);
  border: 1px solid var(--border-color);
  padding: 18px;
  position: relative;

  &__input {
    margin-right: 50px;
  }
}
</style>