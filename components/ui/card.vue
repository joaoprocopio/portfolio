<template>
  <div>
    <div
      class="px-4 py-8 rounded-lg"
      :class="{
        [$props.contentClass]: true,
      }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  interface Props {
    contentClass?: string
  }
</script>

<script setup lang="ts">
  const $props = withDefaults(defineProps<Props>(), {
    contentClass: "",
  })
</script>
