import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import PetHealthView from '../views/PetHealthView.vue';
import RescueCentreView from '../views/RescueCentreView.vue';
import Login from '../components/AppLogin.vue';
import Register from '../components/AppRegister.vue';
import ProductPage from '../pages/ProductPage.vue';
import OrderDetailsPage from '../components/OrderDetailsPage.vue';
import ShoppingCartPage from '../pages/ShoppingCartPage.vue';
import ProductDetailPage from '../pages/ProductDetailPage.vue';
import ProductList from '../components/ProductsList.vue';
import CatFacts from '../components/CatFacts.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import DogDetails from '../components/DogDetails.vue';
import PrivacyPolicy from '../components/PrivacyPolicy.vue';
import TermsOfService from '../components/TermsOfService.vue';
import UserProfile from '../components/UserProfile.vue';
import store from '../store';
import DeliveryPage from '../pages/DeliveryPage.vue';
import FAQPage from '../pages/FAQPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductList,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/rescuecentre',
    name: 'rescuecentre',
    component: RescueCentreView
  },
  {
    path: '/dog/:id',
    name: 'dog-details',
    component: DogDetails
  },
  {
    path: '/pet-health',
    name: 'pet-health',
    component: PetHealthView
  },
  {
    path: '/cat-facts',
    name: 'CatFacts',
    component: CatFacts,
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
    meta: { requiresAuth: true }
  },
  {
    path: '/products',
    name: 'products',
    component: ProductPage
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-of-service',
    name: 'terms-of-service',
    component: TermsOfService
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCartPage
  },
  {
    path: '/products/:productId',
    name: 'product-detail',
    component: ProductDetailPage
  },
  {
    path: '/order-details',
    name: 'OrderDetails',
    component: OrderDetailsPage // Add OrderDetailsPage route
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: DeliveryPage
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.user.loggedIn;

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    store.commit('SET_INTENDED_ROUTE', to.fullPath); // Set the intended route
    next({ path: '/login' });
  } else {
    next();
  }
});

export default router;