<template>
  <div class="rounded-lg overflow-hidden">
    <div
      :class="{
        [$props.contentClass]: true,
        [PaddingEnum[$props.padding]]: true,
      }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  interface Props {
    padding?: PaddingType
    contentClass?: string
  }

  type PaddingType = "default" | "zero" | "small"
  enum PaddingEnum {
    default = "p-8",
    small = "p-4",
    zero = "",
  }
</script>

<script setup lang="ts">
  const $props = withDefaults(defineProps<Props>(), {
    padding: "default",
    contentClass: "",
  })
</script>
