import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', { 
    state: () => ({
        user: JSON.parse(localStorage.getItem('currentUser')) || null,
        error: null
    }),
    actions: {
        async login(email, password) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                this.user = { email };
                localStorage.setItem('currentUser', JSON.stringify(this.user));
                this.error = null;
                return true;
            } else {
                this.error = 'Email ou mot de passe incorrect.';
                return false;
            }
        },
        async signup(email, password) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.find(user => user.email === email);

            if (userExists) {
                this.error = 'Cet utilisateur existe déjà.';
                return false;
            }

            users.push({ email, password });
            localStorage.setItem('users', JSON.stringify(users));
            this.user = { email };
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            this.error = null;
            return true;
        },
        logout() {
            this.user = null;
            localStorage.removeItem('currentUser');
        }
    }
});