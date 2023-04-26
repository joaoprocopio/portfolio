<template>
  <app-container
    is-page
    vertical-padding="medium"
    content-class="text-neutral-500 text-center sm:text-left">
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
      <section class="flex flex-col gap-4 items-center sm:items-start">
        <nuxt-img
          class="rounded-lg object-cover h-72 sm:w-full"
          src="/me.webp"
          alt="fotografia de João"
          loading="lazy"
          quality="80"
          width="300" />
        <p>Algumas das tecnologias que tenho trabalhado recentemente:</p>
        <ul class="font-bold text-emerald-700 grid grid-cols-2 gap-x-8 gap-y-2">
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>TypeScript</li>
          <li>Nuxt.js</li>
          <li>Python</li>
          <li>Django</li>
          <li>Dart</li>
          <li>Flutter</li>
        </ul>
      </section>
    </article>
  </app-container>
</template>
