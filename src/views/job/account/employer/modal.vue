<template>
    <!-- Review modal-->
    <div class="modal fade" id="modal-review" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header d-block position-relative border-0 pb-0 px-sm-5 px-4">
                    <h3 class="modal-title mt-4 text-center">Leave a review</h3>
                    <button class="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-sm-5 px-4">
                    <form class="needs-validation" novalidate>
                        <div class="mb-3">
                            <label class="form-label" for="review-name">Name <span class='text-danger'>*</span></label>
                            <input class="form-control" type="text" id="review-name" placeholder="Your name" required>
                            <div class="invalid-feedback">Please let us know your name.</div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="review-email">Email <span class='text-danger'>*</span></label>
                            <input class="form-control" type="email" id="review-email" placeholder="Your email address" required>
                            <div class="invalid-feedback">Please provide a valid email address.</div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="review-rating">Rating <span class='text-danger'>*</span></label>
                            <select class="form-select" id="review-rating" required>
                                <option value="" selected disabled>Choose rating</option>
                                <option value="5 stars">5 stars</option>
                                <option value="4 stars">4 stars</option>
                                <option value="3 stars">3 stars</option>
                                <option value="2 stars">2 stars</option>
                                <option value="1 star">1 star</option>
                            </select>
                            <div class="invalid-feedback">Please rate the property.</div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="review-text">Review <span class='text-danger'>*</span></label>
                            <textarea class="form-control" id="review-text" rows="5" placeholder="Your review message" required></textarea>
                            <div class="invalid-feedback">Please write your review.</div>
                        </div>
                        <button class="btn btn-primary btn-lg d-block w-100 rounded-pill mb-4" type="submit">Submit a review</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>