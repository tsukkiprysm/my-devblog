---
layout: posts
title: "My devblog #03 Design Process: Continuation"
date: 2025-08-05
image: /img/postimg/p_md_050825.jpg
excerpt: Estive com alguma dificuldade de decidir como ficaria a aparência...
tags: [devblog]
---

    <img src="{{'/img/postimg/p_md_050825.jpg' | relative_url}}" alt="">

Estive com alguma dificuldade de decidir como ficaria a aparência da página inicial deste blog. Fiz alguns experimentos e fui brincando com a disposição dos elementos para tentar encontrar a melhor solução e acho que consegui.

Eu queria usar como inspiração para o layout as templates bonitinhas que geralmente fazem para o notion, mas elas geralmente envolvem muitas imagens e eu não queria por imagens decorativas demais. Além disso, minha ideia inicial de o lado esquerdo ser só para as notícias e o lado direito ser meramente decorativo com calendarios e relogios e gifs e etc parecia ser um pouco sem graça, ainda mais após tirar o esboço em papel e colocar no figma.

Porém, notei que o web e o mobile estavam se distanciando um pouco em questão de disposição de elementos, e decidi tentar deixar o web um pouco mais parecido com o mobile, ou seja: colocar o gif e o texto de bem vindo ocupando todo o topo, um “divisor” de página contendo o projeto no qual estou atualmente trabalhando em baixo e os últimos posts a seguir à essa divisão. Dessa forma, como pretendo utilizar o bootstrap, fica mais simples utilizar as colunas sem ter que fazer mais de um elemento e esconder eles nos diferentes ecrãs. Para além disso, inclui uma seção para mostrar outros projetos já na página inicial, que ficará ao lado dos últimos posts, e no mobile naturalmente ficará por baixo.

Penso que, considerando os objetivos e a simplicidade desse blog, não preciso fazer coisas muito mais mirabolantes e assim já está bom para a home page. Vou avançar para as outras páginas e, se mais ideias surgirem mais para a frente, posso sempre modificar este design.