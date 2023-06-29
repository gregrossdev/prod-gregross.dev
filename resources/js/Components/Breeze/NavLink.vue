<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps(['href', 'active']);

const classes = computed(() =>
    props.active
        ? 'class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary border-b-2 border-indigo-400"'
        : 'class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"'
);


</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>


