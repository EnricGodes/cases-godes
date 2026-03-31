/* ==================== LANGUAGE ==================== */
function getLang() {
  return localStorage.getItem('lang') || 'ca';
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-ca]').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });
  // Update selector active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('bg-primary', btn.dataset.lang === lang);
    btn.classList.toggle('text-on-primary', btn.dataset.lang === lang);
    btn.classList.toggle('text-on-surface', btn.dataset.lang !== lang);
  });
}

/* ==================== FONT SIZE ==================== */
function getFontSize() {
  return localStorage.getItem('fontSize') || 'normal';
}

function setFontSize(size) {
  localStorage.setItem('fontSize', size);
  applyFontSize(size);
}

function applyFontSize(size) {
  const scales = { normal: '100%', grande: '118%', extragrande: '140%' };
  document.documentElement.style.fontSize = scales[size];
  document.querySelectorAll('.font-btn').forEach(btn => {
    btn.classList.toggle('bg-primary', btn.dataset.size === size);
    btn.classList.toggle('text-on-primary', btn.dataset.size === size);
    btn.classList.toggle('text-on-surface', btn.dataset.size !== size);
  });
}

/* ==================== MENU ==================== */
function openMenu() {
  document.getElementById('side-menu').classList.remove('-translate-x-full');
  document.getElementById('menu-overlay').classList.add('show');
}

function closeMenu() {
  document.getElementById('side-menu').classList.add('-translate-x-full');
  document.getElementById('menu-overlay').classList.remove('show');
}

/* ==================== BOOT ==================== */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(getLang());
  applyFontSize(getFontSize());

  // Menu button
  document.getElementById('menu-btn').addEventListener('click', openMenu);
  document.getElementById('menu-overlay').addEventListener('click', closeMenu);
  document.getElementById('menu-close').addEventListener('click', closeMenu);

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Font size buttons
  document.querySelectorAll('.font-btn').forEach(btn => {
    btn.addEventListener('click', () => setFontSize(btn.dataset.size));
  });
});
