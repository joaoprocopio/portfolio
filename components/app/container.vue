<template>
  <component
    :is="$props.is"
    class="w-full"
    :class="{
      'py-16': $props.isPage,
    }">
    <div
      class="mx-auto px-4"
      :class="{
        [VerticalPaddingEnum[$props.verticalPadding]]: true,
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
    verticalPadding?: VerticalPaddingType
    maxWidth?: MaxWidthType
  }

  type IsType = "div" | "header" | "footer"

  type MaxWidthType = "default"
  enum MaxWidthEnum {
    default = "max-w-2xl",
  }

  type VerticalPaddingType = "default" | "small" | "medium" | "large"
  enum VerticalPaddingEnum {
    default = "",
    small = "py-4",
    medium = "py-8",
    large = "py-16",
  }
</script>

<script setup lang="ts">
  const $props = withDefaults(defineProps<Props>(), {
    is: "div",
    isPage: false,
    contentClass: "",
    maxWidth: "default",
    verticalPadding: "default",
  })
</script>
