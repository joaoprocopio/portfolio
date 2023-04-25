<template>
  <app-container
    content-class="h-safe-screen flex flex-col items-center justify-center">
    <nuxt-img
      class="h-screen w-screen absolute -z-10 inset-y-0 inset-x-0 object-cover"
      src="/images/background.webp"
      alt="rio cristalino próximo a uma pedra cinza"
      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
      quality="60"
      preload />
    <ui-card
      class="flex flex-col items-center text-center gap-8 md:flex-row md:text-left">
      <div>
        <p class="font-bold text-emerald-700 pb-2">Seja bem-vindo!</p>
        <h1 class="text-2xl font-bold">Meu nome é João</h1>
        <h2 class="text-lg font-medium pb-4">Sou um Engenheiro de Software</h2>
        <p class="text-neutral-500">
          Tenho uma visão clara de como a tecnologia pode ser uma ferramenta
          poderosa para resolver problemas do mundo real e estou sempre
          procurando soluções inovadoras e eficazes para enfrentar esses
          desafios.
        </p>
      </div>
      <div class="flex-none flex flex-col items-center gap-2">
        <ui-button variant="tonal" padding="large" to="#sobre">
          Sobre mim
        </ui-button>
        <ui-button variant="plain" padding="large" to="#projetos">
          Meus projetos
        </ui-button>
      </div>
    </ui-card>
  </app-container>
</template>
