<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-6">Connexion</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input v-model="email" id="email" type="email" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700">Mot de passe</label>
          <input v-model="password" id="password" type="password" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Se connecter</button>
        <p v-if="error" class="mt-4 text-red-500">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async login() {
      const authStore = useAuthStore();
      const success = await authStore.login(this.email, this.password);

      if (success) {
        this.$router.push('/home');
      } else {
        this.error = authStore.error;
      }
    }
  }
};
</script>