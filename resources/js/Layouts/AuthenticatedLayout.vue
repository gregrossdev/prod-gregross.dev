<script setup>
import Header from "@/Layouts/components/AuthHeader.vue";
import Footer from './components/Footer.vue'
</script>

<template>
    <div class="layout-wrapper">
        <Header />

            <!-- Page Heading -->
            <header class="bg-white shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main class="md:container p-4 mx-auto bg-grey-lightest">
                <slot/>
            </main>

        <Footer/>
    </div>
</template>
