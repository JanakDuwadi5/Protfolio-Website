<template>
  <section
    ref="aboutSection"
    id="about"
    class="w-full bg-gray-50 dark:bg-gray-950 dark:border-t dark:border-gray-900 py-16 sm:py-20 px-4"
  >
    <div class="max-w-4xl mx-auto">
      <div class="mb-10 sm:mb-12">
        <h2
          class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
        >
          About Me
        </h2>
        <div class="w-16 h-1 bg-gray-900 dark:bg-white rounded"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div>
          <p
            class="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5 sm:mb-6"
          >
            Hey! I'm Janak Duwadi, Computer Science student with a passion for building scalable web
            applications. I recently completed a 6-month internship as a Backend Web Developer where
            I worked on production-level systems.
          </p>
          <p
            class="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5 sm:mb-6"
          >
            I specialize in Laravel backend development, Vue.js frontend integration, and full-stack
            architecture. I love learning by building real products and contributing to meaningful
            projects.
          </p>
          <p class="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open
            source, or sharing what I've learned with the community.
          </p>
        </div>

        <div class="flex items-center justify-center">
          <div
            :class="[
              'relative w-64 h-72 sm:w-72 sm:h-80 profile-frame',
              aboutInView ? 'in-view' : '',
            ]"
          >
            <div
              class="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 frame-glow"
            ></div>
            <div
              class="relative h-full w-full rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl bg-white dark:bg-gray-900"
            >
              <img
                :src="profileImage"
                alt="Janak Duwadi"
                class="h-full w-full object-cover object-[50%_15%] profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import profileImage from '@/assets/JanakProfile.jpeg'

const aboutSection = ref(null)
const aboutInView = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries
      aboutInView.value = entry.isIntersecting
    },
    { threshold: 0.35, rootMargin: '0px 0px -60px 0px' },
  )

  if (aboutSection.value) {
    observer.observe(aboutSection.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
@keyframes imageRisePop {
  from {
    opacity: 0;
    transform: translateY(34px) scale(0.93);
  }
  65% {
    opacity: 1;
    transform: translateY(-8px) scale(1.02);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes gentleFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes softGlow {
  0%,
  100% {
    opacity: 0.55;
  }
  50% {
    opacity: 0.9;
  }
}

.profile-frame {
  opacity: 0;
  transform: translateY(34px) scale(0.93);
}

.profile-frame.in-view {
  animation:
    imageRisePop 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards,
    gentleFloat 4.8s ease-in-out 1.05s infinite;
}

.frame-glow {
  transition: opacity 0.3s ease;
}

.profile-frame.in-view .frame-glow {
  animation: softGlow 3.2s ease-in-out 1.05s infinite;
}

.profile-image {
  transition: transform 0.45s ease;
}

.profile-frame:hover .profile-image {
  transform: scale(1.03);
}

@media (prefers-reduced-motion: reduce) {
  .profile-frame,
  .profile-frame.in-view,
  .profile-frame.in-view .frame-glow {
    animation: none !important;
    opacity: 1;
    transform: none;
  }
}
</style>
