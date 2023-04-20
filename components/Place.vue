<template>
    <div class="col-12 col-sm-6 col-lg-4">
        <div class="card mb-4 vs-card">
            <img class="card-img-top" :src="imageUrl" alt="" />
            <div class="card-body">
                <h3 class="card-title h5">{{ data.title }}</h3>
        
                <template v-html="data.description.value" />
                <p><strong>Latitude</strong>: {{ data.lat }}, <strong>Longitude</strong>: {{ data.lon }}</p>
                <p><strong>Product ID</strong>: {{ data.productId }}</p>
            </div>
            <div class="card-footer">
                <a :href="data.url" class="btn btn-primary">More about {{ data.displayName }}</a>
            </div>
        </div>
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
	a.btn-primary {
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

	.card-footer{
		background: none;
		border-top: 0;
		padding: 1rem;
		padding-top: 0;
	}

	img {
		width: 100%;
	}
</style>
