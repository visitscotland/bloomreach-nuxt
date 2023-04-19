<script setup>
import axios from 'axios';
import ContentPage from './components/ContentPage.vue';
import Banner from './components/Banner.vue';
import Grid from './components/Grid.vue';

// const { VUE_APP_BRXM_ENDPOINT } = useRuntimeConfig();
// console.log(VUE_APP_BRXM_ENDPOINT)

// Get url of current page.
const route = useRoute().path;

// const endpoint = `https://trial-c11dt83y.bloomreach.io/delivery/site/v1/channels/trip-planner/pages`;
// const endpoint = `https://trial-c11dt83y.bloomreach.io/delivery/site/v1/channels/trip-planner/pages?preview-token=a7d348bb-adaf-483b-8733-c2639b39a643`;
const endpoint = `https://trial-c11dt83y.bloomreach.io/delivery/site/v1/channels/trip-planner/pages?preview-token=47053ca9-2817-448b-b266-b2a79a06e73c`;

const configuration = {
    path: route,
    endpoint,
    httpClient: axios,
};
const mapping = { ContentPage, Banner, Grid };
</script>
    
<template>
    <div>
        <br-page :configuration="configuration" :mapping="mapping" />
    </div>
</template>