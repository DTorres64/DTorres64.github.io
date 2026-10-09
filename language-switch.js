(() => {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  const isEnglish = /-en\.html$/i.test(filename);
  const base = filename.replace(/-en\.html$/i, '.html');
  const target = isEnglish
    ? base
    : `${filename.replace(/\.html$/i, '')}-en.html`;

  const switcher = document.querySelector('.nav-language');
  if (switcher) {
    switcher.href = target;
    switcher.textContent = isEnglish ? 'FR' : 'EN';
    switcher.lang = isEnglish ? 'fr' : 'en';
    switcher.hreflang = switcher.lang;
    switcher.title = isEnglish ? 'Passer en français' : 'Switch to English';
    switcher.setAttribute('aria-label', switcher.title);
  }
})();
