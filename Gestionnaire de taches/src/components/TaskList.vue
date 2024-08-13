<template>
  <div class="p-4">
    <h2 class="text-xl font-semibold mb-4">Liste des Tâches</h2>
    
    <ul class="bg-white p-6 rounded-lg shadow-md">
      <li v-for="task in sortedTasks" :key="task.id" class="mb-4 p-4 border-b border-gray-200">
        <h3 class="text-lg font-semibold">{{ task.title }}</h3>
        <p class="text-gray-600">{{ task.description }}</p>
        <p class="text-gray-500">Début: {{ task.startDate }}, Fin: {{ task.dueDate }}</p>
        <p class="text-gray-800">Priorité: {{ task.priority }}</p>
        <div class="flex justify-start">
           <button @click="editTask(task.id)" class="mt-2 bg-yellow-500 text-white py-1 px-4 rounded-md hover:bg-yellow-600">Modifier</button>
        <br>
        <br>
        <button @click="confirmDelete(task.id)" class="mt-2 bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600">Supprimer</button> 
        </div>
        
      </li>
    </ul>
  </div>
</template>

<script>
import { useTaskStore } from '../stores/taskStore.js';

export default {
  computed: {
    sortedTasks() {
      const taskStore = useTaskStore();
      return taskStore.getTasks();
    }
  },
  methods: {
    editTask(taskId) {
    const taskStore = useTaskStore();
     taskStore.updateTask(taskId);
    },
    confirmDelete(taskId) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
        const taskStore = useTaskStore();
        taskStore.deleteTask(taskId);
      }
    }
  }
};
</script>