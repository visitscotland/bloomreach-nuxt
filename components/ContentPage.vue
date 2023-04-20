<template>
    <div>
        <h1>{{ title }}</h1>
        <div v-html="content.value" />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ component: Component, page: Page }>();
const { component, page } = props;

const document = page.getDocument();
const { title, introduction, content } = document.getData();


</script>