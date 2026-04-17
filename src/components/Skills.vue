<template>
  <section ref="skillsSection" id="skills" class="bg-white dark:bg-gray-950 dark:border-t dark:border-gray-900 py-16 sm:py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">Skills & Technologies</h2>
        <div class="w-12 h-1 bg-gray-900 dark:bg-white rounded"></div>
      </div>

      <!-- Backend Technologies -->
      <div class="mb-10 sm:mb-12">
        <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">Backend Technologies</h3>
        <div class="flex flex-wrap gap-3">
          <span v-for="(skill, index) in skills.backend" :key="skill" :class="['skill-badge', skillsInView ? 'reveal' : '', 'px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-800 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200']" :style="{ animationDelay: `${80 + index * 80}ms` }">
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Frontend Technologies -->
      <div class="mb-10 sm:mb-12">
        <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">Frontend Technologies</h3>
        <div class="flex flex-wrap gap-3">
          <span v-for="(skill, index) in skills.frontend" :key="skill" :class="['skill-badge', skillsInView ? 'reveal' : '', 'px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-800 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200']" :style="{ animationDelay: `${480 + index * 80}ms` }">
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Database & Tools -->
      <div class="mb-10 sm:mb-12">
        <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">Database & Tools</h3>
        <div class="flex flex-wrap gap-3">
          <span v-for="(skill, index) in skills.tools" :key="skill" :class="['skill-badge', skillsInView ? 'reveal' : '', 'px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-800 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200']" :style="{ animationDelay: `${880 + index * 80}ms` }">
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Core Concepts -->
      <div>
        <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">Core Concepts</h3>
        <div class="flex flex-wrap gap-3">
          <span v-for="(skill, index) in skills.concepts" :key="skill" :class="['skill-badge', skillsInView ? 'reveal' : '', 'px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-800 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200']" :style="{ animationDelay: `${1200 + index * 80}ms` }">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const skillsSection = ref(null)
const skillsInView = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries
      skillsInView.value = entry.isIntersecting
    },
    { threshold: 0.3, rootMargin: '0px 0px -60px 0px' }
  )

  if (skillsSection.value) {
    observer.observe(skillsSection.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

const skills = {
  backend: [
    "Laravel",
    "RESTful APIs",
    "Eloquent ORM",
    "MVC Architecture",
    "Blade Templating"
  ],
  frontend: [
    "Vue.js",
    "Inertia.js",
    "Alpine.js",
    "JavaScript",
    "TailwindCSS"
  ],
  tools: [
    "MySQL",
    "Schema Design",
    "Git & GitHub",
    "Filament Admin"
  ],
  concepts: [
    "Authentication & Authorization",
    "Database Optimization",
    "API Integration",
    "Full-Stack Development",
    "Clean Code Architecture"
  ]
}
</script>

<style scoped>
@keyframes skillRisePop {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.95);
  }
  65% {
    opacity: 1;
    transform: translateY(-4px) scale(1.02);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.skill-badge {
  opacity: 0;
  transform: translateY(24px) scale(0.95);
  cursor: pointer;
  transition: all 0.3s ease;
}

.skill-badge.reveal {
  animation: skillRisePop 0.85s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.skill-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
