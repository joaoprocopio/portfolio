<template>
  <div>
    <div
      class="rounded-lg overflow-hidden"
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

  type PaddingType = "default" | "zero"
  enum PaddingEnum {
    default = "px-4 py-8",
    zero = "",
  }
</script>

<script setup lang="ts">
  const $props = withDefaults(defineProps<Props>(), {
    padding: "default",
    contentClass: "",
  })
</script>
