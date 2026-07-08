// ============================================================
//  EMAILJS CONFIG — CBL-FB
// ============================================================
const EMAILJS_SERVICE_ID  = 'service_vexb3qi';
const EMAILJS_TEMPLATE_ID = 'template_t3bv7dn';

// ============================================================
//  CURSOS CBL-FB — preços baseados no mercado angolano
//  (referência: EDACO, INED, plataformas nacionais 2024/25)
//  Cursos de 8h:  12.000–18.000 Kz
//  Cursos de 16h: 20.000–28.000 Kz
//  Cursos de 24h: 30.000–40.000 Kz
//  Cursos de 32h: 40.000–50.000 Kz
//  Cursos de 40h: 55.000–75.000 Kz
// ============================================================
const courses=[
  {
    id:1,cat:'hst',tag:'HST',
    title:'Higiene e Segurança no Trabalho',
    desc:'Formação completa em HST para profissionais de qualquer setor, cobrindo prevenção de acidentes, saúde ocupacional e cumprimento das normas legais angolanas.',
    duration:'40h',level:'Básico ao Avançado',price:'65.000 Kz',cert:'Certificado HST',
    img:'imagens/course_1.jpg',
  },
  {
    id:2,cat:'hst',tag:'HST',
    title:'Básico de Segurança e Meio Ambiente',
    desc:'Formação técnica introdutória para setores industriais, com ênfase no uso correto de EPIs, procedimentos de emergência e proteção ambiental.',
    duration:'24h',level:'Básico',price:'35.000 Kz',cert:'Certificado',
    img:'imagens/course_2.jpg',
  },
  {
    id:3,cat:'hst',tag:'HST',
    title:'Análise de Perigos no Trabalho',
    desc:'Metodologias técnicas de identificação e avaliação de perigos (JHA/JSA), com elaboração de planos de controlo de riscos profissionais.',
    duration:'16h',level:'Intermédio',price:'24.000 Kz',cert:'Certificado',
    img:'imagens/course_3.jpg',
  },
  {
    id:4,cat:'hst',tag:'HST',
    title:'Investigação de Acidentes',
    desc:'Técnicas de investigação de acidentes laborais, análise de causas raiz, método dos 5 Porquês e elaboração de relatórios técnicos.',
    duration:'16h',level:'Intermédio',price:'24.000 Kz',cert:'Certificado',
    img:'imagens/course_4.jpg',
  },
  {
    id:5,cat:'hst',tag:'HST',
    title:'Bloqueio e Etiquetagem (LOTO)',
    desc:'Procedimentos de bloqueio e etiquetagem para controlo seguro de energias perigosas durante operações de manutenção industrial.',
    duration:'8h',level:'Básico',price:'15.000 Kz',cert:'Certificado',
    img:'imagens/course_5.jpg',
  },
  {
    id:6,cat:'hst',tag:'HST',
    title:'Auditorias e Ações Corretivas',
    desc:'Planeamento e condução de auditorias internas de HST, identificação de não conformidades e implementação de ações corretivas eficazes.',
    duration:'24h',level:'Avançado',price:'38.000 Kz',cert:'Certificado de Auditor',
    img:'imagens/course_6.jpg',
  },
  {
    id:7,cat:'hst',tag:'HST',
    title:'Comunicação de Perigos',
    desc:'Sistema GHS/SGA de classificação e rotulagem de substâncias perigosas, leitura de Fichas de Dados de Segurança e armazenamento seguro.',
    duration:'8h',level:'Básico',price:'15.000 Kz',cert:'Certificado',
    img:'imagens/course_7.jpg',
  },
  {
    id:8,cat:'hes',tag:'Emergências HES',
    title:'Primeiros Socorros',
    desc:'Formação prática e teórica em primeiros socorros, capacitando profissionais a responder eficazmente a emergências médicas no local de trabalho.',
    duration:'16h',level:'Básico',price:'22.000 Kz',cert:'Certificado HES',
    img:'imagens/course_8.jpg',
  },
  {
    id:9,cat:'hes',tag:'Emergências HES',
    title:'Primeiros Socorros Avançados',
    desc:'Técnicas avançadas de suporte à vida, gestão de trauma e triagem de múltiplas vítimas em ambiente industrial e de alta complexidade.',
    duration:'32h',level:'Avançado',price:'45.000 Kz',cert:'Certificado HES Avançado',
    img:'imagens/course_9.jpg',
  },
  {
    id:10,cat:'hes',tag:'Emergências HES',
    title:'H2S / SCBA',
    desc:'Capacitação para trabalho em atmosferas com gás sulfídrico (H2S), com treino prático no uso, calibração e manutenção de equipamentos SCBA.',
    duration:'16h',level:'Intermédio',price:'32.000 Kz',cert:'Certificado H2S/SCBA',
    img:'imagens/course_10.jpg',
  },
  {
    id:11,cat:'hes',tag:'Emergências HES',
    title:'Segurança de Químicos no Laboratório',
    desc:'Manuseamento seguro de substâncias químicas em laboratório, resposta a derrames, uso de EPIs específicos e procedimentos de emergência.',
    duration:'24h',level:'Intermédio',price:'32.000 Kz',cert:'Certificado',
    img:'imagens/course_11.jpg',
  },
  {
    id:12,cat:'hes',tag:'Emergências HES',
    title:'Detetor de MSA Multi Gás',
    desc:'Operação, calibração e manutenção de detetores de múltiplos gases MSA — equipamento crítico para trabalhos em espaços confinados e ambientes industriais.',
    duration:'8h',level:'Básico',price:'18.000 Kz',cert:'Certificado',
    img:'imagens/course_12.jpg',
  },
  {
    id:13,cat:'hes',tag:'Emergências HES',
    title:'Lingador & Sinaleiro',
    desc:'Técnicas de lingagem e sinalização para operações de elevação segura em estaleiros, plataformas industriais e ambientes offshore.',
    duration:'16h',level:'Básico',price:'24.000 Kz',cert:'Certificado',
    img:'imagens/course_13.jpg',
  },
  {
    id:14,cat:'hes',tag:'Emergências HES',
    title:'Derrames de Petróleo Bruto',
    desc:'Resposta a derrames de petróleo e hidrocarbonetos: contenção, limpeza, proteção ambiental e conformidade regulatória angolana e internacional.',
    duration:'24h',level:'Avançado',price:'38.000 Kz',cert:'Certificado',
    img:'imagens/course_14.jpg',
  },
  {
    id:15,cat:'incendio',tag:'Incêndio',
    title:'Noções Básicas de Combate ao Incêndio',
    desc:'Classificação de fogos, agentes extintores, equipamentos de combate a incêndio, planos de evacuação e procedimentos de emergência industrial.',
    duration:'16h',level:'Básico',price:'20.000 Kz',cert:'Certificado',
    img:'imagens/course_15.jpg',
  },
  {
    id:16,cat:'incendio',tag:'Incêndio',
    title:'Vigilante de Trabalhos com Fogo',
    desc:'Formação para vigilantes de trabalhos a quente: sistema de permissão de trabalho (PTW), prevenção de incêndios e procedimentos de emergência.',
    duration:'16h',level:'Básico',price:'20.000 Kz',cert:'Certificado',
    img:'imagens/course_16.jpg',
  },
  {
    id:17,cat:'incendio',tag:'Incêndio',
    title:'Inspecção de Extintores',
    desc:'Inspeção, manutenção, teste e registo de extintores portáteis e fixos em conformidade com as normas angolanas de segurança contra incêndio.',
    duration:'8h',level:'Básico',price:'14.000 Kz',cert:'Certificado',
    img:'imagens/course_17.jpg',
  },
  {
    id:18,cat:'certificacao',tag:'Certificação',
    title:'Certificação ISO, CE, HALAL, HACCP',
    desc:'Preparação e acompanhamento completo para certificações internacionais de qualidade, segurança alimentar e conformidade regulatória.',
    duration:'40h',level:'Avançado',price:'75.000 Kz',cert:'Diploma',
    img:'imagens/course_18.jpg',
  },
  {
    id:19,cat:'petroleo',tag:'Petróleo & Gás',
    title:'Entrada em Espaços Confinados',
    desc:'Procedimentos de entrada segura em espaços confinados, monitorização atmosférica, planos de resgate e normas OSHA/IOGP para petróleo e gás.',
    duration:'24h',level:'Intermédio',price:'35.000 Kz',cert:'Certificado',
    img:'imagens/course_19.jpg',
  },
];

// ============================================================
//  HIGHLIGHTS POR CATEGORIA (drawer)
// ============================================================
const courseHighlights = {
  hst:[
    'Identificação e avaliação de riscos ocupacionais',
    'Legislação angolana e normas internacionais de segurança',
    'Uso correto de Equipamentos de Proteção Individual (EPI)',
    'Elaboração de relatórios técnicos e planos de ação',
    'Procedimentos de evacuação e resposta a emergências',
  ],
  hes:[
    'Técnicas de suporte básico e avançado de vida',
    'Gestão de emergências médicas no local de trabalho',
    'Uso de equipamentos de proteção respiratória (SCBA)',
    'Deteção e monitorização de gases perigosos',
    'Coordenação com equipas de socorro externas',
  ],
  incendio:[
    'Classificação de fogos e agentes extintores adequados',
    'Operação e manutenção de extintores portáteis',
    'Procedimentos de evacuação e pontos de encontro',
    'Trabalhos a quente — permissões e vigilância',
    'Prevenção e controlo de incêndios em ambiente industrial',
  ],
  certificacao:[
    'Processos de certificação ISO 9001, 14001 e 45001',
    'Gestão da qualidade e auditorias de conformidade',
    'Segurança alimentar: HACCP e normas HALAL',
    'Documentação e implementação de sistemas de gestão',
    'Manutenção de certificações e melhoria contínua',
  ],
  petroleo:[
    'Procedimentos de entrada em espaços confinados',
    'Monitorização atmosférica antes e durante a entrada',
    'Planos de resgate e evacuação de emergência',
    'Comunicação e coordenação de equipas de segurança',
    'Normas internacionais para petróleo e gás (OSHA/IOGP)',
  ],
};

let selectedCourses=[];
let currentFilter='todos';

// ============================================================
//  RENDER CURSOS
// ============================================================
function renderCourses(filter){
  const grid=document.getElementById('coursesGrid');
  const filtered=filter==='todos'?courses:courses.filter(c=>c.cat===filter);
  grid.innerHTML=filtered.map(c=>`
    <div class="course-card${selectedCourses.includes(c.id)?' selected':''}" id="card_${c.id}">
      <div class="selected-badge">&#10003;</div>
      <div class="course-img-wrap">
        <img src="${c.img}" alt="${c.title}" class="course-img" loading="lazy"
          onerror="this.style.display='none';this.parentElement.classList.add('img-fallback')">
      </div>
      <div class="course-header">
        <div class="course-tag">${c.tag}</div>
        <h3>${c.title}</h3>
      </div>
      <div class="course-body">
        <p>${c.desc}</p>
        <div class="course-meta">
          <span class="meta-pill">${c.duration}</span>
          <span class="meta-pill">${c.level}</span>
          <span class="meta-pill">${c.cert}</span>
        </div>
        <div class="course-footer">
          <span class="course-price">${c.price}</span>
          <div class="course-footer-actions">
            <button class="ver-mais-btn" onclick="openDrawer(${c.id})">
              Ver mais
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button class="select-btn${selectedCourses.includes(c.id)?' selected':''}" onclick="toggleCourse(${c.id})">
              ${selectedCourses.includes(c.id)?'&#10003; Selecionado':'Selecionar'}
            </button>
          </div>
        </div>
      </div>
    </div>`).join('');
  updateSelectedCount();
}

// ============================================================
//  DRAWER
// ============================================================
function openDrawer(id){
  const c=courses.find(x=>x.id===id);
  if(!c)return;
  const hl=courseHighlights[c.cat]||[];
  const isSelected=selectedCourses.includes(c.id);

  // image
  const img=document.getElementById('drawerImg');
  const wrap=document.getElementById('drawerImgWrap');
  img.style.display='block';
  wrap.classList.remove('img-fallback');
  img.onerror=function(){this.style.display='none';wrap.classList.add('img-fallback');};
  img.alt=c.title;
  img.src=c.img;

  // texts
  document.getElementById('drawerTag').textContent=c.tag;
  document.getElementById('drawerTitle').textContent=c.title;
  document.getElementById('drawerDesc').textContent=c.desc;
  document.getElementById('drawerDuration').textContent=c.duration;
  document.getElementById('drawerLevel').textContent=c.level;
  document.getElementById('drawerCert').textContent=c.cert;
  document.getElementById('drawerPrice').textContent=c.price;
  document.getElementById('drawerDurationPill').textContent=c.duration;
  document.getElementById('drawerLevelPill').textContent=c.level;
  document.getElementById('drawerCertPill').textContent=c.cert;

  // highlights
  document.getElementById('drawerHighlights').innerHTML=
    hl.map(h=>`<div class="drawer-highlight-item">${h}</div>`).join('');

  // select button
  const selBtn=document.getElementById('drawerSelectBtn');
  selBtn.textContent=isSelected?'Selecionado':'Selecionar Formação';
  selBtn.className='drawer-btn-select'+(isSelected?' selected':'');
  selBtn.onclick=()=>{
    toggleCourse(c.id);
    const now=selectedCourses.includes(c.id);
    selBtn.textContent=now?'Selecionado':'Selecionar Formação';
    selBtn.className='drawer-btn-select'+(now?' selected':'');
  };

  document.getElementById('drawerOverlay').classList.add('open');
  document.getElementById('courseDrawer').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeDrawer(){
  document.getElementById('drawerOverlay').classList.remove('open');
  document.getElementById('courseDrawer').classList.remove('open');
  document.body.style.overflow='';
}

document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer();});

// ============================================================
//  TOGGLE / FILTER / COUNT
// ============================================================
function toggleCourse(id){
  const idx=selectedCourses.indexOf(id);
  if(idx>-1){selectedCourses.splice(idx,1)}else{selectedCourses.push(id)}
  renderCourses(currentFilter);
  updateFormPreview();
  const cnt=selectedCourses.length;
  const fl=document.getElementById('floatingCta');
  if(fl){
    if(cnt>0){
      fl.style.display='block';
      fl.textContent=`${cnt} formação${cnt>1?'ões':''} selecionada${cnt>1?'s':''} — Candidatar-me`;
    } else {
      fl.style.display='none';
    }
  }
  showToast(selectedCourses.includes(id)?'Formação adicionada à candidatura':'Formação removida');
}

function filterCourses(cat,btn){
  currentFilter=cat;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  renderCourses(cat);
}

function updateSelectedCount(){
  const el=document.getElementById('selectedCount');
  if(selectedCourses.length>0){
    el.style.display='block';
    el.innerHTML=`<span style="background:rgba(201,168,76,0.12);border:1px solid rgba(201,168,76,0.28);color:#C9A84C;padding:8px 20px;border-radius:25px;font-size:0.83rem;font-family:'Inter',sans-serif">
      <strong>${selectedCourses.length}</strong> formação${selectedCourses.length>1?'ões':''} selecionada${selectedCourses.length>1?'s':''} —
      <a onclick="navScrollTo('#inscricao')" style="color:#C9A84C;text-decoration:underline;cursor:pointer">Candidatar-me agora</a>
    </span>`;
  } else {
    el.style.display='none';
  }
}

// ============================================================
//  PREVIEW DO EMAIL
// ============================================================
function updateFormPreview(){
  const preview=document.getElementById('selectedCoursesPreview');
  if(!preview)return;
  if(selectedCourses.length===0){
    preview.innerHTML='<span class="no-selection">Nenhuma formação selecionada. Volte ao catálogo para selecionar.</span>';
  } else {
    preview.innerHTML=selectedCourses.map(id=>{
      const c=courses.find(x=>x.id===id);
      return c?`<span class="course-pill">${c.title}</span>`:'';
    }).join('');
  }
  generateEmailPreview();
}

function generateEmailPreview(){
  const name   =g('fName','[Seu Nome]');
  const email  =g('fEmail','[Seu Email]');
  const phone  =g('fPhone','[Telefone]');
  const prov   =g('fProv','Não indicada');
  const edu    =g('fEdu','Não indicado');
  const empresa=g('fEmpresa','Não indicada');
  const motiv  =g('fMotiv','');
  const list=selectedCourses.map(id=>{
    const c=courses.find(x=>x.id===id);
    return c?`  - ${c.title} (${c.duration} | ${c.price})`:''
  }).join('\n')||'  [Nenhuma formação selecionada]';

  const body=`Para: delciobentocunha007@gmail.com
Assunto: Candidatura CBL-FB — ${name}
Reply-To: ${email}
${'─'.repeat(48)}
CANDIDATURA — CBL-FB
${'─'.repeat(48)}
Nome:          ${name}
Email:         ${email}
Telefone:      ${phone}
Província:     ${prov}
Habilitações:  ${edu}
Empresa:       ${empresa}

FORMAÇÕES SELECIONADAS:
${list}
${motiv?`\nMOTIVAÇÃO:\n${motiv}\n`:''}${'─'.repeat(48)}`;

  const ep=document.getElementById('emailPreview');
  if(ep)ep.textContent=body;
}

function g(id,fb){const el=document.getElementById(id);return el?(el.value.trim()||fb):fb;}

document.addEventListener('DOMContentLoaded',()=>{
  ['fName','fEmail','fPhone','fMotiv','fEmpresa'].forEach(id=>{
    const el=document.getElementById(id);
    if(el)el.addEventListener('input',generateEmailPreview);
  });
  ['fProv','fEdu'].forEach(id=>{
    const el=document.getElementById(id);
    if(el)el.addEventListener('change',generateEmailPreview);
  });
  generateEmailPreview();
});

// ============================================================
//  ENVIO — EmailJS
// ============================================================
function submitForm(){
  if(selectedCourses.length===0){
    showToast('Selecione pelo menos uma formação.');
    navScrollTo('#cursos');return;
  }
  const name  =document.getElementById('fName').value.trim();
  const email =document.getElementById('fEmail').value.trim();
  const phone =document.getElementById('fPhone').value.trim();
  if(!name){showToast('Indique o seu nome completo.');document.getElementById('fName').focus();return;}
  if(!email||!email.includes('@')){showToast('Indique um email válido.');document.getElementById('fEmail').focus();return;}
  if(!phone){showToast('Indique o seu telefone.');document.getElementById('fPhone').focus();return;}

  const prov   =document.getElementById('fProv').value||'Não indicada';
  const edu    =document.getElementById('fEdu').value||'Não indicado';
  const empresa=document.getElementById('fEmpresa').value||'Não indicada';
  const motiv  =document.getElementById('fMotiv').value.trim()||'Não indicada';
  const coursesList=selectedCourses.map(id=>{
    const c=courses.find(x=>x.id===id);
    return c?`- ${c.title} (${c.duration} | ${c.price})`:''
  }).join('\n');

  const btn=document.getElementById('submitBtn');
  btn.disabled=true;btn.textContent='A enviar...';btn.style.opacity='0.65';

  emailjs.send(EMAILJS_SERVICE_ID,EMAILJS_TEMPLATE_ID,{
    title:`Candidatura CBL-FB — ${name}`,
    name,email,
    from_name:name,from_email:email,
    phone,province:prov,education:edu,
    company:empresa,motivation:motiv,
    courses:coursesList,
    num_courses:selectedCourses.length,
    reply_to:email,
  }).then(()=>{
    document.getElementById('formSection').style.display='none';
    document.getElementById('successMsg').style.display='block';
    showToast('Candidatura enviada com sucesso.');
    btn.disabled=false;btn.textContent='Enviar Candidatura';btn.style.opacity='1';
  }).catch(err=>{
    console.error('EmailJS:',err);
    showToast('Erro ao enviar. Tente novamente ou contacte-nos directamente.');
    btn.disabled=false;btn.textContent='Enviar Candidatura';btn.style.opacity='1';
  });
}

function resetForm(){
  document.getElementById('formSection').style.display='block';
  document.getElementById('successMsg').style.display='none';
  selectedCourses=[];
  ['fName','fEmail','fPhone','fEmpresa','fMotiv'].forEach(id=>{
    const el=document.getElementById(id);if(el)el.value='';
  });
  ['fProv','fEdu'].forEach(id=>{
    const el=document.getElementById(id);if(el)el.value='';
  });
  renderCourses(currentFilter);
  updateFormPreview();
  const fcta=document.getElementById('floatingCta');if(fcta)fcta.style.display='none';
}

// ============================================================
//  UTILITÁRIOS
// ============================================================
function navScrollTo(id){
  const el=document.querySelector(id);
  if(el)el.scrollIntoView({behavior:'smooth'});
}
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3500);
}
function toggleMobileMenu(){
  document.getElementById('mobileMenu').classList.toggle('open');
}
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('mainNav');
  nav.style.background=window.scrollY>50
    ?'rgba(10,22,40,0.99)'
    :'rgba(10,22,40,0.96)';
});

renderCourses('todos');

// ============================================================
//  HOVER EFFECTS DINÂMICOS — CBL-FB
// ============================================================

// ── Spotlight / Mouse-tracking nas cards ──────────────────
function initCardSpotlight() {
  // Course cards: seguem o cursor com radial gradient
  document.addEventListener('mousemove', e => {
    document.querySelectorAll('.course-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--cx', x + '%');
      card.style.setProperty('--cy', y + '%');
    });

    // Area cards: glow segue o cursor
    document.querySelectorAll('.area-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--glow-x', x + 'px');
      card.style.setProperty('--glow-y', y + 'px');
    });
  });
}

// ── Efeito Magnético em botões primários ──────────────────
function initMagneticButtons() {
  document.querySelectorAll('.btn-primary, .nav-cta, .submit-btn, .drawer-btn-select').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.18}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// ── Tilt 3D suave em cards ─────────────────────────────────
function initTiltEffect() {
  document.querySelectorAll('.testimonial, .mission-card, .area-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotY = x * 8;
      const rotX = -y * 6;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)';
      setTimeout(() => { card.style.transition = ''; }, 500);
    });
  });
}

// ── Ripple click em botões ─────────────────────────────────
function initRippleEffect() {
  document.querySelectorAll('.btn-primary, .btn-secondary, .submit-btn, .filter-btn, .select-btn, .ver-mais-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height) * 2;
      ripple.style.cssText = `
        position:absolute;
        border-radius:50%;
        background:rgba(255,255,255,0.25);
        width:${size}px;
        height:${size}px;
        top:${e.clientY - rect.top - size/2}px;
        left:${e.clientX - rect.left - size/2}px;
        pointer-events:none;
        transform:scale(0);
        animation:rippleAnim 0.55s ease-out forwards;
        z-index:10;
      `;
      if (!document.getElementById('rippleStyle')) {
        const s = document.createElement('style');
        s.id = 'rippleStyle';
        s.textContent = '@keyframes rippleAnim{to{transform:scale(1);opacity:0}}';
        document.head.appendChild(s);
      }
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// ── Partícula flutuante no hover dos area-cards ────────────
function initParticleHover() {
  document.querySelectorAll('.area-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      for (let i = 0; i < 5; i++) {
        const p = document.createElement('span');
        const size = Math.random() * 5 + 2;
        const startX = Math.random() * 100;
        const dur = Math.random() * 0.8 + 0.6;
        const delay = Math.random() * 0.3;
        p.style.cssText = `
          position:absolute;
          width:${size}px;height:${size}px;
          background:rgba(201,168,76,${Math.random()*0.5+0.2});
          border-radius:50%;
          bottom:${Math.random()*40}%;
          left:${startX}%;
          pointer-events:none;
          z-index:2;
          animation:particleRise ${dur}s ${delay}s ease-out forwards;
        `;
        if (!document.getElementById('particleStyle')) {
          const s = document.createElement('style');
          s.id = 'particleStyle';
          s.textContent = '@keyframes particleRise{0%{opacity:0.8;transform:translateY(0) scale(1)}100%{opacity:0;transform:translateY(-60px) scale(0.3)}}';
          document.head.appendChild(s);
        }
        card.appendChild(p);
        setTimeout(() => p.remove(), (dur + delay) * 1000 + 100);
      }
    });
  });
}

// ── Scroll-reveal suave ao entrar na viewport ──────────────
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.area-card, .course-card, .testimonial, .mission-card, .recog-item, .step, .about-feat, .contact-item'
  );
  const style = document.createElement('style');
  style.textContent = `
    .reveal-pending{opacity:0;transform:translateY(28px)}
    .reveal-done{opacity:1;transform:translateY(0);transition:opacity 0.55s ease,transform 0.55s cubic-bezier(0.23,1,0.32,1)}
  `;
  document.head.appendChild(style);

  targets.forEach(el => el.classList.add('reveal-pending'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        // stagger entre irmãos
        const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal-pending') || c.classList.contains('reveal-done'));
        const idx = siblings.indexOf(el);
        setTimeout(() => {
          el.classList.remove('reveal-pending');
          el.classList.add('reveal-done');
        }, idx * 80);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

// ── Contador animado nas hero stats ───────────────────────
function initCounterAnimation() {
  const stats = document.querySelectorAll('.hero-stat strong');
  let animated = false;

  const run = () => {
    if (animated) return;
    const heroRect = document.querySelector('.hero-stats')?.getBoundingClientRect();
    if (heroRect && heroRect.top < window.innerHeight) {
      animated = true;
      stats.forEach(el => {
        const original = el.textContent;
        const num = parseFloat(original.replace(/[^0-9.]/g, ''));
        if (isNaN(num) || num === 0) return;
        const suffix = original.replace(/[0-9.,]/g, '');
        let start = 0;
        const duration = 1600;
        const startTime = performance.now();
        const update = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const val = eased * num;
          el.textContent = (Number.isInteger(num) ? Math.round(val) : val.toFixed(1))
            .toLocaleString('pt-PT') + suffix;
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      });
    }
  };

  window.addEventListener('scroll', run, { passive: true });
  run();
}

// ── Gold shimmer contínuo no nav logo ─────────────────────
function initLogoShimmer() {
  const logo = document.querySelector('.nav-logo .logo-svg');
  if (!logo) return;
  logo.style.transition = 'filter 0.3s ease';
  logo.addEventListener('mouseenter', () => {
    logo.style.filter = 'drop-shadow(0 0 12px rgba(201,168,76,0.7))';
  });
  logo.addEventListener('mouseleave', () => {
    logo.style.filter = '';
  });
}

// ── Inicializar tudo ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCardSpotlight();
  initMagneticButtons();
  initTiltEffect();
  initRippleEffect();
  initParticleHover();
  initScrollReveal();
  initCounterAnimation();
  initLogoShimmer();
});