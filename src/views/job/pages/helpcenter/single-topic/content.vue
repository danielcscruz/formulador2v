<template>
    <!-- Page content-->
    <section class="position-relative bg-white rounded-xxl-4 mb-5 pt-md-3 pb-lg-5 zindex-5" style="margin-top: -30px;">
        <div class="container pt-5">
            <div class="row">
                <!-- Sidebar-->
                <aside class="col-lg-3 col-md-4 d-md-block d-none position-relative">
                    <nav class="border-start sticky-top" style="top: 116px;">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <Link class="nav-link py-1 px-4 fw-normal" href="#popular-questions" v-smooth-scroll>Popular questions</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link py-1 px-4 fw-normal" href="#job-search" v-smooth-scroll>Job search</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link py-1 px-4 fw-normal" href="#resume-creation" v-smooth-scroll>Resume creation and editing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link py-1 px-4 fw-normal" href="#job-application" v-smooth-scroll>Job application</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link py-1 px-4 fw-normal" href="#registration-and-login" v-smooth-scroll>Registration and login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link py-1 px-4 fw-normal" href="#technical-information" v-smooth-scroll>Technical information</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link py-1 px-4 fw-normal" href="#newsletter-of-new-vacancies" v-smooth-scroll>Newsletter of new vacancies</a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <div class="col-md-8 offset-lg-1">
                    <div class="mb-md-5 mb-4 pb-lg-2" id="popular-questions">
                        <h2 class="h4 mb-md-4">Popular questions</h2>
                        <!-- Popular questions accordion-->
                        <div class="accordion" id="accordionPQ">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="pq-heading-1">
                                    <button class="accordion-button fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#pq-collapse-1" aria-expanded="true" aria-controls="pq-collapse-1">Getting started: the basics</button>
                                </h2>
                                <div class="accordion-collapse collapse show" aria-labelledby="pq-heading-1" data-bs-parent="#accordionPQ" id="pq-collapse-1">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="pq-heading-2">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pq-collapse-2" aria-expanded="false" aria-controls="pq-collapse-2">Will our data be private and safe?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="pq-heading-2" data-bs-parent="#accordionPQ" id="pq-collapse-2">
                                    <div class="accordion-body fs-sm">Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim. Nisi, eget viverra platea fringilla aliquet eros varius tellus nibh.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="pq-heading-3">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pq-collapse-3" aria-expanded="false" aria-controls="pq-collapse-3">Should I apply for a job even if I don't have the specified experience?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="pq-heading-3" data-bs-parent="#accordionPQ" id="pq-collapse-3">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="pq-heading-4">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pq-collapse-4" aria-expanded="false" aria-controls="pq-collapse-4">What exactly is a personal brand and why do I need one?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="pq-heading-4" data-bs-parent="#accordionPQ" id="pq-collapse-4">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui nulla unde saepe, similique non rem est adipisci accusamus minima mollitia repellat, illum eius quidem molestias nam illo expedita iste.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="pq-heading-5">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pq-collapse-5" aria-expanded="false" aria-controls="pq-collapse-5">What are the most important things to include in my resume?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="pq-heading-5" data-bs-parent="#accordionPQ" id="pq-collapse-5">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed itaque ab dicta sint, quam fugiat culpa aliquid, labore est vero explicabo, non voluptas at perspiciatis omnis impedit libero possimus! Alias!</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="pq-heading-6">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pq-collapse-6" aria-expanded="false" aria-controls="pq-collapse-6">How long should I make my cover letter and/or resume?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="pq-heading-6" data-bs-parent="#accordionPQ" id="pq-collapse-6">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius iste voluptas ducimus! Sequi, expedita est. Accusamus, quaerat nulla! Ex exercitationem iure voluptatum mollitia amet, corporis sit ab temporibus et consectetur.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-md-5 mb-4 pb-lg-2" id="job-search">
                        <h2 class="h4 mb-md-4">Job search</h2>
                        <!-- Job search accordion-->
                        <div class="accordion" id="accordionJS">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="js-heading-1">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#js-collapse-1" aria-expanded="false" aria-controls="js-collapse-1">Getting started: the basics</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="js-heading-1" data-bs-parent="#accordionJS" id="js-collapse-1">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="js-heading-2">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#js-collapse-2" aria-expanded="false" aria-controls="js-collapse-2">Will our data be private and safe?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="js-heading-2" data-bs-parent="#accordionJS" id="js-collapse-2">
                                    <div class="accordion-body fs-sm">Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim. Nisi, eget viverra platea fringilla aliquet eros varius tellus nibh.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="js-heading-3">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#js-collapse-3" aria-expanded="false" aria-controls="js-collapse-3">Should I apply for a job even if I don't have the specified experience?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="js-heading-3" data-bs-parent="#accordionJS" id="js-collapse-3">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="js-heading-4">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#js-collapse-4" aria-expanded="false" aria-controls="js-collapse-4">What exactly is a personal brand and why do I need one?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="js-heading-4" data-bs-parent="#accordionJS" id="js-collapse-4">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui nulla unde saepe, similique non rem est adipisci accusamus minima mollitia repellat, illum eius quidem molestias nam illo expedita iste.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-md-5 mb-4 pb-lg-2" id="resume-creation">
                        <h2 class="h4 mb-md-4">Resume creation and editing</h2>
                        <!-- Resume creation and editing accordion-->
                        <div class="accordion" id="accordionRC">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="rc-heading-1">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rc-collapse-1" aria-expanded="false" aria-controls="rc-collapse-1">Getting started: the basics</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="rc-heading-1" data-bs-parent="#accordionRC" id="rc-collapse-1">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="rc-heading-2">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rc-collapse-2" aria-expanded="false" aria-controls="rc-collapse-2">Will our data be private and safe?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="rc-heading-2" data-bs-parent="#accordionRC" id="rc-collapse-2">
                                    <div class="accordion-body fs-sm">Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim. Nisi, eget viverra platea fringilla aliquet eros varius tellus nibh.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="rc-heading-3">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rc-collapse-3" aria-expanded="false" aria-controls="rc-collapse-3">Should I apply for a job even if I don't have the specified experience?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="rc-heading-3" data-bs-parent="#accordionRC" id="rc-collapse-3">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="rc-heading-4">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rc-collapse-4" aria-expanded="false" aria-controls="rc-collapse-4">What exactly is a personal brand and why do I need one?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="rc-heading-4" data-bs-parent="#accordionRC" id="rc-collapse-4">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui nulla unde saepe, similique non rem est adipisci accusamus minima mollitia repellat, illum eius quidem molestias nam illo expedita iste.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="rc-heading-5">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rc-collapse-5" aria-expanded="false" aria-controls="rc-collapse-5">What are the most important things to include in my resume?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="rc-heading-5" data-bs-parent="#accordionRC" id="rc-collapse-5">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed itaque ab dicta sint, quam fugiat culpa aliquid, labore est vero explicabo, non voluptas at perspiciatis omnis impedit libero possimus! Alias!</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="rc-heading-6">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rc-collapse-6" aria-expanded="false" aria-controls="rc-collapse-6">How long should I make my cover letter and/or resume?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="rc-heading-6" data-bs-parent="#accordionRC" id="rc-collapse-6">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius iste voluptas ducimus! Sequi, expedita est. Accusamus, quaerat nulla! Ex exercitationem iure voluptatum mollitia amet, corporis sit ab temporibus et consectetur.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-md-5 mb-4 pb-lg-2" id="job-application">
                        <h2 class="h4 mb-md-4">Job application</h2>
                        <!-- Job application accordion-->
                        <div class="accordion" id="accordionJA">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="ja-heading-1">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ja-collapse-1" aria-expanded="false" aria-controls="ja-collapse-1">Getting started: the basics</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="ja-heading-1" data-bs-parent="#accordionJA" id="ja-collapse-1">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="ja-heading-2">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ja-collapse-2" aria-expanded="false" aria-controls="ja-collapse-2">Will our data be private and safe?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="ja-heading-2" data-bs-parent="#accordionJA" id="ja-collapse-2">
                                    <div class="accordion-body fs-sm">Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim. Nisi, eget viverra platea fringilla aliquet eros varius tellus nibh.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="ja-heading-3">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ja-collapse-3" aria-expanded="false" aria-controls="ja-collapse-3">Should I apply for a job even if I don't have the specified experience?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="ja-heading-3" data-bs-parent="#accordionJA" id="ja-collapse-3">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="ja-heading-4">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ja-collapse-4" aria-expanded="false" aria-controls="ja-collapse-4">What exactly is a personal brand and why do I need one?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="ja-heading-4" data-bs-parent="#accordionJA" id="ja-collapse-4">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui nulla unde saepe, similique non rem est adipisci accusamus minima mollitia repellat, illum eius quidem molestias nam illo expedita iste.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-md-5 mb-4 pb-lg-2" id="registration-and-login">
                        <h2 class="h4 mb-md-4">Registration and login</h2>
                        <!-- Registration and login accordion-->
                        <div class="accordion" id="accordionRL">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="rl-heading-1">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rl-collapse-1" aria-expanded="false" aria-controls="rl-collapse-1">Getting started: the basics</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="rl-heading-1" data-bs-parent="#accordionRL" id="rl-collapse-1">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="rl-heading-2">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rl-collapse-2" aria-expanded="false" aria-controls="rl-collapse-2">Will our data be private and safe?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="rl-heading-2" data-bs-parent="#accordionRL" id="rl-collapse-2">
                                    <div class="accordion-body fs-sm">Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim. Nisi, eget viverra platea fringilla aliquet eros varius tellus nibh.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="rl-heading-3">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rl-collapse-3" aria-expanded="false" aria-controls="rl-collapse-3">Should I apply for a job even if I don't have the specified experience?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="rl-heading-3" data-bs-parent="#accordionRL" id="rl-collapse-3">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="rl-heading-4">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rl-collapse-4" aria-expanded="false" aria-controls="rl-collapse-4">What exactly is a personal brand and why do I need one?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="rl-heading-4" data-bs-parent="#accordionRL" id="rl-collapse-4">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui nulla unde saepe, similique non rem est adipisci accusamus minima mollitia repellat, illum eius quidem molestias nam illo expedita iste.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-md-5 mb-4 pb-lg-2" id="technical-information">
                        <h2 class="h4 mb-md-4">Technical information</h2>
                        <!-- Technical information accordion-->
                        <div class="accordion" id="accordionTI">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="ti-heading-1">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ti-collapse-1" aria-expanded="false" aria-controls="ti-collapse-1">Getting started: the basics</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="ti-heading-1" data-bs-parent="#accordionTI" id="ti-collapse-1">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="ti-heading-2">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ti-collapse-2" aria-expanded="false" aria-controls="ti-collapse-2">Will our data be private and safe?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="ti-heading-2" data-bs-parent="#accordionTI" id="ti-collapse-2">
                                    <div class="accordion-body fs-sm">Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim. Nisi, eget viverra platea fringilla aliquet eros varius tellus nibh.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="ti-heading-3">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ti-collapse-3" aria-expanded="false" aria-controls="ti-collapse-3">Should I apply for a job even if I don't have the specified experience?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="ti-heading-3" data-bs-parent="#accordionTI" id="ti-collapse-3">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="ti-heading-4">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ti-collapse-4" aria-expanded="false" aria-controls="ti-collapse-4">What exactly is a personal brand and why do I need one?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="ti-heading-4" data-bs-parent="#accordionTI" id="ti-collapse-4">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui nulla unde saepe, similique non rem est adipisci accusamus minima mollitia repellat, illum eius quidem molestias nam illo expedita iste.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="ti-heading-5">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ti-collapse-5" aria-expanded="false" aria-controls="ti-collapse-5">What are the most important things to include in my resume?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="ti-heading-5" data-bs-parent="#accordionTI" id="ti-collapse-5">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed itaque ab dicta sint, quam fugiat culpa aliquid, labore est vero explicabo, non voluptas at perspiciatis omnis impedit libero possimus! Alias!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="newsletter-of-new-vacancies">
                        <h2 class="h4 mb-md-4">Newsletter of new vacancies</h2>
                        <!-- Newsletter of new vacancies accordion-->
                        <div class="accordion" id="accordionNV">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="nv-heading-1">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nv-collapse-1" aria-expanded="false" aria-controls="nv-collapse-1">Getting started: the basics</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="nv-heading-1" data-bs-parent="#accordionNV" id="nv-collapse-1">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="nv-heading-2">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nv-collapse-2" aria-expanded="false" aria-controls="nv-collapse-2">Will our data be private and safe?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="nv-heading-2" data-bs-parent="#accordionNV" id="nv-collapse-2">
                                    <div class="accordion-body fs-sm">Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim. Nisi, eget viverra platea fringilla aliquet eros varius tellus nibh.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="nv-heading-3">
                                    <button class="accordion-button fw-normal collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nv-collapse-3" aria-expanded="false" aria-controls="nv-collapse-3">Should I apply for a job even if I don't have the specified experience?</button>
                                </h2>
                                <div class="accordion-collapse collapse" aria-labelledby="nv-heading-3" data-bs-parent="#accordionNV" id="nv-collapse-3">
                                    <div class="accordion-body fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>