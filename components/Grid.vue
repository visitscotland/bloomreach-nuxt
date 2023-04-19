<template>
    <div>
        <h1>Grid</h1>
        <pre>{{ document }}</pre>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ component: Component, page: Page }>();
const { component, page } = props;

// console.log(component)

const documentRef = component.model.models.pagination.$ref;
const document = page.getContent(documentRef);

const items = document.model.items;
const item1Ref = items[0].$ref;

const item = computed(() => page.getContent(item1Ref));

console.log(item);

// console.log(document);
</script>