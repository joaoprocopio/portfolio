<template>
  <component :is="$props.is" class="w-full">
    <div
      class="mx-auto px-4"
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
    is?: IsType
    contentClass?: string
    maxWidth?: MaxWidthType
  }

  // TODO: resolver isso de maxwidth  usando enums que nem nos botoes
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
    is: "div",
    contentClass: "",
    maxWidth: "max-w-2xl",
  })
</script>
