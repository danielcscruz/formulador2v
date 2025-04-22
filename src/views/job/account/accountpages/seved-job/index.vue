<script setup lang="ts">
import PNav from './pnav.vue';
import PCard from './pcard.vue';
</script>

<template>
  <!-- Page content-->
  <div class="position-absolute top-0 start-0 w-100 bg-dark" style="height: 398px;"></div>
  <div class="container content-overlay mt-5 mb-md-4 py-5">
    <PNav />
    <PCard />
  </div>
</template>
