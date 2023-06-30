<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import Hero from "@/Components/Sections/Hero.vue";
import Posts from "@/Components/Sections/Posts.vue";
import Projects from "@/Components/Sections/Projects.vue";
import Post from '@/Components/Posts/Post.vue';
defineProps(['posts']);

</script>

<template>
    <Head title="Welcome" />
    <GuestLayout>
        <Hero/>
        <Projects/>
        <Posts>
            <template #posts>
                <Post
                    v-for="post in posts"
                    :key="post.id"
                    :post="post"
                />
            </template>
        </Posts>
    </GuestLayout>
</template>

<style>

</style>
