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

**Passo 04:** \*Crie o arquivo .env na raiz do projeto e adicione nele a API KEY do Giphy em uma variável de ambiente com o seguinte nome: VITE_API_GIPHY_KEY.

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

[funcionalidade-visualizar-gifs-treding.webm](https://github.com/user-attachments/assets/007f7b1f-6050-4f52-b9ba-44244efa0be9)

### Buscar GIFs por termos de pesquisa

[funcionalidade-pesquisar-gifs.webm](https://github.com/user-attachments/assets/151405c0-cc04-4578-9522-cef665f848ae)

### Favoritar GIFs

[funcionalidade-favoritar.webm](https://github.com/user-attachments/assets/e09630f9-9a8a-4219-a306-beb1d910a95d)

### Acessar GIF direto no Giphy

[funcionalidade-acessar-gif-no-giphy.webm](https://github.com/user-attachments/assets/1ec0ceb4-21b3-407e-9da8-cb069f2fee71)

### Visualizar a lista completa de GIFs favoritados

[funcionalidade-visualizar-lista-gifs-favoritados.webm](https://github.com/user-attachments/assets/e31d8c78-45c2-449c-a3e8-ee008d84b770)

### Remover GIFs da lista de favoritos

[funcionalidade-remover-gif-da-lista-de-favoritos.webm](https://github.com/user-attachments/assets/56e05a6e-2ad5-4d8f-8c29-0c3a4f719150)

## 👷 Autores

- **Emanuel** - Front-end do projeto - [@EmanuelLacerda](https://github.com/EmanuelLacerda)

## 📄 Licença

Esse projeto está sob a licença MIT - acesse os detalhes [LICENSE.md](https://github.com/EmanuelLacerda/social-gif/blob/main/LICENSE).

## ✉️ Contato

Se tiver alguma dúvida, quiser fazer sugestões, elogios, etc., se sinta livre para entrar em contato comigo por meio de um dos contatos abaixo:

- [in/emanuel-de-souza-lacerda](https://www.linkedin.com/in/emanuel-de-souza-lacerda/)
- emanuelsouzalacerda@gmail.com
