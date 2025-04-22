<template>
    <section class="bg-dark py-5">
        <div class="container pt-5 pb-5">
            <!-- Breadcrumbs + page title-->
            <nav class="mb-4 pb-lg-3" aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-light">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Help center</li>
                </ol>
            </nav>
            <!-- Page title-->
            <div class="mb-lg-5 mx-auto text-center" style="max-width: 856px;">
                <h1 class="text-light mb-2 pb-1">Need help?</h1>
                <p class="mb-5 fs-3 text-light">All answers are already here</p>
                <!-- Search form-->
                <form class="form-group form-group-lg form-group-light rounded-pill">
                    <input class="form-control" type="text" placeholder="What are you looking for?">
                    <button class="btn btn-lg btn-primary rounded-pill px-sm-4 px-3" type="submit">
                        <i class="fi-search me-sm-2"></i>
                        <span class="d-sm-inline d-none">Search</span>
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>