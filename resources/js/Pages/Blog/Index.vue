<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Post from '@/Components/Posts/Post.vue';
import InputError from '@/Components/Breeze/InputError.vue';
import PrimaryButton from '@/Components/Breeze/PrimaryButton.vue';
import { useForm, Head } from '@inertiajs/vue3';

defineProps(['posts']);

const form = useForm({
    title: '',
});
</script>

<template>
    <AuthenticatedLayout>
        <div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <form @submit.prevent="form.post(route('posts.store'), { onSuccess: () => form.reset() })" class="bg-green p-4 rounded">
                <input
                    type="text"
                    v-model="form.title"
                    placeholder="What's on your mind?"
                    class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                >
                <InputError :title="form.errors.title" class="mt-2" />
                <PrimaryButton class="mt-4">Post</PrimaryButton>
            </form>

            <div class="mt-6 bg-white shadow-sm rounded-lg divide-y">
                <Post
                    v-for="post in posts"
                    :key="post.id"
                    :post="post"
                />
            </div>
        </div>
    </AuthenticatedLayout>
</template>
