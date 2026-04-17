<template>
  <section ref="educationSection" id="education" class="bg-white dark:bg-gray-950 dark:border-t dark:border-gray-900 py-16 sm:py-20 px-4">
    <div class="max-w-5xl mx-auto">
      <div :class="['section-heading mb-12 sm:mb-14', educationInView ? 'reveal' : '']">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">Education</h2>
        <p class="text-gray-600 dark:text-gray-300 mt-3 text-base sm:text-lg">Academic background with GPA highlights</p>
        <div class="w-12 h-1 bg-gray-900 dark:bg-white rounded mt-4"></div>
      </div>

      <div class="relative">
        <div :class="['timeline-line absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 sm:-translate-x-1/2', educationInView ? 'grow' : '']"></div>

        <div
          v-for="(item, index) in education"
          :key="item.level"
          class="relative mb-8 sm:mb-10"
        >
          <div :class="['timeline-dot absolute left-4 sm:left-1/2 top-5 w-3.5 h-3.5 rounded-full bg-indigo-500 border-2 border-white dark:border-gray-950 sm:-translate-x-1/2', educationInView ? 'reveal' : '']" :style="{ animationDelay: `${120 + index * 140}ms` }"></div>

          <div
            :class="[
              'timeline-card ml-12 sm:ml-0 sm:w-[46%] rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 sm:p-5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-500',
              educationInView ? 'reveal' : '',
              index % 2 === 0 ? 'from-left' : 'from-right',
              index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'
            ]"
            :style="{ animationDelay: `${120 + index * 140}ms` }"
          >
            <p class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">{{ item.level }}</p>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mt-1">{{ item.school }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">{{ item.location }} · {{ item.period }}</p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300 mt-2">{{ item.gpa }}</p>
            <p class="text-sm text-gray-700 dark:text-gray-300 mt-2">{{ item.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const educationSection = ref(null)
const educationInView = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries
      educationInView.value = entry.isIntersecting
    },
    { threshold: 0.3, rootMargin: '0px 0px -60px 0px' }
  )

  if (educationSection.value) {
    observer.observe(educationSection.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

const education = [
  {
    level: 'SEE',
    school: 'New Kibou Boarding School',
    location: 'Dhading',
    period: 'Apr 2018 – Jun 2019',
    gpa: 'GPA: 3.65 (A+)',
    note: 'Awarded scholarships throughout school for consistent academic achievement.'
  },
  {
    level: '+2 (Science)',
    school: 'National School Of Sciences',
    location: 'Kathmandu',
    period: 'Jun 2019 – Dec 2021',
    gpa: 'Class 11: GPA 3.88 (A+) · Class 12: GPA 3.71 (A+)',
    note: 'Received multiple scholarships during high school for academic excellence.'
  },
  {
    level: 'Bachelor',
    school: 'Amrit Science Campus',
    location: 'Kathmandu',
    period: '2022 – 2026',
    gpa: 'Result: Yet to be published',
    note: 'Pursuing Computer Science with a focus on software engineering and backend systems.'
  }
]
</script>

<style scoped>
@keyframes timelineGrow {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}

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

@keyframes dotPop {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  65% {
    opacity: 1;
    transform: scale(1.15);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.timeline-line {
  transform-origin: top;
  transform: scaleY(0);
}

.timeline-line.grow {
  animation: timelineGrow 0.95s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.section-heading {
  opacity: 0;
  transform: translateY(34px) scale(0.94);
}

.section-heading.reveal {
  animation: riseAndPop 0.95s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.timeline-card {
  opacity: 0;
}

.timeline-card.from-left {
  transform: translateX(-36px) translateY(24px) scale(0.95);
}

.timeline-card.from-right {
  transform: translateX(36px) translateY(24px) scale(0.95);
}

.timeline-card.reveal {
  animation: riseAndPop 0.95s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.timeline-dot {
  opacity: 0;
}

.timeline-dot.reveal {
  animation: dotPop 0.95s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@media (prefers-reduced-motion: reduce) {
  .timeline-line,
  .timeline-line.grow,
  .section-heading,
  .section-heading.reveal,
  .timeline-card,
  .timeline-card.reveal,
  .timeline-dot,
  .timeline-dot.reveal {
    animation: none !important;
    opacity: 1;
    transform: none;
  }
}
</style>
