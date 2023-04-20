<template>
    <div>
        <a :href="`/place/${data.name}`">
            <h3>{{ data.displayName }}</h3>
            <img :src="imageUrl" alt="" />
        </a>
    </div>
</template>

<script setup>
const props = defineProps({
    document: Object,
    page: Object,
});

// Get date for the place.
const data = props.document.model.data;

// Get the image content and URL.
const imageContent = props.page.getContent(data.image.$ref);
const imageUrl = imageContent.getOriginal().getUrl();
</script>

<style lang="scss" scoped>
    a.button {
        background: #af006e;
        border: 2px solid #af006e;
        border-radius: 1000px;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-weight: 600;
        padding: 0.5em 1em;
        position: relative;
        text-decoration: none;
        user-select: none;

        &:focus,
        &:hover {
            background: #660041;
            border-color: #660041;
            color: #fff;
        }
    }

    img {
        width: 400px;
    }
</style>