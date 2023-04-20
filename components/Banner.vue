<template>
    <div>
        <h1>Banner</h1>
        <!-- <pre>{{ imageUrl }}</pre> -->
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{ component: Component, page: Page }>();
    const { component, page } = props;

    // // console.log(component);

    // const document = page.getDocument();
    // // const { Image } = document.getData();

    // const { Image } = component.getProperties();
    // // const imageUrl = Image.getOriginal().getUrl();
</script>