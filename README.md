# Radar de Ofertas

Landing page responsiva para direcionar visitantes ao grupo VIP do WhatsApp.

## Tecnologias
- HTML, CSS e JavaScript
- Nginx
- Docker

## Executar localmente

```bash
docker build -t radar-de-ofertas .
docker run --rm -p 10000:10000 radar-de-ofertas
```

Acesse http://localhost:10000

## Publicar no Render

1. Envie este projeto para um repositório GitHub.
2. No Render, escolha **New > Web Service** e conecte o repositório.
3. Selecione **Docker** como ambiente.
4. O Dockerfile já configura o Nginx para escutar na porta `10000`.
5. Publique o serviço.

## Personalização
O link do grupo está no atributo `href` do botão `#join-button` em `src/index.html`.

## Observação sobre atividade
A notificação inicial comunica que o Radar de Ofertas está ativo; ela não afirma que uma pessoa específica entrou no grupo. Para exibir entradas reais, será necessário integrar uma fonte autorizada de eventos de entrada do WhatsApp.
# radar-de-ofertas
