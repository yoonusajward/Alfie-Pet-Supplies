<template>
  <footer class="site-footer bg-[#EE9B08] text-black">
    <div class="site-footer-logo">
      <router-link to="/" class="logo-link">
          <img src="../assets/pet_logo2.png" alt="Alfie Pet Supplies Logo" class="mx-auto" width="50" height="50" />
      </router-link>
    </div>
    <div class="site-footer-social-links">
      <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
      <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
      <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
    </div>
    <div class="site-footer-blocks">
      <div class="site-footer-block-item p-6 rounded-lg shadow-lg">
        <h2 class="site-footer-block-title">Alfie Pet Supplies</h2>
        <div class="site-footer-block-content rte">
          <p>Alfie Pet Supplies is more than just a pet shop. <br> We're a community dedicated to providing quality products and supporting our furry friends in need.</p>
        </div>
      </div>
      <div class="site-footer-block-item has-accordion p-6 rounded-lg shadow-lg">
        <h2 class="site-footer-block-title" data-accordion-trigger="closed">Help</h2>
        <div class="site-footer-block-content">
          <ul class="navmenu navmenu-depth-1" data-navmenu="" data-accordion-content="" style="--menu-open-height: 195px;" data-accordion-state="closed">
            <li class="navmenu-item navmenu-id-about-us"><router-link class="navmenu-link navmenu-link-depth-1" to="/about">About Us</router-link></li>
            <li class="navmenu-item navmenu-id-delivery"><router-link class="navmenu-link navmenu-link-depth-1" to="/delivery">Delivery</router-link></li>
            <li class="navmenu-item navmenu-id-faqs"><router-link class="navmenu-link navmenu-link-depth-1" to="/faq">FAQs</router-link></li>
            <li class="navmenu-item navmenu-id-contact-us"><router-link class="navmenu-link navmenu-link-depth-1" to="/contact">Contact Us</router-link></li>
          </ul>
        </div>
      </div>
      <div class="site-footer-block-item has-accordion p-6 rounded-lg shadow-lg">
        <h2 class="site-footer-block-title" data-accordion-trigger="closed">Legal</h2>
        <div class="site-footer-block-content">
          <ul class="navmenu navmenu-depth-1" data-navmenu="" data-accordion-content="" style="--menu-open-height: 73px;" data-accordion-state="closed">
            <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
            <li><router-link to="/terms-of-service">Terms of Service</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; {{ currentYear }} Alfie Pet Supplies. All rights reserved. <br>
      Project by Yoonus Ajward
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss">
.site-footer {
  padding: 40px 20px;
  text-align: center;
  font-size: 14px;
  background-color: #EE9B08;
  color: black;
}

.site-footer-logo {
  margin-bottom: 15px;
  margin-top: -20px;
}

.site-footer-social-links {
  margin-bottom: 20px;
}

.social-link {
  display: inline-block;
  margin: 0 10px;
  color: black;
}

.site-footer-blocks {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.site-footer-block-item {
  background-color: #f9cb7a;
  color: black;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.site-footer-block-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: black;
}

.site-footer-block-content {
  line-height: 1.6;
  color: black;
}

.site-footer-block-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: black;
}

.site-footer-block-menu ul li {
  margin-bottom: 8px;
}

.router-link-active {
  color: black;
}

.router-link-exact-active {
  color: black;
}

.footer-bottom {
  margin-top: 20px;
  margin-bottom: -20px;
  font-size: 14px;
  color: black;
  text-align: center;
}
</style>
