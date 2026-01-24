# CSRF - Cross-Site Request Forgery

Os ataques CSRF também são conhecidos por diversos outros nomes, incluindo XSRF, "Sea Surf", Session Riding, Cross-Site Reference Forgery e Hostile Linking.

No ataque CSRF, o atacante engana um usuário autenticado para que seu navegador execute ações não intencionais em um site confiável, como fazer uma compra ou mudar uma senha, aproveitando a confiança que o site já tem no usuário e seus cookies de sessão.

Ex: 
- usuário está logado em sua conta bancária;
- o atacante conhece o sistema do banco (endpoints, payload das requisições, etc) e sabe que o usuário tem conta lá;
- o atacante utiliza de engenharia social para convencer o usuário a acessar uma página e realizar uma ação;
- o usuário acessa a página, realiza uma ação (click) e a ação realizada faz com que ocorra algo, por exemplo, no sistema bancário que o usuário está logado, como transferir dinheiro, alterar senha, etc.

Nesse caso, a vitima acaba realizando uma requisição maliciosa.

"Nesse tipo de ataque, um invasor consegue fazer com que um usuário legítimo execute uma ação indesejada em um aplicativo web, aproveitando-se do fato de que as solicitações enviadas a partir do navegador do usuário incluem automaticamente os cookies de autenticação." - Retirado de Hackersec

## Medidas de proteção

- **Utilização de tokens Anti-CSRF em formulários e solicitações AJAX.** O token é gerado e validado pelo servidor, garantindo as requisições sejam legítimas e originadas do próprio aplicativo web;
- **Verificação de Origem (Same-Origin Policy)** - essa política restringe as solicitações para que sejam feitas a partir do mesmo domínio;
- **Headers Content-type e Referer** - ajudam a mitigar, pois fornecem informações adicionais que auxiliam na proteção contra CSRF. "Por exemplo, definir o cabeçalho Referer para verificar se a origem da solicitação é o mesmo domínio pode ajudar a bloquear solicitações maliciosas."
- **Implementação de Captchas e Autenticação em duas etapas** - ajudam a mitigar ataques CSRF. Ambas soluções apresentam uma camada extra de segurança, exigindo que o usuário faça uma nova interação.

## Referências

- https://owasp-org.translate.goog/www-community/attacks/csrf?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc
- https://hackersec.com/o-que-e-csrf/