<template>
  <nuxt-layout>
    <app-container
      class="bg-emerald-700 pt-12"
      content-class="h-safe-screen  py-8 flex flex-col items-center justify-center">
      <ui-card class="flex flex-col items-center justify-center text-center">
        <h1 class="font-bold text-emerald-700 pb-2">Desculpe</h1>
        <h2 class="text-2xl font-bold pb-2">Ocorreu um erro</h2>
        <p class="text-neutral-500 pb-8 w-48">
          A página
          <ui-code>{{ path }}</ui-code>
          não foi encontrada.
        </p>
        <ui-button variant="tonal" padding="large" to="/" @click="handleError">
          Voltar à página inicial
        </ui-button>
      </ui-card>
    </app-container>
  </nuxt-layout>
</template>

<script lang="ts">
  interface Error {
    url: string
    statusCode: string
    statusMessage: string
    message: string
    stack: string
  }

  interface Props {
    error: Error
  }
</script>

<script setup lang="ts">
  useHead({
    title: "Página não encontrada",
  })

  const path = computed(() =>
    $props.error?.url.length > 8
      ? $props.error?.url.slice(0, 5) + "..."
      : $props.error?.url
  )

  const $props = defineProps<Props>()

  const handleError = () => clearError({ redirect: "/" })
</script>
