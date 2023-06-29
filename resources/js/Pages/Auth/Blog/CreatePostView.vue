<script setup>
import { ref } from "vue"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { QuillEditor, Delta } from '@vueup/vue-quill'
import BlotFormatter from 'quill-blot-formatter'

const modules = {
    name: 'blotFormatter',
    module: BlotFormatter,
    options: {
        /* options */
    },
}
</script>



<template>
    <Head title="Create Post" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Create Post</h2>
        </template>
        <QuillEditor :modules="modules" toolbar="full" />

    </AuthenticatedLayout>
</template>

