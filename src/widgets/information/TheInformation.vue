<script setup lang="ts">
import AppImage from "@/spared/AppImage.vue";
import AppText from "@/spared/AppText.vue";
</script>

<template>
    <div class="information block-card">
        <AppImage class="mb-20" src="/img/Img.jpg"/>
        <div class="scroll-block">
            <AppText width="80%" :title="true"/>
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
        </div>
    </div>
</template>

<style scoped lang="scss">
.information {
  width: 236px;
  background: var(--add-background);
  border-radius: var(--main-radius);
  border: 1px solid var(--border-color);
}
</style>