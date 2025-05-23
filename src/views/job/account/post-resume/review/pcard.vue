<script setup lang="ts">
// Import Vue FilePond
import vueFilePond from 'vue-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

// Create component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)
</script>
<template>
    <!-- Page content-->
    <div class="row justify-content-center pb-sm-2">
        <div class="col-lg-11 col-xl-10">
            <!-- Page title-->
            <h1 class="h2 text-center pb-4 mb-3">Create online resume</h1>
            <!-- Steps-->
            <div class="bg-light rounded-3 py-4 px-md-4 mb-3">
                <div class="steps pt-4 pb-1">
                    <div class="step active">
                        <div class="step-progress">
                            <span class="step-progress-start"></span>
                            <span class="step-progress-end"></span>
                            <span class="step-number">1</span>
                        </div>
                        <div class="step-label">Basic info</div>
                    </div>
                    <div class="step active">
                        <div class="step-progress">
                            <span class="step-progress-start"></span>
                            <span class="step-progress-end"></span>
                            <span class="step-number">2</span>
                        </div>
                        <div class="step-label">Education</div>
                    </div>
                    <div class="step active">
                        <div class="step-progress">
                            <span class="step-progress-start"></span>
                            <span class="step-progress-end"></span>
                            <span class="step-number">3</span>
                        </div>
                        <div class="step-label">Experience</div>
                    </div>
                    <div class="step active">
                        <div class="step-progress">
                            <span class="step-progress-start"></span>
                            <span class="step-progress-end"></span>
                            <span class="step-number">4</span>
                        </div>
                        <div class="step-label">Skills</div>
                    </div>
                    <div class="step active">
                        <div class="step-progress">
                            <span class="step-progress-start"></span>
                            <span class="step-progress-end"></span>
                            <span class="step-number">5</span>
                        </div>
                        <div class="step-label">Review</div>
                    </div>
                </div>
            </div>
            <!-- Step 5: Review-->
            <div class="bg-light rounded-3 pt-4 pb-0 px-4 p-md-5 mb-3">
                <!-- Title + Action buttons-->
                <div class="d-md-flex align-items-center mb-4 pb-md-2">
                    <h2 class="h4 mb-md-0">
                        <i class="fi-eye-on text-primary fs-5 mt-n1 me-2 pe-1"></i>Review your resume and save
                    </h2>
                    <div class="ms-md-auto">
                        <div class="dropdown d-lg-none">
                            <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                <i class="fi-align-justify me-1"></i>Actions
                            </button>
                            <div class="dropdown-menu dropdown-menu-end my-1">
                                <a class="dropdown-item" href="javascript:void(0);"><i class="fi-trash me-2"></i>Delete</a>
                                <a class="dropdown-item" href="javascript:void(0);"><i class="fi-archive me-2"></i>Archive</a>
                                <a class="dropdown-item" href="javascript:void(0);"><i class="fi-download-file me-2"></i>Download as PDF</a>
                            </div>
                        </div>
                        <ul class="list-unstyled d-none d-lg-flex flex-wrap fs-sm mb-0">
                            <li class="border-end mb-0">
                                <a class="nav-link text-nowrap" href="javascript:void(0);"><i class="fi-trash me-1"></i><span class="align-middle">Delete</span></a>
                            </li>
                            <li class="border-end mb-0">
                                <a class="nav-link text-nowrap" href="javascript:void(0);"><i class="fi-archive me-1"></i><span class="align-middle">Archive</span></a>
                            </li>
                            <li class="mb-0">
                                <a class="nav-link text-nowrap pe-0" href="javascript:void(0);"><i class="fi-download-file me-1"></i><span class="align-middle">Download as PDF</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Resume preview-->
                <div class="card shadow-sm p-md-2 mx-n4 mx-md-0">
                    <div class="card-body p-4">
                        <div class="d-sm-flex justify-content-between align-items-start pb-4">
                            <div class="flex-shrink-0 order-sm-2 mb-4" style="width: 10rem; height: 10rem">
                                <file-pond class="file-uploader bg-secondary py-4 pt-5" v-model="FilePond" labelIdle='<i class="d-inline-block fi-camera-plus fs-2 text-muted mb-2"></i><br><span class="fw-bold">Change picture</span>' accepted-file-types="image/jpeg, image/png" />
                            </div>
                            <div class="order-sm-1">
                                <h3 class="h4 mb-sm-4">Annette Black</h3>
                                <h4 class="h5">Basic info</h4>
                                <ul class="list-unstyled text-nav">
                                    <li><span class="text-muted">Position:</span> UX Designer</li>
                                    <li><span class="text-muted">Job type:</span> Part-time</li>
                                    <li><span class="text-muted">Location:</span> New York, USA</li>
                                    <li><span class="text-muted">Salary:</span> $2000 – $3000</li>
                                    <li><span class="text-muted">Categories:</span> Design, Internet Technology</li>
                                </ul>
                                <router-link class="d-inline-block fw-bold text-decoration-none py-1" to="/job-board-post-resume-1"><i class="fi-edit mt-n1 me-2"></i>Edit</router-link>
                            </div>
                        </div>
                        <div class="border-top py-4">
                            <h4 class="h5">Personal info</h4>
                            <ul class="list-unstyled text-nav">
                                <li><span class="text-muted">Full name:</span> Annete Black</li>
                                <li><span class="text-muted">Date of birth:</span> May 18, 1989</li>
                                <li>
                                    <span class="text-muted">Address:</span> 2464 Royal Ln. Mesa, New Jersey 45463
                                </li>
                                <li><span class="text-muted">Phone:</span> (302) 555-0107</li>
                                <li><span class="text-muted">Email:</span> annette_black@email.com</li>
                                <li>
                                    <span class="text-muted">Socials: </span>
                                    <div class="d-inline-flex ms-1">
                                        <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2 my-1" href="javascript:void(0);"><i class="fi-facebook"></i></a>
                                        <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2 my-1" href="javascript:void(0);"><i class="fi-twitter"></i></a>
                                        <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm my-1" href="javascript:void(0);"><i class="fi-linkedin"></i></a>
                                    </div>
                                </li>
                            </ul>
                            <router-link class="d-inline-block fw-bold text-decoration-none py-1" to="/job-board-post-resume-1"><i class="fi-edit mt-n1 me-2"></i>Edit</router-link>
                        </div>
                        <div class="border-top py-4">
                            <h4 class="h5">Work experience</h4>
                            <div class="mt-3">
                                <h5 class="h6 mb-2">Product Designer</h5>
                                <ul class="list-unstyled fs-sm mb-2">
                                    <li>XAMPP Company (IT, Consulting)</li>
                                    <li>2015 – 2020</li>
                                </ul>
                                <p>
                                    Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet
                                    vel non aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit
                                    interdum. Nec augue ut senectus quisque diam quis. At augue accumsan, bibendum.
                                    A eget et, eget quisque egestas netus vel.
                                </p>
                                <div class="d-flex">
                                    <router-link class="d-inline-block fw-bold text-decoration-none py-1 pe-3 border-end" to="/job-board-post-resume-3"><i class="fi-edit mt-n1 me-2"></i>Edit</router-link>
                                    <a class="d-inline-block fw-bold text-decoration-none py-1 ps-3" href="javascript:void(0);"><i class="fi-trash mt-n1 me-2"></i>Delete</a>
                                </div>
                            </div>
                            <div class="pt-2 mt-3">
                                <h5 class="h6 mb-2">Product Designer</h5>
                                <ul class="list-unstyled fs-sm">
                                    <li>XAMPP Company (IT, Consulting)</li>
                                    <li>2015 – 2020</li>
                                </ul>
                                <div class="d-flex">
                                    <router-link class="d-inline-block fw-bold text-decoration-none py-1 pe-3 border-end" to="/job-board-post-resume-3"><i class="fi-edit mt-n1 me-2"></i>Edit</router-link>
                                    <a class="d-inline-block fw-bold text-decoration-none py-1 ps-3" href="javascript:void(0);"><i class="fi-trash mt-n1 me-2"></i>Delete</a>
                                </div>
                            </div>
                        </div>
                        <div class="border-top py-4">
                            <h4 class="h5">Education</h4>
                            <div class="mt-3">
                                <h5 class="h6 mb-2">Bachelor's degree</h5>
                                <ul class="list-unstyled fs-sm">
                                    <li>Syracuse University</li>
                                    <li>900 South Crouse Ave. Syracuse, NY 13244</li>
                                    <li>2008 – 2012</li>
                                </ul>
                                <div class="d-flex">
                                    <router-link class="d-inline-block fw-bold text-decoration-none py-1 pe-3 border-end" to="/job-board-post-resume-2"><i class="fi-edit mt-n1 me-2"></i>Edit</router-link>
                                    <a class="d-inline-block fw-bold text-decoration-none py-1 ps-3" href="javascript:void(0);"><i class="fi-trash mt-n1 me-2"></i>Delete</a>
                                </div>
                            </div>
                        </div>
                        <div class="border-top pt-4">
                            <h4 class="h5">Skills</h4>
                            <router-link class="d-inline-block fw-bold text-decoration-none py-1" to="/job-board-post-resume-4"><i class="fi-plus fs-sm me-2"></i>Add skills</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Navigation-->
            <div class="d-flex flex-column flex-sm-row bg-light rounded-3 p-4 px-md-5">
                <router-link class="btn btn-outline-primary btn-lg rounded-pill mb-3 mb-sm-0" to="/job-board-post-resume-4"><i class="fi-chevron-left fs-sm me-2"></i>Previous step</router-link>
                <button class="btn btn-primary btn-lg rounded-pill ms-sm-auto" type="button">
                    Save resume
                </button>
            </div>
        </div>
    </div>
</template>
