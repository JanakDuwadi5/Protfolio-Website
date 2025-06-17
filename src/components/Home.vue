<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4"
  >
    <div class="max-w-3xl text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Hi, I'm Janak Duwadi 👋
      </h1>

      <!-- Custom typewriter text -->
      <p class="text-xl text-blue-600 font-semibold h-8">
        {{ displayedText }}<span class="animate-pulse">|</span>
      </p>

      <a
        href="#projects"
        class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        View My Projects
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const texts = [
  'Frontend Developer',
  'Vue.js Enthusiast',
  'TailwindCSS Lover',
  'Lifelong Learner 💡'
]

const displayedText = ref('')
let index = 0
let charIndex = 0
let isDeleting = false

function type() {
  const current = texts[index]
  if (isDeleting) {
    displayedText.value = current.substring(0, charIndex--)
    if (charIndex < 0) {
      isDeleting = false
      index = (index + 1) % texts.length
    }
  } else {
    displayedText.value = current.substring(0, charIndex++)
    if (charIndex > current.length) {
      isDeleting = true
      setTimeout(type, 1200) // pause before deleting
      return
    }
  }
  setTimeout(type, isDeleting ? 50 : 100)
}

onMounted(type)
</script>
