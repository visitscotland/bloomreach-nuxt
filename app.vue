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
import { ENDPOINT } from './utils/constants';

// Get url of current page.
const route = useRoute().path;

const configuration = {
    path: route,
    endpoint: ENDPOINT,
    httpClient: axios,
};
const mapping = { ContentPage, Banner, Grid, Article, Place };
</script>
