/* ==========================================================================
   main.js  —  MONTA A PÁGINA
   ==========================================================================
   Este arquivo LÊ os dados de js/config.js (objeto SITE) e preenche o HTML.
   Se você só quer trocar textos e links, NÃO precisa mexer aqui.

   Resumo do que cada bloco faz:
     1. Funções auxiliares
     2. Textos simples      (nome, título, resumo...)
     3. Foto de perfil
     4. Sobre mim
     5. O que faço
     6. Projetos
     7. Tecnologias
     8. Contatos
     9. Menu no celular
    10. Rodapé (ano automático)
   ========================================================================== */

(function () {
  "use strict"; // Modo estrito: ajuda a evitar erros bobos no código.

  /* ------------------------------------------------------------------
     1) FUNÇÕES AUXILIARES
     ------------------------------------------------------------------ */

  // Atalho para buscar um elemento na página pelo seletor CSS.
  function $(seletor) {
    return document.querySelector(seletor);
  }

  // Cria um elemento HTML de forma segura (usa textContent, nunca innerHTML,
  // então nenhum texto digitado no config.js consegue "quebrar" a página).
  function criar(tag, classe, texto) {
    const el = document.createElement(tag);
    if (classe) el.className = classe;
    if (texto) el.textContent = texto;
    return el;
  }

  // Cria um link <a> que abre em nova aba.
  function criarLink(texto, url, classe) {
    const a = criar("a", classe, texto);
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer"; // Segurança ao abrir links externos.
    return a;
  }

  /* ------------------------------------------------------------------
     2) TEXTOS SIMPLES
     Todo elemento com data-campo="nome" recebe SITE.nome, e assim por diante.
     ------------------------------------------------------------------ */
  document.querySelectorAll("[data-campo]").forEach(function (el) {
    const valor = SITE[el.dataset.campo];
    if (valor) el.textContent = valor;
  });

  // Título da aba do navegador.
  document.title = SITE.nomeCurto + " — Portfólio";

  /* ------------------------------------------------------------------
     3) FOTO DE PERFIL
     Usa SITE.foto se existir; senão, usa a foto do GitHub.
     Se a imagem falhar ao carregar, ela simplesmente fica escondida.
     ------------------------------------------------------------------ */
  const foto = $("#foto");
  const origemFoto =
    SITE.foto ||
    (SITE.contatos.github ? "https://github.com/" + SITE.contatos.github + ".png" : "");

  if (foto && origemFoto) {
    foto.src = origemFoto;
    foto.alt = "Foto de " + SITE.nome;
    foto.addEventListener("load", function () { foto.hidden = false; });
    foto.addEventListener("error", function () { foto.hidden = true; });
  }

  /* ------------------------------------------------------------------
     4) SOBRE MIM — um <p> para cada item da lista SITE.sobre
     ------------------------------------------------------------------ */
  const sobre = $("#sobre-texto");
  SITE.sobre.forEach(function (paragrafo) {
    sobre.appendChild(criar("p", "", paragrafo));
  });

  /* ------------------------------------------------------------------
     5) O QUE FAÇO — um cartão para cada item de SITE.servicos
     ------------------------------------------------------------------ */
  const listaServicos = $("#lista-servicos");
  SITE.servicos.forEach(function (servico) {
    const cartao = criar("article", "cartao");
    cartao.appendChild(criar("h3", "", servico.titulo));
    cartao.appendChild(criar("p", "", servico.descricao));
    listaServicos.appendChild(cartao);
  });

  /* ------------------------------------------------------------------
     6) PROJETOS — um cartão para cada item de SITE.projetos
     Os botões "Código" e "Ver online" só aparecem se houver link.
     ------------------------------------------------------------------ */
  const listaProjetos = $("#lista-projetos");
  SITE.projetos.forEach(function (projeto) {
    const cartao = criar("article", "cartao");
    cartao.appendChild(criar("h3", "", projeto.titulo));
    cartao.appendChild(criar("p", "", projeto.descricao));

    // Etiquetas das tecnologias do projeto (se houver)
    if (projeto.tecnologias && projeto.tecnologias.length > 0) {
      const etiquetas = criar("ul", "etiquetas etiquetas-pequenas");
      projeto.tecnologias.forEach(function (tec) {
        etiquetas.appendChild(criar("li", "", tec));
      });
      cartao.appendChild(etiquetas);
    }

    // Links do projeto (se houver)
    const links = criar("div", "cartao-links");
    if (projeto.github) links.appendChild(criarLink("Ver código", projeto.github, "link-simples"));
    if (projeto.demo) links.appendChild(criarLink("Ver online", projeto.demo, "link-simples"));
    if (links.children.length > 0) cartao.appendChild(links);

    listaProjetos.appendChild(cartao);
  });

  /* ------------------------------------------------------------------
     7) TECNOLOGIAS — uma etiqueta para cada item de SITE.tecnologias
     ------------------------------------------------------------------ */
  const listaTec = $("#lista-tecnologias");
  SITE.tecnologias.forEach(function (tec) {
    listaTec.appendChild(criar("li", "", tec));
  });

  /* ------------------------------------------------------------------
     8) CONTATOS — só cria o botão se o campo estiver preenchido
     ------------------------------------------------------------------ */
  const c = SITE.contatos;
  const listaContatos = $("#lista-contatos");

  // Cada item: [texto do botão, link final]. Itens vazios são ignorados.
  const canais = [
    ["WhatsApp",  c.whatsapp  && "https://wa.me/" + c.whatsapp.replace(/\D/g, "")],
    ["E-mail",    c.email     && "mailto:" + c.email],
    ["GitHub",    c.github    && "https://github.com/" + c.github],
    ["Instagram", c.instagram && "https://instagram.com/" + c.instagram],
    ["LinkedIn",  c.linkedin  && "https://www.linkedin.com/in/" + c.linkedin]
  ];

  canais.forEach(function (canal) {
    if (canal[1]) {
      listaContatos.appendChild(criarLink(canal[0], canal[1], "botao botao-secundario"));
    }
  });

  /* ------------------------------------------------------------------
     9) MENU NO CELULAR — abre/fecha ao tocar no botão "Menu"
     ------------------------------------------------------------------ */
  const botaoMenu = $("#menu-botao");
  const menu = $("#menu");

  function alternarMenu(abrir) {
    menu.classList.toggle("aberto", abrir);
    botaoMenu.setAttribute("aria-expanded", String(abrir));
  }

  botaoMenu.addEventListener("click", function () {
    alternarMenu(!menu.classList.contains("aberto"));
  });

  // Fecha o menu depois de clicar em um item.
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () { alternarMenu(false); });
  });

  /* ------------------------------------------------------------------
     10) RODAPÉ — ano atual automático
     ------------------------------------------------------------------ */
  $("#ano").textContent = new Date().getFullYear();

})();
