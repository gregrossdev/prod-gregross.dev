<script setup>
import {ref} from 'vue';
import {onClickOutside} from '@vueuse/core'

// toggle open and closed
const isMobileMenuOpen = ref(false);

const mobileMenuRef = ref(null)
const mobileNavIconRef = ref(null)
onClickOutside(mobileMenuRef, () => {
    isMobileMenuOpen.value = false
}, {
    ignore: [mobileNavIconRef]
})

import Dropdown from '@/Components/Breeze/Dropdown.vue';
import DropdownLink from '@/Components/Breeze/DropdownLink.vue';
import NavLink from '@/Components/Breeze/NavLink.vue';
import ResponsiveNavLink from '@/Components/Breeze/ResponsiveNavLink.vue';
const showingNavigationDropdown = ref(false);
</script>

<template>
    <header>

        <nav class="rounded bg-[#EDF2F3] text-white py-6 ">
            <div
                class="container lg:mx-auto"
            >
                <div class="flex">
                    <Link class="flex items-center"
                          href="/"
                          @click="isMobileMenuOpen = false">
                        <figure class="mr-2">
                            <img alt="logo"
                                 src="@/assets/img/logo.png"/>
                        </figure>
                    </Link>
                    <button
                        aria-controls="navbar-default"
                        aria-expanded="false"
                        class="flex items-center lg:hidden"
                        data-collapse-toggle="navbar-default"
                        type="button"
                    >
                        <i
                            class="bx mr-8 cursor-pointer text-3xl text-primary dark:text-white"
                        ></i>
                        <svg
                            ref="mobileNavIconRef"
                            aria-label="menu"
                            class="fill-current text-primary dark:text-white"
                            height="15"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            @click="isMobileMenuOpen = true"
                        >
                            <g fill-rule="evenodd">
                                <rect height="3"
                                      rx="1.5"
                                      width="24"/>
                                <rect height="3"
                                      rx="1.5"
                                      width="16"
                                      x="8"
                                      y="6"/>
                                <rect height="3"
                                      rx="1.5"
                                      width="20"
                                      x="4"
                                      y="12"/>
                            </g>
                        </svg>
                    </button>
                </div>

                <div
                    class="hidden w-full md:block md:w-auto"
                >
                    <ul class="flex pt-2">

                        <li>
                            <NavLink :href="route('dashboard')" :active="route().current('dashboard')" >
                                Dashboard
                            </NavLink>
                        </li>

                        <li>
                            <NavLink :href="route('create.post')" :active="route().current('create.post')" >
                                Create Post
                            </NavLink>
                        </li>

                        <li class="ml-auto">
                            <div class="hidden sm:flex sm:items-center sm:ml-6">
                                <!-- Settings Dropdown -->
                                <div class="ml-3 relative">
                                    <Dropdown align="right" width="48">
                                        <template #trigger>
                                            <span class="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                class="inline-flex text-black items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md  focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {{ $page.props.auth.user.name }}

                                                <svg
                                                    class="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                        </template>

                                        <template #content>
                                            <DropdownLink :href="route('profile.edit')"> Profile </DropdownLink>
                                            <DropdownLink :href="route('logout')" method="post" as="button">
                                                Log Out
                                            </DropdownLink>
                                        </template>
                                    </Dropdown>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

        <!--    Mobile -->
        <nav
            :class="isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : ''"
            class="pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden"
        >
            <div class="ml-auto w-2/3 bg-green p-4 md:w-1/3">
                <i
                    class="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white"
                    @click="isMobileMenuOpen = false"
                ></i>
                <ul ref="mobileMenuRef"
                    class="mt-8 flex flex-col">


                    <li>
                        <Link
                            class="mb-3 block px-2 font-body text-lg font-medium text-white"
                            href="/blog"
                            @click="isMobileMenuOpen = false"
                        >Blog
                        </Link>
                    </li>

                    <li>

                            <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')" @click="isMobileMenuOpen = false">
                                Dashboard
                            </ResponsiveNavLink>
                    </li>

                    <li>
                        <div class="px-4">
                            <div class="font-medium text-base text-gray-800">
                                {{ $page.props.auth.user.name }}
                            </div>
                            <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="route('profile.edit')"> Profile </ResponsiveNavLink>
                            <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </li>


                </ul>
            </div>
        </nav>
    </header>
</template>

<style>



</style>
