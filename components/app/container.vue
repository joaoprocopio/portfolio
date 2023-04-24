<template>
  <component :is="$props.is" class="w-full">
    <div
      class="mx-auto px-4 max-w-6xl"
      :class="{
        [$props.maxWidth]: true,
        [$props.contentClass]: true,
      }">
      <slot />
    </div>
  </component>
</template>

<script lang="ts">
  interface Props {
    maxWidth?: MaxWidthType
    contentClass?: string
    is?: IsType
  }

  type MaxWidthType =
    | "max-w-lg"
    | "max-w-2xl"
    | "max-w-4xl"
    | "max-w-6xl"
    | "max-w-full"
  type IsType = "div" | "header" | "footer" | "section"
</script>

<script setup lang="ts">
  const $props = withDefaults(defineProps<Props>(), {
    maxWidth: "max-w-2xl",
    contentClass: "",
    is: "div",
  })
</script>
