<template>
    <!-- Help by category-->
    <section class="position-relative bg-white rounded-xxl-4 mb-5 pt-md-3 pb-lg-5 zindex-5" style="margin-top: -30px;">
        <div class="container pt-5">
            <h2 class="mb-4 pb-2 text-center">Help by category</h2>
            <div class="row g-4">
                <!-- Item-->
                <div class="col-md-4">
                    <div class="card card card-hover border-0 shadow-sm position-relative h-100">
                        <div class="card-body pb-0 icon-box">
                            <div class="icon-box-media d-flex align-items-center justify-content-center bg-secondary text-body rounded-circle mb-3" style="width: 4rem; height: 4rem;">
                                <i class="fi-user fs-3"></i>
                            </div>
                            <h3 class="h4 pb-1 icon-box-title">For job seekers</h3>
                            <p class="mb-1">Make the most of our website: a list of the most frequently asked questions will help you find a job faster!</p>
                        </div>
                        <div class="card-footer pt-0 border-0">
                            <router-link class="nav-link my-1 px-0 stretched-link" to="/job-board-help-center-single-topic">Find question<i class="fi-chevron-right ms-2 mt-n1 align-middle fs-xs"></i></router-link>
                        </div>
                    </div>
                </div>
                <!-- Item-->
                <div class="col-md-4">
                    <div class="card card card-hover border-0 shadow-sm position-relative h-100">
                        <div class="card-body pb-0 icon-box">
                            <div class="icon-box-media d-flex align-items-center justify-content-center bg-secondary text-body rounded-circle mb-3" style="width: 4rem; height: 4rem;">
                                <i class="fi-briefcase fs-3"></i>
                            </div>
                            <h3 class="h4 pb-1 icon-box-title">For employers</h3>
                            <p class="mb-1">Make the most of our website: a list of the most frequently asked questions will help you find a job faster!</p>
                        </div>
                        <div class="card-footer pt-0 border-0"><router-link class="nav-link my-1 px-0 stretched-link" to="/job-board-help-center-single-topic">Find question<i class="fi-chevron-right ms-2 mt-n1 align-middle fs-xs"></i></router-link></div>
                    </div>
                </div>
                <!-- Item-->
                <div class="col-md-4">
                    <div class="card card card-hover border-0 shadow-sm position-relative h-100">
                        <div class="card-body pb-0 icon-box">
                            <div class="icon-box-media d-flex align-items-center justify-content-center bg-secondary text-body rounded-circle mb-3" style="width: 4rem; height: 4rem;">
                                <i class="fi-help fs-3"></i>
                            </div>
                            <h3 class="h4 pb-1 icon-box-title">Couldn't find an answer?</h3>
                            <p class="mb-1">If you haven’t found the answer to your question, we will be happy to help you. Send your request to our support team.</p>
                        </div>
                        <div class="card-footer pt-0 border-0"><router-link class="nav-link my-1 px-0 stretched-link" to="/job-board-contacts">Ask our support team<i class="fi-chevron-right ms-2 mt-n1 align-middle fs-xs"></i></router-link></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>