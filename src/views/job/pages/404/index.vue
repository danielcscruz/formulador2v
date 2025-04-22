<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie';

import astronautJSON from '@/assets/json/animation-job-board-404.json';
document.body.classList.add("bg-secondary")
</script>
<template>
    <main class="page-wrapper">
        <!-- Page content-->
        <section class="d-flex align-items-center position-relative min-vh-100 pt-sm-5 pt-4 pb-5" style="background: radial-gradient(95.96% 126.3% at 88.07% 109.91%, #F4F1FF 6.21%, #F5F4F8 40.55%, rgba(245, 244, 248, 0) 100%);">
            <div class="container">
                <div class="row gy-4">
                    <div class="col-md-5 align-self-sm-end mt-lg-5 pt-lg-5">
                        <div class="ratio ratio-1x1 mx-auto" style="max-width: 526px;">
                            <Vue3Lottie :animationData="astronautJSON" class="py-4" />
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6 offset-lg-2 offset-md-1 text-md-start text-center">
                        <h1 class="display-3 mb-4 pb-md-3">Ops, <br> essa página não existe <span class='text-nowrap'>:(</span></h1>
                        <p class="lead mb-md-5 mb-4">O link que você clicou pode estar quebrado ou a página não existe. Volte para a <a href='/'>homepage</a>.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>