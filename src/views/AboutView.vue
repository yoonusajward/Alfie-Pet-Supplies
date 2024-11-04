<template>
  <div>
    <h1 class="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-black">About Us</h1>
    
    <!-- Image and text in two columns -->
    <div class="flex flex-wrap justify-center items-center mb-8">
      <div class="w-full md:w-1/2 px-4">
        <img src="../assets/pages/About Us Image.jpg" alt="About Us Image" class="w-full h-auto">
      </div>
      <div class="w-full md:w-1/2 px-4">
        <p class="text-2xl mb-4 text-black">At Alfie Pet Supplies, we're committed to providing exceptional products and services to our customers, both online and in-store. Join us in our mission to make a difference in the lives of pets and their owners!</p>
      </div>
    </div>

    <div class="container">
      <h2 class="text-2xl font-bold mb-4 text-black">Our Services</h2>
      <div class="flex flex-wrap justify-center mb-4">
        <div class="service-card" style="background-color: #EE9B08;">
          <div class="service-icon"><i class="fas fa-paw"></i></div>
          <h3 class="text-lg text-black font-bold mb-2">Pet Products and Accessories</h3>
          <p class="text-black">Offering a wide range of high-quality pet products and accessories, including food, toys, grooming supplies, and more, to meet all your pet's needs.</p>
        </div>
        <div class="service-card" style="background-color: #EE9B08;">
          <div class="service-icon"><i class="fas fa-home"></i></div>
          <h3 class="text-lg text-black font-bold mb-2">Adoption Services</h3>
          <p class="text-black">Providing a platform to adopt pets, especially focusing on dogs and cats, from local rescue centers, promoting responsible pet ownership.</p>
        </div>
        <div class="service-card" style="background-color: #EE9B08;">
          <div class="service-icon"><i class="fas fa-heartbeat"></i></div>
          <h3 class="text-lg text-black font-bold mb-2">Pet Health and Care Tips</h3>
          <p class="text-black">Sharing valuable and regularly updated tips on pet health, grooming, nutrition, and overall care to ensure your pets stay healthy and happy.</p>
        </div>
      </div>

      <p class="mb-4 text-black">At Alfie Pet Supplies, we're more than just a pet shop; we're a community dedicated to providing quality products and supporting our furry friends in need. During the challenging times of COVID-19, we faced closures like many businesses, but thanks to the loyalty of our local customers, who placed phone orders, we managed to stay afloat.</p>
      <p class="mb-4 text-black">Before the pandemic, we proudly sponsored Hills Rescue, a local dog rescue center, by displaying posters, seeking donations, and donating a portion of certain product sales to the center. This commitment to our community and its pets is at the core of who we are.</p>
      <p class="mb-4 text-black">Now, recognizing the need to reach a wider audience and continue serving our loyal customers, we've decided to establish an online presence. Our new web application aims to offer a seamless user experience while fulfilling the following key objectives:</p>
      <ul class="list-disc ml-auto mr-auto mb-4 max-w-md">
        <li class="text-black">Promoting our pet shop and its offerings.</li>
        <li class="text-black">Highlighting Hills Rescue and the adorable dogs available for adoption.</li>
        <li class="text-black">Providing valuable and regularly updated tips on pet health.</li>
        <li class="text-black">Encouraging users to subscribe to our website for exclusive discounts and promotions. Subscribers will have access to printable discount vouchers for in-store use.</li>
        <li class="text-black">Displaying our range of products available for phone orders. Please note, at present, we do not have an online shopping cart.</li>
        <li class="text-black">Showcasing discounted products that are either end-of-line or approaching their sell-by dates.</li>
      </ul>
      <h3 class="text-lg text-black font-bold mb-2">Follow Us On: </h3>
      <div class="social-links mb-4">
        <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 20px;
}

p {
  margin-bottom: 20px;
}

.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.w-full {
  width: 100%;
}

.md\:w-1\/2 {
  width: 50%;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

ul {
  margin-bottom: 20px;
}

ul li {
  text-align: center;
}

.service-card {
  width: calc(33.33% - 30px);
  padding: 20px;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.service-icon {
  font-size: 40px;
  margin-bottom: 10px;
}

.social-links {
  text-align: center;
}

.social-link {
  display: inline-block;
  margin-right: 10px;
}

.contact-link {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .service-card {
    width: 100%;
    margin: 0 5px;
  }

  .md\:w-1\/2 {
    width: 100%;
  }

  .px-4 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>
