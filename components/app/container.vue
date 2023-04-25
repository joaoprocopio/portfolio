<template>
  <component
    :is="$props.is"
    class="w-full"
    :class="{
      'py-12': $props.isPage,
    }">
    <div
      class="mx-auto px-4"
      :class="{
        [MaxWidthEnum[$props.maxWidth]]: true,
        [$props.contentClass]: true,
      }">
      <slot />
    </div>
  </component>
</template>

<script lang="ts">
  interface Props {
    is?: IsType
    isPage?: boolean
    contentClass?: string
    maxWidth?: MaxWidthType
  }

  type IsType = "div" | "header" | "footer"

  type MaxWidthType = "default"
  enum MaxWidthEnum {
    default = "max-w-2xl",
  }
</script>

<script setup lang="ts">
  const $props = withDefaults(defineProps<Props>(), {
    is: "div",
    isPage: false,
    contentClass: "",
    maxWidth: "default",
  })
</script>
