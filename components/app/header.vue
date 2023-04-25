<template>
  <app-container
    is="header"
    class="bg-white fixed"
    content-class="h-12 flex justify-between items-center">
    <ui-link padding="zero" variant="text" to="/">
      <icon-logo class="text-white" />
    </ui-link>
    <nav class="flex items-center h-full gap-4">
      <ui-button padding="zero" variant="text" to="/blog"> Blog </ui-button>
      <ui-button to="/#contato"> Contato </ui-button>
    </nav>
  </app-container>
</template>
