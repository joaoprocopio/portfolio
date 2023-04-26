<template>
  <app-container
    is-page
    vertical-padding="medium"
    content-class="text-center sm:text-left">
    <h2 class="font-bold pb-2 text-emerald-700">Meus projetos</h2>
    <section class="flex flex-col gap-4">
      <template v-for="(project, id) in projects" :key="id">
        <lazy-ui-card
          padding="zero"
          content-class="w-full bg-emerald-100 h-96 grid grid-rows-2 gap-4 sm:grid-rows-none sm:gap-8 sm:grid-cols-2 sm:h-64">
          <nuxt-img
            class="w-full h-full object-cover"
            :src="project.src"
            :alt="project.alt"
            quality="80"
            width="400"
            loading="lazy" />
          <div
            class="w-full h-full text-emerald-700 flex flex-col justify-between p-4 pt-0 pb-8 sm:pl-0 sm:p-8">
            <div>
              <h2 class="text-2xl font-bold">{{ project.title }}</h2>
              <h3 class="text-lg font-medium">{{ project.subtitle }}</h3>
            </div>
            <ui-button
              :to="project.href"
              block
              target="_blank"
              class="text-emerald-100"
              variant="default">
              Veja o código no GitHub
            </ui-button>
          </div>
        </lazy-ui-card>
      </template>
    </section>
  </app-container>
</template>

<script lang="ts">
  interface Project {
    src: string
    href: string
    alt: string
    title: string
    subtitle: string
  }
</script>

<script setup lang="ts">
  const projects: Ref<Array<Project>> = ref([
    {
      src: "images/black-cat.webp",
      href: "https://github.com/joaoprocopio/djavue",
      alt: "gato preto em cima de uma pedra",
      title: "Djavue",
      subtitle: "Template full-stack utilizando Django, Vue e Postgres",
    },
    {
      src: "images/wordle.webp",
      href: "https://github.com/joaoprocopio/wordle",
      alt: "celular com o jogo wordle",
      title: "Wordle",
      subtitle: "Implementação do Wordle em Vue.js",
    },
    {
      src: "images/game-of-life.webp",
      href: "https://github.com/joaoprocopio/life",
      alt: "blocos formando a palavra life",
      title: "Life",
      subtitle: "Implementação de Game of Life em Vue.js",
    },
  ])
</script>
