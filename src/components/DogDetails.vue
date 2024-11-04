<template>
  <div class="flex flex-col items-center min-h-screen bg-gray-100">
    <h1 class="text-3xl md:text-4xl font-bold mb-6 md:mb-8 mt-8 text-black">Pet Details</h1>
    <div v-if="dog" class="max-w-md w-full relative">
      <div class="card-hover"></div>
      <div class="max-w-md w-full border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white relative">
        <img :src="dog.image" alt="Dog Image" class="object-cover w-full h-64 rounded-t-lg" />
        <div class="p-6">
          <h3 class="text-2xl font-semibold mb-4 text-center text-black">{{ dog.name }}</h3>
          <p class="text-xl font-semibold text-black mb-2 text-center">{{ dog.breed }}</p>
          <div class="text-center">
            <p class="text-gray-600">Age: {{ dog.age }}</p>
            <p class="text-gray-600">Gender: {{ dog.gender }}</p>
            <p class="text-gray-600 mt-4">{{ dog.description }}</p>
            <button @click="adoptDog" class="mt-6 bg-[#EE9B08] hover:bg-[#EE9B08] text-black font-bold py-2 px-4 rounded">
              Adopt me
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="h-16"></div>
  </div>
</template>

<script>
import { dogsData } from '@/dogsData';

export default {
  data() {
    return {
      dog: null
    };
  },
  created() {
    const id = this.$route.params.id;
    this.dog = dogsData.find(dog => dog.id === parseInt(id));
  },
  methods: {
    adoptDog() {
      alert(`You have adopted ${this.dog.name}!`);
      // Add your adoption logic here
    }
  }
};
</script>

<style scoped>

.text-black {
  color: black;
}

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
  top: -10px;
  left: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  background: rgba(238, 155, 8, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.5s;
  z-index: -1; /* Move behind the card */
  border-radius: 30px;
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
