<template>
    <div class="container mx-auto p-4 md:p-8 flex flex-col items-start bg-white">
      <h1 class="text-3xl font-bold mb-2 text-black">Order Details for "{{ productName }}"</h1>
      <p class="text-black mb-4">Please provide your contact information below to place your order:</p>
      <form @submit.prevent="submitOrder" class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label for="first-name" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">First Name</label>
            <input v-model="firstName" type="text" id="first-name" placeholder="First Name" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" required>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label for="last-name" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Last Name</label>
            <input v-model="lastName" type="text" id="last-name" placeholder="Last Name" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" required>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label for="email" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email Address</label>
            <input v-model="email" type="email" id="email" placeholder="Email Address" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" required>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label for="message" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Message</label>
            <textarea v-model="message" id="message" placeholder="How can we help?" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required></textarea>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-[#EE9B08] text-black py-2 px-4 rounded-lg font-semibold">Submit Order</button>
          <button type="button" @click="orderByPhone" class="bg-[#EE9B08] text-black py-2 px-4 rounded-lg font-semibold">Order by Phone</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OrderDetailsPage',
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        productName: this.$route.query.productName
      };
    },
    methods: {
      submitOrder() {
        // Submit order logic here (e.g., send a request to the backend)
        alert(`Your order for "${this.productName}" has been submitted! We will contact you shortly.`);
        // Reset form fields
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.message = '';
      },
      orderByPhone() {
        // Handle order by phone logic here
        alert('Please call +94 76 084 0008 to place your order.');
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  button {
    margin-top: 20px;
  }
  </style>
  