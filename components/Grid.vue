<template>
    <div>
        <h2>Places</h2>
        <GridPlace v-for="(item, key) in itemRefs" :key="key" :document="page.getContent(item.$ref)" :page="props.page" />
        <button v-if="!viewAll" @click="showMore">View all places</button>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ component: Component, page: Page }>();
const { component, page } = props;
const itemsPerPage = ref(3);
const viewAll = ref(false);

const documentRef = component.model.models.pagination.$ref;
const document = page.getContent(documentRef);

// Get grid item references.
const items = document.model.items;

// Filter out any content that doesn't use the Place content type.
const itemRefs = computed(() => items.filter((item) => {
    const data = page.getContent(item.$ref).model.data;
    if (data.contentType === 'brxsaas:Place') {
        return data;
    }
}).slice(0, itemsPerPage.value));

function showMore() {
    itemsPerPage.value = Object.keys(itemRefs).length;
    viewAll.value = true;
}
</script>