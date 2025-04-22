<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { ref } from 'vue'

const modules = [Navigation, Pagination, Scrollbar, A11y]
const swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        582: {
            slidesPerView: 3,
            spaceBetween: 10
        },

        992: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        1420: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        1920: {
            slidesPerView: 6,
            spaceBetween: 20
        }
    }
});
</script>

<template>
    <!-- Top companies-->
    <section class="container pb-5 mb-md-3 mt-n2 mt-sm-0">
        <h2 class="h3 text-center text-sm-start mb-sm-4">Top companies</h2>
        <div class="tns-carousel-wrapper tns-nav-outside tns-nav-outside-flush">
            <swiper :autoplay="true" :breakpoints="swiperOptions.breakpoints" :slidesPerView="6" :spaceBetween="25" class="h-100vh">
                <SwiperSlide>
                    <div class="pb-1">
                        <router-link class="swap-image" to="/job-board-employer-single">
                            <img class="swap-to" src="@/assets/img/job-board/company/microsoft.svg" width="196" alt="Microsoft" />
                            <img class="swap-from" src="@/assets/img/job-board/company/microsoft-g.svg" width="196" alt="Microsoft" />
                        </router-link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="pb-1">
                        <router-link class="swap-image" to="/job-board-employer-single">
                            <img class="swap-to" src="@/assets/img/job-board/company/indeed.svg" width="196" alt="Indeed" />
                            <img class="swap-from" src="@/assets/img/job-board/company/indeed-g.svg" width="196" alt="Indeed" />
                        </router-link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="pb-1">
                        <router-link class="swap-image" to="/job-board-employer-single">
                            <img class="swap-to" src="@/assets/img/job-board/company/cocacola.svg" width="196" alt="Coca Cola" /><img class="swap-from" src="@/assets/img/job-board/company/cocacola-g.svg" width="196" alt="Coca Cola" /></router-link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="pb-1">
                        <router-link class="swap-image" to="/job-board-employer-single">
                            <img class="swap-to" src="@/assets/img/job-board/company/slack.svg" width="196" alt="Slack" />
                            <img class="swap-from" src="@/assets/img/job-board/company/slack-g.svg" width="196" alt="Slack" />
                        </router-link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="pb-1">
                        <router-link class="swap-image" to="/job-board-employer-single">
                            <img class="swap-to" src="@/assets/img/job-board/company/walmart.svg" width="196" alt="Walmart" />
                            <img class="swap-from" src="@/assets/img/job-board/company/walmart-g.svg" width="196" alt="Walmart" />
                        </router-link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="pb-1">
                        <router-link class="swap-image" to="/job-board-employer-single">
                            <img class="swap-to" src="@/assets/img/job-board/company/google.svg" width="196" alt="Google" />
                            <img class="swap-from" src="@/assets/img/job-board/company/google-g.svg" width="196" alt="Google" />
                        </router-link>
                    </div>
                </SwiperSlide>
            </swiper>
        </div>
    </section>
</template>
