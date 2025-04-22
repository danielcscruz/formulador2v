
<template>
    <section class="bg-dark py-5">
        <div class="container pt-5 pb-5">
            <!-- Breadcrumbs + page title-->
            <nav class="mb-4 pb-lg-3" aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-light">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item"><router-link to="/job-board-help-center">Help center</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">For job seekers</li>
                </ol>
            </nav>
            <!-- Page title-->
            <div class="mb-lg-5 mx-auto text-center" style="max-width: 856px;">
                <h1 class="text-light mb-4 pb-3">For job seekers</h1>
                <!-- Search form-->
                <form class="form-group form-group-lg form-group-light rounded-pill">
                    <input class="form-control" type="text" placeholder="What are you looking for?">
                    <button class="btn btn-lg btn-primary rounded-pill px-sm-4 px-3" type="submit"><i class="fi-search me-sm-2"></i><span class="d-sm-inline d-none">Search</span></button>
                </form>
            </div>
        </div>
    </section>
</template>