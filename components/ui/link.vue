<template>
  <nuxt-link class="w-fit h-fit" :target="$props.target" :to="$props.to">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
  interface Props {
    to: string
    target?: TargetType
  }

  type TargetType = "_blank" | "_parent" | "_self" | "_top"
</script>

<script setup lang="ts">
  const $props = withDefaults(defineProps<Props>(), {
    target: "_self",
  })
</script>
