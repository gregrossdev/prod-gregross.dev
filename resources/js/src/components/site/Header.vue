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
  <header class="bg-[#EDF2F3]">
    <div class="container mx-auto">
      <nav class="flex items-center justify-between py-6 lg:py-10">
        <RouterLink class="flex items-center"
                    to="/"
                    @click="isMobileMenuOpen = false">
          <figure class="mr-2">
            <img alt="logo"
                 src="@/assets/img/logo.png"/>
          </figure>

        </RouterLink>
        <div class="flex items-center lg:hidden">
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
        </div>
        <div class="hidden lg:block">
          <ul class="flex items-center">

            <li class="group relative mr-6 mb-1">
              <div
                  class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
              ></div>
              <RouterLink
                  class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                  to="/intro"
                  @click="isMobileMenuOpen = false"
              >Intro
              </RouterLink
              >
            </li>

            <li class="group relative mr-6 mb-1">
              <div
                  class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
              ></div>
              <RouterLink
                  class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                  to="/blog"
                  @click="isMobileMenuOpen = false"
              >Blog
              </RouterLink
              >
            </li>

            <li class="group relative mr-6 mb-1">
              <div
                  class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
              ></div>
              <RouterLink
                  class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                  to="/uses"
                  @click="isMobileMenuOpen = false"
              >Uses
              </RouterLink
              >
            </li>

            <li class="group relative mr-6 mb-1">
              <div
                  class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
              ></div>
              <RouterLink
                  class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                  to="/contact"
                  @click="isMobileMenuOpen = false"
              >Contact
              </RouterLink
              >
            </li>

            <li>
              <i
                  class="bx cursor-pointer text-3xl text-primary dark:text-white"
              ></i>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <!--        MOBILE-->
    <div
        :class="isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : ''"
        class="pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden"
    >
      <nav class="ml-auto w-2/3 bg-green p-4 md:w-1/3">
        <i
            class="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white"
            @click="isMobileMenuOpen = false"
        ></i>
        <ul ref="mobileMenuRef"
            class="mt-8 flex flex-col">

          <li class="">
            <RouterLink
                class="mb-3 block px-2 font-body text-lg font-medium text-white"
                to="/intro"
                @click="isMobileMenuOpen = false"
            >Intro
            </RouterLink
            >
          </li>

          <li class="">
            <RouterLink
                class="mb-3 block px-2 font-body text-lg font-medium text-white"
                to="/blog"
                @click="isMobileMenuOpen = false"
            >Blog
            </RouterLink
            >
          </li>

          <li class="">
            <RouterLink
                class="mb-3 block px-2 font-body text-lg font-medium text-white"
                to="/uses"
                @click="isMobileMenuOpen = false"
            >Uses
            </RouterLink
            >
          </li>

          <li class="">
            <RouterLink
                class="mb-3 block px-2 font-body text-lg font-medium text-white"
                to="/contact"
                @click="isMobileMenuOpen = false"
            >Contact
            </RouterLink
            >
          </li>

        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>

</style>
