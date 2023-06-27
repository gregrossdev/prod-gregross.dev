<script setup>
import PageLayout from "@/Layouts/PageLayout.vue"
</script>

<template>
    <PageLayout>
        <template #header>
            <figure>
                <img alt="icon story"
                     class="h-12 w-8"
                     src="@/assets/img/icon-story.png"/>
            </figure>

            <h2 class="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
                My Story
            </h2>

            <div class="pt-3 sm:w-3/4">
                <p class="font-body text-xl font-light text-primary dark:text-white">
                    The Story of a man named Greg.
                </p>
            </div>
        </template>
        <template #section>
            <article>
                <p class="font-body font-light text-primary dark:text-white py-2">
                    Welcome to my personal website! I'm Greg Ross, a passionate professional with a diverse background in both
                    electrical technologies and software engineering. With over a decade of experience in software development as
                    a hobby, I've honed my skills and fostered a deep love for technology.
                </p>

                <p class="font-body font-light text-primary dark:text-white py-2">
                    My journey began as an electrician, where I gained practical experience in handling electrical systems and
                    troubleshooting complex issues. This hands-on work allowed me to develop a strong foundation in electrical
                    technologies and problem-solving methodologies.
                </p>

                <p class="font-body font-light text-primary dark:text-white py-2">
                    After my time as an electrician, I pursued a role as an electronics technician, where I further expanded my
                    knowledge of electronic systems and their intricacies. This experience enhanced my understanding of circuitry,
                    components, and their practical applications.
                </p>

                <p class="font-body font-light text-primary dark:text-white py-2">
                    However, my trajectory took an unexpected turn when I volunteered my time to set up an online database to
                    manage meeting information for individuals struggling with addiction issues. This eye-opening experience
                    exposed me to the challenges faced by those affected by addiction and ignited a deep desire within me to make
                    a difference.
                </p>

                <p class="font-body font-light text-primary dark:text-white py-2">
                    Motivated by this newfound passion, I transitioned into the role of a support counselor, dedicating myself to
                    helping individuals on their journey to recovery. During my 2.5 years in this role, I provided compassionate
                    support, guidance, and encouragement to those battling addiction, witnessing firsthand the transformative
                    power of empathy and understanding.
                </p>

                <p class="font-body font-light text-primary dark:text-white py-2">
                    Throughout my professional journey, I seized the opportunity to merge my technical expertise with my
                    commitment to helping others. Currently, I work as a software engineer professionally, where I leverage my
                    extensive background in software development and engineering principles to build innovative solutions.
                    Additionally, I volunteer my time to assist individuals in maintaining their systems and sharing their
                    insights, fostering a sense of community and empowerment.
                </p>

                <p class="font-body font-light text-primary dark:text-white py-2">
                    Through this website, I aim to share my multifaceted experiences, bridging the worlds of electrical
                    technologies, addiction support, and software engineering. Join me as we explore the possibilities of
                    technology in improving lives, unravel the complexities of addiction, and celebrate the power of human
                    connection.
                </p>

                <p class="font-body font-light text-primary dark:text-white py-2">
                    I'm excited to connect with you, share knowledge, and collaborate on projects that leave a positive impact.
                    Let's embark on this journey together, where technology and empathy intersect to create meaningful change.
                </p>

            </article>
        </template>
    </PageLayout>
</template>
