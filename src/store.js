import { createStore } from 'vuex';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from './firebaseConfig';

const store = createStore({
  state: {
    user: {
      loggedIn: false,
      data: null
    },
    intendedRoute: null,
    userDetails: null
  },
  getters: {
    user(state) {
      return state.user;
    },
    userDetails(state) {
      return state.userDetails;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_INTENDED_ROUTE(state, route) {
      state.intendedRoute = route;
    },
    SET_USER_DETAILS(state, userDetails) {
      state.userDetails = userDetails;
    }
  },
  actions: {
    async register(context, { email, password, name }) {
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        if (response) {
          await updateProfile(response.user, { displayName: name });
          context.commit('SET_USER', response.user);
        } else {
          throw new Error('Unable to register user');
        }
      } catch (err) {
        throw new Error(err.message);
      }
    },
    async logIn(context, { email, password }) {
      try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        if (response) {
          context.commit('SET_USER', response.user);
          await context.dispatch('fetchUserDetails', response.user);
          if (context.state.intendedRoute) {
            const route = context.state.intendedRoute;
            context.commit('SET_INTENDED_ROUTE', null); // Reset intended route
            return route; // Return intended route
          } else {
            return '/profile'; // If no intended route, return default profile route
          }
        } else {
          throw new Error('Login failed');
        }
      } catch (err) {
        throw new Error(err.message);
      }
    },
    async logOut(context) {
      await signOut(auth);
      context.commit('SET_USER', null);
    },
    async fetchUser(context, user) {
      context.commit('SET_LOGGED_IN', user !== null);
      if (user) {
        context.commit('SET_USER', {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        context.commit('SET_USER', null);
      }
    },
    async fetchUserDetails(context, user) {
      const userDetails = { displayName: user.displayName, email: user.email };
      context.commit('SET_USER_DETAILS', userDetails);
    }
  }
});

export default store;
