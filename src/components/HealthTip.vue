<template>
  <div class="health-tip card p-8 md:p-8 mb-6">
    <h2 class="text-2xl font-semibold mb-2 mt-4 text-[#EE9B08]">{{ tip.title }}</h2>
    <p class="text-white">{{ tip.content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tip: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  background: #191919;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 10px solid #EE9B08;
  border-right: 10px solid #EE9B08;
  transition: border-color 0.3s;
}

.card:hover {
  border-left-color: #F9CB7A;
  border-right-color: #F9CB7A;
}

.card p {
  color: #FFFFFF;
}
</style>
