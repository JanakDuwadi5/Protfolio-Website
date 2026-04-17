<template>
  <section
    id="contact"
    class="bg-gray-100 dark:bg-gray-950 dark:border-t dark:border-gray-900 py-16 sm:py-20 px-4"
  >
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
        Get In Touch
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-10 sm:mb-12 text-base sm:text-lg">
        Have a question or want to collaborate? I'd love to hear from you. For hiring opportunities,
        I usually respond within 24 hours.
      </p>

      <div class="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
        <a
          href="mailto:janakduwadi66@gmail.com"
          class="rounded-xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 hover:border-gray-400 dark:hover:border-gray-700 transition"
        >
          <p class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">Email</p>
          <p class="text-sm font-semibold text-gray-900 dark:text-white mt-1 break-all">
            janakduwadi66@gmail.com
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/janakduwadi"
          target="_blank"
          class="rounded-xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 hover:border-gray-400 dark:hover:border-gray-700 transition"
        >
          <p class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">LinkedIn</p>
          <p class="text-sm font-semibold text-gray-900 dark:text-white mt-1">
            linkedin.com/in/janakduwadi
          </p>
        </a>
      </div>

      <form action="https://formsubmit.co/janakduwadi66@gmail.com" method="POST" class="space-y-4">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://janakduwadi.com.np" />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white placeholder-gray-500 dark:placeholder-gray-400 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white placeholder-gray-500 dark:placeholder-gray-400 transition"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          class="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white placeholder-gray-500 dark:placeholder-gray-400 transition resize-none"
        ></textarea>

        <button
          type="submit"
          class="bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition w-full transform hover:-translate-y-0.5"
        >
          Send Message
        </button>
      </form>

      <div class="mt-12 flex justify-center gap-8 text-gray-700 dark:text-white text-xl">
        <a
          href="https://www.linkedin.com/in/janakduwadi"
          target="_blank"
          aria-label="LinkedIn"
          class="hover:text-gray-900 dark:hover:text-gray-300 transition duration-200"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://instagram.com/janak_duwadi7"
          target="_blank"
          aria-label="Instagram"
          class="hover:text-gray-900 dark:hover:text-gray-300 transition duration-200"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://github.com/janakduwadi5"
          target="_blank"
          aria-label="GitHub"
          class="hover:text-gray-900 dark:hover:text-gray-300 transition duration-200"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </section>
</template>
