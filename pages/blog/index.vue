<template>
  <app-container
    is-page
    class="bg-emerald-700 text-white h-64"
    content-class="flex flex-col gap-2 pt-16">
    <h1 class="text-2xl font-bold">Blog</h1>
    <p class="text-lg">Clique nos posts para ler os conteúdos!</p>
  </app-container>
  <app-container
    vertical-padding="small"
    content-class="text-emerald-700 min-h-[640px]">
    <section class="flex flex-col gap-4">
      <template v-if="!posts"> </template>
      <template v-for="(post, id) in posts" v-else :key="id">
        <ui-link class="w-full" :have-active-state="false" :to="post._path">
          <ui-card content-class="bg-emerald-100" padding="small">
            <h2 class="text-2xl font-bold">{{ post.title }}</h2>
          </ui-card>
        </ui-link>
      </template>
    </section>
  </app-container>
</template>

<script setup lang="ts">
  const { data } = await useAsyncData("posts", () => fetchContentNavigation())

  const posts = data.value?.find((folder) => folder._path === "/blog")?.children
</script>
