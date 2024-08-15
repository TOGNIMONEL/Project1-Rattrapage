<template>
  <!-- component -->
  <div class="min-h-screen bg-white-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl font-semibold">CONNEXION</h1>
          </div>
          <form @submit.prevent="login">
            <div class="divide-y divide-gray-200">
              <div
                class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div class="relative">
                  <input
                    v-model="email"
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                    required
                  />
                  <label
                    for="email"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Email Address</label
                  >
                </div>
                <div class="relative">
                  <input
                    v-model="password"
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    required
                  />
                  <label
                    for="password"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Password</label
                  >
                </div>
                <button
                  type="submit"
                  class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Se connecter
                </button>
                <p v-if="error" class="mt-4 text-red-500">{{ error }}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-6">Connexion</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input
            v-model="email"
            id="email"
            type="email"
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700">Mot de passe</label>
          <input
            v-model="password"
            id="password"
            type="password"
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/authStore";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      const authStore = useAuthStore();
      const success = await authStore.login(this.email, this.password);

      if (success) {
        this.$router.push("/");
      } else {
        this.error = authStore.error;
      }
    },
  },
};
</script>
