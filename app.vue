<template>
    <Navbar/>
    <div class="container">
        <br-page :configuration="configuration" :mapping="mapping" />
    </div>
    <Footer/>
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

const endpoint = `https://trial-c11dt83y.bloomreach.io/delivery/site/v1/channels/trip-planner/pages?preview-token=ac39437d-0fe8-4f90-8f78-4dadb6d2315e`;

const configuration = {
    path: route,
    endpoint,
    httpClient: axios,
};
const mapping = { ContentPage, Banner, Grid, Article, Place };
</script>
