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
</script>

<template>
    <header>
        <nav class="rounded bg-[#EDF2F3] text-white py-6 ">
            <div
                class="container mx-auto flex md:flex-wrap items-center justify-between"
            >
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
                <div
                    id="navbar-default"
                    class="hidden w-full md:block md:w-auto"
                >
                    <ul class="flex items-center pt-2">
                        <li class="group relative mr-6 mb-1">
                            <div
                                class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
                            ></div>
                            <Link
                                class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                                href="/intro"
                                @click="isMobileMenuOpen = false"
                            >Intro
                            </Link
                            >
                        </li>

                        <li class="group relative mr-6 mb-1">
                            <div
                                class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
                            ></div>
                            <Link
                                class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                                href="/blog"
                                @click="isMobileMenuOpen = false"
                            >Blog
                            </Link
                            >
                        </li>

                        <li class="group relative mr-6 mb-1">
                            <div
                                class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
                            ></div>
                            <Link
                                class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                                href="/uses"
                                @click="isMobileMenuOpen = false"
                            >Uses
                            </Link
                            >
                        </li>

                        <li class="group relative mr-6 mb-1">
                            <div
                                class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
                            ></div>
                            <Link
                                class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                                href="/contact"
                                @click="isMobileMenuOpen = false"
                            >Contact
                            </Link
                            >
                        </li>

                        <li class="group relative ml-auto">
                            <div
                                class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
                            ></div>
                            <Link
                                class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary "
                                href="/login"
                                @click="isMobileMenuOpen = false"
                            >Login
                            </Link
                            >
                        </li>



<!--                        <template v-if="!authStore.user">-->
<!--                        </template>-->
<!--                        <template v-else>-->
<!--                            <li>-->
<!--                                <Link-->
<!--                                    :href="{ name: 'Profile' }"-->
<!--                                    aria-current="page"-->
<!--                                    class="block rounded py-2 pr-4 pl-3 text-white"-->
<!--                                >-->
<!--                                    Profile-->
<!--                                </Link>-->
<!--                            </li>-->
<!--                            <button-->
<!--                                class="log"-->

<!--                            >-->
<!--                                Logout-->
<!--                            </button>-->
<!--                        </template>-->
                    </ul>
                </div>
            </div>
        </nav>

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

                    <li class="">
                        <Link
                            class="mb-3 block px-2 font-body text-lg font-medium text-white"
                            href="/intro"
                            @click="isMobileMenuOpen = false"
                        >Intro
                        </Link>
                    </li>

                    <li class="">
                        <Link
                            class="mb-3 block px-2 font-body text-lg font-medium text-white"
                            href="/blog"
                            @click="isMobileMenuOpen = false"
                        >Blog
                        </Link>
                    </li>

                    <li class="">
                        <Link
                            class="mb-3 block px-2 font-body text-lg font-medium text-white"
                            href="/uses"
                            @click="isMobileMenuOpen = false"
                        >Uses
                        </Link>
                    </li>

                    <li class="">
                        <Link
                            class="mb-3 block px-2 font-body text-lg font-medium text-white"
                            href="/contact"
                            @click="isMobileMenuOpen = false"
                        >Contact
                        </Link>
                    </li>

                    <li class="">
                        <Link
                            href="/login"
                            class="mb-3 block px-2 font-body text-lg font-medium text-white"
                            @click="isMobileMenuOpen = false"
                        >
                            Login
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
</template>

<style>



</style>
