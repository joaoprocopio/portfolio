<template>
  <component :is="$props.tag" class="w-full">
    <div
      class="mx-auto px-4 py-2"
      :class="{
        [$props.maxWidth]: true,
        [$props.contentClass]: true,
      }">
      <slot />
    </div>
  </component>
</template>

<script lang="ts">
  type MaxWidthType = "max-w-4xl" | "max-w-6xl" | "max-w-full"
  type TagsType = "div" | "header" | "footer"
</script>

<script setup lang="ts">
  import type { PropType } from "vue"

  const $props = defineProps({
    maxWidth: {
      type: String as PropType<MaxWidthType>,
      default: "max-w-6xl",
    },
    contentClass: {
      type: String,
      default: "",
    },
    tag: {
      type: String as PropType<TagsType>,
      default: "div",
    },
  })
</script>
