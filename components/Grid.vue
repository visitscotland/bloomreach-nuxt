<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Places</h2>
            </div>
        </div>
        <div class="row">
            <Place v-for="(item, key) in itemData" :key="key" :document="page.getContent(item.$ref)" :page="props.page" />
        </div>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{ component: Component, page: Page }>();
    const { component, page } = props;

    const documentRef = component.model.models.pagination.$ref;
    const document = page.getContent(documentRef);

    // Get grid item references.
    const items = document.model.items;

    // Filter out any content that doesn't use the Place content type.
    const itemData = items.filter((item) => {
        const data = page.getContent(item.$ref).model.data;
        if (data.contentType === 'brxsaas:Place') {
            return data;
        }
    });
</script>