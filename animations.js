/* ═══════════════════════════════════════════
   NewForm-style animations for Deutsch B2
═══════════════════════════════════════════ */

(function() {
  'use strict';

  // ── LOADING SCREEN ────────────────────────
  const loader     = document.getElementById('loader');
  const loaderBar  = document.getElementById('loader-bar');
  const loaderPct  = document.getElementById('loader-pct');

  let pct = 0;
  const tick = setInterval(function() {
    // ease toward 95% fast, then slow
    const step = pct < 60 ? 4 : pct < 85 ? 2 : 0.5;
    pct = Math.min(95, pct + step);
    loaderBar.style.width = pct + '%';
    loaderPct.textContent = Math.round(pct) + '%';
  }, 30);

  function finishLoader() {
    clearInterval(tick);
    loaderBar.style.width = '100%';
    loaderPct.textContent = '100%';

    gsap.to(loader, {
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
      ease: 'power2.inOut',
      onComplete: function() {
        loader.style.display = 'none';
        loader.classList.add('hidden');
        animateCurrentView();
      }
    });
  }

  // Finish once DOM + fonts ready
  if (document.fonts) {
    document.fonts.ready.then(function() {
      setTimeout(finishLoader, 400);
    });
  } else {
    window.addEventListener('load', function() {
      setTimeout(finishLoader, 400);
    });
  }

  // ── CURSOR ────────────────────────────────
  if (window.matchMedia('(pointer: fine)').matches) {
    const cur = document.createElement('div');
    cur.id = 'cursor';
    document.body.appendChild(cur);

    let mx = -100, my = -100;
    let cx = -100, cy = -100;

    document.addEventListener('mousemove', function(e) {
      mx = e.clientX; my = e.clientY;
    });

    // smooth follow
    function updateCursor() {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cur.style.left = cx + 'px';
      cur.style.top  = cy + 'px';
      requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // expand on interactive elements
    const targets = 'a, button, [role="button"], .lesson-card, .gram-card, .opt, .chip, .match-item, .navitem';
    document.addEventListener('mouseover', function(e) {
      if (e.target.closest(targets)) cur.classList.add('expanded');
    });
    document.addEventListener('mouseout', function(e) {
      if (e.target.closest(targets)) cur.classList.remove('expanded');
    });
  }

  // ── PAGE TRANSITION OVERLAY ───────────────
  const overlay = document.createElement('div');
  overlay.id = 'page-transition';
  document.body.appendChild(overlay);

  // ── SPLIT TEXT INTO LINES ─────────────────
  function splitLines(el) {
    const text = el.textContent;
    // rough word-wrap into chunks of ~40 chars each line
    const words = text.split(' ');
    const lines = [];
    let current = '';
    words.forEach(function(w) {
      if ((current + ' ' + w).length > 38 && current) {
        lines.push(current.trim());
        current = w;
      } else {
        current += ' ' + w;
      }
    });
    if (current.trim()) lines.push(current.trim());

    el.innerHTML = lines.map(function(l) {
      return '<span class="reveal-text"><span class="line">' + l + '</span></span>';
    }).join(' ');
    return el.querySelectorAll('.line');
  }

  // ── ANIMATE VIEW ─────────────────────────
  function animateCurrentView() {
    const content = document.getElementById('content');
    if (!content) return;

    // hero heading reveal
    const heroH1 = content.querySelector('.hero h1');
    if (heroH1) {
      const lines = splitLines(heroH1);
      gsap.fromTo(lines,
        { y: '105%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.9, stagger: 0.12,
          ease: 'power3.out', delay: 0.1 }
      );
    }

    // hero eyebrow
    const eyebrow = content.querySelector('.hero .eyebrow');
    if (eyebrow) {
      gsap.fromTo(eyebrow,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.05 }
      );
    }

    // hero paragraph
    const heroP = content.querySelector('.hero p');
    if (heroP) {
      gsap.fromTo(heroP,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.4 }
      );
    }

    // hero tick mark
    const hero = content.querySelector('.hero');
    if (hero) hero.classList.add('in-view');

    // stat row
    const stats = content.querySelectorAll('.stat');
    if (stats.length) {
      gsap.fromTo(stats,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08,
          ease: 'power2.out', delay: 0.3 }
      );
    }

    // path row
    const pathRow = content.querySelector('.path-row');
    if (pathRow) {
      gsap.fromTo(pathRow,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.4 }
      );
    }

    // section labels
    const labels = content.querySelectorAll('.section-label');
    gsap.fromTo(labels,
      { opacity: 0, x: -12 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1,
        ease: 'power2.out', delay: 0.45 }
    );

    // cards stagger
    const cards = content.querySelectorAll('.lesson-card, .gram-card');
    if (cards.length) {
      gsap.fromTo(cards,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.06,
          ease: 'power2.out', delay: 0.5 }
      );
    }

    // exercises
    const exItems = content.querySelectorAll('.ex');
    if (exItems.length) {
      gsap.fromTo(exItems,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.07,
          ease: 'power2.out', delay: 0.2 }
      );
    }

    // vocab items
    const vocabItems = content.querySelectorAll('.vocab-item');
    if (vocabItems.length) {
      gsap.fromTo(vocabItems,
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05,
          ease: 'power2.out', delay: 0.2 }
      );
    }

    // gram card
    const gram = content.querySelector('.gram');
    if (gram) {
      gsap.fromTo(gram,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.15 }
      );
    }
  }

  // ── HOOK INTO APP NAVIGATION ──────────────
  // Wrap the existing renderView with page transition
  function pageTransitionIn(cb) {
    gsap.fromTo(overlay,
      { scaleY: 0, transformOrigin: 'bottom' },
      {
        scaleY: 1, duration: 0.35, ease: 'power3.inOut',
        onComplete: cb
      }
    );
  }

  function pageTransitionOut() {
    gsap.to(overlay, {
      scaleY: 0, transformOrigin: 'top',
      duration: 0.35, ease: 'power3.inOut',
      onComplete: animateCurrentView
    });
  }

  // Expose for app.js to call
  window.NF = {
    animateView: animateCurrentView,
    pageIn: pageTransitionIn,
    pageOut: pageTransitionOut,
    finishLoader: finishLoader
  };

  // ── CONTENT OBSERVER (triggered on DOM changes) ─
  const contentEl = document.getElementById('content');
  if (contentEl) {
    const mo = new MutationObserver(function(mutations) {
      const added = mutations.some(function(m) { return m.addedNodes.length > 0; });
      if (added) {
        // small delay so GSAP sees rendered elements
        requestAnimationFrame(function() {
          setTimeout(animateCurrentView, 30);
        });
      }
    });
    mo.observe(contentEl, { childList: true, subtree: false });
  }

})();
