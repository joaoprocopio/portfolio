<template>
  <app-container
    is="header"
    class="bg-white fixed"
    content-class="h-16 flex justify-between items-center">
    <ui-link to="/" class="text-white">
      <icon-logo class="h-8 w-8" />
    </ui-link>
    <nav class="flex items-center h-full gap-4">
      <ui-button padding="zero" variant="text" to="/blog"> Blog </ui-button>
      <ui-button class="text-white" to="/#contato"> Contato </ui-button>
    </nav>
  </app-container>
</template>
