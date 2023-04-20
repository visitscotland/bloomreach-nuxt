<template>
    <div class="content-page container">
        <div class="row">
            <div class="col-8">
                <h1 v-if="title">
                    {{ title }}
                </h1>
                <p class="introduction" v-if="introduction">
                    {{ introduction }}
                </p>
                <div v-if="content.value">
                    <p v-html="content.value" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{ component: Component, page: Page }>();
    const { component, page } = props;

    const document = page.getDocument();
    const { title, introduction, content } = document.getData();
</script>


<style lang="scss" scoped>
    .content-page{
        margin-bottom: 1.5rem;
        
        .introduction {
            font-size: 1.2rem;
            color: #6A6366;
        }
    }	
</style>