<template>
    <div class="row">
        <!-- Content-->
        <div class="col-lg-8 order-lg-2 mb-5">
            <!-- Job list-->
            <div class="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">
                <h1 class="h3 mb-sm-0 me-sm-3">Job openings</h1>
                <div class="d-flex align-items-center">
                    <label class="fs-sm me-2 pe-1 text-nowrap" for="sorting"><i class="fi-arrows-sort mt-n1 me-2"></i>Sort by:</label>
                    <select class="form-select form-select-sm" id="sorting">
                        <option>Newest</option>
                        <option>Popular</option>
                        <option>Highest Salary</option>
                    </select>
                </div>
            </div>
            <!-- Item-->
            <div class="card bg-secondary card-hover mb-2">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <div class="d-flex align-items-center">
                            <img class="me-2" src="@/assets/img/job-board/company/zalo.png" width="24" alt="Zalo Logo" />
                            <span class="fs-sm text-dark opacity-80 px-1">Zalo Tech Company</span>
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
                        <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>New York</span>
                        <span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$10,000</span>
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
                        <span class="text-nowrap me-3">
                            <i class="fi-map-pin text-muted me-1"> </i>New Jersey</span>
                        <span class="text-nowrap me-3">
                            <i class="fi-cash fs-base text-muted me-1"></i>$8,000</span>
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
                        <span class="text-nowrap me-3"><i class="fi-map-pin text-muted me-1"> </i>New York</span>
                        <span class="text-nowrap me-3"><i class="fi-cash fs-base text-muted me-1"></i>$5,000</span>
                    </div>
                </div>
            </div>
            <!-- Reviews-->
            <h2 class="h3 pt-4 pt-lg-5 my-4 pb-2">Company reviews (62)</h2>
            <!-- Reviews statistics-->
            <div class="d-flex align-items-center mb-2">
                <div class="text-nowrap fs-sm me-3">5<i class="fi-star text-muted ms-1 mt-n1"></i></div>
                <div class="progress w-100">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style="width: 3rem">70%</div>
            </div>
            <div class="d-flex align-items-center mb-2">
                <div class="text-nowrap fs-sm me-3">4<i class="fi-star text-muted ms-1 mt-n1"></i></div>
                <div class="progress w-100">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style="width: 3rem">15%</div>
            </div>
            <div class="d-flex align-items-center mb-2">
                <div class="text-nowrap fs-sm me-3">3<i class="fi-star text-muted ms-1 mt-n1"></i></div>
                <div class="progress w-100">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 0" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style="width: 3rem">0%</div>
            </div>
            <div class="d-flex align-items-center mb-2">
                <div class="text-nowrap fs-sm me-3">2<i class="fi-star text-muted ms-1 mt-n1"></i></div>
                <div class="progress w-100">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style="width: 3rem">10%</div>
            </div>
            <div class="d-flex align-items-center mb-2">
                <div class="text-nowrap fs-sm me-3">1<i class="fi-star text-muted ms-1 mt-n1"></i></div>
                <div class="progress w-100">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 5%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2" style="width: 3rem">5%</div>
            </div>
            <!-- Sorting + add review button-->
            <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between border-bottom py-4 mt-3 mb-4">
                <div class="d-flex align-items-center me-sm-4 mb-sm-0 mb-3">
                    <label class="me-2 pe-1 text-nowrap" for="review-sorting"><i class="fi-arrows-sort text-muted mt-n1 me-2"></i>Sort by:</label>
                    <select class="form-select" id="review-sorting">
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Popular</option>
                        <option>High rating</option>
                        <option>Low rating</option>
                    </select>
                </div>
                <a class="btn btn-outline-primary rounded-pill" href="#modal-review" data-bs-toggle="modal"><i class="fi-edit me-1"></i>Add review</a>
            </div>
            <!-- Review-->
            <div class="mb-4 pb-4 border-bottom">
                <div class="d-flex justify-content-between mb-3">
                    <div class="d-flex align-items-center pe-2">
                        <img class="rounded-circle me-1" src="@/assets/img/avatars/06.jpg" width="48" alt="Avatar" />
                        <div class="ps-2">
                            <h6 class="fs-base mb-0">Kristin Watson</h6>
                            <span class="star-rating">
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                            </span>
                        </div>
                    </div>
                    <span class="text-muted fs-sm">Jan 17, 2021</span>
                </div>
                <p>
                    Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis
                    elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique
                    proin vitae. Odio fermentum viverra tortor quis.
                </p>
                <div class="d-flex align-items-center">
                    <button class="btn-like" type="button"><i class="fi-like"></i><span>(3)</span></button>
                    <div class="border-end me-1">&nbsp;</div>
                    <button class="btn-dislike" type="button">
                        <i class="fi-dislike"></i><span>(0)</span>
                    </button>
                </div>
            </div>
            <!-- Review-->
            <div class="mb-4 pb-4 border-bottom">
                <div class="d-flex justify-content-between mb-3">
                    <div class="d-flex align-items-center pe-2">
                        <img class="rounded-circle me-1" src="@/assets/img/avatars/13.png" width="48" alt="Avatar" />
                        <div class="ps-2">
                            <h6 class="fs-base mb-0">Darrell Steward</h6>
                            <span class="star-rating">
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star"></i>
                                <i class="star-rating-icon fi-star"></i>
                                <i class="star-rating-icon fi-star"></i>
                            </span>
                        </div>
                    </div>
                    <span class="text-muted fs-sm">Dec 1, 2020</span>
                </div>
                <p>
                    Vel dictum nunc ut tristique. Egestas diam amet, ut proin hendrerit. Dui accumsan at
                    phasellus tempus consequat dignissim.
                </p>
                <div class="d-flex align-items-center">
                    <button class="btn-like" type="button"><i class="fi-like"></i><span>(0)</span></button>
                    <div class="border-end me-1">&nbsp;</div>
                    <button class="btn-dislike" type="button">
                        <i class="fi-dislike"></i><span>(1)</span>
                    </button>
                </div>
            </div>
            <!-- Review-->
            <div class="mb-4 pb-4 border-bottom">
                <div class="d-flex justify-content-between mb-3">
                    <div class="d-flex align-items-center pe-2">
                        <img class="rounded-circle me-1" src="@/assets/img/avatars/07.jpg" width="48" alt="Avatar" />
                        <div class="ps-2">
                            <h6 class="fs-base mb-0">Cody Fisher</h6>
                            <span class="star-rating">
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                            </span>
                        </div>
                    </div>
                    <span class="text-muted fs-sm">Oct 28, 2020</span>
                </div>
                <p>
                    Viverra nunc blandit sapien non imperdiet sit. Purus tempus elementum aliquam eu urna. A
                    aenean duis non egestas at libero porttitor integer eget. Sed dictum lobortis laoreet
                    gravida.
                </p>
                <div class="d-flex align-items-center">
                    <button class="btn-like" type="button"><i class="fi-like"></i><span>(2)</span></button>
                    <div class="border-end me-1">&nbsp;</div>
                    <button class="btn-dislike" type="button">
                        <i class="fi-dislike"></i><span>(1)</span>
                    </button>
                </div>
            </div>
            <!-- Review-->
            <div class="mb-4 pb-4 border-bottom">
                <div class="d-flex justify-content-between mb-3">
                    <div class="d-flex align-items-center pe-2">
                        <img class="rounded-circle me-1" src="@/assets/img/avatars/04.jpg" width="48" alt="Avatar" />
                        <div class="ps-2">
                            <h6 class="fs-base mb-0">Ralph Edwards</h6>
                            <span class="star-rating">
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star"></i>
                            </span>
                        </div>
                    </div>
                    <span class="text-muted fs-sm">Sep 14, 2020</span>
                </div>
                <p>
                    Elementum nisl, egestas nam consectetur nisl, at pellentesque cras. Non sed ac vivamus
                    dolor dignissim ut. Nisl sapien blandit pulvinar sagittis donec sociis ipsum arcu est.
                    Tempus, rutrum morbi scelerisque tempor mi. Etiam urna, cras bibendum leo nec faucibus
                    velit. Tempor lectus dignissim at auctor integer neque quam amet.
                </p>
                <div class="d-flex align-items-center">
                    <button class="btn-like" type="button"><i class="fi-like"></i><span>(0)</span></button>
                    <div class="border-end me-1">&nbsp;</div>
                    <button class="btn-dislike" type="button">
                        <i class="fi-dislike"></i><span>(0)</span>
                    </button>
                </div>
            </div>
            <!-- Review-->
            <div class="mb-4 pb-4 border-bottom">
                <div class="d-flex justify-content-between mb-3">
                    <div class="d-flex align-items-center pe-2">
                        <img class="rounded-circle me-1" src="@/assets/img/avatars/13.png" width="48" alt="Avatar" />
                        <div class="ps-2">
                            <h6 class="fs-base mb-0">Guy Hawkins</h6>
                            <span class="star-rating">
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                            </span>
                        </div>
                    </div>
                    <span class="text-muted fs-sm">Dec 1, 2020</span>
                </div>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis morbi venenatis
                    ut est.
                </p>
                <div class="d-flex align-items-center">
                    <button class="btn-like" type="button"><i class="fi-like"></i><span>(1)</span></button>
                    <div class="border-end me-1">&nbsp;</div>
                    <button class="btn-dislike" type="button">
                        <i class="fi-dislike"></i><span>(3)</span>
                    </button>
                </div>
            </div>
            <!-- Pagination-->
            <nav class="mt-2" aria-label="Reviews pagination">
                <ul class="pagination">
                    <li class="page-item d-sm-none"><span class="page-link page-link-static">1 / 5</span></li>
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
        <aside class="col-lg-4 order-lg-1 pe-xl-4 mb-5">
            <div class="d-flex align-items-start mb-4">
                <img src="@/assets/img/job-board/company/zalo-lg.png" width="56" alt="Zalo Logo" />
                <div class="ps-3">
                    <h2 class="h4 mb-1">Zalo Tech Company</h2>
                    <p class="d-flex align-items-center fs-sm mb-2">
                        <i class="fi-map-pin me-1"></i><span>Chicago, New York, New Jersey</span>
                    </p>
                    <p class="fs-sm">
                        <a href="javascript:void(0);"><i class="fi-external-link me-2"></i>Visit wesite</a>
                    </p>
                    <div class="d-flex">
                        <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="javascript:void(0);">
                            <i class="fi-facebook"></i>
                        </a>
                        <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="javascript:void(0);">
                            <i class="fi-twitter"></i>
                        </a>
                        <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="javascript:void(0);">
                            <i class="fi-youtube"></i>
                        </a>
                        <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm" href="javascript:void(0);">
                            <i class="fi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
            <ul class="list-unstyled py-2">
                <li><strong>Category: </strong>Information Technology</li>
                <li><strong>Company size: </strong>more than 5000 employees</li>
                <li><strong>Job openings: </strong>4</li>
            </ul>
            <div class="pb-4 mb-2 mb-sm-3">
                <p class="mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.
                </p>
                <div class="collapse" id="showMore">
                    <p class="mb-1">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor
                        laudantium, totam rem aperiam, eaque ipsa quae inventore veritatis. Nemo enim ipsam
                        voluptatem quia voluptas.
                    </p>
                </div>
                <a class="collapse-label collapsed" href="#showMore" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="showMore"></a>
            </div>
            <div class="card card-body shadow-sm mb-4">
                <h3 class="h4">Don’t miss new job openings by this company!</h3>
                <p class="mb-4">
                    We will send you jobs as soon as they are posted in any category, in any city.
                </p>
                <form class="form-group rounded-pill">
                    <div class="input-group input-group-sm">
                        <span class="input-group-text text-muted"><i class="fi-mail"></i></span>
                        <input class="form-control" type="text" placeholder="Your email" required />
                    </div>
                    <button class="btn btn-primary btn-sm rounded-pill" type="submit">Subscribe</button>
                </form>
                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" id="agree-check" />
                    <label class="form-check-label fs-sm" for="agree-check">I agree to receive communications.</label>
                </div>
            </div>
            <div class="pt-sm-3">
                <div class="card bg-secondary border-0">
                    <div class="card-body">
                        <h3 class="h4">Professional CV is your ticket to dream job</h3>
                        <p class="mb-4">
                            Create a great resume on Finder and take a step toward finding your dream job!
                        </p>
                        <router-link class="btn btn-primary rounded-pill mb-4" to="/job-board-post-resume-1">Post resume<i class="fi-chevron-right fs-sm ms-2"></i></router-link>
                        <div class="pt-3">
                            <img class="d-block mx-auto" src="@/assets/img/job-board/illustrations/post-resume-cta.svg" width="288" alt="Illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </div>
</template>
