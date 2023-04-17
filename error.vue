<template>
  <nuxt-layout>
    <shared-container
      class="h-screen"
      content-class="h-full flex flex-col justify-center">
      <h1 class="font-mono tracking-widest mb-1 text-neutral-700 uppercase">
        Desculpe
      </h1>
      <h2 class="text-4xl font-semibold mb-2">Página não encontrada</h2>
      <p class="mb-8">
        A página
        <code
          class="font-semibold bg-indigo-200 text-indigo-600 px-1.5 py-1 rounded">
          {{ $props.error.url }}
        </code>
        não foi encontrada.
      </p>
      <nuxt-link
        to="/"
        class="border border-indigo-300 py-6 px-4 bg-indigo-200 rounded text-indigo-600 font-semibold underline">
        Volte à página inicial
      </nuxt-link>
    </shared-container>
  </nuxt-layout>
</template>

<script setup>
  useHead({
    title: "Página não encontrada",
  })

  const $props = defineProps({
    error: {
      type: Object,
      required: true,
    },
  })
</script>
