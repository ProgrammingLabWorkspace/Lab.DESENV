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
        - Arquivos compartilhados e que podem ser acessados por qualquer controller.;
            - Partials;

# Controllers

- **Controller** é a classe base do MVC;

## Rotas

Estruturas de navegação personalizadas para que a URL da aplicação possua determinado padrão e atenda às necessidades de passagem de parâmetros.
**A rota explica qual controller invocar, qual o método chamar e quais parâmetros passar.**

# Verbos HTTP

Mais usados no MVC:
- GET;
    - Pede (request) uma informação ao servidor;
    - É feito através da URL

- POST;
    - Envia informações ao servidor (formulários);

Contudo, temos também:

- Put;
    - Similar ao Post, mas é usado para atualizar informações existentes.
- Delete
    - Solicita exclusão de uma informação no servidor através da URL indicada.

# Action Result

No ASP.NET MVC um Action Result é o tipo de retorno da action da controller, é utilizada a interface IActionResult que pode retornar alguns tipos de resultados:

- JsonResult;
- ViewResult;
- RedirectResult;
- OkResult;
- ...;


# Attribute Routes

Rota por atributos é uma maneira alternativa de trabalhar com rotas, são muito mais flexíveis e fáceis de personalizar.
Estas rotas valem paenas a Controller que foi implementada.
São data annotations

```
[Route("alunos/novo-aluno")]
```

```
[HttpPost("alunos/novo-aluno")]
```

# Usando rotas

Precisa configurar no Program.cs o `app.UseRouting();`.


As controllers podem ter rotas definidas via Data Annotation. Ex:
`
[Route("minha-conta")]
public class TesteController : Controller {}
`
Obs: uma controller pode ter mais de uma rota definida. Ex:

`
[Route("minha-conta")]
[Route("gestao-da-conta")]
public class TesteController : Controller {}
`
Com as duas rotas acima, podemos acessar a controller através do `minha-conta` e `gestao-da-conta`.

Os endpoints dentro da controller podem receber configurações de rotas:

```
[Route("gestao-da-conta")]
public class TesteController : Controller {
    [Route("minha-conta/{id:int}")]
    public ActionResult Index(){}    
}
```

Outra forma

```
[Route("gestao-da-conta")]
public class TesteController : Controller {
    [HttpGet("minha-conta/{id:int}")]
    public ActionResult Details(int id){}    
}
```

# Recebendo parâmetros via body

```
[HttpPost("novo")]
public ActionResult Create([Bind("Id,Nome,Email")] Aluno aluno);
```

```
[HttpPost("novo")]
public ActionResult Create([FromForm] Aluno aluno);
```

```
[HttpPost("novo")]
public ActionResult Create([FromBody] Aluno aluno);
```

# Action Result na prática

IActionResult -> Interface;
ActionResult -> Implementação da interface.

**Recomenda-se utilizar a interface. A classe acaba sendo usada em situações mais complexas**.

## Especificando qual View usar

```
public ActionResult Index(){
    return View("NomeDaView");
}
```

Omitir o "NomeDaView" fará com que seja buscado a view com nome Index.

## Usando View com uma model


```
public ActionResult Index(){
    return View("NomeDaView", new {});
}
```

ou

```
public ActionResult Index(){
    return View(new {  });
}
```

# Models

Representa os objetos do mundo real.
No MVC um modelo pode ser um conjunto de informações de diversos objetos em um só, esse conceito
é chamado de DTO (Data Transfer Object) que são muito utilizados para diminuir o número de requisições
no servidor.

**Só é possível usar uma model por View**

## DataAnnotations

Recurso utilizado principalmente para especificar que tipo de dado e formato a propriedade da Model deve receber.
Também é utilizada para definir tamanho, padrão e obrigatoriedade de preenchimento.
Pode ser utilizada para mapeamento com o banco de dados.
Pode ser utilizado para trabalhar como validação nos formulários nas Razor Views.

### DataAnnotations para validação

Exemplos:

**Campo obrigatório**
```
[Required(ErrorMessage="O campo {0} é obrigatório")]
public string Nome {get; set;}
```

**Validando email**
```
[EmailAddress(ErrorMessage="O campo {0} está em formato inválido")]
public string Email {get; set;}
```

**Comparando campos**
```
[Compare("Email", ErrorMessage="Os e-maisl informados não são identicos")]
public string EmailConfirmacao {get; set;}
```

**Intervalo**
```
[Range(1, 5, "O campo {0} deve estar entre {1} e {2})]
public string Avaliacao {get; set;}
```

**Desconsiderando atributo para base de dados**
```
[NotMapped]
public string EmailConfirmacao {get; set;}
```


## ModelState

### TryValidateModel

Método que valida se um modelo é valido ou não

```
if(TryValidateModel(aluno)) {
    ...
}
```

# Views e Razor

## Razor Views

No MVC, o motor de renderização das Views chama-se Razor. Logo nós temos as Razor Views que são arquivos HTML mesclados com recursos dao Razor.
O mecanismos do Razor transforma as views em arquivos HTML Puros para a interpretação do Browser.
As Views se tornam fortemente tipadas, permitindo trabalhar com modelos dentro das views.
Razor trabalha no backend convertendo o código da view em HTML puro.

## Tag Helpers

Recursos do razor para geração de HTML
O objetivo é escrever menos código, assim o Razor que interage com os recursos do ASP.NET é capaz de gerar o HTML necessário para a View.

Tag Helpers se misturam muito bem com o HTML inclusive dentro de atributos.

```
    <form asp-action="Create">
    </form>
```

O exemplo acima faz com que o form submeta os dados para a Action Create.

Podemos fazer um comparativo com o Angular ou React, onde usamos tags customizadas.

## Views de configuração

Diretórios

- Views
    - Shared
        - _Layout.cshtml
    - Home
    - _ViewImports.cshtml
    - _ViewStart.cshtml

### _ViewStart Page

Define qual o layout padrão do site. A estrutura, por padrão, é nesse formato:

```
@ {
    Layout = "_Layout";
}
```
### _ViewImports Page

Realiza a importação (using) de classes que vamos estar utilizando em nosso projeto.

### _Layout.cshtml

Localizada dentro de Shared (pasta compartilhada).
O Layout pode ser alterado em cada View, bastando alterar o valor da variável Layout
```
    @{
        Layout = "";
    }
```

### Partial Views

São pedações de uma View que podem ser reutilizados em N Views, proporcionando mais reaproveitamento de código.
Similar aos componentes do React e Angular.

**As partials views dependem do modelo implementado na View principal, gerando certa limitação em seu uso.**

Podemos usa-la com AJAX para renderizar dinamicamente.

Partial views possuem underline no nome, ex: `_Layout.cshtml`.

**Partial views devem ficar em Shared.**

Invocando uma partial:

```
<partial name="_MenuLayout">
```

Invocando de forma assincrona

```
@await Html.PartialAsync("_Menulayout")
```

### View Components

Recurso do ASP.NET + Razor, e é um poderoso aliado para desenvolvimento de componentes independentes das views.
Não possui a dependência de modelo como as partials possuem.

Possui um processamento próprio (server-side) independente da controller.

Permite componentizar recursos de páginas como uma carrinho de compras, paginação, barra de pesquisa, etc.

Devem ficar dentro uma pasta chamada `ViewComponents`.

Toda ViewComponent é uma classe que herda de ViewComponent:

```
public class SaudacaoAlunosViewComponent : ViewComponent {
    public async Task<IViewComponentResult> InvokeAsync(){
        ...
        return View();
    }
}

```
O nome da classe deve ter ViewComponent
O processamento ocorre sem a necessidade de uma controller.

Devemos criar uma view. A view deve ficar dentro de Shared. A estrutura ficará:

- Shared
    - Components
        - SaudacaoAluno
            - Default.cshtml

`Default.cshtml`:
```
@model Aluno

<h1>Olá, @Model.Nome, seja bem-vindo(a)!</h1>
```

Invocando um ViewComponent:

```
@await Component.InvokeAsync("SaudacaoAluno")
```

Invocando no formato de tag

Em `_ViewImports.cshtml`:

```
@addTagHelper "*, PrimeiraApp"
```

Depois será possível invocar a ViewComponent:

```
<vc:saudacao-aluno />
```

É possível utilizar parâmetros nas ViewComponent:

```
public class SaudacaoAlunosViewComponent : ViewComponent {
    public async Task<IViewComponentResult> InvokeAsync(int idade){
        ...
        return View();
    }
}
```

```
    <vc:saudacao-aluno idade="18" />
```

# Entity Framework

- ORM (Object Relational Maping);
- Mapeia o mundo relacional aos objetos do C#;
- Depende do ADO.NET;


## Configurando o EF na aplicação

Precisamos instalar dois pacotes do EF:

- Microsoft.EntityFrameworkCore; (a versão deve ser compatível com a versão do .NET);
- Microsoft.EntityFrameworkCore.SqlServer; (a versão deve ser compatível com a versão do .NET);
    - Se estiver usando outro gerenciador de banco de dados, deve-se procurar o pacote correspondente ao SGDB utilizado.

Depois, deve-se criar a classe que irá estender de DbContext:

```
public classe AppDbContext : DbContext {
    public AppDbContext(DbContextOptions<AppDbContext> options): base(options){}
}
```

Deve-se configurar o uso do context na Program.cs. Ex usando SqlServer:

```
builder.Services.AddDbContext<AppDbContext>(o => {
    o.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
```

Configurando uma entidade:

```
public classe AppDbContext : DbContext {
    public AppDbContext(DbContextOptions<AppDbContext> options): base(options){}

    public DbSet<Aluno> Alunos {get; set;}
}
```





