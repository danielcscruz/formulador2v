<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
</script>
<template>
    <h1 class="h2 pb-3">15 Tips for a Better Resume</h1>
    <img class="rounded-3" src="@/assets/img/job-board/blog/14.jpg" alt="Image" />
    <div class="row mt-4 pt-3">
        <!-- Post content-->
        <div class="col-lg-8">
            <!-- Post meta-->
            <div class="d-flex flex-wrap border-bottom pb-3 mb-4">
                <a class="text-uppercase text-decoration-none border-end pe-3 me-3 mb-2" href="javascript:void(0);">Tips &amp; Advice</a>
                <div class="d-flex align-items-center border-end pe-3 me-3 mb-2">
                    <i class="fi-calendar-alt opacity-70 me-2"></i><span>May 19</span>
                </div>
                <div class="d-flex align-items-center border-end pe-3 me-3 mb-2">
                    <i class="fi-clock opacity-70 me-2"></i><span>10 min read</span>
                </div>
                <a class="nav-link-muted d-flex align-items-center mb-2" href="#comments" v-smooth-scroll>
                    <i class="fi-chat-circle opacity-70 me-2"></i><span>3 comments</span>
                </a>
            </div>
            <p class="fs-lg fw-bold text-dark mb-4">
                Feugiat eget gravida urna placerat posuere pulvinar. Id nibh hendrerit semper urna
                consequat. Mauris elit tellus risus ultricies ut consequat. Tempor tellus imperdiet nec
                velit fames pellentesque sed sed arcu. Neque quam id pellentesque in diam in.
            </p>
            <p>
                Purus ornare nisl est nec. Nunc, enim tellus pretium viverra quisque id in metus volutpat.
                Urna eget velit venenatis, commodo eget massa. Magna donec dictum cras nullam platea. Diam
                rhoncus massa lectus pellentesque tristique. Amet commodo, egestas vitae bibendum. Volutpat
                elit condimentum integer tortor porttitor justo vel lobortis risus. Lacinia pellentesque
                fermentum tellus orci mauris, velit duis eget. Commodo justo, hac ligula molestie felis,
                iaculis. Vitae dui at ante orci, dictum fusce. Urna, sed urna fringilla faucibus euismod
                aliquet nec. Quis libero, fermentum amet eu, condimentum auctor. Sit vel ipsum sem tempus
                gravida et. Scelerisque blandit orci, est quis. Nisi, tellus amet est nascetur habitant
                faucibus ornare et vivamus.
            </p>
            <p>
                Convallis massa nunc, tempus eget egestas sollicitudin mauris. Purus donec sed neque arcu,
                dictumst tortor nisi, odio. A sit lectus sem velit orci, rhoncus pharetra facilisis. Cras
                sodales a, dui pellentesque enim odio rutrum leo. Auctor viverra sit sit ut. Massa, elit
                venenatis, ultrices viverra at sagittis, velit. Cursus tempus phasellus consectetur
                suspendisse a blandit pellentesque diam neque. Massa est nibh congue elit amet, diam
                faucibus. Morbi non est semper ullamcorper quam iaculis at.
            </p>
            <!-- Video-->
            <div class="py-4 mb-2">
                <div class="position-relative">
                    <router-link class="btn btn-icon btn-light-primary text-primary rounded-circle position-absolute start-50 top-50 translate-middle zindex-5" to="/https://www.youtube.com/watch?v=3iwCzT2P7vw" data-bs-toggle="lightbox" data-video="true" style="width: 4.5rem; height: 4.5rem"><i class="fi-play-filled fs-sm"></i></router-link><span class="position-absolute top-0 start-0 w-100 h-100 bg-dark rounded-3 opacity-40 zindex-1"></span><img class="rounded-3" src="@/assets/img/job-board/blog/15.jpg" alt="Video cover" />
                </div>
            </div>
            <p>
                Velit dignissim pharetra ut augue. Nunc felis neque non sagittis. Sodales eros suspendisse
                scelerisque varius neque elit elementum quis. Ut euismod id auctor donec consectetur massa.
                Sed vitae accumsan lorem pharetra dictum eget vestibulum. Non blandit viverra laoreet amet,
                maecenas auctor leo justo, sit. Vitae vulputate gravida est feugiat. Adipiscing tristique
                mauris, eu sit tortor. Velit in scelerisque sit tincidunt habitant urna nec. Justo, non
                massa metus convallis cursus lorem volutpat eu duis. Ipsum dolor feugiat est tristique.
            </p>
            <blockquote class="blockquote mb-4">
                <p>
                    Consequat posuere egestas elit nunc eget elementum sed proin eget. Eget at elementum
                    vestibulum ut eget. Etiam cursus magnis diam id dignissim sit nulla sit. Arcu eu enim nunc
                    rutrum. Auctor venenatis aliquam quam sit.
                </p>
                <footer class="blockquote-footer">Annette Black</footer>
            </blockquote>
            <p>
                Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non
                aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue
                ut senectus quisque diam quis. At augue accumsan, in bibendum. A eget et, eget quisque
                egestas netus vel. Velit, aliquet turpis convallis ullamcorper. Scelerisque sagittis
                condimentum pretium in vitae etiam lacinia quis amet. Porttitor consequat, sollicitudin
                vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed lacus vitae.
            </p>
            <p>
                Velit parturient tellus tellus, congue pulvinar tellus viverra. In cum massa mattis ac. Amet
                vitae massa ut mi etiam. Auctor aliquam tristique felis donec eu sit nisi. Accumsan mauris
                eget convallis mattis sed etiam scelerisque.
            </p>
            <!-- Tags + Sharing-->
            <div class="pt-4 pb-5 mb-md-3">
                <div class="d-md-flex align-items-center justify-content-between border-top pt-4">
                    <div class="d-flex align-items-center me-3 mb-3 mb-md-0">
                        <div class="d-none d-sm-block fw-bold text-nowrap mb-2 me-2 pe-1">Tags:</div>
                        <div class="d-flex flex-wrap">
                            <a class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2" href="javascript:void(0);">Resume</a><a class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2" href="javascript:void(0);">Tips</a><a class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal mb-2" href="javascript:void(0);">Jobs</a>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="fw-bold text-nowrap pe-1 mb-2">Share:</div>
                        <div class="d-flex">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mb-2 ms-2" href="javascript:void(0);" data-bs-toggle="tooltip" title="Share with Facebook"><i class="fi-facebook"></i></a><a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mb-2 ms-2" href="javascript:void(0);" data-bs-toggle="tooltip" title="Share with Twitter"><i class="fi-twitter"></i></a><a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mb-2 ms-2" href="javascript:void(0);" data-bs-toggle="tooltip" title="Share with LinkedIn"><i class="fi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Comments-->
            <div class="mb-4 mb-md-5" id="comments">
                <h3 class="mb-4 pb-2">3 comments</h3>
                <!-- Comment-->
                <div class="border-bottom pb-4 mb-4">
                    <p>
                        Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet
                        lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum
                        tristique proin vitae. Odio fermentum viverra tortor quis reprehenderit in voluptate
                        velit.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center pe-2">
                            <img class="rounded-circle me-1" src="@/assets/img/avatars/05.jpg" width="48" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-base mb-0">Daniel Adams</h6>
                                <span class="text-muted fs-sm">3 days ago</span>
                            </div>
                        </div>
                        <button class="btn btn-link btn-sm" type="button">
                            <i class="fi-reply fs-lg me-2"></i><span class="fw-normal">Reply</span>
                        </button>
                    </div>
                    <!-- Reply to comment-->
                    <div class="border-start border-4 ps-4 ms-4 mt-4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation.
                        </p>
                        <div class="d-flex align-items-center pe-2">
                            <img class="rounded-circle me-1" src="@/assets/img/avatars/06.jpg" width="48" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-base mb-0">
                                    Kristin Watsons<span class="badge bg-info rounded-pill fs-xs ms-2">Author</span>
                                </h6>
                                <span class="text-muted fs-sm">2 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Comment-->
                <div class="pb-4">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center pe-2">
                            <img class="rounded-circle me-1" src="@/assets/img/avatars/04.jpg" width="48" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-base mb-0">Darrel Steward</h6>
                                <span class="text-muted fs-sm">1 week ago</span>
                            </div>
                        </div>
                        <button class="btn btn-link btn-sm" type="button">
                            <i class="fi-reply fs-lg me-2"></i><span class="fw-normal">Reply</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sidebar-->
        <aside class="col-lg-4">
            <div class="offcanvas-lg offcanvas-end" id="blog-sidebar">
                <div class="offcanvas-header shadow-sm mb-2">
                    <h2 class="h5 mb-0">Sidebar</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="offcanvas" data-bs-target="#blog-sidebar"></button>
                </div>
                <div class="offcanvas-body">
                    <!-- Search-->
                    <div class="position-relative pb-3 pb-lg-0 mb-4">
                        <input class="form-control" type="text" placeholder="Search..." /><i class="fi-search position-absolute top-50 end-0 translate-middle-y text-muted me-3"></i>
                    </div>
                    <!-- Author widget-->
                    <div class="card card-flush pb-3 pb-lg-0 mb-4">
                        <div class="card-body">
                            <div class="d-flex align-items-start">
                                <img class="rounded-circle" src="@/assets/img/avatars/15.png" width="80" alt="Kristin Watson" />
                                <div class="ps-3">
                                    <h3 class="h5 mb-2">Kristin Watson</h3>
                                    <p class="fs-sm text-muted">Chief Editor at Finder</p>
                                    <div class="d-flex">
                                        <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="javascript:void(0);"><i class="fi-facebook"></i></a><a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="javascript:void(0);"><i class="fi-twitter"></i></a><a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="javascript:void(0);"><i class="fi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Recent posts widget-->
                    <div class="card card-flush pb-3 pb-lg-0 mb-4">
                        <div class="card-body">
                            <h3 class="h5">Recent Posts</h3>
                            <div class="d-flex align-items-start border-bottom border-light pb-3 mb-3">
                                <a class="flex-shrink-0" href="javascript:void(0);">
                                    <img class="rounded-3" src="@/assets/img/job-board/blog/thumbs/01.jpg" width="80" alt="Image" /></a>
                                <div class="ps-3">
                                    <a class="fs-xs text-uppercase text-primary text-decoration-none" href="javascript:void(0);">Guide</a>
                                    <h4 class="fs-base pt-1 mb-2">
                                        <a class="nav-link" href="javascript:void(0);">How to Post Resume from Your Smartphone</a>
                                    </h4>
                                    <div class="d-flex fs-xs">
                                        <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>May
                                            08</span><span><i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>4
                                            comments</span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-start border-bottom border-light pb-3 mb-3">
                                <a class="flex-shrink-0" href="javascript:void(0);">
                                    <img class="rounded-3" src="@/assets/img/job-board/blog/thumbs/02.jpg" width="80" alt="Image" /></a>
                                <div class="ps-3">
                                    <a class="fs-xs text-uppercase text-primary text-decoration-none" href="javascript:void(0);">Tips &amp; Advice</a>
                                    <h4 class="fs-base pt-1 mb-2">
                                        <a class="nav-link" href="javascript:void(0);">Win Your Ideal Job. Hot Tips </a>
                                    </h4>
                                    <div class="d-flex fs-xs">
                                        <span class="me-2 pe-1">
                                            <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Apr 27</span>
                                        <span><i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>9
                                            comments</span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-start">
                                <a class="flex-shrink-0" href="javascript:void(0);">
                                    <img class="rounded-3" src="@/assets/img/job-board/blog/thumbs/03.jpg" width="80" alt="Image" />
                                </a>
                                <div class="ps-3">
                                    <a class="fs-xs text-uppercase text-primary text-decoration-none" href="javascript:void(0);">Lfestyle</a>
                                    <h4 class="fs-base pt-1 mb-2">
                                        <a class="nav-link" href="javascript:void(0);">You Are Never "Done" Innovating</a>
                                    </h4>
                                    <div class="d-flex fs-xs">
                                        <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Mar
                                            19</span>
                                        <span><i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>15 comments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Fetured posts carousel widget-->
                    <div class="card card-flush pb-3 pb-lg-0 mb-4">
                        <div class="card-body">
                            <h4 class="h5">Editor's Choice</h4>
                            <div class="tns-carousel-wrapper mx-n3">
                                <swiper :autoplay="true" :slidesPerView="1" :loop="true" class="h-100vh">
                                    <SwiperSlide>
                                        <article class="px-3 pb-4">
                                            <div class="card border-0 shadow-sm">
                                                <router-link class="card-img-top overflow-hidden" to="/job-board-blog-single">
                                                    <img class="d-block" src="@/assets/img/job-board/blog/12.jpg" alt="Image" /></router-link>
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
                                                            <span class="me-2 pe-1">
                                                                <i class="fi-calendar-alt opacity-70 me-1"></i>May 18</span>
                                                            <span>
                                                                <i class="fi-chat-circle opacity-70 me-1"></i>3 comments</span>
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
                                                            <span class="me-2 pe-1">
                                                                <i class="fi-calendar-alt opacity-70 me-1"></i>Apr 25</span>
                                                            <span>
                                                                <i class="fi-chat-circle opacity-70 me-1"></i>No comments</span>
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
