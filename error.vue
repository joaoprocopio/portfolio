<template>
  <nuxt-layout>
    <shared-container class="h-section bg-neutral-100" content-class="pt-32">
      <h1 class="text-3xl font-bold mb-4">Página não encontrada</h1>
      <p class="mb-6">
        Desculpe, a página
        <code class="bg-neutral-300 px-2 py-1 rounded">
          {{ $route.fullPath }}
        </code>
        não foi encontrada.
      </p>
      <div class="border rounded py-6 px-4 bg-blue-100">
        <nuxt-link to="/" class="text-blue-500 underline">
          Volte à página inicial
        </nuxt-link>
      </div>
    </shared-container>
  </nuxt-layout>
</template>

<script setup>
  useHead({
    title: "Página não encontrada",
  })
</script>
