<script lang="ts" setup>
import Hero from './hero.vue';
import Categories from './categories.vue';
import Cta from './cta.vue';
import MCta from './mocta.vue';
import JobCity from './job-city.vue'
import Steps from './steps.vue';
import Pricing from './pricing.vue';
import Reviews from './reviews.vue';
</script>

<template>
    <Hero />

    <Categories />

    <Cta />

    <Steps />

    <MCta />

    <Pricing />

    <JobCity />

    <Reviews />
    
    <section class="container pt-lg-4 pb-5 mb-md-4 mb-lg-5 text-center">
        <h2 class="pb-4">The fastest way to find an employee!</h2>
        <a class="btn btn-primary btn-lg rounded-pill ms-sm-auto" href="javascript:void(0);">Get started<i class="fi-chevron-right fs-sm ms-2"></i>
        </a>
    </section>
</template>