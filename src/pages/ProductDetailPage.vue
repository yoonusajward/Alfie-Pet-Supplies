<template>
  <div v-if="product" class="container mx-auto p-4 md:p-8 flex flex-col md:flex-row items-start bg-white">
    <div class="img-wrap w-full md:w-1/2 bg-white p-4 rounded-lg flex-shrink-0" style="margin-top: 20px; display: flex; justify-content: center;">
      <img :src="product.imageName" alt="Product Image" class="w-full h-auto object-contain md:max-h-96" />
    </div>
    <div class="product-details w-full md:w-1/2 bg-white p-4 rounded-lg md:ml-4 flex-grow" style="margin-top: 20px;">
      <!-- Rating section -->
      <div class="rating">
        <span v-for="n in 5" :key="n" class="star">&#9733;</span>
      </div>
      <h1 class="text-3xl font-bold mb-2 text-black">{{ product.name }}</h1>
      <h3 class="text-xl text-red-600 mb-4">
        <span v-if="product.discounted" class="line-through"> LKR {{ product.price }} </span>
        <span v-else>LKR {{ product.price }}</span>
        <span v-if="product.discounted" class="text-[#ee9b08]"> LKR {{ product.discountedPrice }} </span>
      </h3>
      <div class="mb-4">
        <label for="quantity" class="block text-sm font-medium text-black mb-2">Quantity</label>
        <select v-model="selectedQuantity" id="quantity" name="quantity" @change="updateTotalPrice" class="block w-full py-2 px-3 border border-yellow-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
          <option v-for="quantity in quantities" :key="quantity" :value="quantity">{{ quantity }}</option>
        </select>
      </div>
      <p class="text-black mb-4">{{ product.description }}</p>
      <!-- Discount coupon section -->
      <div class="coupon">
        <input type="text" placeholder="Enter discount code" class="coupon-input">
        <button class="coupon-btn">Apply</button>
      </div>
      <!-- Order Now button -->
      <div class="order-now mt-4">
        <router-link :to="{ name: 'OrderDetails', query: { productId: product.id, productName: product.name } }" class="bg-[#EE9B08] text-black py-2 px-4 rounded-lg font-semibold">Order Now</router-link>
      </div>
    </div>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import { products } from '../pet-products';
import NotFoundPage from './NotFoundPage.vue';

export default {
  name: 'ProductDetailPage',
  data() {
    return {
      product: products.find(product => product.id === this.$route.params.productId),
      quantities: [1, 2, 3, 4, 5],
      selectedQuantity: 1,
    }
  },
  methods: {
    updateTotalPrice() {
      // No need to calculate total price since it's not displayed
    }
  },
  components: {
    NotFoundPage
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-wrap,
.product-details {
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
}

.img-wrap img {
  border-radius: 25px; 
}

.product-details {
  text-align: left;
}

.text-black {
  color: black;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }

  .img-wrap,
  .product-details {
    width: 48%;
    margin-top: 0;
  }

  .product-details {
    margin-left: 4%;
  }
}

/* Styles for the rating and coupon sections */
.rating {
  margin-bottom: 0.1rem;
}

.star {
  color: #FFD700;
  font-size: 1.2rem;
  margin-right: 0.2rem;
}

.coupon {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.coupon-input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #EE9B08;
  border-radius: 0.25rem;
}

.coupon-btn {
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  background-color: #EE9B08;
  color: #000;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.coupon-btn:hover {
  background-color: #FFC107;
}

.order-now {
  margin-top: 1rem;
}
</style>
