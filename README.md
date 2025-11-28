# Portfólio de QA - Jéssica Ferreira Teixeira

Este repositório contém meu portfólio como **Engenheira de QA em formação**, desenvolvido para apresentar minhas habilidades, formações, projetos e materiais produzidos na área de qualidade de software.

## Sobre mim

Sou **Jéssica Ferreira Teixeira**, profissional em formação na área de **Qualidade de Software (QA)**, com foco em:

- Testes manuais e automáticos
- Automação de testes (principalmente com Cypress)
- Processos de qualidade e garantia de software
- Testes de API

Estou em constante aprendizado, buscando sempre aprimorar meus conhecimentos técnicos e minhas soft skills, como comunicação, atenção aos detalhes e resolução de problemas.

## Estrutura do Portfólio

O site é composto pelas seguintes seções principais:

### 1. Hero / Apresentação

- Apresentação com foto, nome, título profissional e um resumo do meu perfil.
- Botões de acesso rápido para **Meus Projetos** e **Contato**.

### 2. Projetos (GitHub)

- Lista de projetos públicos do meu GitHub (`JessyTeixeira-QA`).
- Os repositórios são carregados dinamicamente via **GitHub API**, ordenados por data de atualização.
- Alguns repositórios são ignorados (ex.: o próprio portfólio).
- Cada card mostra:
  - Nome do repositório
  - Descrição
  - Linguagem principal com cor
  - Data da última atualização
  - Links para o código e, se existir, deploy/demo.

### 3. Minhas Habilidades

Organizadas em quatro blocos, em forma de lista, com ícones para cada habilidade:

- **Testes & QA**
  - Testes Manuais
  - Testes Automáticos
  - Cypress
  - Testes de Software
  - Casos de Teste

- **Ferramentas & Tecnologias**
  - Cypress
  - Postman
  - Git / GitHub
  - Excel
  - Power BI

- **Linguagens & Tecnologias**
  - JavaScript
  - HTML
  - CSS
  - Automação de Testes
  - Testes de API

- **Soft Skills**
  - Atenção aos Detalhes
  - Comunicação
  - Trabalho em Equipe
  - Resolução de Problemas
  - Pensamento Crítico

### 4. Planos de Teste

- Seção para **documentos de QA**, como planos de teste.
- Os itens são definidos via JavaScript (lista `documentosTeste`) e exibidos em cards com:
  - Título
  - Descrição
  - Tipo (ex.: PDF)
  - Data

### 5. Livros Lidos

Seção "**Livros Lidos**" para registrar materiais importantes de estudo:

- **Teste de Software - Produção de Qualidade** (Maurício Aniche)
- **Clean Code** (Robert C. Martin)
- **O Guia Completo do Teste de Software** (Bill Hetzel)

Cada livro aparece em um card com ícone, autor, tag (ex.: QA & Testes, Desenvolvimento) e ano.

### 6. Conteúdo Criado

- Espaço para **eBooks e artigos** que eu mesma produzi sobre QA e testes.
- Os dados são carregados via JavaScript (lista `conteudosCriados`) e exibidos em cards com imagem, título, descrição, tipo e data.

### 7. Formações & Cursos

Lista das minhas principais formações, em cards similares à timeline da imagem de referência, por exemplo:

- Formação: A partir do zero: iniciante em programação – *Alura*  
- Formação: Carreira QA: processos e automação de testes – *Alura*

Cada card mostra:
- Título da formação
- Instituição
- Descrição/resumo
- Data de conclusão e carga horária

### 8. Contato

- Formulário simples com **Nome**, **E-mail** e **Mensagem**.
- Botão para envio da mensagem (formato front-end; integração com backend pode ser adicionada futuramente).

### 9. Rodapé e Redes Sociais

No rodapé, estão os links para minhas redes:

- LinkedIn
- GitHub
- E-mail (ícone de envelope com `mailto:`)
- Instagram (link configurável)

## Tecnologias Utilizadas

- **HTML5** para a estrutura da página.
- **CSS3** (com Flexbox e Grid) para layout responsivo e tema claro/escuro.
- **JavaScript** puro para:
  - Troca de tema (dark/light) com persistência em `localStorage`.
  - Consumo da **GitHub API** para listar projetos.
  - Carregamento dinâmico de planos de teste e conteúdo criado.
- **Font Awesome** para ícones (skills, redes sociais, livros, mensagens de erro, etc.).
- **GitHub Pages** para hospedagem do portfólio.

## Como rodar o projeto localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/JessyTeixeira-QA/jessyteixeira-qa.github.io.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd jessyteixeira-qa.github.io
   ```

3. Abra o arquivo `index.html` no navegador:

   - Clique duas vezes no arquivo, ou
   - Use uma extensão de "Live Server" no VS Code para melhor experiência.

## Estrutura de Pastas

```text
jessyteixeira-qa.github.io/
├── css/
│   └── style.css          # Estilos do portfólio
├── js/
│   └── script.js          # Lógica de tema, GitHub API e dados dinâmicos
├── imagens/               # Imagens do site (foto de perfil, capas etc.)
├── planos-teste/          # PDFs de planos de teste
├── conteudo/              # eBooks e outros materiais criados
├── index.html             # Página principal do portfólio
└── README.md              # Este arquivo
```

## Próximos Passos / Ideias Futuras

- Adicionar mais formações, livros e conteúdos conforme eu avançar na carreira.
- Incluir mais projetos de automação de testes (ex.: Cypress, Playwright, Selenium).
- Integrar o formulário de contato com um serviço de envio de e-mail.
- Adicionar testes automatizados para o próprio portfólio.

---

Se você chegou até aqui e quer conversar sobre **oportunidades, projetos ou colaboração em QA**, fique à vontade para entrar em contato pelo formulário do site ou pelos links de redes sociais no rodapé.
