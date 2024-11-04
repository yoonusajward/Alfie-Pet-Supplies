<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="product in products" :key="product.id" class="card">
      <div v-if="product.discounted" class="ribbon">Discount 20%</div>
      <img :src="product.imageName" alt="Product Image" class="object-cover w-full h-48 sm:h-64 imgBox" />
      <div class="p-4 flex flex-col justify-between h-full contentBox">
        <div>
          <h3 class="text-lg font-semibold mb-2 text-black">{{ product.name }}</h3>
          <!-- Conditionally render the description -->
          <p v-if="showDescription" class="text-white">{{ product.description }}</p>
          <p v-if="product.discounted" class="text-[#ee9b08] line-through">LKR {{ product.price }}</p>
          <p v-if="product.discounted" class="text-[#ee9b08]">LKR {{ product.discountedPrice }}</p>
          <p v-else class="text-[#ee9b08]">LKR {{ product.price }}</p>
        </div>
        <router-link :to="'/products/' + product.id" class="bg-[#EE9B08] text-black py-2 px-4 block text-center mt-4 absolute bottom-0 left-0 right-0 font-bold buy">
          Shop Now
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsList",
  props: {
    products: {
      type: Array,
      required: true,
    },
    showDescription: {
      type: Boolean,
      default: false,
    },
  },
}
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

.ribbon {
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  border-top-right-radius: 2rem;
  color: #ffffff;
  padding: 0.21rem 2rem;
  font-size: 0.75rem;
  font-weight: bold;
  z-index: 2; /* Ensure the ribbon is above the image */
}

.card::before {
  content: "";
  position: absolute;
  top: -43%;
  width: 100%;
  height: 100%;
  background: #EE9B08;
  /* transform: skewY(345deg); */
  transition: 0.5s;
}

@media (max-width: 768px) {
  .card::before {
    top: -55%;
  }
}

.card:hover::before {
  top: -70%;
  /* transform: skewY(390deg); */
}

.card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 600;
  font-size: 6em;
  color: rgba(0, 0, 0, 0.1);
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

.card .contentBox .price {
  font-size: 24px;
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
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

.mouse {
  height: 300px;
  width: auto;
}
</style>