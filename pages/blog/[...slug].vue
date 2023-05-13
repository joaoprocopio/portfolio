<template>
  <app-container
    is-page
    class="bg-emerald-700 text-white"
    content-class="flex flex-col gap-2 pt-16">
    <h1 class="text-2xl font-bold">
      {{ post?.title ?? "Desculpe, ocorreu um erro" }}
    </h1>
    <h2 class="text-lg">
      {{ post?.description ?? "Esta página não foi encontrada" }}
    </h2>
  </app-container>
  <app-container vertical-padding="small" content-class="min-h-[640px]">
    <template v-if="!post">
      <ui-link class="text-lg text-emerald-700" to="/blog"
        >Volte à página inicial</ui-link
      >
    </template>
    <template v-else>
      <content-renderer :value="post" />
    </template>
  </app-container>
</template>

<script setup lang="ts">
  const $route = useRoute()

  const { data: post } = await useAsyncData("post", () =>
    queryContent($route.path).findOne()
  )
</script>
