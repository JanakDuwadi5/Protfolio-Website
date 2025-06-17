<template>
  <section id="contact" class="bg-gray-100 py-16 px-4">
    <div class="max-w-xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
      <p class="text-gray-600 mb-6">
        Have a question or want to work together? Reach out!
      </p>

      <form class="space-y-4">
        <input type="text" placeholder="Your Name" class="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        <input type="email" placeholder="Your Email" class="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        <textarea rows="5" placeholder="Your Message" class="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>
