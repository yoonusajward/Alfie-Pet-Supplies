<template>
  <!-- Hero Section -->
  <section class="relative h-screen md:h-full lg:h-screen">
    <div class="absolute overflow-hidden">
      <img src="../assets/Alfie Pet Supplies Banner Image Desktop.png" alt="Hero Image Desktop" class="object-cover w-full h-full object-top desktop-image">
      <img src="../assets/Alfie Pet Supplies Banner Image Mobile.png" alt="Hero Image Mobile" class="object-cover w-full h-full object-top mobile-image" style="height: 80%;">
      <div class="absolute inset-0 bg-black opacity-10 mobile-overlay"></div>
    </div>
    <div class="relative text-white text-center">
      <router-link to="/products" class="explore-button px-4 py-2 text-sm bg-[#EE9B08] text-white rounded-full md:px-6 md:py-3 md:text-xl lg:px-8 lg:py-4 lg:text-xl font-bold shadow-lg">
        Explore Now
      </router-link>
    </div>
  </section>
  <!-- Why Choose Us Section -->
  <div class="mt-8 md:mt-12 lg:mt-16 mb-8 md:mb-12 lg:mb-16 mx-auto text-center max-w-screen-lg px-4">
    <h1 class="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 text-black">Why Choose Us?</h1>
    <p class="text-lg md:text-xl lg:text-1xl text-black leading-relaxed">
      Alfie Pet Supplies is more than just a pet shop. We're a community dedicated to providing quality products and supporting our furry friends in need. Explore our website to discover our range of products, learn about Hills Rescue, and find valuable pet care tips.
    </p>
  </div>
  
  <div class="container mt-8">
    <h2 class="text-3xl font-bold mb-8 text-black">Featured Products</h2>
    <ProductList :products="featuredProducts" :showDescription="false" />
    <!-- Button to view all products -->
    <router-link to="/products" class="grid bg-[#EE9B08] text-black font-bold py-4 px-8 rounded-full block text-center mt-8 max-w-xs mx-auto view-all-btn">
      View All Products
    </router-link>
  </div>

  <hr class="border border-gray-300 my-4 w-full">
  <TestimonialSection />
  <hr class="border border-gray-300 my-0 w-full">
  <SubscribeForDiscounts />
    
</template>

<script>
import { products } from '../pet-products';
import ProductList from '@/components/ProductsList.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
import SubscribeForDiscounts from '@/components/SubscribeForDiscounts.vue';

export default {
  name: 'HomeView',
  data() {
    // Limit the displayed products to the first six items from temp-data
    const featuredProducts = products.slice(0, 6);
    
    return {
      featuredProducts: featuredProducts
    };
  },
  methods: {
    viewAllProducts() {
      // Handle navigation to view all products page
    }
  },
  components: {
    ProductList,
    TestimonialSection,
    SubscribeForDiscounts
  },
};
</script>

<style scoped>

/* Desktop Image */
.desktop-image {
  display: block;
}

/* Mobile Image */
.mobile-image {
  display: none;
}

/* Media Query for Mobile View */
@media (max-width: 767px) {
  /* Desktop Image */
  .desktop-image {
    display: none;
  }

  /* Mobile Image */
  .mobile-image {
    display: block;
    height: 80%;
  }

  .mobile-overlay {
    display: none;
  }
}

/* Media Query for Tablets and iPads */
@media (min-width: 768px) and (max-width: 1024px) {
  /* Desktop Image */
  .desktop-image {
    display: none;
  }

  /* Mobile Image */
  .mobile-image {
    display: block;
    height: 80%;
  }

  .mobile-overlay {
    display: none;
  }
}

/* Other Styles */

.header {
  z-index: 1001;
}

.container {
  max-width: 1200px;
  margin: 0px auto;
  padding: 20px;
}

.view-all-btn {
  transition: background-color 0.3s ease;
}

.view-all-btn:hover {
  background-color: #d98806;
}

.explore-button {
  position: absolute;
  bottom: -200px; /* Adjust the positioning for mobile */
  transform: translateX(20%);
  background-color: #EE9B08;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.explore-button:hover {
  background-color: #FFA630;
}

.grid{
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.gap-4 {
    gap: 1rem;
}

.product-item {
  border: 1px solid #ccc;
  padding: 20px;
}

.product-image {
  width: 100%;
  height: auto;
}

section.relative {
  position: relative;
  height: 40vh;
  overflow: hidden;
}

section.relative .absolute {
  width: 100%;
  height: 100%;
}

section.relative .absolute img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

@media (min-width: 768px) {
  section.relative {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section.relative .absolute img {
    height: 100%;
    width: 100%;
  }

  .explore-button {
    bottom: -100px;
    right: -350px;
    transform: none;
  }
}

</style>
