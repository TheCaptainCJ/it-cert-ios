// IT Cert iOS — App controller (vanilla JS, no deps)
(function () {
  'use strict';

  const STORAGE_KEY = 'itCertIosProgress_v1';
  let state = {
    currentCert: null,
    currentLessonIdx: 0,
    progress: loadProgress()
  };

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }
  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  }
  function getCertProgress(certId) {
    return state.progress[certId] || { lessons: {}, quizBest: 0 };
  }
  function setLessonDone(certId, lessonIdx, done) {
    const p = getCertProgress(certId);
    p.lessons[lessonIdx] = !!done;
    state.progress[certId] = p;
    saveProgress();
  }

  // ---------- View routing ----------
  function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    const back = document.getElementById('backBtn');
    back.hidden = (id === 'homeView');
    window.scrollTo(0, 0);
  }

  function setTitle(t) { document.getElementById('topTitle').textContent = t; }

  // ---------- Home ----------
  function renderHome() {
    setTitle('IT Cert Prep');
    const grid = document.getElementById('certGrid');
    grid.innerHTML = '';
    COURSES.forEach(c => {
      const p = getCertProgress(c.id);
      const total = c.lessons.length;
      const done = Object.values(p.lessons).filter(Boolean).length;
      const pct = total ? Math.round((done / total) * 100) : 0;
      const card = document.createElement('button');
      card.className = 'cert-card' + (c.type === 'powershell' ? ' ps' : c.type === 'microsoft' ? ' ms' : '');
      card.innerHTML = `
        <span class="badge">${c.badge}</span>
        <div class="title">${c.name}</div>
        <div class="code">${c.code}</div>
        <div class="desc">${c.desc}</div>
        <div class="prog"><div class="prog-fill" style="width:${pct}%"></div></div>
        <div class="prog-text">${done}/${total} lessons · ${pct}%${p.quizBest ? ' · Best quiz: ' + p.quizBest + '%' : ''}</div>
      `;
      card.addEventListener('click', () => openCert(c.id));
      grid.appendChild(card);
    });
    showView('homeView');
  }

  // ---------- Cert detail ----------
  function openCert(certId) {
    const c = COURSES.find(x => x.id === certId);
    if (!c) return;
    state.currentCert = c;
    setTitle(c.short || c.name);
    const h = document.getElementById('certHeader');
    h.innerHTML = `<h2>${c.name}</h2><div class="meta">${c.code} · ${c.lessons.length} lessons · ${c.quiz.length} practice Qs</div>`;
    renderLessonsTab();
    renderQuizTab();
    activateTab('lessons');
    showView('certView');
  }

  function activateTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    document.getElementById('lessonsTab').classList.toggle('active', tab === 'lessons');
    document.getElementById('quizTab').classList.toggle('active', tab === 'quiz');
  }

  function renderLessonsTab() {
    const c = state.currentCert;
    const p = getCertProgress(c.id);
    const el = document.getElementById('lessonsTab');
    el.innerHTML = '<div class="lesson-list"></div>';
    const list = el.querySelector('.lesson-list');
    c.lessons.forEach((l, i) => {
      const done = !!p.lessons[i];
      const item = document.createElement('button');
      item.className = 'lesson-item' + (done ? ' done' : '');
      item.innerHTML = `
        <span class="num">${done ? '✓' : (i + 1)}</span>
        <span class="ltitle">${l.title}</span>
        <span class="chev">›</span>
      `;
      item.addEventListener('click', () => openLesson(i));
      list.appendChild(item);
    });
  }

  function renderQuizTab() {
    const c = state.currentCert;
    const el = document.getElementById('quizTab');
    el.innerHTML = `
      <p style="color:var(--muted);font-size:14px;margin:0 0 12px">
        ${c.quiz.length} questions. Tap an answer — explanation appears below.
      </p>
      <button class="btn primary" id="startQuiz">Start practice quiz</button>
    `;
    document.getElementById('startQuiz').addEventListener('click', () => startQuiz());
  }

  // ---------- Lesson ----------
  function openLesson(idx) {
    const c = state.currentCert;
    if (!c) return;
    state.currentLessonIdx = idx;
    const l = c.lessons[idx];
    setTitle(`${idx + 1}/${c.lessons.length}`);
    const el = document.getElementById('lessonContent');
    el.innerHTML = `<h1>${l.title}</h1>${l.body}`;

    const p = getCertProgress(c.id);
    const done = !!p.lessons[idx];
    const mark = document.getElementById('markDone');
    mark.textContent = done ? '✓ Done' : 'Mark Done';
    mark.onclick = () => {
      setLessonDone(c.id, idx, !done);
      openLesson(idx);
    };
    document.getElementById('prevLesson').disabled = (idx === 0);
    document.getElementById('nextLesson').disabled = (idx === c.lessons.length - 1);
    document.getElementById('prevLesson').onclick = () => openLesson(idx - 1);
    document.getElementById('nextLesson').onclick = () => openLesson(idx + 1);

    showView('lessonView');
  }

  // ---------- Quiz ----------
  function startQuiz() {
    const c = state.currentCert;
    const questions = shuffle([...c.quiz]).slice(0, Math.min(15, c.quiz.length));
    let qIdx = 0;
    let correctCount = 0;

    setTitle(`Quiz · ${c.short || c.name}`);
    showView('quizView');
    renderQ();

    function renderQ() {
      const runner = document.getElementById('quizRunner');
      if (qIdx >= questions.length) {
        const pct = Math.round((correctCount / questions.length) * 100);
        const p = getCertProgress(c.id);
        if (pct > (p.quizBest || 0)) { p.quizBest = pct; state.progress[c.id] = p; saveProgress(); }
        runner.innerHTML = `
          <div class="quiz-summary">
            <div class="score">${pct}%</div>
            <div class="label">${correctCount} / ${questions.length} correct</div>
            <div style="margin-top:20px;display:flex;gap:8px">
              <button class="btn" id="qHome">Home</button>
              <button class="btn primary" id="qAgain">Try again</button>
            </div>
          </div>
        `;
        document.getElementById('qHome').onclick = () => renderHome();
        document.getElementById('qAgain').onclick = () => startQuiz();
        return;
      }
      const q = questions[qIdx];
      runner.innerHTML = `
        <div class="q-card">
          <div class="q-meta">Question ${qIdx + 1} of ${questions.length}</div>
          <p class="q-text">${q.q}</p>
          <div class="q-options" id="qOpts"></div>
          <div class="q-explain" id="qExp" style="display:none"></div>
          <button class="btn primary" id="qNext" style="margin-top:14px;display:none">Next</button>
        </div>
      `;
      const opts = document.getElementById('qOpts');
      q.options.forEach((opt, i) => {
        const b = document.createElement('button');
        b.className = 'q-opt';
        b.innerHTML = `<span class="letter">${String.fromCharCode(65 + i)}</span><span>${opt}</span>`;
        b.addEventListener('click', () => pick(i, b));
        opts.appendChild(b);
      });

      function pick(choice, btn) {
        if (opts.dataset.locked) return;
        opts.dataset.locked = '1';
        const right = choice === q.answer;
        if (right) correctCount++;
        Array.from(opts.children).forEach((c, i) => {
          if (i === q.answer) c.classList.add('correct');
          else if (i === choice) c.classList.add('wrong');
        });
        const exp = document.getElementById('qExp');
        exp.style.display = 'block';
        exp.textContent = q.explain || (right ? 'Correct.' : 'Incorrect.');
        const next = document.getElementById('qNext');
        next.style.display = 'block';
        next.onclick = () => { qIdx++; renderQ(); };
      }
    }
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------- Wire UI ----------
  document.getElementById('backBtn').addEventListener('click', () => {
    if (document.getElementById('lessonView').classList.contains('active') ||
        document.getElementById('quizView').classList.contains('active')) {
      openCert(state.currentCert.id);
    } else {
      renderHome();
    }
  });
  document.querySelectorAll('.tab').forEach(t => {
    t.addEventListener('click', () => activateTab(t.dataset.tab));
  });

  const drawer = document.getElementById('drawer');
  const scrim = document.getElementById('drawerScrim');
  document.getElementById('menuBtn').addEventListener('click', () => {
    drawer.classList.add('open'); scrim.classList.add('open');
  });
  scrim.addEventListener('click', () => {
    drawer.classList.remove('open'); scrim.classList.remove('open');
  });
  document.querySelectorAll('.drawer-link').forEach(b => {
    b.addEventListener('click', () => {
      const go = b.dataset.go;
      drawer.classList.remove('open'); scrim.classList.remove('open');
      if (go === 'home') renderHome();
      if (go === 'reset') {
        if (confirm('Reset ALL progress? Cannot undo.')) {
          state.progress = {}; saveProgress(); renderHome();
        }
      }
      if (go === 'about') {
        alert('IT Cert Prep — iOS Edition\nOffline PWA. Add to Home Screen via Safari Share menu.');
      }
      if (go === 'progress') {
        const lines = COURSES.map(c => {
          const p = getCertProgress(c.id);
          const done = Object.values(p.lessons).filter(Boolean).length;
          return `${c.short || c.name}: ${done}/${c.lessons.length} · Quiz best: ${p.quizBest || 0}%`;
        });
        alert('Progress\n\n' + lines.join('\n'));
      }
    });
  });

  // Boot
  if (typeof COURSES === 'undefined') {
    document.getElementById('certGrid').innerHTML = '<p style="color:var(--danger)">Course data failed to load.</p>';
    return;
  }
  renderHome();
})();
