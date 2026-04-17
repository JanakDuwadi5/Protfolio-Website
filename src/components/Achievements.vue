<template>
  <section ref="achievementsSection" id="achievements" class="bg-gray-50 dark:bg-gray-950 dark:border-t dark:border-gray-900 py-16 sm:py-20 px-4">
    <div class="max-w-5xl mx-auto">
      <div :class="['section-heading mb-12 sm:mb-14', achievementsInView ? 'reveal' : '']">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">Achievements & Certifications</h2>
        <p class="text-gray-600 dark:text-gray-300 mt-3 text-base sm:text-lg">Recognition that reflects consistency, problem-solving, and continuous learning</p>
        <div class="w-12 h-1 bg-gray-900 dark:bg-white rounded mt-4"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-5 sm:gap-6">
        <article
          v-for="(item, index) in achievements"
          :key="item.title"
          :class="['achievement-card', achievementsInView ? 'reveal' : '', 'rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 sm:p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-500']"
          :style="{ animationDelay: `${120 + index * 140}ms` }"
        >
          <p class="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-300 font-semibold">{{ item.type }}</p>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mt-2">{{ item.title }}</h3>
          <p class="text-sm text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">{{ item.description }}</p>

          <a
            v-if="item.link"
            :href="item.link"
            target="_blank"
            class="inline-flex items-center mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:underline"
          >
            View Certificate
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const achievementsSection = ref(null)
const achievementsInView = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries
      achievementsInView.value = entry.isIntersecting
    },
    { threshold: 0.3, rootMargin: '0px 0px -60px 0px' }
  )

  if (achievementsSection.value) {
    observer.observe(achievementsSection.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

const achievements = [
  {
    type: 'Challenge',
    title: 'Leapfrog 60 Days Learning Challenge',
    description:
      'Successfully participated in and completed Leapfrog Technology\'s #60DaysOfLearning challenge. Gained hands-on experience in Vue.js, PHP, Django, and Machine Learning basics, and was recognized for consistency and dedication.',
    link: '/certificates/leapfrog-60days-certificate.pdf'
  },
  {
    type: 'Certification',
    title: 'Python Programming 2022 Certification (Techgyan)',
    description:
      'Successfully completed Techgyan\'s Python Programming 2022 certification. Training was conducted during August & September 2023, validating core Python development knowledge and practical coding ability.',
    link: '/certificates/python-techgyan-certificate.jpg'
  },
  {
    type: 'HackerRank',
    title: 'Gold Badge in Python Programming',
    description:
      'Earned a Gold Badge in Python Programming on HackerRank by solving advanced coding challenges, highlighting strong Python proficiency and structured problem-solving skills.'
  },
  {
    type: 'HackerRank',
    title: 'Gold Badge in 30 Days of Code',
    description:
      'Completed HackerRank\'s 30 Days of Code challenge by solving 30 programming problems with consistent daily practice and disciplined coding execution.'
  }
]
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

.achievement-card {
  opacity: 0;
  transform: translateY(34px) scale(0.94);
}

.achievement-card.reveal {
  animation: riseAndPop 0.95s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.section-heading {
  opacity: 0;
  transform: translateY(34px) scale(0.94);
}

.section-heading.reveal {
  animation: riseAndPop 0.95s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@media (prefers-reduced-motion: reduce) {
  .section-heading,
  .section-heading.reveal,
  .achievement-card,
  .achievement-card.reveal {
    animation: none !important;
    opacity: 1;
    transform: none;
  }
}
</style>
