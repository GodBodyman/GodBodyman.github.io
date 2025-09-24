<!doctype html>
<html lang="uk">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Богдан Руденко — Digital Marketing Specialist</title>
<meta name="description" content="Діджитал-маркетолог: таргетована реклама, контент-маркетинг, аналітика, боти SmartSender." />
<meta name="color-scheme" content="dark light" />
<style>
  :root{
    --bg:#0B0B0B;--panel:#111;--text:#F4F4F5;--muted:#A1A1AA;--accent:#9AE6B4;--accent-2:#60A5FA;--border:#1f1f1f;--radius:16px;--gap:20px;
    --shadow:0 10px 30px rgba(0,0,0,.35);
  }
  *{box-sizing:border-box}
  html,body{height:100%}
  body{margin:0;font:500 16px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif;background:var(--bg);color:var(--text);overflow-x:hidden;position:relative;}
  a{color:var(--text);text-decoration:none}
  a:hover{opacity:.9}
  .container{width:min(1100px,92vw);margin:0 auto}

  /* Global animated background */
  body::before{
    content:"";position:fixed;inset:0;z-index:-1;
    background:linear-gradient(270deg,#0f172a,#1e293b,#0b0b0b,#1e3a8a,#3b0764);
    background-size:800% 800%;
    animation:gradientShift 30s ease infinite;
  }
  @keyframes gradientShift{
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }

  header{position:relative;min-height:100svh;display:grid;place-items:center;padding:80px 0;overflow:hidden;}
  .hero{position:relative;z-index:1;display:grid;gap:28px;padding:34px;border-radius:var(--radius);background:rgba(17,17,17,.65);backdrop-filter:blur(10px);border:1px solid var(--border);box-shadow:var(--shadow);animation:fadeInUp 1.2s ease both}
  @keyframes fadeInUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
  .hero h1{margin:0;font-weight:800;letter-spacing:.4px;line-height:1.05;font-size:clamp(32px,6vw,56px);color:var(--text)}
  .subtitle{font-size:clamp(16px,2.6vw,22px);color:var(--muted)}
  .badges{display:flex;flex-wrap:wrap;gap:10px}
  .badge{padding:8px 12px;border:1px solid var(--border);border-radius:999px;background:rgba(255,255,255,.04)}
  .cta{display:flex;gap:12px;flex-wrap:wrap}
  .btn{padding:12px 18px;border-radius:12px;border:1px solid var(--border);background:#141414;transition:transform .2s ease, box-shadow .2s ease}
  .btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent-2));color:#0b0b0b;font-weight:800}
  .btn:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(0,0,0,.35)}

  /* 3D cube */
  .cube-wrap{position:absolute;right:5vw;bottom:8vh;perspective:1000px;z-index:1}
  .cube{position:relative;width:160px;height:160px;transform-style:preserve-3d;animation:spin 16s linear infinite}
  .cube .side{position:absolute;inset:0;background:linear-gradient(135deg,#0f172a,#111827);border:1px solid #1f2937;display:grid;place-items:center;font-weight:700;color:#C7D2FE;font-size:clamp(14px,3vw,20px);text-align:center;padding:6px}
  .cube .side::after{content:attr(data-txt);}
  .front{transform:translateZ(80px)}
  .back{transform:rotateY(180deg) translateZ(80px)}
  .right{transform:rotateY(90deg) translateZ(80px)}
  .left{transform:rotateY(-90deg) translateZ(80px)}
  .top{transform:rotateX(90deg) translateZ(80px)}
  .bottom{transform:rotateX(-90deg) translateZ(80px)}
  @keyframes spin{to{transform:rotateX(360deg) rotateY(360deg)}}

  section{padding:80px 0;border-top:1px solid var(--border)}
  h2{font-size:clamp(22px,3.2vw,32px);margin:0 0 18px 0}
  .lead{color:var(--muted);margin:0 0 24px 0}
  .grid{display:grid;gap:var(--gap)}
  .grid.cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
  .grid.cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
  @media (max-width:920px){.grid.cols-3{grid-template-columns:1fr 1fr}}
  @media (max-width:720px){.grid.cols-2,.grid.cols-3{grid-template-columns:1fr}}
  .card{background:linear-gradient(180deg,#0e0e0e,#0b0b0b);border:1px solid var(--border);border-radius:18px;padding:20px;box-shadow:var(--shadow);transition:transform .2s ease, border-color .2s ease;animation:fadeInUp 1.4s ease both}
  .card:hover{transform:translateY(-6px) scale(1.02);border-color:#2b2b2b}
  .card h3{margin:2px 0 10px;font-size:18px}
  .meta{color:var(--muted);font-size:14px}
  .list{display:grid;gap:10px;margin:0;padding:0;list-style:none}
  .pill{display:inline-flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid var(--border);border-radius:999px;color:var(--muted)}
  .icon{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:8px;background:#161616;border:1px solid var(--border)}

  footer{padding:40px 0;text-align:center;color:var(--muted);border-top:1px solid var(--border)}

  form label{display:block;margin-bottom:12px;font-size:14px;color:var(--text)}
  input{width:100%;padding:12px 14px;margin-top:6px;background:#fff;border:1px solid #d4d4d8;border-radius:10px;color:#0b0b0b;font-size:15px;transition:border .2s ease, box-shadow .2s ease}
  input:focus{outline:none;border-color:var(--accent-2);box-shadow:0 0 0 3px rgba(96,165,250,.35)}
</style>
</head>
<body>
  <header>
    <div class="container">
      <div class="hero reveal">
        <div class="badges">
          <span class="badge">Таргетована реклама</span>
          <span class="badge">Контент-маркетинг</span>
          <span class="badge">Аналітика</span>
          <span class="badge">Боти SmartSender</span>
        </div>
        <h1>Богдан Руденко</h1>
        <div class="subtitle">Digital Marketing Specialist</div>
        <p class="lead">Ініціативний діджитал-маркетолог. Спеціалізуюся на рекламі, створенні креативів, аналітиці та чат-ботах. Працюю онлайн, маю досвід у нішах будівництва, дизайну, освіти та особистих брендів.</p>
        <div class="cta">
          <a class="btn primary" href="#contacts">Зв’язатися</a>
          <a class="btn" href="#services">Послуги</a>
        </div>
      </div>
    </div>
    <div class="cube-wrap" aria-hidden="true">
      <div class="cube">
        <div class="side front"  data-txt="Ads"></div>
        <div class="side back"   data-txt="Analytics"></div>
        <div class="side right"  data-txt="Content"></div>
        <div class="side left"   data-txt="SmartBots"></div>
        <div class="side top"    data-txt="A/B"></div>
        <div class="side bottom" data-txt="ROI"></div>
      </div>
    </div>
  </header>

  <main>
    <section id="about">
      <div class="container">
        <h2 class="reveal">Про мене</h2>
        <p class="lead reveal">Я розпочав кар’єру у digital-маркетингу після навчання у Genius Space. Маю досвід роботи з Meta Ads, Canva, аналітикою та створенням ботів у SmartSender. Раніше працював у сферах будівництва, графічного та моушн дизайну, а також в освітніх проєктах. Швидко розбираюся з новими інструментами та орієнтуюся на розвиток.</p>
      </div>
    </section>

    <section id="skills">
      <div class="container">
        <h2 class="reveal">Основні навички</h2>
        <div class="grid cols-2">
          <div class="card reveal" data-tilt>
            <h3>Таргетована реклама</h3>
            <p class="meta">Facebook Ads, TikTok Ads, Google Ads. Налаштування, оптимізація, масштабування. Ніші: будівництво, дизайн, освіта, особисті бренди.</p>
          </div>
          <div class="card reveal" data-tilt>
            <h3>Аналітика та оптимізація</h3>
            <p class="meta">GA4, GTag, Keitaro. A/B тестування, звітність, оптимізація бюджетів.</p>
          </div>
          <div class="card reveal" data-tilt>
            <h3>Контент та дизайн</h3>
            <p class="meta">Figma, Canva, Adobe After Effects, CapCut, Notion. Створення креативів, відео та візуальних матеріалів.</p>
          </div>
          <div class="card reveal" data-tilt>
            <h3>Автоматизація та CRM</h3>
            <p class="meta">SmartSender, SendPulse: чат-боти, автоворонки, розсилки, інтеграції. Робота з доменами та хостингом.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="experience">
      <div class="container">
        <h2 class="reveal">Досвід</h2>
        <div class="grid cols-2">
          <div class="card reveal" data-tilt>
            <h3>Freelance — Digital Marketing</h3>
            <p class="meta">Фармінг акаунтів; реклама; створення ботів і воронок. <br/>2022 — теперішній час</p>
          </div>
          <div class="card reveal" data-tilt>
            <h3>Ewolf LLC — Контакт-центр</h3>
            <p class="meta">Комунікації з клієнтами, аналітика запитів. 2021–2022</p>
          </div>
          <div class="card reveal" data-tilt>
            <h3>Trading House — Продажі</h3>
            <p class="meta">Робота з клієнтами, продажі, up-sell. 2021</p>
          </div>
          <div class="card reveal" data-tilt>
            <h3>Приватний підприємець</h3>
            <p class="meta">Продаж техніки, менеджмент. 2018–2020</p>
          </div>
        </div>
      </div>
    </section>

    <section id="education">
      <div class="container">
        <h2 class="reveal">Освіта та сертифікації</h2>
        <div class="grid cols-2">
          <div class="card reveal" data-tilt>
            <h3>Освіта</h3>
            <ul class="list">
              <li>NACOA — Бакалавр фінансів (2017–2021)</li>
              <li>KHEY — Молодший спеціаліст (2015–2017)</li>
            </ul>
          </div>
          <div class="card reveal" data-tilt>
            <h3>Сертифікації</h3>
            <ul class="list">
              <li>Genius Space — Таргетолог</li>
              <li>EC Tempus — Підприємництво (2016–2017)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="contacts">
      <div class="container">
        <h2 class="reveal">Контакти</h2>
        <div class="grid cols-2">
          <div class="card reveal" data-tilt>
            <h3>Напишіть мені</h3>
            <p class="meta">Готовий до співпраці з бізнесами різних ніш.</p>
            <p>📩 Email: <a href="mailto:avramlinkolnkrasava@gmail.com">avramlinkolnkrasava@gmail.com</a><br>
            💬 Telegram: <a href="https://t.me/fenotyper" target="_blank" rel="noopener">t.me/fenotyper</a></p>
          </div>
          <form class="card reveal" data-tilt action="https://formspree.io/f/mzzpzlyr" method="POST">
            <h3>Коротка заявка</h3>
            <label>Ваше ім’я<input required name="name"></label>
            <label>Email або Telegram<input required name="contact"></label>
            <label>Проєкт / Ніша<input name="project"></label>
            <button class="btn primary" style="margin-top:12px" type="submit">Надіслати</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">© <span id="year"></span> Богдан Руденко — Digital Marketing Specialist</div>
  </footer>

<script>
  document.getElementById('year').textContent = new Date().getFullYear();
  const revealEls=[...document.querySelectorAll('.reveal')];
  const io=new IntersectionObserver((entries)=>{
    for(const e of entries){ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);} }
  },{threshold:0.12});
  revealEls.forEach(el=>io.observe(el));
  const tiltEls=[...document.querySelectorAll('[data-tilt]')];
  tiltEls.forEach(card=>{
    const bounds=()=>card.getBoundingClientRect();
    const onMove=e=>{
      const b=bounds();
      const x=(e.clientX - b.left)/b.width - .5;
      const y=(e.clientY - b.top)/b.height - .5;
      card.style.transform=`rotateY(${x*10}deg) rotateX(${ -y*10}deg) translateZ(0)`;
    };
    const reset=()=>{card.style.transform='translateZ(0)'};
    card.addEventListener('mousemove',onMove);
    card.addEventListener('mouseleave',reset);
    card.addEvent
