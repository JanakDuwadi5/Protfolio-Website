<template>
  <section id="skills" class="bg-gray-100 py-16 px-4">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">My Skills</h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <div v-for="skill in skills" :key="skill" class="bg-white shadow-md rounded-lg py-4 px-6 text-gray-800 font-semibold hover:shadow-xl transition">
          {{ skill }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  "HTML", "CSS", "JavaScript",
  "Vue.js", "TailwindCSS", "Git",
  "Python", "Flask", "Django",
  "MySQL", "PostgreSQL", "Figma"
]
</script>
