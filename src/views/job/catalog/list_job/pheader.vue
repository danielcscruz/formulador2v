<template>
    <!-- Page header-->
    <section class="bg-dark pt-5">
        <div class="container py-5">
            <h1 class="text-light pt-1 pt-md-3 mb-4">Find jobs</h1>
            <!-- Search form-->
            <form class="form-group form-group-light d-block rounded-lg-pill mb-4">
                <div class="row align-items-center g-0 ms-n2">
                    <div class="col-lg-3 col-xl-4">
                        <div class="input-group input-group-lg border-end-lg border-light"><span class="input-group-text text-light rounded-pill opacity-50 ps-3"><i class="fi-search"></i></span>
                            <input class="form-control" type="text" placeholder="Search site...">
                        </div>
                    </div>
                    <hr class="hr-light d-lg-none my-2">
                    <div class="col-lg-5 d-sm-flex">
                        <div class="dropdown w-sm-50 border-end-sm border-light" data-bs-toggle="select">
                            <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown"><i class="fi-list me-2"></i><span class="dropdown-toggle-label">Category</span></button>
                            <input type="hidden">
                            <ul class="dropdown-menu dropdown-menu-dark my-3">
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Accounting</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Marketing &amp; PR</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Medicine</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Internet technology</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">HoReCa</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Design, creativity</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Fitness &amp; sports</span></a></li>
                            </ul>
                        </div>
                        <hr class="hr-light d-sm-none my-2">
                        <div class="dropdown w-sm-50 border-end-lg border-light" data-bs-toggle="select">
                            <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown"><i class="fi-map-pin me-2"></i><span class="dropdown-toggle-label">Location</span></button>
                            <input type="hidden">
                            <ul class="dropdown-menu dropdown-menu-dark my-3">
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Dallas</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Chicago</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Houston</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Las Vegas</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Los Angeles</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">New York</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">San Francisco</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <hr class="hr-light d-lg-none my-2">
                    <div class="col-lg-4 col-xl-3 d-flex align-items-center">
                        <div class="dropdown w-50 w-lg-100" data-bs-toggle="select">
                            <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown"><i class="fi-geo me-2"></i><span class="dropdown-toggle-label">Distance</span></button>
                            <input type="hidden">
                            <ul class="dropdown-menu dropdown-menu-dark my-3">
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">10 miles</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">20 miles</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">30 miles</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">40 miles</span></a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">50 miles</span></a></li>
                            </ul>
                        </div>
                        <button class="btn btn-primary btn-lg w-50 w-lg-auto rounded-pill" type="button">Find jobs</button>
                    </div>
                </div>
            </form>
            <!-- Search params (dropdowns)-->
            <div class="d-sm-flex justify-content-between pt-2 pb-1 pb-md-3 pb-lg-4">
                <div class="d-flex flex-column flex-sm-row flex-wrap">
                    <div class="dropdown me-sm-3 mb-2 mb-sm-3" data-bs-toggle="select">
                        <button class="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start" type="button" data-bs-toggle="dropdown"><span class="dropdown-toggle-label">Publication date</span></button>
                        <ul class="dropdown-menu my-1">
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Most recent</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">5 days</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">15 days</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">1 week</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">1 month</span></a></li>
                        </ul>
                    </div>
                    <div class="dropdown me-sm-3 mb-2 mb-sm-3" data-bs-toggle="select">
                        <button class="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start" type="button" data-bs-toggle="dropdown"><span class="dropdown-toggle-label">Job type</span></button>
                        <ul class="dropdown-menu my-1">
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Full-time</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Part-time</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Remote</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Temporary</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Contract</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Internship</span></a></li>
                        </ul>
                    </div>
                    <div class="dropdown me-sm-3 mb-2 mb-sm-3" data-bs-toggle="select">
                        <button class="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start" type="button" data-bs-toggle="dropdown"><span class="dropdown-toggle-label">Company</span></button>
                        <ul class="dropdown-menu my-1">
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">IT Pro TV</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Zalo Tech Company</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Elastic Inc.</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Lift Web</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Xbox Company</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Zapier</span></a></li>
                        </ul>
                    </div>
                    <div class="dropdown me-sm-3 mb-2 mb-sm-3" data-bs-toggle="select">
                        <button class="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start" type="button" data-bs-toggle="dropdown"><span class="dropdown-toggle-label">Salary range</span></button>
                        <ul class="dropdown-menu my-1">
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">$500 - $1,000</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">$1,000 - $2,000</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">$2,000 - $5,000</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">$5,000 - $10,000</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">$10,000 - $20,000</span></a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">$20,000 - $50,000</span></a></li>
                        </ul>
                    </div>
                </div><a class="d-inline-block text-light text-nowrap py-3" href="javascript:void(0);">Advanced search</a>
            </div>
        </div>
    </section>
</template>