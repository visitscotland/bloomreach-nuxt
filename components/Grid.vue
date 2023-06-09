<template>
    <div class="container mb-4">
        <div class="row mb-4">
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
    import { usePlacesStore } from '../stores/PlacesStore';
    const placesStore = usePlacesStore()

    const props = defineProps<{ component: Component, page: Page }>();
    const { component, page } = props;
    const itemsPerPage = ref(3);
    const viewAll = ref(false);

    const documentRef = component.model.models.pagination.$ref;
    const document = page.getContent(documentRef);

    // Get grid item references.
    const items = document.model.items;

    const itemsData = computed(() => items.map((item) => {
        return getItemContent(item.$ref);
    }));

    // Filter out any content that doesn't use the Place content type.
    const itemRefs = computed(() => items.filter((item) => {
        const data = getItemContent(item.$ref);
        
        if (data.contentType === 'brxsaas:Place') {
            return data; 
        }

    }).slice(0, itemsPerPage.value));

    function showMore() {
        itemsPerPage.value = Object.keys(itemRefs).length;
        viewAll.value = true;
    }

    const addPlacesToStore = () => {
        placesStore.updatePlaces(itemsData)
    }

    function getItemContent(ref){
        return page.getContent(ref).model.data;
    }

    onMounted(() => {
        addPlacesToStore();
    })
    
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