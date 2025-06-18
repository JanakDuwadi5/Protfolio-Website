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
import todoImg from '@/assets/to-do-app.png';
import contactManager from '@/assets/contact-manager.png';
import simonGame from '@/assets/simon-game.png';

const projects = [
  {
    title: "To-Do-App",
    description: "A simple Flask-based web app to manage daily tasks...",
    image: todoImg,
    demo: "",
    code: ""
  },
  {
    title: "Contact Manager",
    description: "A basic Flask-based CRUD app that lets user add ,delete, update and see contact details.",
    image: contactManager,
    demo: "#",
    code: "#"
  },
  {
    title:"Simon Game",
    description:"Classic memory-based game recreated using JavaScript, HTML, and CSS to demonstrate DOM manipulation, event handling, and game logic skills.",
    image:simonGame,
    demo:'https://janakduwadi-simon-game.netlify.app/'
  }
];

</script>
