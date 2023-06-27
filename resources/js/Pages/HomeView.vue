<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import Hero from "@/Components/Sections/Hero.vue";
import Posts from "@/Components/Sections/Posts.vue";
import Projects from "@/Components/Sections/Projects.vue";
</script>

<template>
    <Head title="Welcome" />
    <GuestLayout>
        <Hero/>
        <Projects/>
        <Posts/>
    </GuestLayout>
</template>

<style>

</style>
