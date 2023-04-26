<template>
  <nuxt-layout>
    <app-container
      is-page
      vertical-padding="medium"
      class="bg-emerald-700"
      content-class="h-safe-screen flex flex-col items-center justify-center">
      <ui-card
        content-class="bg-white flex flex-col items-center justify-center text-center">
        <h1 class="font-bold text-emerald-700 pb-2">Desculpe</h1>
        <h2 class="text-2xl font-bold pb-2">Ocorreu um erro</h2>
        <p class="text-neutral-500 pb-8 w-48">
          A página
          <ui-code>{{
            $route.fullPath.length > 8
              ? $route.fullPath.slice(0, 5) + "..."
              : $route.fullPath
          }}</ui-code>
          não foi encontrada.
        </p>
        <ui-button variant="tonal" padding="large" to="/" @click="handleError">
          Voltar à página inicial
        </ui-button>
      </ui-card>
    </app-container>
  </nuxt-layout>
</template>

<script setup lang="ts">
  useHead({
    title: "Página não encontrada",
  })

  const handleError = () => clearError({ redirect: "/" })
</script>
