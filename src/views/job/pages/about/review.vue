<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
</script>
<template>
    <!-- Reviews-->
    <section class="container pt-lg-2 pb-5 mb-md-4 mb-lg-5">
        <div class="row">
            <div class="col-md-4 mb-3 mb-md-0"><img class="d-block mx-auto" src="@/assets/img/job-board/illustrations/reviews.svg" alt="Illustration"></div>
            <div class="col-lg-1 d-none d-lg-block">
                <hr class="hr-vertical mx-auto">
            </div>
            <div class="col-md-8 col-lg-7">
                <div class="tns-carousel-wrapper">
                    <swiper :loop="true">
                        <SwiperSlide class="p-3">
                            <div class="card border-0 shadow-sm">
                                <blockquote class="blockquote card-body">
                                    <p>Eu massa, pharetra massa integer. Sed molestie sollicitudin morbi ultrices. Odio is euismodtelle faucibus. Venenatis nunc, tristique turpis cras sodales. In dui, viverra et ac. Id justo, varius nunc, faucibus erat proin elit. Amet diam, aliquet nec quis vel. Donec ut quisque in lorem sapien luctus pellentesque.</p>
                                    <footer class="d-flex align-items-center"><img src="@/assets/img/job-board/company/zalo-lg.png" width="56" alt="Zalo Logo">
                                        <div class="ps-3">
                                            <h6 class="fs-base mb-0">Zalo Tech Company</h6>
                                            <div class="text-muted fw-normal fs-sm">Floyd Miles, Head of HR Department</div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide class="p-3">
                            <div class="card border-0 shadow-sm">
                                <blockquote class="blockquote card-body">
                                    <p>Diam dictumst scelerisque vel, nunc etiam tincidunt senectus ullamcorper. Scel pulvinarnettes luctus pellentesque ultrices congue blandit. Nec, blandit nisi odio donec sagittis dui ornare sodales ultricies. Rhoncus mattis lacus consequat dolor lectus dui cursus orci. Volutpat tortor quam odio sed arcu. </p>
                                    <footer class="d-flex align-items-center"><img src="@/assets/img/job-board/company/kibana-lg.png" width="56" alt="Kibana Logo">
                                        <div class="ps-3">
                                            <h6 class="fs-base mb-0">Elastic Kibana</h6>
                                            <div class="text-muted fw-normal fs-sm">Guy Hawkins, Senior HR</div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </SwiperSlide>
                    </swiper>
                </div>
                <div class="tns-carousel-controls justify-content-center justify-content-md-start my-2 ms-md-2" id="agents-carousel-controls">
                    <button class="mx-2" type="button"><i class="fi-chevron-left"></i></button>
                    <button class="mx-2" type="button"><i class="fi-chevron-right"></i></button>
                </div>
            </div>
        </div>
    </section>
</template>