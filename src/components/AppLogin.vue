<template>
  <div class="login-container">
    <div class="container mx-auto my-4">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <div class="flex justify-center">
        <div class="w-full md:w-1/2">
          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">{{ error }}</div>
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                id="email"
                type="email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                required
                autofocus
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
              <button type="submit" class="bg-[#EE9B08] hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="Login">Login</button>
            </div>
          </div>
          <div class="text-center">
            <p>Don't have an account? <router-link to="/register" class="text-yellow-600">Register</router-link></p>
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
  name: "LoginComponent",
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const Login = async () => {
      try {
        await store.dispatch('logIn', {
          email: email.value,
          password: password.value
        })
        router.push('/')
      } catch (err) {
        error.value = err.message
      }
    }
    return { Login, email, password, error }
  }
};
</script>

<style scoped>
.login-container {
  position: relative;
  min-height: 100vh;
}

.login-container::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('@/assets/pages/Man with Cat.png');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: contain;
  z-index: -1;
}

.container {
  position: relative;
  z-index: 1;
}
</style>
