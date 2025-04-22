<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const navbar = ref<HTMLElement | null>(null)
const scrollOffset = 20
const isStuck = ref<Boolean>(false)
const route = useRoute()

const navbarStuck = () => {
  if (navbar.value && window.scrollY > scrollOffset) {
    isStuck.value = true
  } else {
    isStuck.value = false
  }
}

const setActiveNavItem = () => {
  var navbarEle = document.getElementById("navbarNav");
  if (navbarEle) {
    // Remove the 'active' class from any element that has it initially
    navbarEle.querySelectorAll('.dropdown.active').forEach((item) => {
      item.classList.remove("active");
    });

    var activeEle = navbarEle.querySelector(`.nav-item a[href="${route.path}"]`);
    if (activeEle) {
      const parentListItem = activeEle.parentElement;
      if (parentListItem) {
        const grandParentListItem = parentListItem.parentElement?.parentElement;
        if (grandParentListItem) {
          grandParentListItem.classList.add("active");
          if (grandParentListItem.parentElement?.parentElement?.classList.contains("nav-item")) {
            grandParentListItem.parentElement?.parentElement?.classList.add("active");
          }
        }
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', navbarStuck);
  setActiveNavItem();
})

onUnmounted(() => {
  window.removeEventListener('scroll', navbarStuck)
})

watch(() => route.fullPath,
  async () => {
    setActiveNavItem();
  }
);
</script>
<template>
  <!-- Header Section starts -->
  <header ref="navbar" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" :class="{ 'navbar-stuck': isStuck }" data-scroll-header>
    <div class="container">
      <router-link class="navbar-brand me-0 me-xl-4" to="/">
        <img class="d-block" src="@/assets/img/logo/logo-light.svg" width="116" alt="Finder"></router-link>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="btn btn-link btn-light btn-sm d-none d-lg-block order-lg-3" href="#signin-modal" data-bs-toggle="modal">
        <i class="fi-user me-2"></i>Sign in</a>
      <router-link class="btn btn-primary btn-sm rounded-pill ms-2 order-lg-3" to="/job-board-post-resume-1">
        <i class="fi-plus me-2"></i>Post resume
      </router-link>
      <router-link class="btn btn-link btn-light btn-sm d-none d-lg-block order-lg-3 pe-0 ms-2" to="/job-board-home-v2">For employers<i class="fi-arrow-long-right ms-2"></i>
      </router-link>
      <div class="collapse navbar-collapse order-lg-2" id="navbarNav">
        <ul class="navbar-nav navbar-nav-scroll" style="max-height: 35rem;">
          <li class="nav-item dropdown me-lg-2"><a class="nav-link dropdown-toggle align-items-center pe-lg-4" href="#" data-bs-toggle="dropdown" role="button" aria-expanded="false"><i class="fi-layers me-2"></i>Demos<span class="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end border-light" style="width: 1px; height: 30px;"></span></a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="https://property-finder-vue.vercel.app/"><i class="fi-building fs-base me-2"></i>Real Estate Demo</a></li>
              <li class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://car-finder-vue.vercel.app/"><i class="fi-car fs-base me-2"></i>Car Finder Demo</a></li>
              <li class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://job-finder-vue.vercel.app/"><i class="fi-briefcase fs-base me-2"></i>Job Board Demo</a></li>
              <li class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://city-finder-vue.vercel.app/"><i class="fi-map-pin fs-base me-2"></i>City Guide Demo</a></li>
            </ul>
          </li>
          <!-- Menu items-->
          <li class="nav-item dropdown active"><a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><router-link class="dropdown-item" to="/">For Job Seekers</router-link></li>
              <li><router-link class="dropdown-item" to="/job-board-home-v2">For Employers</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catalog</a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><router-link class="dropdown-item" to="/job-board-catalog">List of Jobs</router-link></li>
              <li><router-link class="dropdown-item" to="/job-board-single">Single Job Page</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="javascript:void(0);">Account Pages</a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><router-link class="dropdown-item" to="/job-board-account-profile">Profile Settings</router-link></li>
                  <li><router-link class="dropdown-item" to="/job-board-account-my-resumes">My Resumes</router-link></li>
                  <li><router-link class="dropdown-item" to="/job-board-account-saved-jobs">Saved Jobs</router-link></li>
                  <li><router-link class="dropdown-item" to="/job-board-account-notifications">Notifications</router-link></li>
                  <li><router-link class="dropdown-item" to="/signin-light">Sign In</router-link></li>
                  <li><router-link class="dropdown-item" to="/signup-light">Sign Up</router-link></li>
                </ul>
              </li>
              <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="javascript:void(0);">Post Resume</a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><router-link class="dropdown-item" to="/job-board-post-resume-1">Step 1: Basic Info</router-link></li>
                  <li><router-link class="dropdown-item" to="/job-board-post-resume-2">Step 2: Education</router-link></li>
                  <li><router-link class="dropdown-item" to="/job-board-post-resume-3">Step 3: Work Experience</router-link></li>
                  <li><router-link class="dropdown-item" to="/job-board-post-resume-4">Step 4: Skills</router-link></li>
                  <li><router-link class="dropdown-item" to="/job-board-post-resume-5">Step 5: Review</router-link></li>
                </ul>
              </li>
              <li><router-link class="dropdown-item" to="/job-board-promotion">Ad Promotion Page</router-link></li>
              <li><router-link class="dropdown-item" to="/job-board-employer-single">Employer / Company Page</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><router-link class="dropdown-item" to="/job-board-about">About</router-link></li>
              <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><router-link class="dropdown-item" to="/job-board-blog">Blog Grid</router-link></li>
                  <li><router-link class="dropdown-item" to="/job-board-blog-single">Single Post</router-link></li>
                </ul>
              </li>
              <li><router-link class="dropdown-item" to="/job-board-contacts">Contacts</router-link></li>
              <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Help Center</a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><router-link class="dropdown-item" to="/job-board-help-center">Help Topics</router-link></li>
                  <li><router-link class="dropdown-item" to="/job-board-help-center-single-topic">Single Topic</router-link></li>
                </ul>
              </li>
              <li><router-link class="dropdown-item" to="/job-board-404">404 Not Found</router-link></li>
            </ul>
          </li>
          <li class="nav-item d-lg-none">
            <a class="nav-link" href="#signin-modal" data-bs-toggle="modal"><i class="fi-user me-2"></i>Sign in</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <!-- Navbar-->

</template>
