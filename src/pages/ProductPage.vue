<template>
  <div class="page-wrap p-8 md:p-8 max-w-screen-lg mx-auto custom-page-wrap">
    <h1 class="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-black">Products</h1>
    <div>
      <ProductsList :products="products"/>
    </div>
  </div>
</template>

<script>
import ProductsList from '../components/ProductsList.vue';
import { products } from '../pet-products';

export default {
  name: 'ProductPage',
  components: {
    ProductsList,
  },
  data() {
    return {
      products,
    };
  }
}
</script>

<style scoped>
.custom-page-wrap {
  margin: auto;
  min-height: 100vh;
}

.text-black {
  color: black;
}

@media (min-width: 1024px) {
  .custom-page-wrap {
    max-width: none; /* Remove the max-width in desktop view */
  }
}
</style>
