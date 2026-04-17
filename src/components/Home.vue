<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-4 pt-24 sm:pt-20"
  >
    <div class="max-w-3xl text-center">
      <div class="mb-6 sm:mb-8">
        <div class="mx-auto w-full max-w-[30rem] flex flex-col items-center">
          <div
            class="h-24 w-24 sm:h-28 sm:w-28 rounded-full p-1 bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-800 shadow-lg z-10"
          >
            <img
              :src="profileImage"
              alt="Janak Duwadi"
              class="h-full w-full rounded-full object-cover object-[50%_18%] border-2 border-white dark:border-gray-900"
            />
          </div>

          <div class="chat-anchor">
            <div
              :class="['chat-pill text-center', speechVisible ? 'speech-enter' : 'speech-hidden']"
            >
              <div class="inline-flex items-center justify-center gap-2 w-full">
                <span class="chat-icon-outer" aria-hidden="true">
                  <span class="chat-icon-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                    </svg>
                  </span>
                </span>
                <p
                  class="open-work-label text-[10px] sm:text-xs uppercase tracking-wider text-emerald-800 font-semibold"
                >
                  Open To Work
                </p>
              </div>
              <p
                class="open-work-message mt-1 text-xs sm:text-sm font-semibold text-emerald-900 min-h-[1.2rem]"
              >
                {{ openToWorkText
                }}<span v-if="showOpenWorkCursor" class="open-work-cursor animate-pulse">|</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1
        class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 sm:mb-6 tracking-tight"
      >
        Building scalable backend systems
      </h1>

      <p
        class="text-base sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 min-h-[3.5rem] sm:min-h-[3rem] mb-6 sm:mb-8 px-2"
      >
        {{ displayedText }}<span class="animate-pulse">|</span>
      </p>

      <p
        class="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
      >
        I'm a Backend Web Developer experienced in Laravel, MySQL, RESTful APIs, and Vue.js
        integration. I focus on production-ready architecture, clean code, and end-to-end feature
        delivery.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 sm:mb-10 text-left">
        <div
          class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3"
        >
          <p class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Experience
          </p>
          <p class="text-sm font-semibold text-gray-900 dark:text-white mt-1">6-Month Internship</p>
        </div>
        <div
          class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3"
        >
          <p class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Core Stack
          </p>
          <p class="text-sm font-semibold text-gray-900 dark:text-white mt-1">
            Laravel · Vue · MySQL
          </p>
        </div>
        <div
          class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3"
        >
          <p class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">Location</p>
          <p class="text-sm font-semibold text-gray-900 dark:text-white mt-1">
            Nepal (Remote Friendly)
          </p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#experience"
          class="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition duration-200 transform hover:-translate-y-0.5"
        >
          View My Experience
        </a>
        <a
          href="#contact"
          class="w-full sm:w-auto px-6 sm:px-8 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:border-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:border-gray-300 dark:hover:bg-gray-900 transition duration-200"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import profileImage from '@/assets/JanakProfile.jpeg'

const texts = [
  'Laravel Backend Developer',
  'RESTful API Design & Integration',
  'Laravel-to-Vue Integration with Inertia.js',
  'Relational Database Design & Query Optimization',
]

const openToWorkMessage = 'Backend / Full-Stack Opportunities'
const openToWorkText = ref('')
const showOpenWorkCursor = ref(true)
const speechVisible = ref(false)

const displayedText = ref('')
let index = 0
let charIndex = 0
let isDeleting = false

function typeOpenToWork() {
  openToWorkText.value = ''
  showOpenWorkCursor.value = true

  let i = 0
  const typing = setInterval(() => {
    openToWorkText.value += openToWorkMessage[i]
    i += 1

    if (i >= openToWorkMessage.length) {
      clearInterval(typing)
      setTimeout(() => {
        showOpenWorkCursor.value = false
      }, 900)
    }
  }, 45)
}

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

onMounted(() => {
  setTimeout(() => {
    speechVisible.value = true
    setTimeout(typeOpenToWork, 420)
  }, 250)

  type()
})
</script>

<style scoped>
.chat-pill {
  position: relative;
  border: 1px solid rgb(167 243 208);
  background: rgb(236 253 245);
  border-radius: 9999px;
  padding: 0.55rem 0.85rem;
  max-width: 16.5rem;
  min-width: 13.5rem;
  will-change: transform, opacity;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.16);
}

.chat-icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: rgb(16 185 129);
  animation: chatNudge 1.4s ease-in-out infinite;
}

.chat-icon-outer {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.55rem;
  height: 1.55rem;
  border-radius: 9999px;
  background: rgb(209 250 229);
  border: 1px solid rgb(110 231 183);
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.2);
  animation: chatRingPulse 2.4s ease-out infinite;
}

.chat-anchor {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 0.8rem;
}

:global(.dark) .chat-pill {
  border-color: rgb(16 185 129);
  background: rgba(6, 78, 59, 0.62);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.2);
}

:global(.dark) .open-work-label {
  color: rgb(217 249 235);
}

:global(.dark) .open-work-message,
:global(.dark) .open-work-cursor {
  color: rgb(255 255 255);
}

:global(.dark) .chat-icon-wrap {
  color: rgb(110 231 183);
}

:global(.dark) .chat-icon-outer {
  background: rgba(16, 185, 129, 0.14);
  border-color: rgb(6 95 70);
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.2);
}

.speech-hidden {
  opacity: 0;
  transform: translateY(-16px);
}

.speech-enter {
  animation: bubbleInMobile 0.75s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@keyframes bubbleInMobile {
  0% {
    opacity: 0;
    transform: translateY(-16px);
  }
  72% {
    opacity: 1;
    transform: translateY(3px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes chatNudge {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.5px);
  }
}

@keyframes chatRingPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.18);
  }
  70% {
    box-shadow: 0 0 0 4px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .speech-enter,
  .speech-hidden,
  .chat-icon-wrap,
  .chat-icon-outer {
    animation: none !important;
    opacity: 1;
    transform: none;
  }
}
</style>
