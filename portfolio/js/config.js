/* ==========================================================================
   config.js  —  AQUI VOCÊ EDITA TUDO (textos, links, projetos)
   ==========================================================================
   Este é o ÚNICO arquivo que você precisa mexer para trocar o conteúdo.
   Você não precisa saber programar: troque só o que está entre aspas "...".

   DICAS:
   - Mantenha as aspas e as vírgulas no final de cada linha.
   - Campo vazio ("") = o item some do site automaticamente.
   - Salve o arquivo e atualize a página (F5) para ver a mudança.
   ========================================================================== */

const SITE = {

  /* ---------------------------- IDENTIDADE ---------------------------- */
  nome: "Matheus Teixeira de Oliveira",   // Nome completo (aparece no topo da página e no rodapé)
  nomeCurto: "Matheus Teixeira",          // Nome curto (aparece no menu)
  titulo: "Estudante de Ciência da Computação e desenvolvedor web em formação",

  // Frase curta logo abaixo do título
  resumo: "Crio sites com foco em clareza e organização, e estou sempre aprendendo front-end e back-end.",

  /* ------------------------------ SOBRE MIM ------------------------------
     Cada item da lista abaixo vira um parágrafo.
     Para adicionar outro parágrafo, copie uma linha e cole embaixo.
     Escreva só o que for verdade — este texto representa você!            */
  sobre: [
    "Sou estudante de Ciência da Computação e estou me formando como desenvolvedor web, com interesse e conhecimentos em front-end e back-end.",
    "Estou começando a oferecer a criação de sites institucionais, portfólios e landing pages para empresas, autônomos e pequenos negócios.",
    // Adicione aqui outros parágrafos sobre você (trajetória, objetivos, o que gosta de fazer...)
  ],

  /* ----------------------------- O QUE FAÇO ----------------------------- */
  servicos: [
    {
      titulo: "Sites institucionais",
      descricao: "Páginas para apresentar uma empresa, seus serviços e seus contatos."
    },
    {
      titulo: "Portfólios",
      descricao: "Sites para profissionais e autônomos mostrarem seu trabalho."
    },
    {
      titulo: "Landing pages",
      descricao: "Páginas de uma só tela, pensadas para uma ação: entrar em contato, por exemplo."
    },
  ],

  /* ------------------------------ PROJETOS ------------------------------
     Para adicionar um projeto, copie um bloco inteiro { ... }, cole abaixo
     e troque os textos. Não esqueça a vírgula depois de cada bloco.

     - tecnologias: lista do que foi usado (deixe [] se não quiser mostrar)
     - github: link do repositório   ("" = esconde o botão)
     - demo:   link do site no ar    ("" = esconde o botão)                 */
  projetos: [
    {
      titulo: "Sistema de Clínica Médica",
      descricao: "Projeto desenvolvido em equipe durante a minha formação.",
      tecnologias: [],  // Ex.: ["Java", "MySQL"]  ← preencha com o que vocês realmente usaram
      github: "https://github.com/matheusgg18/Sistema-de-Clinica-Medica",
      demo: ""
    },
    // Novo projeto? Copie o bloco acima e cole aqui.
  ],

  /* ---------------------------- TECNOLOGIAS ----------------------------
     Liste só o que você realmente conhece. Uma por linha entre aspas.     */
  tecnologias: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git e GitHub",
    // "Adicione outra aqui",
  ],

  /* ------------------------------ CONTATO ------------------------------ */
  chamadaContato: "Quer conversar sobre um projeto ou saber mais sobre o meu trabalho? Fale comigo por um dos canais abaixo.",

  contatos: {
    // Somente o NOME DE USUÁRIO (sem https://). Vazio = esconde.
    github: "matheusgg18",
    instagram: "matheus1520_",
    linkedin: "",        // Ex.: "seu-usuario" (parte final do link do seu perfil)

    // WhatsApp: número com país + DDD, só dígitos. Ex.: "5561999999999"
    whatsapp: "",

    // E-mail completo. Ex.: "voce@email.com"
    email: ""
  },

  /* ---------------------------- FOTO DE PERFIL ----------------------------
     O site usa automaticamente a foto do seu GitHub (usuário acima).
     Para usar outra imagem, coloque o arquivo na pasta do projeto e
     escreva o caminho aqui. Ex.: "img/minha-foto.jpg"                      */
  foto: ""
};
