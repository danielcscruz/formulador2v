<template>
    <!-- Page content-->
    <section class="position-relative bg-white rounded-xxl-4 zindex-5" style="margin-top: -30px">
        <div class="container pt-4 pb-5 mb-md-4">
            <!-- Breadcrumb-->
            <nav class="pb-4 my-2" aria-label="Breadcrumb">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Find jobs</li>
                </ol>
            </nav>
            <div class="row">
                <!-- List of jobs-->
                <div class="col-lg-5 col-md-6 position-relative mb-4 mb-md-0" style="z-index: 1025">
                    <!-- Sorting-->
                    <div class="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">
                        <div class="d-flex align-items-center">
                            <label class="fs-sm me-2 pe-1 text-nowrap" for="sorting"><i class="fi-arrows-sort mt-n1 me-2"></i>Sort by:</label>
                            <select class="form-select form-select-sm" id="sorting">
                                <option>Newest</option>
                                <option>Popular</option>
                                <option>Highest Salary</option>
                            </select>
                        </div>
                        <div class="text-muted fs-sm text-nowrap">
                            <i class="fi-briefcase fs-base mt-n1 me-2"></i>2948 jobs
                        </div>
                    </div>
                    <!-- Item-->
                    <div class="card bg-secondary card-hover mb-2">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="@/assets/img/job-board/company/it-pro.png" width="24" alt="IT Pro Logo" /><span class="fs-sm text-dark opacity-80 px-1">IT Pro TV</span>
                                </div>
                                <div class="dropdown content-overlay">
                                    <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fi-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu my-1" aria-labelledby="contextMenu1">
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-heart opacity-60 me-2"></i>Add to Saved Jobs
                                            </button>
                                        </li>
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-x-circle opacity-60 me-2"></i>Not interested
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 class="h6 card-title pt-1 mb-3">
                                <router-link class="text-nav stretched-link text-decoration-none" to="/job-board-single">Business Analyst</router-link>
                            </h3>
                            <div class="fs-sm">
                                <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Chicago</span>
                                <span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$7,500</span>
                            </div>
                        </div>
                    </div>
                    <!-- Item-->
                    <div class="card bg-secondary card-hover mb-2">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="@/assets/img/job-board/company/zalo.png" width="24" alt="Zalo Logo" />
                                    <span class="fs-sm text-dark opacity-80 px-1">Zalo Tech Company</span>
                                    <span class="badge bg-faded-accent rounded-pill fs-sm ms-2">Featured</span>
                                </div>
                                <div class="dropdown content-overlay">
                                    <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fi-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu my-1" aria-labelledby="contextMenu2">
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-heart opacity-60 me-2"></i>Add to Saved Jobs
                                            </button>
                                        </li>
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-x-circle opacity-60 me-2"></i>Not interested
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 class="h6 card-title pt-1 mb-3">
                                <router-link class="text-nav stretched-link text-decoration-none" to="/job-board-single">Partnership Manager</router-link>
                            </h3>
                            <div class="fs-sm">
                                <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>New York</span><span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$10,000</span>
                            </div>
                        </div>
                    </div>
                    <!-- Item-->
                    <div class="card bg-secondary card-hover mb-2">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="@/assets/img/job-board/company/elastic.png" width="24" alt="Elastic Logo" />
                                    <span class="fs-sm text-dark opacity-80 px-1">Elastic Inc.</span>
                                    <span class="badge bg-faded-danger rounded-pill fs-sm ms-2">Hot</span>
                                </div>
                                <div class="dropdown content-overlay">
                                    <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu3" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fi-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu my-1" aria-labelledby="contextMenu3">
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-heart opacity-60 me-2"></i>Add to Saved Jobs
                                            </button>
                                        </li>
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-x-circle opacity-60 me-2"></i>Not interested
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 class="h6 card-title pt-1 mb-3">
                                <router-link class="text-nav stretched-link text-decoration-none" to="/job-board-single">Senior Credit Analyst</router-link>
                            </h3>
                            <div class="fs-sm">
                                <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Dallas</span>
                                <span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$8,000</span>
                            </div>
                        </div>
                    </div>
                    <!-- Item-->
                    <div class="card bg-secondary card-hover mb-2">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="@/assets/img/job-board/company/lift-web.png" width="24" alt="Lift Web Logo" /><span class="fs-sm text-dark opacity-80 px-1">Lift Web</span>
                                </div>
                                <div class="dropdown content-overlay">
                                    <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu4" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fi-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu my-1" aria-labelledby="contextMenu4">
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-heart opacity-60 me-2"></i>Add to Saved Jobs
                                            </button>
                                        </li>
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-x-circle opacity-60 me-2"></i>Not interested
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 class="h6 card-title pt-1 mb-3">
                                <router-link class="text-nav stretched-link text-decoration-none" to="/job-board-single">Account Manager</router-link>
                            </h3>
                            <div class="fs-sm">
                                <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Houston</span><span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$5,000</span>
                            </div>
                        </div>
                    </div>
                    <!-- Item-->
                    <div class="card bg-secondary card-hover mb-2">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="@/assets/img/job-board/company/xbox.png" width="24" alt="Xbox Logo" /><span class="fs-sm text-dark opacity-80 px-1">Xbox Company</span>
                                </div>
                                <div class="dropdown content-overlay">
                                    <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu5" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fi-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu my-1" aria-labelledby="contextMenu5">
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-heart opacity-60 me-2"></i>Add to Saved Jobs
                                            </button>
                                        </li>
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-x-circle opacity-60 me-2"></i>Not interested
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 class="h6 card-title pt-1 mb-3">
                                <router-link class="text-nav stretched-link text-decoration-none" to="/job-board-single">Full-Stack Developer</router-link>
                            </h3>
                            <div class="fs-sm">
                                <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Washington</span><span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$13,000</span>
                            </div>
                        </div>
                    </div>
                    <!-- Item-->
                    <div class="card bg-secondary card-hover mb-2">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="@/assets/img/job-board/company/zapier.png" width="24" alt="Zapier Logo" />
                                    <span class="fs-sm text-dark opacity-80 px-1">Zapier</span>
                                    <span class="badge bg-faded-danger rounded-pill fs-sm ms-2">Hot</span>
                                </div>
                                <div class="dropdown content-overlay">
                                    <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu6" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fi-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu my-1" aria-labelledby="contextMenu6">
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-heart opacity-60 me-2"></i>Add to Saved Jobs
                                            </button>
                                        </li>
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-x-circle opacity-60 me-2"></i>Not interested
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 class="h6 card-title pt-1 mb-3">
                                <router-link class="text-nav stretched-link text-decoration-none" to="/job-board-single">Onboardng Specialist</router-link>
                            </h3>
                            <div class="fs-sm">
                                <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>Houston</span><span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$4,000</span>
                            </div>
                        </div>
                    </div>
                    <!-- Item-->
                    <div class="card bg-secondary card-hover mb-2">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="@/assets/img/job-board/company/kibana.png" width="24" alt="Kibana Logo" />
                                    <span class="fs-sm text-dark opacity-80 px-1">Elastic Kibana</span>
                                    <span class="badge bg-faded-info rounded-pill fs-sm ms-2">New</span>
                                </div>
                                <div class="dropdown content-overlay">
                                    <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu7" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fi-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu my-1" aria-labelledby="contextMenu7">
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-heart opacity-60 me-2"></i>Add to Saved Jobs
                                            </button>
                                        </li>
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-x-circle opacity-60 me-2"></i>Not interested
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 class="h6 card-title pt-1 mb-3">
                                <router-link class="text-nav stretched-link text-decoration-none" to="/job-board-single">Global Product Operations Specialist</router-link>
                            </h3>
                            <div class="fs-sm">
                                <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>San Francisco</span>
                                <span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$9,200</span>
                            </div>
                        </div>
                    </div>
                    <!-- Item-->
                    <div class="card bg-secondary card-hover mb-2">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="@/assets/img/job-board/company/xampp.png" width="24" alt="XAMPP Logo" /><span class="fs-sm text-dark opacity-80 px-1">XAMPP Company</span>
                                </div>
                                <div class="dropdown content-overlay">
                                    <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu8" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fi-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu my-1" aria-labelledby="contextMenu8">
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-heart opacity-60 me-2"></i>Add to Saved Jobs
                                            </button>
                                        </li>
                                        <li>
                                            <button class="dropdown-item" type="button">
                                                <i class="fi-x-circle opacity-60 me-2"></i>Not interested
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 class="h6 card-title pt-1 mb-3">
                                <router-link class="text-nav stretched-link text-decoration-none" to="/job-board-single">Sales Manager</router-link>
                            </h3>
                            <div class="fs-sm">
                                <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>New Jersey</span>
                                <span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$6,500</span>
                            </div>
                        </div>
                    </div>
                    <!-- Pagination-->
                    <nav class="pt-4 pb-2" aria-label="Blog pagination">
                        <ul class="pagination mb-0">
                            <li class="page-item d-sm-none">
                                <span class="page-link page-link-static">1 / 8</span>
                            </li>
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
                <!-- Sticky sidebar-->
                <aside class="col-lg-7 col-md-6" style="margin-top: -6rem">
                    <div class="sticky-top" style="padding-top: 6rem">
                        <div class="card shadow-sm p-lg-3 mb-3 mb-lg-0">
                            <div class="card-body p-lg-4">
                                <h2 class="h3">Subscribe to our newsletter</h2>
                                <p>Don’t miss any job updates and relevant vacancies info!</p>
                                <form class="form-group rounded-pill mb-3">
                                    <div class="input-group">
                                        <span class="input-group-text text-muted"><i class="fi-mail text-muted"></i></span>
                                        <input class="form-control" type="text" placeholder="Your email" />
                                    </div>
                                    <button class="btn btn-primary rounded-pill" type="button">Subscribe</button>
                                </form>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="agree" />
                                    <label class="form-check-label" for="agree">I agree to receive communications from Finder.</label>
                                </div>
                                <hr class="my-4" />
                                <div class="d-flex align-items-end">
                                    <div class="fs-lg fw-bold me-3">
                                        Like our jobs?<br />Receive vacancies in Telegram
                                    </div>
                                    <a class="btn btn-icon btn-translucent-primary btn-xs rounded-circle" href="javascript:void(0);"><i class="fi-telegram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="pt-4 pt-lg-5 ps-4 ps-lg-5">
                            <h2 class="h3">My last search queries:</h2>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-0">
                                    <a class="nav-link d-inline-block fw-normal px-0 py-1" href="javascript:void(0);">Accountant</a>
                                </li>
                                <li class="mb-0">
                                    <a class="nav-link d-inline-block fw-normal px-0 py-1" href="javascript:void(0);">Manager</a>
                                </li>
                                <li class="mb-0">
                                    <a class="nav-link d-inline-block fw-normal px-0 py-1" href="javascript:void(0);">Administrator</a>
                                </li>
                                <li class="mb-0">
                                    <a class="nav-link-muted d-inline-block fw-bold py-1" href="javascript:void(0);">Clear all<i class="fi-x fs-xs ms-2"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </section>
</template>
