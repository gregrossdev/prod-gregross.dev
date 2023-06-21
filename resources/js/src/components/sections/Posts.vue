<script setup>
import PostItems from "@/components/posts/PostItems.vue";</script>


<template>
  <section class="py-8">
    <header class="flex items-center">
      <img alt="icon story"
           src="@/assets/img/icon-blog.png"/>

      <h3
          class="ml-3 font-body text-2xl font-semibold text-primary dark:text-white"
      >
        Recent Posts
      </h3>

      <a

          class="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary"
          href="/blog"
      >
        All posts

        <img

            alt="arrow right"
            class="ml-3"
            src="@/assets/img/long-arrow-right.png"
        />
      </a>
    </header>

    <section class="pt-8">

      <PostItems/>

    </section>

  </section>
</template>


