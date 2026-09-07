/* ============================================================
   CONTEÚDO EDITÁVEL DO SITE — Animali
   Altere apenas este arquivo para trocar as campanhas do mês
   e os vídeos do Instagram. Não precisa mexer no index.html.
   ============================================================ */

/* ---------- CAMPANHAS / AÇÕES DO MÊS ----------
   selo:     etiqueta no topo do card (ex: "CONSCIENTIZAÇÃO")
   cor:      'roxo' | 'turquesa' | 'ameixa'
   titulo:   chamada principal
   texto:    explicação curta
   condicao: letra miúda (validade, regras) — opcional
   botao:    texto do botão
   msg:      mensagem que vai pré-preenchida no WhatsApp
   img:      URL da imagem (trocar pelas fotos reais do cliente)

   Baseado nas campanhas reais vistas no @animalicg (Setembro Amarelo,
   Agosto Verde-Claro contra Leishmaniose). Ajustar título/texto/condição
   com o cliente todo mês.
---------------------------------------------------- */
const CAMPANHAS = [
  {
    selo: 'CONSCIENTIZAÇÃO',
    cor: 'roxo',
    titulo: 'Setembro Amarelo: cuide da saúde emocional de quem cuida de você',
    texto: 'O amor de quatro patas também ajuda a cuidar da mente. Um mês pra lembrar que buscar ajuda é sinal de força.',
    condicao: 'Ação de conscientização — não é uma promoção de serviço.',
    botao: 'Falar com a Animali',
    msg: 'Olá! Vi a postagem sobre o Setembro Amarelo no perfil da Animali.',
    img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=70',
  },
  {
    selo: 'PREVENÇÃO',
    cor: 'turquesa',
    titulo: 'Agosto Verde-Claro: combate à Leishmaniose',
    texto: 'Exames preventivos e orientação sobre a doença que mais preocupa tutores de cães em Campina Grande.',
    condicao: 'Consulte a equipe sobre exames e prevenção para o seu pet.',
    botao: 'Agendar avaliação',
    msg: 'Olá! Vi no site sobre a campanha de prevenção à Leishmaniose e queria agendar uma avaliação.',
    img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=70',
  },
  {
    selo: 'EXAME',
    cor: 'ameixa',
    titulo: 'Coleta de sangue com o mínimo de estresse',
    texto: 'Manejo cuidadoso para que o exame do seu pet seja rápido, tranquilo e sem trauma — do jeitinho que a Animali faz.',
    condicao: 'Agende por WhatsApp e traga o pedido do exame, se tiver.',
    botao: 'Agendar exame',
    msg: 'Olá! Vi no site sobre a coleta de sangue e queria agendar um exame para o meu pet.',
    img: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=800&q=70',
  },
];

/* ---------- VÍDEOS DO INSTAGRAM ----------
   Os vídeos tocam direto no site (arquivo local em assets/videos/),
   em loop, mudo e sem foto de capa — a pessoa clica pra ativar o som.
   `reel` é só o código do post, usado no link "Ver no Instagram".

   Pra trocar/adicionar um vídeo: baixe o .mp4 do reel, salve em
   assets/videos/ e aponte o `src` pra ele.
------------------------------------------- */
const VIDEOS = [
  {
    reel: 'DaiUnSnhwIO',
    src: '/assets/videos/cuidado-especializado.mp4',
    titulo: 'Cuidado especializado',
    legenda: 'Conheça a nossa equipe',
  },
  {
    reel: 'DaTR800xZbY',
    src: '/assets/videos/coleta-de-sangue.mp4',
    titulo: 'Coleta de sangue',
    legenda: 'Com o mínimo de estresse',
  },
  {
    reel: 'DcR4xt7sh-F',
    src: '/assets/videos/reel-novo.mp4',
    titulo: 'Direto da Animali', // ajustar título/legenda pelo conteúdo real do vídeo
    legenda: 'Mais um pouco do nosso dia a dia',
  },
];
