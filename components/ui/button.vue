<template>
  <button
    v-if="!$props.to"
    :class="{
      [VariantEnum[$props.variant]]: true,
      [PaddingEnum[$props.padding]]: true,
    }">
    <slot />
  </button>
  <ui-link
    v-else
    :to="$props.to"
    :class="{
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

  type VariantType = "default" | "tonal" | "text" | "plain"
  enum VariantEnum {
    default = "font-bold text-white bg-emerald-700 rounded-lg py-1",
    tonal = "font-bold text-emerald-700 bg-emerald-100 rounded-lg py-1",
    text = "font-bold",
    plain = "font-bold text-emerald-700",
  }

  type PaddingType = "default" | "large" | "zero"
  enum PaddingEnum {
    default = "px-2",
    large = "px-8",
    zero = "px-0",
  }
</script>

<script setup lang="ts">
  const $props = withDefaults(defineProps<Props>(), {
    to: "",
    padding: "default",
    variant: "default",
  })
</script>
