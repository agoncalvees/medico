/* =====================================================================
   Template médico — monta a página a partir de js/config.js
   Não é necessário editar este arquivo para personalizar o site.
   ===================================================================== */
(function () {
  "use strict";

  const S = window.SITE;
  const $ = (sel) => document.querySelector(sel);

  /* ---------- Ícones (traço, estilo linha) ---------- */
  const ICONES = {
    coracao: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
    brilho: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z"/><path d="M5 3l.6 1.4L7 5l-1.4.6L5 7l-.6-1.4L3 5l1.4-.6Z"/>',
    raio: '<path d="M13 2 4 14h7l-1 8 9-12h-7Z"/>',
    escudo: '<path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z"/>',
    escudoCheck: '<path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    estetoscopio: '<path d="M5 3v6a5 5 0 0 0 10 0V3"/><path d="M10 14v2a5 5 0 0 0 10 0v-1"/><circle cx="20" cy="13" r="2"/><path d="M4 3h2M14 3h2"/>',
    bisturi: '<path d="M20 4 9 15l-3 1 1-3L18 2Z"/><path d="M7 16c-1 2-2.5 4-5 5"/>',
    regua: '<rect x="2" y="8" width="20" height="8" rx="1.5" transform="rotate(-30 12 12)"/><path d="m7.5 13.6 1-1.7M10.5 11.9l1.5-2.6M13.5 10.1l1-1.7M16.5 8.4l1.5-2.6"/>',
    alvo: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    pin: '<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/>',
    telefone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>',
    usuarioMais: '<circle cx="10" cy="7" r="4"/><path d="M2 21v-1a7 7 0 0 1 11-5.7"/><path d="M18 14v7M14.5 17.5h7"/>',
    monitor: '<rect x="3" y="3" width="18" height="13" rx="2"/><path d="M8 21h8M12 16v5"/><path d="M6 10h3l1.5-3 3 6 1.5-3h3"/>',
    maoCoracao: '<path d="M2 15h3l4 3h5a2 2 0 0 0 0-4h-3"/><path d="M5 15v6H2"/><path d="M14 14l5-2a2 2 0 0 1 1.6 3.6L14 20H8"/><path d="M15.5 8.5c.8-.8 1.5-1.6 1.5-2.7A2.6 2.6 0 0 0 14.4 3c-.9 0-1.4.3-2.1 1-.7-.7-1.2-1-2.1-1A2.6 2.6 0 0 0 7.6 5.8c0 1.1.7 1.9 1.5 2.7l3.2 3.2Z"/>',
    relogio: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    calendario: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    microscopio: '<path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
    gota: '<path d="M12 22a7 7 0 0 0 7-7c0-4-7-13-7-13S5 11 5 15a7 7 0 0 0 7 7Z"/>',
    pilula: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
    predio: '<path d="M4 22V6l8-4 8 4v16"/><path d="M9 22v-5h6v5M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/>',
    carro: '<path d="M5 17H3v-5l2-5h14l2 5v5h-2"/><circle cx="7.5" cy="17" r="2"/><circle cx="16.5" cy="17" r="2"/><path d="M9.5 17h5M3 12h18"/>',
    folha: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5-6"/>',
    seta: '<path d="m6 9 6 6 6-6"/>',
    instagram: '<rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r=".6" fill="currentColor"/>',
    whatsapp: '<path d="M3.5 20.5 4.8 16A8.5 8.5 0 1 1 8 19.2Z"/><path d="M9 8.6c.2-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.6l-.5.6c-.1.2-.1.4 0 .6.6 1 1.4 1.8 2.4 2.4.2.1.4.1.6 0l.6-.5c.2-.1.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.6-.6.8-.5.3-1.6.6-3.3-.2a9.4 9.4 0 0 1-4-4c-.8-1.7-.5-2.8-.2-3.3Z"/>',
    email: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  };
  const icone = (nome, extra = "") =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" ${extra}>${ICONES[nome] || ICONES.check}</svg>`;

  const WHATS_CHEIO = '<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.2.6 4.4 1.7 6.3L3.2 29l7.3-1.9c1.8 1 3.9 1.5 6 1.5 7 0 12.7-5.6 12.7-12.6S23 3 16 3Zm0 23.1c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.3 1.1 1.2-4.2-.3-.4a10.4 10.4 0 0 1-1.6-5.4C5.2 9.8 10 5.1 16 5.1s10.8 4.7 10.8 10.5S22 26.1 16 26.1Zm5.9-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.6 5.8 5.1 2.8 1.1 3.4.9 4 .8.6-.1 1.9-.8 2.2-1.6.3-.8.3-1.4.2-1.6-.1-.2-.3-.3-.6-.4Z"/></svg>';

  /* ---------- Utilitários ---------- */
  const md = (t) =>
    String(t)
      .replace(/\{whatsapp\}/g, S.contato.whatsappTexto)
      .replace(/\{telefone\}/g, S.contato.telefone)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const set = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };
  const nomeCompleto = `${S.medico.titulo} ${S.medico.nome}`;
  const linkWhats = `https://wa.me/${S.contato.whatsapp}?text=${encodeURIComponent(S.contato.mensagemWhatsapp)}`;
  const ini = (S.medico.iniciais || S.medico.nome.split(" ").map((p) => p[0]).join("").slice(0, 2)).toUpperCase();

  /* ---------- Monograma (gerado a partir das iniciais) ---------- */
  function monograma(cls = "logo__mono") {
    const tam = ini.length > 2 ? 15 : 19;
    return `<svg class="${cls}" viewBox="0 0 40 48" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
      <path d="M3 46V19A17 17 0 0 1 37 19v27"/>
      <path d="M7.5 46V19.5a12.5 12.5 0 0 1 25 0V46" stroke-width=".9"/>
      <text x="20" y="34" text-anchor="middle" font-family="Poppins, sans-serif" font-size="${tam}" font-weight="300" fill="currentColor" stroke="none" letter-spacing="-1">${ini}</text>
    </svg>`;
  }

  function logo(variante) {
    const claro = variante !== "escuro";
    const img = claro ? S.logo.imagemClara || S.logo.imagem : S.logo.imagem;
    const cls = `logo ${claro ? "logo--claro" : ""} ${variante === "grande" ? "logo--grande" : ""}`;
    if (img) return `<span class="${cls}"><img src="${img}" alt="${nomeCompleto}"></span>`;
    return `<span class="${cls}">${monograma()}<span><span class="logo__nome">${S.medico.nome}</span><span class="logo__esp" style="display:block">${S.medico.especialidadeLinha}</span></span></span>`;
  }

  /* ---------- Cores + textura ---------- */
  function aplicarCores() {
    const c = S.cores, r = document.documentElement.style;
    const mapa = { primaria: "--primaria", primariaEscura: "--primaria-escura", primariaClara: "--primaria-clara", destaque: "--destaque", creme: "--creme", fundoSuave: "--fundo-suave", rodape: "--rodape" };
    Object.keys(mapa).forEach((k) => c[k] && r.setProperty(mapa[k], c[k]));

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="132" height="150" viewBox="0 0 132 150" fill="none" stroke="#fff" stroke-width="5">
      <path d="M10 150V62a56 56 0 0 1 112 0v88"/><path d="M28 150V64a38 38 0 0 1 76 0v86" stroke-width="3"/>
      <text x="66" y="118" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-size="${ini.length > 2 ? 38 : 50}" font-weight="300" fill="#fff" stroke="none">${ini}</text></svg>`;
    document.querySelectorAll(".textura").forEach((el) => {
      el.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
    });
  }

  /* ---------- Render das seções ---------- */
  function render() {
    document.title = S.seo.tituloPagina;
    document.querySelector('meta[name="description"]').setAttribute("content", S.seo.descricao);

    // Header
    set("#menu", S.menu.map((m) => `<a href="${m.alvo}">${m.texto}</a>`).join(""));
    set("#menu-mobile", S.menu.map((m) => `<a href="${m.alvo}">${m.texto}</a>`).join("") + `<a href="${linkWhats}" target="_blank" rel="noopener"><strong>Agendar Consulta</strong></a>`);
    set("#logo-topo", logo("escuro"));
    const insta = $("#link-instagram");
    if (S.contato.instagram) { insta.href = S.contato.instagram; insta.innerHTML = icone("instagram"); } else insta.remove();
    set("#link-whats-topo", icone("whatsapp"));

    // Hero
    $("#hero-fundo").style.backgroundImage = `url("${S.hero.fundo}")`;
    const hf = $("#hero-foto");
    if (S.hero.foto) { hf.src = S.hero.foto; hf.alt = nomeCompleto; } else hf.remove();
    set("#logo-hero", logo("grande"));
    set("#hero-titulo", S.hero.titulo);
    set("#hero-subtitulo", md(S.hero.subtitulo));
    set("#hero-botao", S.hero.botao);
    const faixa = S.hero.faixa.map((t) => `<span>${t}</span>`).join("");
    set("#hero-faixa", faixa + faixa);

    // Sobre
    $("#sobre-foto").src = S.sobre.foto;
    $("#sobre-foto").alt = nomeCompleto;
    set("#sobre-etiqueta", S.sobre.etiqueta);
    set("#sobre-nome", nomeCompleto);
    set("#sobre-paragrafos", S.sobre.paragrafos.map((p) => `<p>${md(p)}</p>`).join(""));
    set("#sobre-botao", S.sobre.botao);

    // Serviços
    set("#servicos-etiqueta", S.servicos.etiqueta);
    set("#servicos-titulo", S.servicos.titulo);
    set("#servicos-grid", S.servicos.itens.map((s) => `
      <article class="card-servico revelar">
        <div class="card-servico__img">
          <img src="${s.imagem}" alt="${s.titulo}" loading="lazy">
          <span class="card-servico__icone">${icone(s.icone)}</span>
        </div>
        <div class="card-servico__corpo">
          <h3>${s.titulo}</h3>
          <p class="card-servico__sub">${s.subtitulo}</p>
          <p class="card-servico__texto">${md(s.texto)}</p>
          <a class="btn btn--creme" href="${linkServico(s.titulo)}" target="_blank" rel="noopener">${S.servicos.botaoCard}</a>
        </div>
      </article>`).join(""));

    // Sintomas
    set("#sintomas-titulo", S.sintomas.tituloHTML);
    $("#sintomas-foto").src = S.sintomas.foto;
    $("#sintomas-foto").alt = nomeCompleto;
    set("#sintomas-lista", S.sintomas.itens.map((t) => `<li class="sintomas__item">${icone("check")}<span>${t}</span></li>`).join(""));
    document.querySelectorAll(".sintomas__marca").forEach((el) => (el.innerHTML = monograma("")));

    // Onde me encontra
    set("#atendimento-etiqueta", S.atendimento.etiqueta);
    set("#atendimento-titulo", S.atendimento.titulo);
    set("#atendimento-subtitulo", S.atendimento.subtitulo);
    set("#atendimento-cards", S.atendimento.cards.map((c) => `
      <div class="card-local revelar">
        <div class="card-local__icone">${icone(c.icone)}</div>
        <h3>${c.titulo}</h3>
        <p>${c.linhas.map(md).join("<br>")}</p>
        ${c.botao ? `<a class="btn btn--primario" href="${linkWhats}" target="_blank" rel="noopener">${c.botao}</a>` : ""}
      </div>`).join(""));

    // Diferenciais
    set("#diferenciais-etiqueta", S.diferenciais.etiqueta);
    set("#diferenciais-titulo", S.diferenciais.tituloHTML);
    set("#diferenciais-subtitulo", S.diferenciais.subtitulo);
    set("#diferenciais-cards", S.diferenciais.itens.map((d) => `
      <div class="card-dif revelar">
        <div class="card-dif__topo">
          <span class="card-dif__icone">${icone(d.icone)}</span>
          <span class="card-dif__selo"><b>${d.selo}</b><small>${d.seloLegenda}</small></span>
        </div>
        <h3>${d.titulo}</h3>
        <p>${md(d.texto)}</p>
      </div>`).join(""));

    // FAQ
    set("#faq-titulo", S.faq.tituloHTML);
    set("#faq-subtitulo", S.faq.subtitulo);
    set("#faq-lista", S.faq.itens.map((f, i) => `
      <div class="faq__item revelar">
        <button class="faq__pergunta" aria-expanded="false" aria-controls="faq-r${i}" id="faq-p${i}">
          <span>${f.p}</span><span class="faq__seta">${icone("seta", 'stroke-width="2.4"')}</span>
        </button>
        <div class="faq__resposta" id="faq-r${i}" role="region" aria-labelledby="faq-p${i}"><div><p>${md(f.r)}</p></div></div>
      </div>`).join(""));
    set("#faq-caixa-titulo", S.faq.caixaTitulo);
    set("#faq-caixa-texto", S.faq.caixaTexto);
    set("#faq-caixa-botao", S.faq.caixaBotao);

    // Consultório
    const c = S.consultorio;
    set("#consultorio-etiqueta", c.etiqueta);
    set("#consultorio-titulo", c.tituloHTML);
    set("#consultorio-subtitulo", c.subtitulo);
    set("#consultorio-endereco", c.endereco.map(md).join("<br>"));
    set("#consultorio-contato", c.contato.map(md).join("<br>"));
    set("#consultorio-facilidades", c.facilidades.map(md).join("<br>"));
    set("#consultorio-botao", icone("pin") + c.botao);
    const q = encodeURIComponent(c.endereco.join(", "));
    $("#link-maps").href = `https://www.google.com/maps/search/?api=1&query=${q}`;
    $("#link-waze").href = `https://waze.com/ul?q=${q}&navigate=yes`;
    $("#mapa").src = `https://www.google.com/maps?q=${encodeURIComponent(c.enderecoMapa || c.endereco.join(", "))}&output=embed`;
    document.querySelectorAll("[data-icone]").forEach((el) => (el.innerHTML = icone(el.dataset.icone)));

    // Rodapé
    set("#logo-rodape", logo("claro"));
    set("#rodape-frase", S.rodape.frase);
    set("#rodape-nav", `<h4>Navegação</h4><ul>${S.menu.map((m) => `<li><a href="${m.alvo}">${m.texto}</a></li>`).join("")}</ul>`);
    const contatos = [
      `<li>${icone("whatsapp")}<a href="${linkWhats}" target="_blank" rel="noopener">${S.contato.whatsappTexto}</a></li>`,
      S.contato.email ? `<li>${icone("email")}<a href="mailto:${S.contato.email}">${S.contato.email}</a></li>` : "",
      S.contato.instagram ? `<li>${icone("instagram")}<a href="${S.contato.instagram}" target="_blank" rel="noopener">Instagram</a></li>` : "",
      `<li>${icone("pin")}<span>${c.endereco.slice(1).join(" · ")}</span></li>`,
    ].join("");
    set("#rodape-contato", `<h4>Contato</h4><ul>${contatos}</ul>`);
    set("#rodape-copy", `© ${new Date().getFullYear()} ${nomeCompleto}${S.medico.crm ? " · " + S.medico.crm : ""}`);
    const cred = S.rodape.creditos
      ? (S.rodape.creditosLink ? `<a href="${S.rodape.creditosLink}" target="_blank" rel="noopener">${S.rodape.creditos}</a>` : S.rodape.creditos)
      : "";
    set("#rodape-creditos", cred);

    // WhatsApp
    set("#whats-flutuante", WHATS_CHEIO);
    document.querySelectorAll("[data-whats]").forEach((a) => (a.href = linkWhats));
  }

  function linkServico(titulo) {
    const msg = `Olá! Vim pelo site e gostaria de saber mais sobre ${titulo}.`;
    return `https://wa.me/${S.contato.whatsapp}?text=${encodeURIComponent(msg)}`;
  }

  /* ---------- Diagrama de sintomas (desktop) ---------- */
  function posicionarSintomas() {
    const box = $("#sintomas-diagrama");
    const svg = $("#sintomas-linhas");
    const itens = [...document.querySelectorAll(".sintomas__item")];
    if (window.innerWidth <= 1080) {
      itens.forEach((el) => { el.style.left = el.style.top = ""; });
      svg.innerHTML = "";
      return;
    }
    const W = box.clientWidth, H = box.clientHeight;
    const cx = W / 2, cy = H / 2;
    const r = $("#sintomas-foto-wrap").offsetWidth / 2;
    const n = itens.length;
    let linhas = "";
    itens.forEach((el, i) => {
      const w = el.offsetWidth, h = el.offsetHeight;
      const ang = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      const rx = W / 2 - w / 2 - 10;
      const ry = H / 2 - h / 2 - 12;
      const x = cx + rx * Math.cos(ang), y = cy + ry * Math.sin(ang);
      el.style.left = `${x - w / 2}px`;
      el.style.top = `${y - h / 2}px`;
      // linha da borda da foto até a borda do card
      const dx = cx - x, dy = cy - y, dist = Math.hypot(dx, dy);
      const t = Math.min(Math.abs(w / 2 / (dx || 1e-6)), Math.abs(h / 2 / (dy || 1e-6)));
      const ex = x + dx * t, ey = y + dy * t;
      const sx = cx - (dx / dist) * (r + 4), sy = cy - (dy / dist) * (r + 4);
      linhas += `<line x1="${sx}" y1="${sy}" x2="${ex}" y2="${ey}"/><circle cx="${ex}" cy="${ey}" r="2.5"/>`;
    });
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.innerHTML = linhas;
  }

  /* ---------- Interações ---------- */
  function interacoes() {
    // FAQ
    document.querySelectorAll(".faq__pergunta").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const aberto = item.classList.toggle("aberto");
        btn.setAttribute("aria-expanded", aberto);
      });
    });

    // Menu mobile
    const burger = $("#burger"), menu = $("#menu-mobile");
    burger.addEventListener("click", () => {
      const aberto = menu.classList.toggle("aberto");
      burger.setAttribute("aria-expanded", aberto);
    });
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) { menu.classList.remove("aberto"); burger.setAttribute("aria-expanded", false); }
    });

    // Animação de entrada
    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visivel"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".revelar").forEach((el) => io.observe(el));

    // Sintomas
    posicionarSintomas();
    let t;
    window.addEventListener("resize", () => { clearTimeout(t); t = setTimeout(posicionarSintomas, 120); });
    if (document.fonts) document.fonts.ready.then(posicionarSintomas);
  }

  aplicarCores();
  render();
  interacoes();
})();
