<template>
  <div class="page-wrap p-8 md:p-8 max-w-screen-lg mx-auto custom-page-wrap">
    <h1 class="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-black">Hills Rescue Dog Centre</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      <DogCard v-for="dog in dogs" :key="dog.id" :dog="dog" />
    </div>
  </div>
</template>

<script>
import DogCard from '@/components/DogCard.vue';
import { dogsData } from '@/dogsData.js';

export default {
  components: { DogCard },
  data() {
    return {
      dogs: dogsData
    };
  }
};
</script>

<style scoped>
.page-wrap {
  margin: auto;
  min-height: 100vh;
}

.text-black {
  color: black;
}

@media (min-width: 1024px) {
  .page-wrap {
    max-width: none; /* Remove the max-width in desktop view */
  }
}
</style>
