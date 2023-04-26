<template>
  <app-container
    is-page
    vertical-padding="medium"
    content-class="text-center sm:text-left">
    <h2 class="font-bold pb-2 text-emerald-700">Meus projetos</h2>
    <section class="flex flex-col gap-4">
      <template v-for="(project, id) in projects" :key="id">
        <lazy-ui-card
          content-class="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2"
          padding="zero">
          <div
            class="bg-center bg-cover"
            :style="{
              'background-image': src(project.src),
            }" />
          <div
            class="bg-emerald-100 text-emerald-700 flex flex-col gap-8 justify-between px-4 py-4 sm:py-8">
            <div>
              <h2 class="text-2xl font-bold">{{ project.title }}</h2>
              <h3 class="text-lg font-medium">{{ project.subtitle }}</h3>
            </div>
            <ui-button
              :to="project.href"
              target="_blank"
              block
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
    title: string
    subtitle: string
  }
</script>

<script setup lang="ts">
  const $image = useImage()

  const projects: Ref<Array<Project>> = ref([
    {
      src: "images/black-cat.webp",
      href: "https://github.com/joaoprocopio/djavue",
      title: "Djavue",
      subtitle: "Template full-stack utilizando Django, Vue e Postgres",
    },
    {
      src: "images/wordle.webp",
      href: "https://github.com/joaoprocopio/wordle",
      title: "Wordle",
      subtitle: "Implementação do Wordle em Vue.js",
    },
    {
      src: "images/game-of-life.webp",
      href: "https://github.com/joaoprocopio/life",
      title: "Life",
      subtitle: "Implementação de Game of Life em Vue.js",
    },
  ])

  const src = (src: string): string =>
    `url(${$image(src, { quality: 80, width: 500 })})`
</script>
