/* ═══════════════════════════════════════════
   NewForm animations — Deutsch B2
   Runs AFTER gsap.min.js is loaded
═══════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── wait for GSAP ──────────────────────── */
  function whenReady(cb) {
    if (typeof gsap !== 'undefined') { cb(); }
    else { setTimeout(function () { whenReady(cb); }, 50); }
  }

  whenReady(init);

  function init() {

    /* ── LOADING SCREEN ───────────────────── */
    var loader    = document.getElementById('loader');
    var loaderBar = document.getElementById('loader-bar');
    var loaderPct = document.getElementById('loader-pct');
    var pct = 0;
    var ticker;

    if (loader) {
      ticker = setInterval(function () {
        var step = pct < 60 ? 5 : pct < 85 ? 2 : 0.4;
        pct = Math.min(95, pct + step);
        if (loaderBar) loaderBar.style.width = pct + '%';
        if (loaderPct) loaderPct.textContent = Math.round(pct) + '%';
      }, 28);

      function finishLoader() {
        clearInterval(ticker);
        if (loaderBar) loaderBar.style.width = '100%';
        if (loaderPct) loaderPct.textContent = '100%';
        gsap.to(loader, {
          opacity: 0, duration: 0.55, delay: 0.25, ease: 'power2.inOut',
          onComplete: function () {
            loader.style.display = 'none';
          }
        });
      }

      if (document.fonts) {
        document.fonts.ready.then(function () { setTimeout(finishLoader, 350); });
      } else {
        window.addEventListener('load', function () { setTimeout(finishLoader, 350); });
      }
    }

    /* ── CUSTOM CURSOR (desktop only) ─────── */
    var isFine = window.matchMedia('(pointer: fine)').matches;
    var cur;
    if (isFine) {
      cur = document.createElement('div');
      cur.id = 'cursor';
      document.body.appendChild(cur);

      var mx = window.innerWidth / 2, my = window.innerHeight / 2;
      var cx = mx, cy = my;

      document.addEventListener('mousemove', function (e) {
        mx = e.clientX; my = e.clientY;
      });

      (function loop() {
        cx += (mx - cx) * 0.15;
        cy += (my - cy) * 0.15;
        cur.style.left = cx + 'px';
        cur.style.top  = cy + 'px';
        requestAnimationFrame(loop);
      })();

      var hoverSel = 'a,button,[role="button"],.lesson-card,.gram-card,.opt,.chip,.match-item,.navitem,.vocab-item';
      document.addEventListener('mouseover', function (e) {
        if (e.target.closest(hoverSel) && cur) cur.classList.add('expanded');
      });
      document.addEventListener('mouseout', function (e) {
        if (e.target.closest(hoverSel) && cur) cur.classList.remove('expanded');
      });
    }

    /* ── PAGE TRANSITION OVERLAY ──────────── */
    var overlay = document.createElement('div');
    overlay.id = 'page-transition';
    document.body.appendChild(overlay);

    /* ── ANIMATE VIEW CONTENTS ────────────── */
    function animateView() {
      var content = document.getElementById('content');
      if (!content) return;

      /* hero heading — split into lines and reveal */
      var h1 = content.querySelector('.hero h1');
      if (h1) {
        /* wrap each word group in reveal spans */
        var raw = h1.textContent.trim();
        var words = raw.split(' ');
        var chunks = [], cur_chunk = '';
        words.forEach(function (w) {
          var test = cur_chunk ? cur_chunk + ' ' + w : w;
          if (test.length > 20 && cur_chunk) {
            chunks.push(cur_chunk);
            cur_chunk = w;
          } else {
            cur_chunk = test;
          }
        });
        if (cur_chunk) chunks.push(cur_chunk);

        h1.innerHTML = chunks.map(function (c) {
          return '<span style="display:block;overflow:hidden;line-height:0.95"><span class="h1-line" style="display:block">' + c + '</span></span>';
        }).join('');

        var lines = h1.querySelectorAll('.h1-line');
        gsap.fromTo(lines,
          { y: '102%' },
          { y: '0%', duration: 1.0, stagger: 0.1, ease: 'power4.out', delay: 0.05 }
        );
      }

      /* eyebrow */
      var eyebrow = content.querySelector('.hero .eyebrow');
      if (eyebrow) {
        gsap.fromTo(eyebrow,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }
        );
      }

      /* hero sub-paragraph */
      var heroP = content.querySelector('.hero p');
      if (heroP) {
        gsap.fromTo(heroP,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out', delay: 0.35 }
        );
      }

      /* voltage tick mark */
      var hero = content.querySelector('.hero');
      if (hero) {
        /* create tick pseudo via JS since ::after can't be animated */
        var tick = hero.querySelector('.anim-tick');
        if (!tick) {
          tick = document.createElement('span');
          tick.className = 'anim-tick';
          tick.style.cssText = 'display:block;width:0px;height:2px;background:#7CC322;margin-top:24px;';
          hero.appendChild(tick);
          /* remove CSS ::after */
          hero.style.setProperty('--no-after', '1');
        }
        gsap.to(tick, { width: '48px', duration: 0.6, ease: 'power3.out', delay: 0.5 });
      }

      /* stats */
      var stats = content.querySelectorAll('.stat');
      if (stats.length) {
        gsap.fromTo(stats,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'power2.out', delay: 0.25 }
        );
      }

      /* path row */
      var pathRow = content.querySelector('.path-row');
      if (pathRow) {
        gsap.fromTo(pathRow,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', delay: 0.35 }
        );
      }

      /* section labels slide from left */
      var labels = content.querySelectorAll('.section-label');
      if (labels.length) {
        gsap.fromTo(labels,
          { opacity: 0, x: -16 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', delay: 0.4 }
        );
      }

      /* lesson + grammar cards stagger up */
      var cards = content.querySelectorAll('.lesson-card, .gram-card');
      if (cards.length) {
        gsap.fromTo(cards,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.05, ease: 'power3.out', delay: 0.45 }
        );
      }

      /* exercises */
      var exItems = content.querySelectorAll('.ex');
      if (exItems.length) {
        gsap.fromTo(exItems,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: 'power2.out', delay: 0.15 }
        );
      }

      /* vocab items slide in from left */
      var vocabItems = content.querySelectorAll('.vocab-item');
      if (vocabItems.length) {
        gsap.fromTo(vocabItems,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.04, ease: 'power2.out', delay: 0.15 }
        );
      }

      /* grammar block */
      var gram = content.querySelector('.gram');
      if (gram) {
        gsap.fromTo(gram,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', delay: 0.1 }
        );
      }

      /* flashcard */
      var fc = content.querySelector('.flashcard');
      if (fc) {
        gsap.fromTo(fc,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out', delay: 0.1 }
        );
      }
    }

    /* ── INTERCEPT render() ───────────────── */
    /* We wait until app.js has defined render(), then wrap it */
    function hookRender() {
      if (typeof render !== 'function') {
        setTimeout(hookRender, 80);
        return;
      }
      var _origRender = render; // eslint-disable-line no-undef

      /* Replace global render with animated version */
      window.render = function () {
        /* page-out wipe */
        var content = document.getElementById('content');
        var hasContent = content && content.children.length > 0;

        if (hasContent) {
          /* quick fade out current view */
          gsap.to(content, {
            opacity: 0, y: -8, duration: 0.18, ease: 'power2.in',
            onComplete: function () {
              gsap.set(content, { opacity: 1, y: 0 });
              _origRender();
              animateView();
            }
          });
        } else {
          _origRender();
          animateView();
        }
      };

      /* also run on first paint */
      setTimeout(animateView, 100);
    }

    /* app.js loads after animations.js, so hook after a tick */
    setTimeout(hookRender, 0);

  } /* end init */

})();
