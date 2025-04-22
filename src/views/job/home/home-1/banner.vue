<script lang="ts" setup>
</script>
<template>
    <!-- Banners-->
    <section class="container mb-4 mb-md-5">
        <div class="row">
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="d-sm-flex align-items-center">
                        <div class="pt-4 ps-sm-4 py-sm-4 p-lg-5 flex-shrink-0">
                            <img class="d-block mx-auto" src="@/assets/img/pricing/icon-4.svg" width="86" alt="Icon">
                        </div>
                        <div class="card-body text-center text-sm-start">
                            <h2 class="h5 mb-2">Recently added jobs</h2>
                            <p class="mb-sm-4">Nulla sit congue nunc lacus, laoreet nulla iaculis faucibus. Ut morbi enim.</p><router-link class="fw-bold text-decoration-none py-1" to="/job-board-catalog">Find jobs<i class="fi-chevron-right fs-xs ms-2"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="d-sm-flex align-items-center">
                        <div class="pt-4 ps-sm-4 py-sm-4 p-lg-5 flex-shrink-0">
                            <img class="d-block mx-auto" src="@/assets/img/pricing/icon-1.svg" width="86" alt="Icon">
                        </div>
                        <div class="card-body text-center text-sm-start">
                            <h2 class="h5 mb-2">Urgently hiring</h2>
                            <p class="mb-sm-4">Viverra gravida id magna diam enim morbi enim mi vestibulum. Mus aliquet ut facilisi elit.</p><router-link class="fw-bold text-decoration-none py-1" to="/job-board-catalog">Find jobs<i class="fi-chevron-right fs-xs ms-2"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>