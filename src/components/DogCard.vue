<template>
  <div class="card">
    <img :src="dog.image" alt="Dog" class="object-cover w-full h-48 sm:h-64 imgBox">
    <h3 class="text-lg font-semibold mt-6 mb-2 text-white">{{ dog.name }}</h3>
    <p class="text-sm font-bold text-[#ee9b08]">{{ dog.breed }}</p>
    <div class="p-4 flex flex-col justify-between h-full contentBox">
      <button @click="viewDetails" class="bg-[#EE9B08] text-black py-2 px-4 block text-center mt-4 absolute bottom-0 left-0 right-0 font-bold buy">
        View Details
      </button>
   </div>
  </div>
</template>

<script>
export default {
  props: ['dog'],
  methods: {
    viewDetails() {
      this.$router.push({ name: 'dog-details', params: { id: this.dog.id } });
    }
  }
};
</script>

<style scoped>

.card {
  position: relative;
  width: 320px;
  height: 480px;
  background: #191919;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card img {
  transition: transform 0.5s;
}

.card:hover img {
  transform: scale(1.1);
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.5s;
}

.card:hover::before {
  opacity: 1;
}

.card::before button {
  opacity: 0;
  transition: opacity 0.5s;
}

.card:hover::before button {
  opacity: 1;
}

.card .imgBox {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  z-index: 1;
}

.card .contentBox {
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
}

.card .contentBox h3 {
  font-size: 18px;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.card .contentBox .buy {
  position: relative;
  top: 20px;
  opacity: 0;
  padding: 10px 30px;
  margin-top: 15px;
  color: #000000;
  text-decoration: none;
  background: #EE9B08;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.5s;
}

.card:hover .contentBox .buy {
  top: 0;
  opacity: 1;
  background: #EE9B08;
}
</style>
