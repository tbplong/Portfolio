(function () {
  var root = document.documentElement;
  root.classList.add('js');

  // ---------- Language toggle ----------

  var titles = {
    en: 'Tran Bao Phuc Long – AI Engineer',
    vi: 'Tran Bao Phuc Long – Kỹ sư AI'
  };

  function setLang(lang) {
    root.lang = lang;
    root.dataset.lang = lang;
    document.title = titles[lang];
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.setLang === lang));
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.dataset.setLang); });
  });
  setLang(root.dataset.lang === 'vi' ? 'vi' : 'en');

  // ---------- Award photos ----------
  // Each .award has data-photo="assets/awards/<name>" (no extension). The first
  // matching file is shown. With no file, the award stays text-only, except when
  // previewing locally, where a dashed slot shows the file name to add.

  var extensions = ['jpg', 'jpeg', 'png', 'webp'];
  var isLocal = location.protocol === 'file:' ||
    /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);

  function findPhoto(base, done, i = 0) {
    if (i >= extensions.length) return done(null);
    var src = base + '.' + extensions[i];
    var probe = new Image();
    probe.onload = function () { done(src); };
    probe.onerror = function () { findPhoto(base, done, i + 1); };
    probe.src = src;
  }

  document.querySelectorAll('.award[data-photo]').forEach(function (award) {
    var base = award.dataset.photo;
    var title = award.querySelector('h3 [lang="en"]') || award.querySelector('h3');
    var eventName = award.querySelector('.sub [lang="en"]') || award.querySelector('.sub');

    findPhoto(base, function (src) {
      if (!src && !isLocal) return;

      var figure = document.createElement('figure');
      figure.className = 'award-photo';

      if (src) {
        var img = document.createElement('img');
        img.src = src;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.alt = 'Receiving the ' + title.textContent.trim() + ' award, ' + eventName.textContent.trim();
        figure.appendChild(img);
      } else {
        figure.classList.add('is-empty');
        figure.textContent = 'Add photo: ' + base + '.jpg';
      }

      award.appendChild(figure);
      award.classList.add('has-photo');
    });
  });
})();
