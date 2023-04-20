<template>
    <Navbar/>
    <div class="container">
        <br-page :configuration="configuration" :mapping="mapping" />
    </div>
</template>

<script setup>
import axios from 'axios';
import ContentPage from './components/ContentPage.vue';
import Banner from './components/Banner.vue';
import Grid from './components/Grid.vue';
import Article from './components/Article.vue';
import Place from './components/Place.vue';

// Get url of current page.
const route = useRoute().path;

const endpoint = `https://trial-c11dt83y.bloomreach.io/delivery/site/v1/channels/trip-planner/pages?preview-token=e97e4b9b-be48-48ab-99c1-420e1cf29d61`;

const configuration = {
    path: route,
    endpoint,
    httpClient: axios,
};
const mapping = { ContentPage, Banner, Grid, Article, Place };
</script>
