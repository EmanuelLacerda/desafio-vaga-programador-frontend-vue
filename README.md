



# Social GIF



Social GIF é uma aplicação web na qual é possível visualizar e interagir com GIFs. Os GIFs do Social GIF vem da API do GIPHY.



## 🔥 Introdução



### ⚙️ Pré-requisitos

Você precisa do Node e NPM para executar esta aplicação. Acesse [este link](https://nodejs.org/en/download/package-manager) para saber como realizar as instalações deles.



🔨 Guia de instalação

**Passo 1:** Clone esse repositório

```bash
git clone https://github.com/EmanuelLacerda/social-gif.git
```

**Passo 2:** Acesse a pasta do respositório

```bash
cd social-gif
```

**Passo 3:** Instale as dependências

```bash
yarn
```

ou

```bash
npm install
```

**Passo 04:** *Crie o arquivo .env na raiz do projeto e adicione nele a API KEY do Giphy em uma variável de ambiente com o seguinte nome: VITE_API_GIPHY_KEY.

**Passo 5:** Execute a aplicação em dev mode

```bash 
npx quasar dev
```



Obs.: Consulte [a doc da API do Giphy](https://developers.giphy.com/docs/api) para saber como gerar uma API KEY.



## 📦 Tecnologias usadas:

- [Vue 3(Composition API com script setup)](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Quasar 2(Framework para construção de aplicações Vue.js)](https://quasar.dev/)
- [Pinia(Gerenciamento de estado)](https://pinia.vuejs.org/)
- [Vue-Router(Gerenciamento de rotas)](https://router.vuejs.org/)
- [Axios(Integração de APIs)](https://axios-http.com/docs/intro)
- [Bootstrap Icons](https://icons.getbootstrap.com/)



## ⚙️ Funcionalidades

A aplicação tem 3 rotas: Home, Favoritos e Categorias. Cada uma delas possuem funcionalidades próprias. Abaixo segue a lista de funcionalidades de cada uma delas.



**Funcionalidades disponíveis na rota Home:**

- Visualizar os GIFs Trending no Giphy.
- Buscar GIFs por termos de pesquisa.
- Favoritar GIFs.
- Acessar qualquer GIF direto no Giphy.



**Funcionalidades disponíveis na rota Favoritos:**

- Visualizar a lista completa de GIFs favoritados.
- Remover GIFs da lista de favoritos.
- Acessar qualquer GIF direto no Giphy.



**Funcionalidades disponíveis na rota Categorias:**

- Filtrar GIFs pelas categorias disponibilizadas pela API do Giphy.
- Favoritar GIFs.
- Acessar qualquer GIF direto no Giphy.



## ⚒️ Demonstração



### Visualizar os GIFs Trending no Giphy:



### Buscar GIFs por termos de pesquisa



### Favoritar GIFs



### Acessar GIF direto no Giphy



### Visualizar a lista completa de GIFs favoritados



### Remover GIFs da lista de favoritos



## 👷 Autores

- **Emanuel** - Front-end do projeto - [@EmanuelLacerda](https://github.com/EmanuelLacerda)



## 📄 Licença

Esse projeto está sob a licença MIT - acesse os detalhes [LICENSE.md](https://github.com/EmanuelLacerda/social-gif/blob/main/LICENSE).



