<template>
  <nuxt-link :to="$props.to" class="transition-colors duration-700">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
  interface Props {
    to: string
  }
</script>

<script setup lang="ts">
  const $props = defineProps<Props>()
</script>
