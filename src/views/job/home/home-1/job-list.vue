<script lang="ts" setup></script>

<template>
    <!-- Jobs list + Post resume CTA-->
    <section class="container pb-5 mb-md-4">
        <div class="row">
            <div class="col-md-6 mb-3 mb-md-0">
                <div class="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">
                    <h2 class="h3 mb-sm-0">Jobs of the day</h2>
                    <router-link class="btn btn-link fw-normal p-0" to="/job-board-catalog">View all<i class="fi-arrow-long-right ms-2"></i></router-link>
                </div>
                <!-- Accordion-->
                <div id="accordionJobs">
                    <div class="card bg-secondary collapsed mb-2" data-bs-toggle="collapse" data-bs-target="#jobCollapse1">
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="@/assets/img/job-board/company/it-pro.png" width="24" alt="IT Pro Logo" />
                                    <span class="fs-sm text-dark opacity-80 ps-1">IT Pro TV</span>
                                </div>
                                <span class="badge bg-faded-danger rounded-pill fs-sm">Hot</span>
                            </div>
                            <h3 class="h6 card-title pt-1 mb-0">Business Analyst</h3>
                        </div>
                        <div class="collapse" id="jobCollapse1" data-bs-parent="#accordionJobs">
                            <div class="card-body mt-n1 pt-0">
                                <p class="fs-sm">
                                    Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor
                                    volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque. Ornare
                                    pulvinar enim fames orci enim in libero. <a href="#">Read more...</a>
                                </p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="fs-sm">
                                        <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Chicago</span>
                                        <span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$7,500</span>
                                    </div>
                                    <button class="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle" type="button" data-bs-toggle="tooltip" title="Add to saved jobs">
                                        <i class="fi-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-secondary mb-2" data-bs-toggle="collapse" data-bs-target="#jobCollapse2">
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="@/assets/img/job-board/company/xbox.png" width="24" alt="Xbox Logo" />
                                    <span class="fs-sm text-dark opacity-80 ps-1">Xbox Company</span>
                                </div>
                                <span class="badge bg-faded-accent rounded-pill fs-sm">Featured</span>
                            </div>
                            <h3 class="h6 card-title pt-1 mb-0">Full-Stack Developer</h3>
                        </div>
                        <div class="collapse show" id="jobCollapse2" data-bs-parent="#accordionJobs">
                            <div class="card-body mt-n1 pt-0">
                                <p class="fs-sm">
                                    Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor
                                    volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque. Ornare
                                    pulvinar enim fames orci enim in libero. <a href="#">Read more...</a>
                                </p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="fs-sm">
                                        <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Washington</span>
                                        <span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$13,000</span>
                                    </div>
                                    <button class="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle" type="button" data-bs-toggle="tooltip" title="Add to saved jobs">
                                        <i class="fi-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-secondary collapsed mb-2" data-bs-toggle="collapse" data-bs-target="#jobCollapse3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="@/assets/img/job-board/company/xampp.png" width="24" alt="XAMPP Logo" />
                                    <span class="fs-sm text-dark opacity-80 ps-1">XAMPP Company</span>
                                </div>
                                <span class="badge bg-faded-danger rounded-pill fs-sm">Hot</span>
                            </div>
                            <h3 class="h6 card-title pt-1 mb-0">Sales Manager</h3>
                        </div>
                        <div class="collapse" id="jobCollapse3" data-bs-parent="#accordionJobs">
                            <div class="card-body mt-n1 pt-0">
                                <p class="fs-sm">
                                    Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor
                                    volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque. Ornare
                                    pulvinar enim fames orci enim in libero. <a href="#">Read more...</a>
                                </p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="fs-sm">
                                        <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>New Jersey</span>
                                        <span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$6,500</span>
                                    </div>
                                    <button class="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle" type="button" data-bs-toggle="tooltip" title="Add to saved jobs">
                                        <i class="fi-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-secondary collapsed mb-2" data-bs-toggle="collapse" data-bs-target="#jobCollapse4">
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="@/assets/img/job-board/company/elastic.png" width="24" alt="Elastic Logo" />
                                    <span class="fs-sm text-dark opacity-80 ps-1">Elastic Inc.</span>
                                </div>
                                <span class="badge bg-faded-accent rounded-pill fs-sm">Featured</span>
                            </div>
                            <h3 class="h6 card-title pt-1 mb-0">Senior Credit Analyst</h3>
                        </div>
                        <div class="collapse" id="jobCollapse4" data-bs-parent="#accordionJobs">
                            <div class="card-body mt-n1 pt-0">
                                <p class="fs-sm">
                                    Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor
                                    volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque. Ornare
                                    pulvinar enim fames orci enim in libero. <a href="#">Read more...</a>
                                </p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="fs-sm">
                                        <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Dallas</span>
                                        <span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$8,000</span>
                                    </div>
                                    <button class="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle" type="button" data-bs-toggle="tooltip" title="Add to saved jobs">
                                        <i class="fi-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-1">
                <hr class="hr-vertical mx-auto" />
            </div>
            <div class="col-md-5 text-center text-md-start">
                <img class="d-block mx-auto mb-4" src="@/assets/img/job-board/illustrations/post-resume-cta2.svg" width="416" alt="Illustration" />
                <h2 class="h3 pt-2 mb-4">Professional CV is your ticket to the dream job</h2>
                <p class="pb-md-3">
                    Create a great resume on Finder and take a step toward finding your dream job!
                </p>
                <router-link class="btn btn-primary btn-lg rounded-pill ms-sm-auto" to="/job-board-post-resume-1">Post resume<i class="fi-chevron-right fs-sm ms-2"></i></router-link>
            </div>
        </div>
    </section>
</template>
