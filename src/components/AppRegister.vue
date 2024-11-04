<template>
  <div class="register-container">
    <div class="container mx-auto my-4">
      <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
      <div class="flex justify-center">
        <div class="w-full md:w-1/2">
          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">{{ error }}</div>
              <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                id="name"
                type="text"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                required
                autofocus
                v-model="name"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                id="email"
                type="email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                required
                v-model="email"
              />
            </div>
            <div class="mb-6">
              <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                id="password"
                type="password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                required
                v-model="password"
              />
            </div>
            <div class="flex justify-center">
              <button type="submit" class="bg-[#EE9B08] hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="Register">Register</button>
            </div>
            <p class="mt-4 text-center">Already have an account? <router-link to="/login" class="text-yellow-500">Login here</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: "RegisterComponent",
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const Register = async () => {
      try {
        await store.dispatch('register', {
          email: email.value,
          password: password.value,
          name: name.value
        })
        router.push('/')
      }
      catch (err) {
        error.value = err.message
      }
    }

    return { Register, name, email, password, error }
  }
};
</script>

<style scoped>
.register-container {
  position: relative;
  min-height: 100vh;
}

.register-container::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('@/assets/pages/Man with Cat.png');
  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;
  z-index: -1;
}

.container {
  position: relative;
  z-index: 1;
}
</style>
