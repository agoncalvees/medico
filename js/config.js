/* =====================================================================
   CONFIGURAÇÃO DO SITE — ÚNICO ARQUIVO QUE PRECISA SER EDITADO
   ---------------------------------------------------------------------
   • Troque textos, fotos, contatos e cores aqui. O resto se ajusta sozinho.
   • Use **texto** para deixar um trecho em negrito.
   • Fotos: coloque os arquivos na pasta /img e aponte o caminho abaixo.
   • Ícones disponíveis: veja a lista em ICONES no final do arquivo.
   ===================================================================== */

window.SITE = {
  /* ---------- Identidade ---------- */
  medico: {
    titulo: "Dr.",                         // "Dr." ou "Dra."
    nome: "Rafael Mendes",                 // nome curto usado no site
    iniciais: "RM",                        // usadas no monograma/logo e na textura de fundo
    especialidadeLinha: "Urologia | Andrologia | Saúde Masculina", // linha abaixo do nome no logo
    crm: "CRM-PR 00000 | RQE 00000",       // aparece no rodapé (deixe "" para ocultar)
  },

  /* Logo: deixe imagem "" para usar o monograma automático com as iniciais.
     Para usar um logo próprio: imagem: "img/logo.png" e imagemClara: "img/logo-branco.png" */
  logo: {
    imagem: "",
    imagemClara: "",
  },

  /* ---------- Cores (identidade visual) ---------- */
  cores: {
    primaria: "#173a5e",       // azul-marinho principal (botões, títulos)
    primariaEscura: "#0f2740", // fundo das seções escuras
    primariaClara: "#245a8a",  // detalhes / degradês
    destaque: "#b9853a",       // dourado (ícones, linhas finas)
    creme: "#f7e6cf",          // botões claros ("Saiba mais")
    fundoSuave: "#fbf5ef",     // fundo bege das seções claras
    rodape: "#06111f",         // fundo do rodapé
  },

  /* ---------- Contato ---------- */
  contato: {
    whatsapp: "5541999999999",             // só números, com DDI 55 + DDD
    whatsappTexto: "(41) 99999-9999",      // como aparece escrito no site
    mensagemWhatsapp: "Olá! Vim pelo site e gostaria de agendar uma consulta.",
    telefone: "(41) 99999-9999",
    instagram: "https://instagram.com/",   // deixe "" para ocultar o ícone
    email: "contato@seudominio.com.br",    // deixe "" para ocultar
  },

  /* ---------- SEO ---------- */
  seo: {
    tituloPagina: "Dr. Rafael Mendes | Urologista e Andrologista em Curitiba - PR",
    descricao: "Urologista e andrologista em Curitiba. Saúde sexual masculina, reposição hormonal, estética íntima, fertilidade e cirurgias minimamente invasivas.",
  },

  /* ---------- Menu do topo ---------- */
  menu: [
    { texto: "Quem Sou Eu", alvo: "#sobre" },
    { texto: "O Que Eu Resolvo", alvo: "#servicos" },
    { texto: "Diferenciais", alvo: "#diferenciais" },
    { texto: "Dúvidas", alvo: "#faq" },
    { texto: "Consultório", alvo: "#consultorio" },
  ],

  /* ---------- Hero (primeira dobra) ---------- */
  hero: {
    fundo: "img/hero-fundo.jpg",     // foto do consultório (fica escurecida ao fundo)
    foto: "img/medico-hero.jpg",     // foto do médico (lado direito). Deixe "" se a foto de fundo já tiver o médico
    titulo: "Urologista e Andrologista em Curitiba - PR",
    subtitulo: "Especialista em Disfunção Erétil, Estética Íntima e Recuperação da Performance Masculina.",
    botao: "Agendar consulta",
    faixa: [                         // palavras que rolam no rodapé do hero
      "Infertilidade Masculina",
      "Estética Íntima Masculina",
      "Saúde Sexual e Reprodutiva",
      "Reposição Hormonal",
      "Queixas Sexuais",
      "Alta Performance",
    ],
  },

  /* ---------- Quem Sou Eu ---------- */
  sobre: {
    etiqueta: "Quem Sou Eu",
    foto: "img/medico-sobre.jpg",
    paragrafos: [
      "Com **10 anos de carreira**, sou formado pela **Universidade Federal do Paraná**, com residência em Cirurgia Geral e Urologia no **Hospital de Clínicas**, um dos principais centros cirúrgicos do país. Possuo também especialização (fellowship) em **Infertilidade Masculina**.",
      "Minha prática em Curitiba é focada em **saúde masculina, sexual e reprodutiva**, unindo recursos diagnósticos atuais a um atendimento humanizado. Acredito em um acompanhamento próximo, construindo uma relação de confiança para que cada paciente se sinta seguro em todas as etapas do tratamento.",
      "Atuo com experiência em **cirurgias minimamente invasivas, estética íntima e saúde hormonal**, sempre com o propósito de devolver a autoestima e a qualidade de vida aos meus pacientes.",
    ],
    botao: "Agendar consulta",
  },

  /* ---------- O Que Eu Resolvo (cards) ---------- */
  servicos: {
    etiqueta: "O Que Eu Resolvo",
    titulo: "Principais problemas que resolvo no consultório",
    botaoCard: "Saiba mais",
    itens: [
      {
        imagem: "img/servicos/01.jpg", icone: "coracao",
        titulo: "Saúde Sexual Masculina", subtitulo: "Disfunção Erétil e Libido",
        texto: "Abordagem moderna para **disfunção erétil, ejaculação precoce e falta de libido**, com protocolos personalizados para recuperar sua performance.",
      },
      {
        imagem: "img/servicos/02.jpg", icone: "brilho",
        titulo: "Estética Íntima Masculina", subtitulo: "Engrossamento e Calibre",
        texto: "Protocolos de **bioplastia e engrossamento peniano** com ácido hialurônico, com avaliação prévia e alinhamento de expectativas em consulta.",
      },
      {
        imagem: "img/servicos/03.jpg", icone: "raio",
        titulo: "Reposição de Testosterona", subtitulo: "Otimização Hormonal",
        texto: "Reposição hormonal feita de forma **segura, ética e baseada na sua individualidade**, com foco na sua qualidade de vida.",
      },
      {
        imagem: "img/servicos/04.jpg", icone: "escudo",
        titulo: "Redução de Danos", subtitulo: "Uso de Esteroides",
        texto: "Suporte especializado para homens que usam **anabolizantes**, com foco na proteção da saúde e na recuperação do eixo hormonal.",
      },
      {
        imagem: "img/servicos/05.jpg", icone: "estetoscopio",
        titulo: "Reabilitação Peniana", subtitulo: "Pós-Câncer de Próstata",
        texto: "Protocolos de **reabilitação pré e pós-tratamento** do câncer de próstata, preservando a função sexual e a qualidade de vida.",
      },
      {
        imagem: "img/servicos/06.jpg", icone: "bisturi",
        titulo: "Cirurgias Minimamente Invasivas", subtitulo: "Fimose e Vasectomia",
        texto: "Técnicas modernas com **recuperação rápida e sem cortes extensos**, alta no mesmo dia e retorno precoce às atividades.",
      },
      {
        imagem: "img/servicos/07.jpg", icone: "regua",
        titulo: "Doença de Peyronie", subtitulo: "Tortuosidade Peniana",
        texto: "Tratamento especializado para **curvatura e tortuosidade peniana**, com correção estética e funcional para o conforto do paciente.",
      },
      {
        imagem: "img/servicos/08.jpg", icone: "alvo",
        titulo: "Fertilidade e Varicocele", subtitulo: "Tratamento Microcirúrgico",
        texto: "Investigação da infertilidade e **correção de varicocele por microcirurgia**, técnica padrão-ouro para melhorar a qualidade do sêmen.",
      },
      {
        imagem: "img/servicos/09.jpg", icone: "escudoCheck",
        titulo: "Tratamento Avançado da Próstata", subtitulo: "Sem Cortes",
        texto: "**Enucleação a laser (HoLEP)**, laser Greenlight e ressecção endoscópica para um tratamento seguro e eficaz.",
      },
    ],
  },

  /* ---------- Sintomas (diagrama em volta da foto) ---------- */
  sintomas: {
    tituloHTML: "<strong>Sintomas</strong> para procurar um <strong>Urologista:</strong>",
    foto: "img/medico-sintomas.jpg",
    itens: [ // ideal: 8 itens (funciona de 4 a 10)
      "Dificuldade para obter ou manter a ereção",
      "Reposição hormonal de forma segura",
      "Fimose: cirurgia moderna e sem pontos tradicionais",
      "Desejo por uma vasectomia segura e sem bisturi",
      "Queda de performance após uso de anabolizantes",
      "Insatisfação com o tamanho ou volume íntimo",
      "Dificuldade para engravidar a parceira",
      "Baixa libido e queda do desejo sexual",
      "Ejaculação precoce e insegurança na relação",
    ],
  },

  /* ---------- Onde Você Me Encontra ---------- */
  atendimento: {
    etiqueta: "Atendimento",
    titulo: "Onde Você Me Encontra",
    subtitulo: "Informações sobre consultas e atendimento",
    cards: [
      {
        icone: "pin", titulo: "Consultório Presencial",
        linhas: ["**Clínica Exemplo**", "Rua Exemplo, 123", "Batel", "Curitiba - PR"],
      },
      {
        icone: "telefone", titulo: "Consultas Online",
        linhas: ["Atendimento também por **telemedicina** para sua comodidade, com a mesma qualidade do atendimento presencial."],
      },
      {
        icone: "usuarioMais", titulo: "Agendamento",
        linhas: ["WhatsApp: **{whatsapp}**", "Fale comigo diretamente para agendar sua consulta ou tirar dúvidas."],
        botao: "Fale comigo",
      },
    ],
  },

  /* ---------- Diferenciais ---------- */
  diferenciais: {
    etiqueta: "Meus Diferenciais",
    tituloHTML: "O que torna meu <strong>atendimento ÚNICO</strong>",
    subtitulo: "Experiência personalizada focada em resultados excepcionais",
    itens: [
      {
        icone: "usuarioMais", selo: "100%", seloLegenda: "Foco",
        titulo: "Atendimento Humanizado",
        texto: "Consultas com **tempo adequado para ouvir** e construir uma relação de confiança real, respeitando sua individualidade.",
      },
      {
        icone: "monitor", selo: "Top", seloLegenda: "Tecnologia",
        titulo: "Tecnologia de Vanguarda",
        texto: "Uso de **técnicas e equipamentos modernos** que reduzem o tempo cirúrgico e o desconforto no pós-operatório. A indicação é avaliada caso a caso.",
      },
      {
        icone: "maoCoracao", selo: "360°", seloLegenda: "Suporte",
        titulo: "Plano de Acompanhamento",
        texto: "Um planejamento que vai além da consulta, com suporte próximo ao longo dos meses para **garantir a adesão ao tratamento** e o sucesso.",
      },
    ],
  },

  /* ---------- Perguntas Frequentes ---------- */
  faq: {
    tituloHTML: "<strong>Perguntas</strong> frequentes",
    subtitulo: "Esclareça suas principais dúvidas sobre os tratamentos e procedimentos em Saúde Masculina",
    itens: [
      { p: "Aceita planos de saúde?", r: "O atendimento é particular. Emitimos nota fiscal e relatório para que você solicite reembolso junto ao seu plano de saúde, conforme as regras do seu contrato." },
      { p: "Qual a diferença entre Urologia Geral e Saúde Masculina?", r: "A Urologia Geral trata doenças do trato urinário de homens e mulheres. A Saúde Masculina (Andrologia) é focada na saúde sexual, reprodutiva e hormonal do homem, com uma abordagem mais aprofundada nesses temas." },
      { p: "Como funciona a reposição de testosterona?", r: "Após avaliação clínica e exames laboratoriais, definimos se há indicação e qual a melhor forma de reposição (gel, injetável ou implante), com acompanhamento periódico para garantir segurança e resultado." },
      { p: "Você faz acompanhamento para quem usou anabolizantes?", r: "Sim. Oferecemos acompanhamento sem julgamentos, focado em reduzir riscos, proteger a fertilidade e recuperar o eixo hormonal natural." },
      { p: "O aumento peniano com ácido hialurônico é seguro?", r: "Quando realizado por especialista, com produto adequado e técnica correta, é um procedimento seguro. Todos os riscos e expectativas são discutidos em consulta antes de qualquer indicação." },
      { p: "A vasectomia é reversível?", r: "Existe a cirurgia de reversão, porém o sucesso não é garantido. Por isso, a vasectomia deve ser considerada um método definitivo e a decisão é bem conversada em consulta." },
      { p: "A cirurgia de próstata afeta a função sexual?", r: "Depende da técnica e do quadro de cada paciente. As técnicas modernas buscam preservar ao máximo a função sexual, e há protocolos de reabilitação quando necessário." },
    ],
    caixaTitulo: "Ainda tem dúvidas?",
    caixaTexto: "Entre em contato e esclareça todas as suas questões em uma consulta personalizada",
    caixaBotao: "Fale comigo!",
  },

  /* ---------- Nosso Consultório ---------- */
  consultorio: {
    etiqueta: "Localização",
    tituloHTML: "Nosso <strong>consultório</strong>",
    subtitulo: "Localizado em uma região nobre de Curitiba, com infraestrutura moderna e estacionamento",
    endereco: ["Clínica Exemplo", "Rua Exemplo, 123", "Batel, Curitiba - PR", "CEP 80000-000"],
    enderecoMapa: "Batel, Curitiba - PR",   // texto usado para o mapa / Google Maps / Waze
    contato: ["Telefone: {telefone}", "WhatsApp disponível", "Atendimento humanizado"],
    facilidades: ["Estacionamento disponível", "Fácil acesso", "Ambiente climatizado"],
    botao: "Agendar consulta",
  },

  /* ---------- Rodapé ---------- */
  rodape: {
    frase: "Cuidado especializado em saúde masculina, com ética, ciência e atendimento humanizado.",
    creditos: "Desenvolvido por agoncalves",       // deixe "" para ocultar
    creditosLink: "https://www.instagram.com/arthurgoncalvees",
  },
};

/* Ícones disponíveis:
   coracao, brilho, raio, escudo, escudoCheck, estetoscopio, bisturi, regua, alvo,
   pin, telefone, usuarioMais, monitor, maoCoracao, relogio, calendario, microscopio,
   gota, pilula, check, predio, carro, folha */
