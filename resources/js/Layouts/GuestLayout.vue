<script setup>
import GuestHeader from "./components/GuestHeader.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
    <div class="layout-wrapper">
        <GuestHeader/>
        <main class="md:container p-4 mx-auto bg-grey-lightest">
            <slot/>
        </main>
        <Footer/>
    </div>
</template>
