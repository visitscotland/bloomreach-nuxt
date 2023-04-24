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

const { data: endpoint } = await useFetch('/api/getEndpoint');

const configuration = {
    path: route,
    endpoint: endpoint.value,
    httpClient: axios,
};
const mapping = { ContentPage, Banner, Grid, Article, Place };
</script>
