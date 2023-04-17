<script setup>
import axios from 'axios';
import ContentPage from './components/ContentPage.vue';

// const { VUE_APP_BRXM_ENDPOINT } = useRuntimeConfig();
// console.log(VUE_APP_BRXM_ENDPOINT)

// Get url of current page.
const route = useRoute().path === '/' ? '' : useRoute().path;

const endpoint = `https://trial-c11dt83y.bloomreach.io/delivery/site/v1/channels/org-1/pages${route}`;
// const endpoint = 'https://trial-c11dt83y.bloomreach.io/delivery/site/v1/channels/org-1/pages';

const configuration = {
    endpoint,
    httpClient: axios,
};
const mapping = { ContentPage };
</script>
    
<template>
    <div>
        <br-page :configuration="configuration" :mapping="mapping" />
    </div>
</template>