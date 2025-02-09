<script setup lang="ts">
import TheInformation from "@/widgets/information/TheInformation.vue";
import TheTable from "@/widgets/table/TheTable.vue";
import TheFooter from "@/widgets/footer/TheFooter.vue";
import AppToggle from "@/spared/AppToggle.vue";
import {useConfig} from "@/app/stores/config.ts";

const config = useConfig()

</script>

<template>
    <div :class="['inventory', {'theme_light': config.themeLight}]">
        <div class="inventory__theme">
            <AppToggle :active="config.themeLight" @action="config.updateTheme"/>
        </div>
        <div class="inventory__top">
            <TheInformation/>
            <TheTable/>
        </div>
        <TheFooter/>
    </div>
</template>

<style scoped lang="scss">
.inventory {
  color: var(--light-text);
  padding: 32px;
  background: var(--main-background);
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;

  &__top {
    display: flex;
    width: 100%;
    height: 500px;
    flex-grow: 1;
    gap: 24px;
  }

  &__theme {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
