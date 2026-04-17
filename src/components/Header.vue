<template>
  <header
    class="w-full fixed top-0 left-0 z-50 bg-white/95 dark:bg-gray-950/95 border-b border-gray-200 dark:border-gray-800 backdrop-blur"
  >
    <nav class="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
      <div class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
        Janak
      </div>

      <ul
        class="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-medium text-sm lg:text-base"
      >
        <li>
          <a href="#home" class="hover:text-gray-900 dark:hover:text-white transition">Home</a>
        </li>
        <li>
          <a href="#about" class="hover:text-gray-900 dark:hover:text-white transition">About</a>
        </li>
        <li>
          <a href="#education" class="hover:text-gray-900 dark:hover:text-white transition"
            >Education</a
          >
        </li>
        <li>
          <a href="#skills" class="hover:text-gray-900 dark:hover:text-white transition">Skills</a>
        </li>
        <li>
          <a href="#experience" class="hover:text-gray-900 dark:hover:text-white transition"
            >Experience</a
          >
        </li>
        <li>
          <a href="#achievements" class="hover:text-gray-900 dark:hover:text-white transition"
            >Achievements</a
          >
        </li>
        <li>
          <a href="#contact" class="hover:text-gray-900 dark:hover:text-white transition"
            >Contact</a
          >
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <button
          @click="toggleTheme"
          type="button"
          class="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Toggle dark mode"
        >
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3c0 .28-.01.56-.01.84A7.5 7.5 0 0 0 20.16 12c.28 0 .56-.01.84-.01z"
            />
          </svg>
        </button>

        <div class="md:hidden">
          <button @click="toggleMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-gray-700 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <div
      v-if="menuOpen"
      class="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
    >
      <ul class="flex flex-col space-y-4 p-6 text-gray-700 dark:text-gray-300 font-medium">
        <li>
          <a
            @click="toggleMenu"
            href="#home"
            class="hover:text-gray-900 dark:hover:text-white transition"
            >Home</a
          >
        </li>
        <li>
          <a
            @click="toggleMenu"
            href="#about"
            class="hover:text-gray-900 dark:hover:text-white transition"
            >About</a
          >
        </li>
        <li>
          <a
            @click="toggleMenu"
            href="#education"
            class="hover:text-gray-900 dark:hover:text-white transition"
            >Education</a
          >
        </li>
        <li>
          <a
            @click="toggleMenu"
            href="#skills"
            class="hover:text-gray-900 dark:hover:text-white transition"
            >Skills</a
          >
        </li>
        <li>
          <a
            @click="toggleMenu"
            href="#experience"
            class="hover:text-gray-900 dark:hover:text-white transition"
            >Experience</a
          >
        </li>
        <li>
          <a
            @click="toggleMenu"
            href="#achievements"
            class="hover:text-gray-900 dark:hover:text-white transition"
            >Achievements</a
          >
        </li>
        <li>
          <a
            @click="toggleMenu"
            href="#contact"
            class="hover:text-gray-900 dark:hover:text-white transition"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const menuOpen = ref(false)
const isDark = ref(false)

const applyTheme = (darkEnabled) => {
  document.documentElement.classList.toggle('dark', darkEnabled)
  document.body.classList.toggle('dark', darkEnabled)
  localStorage.setItem('theme', darkEnabled ? 'dark' : 'light')
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
}

onMounted(() => {
  isDark.value =
    document.documentElement.classList.contains('dark') || document.body.classList.contains('dark')
  applyTheme(isDark.value)
})
</script>
