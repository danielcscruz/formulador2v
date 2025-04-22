<template>
  <!-- Categories-->
  <section class="position-relative bg-white rounded-xxl-4 pt-md-3 zindex-5" style="margin-top: -30px">
    <div class="container pt-5 pb-2 mb-4 mb-md-5">
      <h2 class="h3 pb-2 pb-sm-3">Jobs by category</h2>
      <div class="d-flex flex-wrap flex-column flex-sm-row">
        <router-link class="icon-box card flex-row align-items-center flex-shrink-0 card-hover border-0 bg-secondary rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4" to="/job-board-catalog">
          <div class="icon-box-media bg-light text-primary rounded-circle me-2">
            <i class="fi-accounting"></i>
          </div>
          <h3 class="icon-box-title fs-sm ps-1 pe-2 mb-0">Accounting</h3>
        </router-link><router-link class="icon-box card flex-row align-items-center flex-shrink-0 card-hover border-0 bg-secondary rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4" to="/job-board-catalog">
          <div class="icon-box-media bg-light text-primary rounded-circle me-2">
            <i class="fi-pie-chart"></i>
          </div>
          <h3 class="icon-box-title fs-sm ps-1 pe-2 mb-0">Marketing &amp; PR</h3>
        </router-link><router-link class="icon-box card flex-row align-items-center flex-shrink-0 card-hover border-0 bg-secondary rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4" to="/job-board-catalog">
          <div class="icon-box-media bg-light text-primary rounded-circle me-2">
            <i class="fi-meds"></i>
          </div>
          <h3 class="icon-box-title fs-sm ps-1 pe-2 mb-0">Medicine</h3>
        </router-link><router-link class="icon-box card flex-row align-items-center flex-shrink-0 card-hover border-0 bg-secondary rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4" to="/job-board-catalog">
          <div class="icon-box-media bg-light text-primary rounded-circle me-2">
            <i class="fi-plant"></i>
          </div>
          <h3 class="icon-box-title fs-sm ps-1 pe-2 mb-0">Agriculture</h3>
        </router-link><router-link class="icon-box card flex-row align-items-center flex-shrink-0 card-hover border-0 bg-secondary rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4" to="/job-board-catalog">
          <div class="icon-box-media bg-light text-primary rounded-circle me-2">
            <i class="fi-computer"></i>
          </div>
          <h3 class="icon-box-title fs-sm ps-1 pe-2 mb-0">IT</h3>
        </router-link><router-link class="icon-box card flex-row align-items-center flex-shrink-0 card-hover border-0 bg-secondary rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4" to="/job-board-catalog">
          <div class="icon-box-media bg-light text-primary rounded-circle me-2">
            <i class="fi-security"></i>
          </div>
          <h3 class="icon-box-title fs-sm ps-1 pe-2 mb-0">Security</h3>
        </router-link>
        <div class="dropdown mb-2 mb-sm-3">
          <router-link class="icon-box card flex-row align-items-center flex-shrink-0 card-hover border-0 bg-secondary rounded-pill py-2 ps-2 pe-4" to="/job-board-catalog" data-bs-toggle="dropdown">
            <div class="icon-box-media bg-light text-primary rounded-circle me-2">
              <i class="fi-dots-horisontal"></i>
            </div>
            <h3 class="icon-box-title fs-sm ps-1 pe-2 mb-0">More</h3>
          </router-link>
          <div class="dropdown-menu dropdown-menu-sm-end my-1">
            <router-link class="dropdown-item fw-bold" to="/job-board-catalog"><i class="fi-briefcase fs-base opacity-60 me-2"></i>Management</router-link><router-link class="dropdown-item fw-bold" to="/job-board-catalog"><i class="fi-building fs-base opacity-60 me-2"></i>Construction</router-link><router-link class="dropdown-item fw-bold" to="/job-board-catalog"><i class="fi-car fs-base opacity-60 me-2"></i>Transportation</router-link><router-link class="dropdown-item fw-bold" to="/job-board-catalog"><i class="fi-cart fs-base opacity-60 me-2"></i>Retail &amp; Shopping</router-link><router-link class="dropdown-item fw-bold" to="/job-board-catalog"><i class="fi-cash fs-base opacity-60 me-2"></i>Finance</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
