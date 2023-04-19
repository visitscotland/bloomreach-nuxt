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
  <div class="page-wrapper">

      <Header>
          <Navbar />
      </Header>
    <div class="content-wrapper">
      <br-page :configuration="configuration" :mapping="mapping" />
    </div>
  </div>
</template>

<style>
:root {
    --contentMaxWidth: 80ch;
    --color-100: #b130b4;
    --color-200: #7255bd;

    /* px value based on rem 16px */
    --spacer-0: 0;        /* 0 */
    --spacer-1: 0.25rem;  /* 4px */
    --spacer-2: 0.5rem;   /* 8px */
    --spacer-3: 0.75rem;  /* 12px */
    --spacer-4: 1rem;     /* 16px */
    --spacer-5: 1.25rem;  /* 20px */
    --spacer-6: 1.5rem;   /* 24px */
    --spacer-7: 1.75rem;  /* 28px */
    --spacer-8: 2rem;     /* 32px */
    --spacer-9: 3rem;     /* 48px */
    --spacer-10: 4rem;    /* 64px */
    --spacer-11: 5rem;    /* 80px */
    --spacer-12: 6rem;    /* 96px */


}

html {
  font-family: sans-serif;
}
body {
  margin: 0;
  padding: 0;
}
.content-wrapper {
    max-width: var(--contentMaxWidth);
    margin: auto;
}

a {
  font-family: cursive;
}

/* Utility classes */

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.gap-1 {
  gap: var(--spacer-1);
}

.gap-5 {
  gap:var(--spacer-5);
}

.gap-8 {
  gap:var(--spacer-8);
}

.gap-9 {
  gap:var(--spacer-9);
}
</style>