<template>
  <div class="container">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-black">Get In Touch</h2>
    <div class="form-container">
      <h3>Send a message</h3>
      <form class="contact-form">
        <label for="first-name">First Name:</label>
        <input type="text" id="first-name" name="first-name" placeholder="Your first name" required>
        
        <label for="last-name">Last Name:</label>
        <input type="text" id="last-name" name="last-name" placeholder="Your last name" required>
        
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" placeholder="Your phone number" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" required>
        
        <label for="company">Group or Company:</label>
        <input type="text" id="company" name="company" placeholder="Your group or company" required>
        
        <label for="message">How can we help?</label>
        <textarea id="message" name="message" placeholder="Your message" required></textarea>
        
        <button type="submit">Submit</button>
      </form>
    </div>
    
    <div class="contact-info">
      <p><i class="fas fa-phone-alt"></i> +94 76 084 0008</p>
      <p><i class="fas fa-envelope"></i> cb010640@students.apiit.lk</p>
      <div class="social-media">
        <p>Follow us on social media:</p>
        <ul>
          <li><a href="#"><i class="fab fa-facebook"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </div>
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31637.299940574147!2d80.630273!3d7.294459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb8eabe51234cd%3A0xaaaaaaa!2s289%2Ff%20Matale%20Road%2C%20Akurana!5e0!3m2!1sen!2slk!4v1621346345678!5m2!1sen!2slk" width="600" height="450" style="border:0;" loading="lazy"></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
}

h2 {
  font-size: 2rem;
  color: black;
  margin-bottom: 10px;
  font-weight: bold;
}

p {
  font-size: 16px;
  color: black;
  line-height: 1.5;
}

h3 {
  font-size: 1.1rem;
  color: black;
  margin-bottom: 10px;
  font-weight: bold;
}

.form-container {
  margin-bottom: 20px;
}

.contact-form {
  margin-top: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: black;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #EE9B08;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #d88b07;
}

.contact-info {
  margin-top: 20px;
  color: black;
}

.social-media {
  margin-top: 20px;
}

.social-media ul {
  list-style-type: none;
  padding: 0;
}

.social-media ul li {
  display: inline-block;
  margin-right: 10px;
}

.social-media ul li a {
  color: black;
  transition: color 0.3s;
}

.social-media ul li a:hover {
  color: #EE9B08;
}

.map-container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 100vw;
}

</style>
