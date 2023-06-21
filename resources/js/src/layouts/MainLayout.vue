<script setup>
import Header from "./components/MainHeader.vue"
import Footer from "./components/MainFooter.vue"
</script>

<template>
  <div class="layout-wrapper">
    <Header/>
    <main class="md:container p-4 mx-auto bg-grey-lightest">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>
