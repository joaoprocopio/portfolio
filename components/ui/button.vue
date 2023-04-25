<template>
  <button
    v-if="!$props.to"
    :class="{
      [classes]: true,
      [VariantEnum[$props.variant]]: true,
      [PaddingEnum[$props.padding]]: true,
    }">
    <slot />
  </button>
  <ui-link
    v-else
    :to="$props.to"
    :class="{
      [classes]: true,
      [VariantEnum[$props.variant]]: true,
      [PaddingEnum[$props.padding]]: true,
    }">
    <slot />
  </ui-link>
</template>

<script lang="ts">
  interface Props {
    to?: string
    padding?: PaddingType
    variant?: VariantType
  }

  type VariantType = "default" | "tonal" | "plain" | "text"
  enum VariantEnum {
    default = "text-white bg-emerald-700",
    tonal = "text-emerald-700 bg-emerald-100",
    plain = "text-emerald-700",
    text = "",
  }

  type PaddingType = "default" | "large" | "zero"
  enum PaddingEnum {
    default = "px-2",
    large = "px-8",
    zero = "px-0",
  }
</script>

<script setup lang="ts">
  const classes = ref("font-bold rounded-lg py-1")

  const $props = withDefaults(defineProps<Props>(), {
    to: "",
    padding: "default",
    variant: "default",
  })
</script>
