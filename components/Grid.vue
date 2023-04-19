<template>
    <div>
        <h1>Grid</h1>
        <pre>{{ document }}</pre>
        <!-- <pre>{{ br-component.getModels().pagination.$ref }}</pre> -->
        <!-- <pre>{{ data }}</pre> -->
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ component: Component, page: Page }>();
const { component, page } = props;

const documentRef = computed(() => props.component.getModels().document);
const document = computed(() => documentRef.value && props.page.getContent(documentRef.value));
// const data = document?.getData()

console.log(document)

</script>