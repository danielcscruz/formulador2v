<script lang="ts" setup></script>

<template>
  <!-- Hero-->
  <section class="bg-dark pb-3 pt-5">
    <div class="container py-5">
      <div class="row align-items-center mt-2 mt-md-0 pt-md-4 py-lg-5">
        <div class="col-md-4 order-md-2 mb-5 mb-md-0">
          <div class="parallax mx-auto" style="max-width: 416px">
            <div class="parallax-layer position-relative" data-depth="0.1">
              <img src="@/assets/img/job-board/hero-banner-2/layer01.svg" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.15">
              <img src="@/assets/img/job-board/hero-banner-2/layer02.svg" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.2">
              <img src="@/assets/img/job-board/hero-banner-2/layer03.svg" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.4">
              <img src="@/assets/img/job-board/hero-banner-2/layer04.svg" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.16">
              <img src="@/assets/img/job-board/hero-banner-2/layer05.svg" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.2">
              <img src="@/assets/img/job-board/hero-banner-2/layer06.svg" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.25">
              <img src="@/assets/img/job-board/hero-banner-2/layer07.svg" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.2">
              <img src="@/assets/img/job-board/hero-banner-2/layer08.svg" alt="Layer" />
            </div>
          </div>
        </div>
        <div class="col-md-8 order-md-1">
          <h1 class="display-4 text-light pb-3 mb-4 mb-lg-5" style="max-width: 746px">
            Find a <span class="text-primary">perfect candidate</span> for your job
          </h1>
          <!-- Search form-->
          <form class="form-group form-group-light d-block rounded-xl-pill mb-2 my-md-4 mt-xl-5">
            <div class="row align-items-center g-0 ms-n2">
              <div class="col-xl-4">
                <div class="input-group input-group-lg border-end-xl border-light">
                  <span class="input-group-text text-light rounded-pill opacity-50 ps-3"><i class="fi-search"></i></span>
                  <input class="form-control" type="text" placeholder="Search site..." />
                </div>
              </div>
              <hr class="hr-light d-xl-none my-2" />
              <div class="col-xl-8 d-lg-flex align-items-center">
                <div class="d-sm-flex w-100">
                  <div class="dropdown w-100 border-end-sm border-light" data-bs-toggle="select">
                    <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown">
                      <i class="fi-list me-2"></i><span class="dropdown-toggle-label">Category</span>
                    </button>
                    <input type="hidden" />
                    <ul class="dropdown-menu dropdown-menu-dark my-3">
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Accounting</span></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Marketing &amp; PR</span></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Medicine</span></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">IT</span></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">HoReCa</span></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Fitness &amp; sports</span></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Transportation</span></a>
                      </li>
                    </ul>
                  </div>
                  <hr class="hr-light d-sm-none my-2" />
                  <div class="dropdown w-100" data-bs-toggle="select">
                    <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown">
                      <i class="fi-map-pin me-2"></i><span class="dropdown-toggle-label">Location</span>
                    </button>
                    <input type="hidden" />
                    <ul class="dropdown-menu dropdown-menu-dark my-3">
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Dallas</span></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Chicago</span></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Houston</span></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Las Vegas</span></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Los Angeles</span></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">New York</span></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">San Francisco</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr class="hr-light d-xl-none mt-2 mb-3" />
                <button class="btn btn-primary btn-lg rounded-pill w-100 w-lg-auto ms-auto" type="button">
                  Find resumes
                </button>
              </div>
            </div>
          </form>
          <!-- Statistics-->
          <div class="row d-none d-lg-flex pt-5">
            <div class="col-xl-10 d-flex">
              <div class="border-end border-light pe-4 me-3">
                <div class="text-light me-3">
                  <div class="fs-3 fw-bold mb-1">1,2 mln</div>
                  <div class="fs-sm opacity-70">Job applications</div>
                </div>
              </div>
              <div class="border-end border-light px-4 me-3">
                <div class="text-light me-3">
                  <div class="fs-3 fw-bold mb-1">8K</div>
                  <div class="fs-sm opacity-70">Resumes posted</div>
                </div>
              </div>
              <div class="border-end border-light px-4 me-3">
                <div class="text-light me-3">
                  <div class="fs-3 fw-bold mb-1">5K</div>
                  <div class="fs-sm opacity-70">Jobs posted</div>
                </div>
              </div>
              <div class="ps-4">
                <div class="text-light">
                  <div class="fs-3 fw-bold mb-1">10K</div>
                  <div class="fs-sm opacity-70">Active members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
