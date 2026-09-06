# Animali — Especialidades Veterinárias

Site institucional da **Animali Clínica e Pet Shop**, de Campina Grande — PB (@animalicg).
HTML estático + Tailwind (via CDN), sem build. É só abrir o `index.html`.

Baseado na mesma estrutura do site do [Estéticão](../esteticao-site), com cores e conteúdo
adaptados pra Animali.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | O site inteiro (uma página só, com âncoras) |
| `conteudo.js` | **Conteúdo editável**: ações/campanhas do mês e vídeos do Instagram |
| `assets/` | Imagens do projeto (screenshot do logo real do Instagram) |

## Como atualizar o conteúdo

Quase tudo que muda com frequência está no `conteudo.js` — não precisa mexer no HTML.

### Ações do mês (`CAMPANHAS`)
Cada card tem selo, título, texto, condição (letra miúda) e a mensagem que vai
pré-preenchida no WhatsApp. Cores disponíveis: `roxo`, `turquesa` e `ameixa`.

### Vídeos do Instagram (`VIDEOS`)
Informe o **código do reel** no campo `reel` para o vídeo tocar dentro do site.
Sem esse campo, o card apenas abre o Instagram (é o caso de todos os cards hoje,
veja pendências abaixo).

## Diferenças em relação ao site do Estéticão

- **Uma unidade só** (não 3): o modal de contato não pede pra escolher unidade,
  já abre direto o WhatsApp único da clínica.
- **Badge "aberto agora" calculado de verdade**: como a Animali não funciona 24h,
  o selo de status lê o horário do computador de quem acessa e mostra "aberto" ou
  "fechado" com base no horário real (Seg-Sex 8h-18h, Sáb 8h-15h).
- Seção "Destaques do mês" virou **"Ações e conscientização do mês"**, porque não
  levantamos nenhuma promoção real da Animali — só campanhas de conscientização
  (Setembro Amarelo, Agosto Verde-Claro) que aparecem no Instagram dela.

## O que foi levantado com dado real (Instagram, Linktree e Google Maps)

- Nome do perfil: **ANIMALI - Clinica e Pet Shop** (bio: "Especialidades Veterinárias")
- Instagram: [@animalicg](https://www.instagram.com/animalicg/) — ~5,5 mil seguidores
- Horário (da bio do Instagram): Segunda a Sexta 8h–18h, Sábado 8h–15h
- WhatsApp (link direto da bio/Linktree): `wa.me/message/VCOZ5ABIVDVZJ1`
- Bairro: Jardim Tavares, Campina Grande — PB, CEP 58402-045 (via coordenadas do
  link do Google Maps do Linktree, reverse-geocoded)
- Equipe (fotos "Conheça Dra ___" no feed): Dra. Jássia Meneses, Dra. Paula Peixoto,
  Dra. Tereza Rotondano
- Categorias em destaque no perfil: Veterinários, Produtos, Clientes, Reprodução
  (Canina/Felina), Cirurgia
- Posts reais que viraram conteúdo do site: campanha "Coleta de sangue com o mínimo
  de estresse", "Setembro Amarelo", "Agosto Verde-Claro" (combate à Leishmaniose)

## Pendências (precisam do cliente)

- [ ] **Endereço exato** — só temos o bairro/CEP via coordenadas do Maps; falta rua e número confirmados
- [ ] **Telefone/tel: da clínica** — só temos o link de WhatsApp ofuscado (`wa.me/message/...`), não o número
- [ ] **Logo em PNG/SVG** — hoje é uma aproximação em SVG feita à mão; o original está em `assets/logo-original-screenshot.png`
- [ ] **Cores exatas da marca** — estimadas visualmente a partir do print do logo (roxo/magenta + turquesa); confirmar hex reais se o cliente tiver o arquivo de marca
- [ ] **Fotos reais** — todas as imagens hoje são de banco de imagens, incluindo as fotos da equipe
- [ ] **Especialidade de cada veterinária** — só temos os nomes, não a especialidade de cada uma
- [ ] **Depoimentos reais** — os atuais são exemplos (a Animali tem destaque "Clientes" no Instagram com material real)
- [ ] **Códigos de reel reais** — 2 dos 4 cards já usam reels reais (`DaiUnSnhwIO`, `DaTR800xZbY`); os outros 2 ainda só abrem o Instagram
- [ ] **Domínio do site** — usamos `animalicg.com.br` como placeholder no canonical/schema; confirmar domínio real
- [ ] **Respostas do FAQ** — confirmar preços, formas de pagamento e regras

Tudo que é exemplo está marcado com ⚠️ no próprio site.
