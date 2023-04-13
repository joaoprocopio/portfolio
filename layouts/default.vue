<template>
  <shared-container
    tag="header"
    class="h-16 fixed bg-white border-b-2"
    content-class="flex items-center h-full">
    <NuxtLink class="font-black text-3xl" to="/">João</NuxtLink>
  </shared-container>
  <main class="pt-16">
    <slot />
  </main>
  <shared-container tag="footer" class="h-96 bg-gray-200">
    <div></div>
  </shared-container>
</template>
