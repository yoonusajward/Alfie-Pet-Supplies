<template>
  <div class="app">
    <AppHeader />
    <router-view :class="{ 'main': !userLoggedIn }" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    userLoggedIn() {
      return this.$store.getters.user.loggedIn
    }
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: white;
}
</style>