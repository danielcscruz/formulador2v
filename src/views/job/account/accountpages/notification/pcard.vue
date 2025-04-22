<template>
    <!-- Page card like wrapper-->
    <div class="bg-light shadow-sm rounded-3 p-4 p-md-5 mb-2">
        <!-- Account header-->
        <div class="d-flex align-items-start justify-content-between pb-4 mb-2">
            <div class="d-flex align-items-start">
                <div class="position-relative flex-shrink-0">
                    <img class="rounded-circle" src="@/assets/img/avatars/37.png" width="100" alt="Annette Black">
                    <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm position-absolute end-0 bottom-0" type="button" data-bs-toggle="tooltip" title="Change image"><i class="fi-pencil fs-xs"></i></button>
                </div>
                <div class="ps-3 ps-sm-4">
                    <h3 class="h5">Annette Black</h3>
                    <ul class="list-unstyled fs-sm mb-0">
                        <li class="d-flex text-nav text-break">
                            <i class="fi-mail opacity-60 mt-1 me-2"></i><span>annette_black@email.com</span>
                        </li>
                        <li class="d-flex text-nav text-break"><i class="fi-phone opacity-60 mt-1 me-2"></i><span>(302) 555-0107</span></li>
                    </ul>
                </div>
            </div>
            <router-link class="nav-link p-0 d-none d-md-block" to="/signin-light"><i class="fi-logout mt-n1 me-2"></i>Sign out</router-link>
        </div>
        <!-- Account menu-->
        <a class="btn btn-outline-primary btn-lg rounded-pill w-100 d-md-none" href="#account-nav" data-bs-toggle="collapse">
            <i class="fi-align-justify me-2"></i>Account Menu</a>
        <div class="collapse d-md-block" id="account-nav">
            <ul class="nav nav-pills flex-column flex-md-row pt-3 pt-md-0 pb-md-4 border-bottom-md">
                <li class="nav-item mb-md-0 me-md-2 pe-md-1">
                    <router-link class="nav-link" to="/job-board-account-profile">
                        <i class="fi-settings mt-n1 me-2 fs-base"></i>Profile Settings</router-link>
                </li>
                <li class="nav-item mb-md-0 me-md-2 pe-md-1">
                    <router-link class="nav-link" to="/job-board-account-my-resumes">
                        <i class="fi-file mt-n1 me-2 fs-base"></i>My Resumes</router-link>
                </li>
                <li class="nav-item mb-md-0 me-md-2 pe-md-1">
                    <router-link class="nav-link" to="/job-board-account-saved-jobs"><i class="fi-heart mt-n1 me-2 fs-base"></i>Saved Jobs</router-link>
                </li>
                <li class="nav-item mb-md-0">
                    <router-link class="nav-link active" to="/job-board-account-notifications" aria-current="page"><i class="fi-bell mt-n1 me-2 fs-base"></i>Notifications</router-link>
                </li>
                <li class="nav-item d-md-none">
                    <router-link class="nav-link" to="/signin-light"><i class="fi-logout mt-n1 me-2 fs-base"></i>Sign Out</router-link>
                </li>
            </ul>
        </div>
        <!-- Page title-->
        <h1 class="h3 py-4 mt-3 mb-2">Notifications</h1>
        <!-- Notifications (switches)-->
        <div class="border-bottom pb-4 mb-4">
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="all-notifications" data-master-checkbox-for="#notification-settings" checked>
                <label class="form-check-label fw-bold text-nav" for="all-notifications">Enable / disable all notifications</label>
            </div>
        </div>
        <div id="notification-settings">
            <div class="d-flex mb-4">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="new-vacancy" checked>
                    <label class="form-check-label" for="new-vacancy"></label>
                </div>
                <div class="ps-2">
                    <div class="text-nav fw-bold mb-1">New vacancies notifications</div>
                    <p class="fs-sm mb-0">New vacancies alerts that match your <router-link to='/job-board-account-saved-jobs'>Saved Jobs</router-link> list</p>
                </div>
            </div>
            <div class="d-flex mb-4">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="new-article" checked>
                    <label class="form-check-label" for="new-article"></label>
                </div>
                <div class="ps-2">
                    <div class="text-nav fw-bold mb-1">New articles about job search and career development</div>
                    <p class="fs-sm mb-0">Get the most useful materials from our blog weekly</p>
                </div>
            </div>
            <div class="d-flex mb-4">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="partner-news">
                    <label class="form-check-label" for="partner-news"></label>
                </div>
                <div class="ps-2">
                    <div class="text-nav fw-bold mb-1">Info letters from our partners</div>
                    <p class="fs-sm mb-0">Be the first to know about interesting career and development events, partner vacancies and new offers</p>
                </div>
            </div>
            <div class="d-flex mb-4">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="resume-views" checked>
                    <label class="form-check-label" for="resume-views"></label>
                </div>
                <div class="ps-2">
                    <div class="text-nav fw-bold mb-1">Weekly statistics of your resume views</div>
                    <p class="fs-sm mb-0">Thanks to the statistics, you will be able to edit your resume and achieve higher results</p>
                </div>
            </div>
            <div class="d-flex">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="recommendations">
                    <label class="form-check-label" for="recommendations"></label>
                </div>
                <div class="ps-2">
                    <div class="text-nav fw-bold mb-1">Recommended vacancies for your profile</div>
                    <p class="fs-sm mb-0">You will receive recommended vacancies according to your interests</p>
                </div>
            </div>
        </div>
    </div>
</template>