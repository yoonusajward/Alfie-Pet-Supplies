<template>
  <div class="subscribe-container">
    <h2 class="subscribe-heading">Subscribe for Discounts</h2>
    <p class="subscribe-text">Subscribe to get a discount voucher, latest news and updates from our team.</p>
    <form @submit.prevent="handleSubmit">
      <div class="subscribe-input-container">
        <label for="email" class="subscribe-label">Email address: </label>
        <input
          type="email"
          v-model="email"
          id="email"
          class="subscribe-input"
          placeholder="Enter your email"
          required
          aria-label="Email Address"
        />
      </div>
      <button type="submit" class="subscribe-button">
        Subscribe
      </button>
    </form>
    <p v-if="message" class="subscribe-message">{{ message }}</p>
    <p v-if="errorMessage" class="subscribe-error">{{ errorMessage }}</p>

    <!-- Modal -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Congratulations!</h2>
        <p>Your discount voucher:</p>
        <p class="discount-code">CODE123</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      errorMessage: '',
      showModal: false
    };
  },
  methods: {
    handleSubmit() {
      // Simple email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.errorMessage = 'Please enter a valid email address';
        return;
      }

      // Simulate a subscription API call
      this.message = `Thank you for subscribing with ${this.email}!`;
      this.email = ''; // Clear the email field
      this.errorMessage = ''; // Clear any previous error message

      // Show the modal
      this.showModal = true;
    },
    closeModal() {
      // Close the modal
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
.subscribe-container {
  background-color: #f7fafc00;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-width: 100%;
  margin: 2rem auto;
}

.subscribe-heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: black;
}

.subscribe-text {
  margin-bottom: 1rem;
  color: #4a5568;
}

.subscribe-input-container {
  margin-bottom: 1rem;
}

.subscribe-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.subscribe-input {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

.subscribe-input:focus {
  outline: none;
  border-color: #EE9B08;
  box-shadow: 0 0 0 3px #EE9B08;
}

.subscribe-button {
  margin-top: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #EE9B08;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.subscribe-button:hover {
  background-color: #d38600;
  transform: translateY(-2px);
}

.subscribe-message {
  margin-top: 1rem;
  color: #38a169;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.discount-code {
  font-size: 1.5rem;
  font-weight: bold;
  color: #38a169;
}
</style>