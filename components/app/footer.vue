<template>
  <app-container
    is="footer"
    class="bg-emerald-100 text-emerald-700"
    content-class="py-16 grid auto-rows-auto gap-16">
    <section class="flex flex-col gap-2 col-span-full">
      <h2 class="font-medium">Contatos</h2>
      <p>Sinta-se livre para entrar em contato comigo!</p>
      <p>
        WhatsApp:
        <ui-link
          class="font-bold"
          target="_blank"
          to="https://wa.me/5512991617072">
          +55 (12) 99161-7072
        </ui-link>
      </p>
      <p>
        Email:
        <ui-link
          class="font-bold"
          target="_blank"
          to="mailto:joaovitorcprocopio@gmail.com">
          joaovitorcprocopio@gmail.com
        </ui-link>
      </p>
    </section>
    <section class="grid auto-rows-auto grid-cols-2 gap-8">
      <section class="flex flex-col gap-2">
        <h2 class="font-medium">Me encontre no</h2>
        <ui-link
          class="font-bold"
          target="_blank"
          to="https://www.linkedin.com/in/joao-procopio/">
          LinkedIn
        </ui-link>
        <ui-link
          class="font-bold"
          target="_blank"
          to="https://github.com/joaoprocopio/">
          GitHub
        </ui-link>
      </section>
      <section class="flex flex-col gap-2">
        <h2 class="font-medium">Explore</h2>
        <ui-link class="font-bold" to="/">Portfólio</ui-link>
        <ui-link class="font-bold" to="/blog">Blog</ui-link>
      </section>
      <section>
        <ui-link class="font-bold" to="/">João</ui-link>
      </section>
      <section>
        <ui-link
          class="font-bold"
          target="_blank"
          to="https://github.com/joaoprocopio/joaoprocopio.github.io">
          Veja o código fonte
        </ui-link>
      </section>
    </section>
  </app-container>
</template>
