<template>
  <section id="projects" class="bg-white py-16 px-4">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">My Projects</h2>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="project in projects" :key="project.title" class="bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
          <img :src="project.image" alt="project thumbnail" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-700 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ project.description }}</p>
            <div class="flex justify-between text-sm text-blue-600">
              <a :href="project.demo" target="_blank" class="hover:underline">Live Demo</a>
              <a :href="project.code" target="_blank" class="hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "To-Do-App",
    description: "A simple Flask-based web app to manage daily tasks. Users can add, mark as done, and delete tasks through an intuitive interface. It uses RESTful APIs for backend task management and Jinja2 for dynamic HTML rendering. The UI is clean and responsive, with task input and controls aligned for easy use.",
    image: "./components/to-do-app",
    demo: "https://yourportfolio.com",
    code: "https://github.com/yourusername/vue-portfolio"
  },
  {
    title: "Task Tracker",
    description: "A basic CRUD task app using Vue and local storage.",
    image: "https://via.placeholder.com/400x200",
    demo: "#",
    code: "#"
  }
]
</script>
