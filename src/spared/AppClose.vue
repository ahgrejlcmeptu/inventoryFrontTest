<script setup lang="ts">
defineEmits(['action'])
</script>

<template>
    <div class="app-close" @click="$emit('action')">
        <svg viewBox="0 0 12 12">
            <path d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z"/>
        </svg>
    </div>
</template>

<style scoped lang="scss">
.app-close {
    position: absolute;
    top: 14px;
    right: 14px;
    cursor: pointer;

    svg {
        display: block;
        width: var(--close-size, 12px);
        height: var(--close-size, 12px);
        fill: var(--close-color, var(--main-white));
    }
}
</style>