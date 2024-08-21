<template>
  <q-page class="text-lg text-justify">
    <section>
      <h2 class="text-2xl font-semibold mb-4">OBJETIVO DO TESTE:</h2>
      <section class="indent-16 mb-6">
        <p>
          O objetivo deste teste é desenvolver uma aplicação web utilizando
          Quasar 2, Vue 3 (Composition API com script setup), Vue-router, Pinia,
          Axios, LocalStorage (via plugin do Quasar) e Tailwind CSS, que consome
          a API do GIPHY e permite aos usuários visualizar e interagir com GIFs.
        </p>
      </section>
    </section>
    <section>
      <h2 class="text-2xl font-semibold mb-4">SOBRE MIM:</h2>
      <section class="indent-16">
        <p class="mb-2">
          Sou um Desenvolvedor Fron-end com experiência com Vue 3, com consumo
          de API(Axios) e com Bootstrap. Também tenho experiência no
          desenvolvimento do backend de aplicações web, sendo Django(Framework
          Python) a tecnologia backend que mais domino. Participei do
          desenvolvimento de um projeto de gestão hospitalar voltado ao setor
          público. Uma das funcionalidades que desenvolvi nesse projeto foi o
          agendamento de atendimentos médicos.
        </p>
        <p class="mb-3">
          Anteriormente ao desafio, não tinha utilizado Quasar e Tailwind.
          Durante os 4 dias disponibilizados para o desafio, consegui aprender
          estas tecnologias e tenho confiança de que consigo desenvolver outros
          projetos com elas e me aprofundar ainda mais nelas. Em especial o
          Tailwind, a curva de aprendizado é pequena, pois já tenho muita
          experiência com o Bootstrap.
        </p>
      </section>
      <h3 class="font-medium">Contato:</h3>
      <q-list class="rounded-borders *:py-0">
        <q-item>
          <span class="font-medium mr-6">E-mail:</span>
          emanuelsouzalacerda@gmail.com
        </q-item>
        <q-item>
          <span class="font-medium mr-2">LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/emanuel-de-souza-lacerda/"
            class="text-[#0000FF]"
            >in/emanuel-de-souza-lacerda</a
          >
        </q-item>
        <q-item>
          <span class="font-medium mr-5">GitHub:</span>
          <a href="https://github.com/EmanuelLacerda" class="text-[#0000FF]"
            >Emanuel Lacerda</a
          >
        </q-item>
      </q-list>
    </section>
  </q-page>
</template>
<script setup>
defineOptions({
  name: "AboutPage",
});
</script>
