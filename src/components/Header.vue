<template>
  <header class="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
    <nav class="max-w-7xl mx-auto flex items-center justify-between p-4">

      <div class="text-2xl font-bold text-blue-600">Janak</div>

      <ul class="hidden md:flex space-x-6 font-medium text-gray-700">
        <li><a href="#home" class="hover:text-blue-600">Home</a></li>
        <li><a href="#about" class="hover:text-blue-600">About</a></li>
        <li><a href="#skills" class="hover:text-blue-600">Skills</a></li>
        <li><a href="#projects" class="hover:text-blue-600">Projects</a></li>
        <li><a href="#contact" class="hover:text-blue-600">Contact</a></li>
      </ul>


      <div class="md:hidden">
        <button @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

  
    <div v-if="menuOpen" class="md:hidden bg-white border-t">
      <ul class="flex flex-col space-y-4 p-4 text-gray-700 font-medium">
        <li><a @click="toggleMenu" href="#home">Home</a></li>
        <li><a @click="toggleMenu" href="#about">About</a></li>
        <li><a @click="toggleMenu" href="#skills">Skills</a></li>
        <li><a @click="toggleMenu" href="#projects">Projects</a></li>
        <li><a @click="toggleMenu" href="#contact">Contact</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>
