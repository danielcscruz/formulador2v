<template>
    <!-- Page content-->
    <section class="position-relative bg-white rounded-xxl-4 zindex-5" style="margin-top: -30px">
        <div class="container pt-4 pb-5 mb-md-4">
            <!-- Breadcrumb-->
            <nav class="pb-4 my-2" aria-label="Breadcrumb">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/job-board-catalog">Find jobs</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Partnership Manager</li>
                </ol>
            </nav>
            <div class="row">
                <!-- Signle job content-->
                <div class="col-lg-7 position-relative pe-lg-5 mb-5 mb-lg-0" style="z-index: 1025">
                    <div class="d-flex justify-content-between mb-2">
                        <h2 class="h3 mb-0">Partnership Manager</h2>
                        <div class="text-end">
                            <span class="badge bg-faded-accent rounded-pill fs-sm mb-2">Featured</span>
                            <div class="fs-sm text-muted">2 hours ago</div>
                        </div>
                    </div>
                    <ul class="list-unstyled fs-sm mb-4">
                        <li class="mb-2">
                            <router-link class="d-flex align-items-center text-decoration-none" to="/job-board-employer-single">
                                <i class="fi-external-link me-2"></i>
                                <span class="text-decoration-underline">Zalo Tech Company</span>
                            </router-link>
                        </li>
                        <li class="d-flex align-items-center mb-2">
                            <i class="fi-map-pin text-muted me-2"></i><span>New York</span>
                        </li>
                        <li class="d-flex align-items-center mb-2">
                            <i class="fi-cash fs-base text-muted me-2"></i><span>$10,000</span>
                        </li>
                        <li class="d-flex align-items-center mb-2">
                            <i class="fi-phone text-muted me-2"></i>
                            <span class="me-2">Bessie Cooper, HR Manager</span><a href="javascript:void(0);">Show phone</a>
                        </li>
                        <li class="d-flex align-items-center mb-2">
                            <i class="fi-clock text-muted me-2"></i><span class="me-2">Full-time</span>
                        </li>
                    </ul>
                    <hr class="mb-4" />
                    <h3 class="h6">Description:</h3>
                    <p>
                        Sit sit viverra aenean nunc. Vestibulum nulla tellus, praesent mi. Eget eu sapien
                        posuere varius nisl. Arcu scelerisque ut venenatis, nec. Sed id etiam nisl nisl,
                        elementum ac odio morbi dolor. Sem mauris turpis ultrices sed porttitor orci, erat.
                        Ultrices ut a mi sem mauris, vitae egestas. Eget suscipit a, consectetur quam sed morbi.
                        Metus, tortor egestas phasellus urna. Lorem eu dictum egestas vitae faucibus congue
                        urna. Sed dolor sed risus duis volutpat ullamcorper.
                    </p>
                    <h3 class="h6 pt-2">Requirements:</h3>
                    <ul class="list-unstyled">
                        <li class="d-flex">
                            <span class="text-primary fs-lg me-2">&#8226;</span>Placerat id mauris, ac ipsum nulla
                            mi netus vestibulum fringilla.
                        </li>
                        <li class="d-flex">
                            <span class="text-primary fs-lg me-2">&#8226;</span>Turpis venenatis sapien etiam in
                            orci, euismod.
                        </li>
                        <li class="d-flex">
                            <span class="text-primary fs-lg me-2">&#8226;</span>Elit tempor, integer augue aliquam
                            justo.
                        </li>
                        <li class="d-flex">
                            <span class="text-primary fs-lg me-2">&#8226;</span>Ultricies accumsan, malesuada
                            pellentesque malesuada massa sed viverra eget.
                        </li>
                        <li class="d-flex">
                            <span class="text-primary fs-lg me-2">&#8226;</span>Varius mauris netus placerat
                            neque, orci amet odio orci.
                        </li>
                        <li class="d-flex">
                            <span class="text-primary fs-lg me-2">&#8226;</span>Fermentum ut mi sit vel sit dictum
                            mollis turpis.
                        </li>
                    </ul>
                    <h3 class="h6 pt-2">Company offers:</h3>
                    <ul class="list-unstyled">
                        <li class="d-flex">
                            <span class="text-primary fs-lg me-2">&#8226;</span>Et mattis sit imperdiet risus,
                            fermentum ultrices non.
                        </li>
                        <li class="d-flex">
                            <span class="text-primary fs-lg me-2">&#8226;</span>Sed phasellus consequat nunc enim
                            interdum tristique ultrices egestas.
                        </li>
                        <li class="d-flex">
                            <span class="text-primary fs-lg me-2">&#8226;</span>Molestie mus ultrices tellus enim.
                        </li>
                        <li class="d-flex">
                            <span class="text-primary fs-lg me-2">&#8226;</span>Vitae pulvinar massa id lorem
                            aliquam fermentum egestas.
                        </li>
                        <li class="d-flex">
                            <span class="text-primary fs-lg me-2">&#8226;</span>Dictumst blandit sit mauris in
                            consectetur.
                        </li>
                        <li class="d-flex">
                            <span class="text-primary fs-lg me-2">&#8226;</span>Sem purus lorem odio donec
                            faucibus ipsum ultricies.
                        </li>
                    </ul>
                    <p class="pt-2 mb-1">
                        Please, send your CV marked “Partnership Manager” in the subject via e-mail:
                    </p>
                    <a class="nav-link-muted fw-bold" href="mailto:contact@example.com">contact@example.com</a>
                    <hr class="my-4" />
                    <div class="btn-group btn-group-lg">
                        <button class="btn btn-primary rounded-pill rounded-end-0 ps-4 pe-3" type="button">
                            Apply for this position
                        </button>
                        <div class="position-relative border-start border-light zindex-5" style="margin-left: -1px"></div>
                        <button class="btn btn-primary rounded-pill rounded-start-0 px-3" type="button">
                            <i class="fi-heart me-1"></i>
                        </button>
                    </div>
                </div>
                <!-- Sticky sidebar-->
                <aside class="col-lg-5" style="margin-top: -6rem">
                    <div class="sticky-top" style="padding-top: 6rem">
                        <div class="card shadow-sm mb-3 mb-lg-0">
                            <div class="card-body">
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
                        <div class="pt-4 pt-lg-5 ps-4">
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
