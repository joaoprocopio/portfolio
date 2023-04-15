<template>
  <shared-container
    tag="header"
    class="h-16 fixed bg-white border-b-2"
    content-class="flex items-center h-full">
    <!--  -->
  </shared-container>
  <main class="pt-16">
    <slot />
  </main>
  <shared-container
    tag="footer"
    class="h-96 bg-neutral-200"
    content-class="h-full">
    <!--  -->
  </shared-container>
</template>
