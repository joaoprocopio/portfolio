<template>
  <shared-container
    tag="header"
    class="h-header fixed bg-white border-b-2"
    content-class="flex items-center h-full">
    <!--  -->
  </shared-container>
  <main class="pt-16">
    <slot />
  </main>
  <shared-container
    tag="footer"
    class="h-footer bg-neutral-200"
    content-class="h-full">
    <!--  -->
  </shared-container>
</template>
