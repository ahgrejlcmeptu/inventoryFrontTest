<script setup lang="ts">
import AppScroll from "@/spared/AppScroll.vue";
import AppClose from "@/spared/AppClose.vue";
import AppText from "@/spared/AppText.vue";
import {ref} from "vue";

const footer = ref<boolean>(true)
const close = (): void => {
    footer.value = false
}
</script>

<template>
    <div class="footer" v-if="footer">
        <app-scroll>
            <AppText :h1="true"/>
            <AppText width="80%"/>
            <AppText width="90%"/>
            <AppText width="80%"/>
            <AppText width="70%"/>
            <AppText width="60%"/>
            <AppText width="50%"/>
            <AppText width="80%"/>
            <AppText width="90%"/>
            <AppText width="80%"/>
            <AppText width="70%"/>
            <AppText width="60%"/>
            <AppText width="50%"/>
            <AppText width="80%"/>
            <AppText width="90%"/>
            <AppText width="80%"/>
            <AppText width="70%"/>
            <AppText width="60%"/>
            <AppText width="50%"/>

        </app-scroll>
        <AppClose @action="close"/>
    </div>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: 72px;
  flex-grow: 1;
  border-radius: var(--main-radius);
  background: var(--add-background);
  border: 1px solid var(--border-color);
  padding: 18px;
  position: relative;
  display: flex;
  flex-direction: column;

  .scroll-block {
    margin-right: 50px;
    --scroll-padding: 0;

    .app-text {
      margin-left: 0;
    }
  }
}
</style>