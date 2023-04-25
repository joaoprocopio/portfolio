<template>
  <app-container
    is-page
    vertical-padding="medium"
    content-class="text-center sm:text-left">
    <h2 class="font-bold pb-2 text-emerald-700">Sobre mim</h2>
    <section class="grid grid-cols-1 gap-y-4 gap-x-8">
      <template v-for="(project, id) in projects" :key="id">
        <ui-card padding="zero">
          <nuxt-img
            class="w-full h-72 object-cover"
            alt="projeto"
            loading="lazy"
            quality="80"
            :src="project.src" />
        </ui-card>
      </template>
    </section>
  </app-container>
</template>

<script lang="ts">
  interface Project {
    src: string
    title: string
    description: string
  }
</script>

<script setup lang="ts">
  const projects: Ref<Array<Project>> = ref([
    {
      src: "/me.webp",
      title: "",
      description: "",
    },
  ])
</script>
