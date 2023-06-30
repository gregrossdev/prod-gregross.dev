<script setup>
import Post from '@/Components/Posts/Post.vue';
import PageLayout from "@/layouts/PageLayout.vue";
defineProps(['posts']);
</script>

<template>
  <PageLayout>
    <template #header>
      <div>
        <img alt="icon envelope"
             src="@/assets/img/icon-blog.png"/>
      </div>

      <h2 class="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
        Blog
      </h2>

      <div class="pt-3 sm:w-3/4">
        <p class="font-body text-xl font-light text-primary dark:text-white">
          Articles, tutorials, snippets, rants, and everything else. Subscribe for
          updates as they happen.
        </p>
      </div>
    </template>
    <template #section>
        <Post
            v-for="post in posts"
            :key="post.id"
            :post="post"
        />
    </template>
  </PageLayout>
</template>
