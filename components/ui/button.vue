<template>
  <button
    v-if="!$props.to"
    class="transition-colors duration-700"
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

  type VariantType = "default" | "tonal" | "text"
  enum VariantEnum {
    default = "font-bold text-white bg-emerald-700 hover:text-emerald-100 active:text-emerald-100 rounded-lg py-1",
    tonal = "",
    text = "font-bold hover:text-emerald-700 active:text-emerald-700",
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
