<template>
    <div>
        <h1>Place</h1>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ component: Component, page: Page }>();
const { component, page } = props;

console.log(component, page);
console.log(page.getDocument());
</script>
