<template>
  <app-container
    is="footer"
    vertical-padding="large"
    class="bg-emerald-100 text-emerald-700"
    content-class="grid  gap-16">
    <div class="flex flex-col gap-2">
      <h2 class="font-medium">Contatos</h2>
      <p>Sinta-se livre para entrar em contato comigo!</p>
      <ul class="flex flex-col gap-2">
        <li>
          WhatsApp:
          <ui-link
            class="font-bold"
            target="_blank"
            to="https://wa.me/5512991617072">
            +55 (12) 99161-7072
          </ui-link>
        </li>
        <li>
          Email:
          <ui-link
            class="font-bold"
            target="_blank"
            to="mailto:joaovitorcprocopio@gmail.com">
            joaovitorcprocopio@gmail.com
          </ui-link>
        </li>
      </ul>
    </div>
    <div class="grid grid-cols-2 gap-8 items-center">
      <div class="flex flex-col gap-2">
        <h2 class="font-medium">Me encontre no</h2>
        <ul class="flex flex-col gap-2">
          <li>
            <ui-link
              class="font-bold"
              target="_blank"
              to="https://www.linkedin.com/in/joao-procopio/">
              LinkedIn
            </ui-link>
          </li>
          <li>
            <ui-link
              class="font-bold"
              target="_blank"
              to="https://github.com/joaoprocopio/">
              GitHub
            </ui-link>
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-2">
        <h2 class="font-medium">Explore</h2>
        <ul class="flex flex-col gap-2">
          <li>
            <ui-link class="font-bold" to="/">Portfólio</ui-link>
          </li>
          <li>
            <ui-link class="font-bold" to="/blog">Blog</ui-link>
          </li>
        </ul>
      </div>
      <ui-link to="/" class="text-emerald-100">
        <icon-logo class="h-8 w-8" />
      </ui-link>
      <ui-link
        class="font-bold"
        target="_blank"
        to="https://github.com/joaoprocopio/v1.joaoprocopio.com.br">
        Veja o código fonte
      </ui-link>
    </div>
  </app-container>
</template>
