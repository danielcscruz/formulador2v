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
            <!-- Step 3: Work Experience-->
            <div class="bg-light rounded-3 p-4 p-md-5 mb-3">
                <h2 class="h4 mb-4">
                    <i class="fi-briefcase text-primary fs-5 mt-n1 me-2 pe-1"></i>Work experience
                </h2>
                <div class="alert alert-info mb-4" role="alert">
                    <div class="d-flex">
                        <i class="fi-alert-circle me-2 me-sm-3"></i>
                        <p class="fs-sm mb-1">
                            Filling out 2 or more work experiences will double your chances of being contacted by
                            an employer.
                        </p>
                    </div>
                </div>
                <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox" id="no-experience" />
                    <label class="form-check-label" for="no-experience">I don't have any work experience yet</label>
                </div>
                <label class="form-label" for="pr-title">Job title <span class="text-danger">*</span></label>
                <input class="form-control form-control-lg mb-4" type="text" id="pr-title" placeholder="Enter job title" required />
                <div class="row">
                    <div class="col-sm-6 mb-4">
                        <label class="form-label" for="pr-company">Company name <span class="text-danger">*</span></label>
                        <input class="form-control form-control-lg" type="text" id="pr-company" placeholder="Enter company name" required />
                    </div>
                    <div class="col-sm-6 mb-4">
                        <label class="form-label" for="pr-activity">Field of activity <span class="text-danger">*</span></label>
                        <select class="form-select form-select-lg" id="pr-activity" required>
                            <option value="" disabled selected>Choose field</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Marketing &amp; PR">Marketing &amp; PR</option>
                            <option value="Medicine">Medicine</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Internet technology">Internet technology</option>
                            <option value="Security">Security</option>
                            <option value="Management">Management</option>
                            <option value="HoReCa">HoReCa</option>
                            <option value="Insurance">Insurance</option>
                        </select>
                    </div>
                    <div class="col-sm-6 mb-4">
                        <label class="form-label" for="pr-country">Country</label>
                        <select class="form-select form-select-lg" id="pr-country">
                            <option value="" disabled selected>Choose country</option>
                            <option value="Australia">Australia</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Canada">Canada</option>
                            <option value="China">China</option>
                            <option value="Denmark">Denmark</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="Japan">Japan</option>
                            <option value="UK">UK</option>
                            <option value="USA">USA</option>
                        </select>
                    </div>
                    <div class="col-sm-6 mb-4">
                        <label class="form-label" for="pr-city">City</label>
                        <select class="form-select form-select-lg" id="pr-city">
                            <option value="" disabled selected>Choose city</option>
                            <option value="Beijing">Beijing</option>
                            <option value="Berlin">Berlin</option>
                            <option value="Brussels">Brussels</option>
                            <option value="Copenhagen">Copenhagen</option>
                            <option value="London">London</option>
                            <option value="Ottawa">Ottawa</option>
                            <option value="Paris">Paris</option>
                            <option value="Sydney">Sydney</option>
                            <option value="Tokyo">Tokyo</option>
                            <option value="Washington">Washington</option>
                        </select>
                    </div>
                    <div class="col-lg-6 mb-4">
                        <label class="form-label" for="pr-period-from">Time period from <span class="text-danger">*</span></label>
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
                    <input class="form-check-input" type="checkbox" id="still-work" />
                    <label class="form-check-label" for="still-work">I currently work here</label>
                </div>
                <div class="mb-4">
                    <label class="form-label" for="pr-description">Description</label>
                    <textarea class="form-control" rows="5" id="pr-description" placeholder="Describe your position and any significant accomplishments"></textarea>
                    <div class="form-text pt-1">8,000 characters left</div>
                </div>
                <button class="btn btn-link btn-lg text-primary py-2 px-0 mb-md-n2" type="button">
                    <i class="fi-plus fs-sm me-2"></i>Add experience
                </button>
            </div>
            <!-- Navigation-->
            <div class="d-flex flex-column flex-sm-row bg-light rounded-3 p-4 px-md-5">
                <router-link class="btn btn-outline-primary btn-lg rounded-pill mb-3 mb-sm-0" to="/job-board-post-resume-2"><i class="fi-chevron-left fs-sm me-2"></i>Previous step</router-link><router-link class="btn btn-primary btn-lg rounded-pill ms-sm-auto" to="/job-board-post-resume-4">Next step<i class="fi-chevron-right fs-sm ms-2"></i></router-link>
            </div>
        </div>
    </div>
</template>
