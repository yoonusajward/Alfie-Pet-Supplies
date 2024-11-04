<template>
  <div class="py-8">
    <div class="container mx-auto">
      <div class="mb-4">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-black">Delighted Customers Share Their Experience</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="p-4">
          <div class="bg-gray-100 rounded-lg shadow-md flex flex-col h-full max-w-xl w-full testimonial-card">
            <div class="flex-grow p-4">
              <p class="text-lg text-gray-700 mb-4" v-html="testimonial.message"></p>
            </div>
            <div class="p-4 text-sm text-gray-600 italic text-right">- {{ testimonial.author }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialSection',
  data() {
    return {
      testimonials: [
        { message: "⭐⭐⭐⭐⭐<br><br>Alfie Pet Supplies is more than just a pet shop. We're a community dedicated to providing quality products and supporting our furry friends in need.", author: "Brooklyn L" },
        { message: "⭐⭐⭐⭐⭐<br><br>Explore our website to discover our range of products, learn about Hills Rescue, and find valuable pet care tips.", author: "Emily S" },
        { message: "⭐⭐⭐⭐⭐<br><br>Alfie Pet Supplies delivers on its promise of quality and affordability. I'm a loyal customer because of their exceptional service and impressive product range.", author: "David T" }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  padding: 2rem;
}

.testimonial-card {
  background-color: #f9f9f9;
  border: 3px solid #e2e8f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px #EE9B08;
}

.text-gray-700 {
  color: #4a4a4a;
}

.text-gray-600 {
  color: #6b6b6b;
}

.bg-gray-100 {
  background-color: #f7f7f7;
}
</style>
