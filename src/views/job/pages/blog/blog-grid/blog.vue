<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'

import img06 from '@/assets/img/job-board/blog/06.jpg'
import img07 from '@/assets/img/job-board/blog/07.jpg'
import img08 from '@/assets/img/job-board/blog/08.jpg'
import img09 from '@/assets/img/job-board/blog/09.jpg'
import img10 from '@/assets/img/job-board/blog/10.jpg'
import img11 from '@/assets/img/job-board/blog/11.jpg'
</script>
<template>
    <h1 class="pb-3">Blog</h1>
    <div class="row">
        <!-- List of articles-->
        <div class="col-lg-8">
            <div class="border-bottom pb-2">
                <div class="row">
                    <!-- Item-->
                    <article class="col-sm-6 mb-4">
                        <div class="card card-hover border-0 shadow-sm h-100">
                            <router-link class="card-img-top overflow-hidden position-relative" to="/job-board-blog-single">
                                <span class="badge bg-faded-info position-absolute top-0 end-0 fs-sm rounded-pill m-3">New</span>
                                <img class="d-block" src="@/assets/img/job-board/blog/01.jpg" alt="Image" /></router-link>
                            <div class="card-body pb-3">
                                <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Guides</a>
                                <h3 class="fs-base pt-1 mb-2">
                                    <router-link class="nav-link" to="/job-board-blog-single">How to Hire World-Class Engineers</router-link>
                                </h3>
                                <p class="fs-sm text-muted m-0">
                                    Nunc, hac augue ante in facilisi id. Consectetur egestas orci, arcu ac tellus.
                                    Morbi orci, nunc dictum...
                                </p>
                            </div>
                            <a class="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1" href="javascript:void(0);"><img class="rounded-circle" src="@/assets/img/avatars/16.png" width="44" alt="Avatar" />
                                <div class="ps-2">
                                    <h6 class="fs-sm text-nav lh-base mb-1">Bessie Cooper</h6>
                                    <div class="d-flex text-body fs-xs">
                                        <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 me-1"></i>May 23</span>
                                        <span><i class="fi-chat-circle opacity-70 me-1"></i>4 comments</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </article>
                    <!-- Item-->
                    <article class="col-sm-6 mb-4">
                        <div class="card card-hover border-0 shadow-sm h-100">
                            <router-link class="card-img-top overflow-hidden position-relative" to="/job-board-blog-single">
                                <span class="badge bg-faded-info position-absolute top-0 end-0 fs-sm rounded-pill m-3">New</span>
                                <img class="d-block" src="@/assets/img/job-board/blog/02.jpg" alt="Image" /></router-link>
                            <div class="card-body pb-3">
                                <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Tips &amp; Advice</a>
                                <h3 class="fs-base pt-1 mb-2">
                                    <router-link class="nav-link" to="/job-board-blog-single">15 Tips for a Better Resume</router-link>
                                </h3>
                                <p class="fs-sm text-muted m-0">
                                    Fusce tristique vitae pulvinar potenti fermentum sapien. Vehicula ut faucibus quis
                                    neque at blandit...
                                </p>
                            </div>
                            <a class="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1" href="javascript:void(0);"><img class="rounded-circle" src="@/assets/img/avatars/17.png" width="44" alt="Avatar" />
                                <div class="ps-2">
                                    <h6 class="fs-sm text-nav lh-base mb-1">Ralph Edwards</h6>
                                    <div class="d-flex text-body fs-xs">
                                        <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 me-1"></i>May 19</span>
                                        <span><i class="fi-chat-circle opacity-70 me-1"></i>1 comment</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
            <div class="pt-4 pb-2 mt-2">
                <!-- Item-->
                <article class="card border-0 shadow-sm card-hover card-horizontal mb-4">
                    <router-link class="card-img-top" to="/job-board-blog-single" :style="{ 'background-image': `url(${img06})` }"></router-link>
                    <div class="card-body">
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Inspiration</a>
                        <h3 class="fs-base pt-1 mb-2">
                            <router-link class="nav-link" to="/job-board-blog-single">10 Ways to Stay Ahead of the Curve</router-link>
                        </h3>
                        <p class="fs-sm text-muted">
                            Ac sit tincidunt lacus dignissim volutpat dui scelerisque porttitor non. Elit at
                            ullamcorper feugiat porta adipiscing...
                        </p>
                        <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                            <img class="rounded-circle" src="@/assets/img/avatars/21.png" width="44" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-sm text-nav lh-base mb-1">Kristin Watson</h6>
                                <div class="d-flex text-body fs-xs">
                                    <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 me-1"></i>Apr 30</span>
                                    <span><i class="fi-chat-circle opacity-70 me-1"></i>No comments</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </article>
                <!-- Item-->
                <article class="card border-0 shadow-sm card-hover card-horizontal mb-4">
                    <router-link class="card-img-top" to="/job-board-blog-single" :style="{ 'background-image': `url(${img07})` }"></router-link>
                    <div class="card-body">
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Tips &amp; Advice</a>
                        <h3 class="fs-base pt-1 mb-2">
                            <router-link class="nav-link" to="/job-board-blog-single">The Stalker’s Guide to Highly Effective Guest Posting</router-link>
                        </h3>
                        <p class="fs-sm text-muted">
                            Augue diam malesuada vitae id nisl. Fringilla egestas id proin quis consequat nibh
                            quam sed. Ac vitae lectus placerat adipiscing ac...
                        </p>
                        <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                            <img class="rounded-circle" src="@/assets/img/avatars/18.png" width="44" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-sm text-nav lh-base mb-1">Annette Black</h6>
                                <div class="d-flex text-body fs-xs">
                                    <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 me-1"></i>Apr 27</span>
                                    <span><i class="fi-chat-circle opacity-70 me-1"></i>9 comments</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </article>
                <!-- Item-->
                <article class="card border-0 shadow-sm card-hover card-horizontal mb-4">
                    <router-link class="card-img-top" to="/job-board-blog-single" :style="{ 'background-image': `url(${img08})` }"></router-link>
                    <div class="card-body">
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Lifestyle</a>
                        <h3 class="fs-base pt-1 mb-2">
                            <router-link class="nav-link" to="/job-board-blog-single">You Are Never "Done" Innovating</router-link>
                        </h3>
                        <p class="fs-sm text-muted">
                            Nunc, hac augue ante in facilisi id. Consectetur egestas orci, arcu ac tellus. Morbi
                            orci, nunc dictum ullamcorper id id id arcu ut...
                        </p>
                        <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                            <img class="rounded-circle" src="@/assets/img/avatars/19.png" width="44" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-sm text-nav lh-base mb-1">Ralph Edwards</h6>
                                <div class="d-flex text-body fs-xs">
                                    <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 me-1"></i>Apr 14</span>
                                    <span><i class="fi-chat-circle opacity-70 me-1"></i>15 comments</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </article>
                <!-- Item-->
                <article class="card border-0 shadow-sm card-hover card-horizontal mb-4">
                    <router-link class="card-img-top" to="/job-board-blog-single" :style="{ 'background-image': `url(${img09})` }"></router-link>
                    <div class="card-body">
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Guides</a>
                        <h3 class="fs-base pt-1 mb-2">
                            <router-link class="nav-link" to="/job-board-blog-single">A Guide to the Most Inspiring Entrepreneurs</router-link>
                        </h3>
                        <p class="fs-sm text-muted">
                            Aenean tortor sagittis bibendum amet et dui. A, tristique habitasse vestibulum mauris.
                            Morbi elit luctus tincidunt elementum...
                        </p>
                        <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                            <img class="rounded-circle" src="@/assets/img/avatars/20.png" width="44" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-sm text-nav lh-base mb-1">Guy Hawkins</h6>
                                <div class="d-flex text-body fs-xs">
                                    <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 me-1"></i>Apr 06</span>
                                    <span><i class="fi-chat-circle opacity-70 me-1"></i>8 comments</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </article>
                <!-- Item-->
                <article class="card border-0 shadow-sm card-hover card-horizontal mb-4">
                    <router-link class="card-img-top" to="/job-board-blog-single" :style="{ 'background-image': `url(${img10})` }"></router-link>
                    <div class="card-body">
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Entertainment</a>
                        <h3 class="fs-base pt-1 mb-2">
                            <router-link class="nav-link" to="/job-board-blog-single">5 Predictions From the Past About the Future</router-link>
                        </h3>
                        <p class="fs-sm text-muted">
                            Venenatis neque ac in fusce. Enim id id in commodo et suscipit ipsum non. Consectetur
                            risus adipiscing viverra ornare parturient...
                        </p>
                        <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                            <img class="rounded-circle" src="@/assets/img/avatars/16.png" width="44" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-sm text-nav lh-base mb-1">Bessie Cooper</h6>
                                <div class="d-flex text-body fs-xs">
                                    <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 me-1"></i>Mar 27</span>
                                    <span><i class="fi-chat-circle opacity-70 me-1"></i>5 comments</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </article>
                <!-- Item-->
                <article class="card border-0 shadow-sm card-hover card-horizontal mb-4">
                    <router-link class="card-img-top" to="/job-board-blog-single" :style="{ 'background-image': `url(${img11})` }"></router-link>
                    <div class="card-body">
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Tips &amp; Advice</a>
                        <h3 class="fs-base pt-1 mb-2">
                            <router-link class="nav-link" to="/job-board-blog-single">How to Walk Around the Office</router-link>
                        </h3>
                        <p class="fs-sm text-muted">
                            Donec nullam eget lectus at varius in nisl. Ut feugiat tincidunt ultrices in sit.
                            Nunc, vitae lorem scelerisque justo, posuere leo ac turpis...
                        </p>
                        <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                            <img class="rounded-circle" src="@/assets/img/avatars/21.png" width="44" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-sm text-nav lh-base mb-1">Bessie Cooper</h6>
                                <div class="d-flex text-body fs-xs">
                                    <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 me-1"></i>Mar 16</span>
                                    <span><i class="fi-chat-circle opacity-70 me-1"></i>3 comments</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </article>
            </div>
            <!-- Pagination-->
            <nav class="pt-4 pb-2 border-top" aria-label="Blog pagination">
                <ul class="pagination mb-0">
                    <li class="page-item d-sm-none"><span class="page-link page-link-static">1 / 8</span></li>
                    <li class="page-item active d-none d-sm-block" aria-current="page">
                        <span class="page-link">1<span class="visually-hidden">(current)</span></span>
                    </li>
                    <li class="page-item d-none d-sm-block">
                        <a class="page-link" href="javascript:void(0);">2</a>
                    </li>
                    <li class="page-item d-none d-sm-block">
                        <a class="page-link" href="javascript:void(0);">3</a>
                    </li>
                    <li class="page-item d-none d-sm-block">...</li>
                    <li class="page-item d-none d-sm-block">
                        <a class="page-link" href="javascript:void(0);">8</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="javascript:void(0);" aria-label="Next"><i class="fi-chevron-right"></i></a>
                    </li>
                </ul>
            </nav>
        </div>
        <!-- Sidebar-->
        <aside class="col-lg-4">
            <div class="offcanvas-lg offcanvas-end" id="blog-sidebar">
                <div class="offcanvas-header shadow-sm mb-2">
                    <h2 class="h5 mb-0">Sidebar</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="offcanvas" data-bs-target="#blog-sidebar"></button>
                </div>
                <div class="offcanvas-body">
                    <!-- Sort-->
                    <div class="d-flex align-items-center mb-4">
                        <label class="me-2 mb-0 text-nowrap" for="sortby"><i class="fi-arrows-sort mt-n1 me-2 align-middle opacity-70"></i>Sort by:</label>
                        <select class="form-select" id="sortby">
                            <option>Newest</option>
                            <option>Oldest</option>
                            <option>Popular</option>
                            <option>Sponsored</option>
                        </select>
                    </div>
                    <!-- Search-->
                    <div class="position-relative pb-2 pb-lg-0 mb-4">
                        <input class="form-control pe-5" type="text" placeholder="Search..." /><i class="fi-search text-muted position-absolute top-50 end-0 translate-middle-y me-3"></i>
                    </div>
                    <!-- Categories-->
                    <div class="card card-flush pb-2 pb-lg-0 mb-4">
                        <div class="card-body">
                            <h3 class="h5">Categories</h3>
                            <a class="nav-link fw-normal d-flex justify-content-between py-1 px-0" href="javascript:void(0);">Inspiration<span class="text-muted ms-2">(2)</span></a><a class="nav-link fw-normal d-flex justify-content-between py-1 px-0" href="javascript:void(0);">Tips &amp; Advice<span class="text-muted ms-2">(4)</span></a><a class="nav-link fw-normal d-flex justify-content-between py-1 px-0" href="javascript:void(0);">Lifestyle<span class="text-muted ms-2">(5)</span></a><a class="nav-link fw-normal d-flex justify-content-between py-1 px-0" href="javascript:void(0);">Entertainment<span class="text-muted ms-2">(1)</span></a><a class="nav-link fw-normal d-flex justify-content-between py-1 px-0" href="javascript:void(0);">Guides<span class="text-muted ms-2">(8)</span></a>
                        </div>
                    </div>
                    <!-- Tags-->
                    <div class="card card-flush pb-2 pb-lg-0 mb-4">
                        <div class="card-body">
                            <h4 class="h5">Popular Tags</h4>
                            <div class="d-flex flex-wrap mb-n1">
                                <button class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">
                                    Trends
                                </button>
                                <button class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">
                                    Tutorials
                                </button>
                                <button class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">
                                    Jobs
                                </button>
                                <button class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">
                                    Resume
                                </button>
                                <button class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">
                                    Tips
                                </button>
                                <button class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">
                                    HR
                                </button>
                                <button class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">
                                    Statistics
                                </button>
                                <button class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">
                                    Hot vacancies
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Fetured posts (carousel)-->
                    <div class="card card-flush pb-3 pb-lg-0 mb-4">
                        <div class="card-body">
                            <h4 class="h5">Editor's Choice</h4>
                            <div class="tns-carousel-wrapper mx-n3">
                                <swiper :autoplay="true" :slidesPerView="1" :loop="true" class="h-100vh">
                                    <SwiperSlide>
                                        <article class="px-3 pb-4">
                                            <div class="card border-0 shadow-sm">
                                                <router-link class="card-img-top overflow-hidden" to="/job-board-blog-single"><img class="d-block" src="@/assets/img/job-board/blog/12.jpg" alt="Image" /></router-link>
                                                <div class="card-body pb-3">
                                                    <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Guides</a>
                                                    <h3 class="fs-base pt-1 mb-0">
                                                        <router-link class="nav-link" to="/job-board-blog-single">How to Win Your First Job In Tech</router-link>
                                                    </h3>
                                                </div>
                                                <a class="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1" href="javascript:void(0);"><img class="rounded-circle" src="@/assets/img/avatars/18.png" width="44" alt="Avatar" />
                                                    <div class="ps-2">
                                                        <h6 class="fs-sm text-nav lh-base mb-1">Annette Black</h6>
                                                        <div class="d-flex text-body fs-xs">
                                                            <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 me-1"></i>May 18</span><span><i class="fi-chat-circle opacity-70 me-1"></i>3 comments</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </article>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <article class="px-3 pb-4">
                                            <div class="card border-0 shadow-sm">
                                                <router-link class="card-img-top overflow-hidden" to="/job-board-blog-single"><img class="d-block" src="@/assets/img/job-board/blog/13.jpg" alt="Image" /></router-link>
                                                <div class="card-body pb-3">
                                                    <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Tips &amp; Advice</a>
                                                    <h3 class="fs-base pt-1 mb-0">
                                                        <router-link class="nav-link" to="/job-board-blog-single">How to Walk Around the Office</router-link>
                                                    </h3>
                                                </div>
                                                <a class="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1" href="javascript:void(0);"><img class="rounded-circle" src="@/assets/img/avatars/21.png" width="44" alt="Avatar" />
                                                    <div class="ps-2">
                                                        <h6 class="fs-sm text-nav lh-base mb-1">Kristin Watson</h6>
                                                        <div class="d-flex text-body fs-xs">
                                                            <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 me-1"></i>Apr 25</span><span><i class="fi-chat-circle opacity-70 me-1"></i>No comments</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </article>
                                    </SwiperSlide>
                                </swiper>
                            </div>
                            <div class="tns-carousel-controls justify-content-center mt-n2" id="externalControls">
                                <button class="me-3" type="button"><i class="fi-chevron-left fs-xs"></i></button>
                                <button type="button"><i class="fi-chevron-right fs-xs"></i></button>
                            </div>
                        </div>
                    </div>
                    <!-- Subscription form-->
                    <div class="card card-flush mb-4">
                        <div class="card-body">
                            <h4 class="h5 mb-3">Stay Informed</h4>
                            <p class="fs-sm mb-3">
                                Subscribe to our newsletter and be the first to see the latest posts and tips.
                            </p>
                            <form class="form-group rounded-pill">
                                <div class="input-group input-group-sm">
                                    <span class="input-group-text text-muted"><i class="fi-mail"></i></span>
                                    <input class="form-control" type="email" placeholder="Your email" />
                                </div>
                                <button class="btn btn-primary btn-sm rounded-pill" type="button">Sign up</button>
                            </form>
                            <div class="form-text fs-xs pt-1">
                                * By signing up you agree to our <a href="#">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </div>
</template>
