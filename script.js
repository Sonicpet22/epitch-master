/* ePitch Master — renderer & interactions (เนื้อหาทั้งหมดอยู่ใน data.js) */
(function () {
  "use strict";
  var D = window.EPM;
  if (!D) { console.error("data.js not loaded"); return; }

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  /* ---------- button tokens → styled keycaps ---------- */
  var KEYS = {
    X: '<i class="k ps-x" title="Cross">✕</i>', O: '<i class="k ps-o" title="Circle">○</i>',
    T: '<i class="k ps-t" title="Triangle">△</i>', S: '<i class="k ps-s" title="Square">□</i>',
    A: '<i class="k xb-a">A</i>', B: '<i class="k xb-b">B</i>', Y: '<i class="k xb-y">Y</i>', XX: '<i class="k xb-x">X</i>'
  };
  function kbd(str) {
    return esc(str).replace(/\[([A-Z0-9]+)\]/g, function (m, t) {
      if (KEYS[t]) return KEYS[t];
      return '<i class="k sh">' + t + "</i>";
    });
  }
  function fmtDate(iso) {
    var m = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    var p = iso.split("-");
    return parseInt(p[2], 10) + " " + m[parseInt(p[1], 10) - 1] + " " + p[0];
  }
  function html(id, s) { var el = document.getElementById(id); if (el) el.innerHTML = s; }
  function cardHTML(o, cls) {
    return '<div class="glass mini reveal ' + (cls || "") + '"><span class="mini-ic">' + o.icon + "</span><h4>" + esc(o.t) + "</h4><p>" + kbd(o.d) + "</p></div>";
  }

  /* ---------- HERO ---------- */
  html("heroWeek", esc(D.meta.weekLabel));
  html("heroVersion", "เวอร์ชันเกมที่อ้างอิง: <b>" + esc(D.meta.gameVersion) + "</b>");
  html("platformChips", D.platforms.map(function (p) {
    return '<span class="chip"><em>' + p.icon + "</em>" + esc(p.name) + "</span>";
  }).join(""));
  $$("[data-kbd]").forEach(function (el) { el.innerHTML = kbd(el.getAttribute("data-kbd")); });

  /* ---------- 1) OVERVIEW ---------- */
  html("crossplayList", D.crossplay.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join(""));
  html("modesGrid", D.modes.map(function (m) {
    return '<div class="glass mini reveal"><span class="mini-ic">' + m.icon + "</span><h4>" + esc(m.name) + "</h4><p>" + esc(m.text) + "</p></div>";
  }).join(""));

  /* ---------- 2) CONSOLE TABLES ---------- */
  function ctrlTable(rows) {
    var h = "<thead><tr><th>คำสั่ง</th><th><span class='th-ps'>PlayStation</span></th><th><span class='th-xb'>Xbox / PC</span></th><th>หมายเหตุ</th></tr></thead><tbody>";
    rows.forEach(function (r) {
      h += "<tr" + (r.flag ? " class='flag'" : "") + "><td data-l='คำสั่ง'><b>" + esc(r.action) + (r.flag ? " <sup>*</sup>" : "") + "</b></td>" +
        "<td data-l='PS' class='keys'><span class='v'>" + kbd(r.ps) + "</span></td>" +
        "<td data-l='Xbox' class='keys'><span class='v'>" + kbd(r.xb) + "</span></td>" +
        "<td data-l='หมายเหตุ' class='note'><span class='v'>" + kbd(r.note) + "</span></td></tr>";
    });
    return h + "</tbody>";
  }
  html("tblAttack", ctrlTable(D.consoleControls.attack));
  html("tblDefence", ctrlTable(D.consoleControls.defence));
  html("tblGK", ctrlTable(D.consoleControls.gk));
  html("consoleFoot", "ℹ️ " + kbd(D.consoleControls.footnote));

  /* ---------- 3) MOBILE ---------- */
  function scheme(s, cls, icon) {
    return '<div class="glass card scheme reveal ' + cls + '"><div class="scheme-head"><span class="scheme-ic">' + icon + "</span><div><h3>" + esc(s.title) + "</h3><p>" + esc(s.desc) + "</p></div></div>" +
      '<ul class="gestures">' + s.rows.map(function (r) {
        return '<li><span class="g">' + esc(r.g) + '</span><span class="arrow">→</span><span class="a">' + esc(r.a) + "</span></li>";
      }).join("") + "</ul></div>";
  }
  html("mobileSchemes", scheme(D.mobileControls.classic, "classic", "🕹️") + scheme(D.mobileControls.flick, "flick", "👆"));
  html("mobileTips", D.mobileControls.tips.map(function (t) { return cardHTML(t); }).join(""));
  html("mobileFoot", "ℹ️ " + esc(D.mobileControls.footnote));

  /* ---------- REMOTE PLAY ---------- */
  var R = D.remotePlay;
  html("remoteNote", "<b>💡 </b>" + kbd(R.note));
  html("remoteReqs", R.reqs.map(function (r) { return "<div><dt>" + esc(r.k) + "</dt><dd>" + esc(r.v) + "</dd></div>"; }).join(""));
  html("remoteSteps", R.steps.map(function (s) { return "<li><b>" + esc(s.t) + "</b><span>" + esc(s.d) + "</span></li>"; }).join(""));
  html("remoteLatency", R.latency.map(function (t) { return cardHTML(t); }).join(""));
  function cmp(o, cls, ic) {
    return '<div class="glass card cmp reveal ' + cls + '"><h3>' + ic + " " + esc(o.title) + '</h3><div class="pc"><ul class="pros">' +
      o.pros.map(function (p) { return "<li>" + kbd(p) + "</li>"; }).join("") + '</ul><ul class="cons">' +
      o.cons.map(function (p) { return "<li>" + kbd(p) + "</li>"; }).join("") + "</ul></div></div>";
  }
  html("remoteCompare", cmp(R.compare.touch, "touch", "👆") + cmp(R.compare.pad, "pad recommended", "🎮"));

  /* ---------- 4) TECHNIQUES ---------- */
  function tech(list, cls) {
    return list.map(function (t) {
      return '<div class="glass tcard reveal ' + cls + '"><div class="t-top"><span class="mini-ic">' + t.icon + "</span><h4>" + esc(t.t) + "</h4></div><p>" + esc(t.d) + "</p>" +
        '<div class="how only-console"><span class="how-l">🎮 คอนโซล</span>' + kbd(t.console) + "</div>" +
        '<div class="how only-mobile"><span class="how-l">📱 มือถือ</span>' + kbd(t.mobile) + "</div></div>";
    }).join("");
  }
  html("techAttack", tech(D.techniques.attack, "atk"));
  html("techDefence", tech(D.techniques.defence, "def"));

  /* ---------- 5) FORMATIONS (SVG pitch) ---------- */
  var pitchN = 0;
  function pitchSVG(pos) {
    var W = 200, H = 260, gid = "pg" + (pitchN++);
    var s = '<svg class="fpitch" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="ตำแหน่งผู้เล่น">' +
      '<defs><linearGradient id="' + gid + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c3b2a"/><stop offset="1" stop-color="#0a2c22"/></linearGradient></defs>' +
      '<rect x="0" y="0" width="200" height="260" rx="12" fill="url(#' + gid + ')"/>';
    for (var i = 0; i < 8; i++) s += '<rect x="6" y="' + (6 + i * 31) + '" width="188" height="15.5" fill="rgba(255,255,255,.025)"/>';
    s += '<g fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1.4"><rect x="6" y="6" width="188" height="248" rx="4"/><line x1="6" y1="130" x2="194" y2="130"/><circle cx="100" cy="130" r="22"/>' +
      '<rect x="52" y="6" width="96" height="36"/><rect x="76" y="6" width="48" height="14"/><rect x="52" y="218" width="96" height="36"/><rect x="76" y="240" width="48" height="14"/></g>';
    pos.forEach(function (p, idx) {
      var x = 6 + p[0] / 100 * 188, y = 6 + p[1] / 100 * 248;
      var gk = p[2] === "GK";
      s += '<g class="pl" style="--d:' + (idx * 40) + 'ms"><circle cx="' + x + '" cy="' + y + '" r="9.5" class="' + (gk ? "gkc" : "plc") + '"/>' +
        '<text x="' + x + '" y="' + (y + 19) + '" text-anchor="middle">' + p[2] + "</text></g>";
    });
    return s + "</svg>";
  }
  html("formations", D.formations.map(function (f) {
    return '<article class="glass fcard reveal"><div class="f-head"><h4>' + esc(f.name) + '</h4><span class="tag">' + esc(f.tag) + "</span></div>" + pitchSVG(f.pos) +
      '<dl class="fdl"><div><dt>✅ จุดแข็ง</dt><dd>' + esc(f.good) + "</dd></div><div><dt>⚠️ จุดอ่อน</dt><dd>" + esc(f.bad) + "</dd></div><div><dt>🧭 เข้ากับ</dt><dd>" + esc(f.fit) + "</dd></div></dl></article>";
  }).join(""));
  html("fluidNote", "<b>🆕 Fluid Formation:</b> " + esc(D.fluidNote));
  html("playstyles", D.playstyles.map(function (p) {
    return '<div class="glass ps-card reveal' + (p.isNew ? " is-new" : "") + '"><div class="ps-head"><span class="mini-ic">' + p.icon + "</span><h4>" + esc(p.name) + "</h4>" + (p.isNew ? '<span class="new">ใหม่ v6</span>' : "") + "</div>" +
      '<p><b>ใช้เมื่อ:</b> ' + esc(p.when) + '</p><p><b>ทีมเล่นแบบ:</b> ' + esc(p.how) + '</p><p class="watch"><b>ระวัง:</b> ' + esc(p.watch) + "</p></div>";
  }).join(""));
  html("instructions", D.instructions.map(function (i) {
    return '<div class="ins"><span class="side ' + (i.side === "รุก" ? "s-atk" : "s-def") + '">' + esc(i.side) + "</span><b>" + esc(i.name) + "</b><p>" + esc(i.d) + "</p></div>";
  }).join(""));
  html("instrNote", "ℹ️ " + esc(D.instructionsNote));

  /* ---------- 6) DEVELOPMENT ---------- */
  var P = D.progression;
  html("progCats", P.categories.map(function (c, i) { return '<span class="cat" style="--i:' + i + '">' + esc(c) + "</span>"; }).join(""));
  html("progCatsNote", esc(P.categoriesNote));
  html("progTable", "<thead><tr><th>ตำแหน่ง</th><th>ลงก่อน (หลัก)</th><th>รอง</th></tr></thead><tbody>" +
    P.byPosition.map(function (r) { return "<tr><td data-l='ตำแหน่ง'><span class='pos'>" + esc(r.pos) + "</span></td><td data-l='หลัก'><span class='v'><b>" + esc(r.main) + "</b></span></td><td data-l='รอง' class='note'><span class='v'>" + esc(r.sub) + "</span></td></tr>"; }).join("") + "</tbody>");
  html("progTableNote", "ℹ️ " + esc(P.byPositionNote));
  html("progPrinciples", P.principles.map(function (t) { return cardHTML(t, "row"); }).join(""));
  html("valueTips", P.value.map(function (t) { return cardHTML(t); }).join(""));

  /* ---------- 7) NEWS ---------- */
  html("updateBadge", '<span class="live-dot"></span> อัปเดตล่าสุด <b>' + fmtDate(D.meta.lastUpdated) + "</b> · " + esc(D.meta.gameVersion) + '<br><span class="next">ถัดไป: ' + esc(D.meta.nextVersion) + "</span>");
  html("newsList", D.news.map(function (n) {
    return '<article class="tl-item glass reveal' + (n.hot ? " hot" : "") + '"><div class="tl-date"><b>' + fmtDate(n.date) + '</b><span class="tag">' + esc(n.tag) + "</span></div><h4>" + esc(n.title) + "</h4><p>" + esc(n.body) + '</p><div class="tl-src">' +
      n.sources.map(function (s) { return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">↗ ' + esc(s.name) + "</a>"; }).join("") + "</div></article>";
  }).join(""));
  html("metaNotes", D.metaNotes.map(function (m) {
    return '<div class="meta-it"><span>' + m.icon + "</span><div><b>" + esc(m.title) + "</b><p>" + esc(m.text) + '</p><small>แหล่ง: ' + esc(m.src) + "</small></div></div>";
  }).join(""));
  html("officialLinks", D.officialLinks.map(function (l) {
    return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener"><span>' + l.icon + "</span>" + esc(l.name) + "<em>↗</em></a>";
  }).join(""));

  /* ---------- FOOTER SOURCES ---------- */
  html("sourcesGrid", D.sources.map(function (g) {
    return '<div class="src-col"><h4>' + g.icon + " " + esc(g.type) + ' <span class="' + (g.used ? "used" : "watch") + '">' + (g.used ? "ใช้อ้างอิงฉบับนี้" : "ช่องทางติดตามรายสัปดาห์") + "</span></h4><ul>" +
      g.items.map(function (i) { return '<li><a href="' + esc(i.url) + '" target="_blank" rel="noopener">' + esc(i.name) + "</a></li>"; }).join("") + "</ul></div>";
  }).join(""));
  html("footUpdated", "อัปเดตเนื้อหาล่าสุด " + fmtDate(D.meta.lastUpdated) + " · ปุ่มและเมตาอาจเปลี่ยนหลังแพตช์ — ตรวจ Command List ในเกมเสมอ · แก้ไขเนื้อหาทั้งหมดได้ที่ไฟล์ data.js");

  /* ---------- swipe hints for mobile carousels ---------- */
  $$(".snap").forEach(function (el) {
    var h = document.createElement("div");
    h.className = "snap-hint";
    h.innerHTML = "ปัดซ้าย–ขวาเพื่อดูทั้งหมด (" + el.children.length + ") <i>→</i>";
    el.parentNode.insertBefore(h, el);
  });

  /* ---------- PLATFORM TOGGLE ---------- */
  var root = document.documentElement;
  function setPlatform(p, save) {
    root.setAttribute("data-platform", p);
    $$("[data-set-platform]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-set-platform") === p)); });
    if (save) { try { localStorage.setItem("epm-platform", p); } catch (e) {} }
  }
  var saved = null; try { saved = localStorage.getItem("epm-platform"); } catch (e) {}
  var qp = (location.search.match(/platform=(console|mobile)/) || [])[1];
  setPlatform(qp || saved || "console", false);
  $$("[data-set-platform]").forEach(function (b) {
    b.addEventListener("click", function () { setPlatform(b.getAttribute("data-set-platform"), true); });
  });

  /* ---------- NAV: burger, scrollspy, progress ---------- */
  var nav = $("#nav"), burger = $("#burger"), links = $("#navLinks");
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  $$("#navLinks a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }); });

  var sections = ["home", "console", "mobile", "remote", "techniques", "tactics", "development", "news"].map(function (id) { return document.getElementById(id); });
  var prog = $("#scrollProgress"), toTop = $("#toTop");
  function onScroll() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.transform = "scaleX(" + (h > 0 ? y / h : 0) + ")";
    nav.classList.toggle("scrolled", y > 30);
    toTop.classList.toggle("show", y > 700);
    var cur = "home";
    sections.forEach(function (s) { if (s && s.getBoundingClientRect().top < window.innerHeight * 0.35) cur = s.id; });
    $$("#navLinks a").forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + cur); });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------- REVEAL ON SCROLL ---------- */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = $$(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el, i) { el.style.setProperty("--rd", (i % 4) * 70 + "ms"); io.observe(el); });
  }

  /* ---------- subtle parallax on hero beams ---------- */
  if (!reduce) {
    var hero = $(".stadium");
    window.addEventListener("pointermove", function (e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 2, y = (e.clientY / window.innerHeight - 0.5) * 2;
      hero.style.setProperty("--px", x.toFixed(3));
      hero.style.setProperty("--py", y.toFixed(3));
    }, { passive: true });
  }
})();
