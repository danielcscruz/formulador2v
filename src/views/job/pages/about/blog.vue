<template>
    <!-- Blog-->
    <section class="container pb-4 pb-md-5 mb-2 mb-md-3">
        <div class="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">
            <h2 class="h3 mb-sm-0">Online journal by top HRs</h2>
            <router-link class="btn btn-link fw-normal p-0" to="/job-board-blog">Go to blog<i class="fi-arrow-long-right ms-2"></i></router-link>
        </div>
        <div class="row">
            <div class="col-md-5 mb-4">
                <article class="card card-hover border-0 shadow-sm h-100">
                    <router-link class="card-img-top overflow-hidden position-relative" to="/job-board-blog-single"><span class="badge bg-faded-info position-absolute top-0 end-0 fs-sm rounded-pill m-3">New</span>
                        <img class="d-block" src="@/assets/img/job-board/blog/03.jpg" alt="Image" /></router-link>
                    <div class="card-body pb-3">
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Guides</a>
                        <h3 class="fs-base pt-1 mb-2">
                            <router-link class="nav-link" to="/job-board-blog-single">How to Hire World-Class Engineers</router-link>
                        </h3>
                        <p class="fs-sm text-muted m-0">
                            Nunc, hac augue ante in facilisi id. Consectetur egestas orci, arcu ac tellus. Morbi
                            orci, nunc dictum...
                        </p>
                    </div>
                    <a class="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1" href="javascript:void(0);">
                        <img class="rounded-circle" src="@/assets/img/avatars/16.png" width="44" alt="Avatar" />
                        <div class="ps-2">
                            <h6 class="fs-sm text-nav lh-base mb-1">Bessie Cooper</h6>
                            <div class="d-flex text-body fs-xs">
                                <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 me-1"></i>May 23</span>
                                <span><i class="fi-chat-circle opacity-70 me-1"></i>4 comments</span>
                            </div>
                        </div>
                    </a>
                </article>
            </div>
            <div class="col-md-7">
                <div class="row">
                    <div class="col-sm-6 mb-4">
                        <article class="card card-hover border-0 shadow-sm h-100">
                            <router-link class="card-img-top overflow-hidden position-relative" to="/job-board-blog-single"><img class="d-block" src="@/assets/img/job-board/blog/04.jpg" alt="Image" /></router-link>
                            <div class="card-body pb-3">
                                <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Guides</a>
                                <h3 class="fs-base pt-1 mb-2">
                                    <router-link class="nav-link" to="/job-board-blog-single">How to Choose Your First Job In Tech</router-link>
                                </h3>
                            </div>
                            <a class="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1" href="javascript:void(0);">
                                <img class="rounded-circle" src="@/assets/img/avatars/18.png" width="44" alt="Avatar" />
                                <div class="ps-2">
                                    <h6 class="fs-sm text-nav lh-base mb-1">Annette Black</h6>
                                    <div class="d-flex text-body fs-xs">
                                        <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 me-1"></i>May 21</span>
                                        <span><i class="fi-chat-circle opacity-70 me-1"></i>No comments</span>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </div>
                    <div class="col-sm-6 mb-4">
                        <article class="card card-hover border-0 shadow-sm h-100">
                            <router-link class="card-img-top overflow-hidden position-relative" to="/job-board-blog-single"><img class="d-block" src="@/assets/img/job-board/blog/05.jpg" alt="Image" /></router-link>
                            <div class="card-body pb-3">
                                <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Tips &amp; Advice</a>
                                <h3 class="fs-base pt-1 mb-2">
                                    <router-link class="nav-link" to="/job-board-blog-single">15 Tips for a Better Resume</router-link>
                                </h3>
                            </div>
                            <a class="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1" href="javascript:void(0);">
                                <img class="rounded-circle" src="@/assets/img/avatars/17.png" width="44" alt="Avatar" />
                                <div class="ps-2">
                                    <h6 class="fs-sm text-nav lh-base mb-1">Ralph Edwards</h6>
                                    <div class="d-flex text-body fs-xs">
                                        <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 me-1"></i>May 19</span>
                                        <span><i class="fi-chat-circle opacity-70 me-1"></i>1 comment</span>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
