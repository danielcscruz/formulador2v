<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'

import { ref } from 'vue'

const swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        582: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});
</script>
<template>
    <!-- Related jobs (carousel)-->
    <section class="container pt-md-2 pb-5 mb-md-4">
        <div class="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">
            <h2 class="h3 mb-sm-0">You may be interested in</h2>
            <router-link class="btn btn-link fw-normal p-0" to="/job-board-catalog">View all<i class="fi-arrow-long-right ms-2"></i></router-link>
        </div>
        <div class="tns-carousel-wrapper tns-controls-outside-xxl tns-nav-outside tns-nav-outside-flush">
            <swiper :autoplay="true" :slidesPerView="3" :breakpoints="swiperOptions.breakpoints" :spaceBetween="25" :loop="true" class="h-100vh">
                <SwiperSlide>
                    <!-- Item-->
                    <div class="pb-4">
                        <div class="card bg-secondary card-hover h-100">
                            <div class="card-body pb-3">
                                <div class="d-flex align-items-center mb-2">
                                    <img class="me-2" src="@/assets/img/job-board/company/it-pro.png" width="24" alt="IT Pro Logo" />
                                    <span class="fs-sm text-dark opacity-80 px-1">IT Pro TV</span>
                                    <span class="badge bg-faded-danger rounded-pill fs-sm ms-auto">Hot</span>
                                </div>
                                <h3 class="h6 card-title pt-1 mb-2">
                                    <a class="text-nav stretched-link text-decoration-none" href="javascript:void(0);">Business Analyst</a>
                                </h3>
                                <p class="fs-sm mb-0">
                                    Blandit a tincidunt arcu nulla. Sem neque, rhoncus non odio nulla maecenas elit
                                    praesent. Orci tristique velit mauris cursus nibh. Hendrerit et dictum sed...
                                </p>
                            </div>
                            <div class="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
                                <div class="fs-sm">
                                    <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Chicago</span><span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$7,500</span>
                                </div>
                                <button class="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay" type="button" data-bs-toggle="tooltip" title="Add to saved jobs">
                                    <i class="fi-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <!-- Item-->
                    <div class="pb-4">
                        <div class="card bg-secondary card-hover h-100">
                            <div class="card-body pb-3">
                                <div class="d-flex align-items-center mb-2">
                                    <img class="me-2" src="@/assets/img/job-board/company/xbox.png" width="24" alt="Xbox Logo" />
                                    <span class="fs-sm text-dark opacity-80 px-1">Xbox Company</span>
                                    <span class="badge bg-faded-accent rounded-pill fs-sm ms-auto">Featured</span>
                                </div>
                                <h3 class="h6 card-title pt-1 mb-2">
                                    <a class="text-nav stretched-link text-decoration-none" href="javascript:void(0);">Full-Stack Developer</a>
                                </h3>
                                <p class="fs-sm mb-0">
                                    Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor
                                    volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque...
                                </p>
                            </div>
                            <div class="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
                                <div class="fs-sm">
                                    <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Washington</span><span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$13,000</span>
                                </div>
                                <button class="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay" type="button" data-bs-toggle="tooltip" title="Add to saved jobs">
                                    <i class="fi-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <!-- Item-->
                    <div class="pb-4">
                        <div class="card bg-secondary card-hover h-100">
                            <div class="card-body pb-3">
                                <div class="d-flex align-items-center mb-2">
                                    <img class="me-2" src="@/assets/img/job-board/company/xampp.png" width="24" alt="XAMPP Logo" /><span class="fs-sm text-dark opacity-80 px-1">XAMPP Company</span><span class="badge bg-faded-danger rounded-pill fs-sm ms-auto">Hot</span>
                                </div>
                                <h3 class="h6 card-title pt-1 mb-2">
                                    <a class="text-nav stretched-link text-decoration-none" href="javascript:void(0);">Business Analyst</a>
                                </h3>
                                <p class="fs-sm mb-0">
                                    Auctor elit in aenean sodales mattis. Ultricies nec eu augue sit. Ornare pulvinar
                                    enim fames orci enim in libero. Eu, lorem leo netus velit egestas risus...
                                </p>
                            </div>
                            <div class="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
                                <div class="fs-sm">
                                    <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>New Jersey</span>
                                    <span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$6,500</span>
                                </div>
                                <button class="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay" type="button" data-bs-toggle="tooltip" title="Add to saved jobs">
                                    <i class="fi-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <!-- Item-->
                    <div class="pb-4">
                        <div class="card bg-secondary card-hover h-100">
                            <div class="card-body pb-3">
                                <div class="d-flex align-items-center mb-2">
                                    <img class="me-2" src="@/assets/img/job-board/company/zapier.png" width="24" alt="Zapier Logo" />
                                    <span class="fs-sm text-dark opacity-80 px-1">Zapier</span>
                                    <span class="badge bg-faded-info rounded-pill fs-sm ms-auto">New</span>
                                </div>
                                <h3 class="h6 card-title pt-1 mb-2">
                                    <a class="text-nav stretched-link text-decoration-none" href="javascript:void(0);">Onboarding Specialist</a>
                                </h3>
                                <p class="fs-sm mb-0">
                                    Blandit a tincidunt arcu nulla. Sem neque, rhoncus non odio nulla maecenas elit
                                    praesent. Orci tristique velit mauris cursus nibh. Hendrerit et dictum sed...
                                </p>
                            </div>
                            <div class="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
                                <div class="fs-sm">
                                    <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Houston</span><span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$4,000</span>
                                </div>
                                <button class="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay" type="button" data-bs-toggle="tooltip" title="Add to saved jobs">
                                    <i class="fi-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </swiper>
        </div>
    </section>
</template>
