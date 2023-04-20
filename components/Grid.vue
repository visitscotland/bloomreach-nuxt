<template>
    <div class="container mb-4">
        <div class="row">
            <Place 
                v-for="(item, key) in itemRefs" 
                :key="key" 
                :document="page.getContent(item.$ref)" 
                :page="props.page" 
            />
        </div>

        <div class="row">
            <div class="col d-flex justify-content-center">
                <button 
                    class="btn btn-primary" 
                    v-if="!viewAll" 
                    @click="showMore"
                >
                View all places
            </button>
            </div>
        </div>


       
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

<style lang="scss" scoped>
    .btn-primary {
		background: #af006e;
		border: 2px solid #af006e;
		color: #fff;
		font-weight: 600;

		&:focus,
		&:hover {
			background: #660041;
			border-color: #660041;
			color: #fff;
		}
	}
</style>