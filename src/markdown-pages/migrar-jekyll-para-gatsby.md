---
slug: "/blog/como-foi-migrar-jekyll-para-gatsby"
date: "2020-10-07"
title: "Mudanças no site: Migração para o Gatsby"
tag: "desenvolvimento"
featuredImage: ../images/code.jpg
---
Durante um tempo usei o Jekyll, um gerador estático de sites para criar meu portfólio. Era 
Perfeito para usar com o Github pages, pois automaticamente o Github fazia as builds do 
site para cada atualização no repositório. Jekyll é feito com Ruby, na época preparei 
meu ambiente de desenvolvimento para aprender os básicos dessa linguagem que era nova para mim,
e foi muito boa a experiência. Consegui rapidamente criar o portfólio e vi os pontos positivos 
da linguagem Ruby (por mais que eu gostasse de JavaScript) e mantive ele no ar por quase 2 anos.

Depois de um tempo, minhas habilidades com JavaScript melhoraram bastante e finalmente resolvi 
migrar o site todo para React e Gatsby, e futuramente, pretendo hospeda-lo no Netlify, mas por hora,
estará hospedado no Github pages.

### 🤔 Como foi o processo para migrar?
Para migrar o site, precisei usar um template vazio do Gatsby: [gatsby-starter-template](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-default/) e criar os componentes básicos como cabeçalhos, cards e etc. 

Depois, precisei copiar todos os posts em markdown. Essa foi a parte mais fácil, pois o Jekyll também usa markdown,
e não muda muita coisa pra adaptar pro Gatsby.

Depois, precisei configurar o diretório das imagens. Uma das coisas interessantes do Gatsby é que ele
tem um plugin para fazer uma pré-visualização da imagem antes de carrega-la completamente. Assim, imagens
de alta resolução não atrapalham o carregamento e faz com que as páginas fiquem bém rápidas. ⚡️  






