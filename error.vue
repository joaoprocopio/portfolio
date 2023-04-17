<template>
  <nuxt-layout>
    <shared-container
      class="h-screen"
      content-class="h-full flex flex-col justify-center">
      <h1
        class="ml-[2px] font-mono tracking-widest mb-2 text-indigo-700 uppercase">
        Desculpe
      </h1>
      <h2 class="text-4xl font-semibold mb-4">Página não encontrada</h2>
      <p class="mb-8">
        A página
        <code class="bg-indigo-100 text-indigo-700 px-1.5 py-1 rounded">
          {{ $route.path }}
        </code>
        não foi encontrada.
      </p>
      <nuxt-link
        to="/"
        class="border border-indigo-200 py-6 px-4 bg-indigo-100 rounded text-indigo-700 underline">
        Volte à página inicial
      </nuxt-link>
    </shared-container>
  </nuxt-layout>
</template>

<script setup>
  useHead({
    title: "Página não encontrada",
  })
</script>
