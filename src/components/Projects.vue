<template>
  <section ref="experienceSection" id="experience" class="bg-white dark:bg-gray-950 dark:border-t dark:border-gray-900 pt-12 sm:pt-14 pb-16 sm:pb-20 px-4" style="scroll-margin-top: 72px;">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div :class="['section-heading mb-12 sm:mb-16', isExperienceInView ? 'reveal' : '']">
        <p class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Uplifter Nepal Pvt.Ltd</p>
        <div class="flex flex-col md:flex-row md:items-end md:justify-between md:gap-4 mb-4">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">{{ experience.title }}</h2>
          <div class="mt-4 md:mt-0 inline-flex px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 border border-transparent dark:border-gray-800">
            {{ experience.duration }}
          </div>
        </div>
        <div class="w-12 h-1 bg-gray-900 dark:bg-white rounded mt-4"></div>
      </div>

      <!-- Description -->
      <p class="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 sm:mb-10">
        {{ experience.description }}
      </p>

      <div class="mb-12 sm:mb-16 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 p-5 sm:p-6">
        <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Quick Overview</h3>
        <div class="grid sm:grid-cols-2 gap-3">
          <div v-for="item in experience.outcomes" :key="item" class="flex items-start gap-2">
            <span class="mt-1 w-2 h-2 rounded-full bg-indigo-500"></span>
            <p class="text-sm text-gray-700 dark:text-gray-300">{{ item }}</p>
          </div>
        </div>
      </div>

      <!-- Technologies -->
      <div class="mb-12 sm:mb-16">
        <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">Technologies Used</h3>
        <div class="flex flex-wrap gap-3">
          <span v-for="tech in experience.technologies" :key="tech" class="tech-badge px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-800 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200">
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Key Contributions -->
      <div class="mb-12 sm:mb-16">
        <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">Key Contributions</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="(contribution, index) in experience.contributions" :key="index" :class="['contribution-card', isExperienceInView ? 'reveal' : '', 'p-5 sm:p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-lg hover:shadow-lg hover:border-blue-300 dark:hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1']" :style="{ animationDelay: `${120 + index * 140}ms` }">
            <div class="flex gap-4">
              <div class="icon-wrap">
                <svg v-if="contribution.icon === 'api'" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="4" y="4" width="6" height="6" rx="1" />
                  <rect x="14" y="4" width="6" height="6" rx="1" />
                  <rect x="4" y="14" width="6" height="6" rx="1" />
                  <rect x="14" y="14" width="6" height="6" rx="1" />
                </svg>

                <svg v-else-if="contribution.icon === 'database'" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <ellipse cx="12" cy="5" rx="7" ry="3" />
                  <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
                  <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
                </svg>

                <svg v-else-if="contribution.icon === 'auth'" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z" />
                  <path d="M9.5 12.5l2 2 3-3" />
                </svg>

                <svg v-else-if="contribution.icon === 'fullstack'" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 15c2.5 0 2.5-6 5-6s2.5 6 5 6 2.5-6 5-6" />
                </svg>

                <svg v-else-if="contribution.icon === 'code'" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8 16l-4-4 4-4" />
                  <path d="M16 8l4 4-4 4" />
                </svg>

                <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 3v4" />
                  <path d="M18 17v4" />
                  <path d="M5 7h7a4 4 0 0 1 0 8H5" />
                  <path d="M19 17h-7a4 4 0 0 1 0-8h7" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">{{ contribution.title }}</h4>
                <p class="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{{ contribution.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Professional Growth -->
      <div>
        <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">Professional Growth</h3>
        <div class="flex flex-wrap gap-4">
          <div v-for="(growth, index) in experience.growth" :key="index" class="flex items-center gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full"></span>
            <span class="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">{{ growth }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const experienceSection = ref(null)
const isExperienceInView = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries
      isExperienceInView.value = entry.isIntersecting
    },
    { threshold: 0.3, rootMargin: '0px 0px -60px 0px' }
  )

  if (experienceSection.value) {
    observer.observe(experienceSection.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

const experience = {
  title: "Backend Web Developer Intern",
  duration: "Nov 2025 – May 2026",
  company: "Professional Development Team",
  description: "Completed a 6-month internship focused on building scalable web applications using a modern full-stack workflow. Took ownership of backend systems, integrated dynamic frontend interfaces, and participated in real-world software development cycles from design to deployment.",
  technologies: [
    "Laravel", "RESTful APIs", "Eloquent ORM", "MVC Architecture", "Vue.js",
    "Inertia.js", "Blade", "Alpine.js", "MySQL", "Schema Design", "Git & GitHub", "Filament Admin"
  ],
  contributions: [
    {
      icon: "api",
      title: "API design & integration",
      description: "Built and consumed RESTful APIs enabling seamless frontend-backend communication across application layers."
    },
    {
      icon: "database",
      title: "Database architecture",
      description: "Designed and managed relational schemas with normalization, query optimization, and eager loading strategies."
    },
    {
      icon: "auth",
      title: "Auth & access control",
      description: "Implemented authentication, input validation, and role-based access control in production-level systems."
    },
    {
      icon: "fullstack",
      title: "Full-stack development",
      description: "Integrated dynamic interfaces using Vue.js and Inertia.js, bridging frontend and Laravel backend cohesively."
    },
    {
      icon: "code",
      title: "Clean, structured code",
      description: "Applied MVC patterns and Eloquent ORM relationships to write maintainable, production-ready application logic."
    },
    {
      icon: "version",
      title: "Version control & collaboration",
      description: "Worked within a team using Git and GitHub workflows, reinforcing collaborative development best practices."
    }
  ],
  growth: [
    "Team-based environment",
    "End-to-end system thinking",
    "Debugging & problem-solving",
    "Code quality & maintainability"
  ],
  outcomes: [
    "Built maintainable backend modules using Laravel MVC conventions",
    "Designed and integrated REST APIs for smooth frontend-backend communication",
    "Implemented authentication, validation, and role-based access workflows",
    "Collaborated in Git/GitHub team workflow with review-friendly code structure"
  ]
};
</script>

<style scoped>
@keyframes riseAndPop {
  from {
    opacity: 0;
    transform: translateY(34px) scale(0.94);
  }
  65% {
    opacity: 1;
    transform: translateY(-6px) scale(1.02);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.contribution-card {
  opacity: 0;
  transform: translateY(34px) scale(0.94);
}

.contribution-card.reveal {
  animation: riseAndPop 0.95s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.section-heading {
  opacity: 0;
  transform: translateY(34px) scale(0.94);
}

.section-heading.reveal {
  animation: riseAndPop 0.95s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.icon-wrap {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #eef2ff;
  color: #4f46e5;
  flex-shrink: 0;
  transition: transform 0.25s ease;
}

:global(.dark) .icon-wrap {
  background: #3730a3;
  color: #c7d2fe;
}

.contribution-card:hover .icon-wrap {
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .section-heading,
  .section-heading.reveal {
    animation: none !important;
    opacity: 1;
    transform: none;
  }
}
</style>
