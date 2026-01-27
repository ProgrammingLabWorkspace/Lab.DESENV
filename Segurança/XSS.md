# Cross site scripting

Vulnerabilidade em que um atacante consegue fazer o navegador da vítima executar JavaScript não confiável dentro do contexto de um site legítimo. Isso geralmente acontece quando a aplicação renderiza conteúdo do usuário sem validação/escapamento adequados.

Com isso, o atacante pode, por exemplo, ler dados acessíveis pela página, alterar o conteúdo exibido, ou executar ações em nome do usuário (porque o código roda com as permissões da sessão da vítima). Um impacto comum é o sequestro de sessão, quando o atacante obtém algum identificador de sessão se ele estiver acessível ao JavaScript (por exemplo, cookies sem HttpOnly) ou se houver outro token disponível no front-end.

**Exemplo:**

Atacante insere um código JS malicioso que pega os cookies do usuários e os envia (através de requisição)para um de seus servidores. Tendo posse do cookie, o atacante pode conseguir se autenticar com a conta da pessoa facilmente simplesmente utilizando desse cookie que ele conseguiu roubar.

# Referências

- https://hackersec.com/o-que-e-cross-site-scripting-xss/;
- https://www.youtube.com/watch?v=HXGbTzflM5k;