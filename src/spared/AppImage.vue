<script setup lang="ts">
defineProps(['src', 'alt'])
</script>

<template>
<div class="app-img">
    <img :src :alt>
</div>
</template>

<style scoped lang="scss">
.app-img {
  img {
    display: block;
    border-radius: var(--main-radius);
    max-width: 100%;
  }
}
</style>