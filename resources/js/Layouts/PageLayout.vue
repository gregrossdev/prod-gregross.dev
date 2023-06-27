<script setup>

import GuestLayout from "@/Layouts/GuestLayout.vue";
</script>

<template>
    <GuestLayout>
        <header class="py-8">
            <slot name="header"/>
        </header>
        <section class="prose lg:prose-xl">
            <slot name="section"/>
        </section>
    </GuestLayout>
</template>


