<template>
  <section id="contact" class="bg-gray-100 py-16 px-4">
    <div class="max-w-xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
      <p class="text-gray-600 mb-6">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <form action="https://formsubmit.co/janakduwadi66@gmail.com" method="POST" class="space-y-4">
        <!-- Hidden fields -->
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://janakduwadi.com.np"> <!-- optional redirect -->

        <!-- Name -->
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          class="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <!-- Email -->
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          class="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <!-- Message -->
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          class="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <!-- Submit button -->
        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full"
        >
          Send Message
        </button>
      </form>

      <!-- Social Links -->
      <div class="mt-8 flex justify-center gap-6 text-blue-600 text-xl">
        <a
          href="https://www.linkedin.com/in/janakduwadi"
          target="_blank"
          aria-label="LinkedIn"
          class="hover:text-blue-800 transition"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://instagram.com/janak_duwadi7"
          target="_blank"
          aria-label="Instagram"
          class="hover:text-pink-600 transition"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://github.com/janakduwadi5"
          target="_blank"
          aria-label="GitHub"
          class="hover:text-gray-800 transition"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </section>
</template>
