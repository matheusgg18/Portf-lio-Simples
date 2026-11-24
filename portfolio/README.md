# Portfólio — Matheus Teixeira

Site de portfólio simples, feito só com **HTML5, CSS3 e JavaScript** (sem frameworks, sem instalação).
Todo o conteúdo fica em **um único arquivo** (`js/config.js`), então qualquer pessoa consegue editar sem mexer no restante do código.

## Estrutura das pastas

```
portfolio/
├── index.html      # Estrutura da página (seções e menu)
├── css/
│   └── style.css   # Visual: cores, fontes e layout
├── js/
│   ├── config.js   # ✏️ SEUS DADOS: textos, links, projetos (edite este!)
│   └── main.js     # Lê o config.js e monta a página
└── README.md       # Este arquivo
```

## Como ver o site no seu computador

1. Baixe ou clone o repositório.
2. Dê dois cliques em `index.html`. Ele abre direto no navegador.

Não precisa de servidor nem de `npm install`.

## Como editar o conteúdo

Abra **`js/config.js`** em qualquer editor de texto (por exemplo, o VS Code) e troque o que está entre aspas `"..."`.

| O que mudar | Onde no `config.js` |
|---|---|
| Nome, título e frase de apresentação | `nome`, `nomeCurto`, `titulo`, `resumo` |
| Texto "Sobre mim" | `sobre` (cada linha vira um parágrafo) |
| Serviços | `servicos` |
| Projetos | `projetos` (copie um bloco `{ ... }` para adicionar outro) |
| Tecnologias | `tecnologias` |
| GitHub, Instagram, LinkedIn, WhatsApp, e-mail | `contatos` |
| Foto | `foto` (se vazio, usa a foto do seu GitHub) |

**Regras rápidas**

- Campo vazio (`""`) faz o item sumir do site automaticamente.
- WhatsApp: número com país e DDD, só dígitos. Exemplo: `"5561999999999"`.
- Redes sociais: só o nome de usuário, sem `https://`.
- Mantenha as aspas e as vírgulas no fim das linhas.

## Como mudar as cores

Abra `css/style.css` e edite o bloco `:root` no início do arquivo. Para trocar a cor de destaque, altere `--cor-destaque` e `--cor-destaque-2`.

## Como colocar no GitHub

1. Crie um repositório novo em [github.com/new](https://github.com/new) (por exemplo, `portfolio`), **sem** marcar a opção de criar README.
2. Na pasta do projeto, rode no terminal:

```bash
git init
git add .
git commit -m "Primeira versão do portfólio"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/portfolio.git
git push -u origin main
```

Troque `SEU-USUARIO` pelo seu usuário do GitHub.

## Como publicar o site (GitHub Pages)

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/ (root)`, e clique em **Save**.
4. Depois de alguns minutos, o site fica em `https://SEU-USUARIO.github.io/portfolio/`.

Para atualizar o site depois, edite os arquivos e rode:

```bash
git add .
git commit -m "Atualiza o conteúdo"
git push
```

## Tecnologias usadas

- HTML5
- CSS3
- JavaScript (sem bibliotecas)
