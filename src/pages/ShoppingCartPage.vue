<template>
  <div>
    <h2>Shopping Cart</h2>
    <div v-if="cartItems.length > 0">
      <div class="product-container" v-for="product in cartItems" :key="product.id">
        <img class="product-image" :src="product.imageName" />
        <div class="details-wrap">
          <h3> {{ product.name }}</h3>
          <p> {{ product.price }}</p>
        </div>
        <button class="remove-button">Remove from Cart</button>
      </div>
      <button class="checkout-button">Proceed to Checkout</button>
    </div>
    <div v-else>
      Your cart is empty, Continue Shopping.
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCartPage',
  data() {
    return {
      cartItems: []
    }
  }
}
</script>

<style scoped>

</style>
