<template>
  <div class="page-wrap p-4 md:p-8 max-w-screen-lg mx-auto custom-page-wrap">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-black">Cat Facts</h2>
    <p class="text-lg text-center text-gray-600 mb-6">
      Did you know that there are thousands of interesting facts about cats? Click the button below to explore more!
    </p>
    <div class="cat-facts card p-4 md:p-8 mb-6">
      <p class="text-white mb-6">{{ fact }}</p>
      <button @click="getRandomFact" class="bg-[#EE9B08] text-black py-2 px-4 block text-center mt-4 rounded-lg font-bold hover:bg-[#cc7f05]">
        Get Random Fact
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatFacts',
  data() {
    return {
      fact: '',
    };
  },
  methods: {
    async getRandomFact() {
      try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        this.fact = data.fact;
      } catch (error) {
        console.error('Error fetching cat facts:', error);
      }
    },
  },
  mounted() {
    this.getRandomFact();
  },
};
</script>

<style scoped>
.page-wrap {
  margin: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.custom-page-wrap {
  max-width: 90%; /* Ensures the page content doesn't touch the edges */
}

.card {
  background: #191919;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 10px solid #F9CB7A;
  transition: border-color 0.3s;
}

.card:hover {
  border-color: #EE9B08;
}

.card p {
  color: #fff;
  font-size: 1.25rem;
}

.card button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #EE9B08;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.card button:hover {
  background-color: #cc7f05;
}

@media (min-width: 768px) {
  .custom-page-wrap {
    padding: 0 20px;
  }

  .card {
    padding: 40px;
  }

  .card p {
    font-size: 1.5rem;
  }

  .card button {
    padding: 15px 30px;
    font-size: 18px;
  }
}
</style>
