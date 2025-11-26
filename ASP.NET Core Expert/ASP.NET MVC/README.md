# Objetivo

Apresentar e explicar todos os conceitos, técnicas e abordagens essenciais para o desenvolvimento de aplicações utilizando ASP.NET MVC.

# Padrão MVC

- Model;
- View;
- Controller.

- Padrão arquitetural;
    - Complementa um estilo arquitetural;
        - Ex: aplicação em camadas que adota o uso do MVC;
- Separação de responsabilidades;
- Criado (descrito) em 1976 pela Xerox;
- Pode ser usado em várias plataformas.   

## Model

As models representam os **dados** da aplicação. Além disso, uma Model pode incluir a validação dos dados.
Trata-se da representação dos dados do mundo real qua pode incluir validações e regras de negócio.

## Views

As views são as páginas do site, responsáveis pela navegação, design, UX. Utilizamos HTML, CSS e JS.
No MVC do .NET, temos o componente especial, o Razor. Ele é responsável por montar e entregar a view pronta para exibição.
O Razor permite funcionalidades dinâmicas dentro do HTML.

## Controller

Atua como intermediária entre a Model e a View. É a controller qu response às ações do usuário, como cliques em botões em links;

# Acompanhando as novidades

https://github.com/dotnet/aspnetcore/issues

# Estrutura projeto ASP NET Core MVC

- Pasta Properties
    - Contém o launchSettins.json, que permite configurar como rodar a aplicação;

- Pasta wwwroot
    - Contém os arquivos estáticos;

- Pasta controllers
    - Armazena as controllers das views

- Pasta models
    - Armazena os modelos usados na aplicação

- Pasta views
    - Armazena as páginas da aplicação;
    - O nome da view sempre segue o nome da controller;
        - Se temos HomeController, então dentro de views teremos a pasta Home;
    - Pasta Shared
        - Arquivos compartilhados;
            - Partials;

# Controllers

- **Controller** é a classe base do MVC;

## Rotas

Estruturas de navegação personalizadas para que a URL da aplicação possua determinado padrão e atenda às necessidades de passagem de parâmetros.
**A rota explica qual controller invocar, qual o método chamar e quais parâmetros passar.**




    


