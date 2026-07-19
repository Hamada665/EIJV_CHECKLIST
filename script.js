/* ==========================================================================
   MA FEUILLE DE ROUTE — EiJV Saint-Quentin
   Données strictement basées sur les documents officiels EiJV / UPJV.
   ========================================================================== */

/* ---------------------------------------------------------------
   1. DONNÉES — Checklist par phase du parcours
   --------------------------------------------------------------- */
const PHASES = [
  {
    id: "avant_visa",
    label: "Avant le visa",
    icon: "1",
    title: "Avant de recevoir le visa",
    subtitle: "Les documents ne détaillent pas la procédure de visa elle-même — ces démarches administratives peuvent en revanche être menées en parallèle.",
    items: [
      { text: "Recevoir l'identifiant OPI par mail (commence par « MO »)", status: "obligatoire", dep: "Préalable à toute inscription", source: "Notice première inscription" },
      { text: "Compléter le questionnaire « droits différenciés » dès sa réception", status: "obligatoire", dep: "Détermine l'éligibilité à l'exonération", source: "Notice première inscription" },
      { text: "S'acquitter de la CVEC (105 €) sur cvec.etudiant.gouv.fr", status: "obligatoire", dep: "Préalable à l'inscription en ligne", source: "Notice première inscription" },
      { text: "Réaliser l'inscription administrative en ligne (7 → 22 juillet 2026)", status: "obligatoire", dep: "CVEC acquittée + identifiant OPI", source: "Guide inscriptions EIJV" },
      { text: "S'acquitter des droits d'inscription (630 €, payable en 3 fois)", status: "obligatoire", dep: "Inscription en ligne validée", source: "Guide inscriptions EIJV" },
      { text: "Déposer les pièces justificatives sur la plateforme « PJ Web »", status: "obligatoire", dep: "Inscription en ligne effectuée", source: "Notice première inscription" },
      { text: "Rejoindre le groupe WhatsApp « EiJV – recherche logement »", status: "recommande", dep: "Recherche de logement à Saint-Quentin", source: "Note pratique logement" },
      { text: "Démarches liées au visa lui-même", status: "info", dep: "Non mentionné dans les documents", source: "—" }
    ]
  },
  {
    id: "visa_recu",
    label: "Visa reçu",
    icon: "2",
    title: "Dès réception du visa",
    subtitle: "Aucune démarche spécifique à cette étape n'est mentionnée dans les documents officiels fournis.",
    items: [
      { text: "Démarches liées à la réception du visa", status: "info", dep: "Non mentionné dans les documents", source: "—" }
    ]
  },
  {
    id: "avant_depart",
    label: "Avant départ",
    icon: "3",
    title: "Avant le départ vers la France",
    subtitle: "Les documents ne détaillent pas le départ lui-même, mais ces éléments doivent être finalisés avant cette étape.",
    items: [
      { text: "Vérifier que le dossier d'inscription est validé par l'administration", status: "obligatoire", dep: "Sous 72h ouvrées après paiement + pièces", source: "Notice première inscription" },
      { text: "Créer et activer son Espace Numérique de Travail (ENT)", status: "obligatoire", dep: "https://webmail.etud.u-picardie.fr/validation/", source: "Notice première inscription" },
      { text: "Télécharger le certificat de scolarité via l'ENT", status: "obligatoire", dep: "ENT activé", source: "Guide de l'étudiant ingénieur" },
      { text: "Sécuriser un logement (bail signé) ou prévoir une solution temporaire", status: "recommande", dep: "AFEV/KAPS, CROUS, résidences privées", source: "Note pratique logement" },
      { text: "Demander la garantie Visale en l'absence de garant", status: "recommande", dep: "Renforce le dossier locatif", source: "Note pratique logement" },
      { text: "Démarches de départ liées au visa (rendez-vous consulaire, retrait…)", status: "info", dep: "Non mentionné dans les documents", source: "—" }
    ]
  },
  {
    id: "arrivee",
    label: "Arrivée",
    icon: "4",
    title: "Dès l'arrivée en France",
    subtitle: "Les points d'accueil disponibles à votre arrivée, d'après les documents.",
    items: [
      { text: "Se présenter au Guichet d'accueil « Bienvenue en France » si besoin d'accompagnement", status: "recommande", dep: "31 août → 17 sept., Pôle OFRE, Amiens, lun-jeu 9h30-12h / 13h30-16h", source: "Guichet d'accueil international" },
      { text: "Finaliser le logement si non encore fait (CROUS, AFEV/KAPS…)", status: "recommande", dep: "Trouverunlogement.lescrous.fr, Lokaviz", source: "Note pratique logement" },
      { text: "Se présenter au guichet unique EiJV si l'inscription en ligne n'a pas pu être finalisée", status: "recommande", dep: "31 août → 17 sept. 2026 — aucune inscription possible sur place", source: "Notice première inscription" }
    ]
  },
  {
    id: "avant_rentree",
    label: "Avant rentrée",
    icon: "5",
    title: "Avant la rentrée",
    subtitle: "Les derniers points à vérifier avant le jour J.",
    items: [
      { text: "Vérifier la réception ou le retrait de la carte étudiante", status: "obligatoire", dep: "Envoyée si inscription en juillet, sinon retrait à la scolarité", source: "Mode opératoire inscriptions" },
      { text: "Vérifier l'activation complète de l'ENT", status: "obligatoire", dep: "Nécessaire pour l'emploi du temps et les documents", source: "Notice première inscription" },
      { text: "Être présent à la pré-rentrée EiJV Saint-Quentin — lundi 31 août 2026, 9h30", status: "obligatoire", dep: "5 Allée Marguerite Yourcenar, Saint-Quentin", source: "Mode opératoire inscriptions EIJV" }
    ]
  },
  {
    id: "apres_rentree",
    label: "Après rentrée",
    icon: "6",
    title: "Après la rentrée",
    subtitle: "Le suivi de la vie étudiante une fois les cours commencés.",
    items: [
      { text: "Début officiel des cours — Semestre 5, lundi 7 septembre 2026", status: "obligatoire", dep: "Semaine 2 du calendrier EIJV", source: "Calendrier EIJV 2026/2027" },
      { text: "Consulter son emploi du temps sur l'ENT", status: "obligatoire", dep: "ENT activé", source: "Guide de l'étudiant ingénieur" },
      { text: "S'inscrire aux pratiques valorisées (culture, sport, langues, engagement)", status: "recommande", dep: "Via l'ENT, en début de semestre", source: "Guide de l'étudiant ingénieur" },
      { text: "Se rapprocher de la scolarité de Saint-Quentin pour toute question", status: "recommande", dep: "eijv@u-picardie.fr · 03 22 82 70 30", source: "Guide de l'étudiant ingénieur" }
    ]
  }
];

/* ---------------------------------------------------------------
   2. DONNÉES — Calendrier officiel (juillet / août / septembre 2026)
   --------------------------------------------------------------- */
const EVENTS = [
  { start: "2026-07-07", end: "2026-07-22", title: "Inscription en ligne — phase principale", desc: "Ouverture le 7 juillet à 14h, fermeture le 22 juillet à 12h. Inscription en ligne uniquement, impossible depuis une tablette ou un téléphone." },
  { start: "2026-07-24", end: "2026-08-23", title: "Fermeture de l'Université", desc: "Aucune réponse du service assistance pendant cette période." },
  { start: "2026-08-25", end: "2026-09-10", title: "Inscription en ligne — phase complémentaire", desc: "Pour finaliser une inscription non complétée en phase principale." },
  { start: "2026-08-31", end: "2026-08-31", title: "Pré-rentrée EiJV Saint-Quentin", desc: "Présence obligatoire. Rendez-vous à 9h30 au 5 Allée Marguerite Yourcenar." },
  { start: "2026-08-31", end: "2026-09-17", title: "Guichet unique EiJV", desc: "Accompagnement aux démarches administratives et paiement des droits si non réglé en ligne. Aucune inscription possible sur place." },
  { start: "2026-08-31", end: "2026-09-17", title: "Guichet d'accueil « Bienvenue en France »", desc: "Pôle OFRE, 10 rue Frédéric Petit, Amiens. Lundi à jeudi, 9h30-12h et 13h30-16h." },
  { start: "2026-09-07", end: "2026-09-07", title: "Début des cours — Semestre 5", desc: "Semaine 2 du calendrier EIJV 2026/2027." }
];

/* ---------------------------------------------------------------
   3. DONNÉES — Éléments à ne pas oublier
   --------------------------------------------------------------- */
const WARNINGS = [
  "L'inscription administrative s'effectue en ligne uniquement — impossible sur tablette ou téléphone portable.",
  "En tant qu'étudiant extracommunautaire, attendre impérativement l'identifiant OPI avant toute démarche.",
  "Le questionnaire « droits différenciés » est envoyé automatiquement dès l'ouverture des inscriptions : inutile d'écrire avant.",
  "La photo d'identité doit être au format JPEG/JPG, sinon la carte étudiante ne pourra pas être éditée.",
  "Le non-paiement d'une échéance entraîne la résiliation de l'inscription.",
  "En cas de paiement en plusieurs fois, fournir rapidement un RIB, sous peine d'annulation.",
  "Avant de valider l'inscription en ligne, vérifier le récapitulatif et valider son adresse mail, sinon le lien « PJ Web » ne sera pas reçu.",
  "La présence à la pré-rentrée du 31 août 2026 à Saint-Quentin est obligatoire.",
  "Aucun certificat de scolarité n'est délivré par la scolarité — uniquement via l'ENT une fois activé.",
  "Le visa et les démarches consulaires ne sont pas abordés dans les documents fournis."
];

/* ---------------------------------------------------------------
   4. ÉTAT — Persistance locale des cases cochées
   --------------------------------------------------------------- */
const STORAGE_KEY = "eijv-roadmap-state";
let state = {};
try { state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch (e) { state = {}; }

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

let activePhase = PHASES[0].id;

/* ---------------------------------------------------------------
   5. RENDU — Stepper
   --------------------------------------------------------------- */
const stepperEl = document.getElementById("stepper");

function phaseCompletion(phase) {
  const checkable = phase.items.filter(i => i.status !== "info");
  if (!checkable.length) return 0;
  const done = checkable.filter((it, idx) => state[itemKey(phase.id, phase.items.indexOf(it))]).length;
  return done / checkable.length;
}

function itemKey(phaseId, index) { return phaseId + ":" + index; }

function renderStepper() {
  stepperEl.innerHTML = "";
  PHASES.forEach(phase => {
    const btn = document.createElement("button");
    btn.className = "step-btn" + (phase.id === activePhase ? " is-active" : "");
    const completion = phaseCompletion(phase);
    if (completion >= 1) btn.classList.add("is-done");

    const dot = document.createElement("span");
    dot.className = "step-dot";
    dot.innerHTML = completion >= 1 ? '<i class="fa-solid fa-check"></i>' : phase.icon;

    const label = document.createElement("span");
    label.className = "step-label";
    label.textContent = phase.label;

    btn.appendChild(dot);
    btn.appendChild(label);
    btn.addEventListener("click", () => setActivePhase(phase.id));
    stepperEl.appendChild(btn);
  });
}

function setActivePhase(id) {
  activePhase = id;
  renderStepper();
  renderChecklist();
  document.getElementById("checklist").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------------------------------------------------------------
   6. RENDU — Checklist
   --------------------------------------------------------------- */
const checklistList = document.getElementById("checklistList");
const phaseTitleEl = document.getElementById("phaseTitle");
const phaseSubtitleEl = document.getElementById("phaseSubtitle");
const phaseEyebrowEl = document.getElementById("phaseEyebrow");

const STATUS_LABEL = { obligatoire: "Obligatoire", recommande: "Recommandé", info: "Non mentionné" };

function renderChecklist() {
  const phase = PHASES.find(p => p.id === activePhase);
  phaseEyebrowEl.textContent = "Étape " + phase.icon + " / " + PHASES.length;
  phaseTitleEl.textContent = phase.title;
  phaseSubtitleEl.textContent = phase.subtitle;

  checklistList.innerHTML = "";
  phase.items.forEach((item, index) => {
    const key = itemKey(phase.id, index);
    const checked = !!state[key];

    const row = document.createElement("div");
    row.className = "check-item" + (checked ? " is-checked" : "");

    const box = document.createElement("div");
    box.className = "check-box";
    box.innerHTML = '<i class="fa-solid fa-check"></i>';
    if (item.status === "info") {
      box.style.visibility = "hidden";
    } else {
      box.addEventListener("click", () => {
        state[key] = !state[key];
        saveState();
        renderChecklist();
        renderStepper();
        updateProgress();
      });
    }

    const body = document.createElement("div");
    body.className = "check-body";

    const text = document.createElement("p");
    text.className = "check-text";
    text.textContent = item.text;

    const meta = document.createElement("div");
    meta.className = "check-meta";

    const badge = document.createElement("span");
    badge.className = "badge badge--" + item.status;
    badge.textContent = STATUS_LABEL[item.status];

    const sub = document.createElement("span");
    sub.className = "check-sub";
    sub.innerHTML = "<strong>" + item.dep + "</strong> · " + item.source;

    meta.appendChild(badge);
    meta.appendChild(sub);
    body.appendChild(text);
    body.appendChild(meta);

    row.appendChild(box);
    row.appendChild(body);
    checklistList.appendChild(row);
  });
}

/* ---------------------------------------------------------------
   7. PROGRESSION GLOBALE
   --------------------------------------------------------------- */
const RING_CIRC = 2 * Math.PI * 22;
const ringFill = document.getElementById("progressRingFill");
const progressValue = document.getElementById("progressValue");
const boardingPlane = document.getElementById("boardingPlane");

function updateProgress() {
  let total = 0, done = 0;
  PHASES.forEach(phase => {
    phase.items.forEach((item, index) => {
      if (item.status === "info") return;
      total++;
      if (state[itemKey(phase.id, index)]) done++;
    });
  });
  const ratio = total ? done / total : 0;
  const offset = RING_CIRC - ratio * RING_CIRC;
  ringFill.style.strokeDasharray = RING_CIRC.toFixed(2);
  ringFill.style.strokeDashoffset = offset.toFixed(2);
  progressValue.textContent = Math.round(ratio * 100) + "%";
}

/* ---------------------------------------------------------------
   8. CALENDRIER
   --------------------------------------------------------------- */
const MONTHS = [
  { index: 6, year: 2026, label: "Juillet" },
  { index: 7, year: 2026, label: "Août" },
  { index: 8, year: 2026, label: "Septembre" }
];
let activeMonth = 0;
let selectedDate = null;

const calendarMonthsEl = document.getElementById("calendarMonths");
const calendarGridEl = document.getElementById("calendarGrid");
const calendarEventsEl = document.getElementById("calendarEvents");
const DOW = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

function parseDate(str) {
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function eventsForDay(date) {
  return EVENTS.filter(ev => {
    const s = parseDate(ev.start), e = parseDate(ev.end);
    return date >= new Date(s.getFullYear(), s.getMonth(), s.getDate()) &&
           date <= new Date(e.getFullYear(), e.getMonth(), e.getDate());
  });
}

function eventsForMonth(monthIndex, year) {
  return EVENTS.filter(ev => {
    const s = parseDate(ev.start), e = parseDate(ev.end);
    const monthStart = new Date(year, monthIndex, 1);
    const monthEnd = new Date(year, monthIndex + 1, 0);
    return s <= monthEnd && e >= monthStart;
  });
}

function renderMonthTabs() {
  calendarMonthsEl.innerHTML = "";
  MONTHS.forEach((m, i) => {
    const btn = document.createElement("button");
    btn.className = "month-btn" + (i === activeMonth ? " is-active" : "");
    btn.textContent = m.label + " " + m.year;
    btn.addEventListener("click", () => { activeMonth = i; selectedDate = null; renderCalendar(); });
    calendarMonthsEl.appendChild(btn);
  });
}

function renderCalendar() {
  renderMonthTabs();
  const month = MONTHS[activeMonth];
  calendarGridEl.innerHTML = "";

  DOW.forEach(d => {
    const el = document.createElement("div");
    el.className = "cal-dow";
    el.textContent = d;
    calendarGridEl.appendChild(el);
  });

  const firstDay = new Date(month.year, month.index, 1);
  const daysInMonth = new Date(month.year, month.index + 1, 0).getDate();
  let startOffset = firstDay.getDay() - 1; // Lundi = 0
  if (startOffset < 0) startOffset = 6;

  for (let i = 0; i < startOffset; i++) {
    const empty = document.createElement("div");
    empty.className = "cal-day is-empty";
    calendarGridEl.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(month.year, month.index, d);
    const dayEvents = eventsForDay(date);
    const cell = document.createElement("div");
    cell.className = "cal-day" + (dayEvents.length ? " has-event" : "");
    if (selectedDate && isSameDay(date, selectedDate)) cell.classList.add("is-selected");
    cell.textContent = d;
    if (dayEvents.length) {
      cell.addEventListener("click", () => {
        selectedDate = date;
        renderCalendar();
        renderEventsList(date);
      });
    }
    calendarGridEl.appendChild(cell);
  }

  renderEventsList(selectedDate);
}

function renderEventsList(highlightDate) {
  const month = MONTHS[activeMonth];
  const list = eventsForMonth(month.index, month.year);
  calendarEventsEl.innerHTML = "";

  if (!list.length) {
    const empty = document.createElement("p");
    empty.className = "check-sub";
    empty.textContent = "Aucune échéance ce mois-ci.";
    calendarEventsEl.appendChild(empty);
    return;
  }

  list.forEach(ev => {
    const s = parseDate(ev.start), e = parseDate(ev.end);
    const card = document.createElement("div");
    const highlighted = highlightDate &&
      highlightDate >= new Date(s.getFullYear(), s.getMonth(), s.getDate()) &&
      highlightDate <= new Date(e.getFullYear(), e.getMonth(), e.getDate());
    card.className = "event-card" + (highlighted ? " is-highlight" : "");

    const dateLabel = document.createElement("span");
    dateLabel.className = "event-date";
    dateLabel.textContent = isSameDay(s, e)
      ? formatDate(s)
      : formatDate(s) + " → " + formatDate(e);

    const title = document.createElement("span");
    title.className = "event-title";
    title.textContent = ev.title;

    const desc = document.createElement("p");
    desc.className = "event-desc";
    desc.textContent = ev.desc;

    card.appendChild(dateLabel);
    card.appendChild(title);
    card.appendChild(desc);
    calendarEventsEl.appendChild(card);

    if (highlighted) {
      requestAnimationFrame(() => card.scrollIntoView({ behavior: "smooth", block: "nearest" }));
    }
  });
}

function formatDate(d) {
  return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" });
}

/* ---------------------------------------------------------------
   9. AVERTISSEMENTS
   --------------------------------------------------------------- */
const warningsGrid = document.getElementById("warningsGrid");
function renderWarnings() {
  warningsGrid.innerHTML = "";
  WARNINGS.forEach(text => {
    const card = document.createElement("div");
    card.className = "warning-card";
    card.innerHTML = '<span class="warning-icon"><i class="fa-solid fa-triangle-exclamation"></i></span><p class="warning-text">' + text + '</p>';
    warningsGrid.appendChild(card);
  });
}

/* ---------------------------------------------------------------
   10. REVEAL ON SCROLL
   --------------------------------------------------------------- */
function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

/* ---------------------------------------------------------------
   INIT
   --------------------------------------------------------------- */
renderStepper();
renderChecklist();
updateProgress();
renderCalendar();
renderWarnings();
initReveal();
