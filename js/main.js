/* ============================================================
   Anymascotas — main.js
   Vanilla JS: header scroll, reveal-on-scroll, counters,
   sidebar toggle, hero word rotator, filter tabs.
   ============================================================ */

// ---------- Header scroll ----------
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ---------- Counter animation ----------
const counters = document.querySelectorAll('.counter');
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString('es-AR');
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString('es-AR');
    }
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: 0.4 });
counters.forEach(c => counterIO.observe(c));

// ---------- Sidebar toggle ----------
const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarBackdrop = document.getElementById('sidebarBackdrop');
const footCatLink = document.getElementById('footCatLink');

function openSidebar() { document.body.classList.remove('sidebar-closed'); }
function closeSidebar() { document.body.classList.add('sidebar-closed'); }
function toggleSidebar() { document.body.classList.toggle('sidebar-closed'); }

sidebarToggleBtn.addEventListener('click', toggleSidebar);
sidebarClose.addEventListener('click', closeSidebar);
sidebarBackdrop.addEventListener('click', closeSidebar);
footCatLink.addEventListener('click', (e) => { e.preventDefault(); openSidebar(); });
document.querySelectorAll('.sidebar-cat-item, .sidebar-nav-list a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 980) closeSidebar();
  });
});

// On small screens, start with the sidebar closed so it doesn't block content
if (window.innerWidth <= 980) closeSidebar();

// ---------- Hero word rotator ----------
const words = ['perro', 'gato', 'ave', 'roedor'];
const rotatorEl = document.getElementById('rotatorWord');
let wordIndex = 0;
setInterval(() => {
  rotatorEl.classList.add('fade');
  setTimeout(() => {
    wordIndex = (wordIndex + 1) % words.length;
    rotatorEl.textContent = words[wordIndex];
    rotatorEl.classList.remove('fade');
  }, 280);
}, 2400);

// ---------- Filter tabs (visual only) ----------
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
