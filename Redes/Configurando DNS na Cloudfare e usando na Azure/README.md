# Configurando DNS no Cloudflare e usando na Azure (Static Web Apps)

Este guia descreve como configurar um **subdomínio** (ex.: `docs.christianbueno.com.br`) no **Azure Static Web Apps** usando **Cloudflare** como provedor de DNS.

## Pré-requisitos
- Domínio gerenciado no **Cloudflare** (nameservers já apontando para o Cloudflare)
- Um **Azure Static Web App** criado e publicado
- Acesso ao menu **Custom domains** do Static Web App na Azure

---

## 1) Adicionar o domínio na Azure e gerar o token TXT (validação)

1. Acesse o recurso **Static Web App** na Azure.
2. Vá até **Custom domains**.
3. Clique em **Add**.
4. Selecione **Custom domain on other DNS**.
5. Informe o domínio/subdomínio (ex.: `docs.christianbueno.com.br`).
6. Em **Hostname record type**, selecione **TXT**.
7. Clique em **Generate code** para gerar o token TXT de validação.

---

## 2) Criar o registro TXT no Cloudflare (validação de propriedade)

> O registro TXT `_dnsauth.*` serve **apenas para validação** (provar que você controla o domínio).  
> Ele **não** direciona o tráfego para o site.

1. No Cloudflare, acesse seu domínio.
2. Vá em **DNS → Records**.
3. Clique em **Add record** e configure:
   - **Type:** `TXT`
   - **Name:** `_dnsauth.<host>`
     - Ex.: para `docs.christianbueno.com.br`, use **`_dnsauth.docs`**
     - *(O Cloudflare completa automaticamente o domínio.)*
   - **TTL:** `Auto`
   - **Content:** cole o token gerado na Azure (passo 7 da seção anterior)
4. Salve o registro.
5. Volte para a Azure e aguarde o status do domínio mudar para **Validated**.

---

## 3) Criar o registro CNAME no Cloudflare (apontamento do subdomínio)

Após o domínio ficar **Validated** na Azure, é necessário apontar o subdomínio para o endpoint do Static Web App.

1. No Cloudflare, vá em **DNS → Records**.
2. Clique em **Add record** e configure:
   - **Type:** `CNAME`
   - **Name:** `<host>` (ex.: `docs`)
   - **Target:** hostname padrão do Static Web App (ex.: `xxxx.azurestaticapps.net`)
     - **Importante:** use o **hostname**, não uma URL com `https://`
   - **Proxy status:** `DNS only` *(recomendado durante a configuração para evitar conflitos)*
3. Salve o registro.

A aplicação deverá ficar acessível em:  
`https://docs.christianbueno.com.br`

---

## (Opcional) Verificando via terminal

### Validar TXT (domínio)
```bash
nslookup -type=TXT _dnsauth.docs.christianbueno.com.br
```