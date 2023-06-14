import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import AboutView from '../views/AboutView.vue';
import Wishlist from '../views/WishlistView.vue';
import Cart from '../views/CartView.vue';




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
        },
        {
            path: '/wishlist',
            name: 'wishlist',
            component: Wishlist,
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
    ]
})


export default router