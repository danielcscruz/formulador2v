<template>
    <!-- Page card like wrapper-->
    <div class="bg-light shadow-sm rounded-3 p-4 p-md-5 mb-2">
        <!-- Account header-->
        <div class="d-flex align-items-start justify-content-between pb-4 mb-2">
            <div class="d-flex align-items-start">
                <div class="position-relative flex-shrink-0">
                    <img class="rounded-circle" src="@/assets/img/avatars/37.png" width="100" alt="Annette Black" />
                    <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm position-absolute end-0 bottom-0" type="button" data-bs-toggle="tooltip" title="Change image">
                        <i class="fi-pencil fs-xs"></i>
                    </button>
                </div>
                <div class="ps-3 ps-sm-4">
                    <h3 class="h5">Annette Black</h3>
                    <ul class="list-unstyled fs-sm mb-0">
                        <li class="d-flex text-nav text-break">
                            <i class="fi-mail opacity-60 mt-1 me-2"></i><span>annette_black@email.com</span>
                        </li>
                        <li class="d-flex text-nav text-break">
                            <i class="fi-phone opacity-60 mt-1 me-2"></i><span>(302) 555-0107</span>
                        </li>
                    </ul>
                </div>
            </div>
            <router-link class="nav-link p-0 d-none d-md-block" to="/signin-light"><i class="fi-logout mt-n1 me-2"></i>Sign out</router-link>
        </div>
        <!-- Account menu-->
        <a class="btn btn-outline-primary btn-lg rounded-pill w-100 d-md-none" href="#account-nav" data-bs-toggle="collapse">
            <i class="fi-align-justify me-2"></i>Account Menu</a>
        <div class="collapse d-md-block" id="account-nav">
            <ul class="nav nav-pills flex-column flex-md-row pt-3 pt-md-0 pb-md-4 border-bottom-md">
                <li class="nav-item mb-md-0 me-md-2 pe-md-1">
                    <router-link class="nav-link" to="/job-board-account-profile"><i class="fi-settings mt-n1 me-2 fs-base"></i>Profile Settings</router-link>
                </li>
                <li class="nav-item mb-md-0 me-md-2 pe-md-1">
                    <router-link class="nav-link" to="/job-board-account-my-resumes"><i class="fi-file mt-n1 me-2 fs-base"></i>My Resumes</router-link>
                </li>
                <li class="nav-item mb-md-0 me-md-2 pe-md-1">
                    <router-link class="nav-link active" to="/job-board-account-saved-jobs" aria-current="page"><i class="fi-heart mt-n1 me-2 fs-base"></i>Saved Jobs</router-link>
                </li>
                <li class="nav-item mb-md-0">
                    <router-link class="nav-link" to="/job-board-account-notifications"><i class="fi-bell mt-n1 me-2 fs-base"></i>Notifications</router-link>
                </li>
                <li class="nav-item d-md-none">
                    <router-link class="nav-link" to="/signin-light"><i class="fi-logout mt-n1 me-2 fs-base"></i>Sign Out</router-link>
                </li>
            </ul>
        </div>
        <!-- Page title-->
        <div class="d-flex align-items-center justify-content-between py-4 mt-3 mb-2">
            <h1 class="h3 mb-0">Saved jobs</h1>
            <a class="fw-bold text-decoration-none" href="javascript:void(0);">
                <i class="fi-x fs-xs me-2"></i><span class="align-middle">Clear all</span>
            </a>
        </div>
        <!-- Grid-->
        <div class="row g-2 g-md-4">
            <!-- Item-->
            <div class="col-md-6 col-lg-4">
                <div class="card bg-secondary card-hover h-100">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <img class="me-2" src="@/assets/img/job-board/company/it-pro.png" width="24" alt="IT Pro TV" />
                            <span class="fs-sm text-dark opacity-80 px-1">IT Pro TV</span>
                            <span class="badge bg-faded-info rounded-pill fs-sm ms-auto">New</span>
                        </div>
                        <h3 class="h6 card-title mb-2">
                            <router-link class="text-nav stretched-link text-decoration-none" to="/job-board-single">Business Analyst</router-link>
                        </h3>
                        <p class="fs-sm mb-0">
                            Blandit a tincidunt arcu nulla. Sem neque, rhoncus non odio nulla maecenas elit
                            praesent. Orci tristique velit mauris cursus nibh...
                        </p>
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
                        <div class="fs-sm">
                            <span class="text-nowrap me-3">
                                <i class="fi-map-pin text-muted me-1"> </i>New York</span>
                            <span class="text-nowrap me-3">
                                <i class="fi-cash fs-base text-muted me-1"></i>$7,500</span>
                        </div>
                        <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm content-overlay" type="button" data-bs-toggle="tooltip" title="Remove from saved jobs">
                            <i class="fi-heart-filled"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Item-->
            <div class="col-md-6 col-lg-4">
                <div class="card bg-secondary card-hover h-100">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <img class="me-2" src="@/assets/img/job-board/company/xbox.png" width="24" alt="Xbox" /><span class="fs-sm text-dark opacity-80 px-1">Xbox Company</span><span class="badge bg-faded-accent rounded-pill fs-sm ms-auto">Featured</span>
                        </div>
                        <h3 class="h6 card-title mb-2">
                            <router-link class="text-nav stretched-link text-decoration-none" to="/job-board-single">Full-Stack Developer</router-link>
                        </h3>
                        <p class="fs-sm mb-0">
                            Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor volutpat,
                            ante cras tincidunt. Nec sit nunc, ornare tincidunt enim neque...
                        </p>
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
                        <div class="fs-sm">
                            <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Washington</span><span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$12,000</span>
                        </div>
                        <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm content-overlay" type="button" data-bs-toggle="tooltip" title="Remove from saved jobs">
                            <i class="fi-heart-filled"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Item-->
            <div class="col-md-6 col-lg-4">
                <div class="card bg-secondary card-hover h-100">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <img class="me-2" src="@/assets/img/job-board/company/xampp.png" width="24" alt="Xampp" /><span class="fs-sm text-dark opacity-80 px-1">XAMPP Company</span>
                        </div>
                        <h3 class="h6 card-title mb-2">
                            <router-link class="text-nav stretched-link text-decoration-none" to="/job-board-single">Account Manager</router-link>
                        </h3>
                        <p class="fs-sm mb-0">
                            Auctor elit in aenean sodales mattis. Ultricies nec eu augue sit. Ornare pulvinar enim
                            fames orci enim in libero. Eu, lorem leo netus velit egestas risus...
                        </p>
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
                        <div class="fs-sm">
                            <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Chicago</span><span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$6,000</span>
                        </div>
                        <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm content-overlay" type="button" data-bs-toggle="tooltip" title="Remove from saved jobs">
                            <i class="fi-heart-filled"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Item-->
            <div class="col-md-6 col-lg-4">
                <div class="card bg-secondary card-hover h-100">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <img class="me-2" src="@/assets/img/job-board/company/zapier.png" width="24" alt="Zapier" /><span class="fs-sm text-dark opacity-80 px-1">Zapier</span><span class="badge bg-faded-danger rounded-pill fs-sm ms-auto">Hot</span>
                        </div>
                        <h3 class="h6 card-title mb-2">
                            <router-link class="text-nav stretched-link text-decoration-none" to="/job-board-single">Onboarding Specialist</router-link>
                        </h3>
                        <p class="fs-sm mb-0">
                            Rhoncus magna odio turpis porttitor nulla fringilla quis. Consectetur sociis urna
                            posuere consequat. Ut consectetur amet penatibus sociis feugiat...
                        </p>
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
                        <div class="fs-sm">
                            <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Houston</span><span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$4,000</span>
                        </div>
                        <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm content-overlay" type="button" data-bs-toggle="tooltip" title="Remove from saved jobs">
                            <i class="fi-heart-filled"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Item-->
            <div class="col-md-6 col-lg-4">
                <div class="card bg-secondary card-hover h-100">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <img class="me-2" src="@/assets/img/job-board/company/kibana.png" width="24" alt="Elastic Kibana" /><span class="fs-sm text-dark opacity-80 px-1">Elastic Kibana</span>
                        </div>
                        <h3 class="h6 card-title mb-2">
                            <router-link class="text-nav stretched-link text-decoration-none" to="/job-board-single">Global Product Operations Specialist</router-link>
                        </h3>
                        <p class="fs-sm mb-0">
                            A ultrices eu facilisis suspendisse scelerisque fringilla ultrices sit pellentesque.
                            Consequat platea quam faucibus egestas arcu semper adipiscing...
                        </p>
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
                        <div class="fs-sm">
                            <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>New York</span><span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$8,300</span>
                        </div>
                        <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm content-overlay" type="button" data-bs-toggle="tooltip" title="Remove from saved jobs">
                            <i class="fi-heart-filled"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
