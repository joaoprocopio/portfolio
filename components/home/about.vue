<template>
  <app-container content-class="text-neutral-500 py-8 text-center sm:text-left">
    <h2 class="font-bold pb-2 text-emerald-700">Sobre mim</h2>
    <article class="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 gap-8">
      <section class="flex flex-col items-center gap-4">
        <p>
          Oi, meu nome é João e eu sou um engenheiro de software apaixonado por
          tecnologia.
        </p>
        <p>
          Para mim, a tecnologia é essencial para resolver os desafios do mundo
          real e estou sempre em busca de soluções inovadoras e eficazes para
          enfrentar esses problemas.
        </p>
        <p>
          Com minha experiência e habilidades em engenharia de software, ajudo
          empresas a desenvolver produtos e serviços que melhoram a vida das
          pessoas e solucionam problemas reais.
        </p>
        <p>
          Trabalhei com várias tecnologias e plataformas, aplicando boas
          práticas de desenvolvimento para produzir produtos de qualidade.
          Valorizo a colaboração e o trabalho em equipe para criar soluções
          poderosas e impactantes.
        </p>
      </section>
      <section class="flex flex-col items-center gap-4">
        <nuxt-img
          class="rounded-lg object-cover h-64 sm:w-full"
          src="/images/me.webp"
          width="256" />
        <p>Algumas das tecnologias que tenho trabalhado recentemente:</p>
        <ul
          class="font-bold grid grid-cols-2 auto-rows-auto gap-x-4 gap-y-2 sm:self-start">
          <li class="text-emerald-700">JavaScript</li>
          <li class="text-emerald-700">Vue.js</li>
          <li class="text-emerald-600">TypeScript</li>
          <li class="text-emerald-600">Nuxt.js</li>
          <li class="text-emerald-500">Python</li>
          <li class="text-emerald-500">Django</li>
          <li class="text-emerald-400">Dart</li>
          <li class="text-emerald-400">Flutter</li>
        </ul>
      </section>
    </article>
  </app-container>
</template>
