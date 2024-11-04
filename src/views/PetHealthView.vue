<template>
  <div class="page-wrap p-8 md:p-8 max-w-screen-lg mx-auto custom-page-wrap">
    <h1 class="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-black">Pet Health Tips</h1>
    <p class="mb-8 md:text-2xl text-black">Here are some tips to keep your pets healthy:</p>
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <HealthTip v-for="tip in todos" :key="tip.id" :tip="tip" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import HealthTip from '@/components/HealthTip.vue';

const baseURL = "http://localhost:3000/todos";

export default {
  components: {
    HealthTip
  },
  data() {
    return {
      todos: []
    };
  },
  async created() {
    try {
      const res = await axios.get(baseURL);
      this.todos = res.data;
    } catch (e) {
      console.error(e);
    }
  }
};
</script>

<style scoped>
.page-wrap {
  margin: auto;
  min-height: 100vh;
}

@media (min-width: 1024px) {
  .page-wrap {
    max-width: none; /* Remove the max-width in desktop view */
  }
}
</style>
