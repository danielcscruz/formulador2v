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
                    <div class="step">
                        <div class="step-progress">
                            <span class="step-progress-start"></span>
                            <span class="step-progress-end"></span>
                            <span class="step-number">5</span>
                        </div>
                        <div class="step-label">Review</div>
                    </div>
                </div>
            </div>
            <!-- Step 4: Skills-->
            <div class="bg-light rounded-3 p-4 p-md-5 mb-3">
                <h2 class="h4 mb-4"><i class="fi-star text-primary fs-5 mt-n1 me-2 pe-1"></i>Skills</h2>
                <div class="mb-4">
                    <label class="form-label" for="pr-add-skill">Add skill</label>
                    <div class="d-flex flex-column flex-sm-row">
                        <input class="form-control form-control-lg w-100 me-sm-3 me-md-4 mb-3 mb-sm-0" type="text" id="pr-add-skill" placeholder="Enter skill here" />
                        <button class="btn btn-primary btn-lg rounded-pill" type="button">Add</button>
                    </div>
                    <div class="form-text pt-1">You can add 26 more skills</div>
                </div>
                <div class="d-flex flex-wrap mb-4">
                    <span class="bg-success text-light fs-sm btn btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">User Interface<i class="fi-check fs-xs ms-2"></i></span><span class="bg-success text-light fs-sm btn btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">Typography<i class="fi-check fs-xs ms-2"></i></span><span class="bg-success text-light fs-sm btn btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">User Experience<i class="fi-check fs-xs ms-2"></i></span><span class="bg-success text-light fs-sm btn btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">Illustration<i class="fi-check fs-xs ms-2"></i></span>
                </div>
                <div class="border-top py-4 mb-md-2">
                    <label class="form-label fw-bold py-2">Recommended skills based on your profile info:</label>
                    <div class="d-flex flex-wrap">
                        <span class="fs-sm btn text-nav btn-outline-secondary btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">CSS<i class="fi-plus fs-xs ms-2"></i></span><span class="fs-sm btn text-nav btn-outline-secondary btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">Usability Testing<i class="fi-plus fs-xs ms-2"></i></span><span class="fs-sm btn text-nav btn-outline-secondary btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">InDesign<i class="fi-plus fs-xs ms-2"></i></span><span class="fs-sm btn text-nav btn-outline-secondary btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">Adobe After Effects<i class="fi-plus fs-xs ms-2"></i></span><span class="fs-sm btn text-nav btn-outline-secondary btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">Premiere Pro<i class="fi-plus fs-xs ms-2"></i></span><span class="fs-sm btn text-nav btn-outline-secondary btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">Visual Design<i class="fi-plus fs-xs ms-2"></i></span><span class="fs-sm btn text-nav btn-outline-secondary btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">HTML<i class="fi-plus fs-xs ms-2"></i></span><span class="fs-sm btn text-nav btn-outline-secondary btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">Logo Development<i class="fi-plus fs-xs ms-2"></i></span><span class="fs-sm btn text-nav btn-outline-secondary btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">Mobile Applications<i class="fi-plus fs-xs ms-2"></i></span><span class="fs-sm btn text-nav btn-outline-secondary btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">Researching<i class="fi-plus fs-xs ms-2"></i></span><span class="fs-sm btn text-nav btn-outline-secondary btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">Adobe Photoshop<i class="fi-plus fs-xs ms-2"></i></span><span class="fs-sm btn text-nav btn-outline-secondary btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">Adobe Illustrator<i class="fi-plus fs-xs ms-2"></i></span>
                    </div>
                </div>
                <div class="form-check mb-0">
                    <input class="form-check-input" type="checkbox" id="no-skills" />
                    <label class="form-check-label" for="no-skills">I do not want to enter any skills at this time</label>
                </div>
            </div>
            <!-- Navigation-->
            <div class="d-flex flex-column flex-sm-row bg-light rounded-3 p-4 px-md-5">
                <router-link class="btn btn-outline-primary btn-lg rounded-pill mb-3 mb-sm-0" to="/job-board-post-resume-3"><i class="fi-chevron-left fs-sm me-2"></i>Previous step</router-link><router-link class="btn btn-primary btn-lg rounded-pill ms-sm-auto" to="/job-board-post-resume-5">Next step<i class="fi-chevron-right fs-sm ms-2"></i></router-link>
            </div>
        </div>
    </div>
</template>
