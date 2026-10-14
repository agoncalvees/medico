# Template — Site para Médicos

Landing page pronta para personalizar por médico/clínica. **Todo o conteúdo fica em um único arquivo: `js/config.js`.** Não é preciso mexer no HTML, CSS ou `main.js`.

## Estrutura

```
index.html        estrutura das seções (não editar)
css/style.css     visual (não editar — cores vêm do config)
js/config.js      ← EDITAR AQUI: nome, textos, fotos, contatos, cores
js/main.js        monta a página a partir do config (não editar)
img/              fotos
```

## Seções

1. Header (menu, logo central, Instagram, WhatsApp, botão Agendar)
2. Hero (foto de fundo + foto do médico + faixa animada de especialidades)
3. Quem Sou Eu
4. O Que Eu Resolvo (cards com imagem, ícone e "Saiba mais" → WhatsApp)
5. Sintomas (diagrama em volta da foto redonda)
6. Onde Você Me Encontra
7. Diferenciais
8. Perguntas Frequentes + caixa "Ainda tem dúvidas?"
9. Nosso Consultório (endereço, contato, facilidades, mapa)
10. Rodapé compacto + botão flutuante de WhatsApp

## Checklist para um novo médico

1. Copie a pasta inteira.
2. Troque as fotos em `img/` (mantendo os nomes, ou mude os caminhos no config):
   - `hero-fundo.jpg` — consultório, horizontal (1920px de largura)
   - `medico-hero.jpg` — médico em pé/braços cruzados, vertical
   - `medico-sobre.jpg` — retrato de jaleco, vertical (proporção ~ 450×545)
   - `medico-sintomas.jpg` — rosto/meio corpo, quadrada (fica em círculo)
   - `servicos/01.jpg … 09.jpg` — uma por card (horizontal)
3. Em `js/config.js`, altere:
   - `medico` → `titulo` ("Dr."/"Dra."), `nome`, `iniciais`, `especialidadeLinha`, `crm`
   - `contato` → WhatsApp (só números com 55 + DDD), telefone, Instagram, e-mail
   - `seo` → título da aba e descrição para o Google
   - `hero`, `sobre`, `servicos`, `sintomas`, `atendimento`, `diferenciais`, `faq`, `consultorio`
   - `cores` → se quiser outra identidade (o padrão é azul-marinho + dourado)
4. Logo: por padrão é gerado um monograma com as iniciais. Para usar um logo de verdade, preencha `logo.imagem` (versão escura) e `logo.imagemClara` (versão branca).

### Dicas

- `**texto**` deixa um trecho em **negrito**.
- `{whatsapp}` e `{telefone}` são trocados automaticamente pelo número do config.
- Cards de serviços, sintomas, perguntas e diferenciais: é só adicionar ou remover itens das listas.
- Se a foto de fundo do hero já tiver o médico (como uma foto profissional no consultório), deixe `hero.foto: ""`.
- Ícones disponíveis estão listados no final do `config.js`.

## Ver localmente

Abra `index.html` no navegador, ou rode:

```bash
python3 -m http.server 5510
```

e acesse http://localhost:5510.

## Publicar

É um site estático: suba a pasta em qualquer hospedagem (Vercel, Netlify, Hostinger, etc.).

> As fotos atuais são placeholders do Unsplash (licença livre) apenas para demonstração.
