<img width="965" alt="Captura de Tela 2024-06-19 às 16 44 59" src="https://github.com/viillen/e2e-morden-cordel/assets/160295496/641b1e57-5868-40f7-9b49-82ed0ba48582">


# Cordel Moderno - Projeto E2E

> Este projeto consiste na criação de testes automatizados End-to-End (E2E) para o site Cordel Moderno, desenvolvido por [Gustavo](https://github.com/gustavolohn) e baseado no [Curso em Vídeo](https://www.cursoemvideo.com/). O objetivo é garantir a qualidade e a funcionalidade do site através de testes abrangentes.

## Funcionalidades Testadas

- **Textos**: Verificação da exibição e formatação correta dos textos no site.
- **Títulos e Subtítulos**:  Garantir que os títulos e subtítulos aparecem corretamente e estão formatados de acordo com o esperado.
- **Layout da WebPage**: Testes para assegurar que o layout do site é exibido corretamente, verificando o CSS.
- **links**: Testes de todos os links para garantir que redirecionam para as páginas corretas e estão funcionando.
- **Imagens**: Verificação de que todas as imagens são carregadas corretamente e estão nos locais apropriados.

## 💻 Tecnologias Utilizadas

- **Ferramenta de Teste**: [Cypress](https://www.cypress.io/)
- **Linguagem de Programação**: [TypeScript](https://www.typescriptlang.org/)
- **Ferramenta de Testes Visuais**: [Percy](https://percy.io/)
- **Suporte a XPath**: [cypress-xpath](https://www.npmjs.com/package/cypress-xpath)

 
## 🔧 Instalação 

Para instalar e rodar os testes localmente, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/viillen/e2e-morden-cordel.git
    ```
2. Entre na pasta do projeto:
   ```
   cd e2e-morden-cordel
   ```

3. Instale as dependências do projeto:
    ```bash
    npm install
    ```

## 🚀 Uso

**Para tirar um screenshot com `Percy.io`. Siga os passos abaixo:**

1. crie uma conta em Percy.io se ainda não tiver
   
2. Autentique o Percy com o seu token de projeto:
   ```bash
   export PERCY_TOKEN=<your-project-token>
   ```
4. Rodar os testes:
   ```
   percy exec -- cypress run
   ```
5. Verifique o Screenshot capturado no dashboard do Percy.

**Para rodar os testes E2E, utilize o `Cypress`. Siga os passos abaixo:**

1. Inicie o Cypress:
    ```bash
    npx cypress open
    ```
2. Na interface do Cypress, selecione o teste que deseja rodar.

   ---
<div align="center"> 
  
## Este projeto de testes E2E foi desenvolvido para o site Cordel Moderno criado por [Gustavo](https://github.com/gustavolohn), com o intuito de aprimorar a qualidade e a confiabilidade do site.

</div> 


<div align="center">
  
![Cypress](https://img.shields.io/badge/-Cypress-0D1117?style=for-the-badge&logo=cypress&labelColor=0D1117)&nbsp;
![Percy](https://img.shields.io/badge/-Percy-0D1117?style=for-the-badge&logo=percy&labelColor=0D1117&textColor=0D1117)&nbsp;
![TypeScript](https://img.shields.io/badge/-TypeScript-0D1117?style=for-the-badge&logo=TypeScript&labelColor=0D1117&textColor=0D1117)&nbsp;
![Cypress](https://img.shields.io/badge/-Xpath-0D1117?style=for-the-badge&logo=xpath&labelColor=0D1117)&nbsp;

   </div> 
  

  

