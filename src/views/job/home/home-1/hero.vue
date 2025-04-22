<script setup lang="ts">
import { ref } from 'vue'
import Slider from '@vueform/slider'
import '@vueform/slider/themes/default.css'

const value = ref([5000, 14000])
const min = 1000
const max = 20000
const step = 500
</script>
<template>
  <!-- Hero-->
  <section class="bg-dark pb-4 pt-5">
    <div class="container py-5">
      <div class="row align-items-center mt-2 mt-md-0 pt-md-4 pt-lg-5 pb-5">
        <div class="col-md-5 order-md-2 mb-5 mb-md-0">
          <div class="parallax mx-auto" style="max-width: 526px">
            <div class="parallax-layer position-relative" data-depth="0.1">
              <img src="@/assets/img/job-board/hero-banner-1/layer01.svg" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.16">
              <img src="@/assets/img/job-board/hero-banner-1/layer02.svg" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.38">
              <img src="@/assets/img/job-board/hero-banner-1/layer03.svg" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.16">
              <img src="@/assets/img/job-board/hero-banner-1/layer04.svg" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.16">
              <img src="@/assets/img/job-board/hero-banner-1/layer05.svg" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.45">
              <img src="@/assets/img/job-board/hero-banner-1/layer06.svg" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.3">
              <img src="@/assets/img/job-board/hero-banner-1/layer07.svg" alt="Layer" />
            </div>
            <div class="parallax-layer" data-depth="0.2">
              <img src="@/assets/img/job-board/hero-banner-1/layer08.svg" alt="Layer" />
            </div>
          </div>
        </div>
        <div class="col-md-7 order-md-1">
          <h1 class="display-4 text-light pb-2 mb-4 mb-lg-5" style="max-width: 29.5rem">
            Hack your way to the <span class="text-primary">dream job</span>
          </h1>
          <h2 class="h5 text-light mb-4">Popular requests:</h2>
          <div class="d-flex flex-wrap">
            <a class="btn btn-translucent-light btn-xs rounded-pill fs-sm me-2 mb-2" href="javascript:void(0);">
              <i class="fi-search me-2"></i>Engineer
            </a>
            <a class="btn btn-translucent-light btn-xs rounded-pill fs-sm me-2 mb-2" href="javascript:void(0);">
              <i class="fi-search me-2"></i>Customer Service
            </a>
            <a class="btn btn-translucent-light btn-xs rounded-pill fs-sm me-2 mb-2" href="javascript:void(0);">
              <i class="fi-search me-2"></i>Delivery
            </a>
            <a class="btn btn-translucent-light btn-xs rounded-pill fs-sm me-2 mb-2" href="javascript:void(0);">
              <i class="fi-search me-2"></i>Cashier
            </a>
            <a class="btn btn-translucent-light btn-xs rounded-pill fs-sm me-2 mb-2" href="javascript:void(0);">
              <i class="fi-search me-2"></i>Remote
            </a>
            <a class="btn btn-translucent-light btn-xs rounded-pill fs-sm mb-2" href="javascript:void(0);">
              <i class="fi-search me-2"></i>IT
            </a>
          </div>
        </div>
      </div>
      <!-- Search form-->
      <form class="form-group form-group-light d-block rounded-xl-pill mt-n3 mt-md-4 mt-xl-5 mb-md-4">
        <div class="row align-items-center g-0 ms-n2">
          <div class="col-md-5 col-xl-3">
            <div class="input-group input-group-lg border-end-md border-light">
              <span class="input-group-text text-light rounded-pill opacity-50 ps-3"><i class="fi-search"></i></span>
              <input class="form-control" type="text" placeholder="Search site..." />
            </div>
          </div>
          <hr class="hr-light d-md-none my-2" />
          <div class="col-md-7 col-xl-4 d-sm-flex">
            <div class="dropdown w-sm-50 border-end-sm border-light" data-bs-toggle="select">
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
            <hr class="hr-light d-sm-none my-2" />
            <div class="dropdown w-sm-50 border-end-xl border-light" data-bs-toggle="select">
              <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown">
                <i class="fi-geo me-2"></i><span class="dropdown-toggle-label">Distance</span>
              </button>
              <input type="hidden" />
              <ul class="dropdown-menu dropdown-menu-dark my-3">
                <li>
                  <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">10 miles</span></a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">20 miles</span></a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">30 miles</span></a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">40 miles</span></a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">50 miles</span></a>
                </li>
              </ul>
            </div>
          </div>
          <hr class="hr-light d-xl-none mt-2 mb-3" />
          <div class="col-xl-5 d-sm-flex align-items-center">
            <div class="d-flex align-items-center w-100 ms-xl-1 ps-3">
              <div class="text-light text-nowrap opacity-60 me-sm-1">
                <i class="fi-cash fs-lg me-2"></i>Salary range
              </div>
              <Slider :modelValue="value" :min="min" :max="max" :step="step" class="range-slider range-slider-light mt-1 pe-0 pe-sm-3" />
            </div>
            <button class="btn btn-primary btn-lg w-100 w-sm-50 w-lg-auto rounded-pill mt-4 mt-sm-0" type="button">
              Find jobs
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
