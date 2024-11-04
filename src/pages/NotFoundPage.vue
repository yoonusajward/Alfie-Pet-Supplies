<template>
  <div class="page flex items-center justify-center min-h-screen w-full">
    <div class="text-center">
      <h1 class="text-6xl md:text-8xl font-bold text-gray-800">404</h1>
      <p class="text-2xl md:text-4xl mt-4 text-gray-600">Page Not Found</p>
      <p class="text-lg md:text-xl mt-2 text-gray-500">The page you are looking for doesn't exist or an error occurred.</p>
      <router-link to="/" class="mt-8 inline-block bg-custom-button text-white py-2 px-4 rounded hover:bg-custom-button-dark transition duration-300">Go Back Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage"
}
</script>

<style scoped>

.page {
  min-height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

.bg-custom-button {
  background-color: #EE9B08;
  color: black;
  font-weight: bold;
}

.hover\:bg-custom-button-dark:hover {
  background-color: #d98806;; /* Slightly darker shade for hover effect */
}

</style>
