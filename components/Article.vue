<template>
    <div>
        <h2>{{ title }}</h2>
        <div v-html="body" />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ component: Component, page: Page }>();
const { component, page } = props;

const documentRef = component.model.content.$ref;
const document = page.getContent(documentRef);
const data = document.data;
const title = data.title;
const body = data.body.value;
</script>
