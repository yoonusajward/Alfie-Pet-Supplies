<template>
  <header :style="{ backgroundColor: '#EE9B08', position: 'relative' }" class="header">
    <router-link to="/">
      <img alt="Vue logo" src="../assets/pet_logo2.png" class="logo">
    </router-link>
    <router-link to="/" class="title-link">
      <div class="title">Alfie Pet Supplies</div>
    </router-link>
    <button @click="toggleNav" class="toggle-nav" :aria-expanded="isNavOpen.toString()">
      &#9776;
    </button>
    <nav :class="{ 'active': isNavOpen }" class="nav">
      <ul class="nav-links">
        <li><router-link to="/" class="nav-link" @click="closeNav">Home</router-link></li>
        <li><router-link to="/products" :class="{ 'active': $route.path === '/products' }" class="nav-link" @click="closeNav">Shop</router-link></li>
        <li><router-link to="/rescuecentre" class="nav-link" @click="closeNav">Rescue Centre</router-link></li>
        <li><router-link to="/pet-health" class="nav-link" @click="closeNav">Health Tips</router-link></li>
        <li><router-link to="/cat-facts" class="nav-link" @click="closeNav">Cat Facts</router-link></li>
        <li><router-link to="/about" class="nav-link" @click="closeNav">About</router-link></li>
        <li><router-link to="/contact" class="nav-link" @click="closeNav">Contact</router-link></li>
        <li class="user-info">
          <router-link to="/profile" class="nav-link" @click="closeNav">
            <span class="material-icons user-icon">account_circle</span><!-- User icon -->
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isNavOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
    }
  }
};
</script>

<style scoped>
.header {
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  color: black;
  height: 70px;
  background-color: #EE9B08;
  transition: background-color 0.3s;
  position: fixed;
  width: 100%;
}

.main {
  margin-top: 60px;
}

.logo {
  height: 50px;
  margin-right: 20px;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
}

.title-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: left;
  flex-grow: 1;
  justify-content: flex-start;
}

.toggle-nav {
  display: none;
  font-size: 1.5rem;
  color: black;
  cursor: pointer;
}

.nav {
  display: flex;
  z-index: 1000;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.nav-links li {
  margin-left: 15px;
}

.nav-link {
  text-decoration: none;
  color: black;
  margin-left: 20px;
  justify-content: center;
}

.nav-link.active,
.nav-link.router-link-active,
.nav-link.router-link-active:hover {
  color: white;
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-icon {
  margin-right: 5px;
  width: 100%;
  text-align: center;
}

.nav-link:hover .user-icon {
  color: white;
}

/* Apply circular border to active router links */
.nav-link.router-link-active,
.nav-link.router-link-active:hover {
  color: white;
  border: 2px solid white;
  border-radius: 999px;
  display: inline-block;
  padding: 5px 20px;
}

/* Media Query for Mobile and Tablet View */
@media (max-width: 1024px) {
  .toggle-nav {
    display: block;
  }

  .nav {
    display: none;
    flex-direction: column;
    background-color: #EE9B08;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
  }

  .nav.active {
    display: flex;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    width: 100%;
  }

  .nav-links li {
    margin: 0;
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }

  .nav-link {
    margin: 0;
    padding: 10px 20px;
    width: 100%;
    text-align: center;
  }

  .nav-link.active {
    background-color: #FFA630;
    color: white;
  }

  .user-info {
    margin-top: 20px;
  }

  .user-info .nav-link {
    margin-left: 0;
  }

  .user-info .nav-link.active {
    border: none;
  }

  .user-info .nav-link .user-icon {
    color: white;
  }
}
</style>
