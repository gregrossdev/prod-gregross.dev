<template>
    <footer
        class="bg-[#EDF2F3] p-4 md:container">
        <section
            class="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12"
        >
            <div class="mr-auto flex flex-col items-center sm:flex-row">
                <Link class="mr-auto sm:mr-6"
                            href="/">
                    <img alt="logo"
                         src="@/assets/img/logo.png"/>
                </Link>

            </div>
            <div class="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">

                <a href="https://github.com/gregrossdev "
                   target="_blank">
                    <i
                        class="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-github"
                    ></i>
                </a>

                <a href="https://www.linkedin.com/in/gregrossdev/"
                   target="_blank">
                    <i
                        class="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-linkedin"
                    ></i>
                </a>

            </div>
        </section>
    </footer>
</template>

<style>
footer {
    margin-top: auto;
}
</style>
