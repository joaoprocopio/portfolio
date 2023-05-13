<template>
  <nuxt-link
    class="w-fit h-fit"
    :class="{
      [activeStateClasses]: !$props.isButton && $props.haveActiveState,
    }"
    :target="$props.target"
    :to="$props.to">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
  interface Props {
    to: string
    target?: TargetType
    isButton?: boolean
    haveActiveState?: boolean
  }

  type TargetType = "_blank" | "_parent" | "_self" | "_top"
</script>

<script setup lang="ts">
  const activeStateClasses = ref(
    "hover:underline active:underline focus:underline"
  )

  const $props = withDefaults(defineProps<Props>(), {
    target: "_self",
    isButton: false,
    haveActiveState: true,
  })
</script>
