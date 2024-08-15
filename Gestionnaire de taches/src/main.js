import './assets/main.css'
import { useAuthStore } from './stores/authStore';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if (to.meta.requiresAuth && !authStore.user) {
        next({ name: 'Sign' })
    }
    else {
        next()
    }
})
app.mount('#app')
