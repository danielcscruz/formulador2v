<template>
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
                    <div class="step">
                        <div class="step-progress">
                            <span class="step-progress-start"></span>
                            <span class="step-progress-end"></span>
                            <span class="step-number">3</span>
                        </div>
                        <div class="step-label">Experience</div>
                    </div>
                    <div class="step">
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
            <!-- Step 2: Education-->
            <div class="bg-light rounded-3 p-4 p-md-5 mb-3">
                <h2 class="h4 mb-4">
                    <i class="fi-education text-primary fs-4 mt-n1 me-2 pe-1"></i>Education
                </h2>
                <div class="row">
                    <div class="col-sm-6 mb-4">
                        <label class="form-label" for="pr-education-level">Level of education <span class="text-danger">*</span></label>
                        <select class="form-select form-select-lg" id="pr-education-level" required>
                            <option value="" disabled selected>Choose your level of education</option>
                            <option value="Associate Degree">Associate Degree</option>
                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                            <option value="Graduate Degree">Graduate Degree</option>
                            <option value="Professional Degree">Professional Degree</option>
                            <option value="Master Degree">Master Degree</option>
                            <option value="PhD">PhD</option>
                        </select>
                    </div>
                    <div class="col-sm-6 mb-4">
                        <label class="form-label" for="pr-study-field">Field of study <span class="text-danger">*</span></label>
                        <input class="form-control form-control-lg" type="text" id="pr-study-field" placeholder="Enter field of study" required />
                    </div>
                    <div class="col-sm-6 mb-4">
                        <label class="form-label" for="pr-college">College / University <span class="text-danger">*</span></label>
                        <input class="form-control form-control-lg" type="text" id="pr-college" placeholder="Enter your college name" required />
                    </div>
                    <div class="col-sm-6 mb-4">
                        <label class="form-label" for="pr-country">Country &amp; city <span class="text-danger">*</span></label>
                        <input class="form-control form-control-lg" type="text" id="pr-country" placeholder="Enter country, city of your college" required />
                    </div>
                    <div class="col-lg-6 mb-4">
                        <label class="form-label" for="pr-period-from">Study period from <span class="text-danger">*</span></label>
                        <div class="row gx-2 gx-sm-3">
                            <div class="col-7 col-sm-8">
                                <select class="form-select form-select-lg" id="pr-period-from" required>
                                    <option value="" disabled selected>Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                            <div class="col-5 col-sm-4">
                                <select class="form-select form-select-lg" required>
                                    <option value="" disabled selected>Year</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                        <label class="form-label" for="pr-period-to">To <span class="text-danger">*</span></label>
                        <div class="row gx-2 gx-sm-3">
                            <div class="col-7 col-sm-8">
                                <select class="form-select form-select-lg" id="pr-period-to" required>
                                    <option value="" disabled selected>Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                            <div class="col-5 col-sm-4">
                                <select class="form-select form-select-lg" required>
                                    <option value="" disabled selected>Year</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox" id="still-visiting" />
                    <label class="form-check-label" for="still-visiting">I currently go here</label>
                </div>
                <button class="btn btn-link btn-lg text-primary py-2 px-0 mb-md-n2" type="button">
                    <i class="fi-plus fs-sm me-2"></i>Add education
                </button>
            </div>
            <!-- Navigation-->
            <div class="d-flex flex-column flex-sm-row bg-light rounded-3 p-4 px-md-5">
                <router-link class="btn btn-outline-primary btn-lg rounded-pill mb-3 mb-sm-0" to="/job-board-post-resume-1">
                    <i class="fi-chevron-left fs-sm me-2"></i>Previous step</router-link>
                <router-link class="btn btn-primary btn-lg rounded-pill ms-sm-auto" to="/job-board-post-resume-3">Next step<i class="fi-chevron-right fs-sm ms-2"></i></router-link>
            </div>
        </div>
    </div>
</template>
