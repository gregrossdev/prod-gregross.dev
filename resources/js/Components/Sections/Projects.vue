<script setup>
import ProjectItems from "../Projects/ProjectItems.vue"
</script>




<template>
    <section class="py-8">

        <header class="flex items-center pb-6">
            <img src="@/assets/img/icon-project.png" alt="icon story"/>
            <h3 class="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
                My Projects
            </h3>
        </header>
        <section>
            <ProjectItems />
        </section>

    </section>
</template>
