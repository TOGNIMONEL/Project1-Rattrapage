<template>
  <NavbarView />
  <div class="p-4">
    <h2 class="text-xl font-semibold mb-4">Ajouter ou Modifier une tâche</h2>
    <form @submit.prevent="submitTask" class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-4">
        <label for="title" class="block text-gray-700">Titre</label>
        <input
          v-model="task.title"
          id="title"
          type="text"
          class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block text-gray-700">Description</label>
        <textarea
          v-model="task.description"
          id="description"
          class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="startDate" class="block text-gray-700">Date de début</label>
        <input
          v-model="task.startDate"
          id="startDate"
          type="date"
          class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div class="mb-4">
        <label for="dueDate" class="block text-gray-700">Date de fin</label>
        <input
          v-model="task.dueDate"
          id="dueDate"
          type="date"
          class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div class="mb-4">
        <label for="priority" class="block text-gray-700">Priorité</label>
        <select
          v-model="task.priority"
          id="priority"
          class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        >
          <option value="low">Faible</option>
          <option value="medium">Important</option>
          <option value="high">Urgent</option>
        </select>
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Ajouter Tâche
      </button>
      <RouterLink
        to="/home/"
        type="submit"
        class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >Annuler</RouterLink
      >

    </form>
  </div>
</template>

<script>
import NavbarView from "../components/NavbarView.vue";
import { useTaskStore } from "../stores/taskStore.js";

export default {
  data() {
    return {
      task: {
        title: "",
        description: "",
        startDate: "",
        dueDate: "",
        priority: "low",
      },
    };
  },
  methods: {
    submitTask() {
      const taskStore = useTaskStore();
      const newTask = { ...this.task, id: Date.now() };
      taskStore.addTask(newTask);
      this.resetForm();
      this.$router.push("/home");
    },
    resetForm() {
      this.task = {
        title: "",
        description: "",
        startDate: "",
        dueDate: "",
        priority: "low",
      };
    },
  },
};
</script>
