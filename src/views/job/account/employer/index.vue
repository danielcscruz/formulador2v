<script setup lang="ts">
import PNav from './pnav.vue';
import PCard from './pcard.vue';
import Modal from './modal.vue';
document.body.classList.remove('bg-secondary')
</script>

<template>
  <!-- Page content-->
  <div class="container mt-5 mb-md-4 py-5">
    <PNav />
    <PCard />
    <Modal />
  </div>
</template>
