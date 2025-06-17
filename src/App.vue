<template>
  <Header />
  <main class="pt-20">
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
  </main>
</template>

<script setup>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>
