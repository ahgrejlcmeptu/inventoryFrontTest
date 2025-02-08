<script setup lang="ts">
import TheInformation from "@/widgets/information/TheInformation.vue";
import TheTable from "@/widgets/table/TheTable.vue";
import TheSearch from "@/widgets/search/TheSearch.vue";
import AppToggle from "@/spared/AppToggle.vue";
import {useItems} from "@/app/stores/items.ts";
import {useConfig} from "@/app/stores/config.ts";
import {onMounted, ref} from "vue";

const config = useConfig()
onMounted(() => {
    useItems().initialIndex()
})


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
        <div class="inventory__bottom">
            <TheSearch/>
        </div>
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
    height: 50%;
    flex-grow: 1;
    gap: 24px;
  }

  &__bottom {
    width: 100%;
  }

  &__theme {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
