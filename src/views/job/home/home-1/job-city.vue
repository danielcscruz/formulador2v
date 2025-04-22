<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { ref } from 'vue'
const modules = ref([Navigation]);
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
            slidesPerView: 5,
            spaceBetween: 20
        },
        1920: {
            slidesPerView: 5,
            spaceBetween: 20    
        }
    }
});
</script>

<template>
    <!-- Jobs by city-->
    <section class="container pt-2 pt-sm-0 pb-5 mb-md-4">
        <div class="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">
            <h2 class="h3 mb-sm-0">Jobs by city</h2>
            <router-link class="btn btn-link fw-normal p-0" to="/job-board-catalog">View all<i class="fi-arrow-long-right ms-2"></i></router-link>
        </div>
        <div class="tns-carousel-wrapper tns-controls-outside-xxl tns-nav-outside">
            <swiper :autoplay="true" :modules="modules" :breakpoints="swiperOptions.breakpoints"  :slidesPerView="5" :spaceBetween="25" :loop="true" class="h-100vh">
                <SwiperSlide>
                    <div>
                        <div class="position-relative">
                            <div class="bg-secondary rounded-3 p-4 mb-3">
                                <img class="d-block mx-auto" src="@/assets/img/job-board/city/new-york.svg" alt="New York" />
                            </div>
                            <div class="text-center">
                                <router-link class="nav-link stretched-link p-0" to="/job-board-catalog">New York</router-link>
                                <span class="fs-xs">328 jobs</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div class="position-relative">
                            <div class="bg-secondary rounded-3 p-4 mb-3">
                                <img class="d-block mx-auto" src="@/assets/img/job-board/city/paris.svg" alt="New York" />
                            </div>
                            <div class="text-center">
                                <router-link class="nav-link stretched-link p-0" to="/job-board-catalog">New York</router-link>
                                <span class="fs-xs">328 jobs</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div class="position-relative">
                            <div class="bg-secondary rounded-3 p-4 mb-3">
                                <img class="d-block mx-auto" src="@/assets/img/job-board/city/london.svg" alt="London" />
                            </div>
                            <div class="text-center">
                                <router-link class="nav-link stretched-link p-0" to="/job-board-catalog">London</router-link>
                                <span class="fs-xs">74 jobs</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div class="position-relative">
                            <div class="bg-secondary rounded-3 p-4 mb-3">
                                <img class="d-block mx-auto" src="@/assets/img/job-board/city/bangkok.svg" alt="Bangkok" />
                            </div>
                            <div class="text-center">
                                <router-link class="nav-link stretched-link p-0" to="/job-board-catalog">Bangkok</router-link>
                                <span class="fs-xs">92 jobs</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div class="position-relative">
                            <div class="bg-secondary rounded-3 p-4 mb-3">
                                <img class="d-block mx-auto" src="@/assets/img/job-board/city/barcelona.svg" alt="Barcelona" />
                            </div>
                            <div class="text-center">
                                <router-link class="nav-link stretched-link p-0" to="/job-board-catalog">Barcelona</router-link>
                                <span class="fs-xs">204 jobs</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div class="position-relative">
                            <div class="bg-secondary rounded-3 p-4 mb-3">
                                <img class="d-block mx-auto" src="@/assets/img/job-board/city/dubai.svg" alt="Dubai" />
                            </div>
                            <div class="text-center">
                                <router-link class="nav-link stretched-link p-0" to="/job-board-catalog">Dubai</router-link>
                                <span class="fs-xs">196 jobs</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div class="position-relative">
                            <div class="bg-secondary rounded-3 p-4 mb-3">
                                <img class="d-block mx-auto" src="@/assets/img/job-board/city/kuala-lumpur.svg" alt="Kuala Lumpur" />
                            </div>
                            <div class="text-center">
                                <router-link class="nav-link stretched-link p-0" to="/job-board-catalog">Kuala Lumpur</router-link>
                                <span class="fs-xs">143 jobs</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </swiper>
        </div>
    </section>
</template>
