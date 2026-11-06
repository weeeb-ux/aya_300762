

const CATS = {
  'ثقافة':  { cls: 'culture', icon: 'bi-book' },
  'رياضة':  { cls: 'sport',   icon: 'bi-trophy' },
  'موسيقى': { cls: 'music',   icon: 'bi-music-note-beamed' },
  'عائلي':  { cls: 'family',  icon: 'bi-balloon-heart' }
};

const EVENTS = [
  {
    id: 1, title: 'حفل الجامعة الموسيقي السنوي', category: 'موسيقى', date: '2026-11-03', time: '19:00',
    city: 'دمشق', venue: 'المسرح الجامعي الكبير', img: 'event1.svg', gallery: ['event1-b.svg', 'event1-c.svg'], featured: true,
    short: 'أمسية موسيقية يقدّمها طلاب الجامعة بمشاركة فرق محلية وعزف حي.',
    long: 'يعود الحفل السنوي بأجواء مميزة تجمع مواهب الطلاب مع فرق موسيقية محلية. تتنوع الفقرات بين الغناء الجماعي والعزف المنفرد والمقطوعات التراثية.',
    program: ['19:00 - استقبال الحضور وافتتاح الحفل', '19:30 - فقرة الفرق الطلابية', '21:00 - الحفل الختامي والعرض المشترك']
  },
  {
    id: 2, title: 'بطولة كرة القدم الجامعية', category: 'رياضة', date: '2026-11-05', time: '16:00',
    city: 'حلب', venue: 'الملعب الرياضي الجامعي', img: 'event2.svg', gallery: ['event2-b.svg', 'event2-c.svg'], featured: true,
    short: 'منافسات حماسية بين فرق كليات الجامعة على كأس البطولة.',
    long: 'تنطلق البطولة السنوية بمشاركة ثماني فرق تمثّل كليات الجامعة ومراكزها. تُقام المباريات بنظام خروج المغلوب مع جوائز للفائزين.',
    program: ['16:00 - حفل الافتتاح وتعريف الفرق', '16:30 - مباريات الدور الأول', '19:00 - المباراة النهائية وتوزيع الجوائز']
  },
  {
    id: 3, title: 'معرض الكتاب والثقافة', category: 'ثقافة', date: '2026-10-29', time: '10:00',
    city: 'دمشق', venue: 'مركز المعارض الثقافي', img: 'event3.svg', gallery: ['event3-b.svg', 'event3-c.svg'], featured: true,
    short: 'معرض يضم دور نشر وكتّاباً وندوات قراءة وتوقيع كتب.',
    long: 'يستضيف المعرض عشرات دور النشر والمكتبات الجامعية، مع جلسات حوارية حول القراءة والكتابة الإبداعية وركن لتبادل الكتب.',
    program: ['10:00 - افتتاح المعرض وجولة الضيوف', '12:00 - ندوة: القراءة في العصر الرقمي', '15:00 - حفل توقيع الكتب']
  },
  {
    id: 4, title: 'يوم العائلة المفتوح', category: 'عائلي', date: '2026-11-07', time: '11:00',
    city: 'اللاذقية', venue: 'حدائق الجامعة', img: 'event4.svg', gallery: ['event4-b.svg', 'event4-c.svg'], featured: false,
    short: 'يوم ترفيهي للعائلات مع ألعاب وعروض ومسابقات للأطفال.',
    long: 'يوم كامل من المرح لكل أفراد العائلة: ألعاب جماعية، ركن للرسم، عروض مسرحية للأطفال، ومنطقة طعام مفتوحة.',
    program: ['11:00 - فتح الأبواب وتسجيل العائلات', '13:00 - عروض الأطفال والمسابقات', '16:00 - سحب الجوائز والختام']
  },
  {
    id: 5, title: 'ماراثون الجامعة الخيري', category: 'رياضة', date: '2026-11-14', time: '07:00',
    city: 'حمص', venue: 'الحديقة العامة', img: 'event5.svg', gallery: ['event5-b.svg', 'event5-c.svg'], featured: true,
    short: 'سباق جري بمسافات متعددة يعود ريعه لدعم الطلاب.',
    long: 'ينظَّم الماراثون بثلاث مسافات (3 كم و5 كم و10 كم) ليناسب جميع المستويات. يعود ريع التسجيل إلى صندوق دعم الطلاب.',
    program: ['07:00 - تجمع المشاركين والإحماء', '07:30 - انطلاق السباقات', '10:00 - تتويج الفائزين']
  },
  {
    id: 6, title: 'أمسية شعرية شابة', category: 'ثقافة', date: '2026-11-19', time: '18:30',
    city: 'دمشق', venue: 'المركز الثقافي', img: 'event6.svg', gallery: ['event6-b.svg', 'event6-c.svg'], featured: false,
    short: 'أمسية يلتقي فيها شعراء شباب مع جمهور محبّي الكلمة.',
    long: 'أمسية هادئة تجمع أصواتاً شعرية من أجيال مختلفة، تتخللها مقطوعات عزف خفيفة مع فقرة ميكروفون مفتوح للجمهور.',
    program: ['18:30 - كلمة الافتتاح', '19:00 - قراءات الشعراء الضيوف', '20:15 - الميكروفون المفتوح']
  },
  {
    id: 7, title: 'ورشة البرمجة للأطفال', category: 'عائلي', date: '2026-11-26', time: '17:00',
    city: 'أونلاين', venue: 'منصة الجامعة الافتراضية', img: 'event7.svg', gallery: ['event7-b.svg', 'event7-c.svg'], featured: false,
    short: 'ورشة تفاعلية عن بعد تعلّم الأطفال أساسيات البرمجة.',
    long: 'ورشة مباشرة عبر الإنترنت للأطفال من عمر 8 إلى 13 سنة، يتعلمون فيها أفكار البرمجة بالألعاب والأحجيات الملونة.',
    program: ['17:00 - التعارف وقواعد الورشة', '17:20 - تحدّي البرمجة بالألغاز', '18:15 - عرض مشاريع الأطفال']
  },
  {
    id: 8, title: 'مهرجان الفنون الشعبية', category: 'موسيقى', date: '2026-12-04', time: '18:00',
    city: 'حلب', venue: 'الساحة المفتوحة', img: 'event8.svg', gallery: ['event8-b.svg', 'event8-c.svg'], featured: true,
    short: 'عروض فولكلورية ودبكة وموسيقى تراثية مميزة.',
    long: 'مهرجان يحتفي بالتراث الشعبي عبر عروض الدبكة والأغاني التراثية والأزياء التقليدية مع معرض للحرف اليدوية.',
    program: ['18:00 - موكب الافتتاح', '19:00 - عروض الفرق الفولكلورية', '21:00 - سهرة موسيقية ختامية']
  },
  {
    id: 9, title: 'ملتقى ريادة الأعمال', category: 'ثقافة', date: '2026-12-12', time: '15:00',
    city: 'أونلاين', venue: 'منصة الجامعة الافتراضية', img: 'event9.svg', gallery: ['event9-b.svg', 'event9-c.svg'], featured: false,
    short: 'لقاء عن بعد مع رواد أعمال يشاركون تجاربهم وخبراتهم.',
    long: 'يستضيف الملتقى رواد أعمال يشاركون قصص نجاحهم وإخفاقاتهم، مع جلسة أسئلة مباشرة ومسابقة لأفضل فكرة مشروع.',
    program: ['15:00 - الكلمة الافتتاحية', '15:30 - قصص نجاح رواد الأعمال', '17:00 - مسابقة أفضل فكرة مشروع']
  }
];

function catBadgeHTML(catName) {
  const c = CATS[catName] || { cls: 'culture', icon: 'bi-tag' };
  return `<span class="cat-badge ${c.cls}"><i class="bi ${c.icon}"></i> ${catName}</span>`;
}

function cardHTML(e) {
  return `
    <div class="col-12 col-md-6 col-lg-4">
      <article class="card event-card h-100">
        <div class="event-thumb">
          <img src="assets/img/${e.img}" alt="${e.title}">
          ${catBadgeHTML(e.category)}
        </div>
        <div class="card-body d-flex flex-column">
          <h3 class="h5 card-title fw-bold">${e.title}</h3>
          <p class="text-muted small mb-2"><i class="bi bi-calendar-event text-warning me-1"></i>${e.date} | ${e.time}</p>
          <p class="text-muted small mb-2"><i class="bi bi-geo-alt text-warning me-1"></i>${e.city} — ${e.venue}</p>
          <p class="card-text text-secondary small">${e.short}</p>
          <a href="event.html?id=${e.id}" class="btn btn-brand btn-sm mt-auto">التفاصيل <i class="bi bi-arrow-left"></i></a>
        </div>
      </article>
    </div>
  `;
}

// التبديل للوضغ الداكن و العكس
function setupDarkMode() {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;
  toggleBtn.addEventListener('click', function () {
    const cur = document.documentElement.getAttribute('data-bs-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', next);
    localStorage.setItem('svu_theme', next);
  });
}

// الرجوع للاعللا
function setupScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// صفحتنا الرئيسية
function initHomePage() {
  const feats = EVENTS.filter(e => e.featured);
  const inner = document.getElementById('featuredInner');
  const indicators = document.getElementById('featuredIndicators');

  if (inner && indicators) {
    inner.innerHTML = feats.map((e, i) => `
      <div class="carousel-item ${i === 0 ? 'active' : ''}">
        <img src="assets/img/${e.img}" class="slide-img d-block w-100" alt="${e.title}">
        <div class="slide-caption">
          <span class="badge bg-primary mb-2">${e.category}</span>
          <h3>${e.title}</h3>
          <p class="mb-2"><i class="bi bi-geo-alt"></i> ${e.city} — ${e.venue} | <i class="bi bi-calendar"></i> ${e.date}</p>
          <a class="btn btn-accent btn-sm" href="event.html?id=${e.id}">عرض التفاصيل</a>
        </div>
      </div>
    `).join('');

    indicators.innerHTML = feats.map((_, i) => `
      <button type="button" data-bs-target="#featuredCarousel" data-bs-slide-to="${i}" class="${i === 0 ? 'active' : ''}"></button>
    `).join('');

    new bootstrap.Carousel('#featuredCarousel', { interval: 4000, ride: 'carousel' });
  }


  // أقرب فعالية قادمة 
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = EVENTS.filter(x => x.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  const spot = upcoming[0] || EVENTS[0];
  const spotBox = document.getElementById('spotlight');
  if (spotBox && spot) {
    spotBox.innerHTML = `
      <div>
        <span class="badge bg-danger mb-2">الحدث المرتقب</span>
        <h3 class="h4 fw-bold">${spot.title}</h3>
        <p class="text-muted mb-1">${spot.short}</p>
        <small class="text-secondary"><i class="bi bi-clock"></i> ${spot.date} الساعة ${spot.time} — ${spot.city}</small>
      </div>
      <a href="event.html?id=${spot.id}" class="btn btn-brand">تفاصيل الفعالية</a>
    `;
  }

  // اخر الفعاليات
  const latestContainer = document.getElementById('latestEvents');
  if (latestContainer) {
    latestContainer.innerHTML = EVENTS.slice(0, 6).map(cardHTML).join('');
  }
}

// هذه صفحة الفعاليات و الفلترة
function initEventsPage() {
  const list = document.getElementById('eventsList');
  const q = document.getElementById('fSearch');
  const cat = document.getElementById('fCat');
  const city = document.getElementById('fCity');
  const from = document.getElementById('fFrom');
  const to = document.getElementById('fTo');
  const count = document.getElementById('resultCount');

  if (!list) return;

  // لتعبئة الخيارات
  Object.keys(CATS).forEach(k => cat.insertAdjacentHTML('beforeend', `<option value="${k}">${k}</option>`));
  const cities = Array.from(new Set(EVENTS.map(e => e.city)));
  cities.forEach(c => city.insertAdjacentHTML('beforeend', `<option value="${c}">${c}</option>`));

  // Check URL Param
  const urlCat = new URLSearchParams(window.location.search).get('cat');
  if (urlCat && CATS[urlCat]) cat.value = urlCat;

  function render() {
    const term = q.value.trim().toLowerCase();
    const res = EVENTS.filter(e => {
      if (term && !(e.title + ' ' + e.short + ' ' + e.venue).toLowerCase().includes(term)) return false;
      if (cat.value && e.category !== cat.value) return false;
      if (city.value && e.city !== city.value) return false;
      if (from.value && e.date < from.value) return false;
      if (to.value && e.date > to.value) return false;
      return true;
    });

    list.innerHTML = res.length ? res.map(cardHTML).join('') : '<div class="col-12 text-center py-5 text-muted"><h4>لا توجد نتائج مطابقة لخيارات البحث</h4></div>';
    if (count) count.textContent = `النتائج: ${res.length}`;
  }

  [q, cat, city, from, to].forEach(el => el && el.addEventListener('input', render));
  document.getElementById('fReset').addEventListener('click', () => {
    q.value = ''; cat.value = ''; city.value = ''; from.value = ''; to.value = ''; render();
  });

  render();
}

// صفحة تفاصيل الفعالية(يعني تشمل كل معلومات الفعالية هنا)
function initEventDetailPage() {
  const id = parseInt(new URLSearchParams(window.location.search).get('id')) || 1;
  const e = EVENTS.find(x => x.id === id) || EVENTS[0];

  document.title = `${e.title} | دليل فعاليات الجامعة`;
  if (document.getElementById('evTitle')) document.getElementById('evTitle').textContent = e.title;
  if (document.getElementById('evBadges')) document.getElementById('evBadges').innerHTML = catBadgeHTML(e.category);
  if (document.getElementById('evCover')) document.getElementById('evCover').src = `assets/img/${e.img}`;
  if (document.getElementById('evDesc')) document.getElementById('evDesc').textContent = e.long;
  if (document.getElementById('evDate')) document.getElementById('evDate').textContent = e.date;
  if (document.getElementById('evTime')) document.getElementById('evTime').textContent = e.time;
  if (document.getElementById('evPlace')) document.getElementById('evPlace').textContent = `${e.city} — ${e.venue}`;

  const prog = document.getElementById('evProgram');
  if (prog) prog.innerHTML = e.program.map(p => `<li><b>${p.split(' - ')[0]}</b> — ${p.split(' - ')[1] || ''}</li>`).join('');

  const gal = document.getElementById('evGallery');
  if (gal) {
    gal.innerHTML = [e.img, ...e.gallery].map(g => `
      <div class="col-4"><img src="assets/img/${g}" class="gallery-thumb" alt="صورة المعرض"></div>
    `).join('');
  }

  // Calendar .ics Download
  const calBtn = document.getElementById('btnCalendar');
  if (calBtn) {
    calBtn.addEventListener('click', () => {
      // تنسيق التاريخ والوقت  
      const day = e.date.replace(/-/g, '');
      const start = day + 'T' + e.time.replace(':', '') + '00';
      const endHour = String(Number(e.time.split(':')[0]) + 2).padStart(2, '0');
      const end = day + 'T' + endHour + e.time.split(':')[1] + '00';
      const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SVU Events//AR
BEGIN:VEVENT
UID:event-${e.id}@svu-events
DTSTAMP:${day}T000000
DTSTART:${start}
DTEND:${end}
SUMMARY:${e.title}
DESCRIPTION:${e.short}
LOCATION:${e.city} - ${e.venue}
END:VEVENT
END:VCALENDAR`;
      const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `event-${e.id}.ics`;
      link.click();
    });
  }

  // قسم المشاركة
  const shareBtn = document.getElementById('btnShare');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('تم نسخ رابط الفعالية بنجاح!'))
        .catch(() => window.prompt('انسخ رابط الفعالية:', window.location.href));
    });
  }

  // الفعاليات ذات الصلة :-)
  const rel = EVENTS.filter(x => x.id !== e.id && x.category === e.category).slice(0, 3);
  const relBox = document.getElementById('evRelated');
  if (relBox) relBox.innerHTML = rel.map(cardHTML).join('');

  // هنا يمكننا الحجز(بشكل وهمي)
  const bookForm = document.getElementById('bookForm');
  if (bookForm) {
    bookForm.addEventListener('submit', (ev) => {
      ev.preventDefault();
      document.getElementById('bookAlert').innerHTML = '<div class="alert alert-success">تم حجز مقعدك بنجاح! سنتواصل معك عبر البريد.</div>';
      bookForm.reset();
    });
  }
}

// التحقق من نموذج اتصل بنا
function initContactPage() {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('cName').value.trim();
    const email = document.getElementById('cEmail').value.trim();
    const msg = document.getElementById('cMsg').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 3) {
      alertBox.innerHTML = '<div class="alert alert-danger">يرجى كتابة اسم كامل لا يقل عن 3 أحرف.</div>';
    } else if (!emailRegex.test(email)) {
      alertBox.innerHTML = '<div class="alert alert-danger">يرجى إدخال بريد إلكتروني بصيغة صحيحة (example@domain.com).</div>';
    } else if (msg.length < 10) {
      alertBox.innerHTML = '<div class="alert alert-danger">يرجى كتابة رسالة توضيحية لا تقل عن 10 أحرف.</div>';
    } else {
      alertBox.innerHTML = '<div class="alert alert-success">تم استلام رسالتك بنجاح! شكراً لتواصلك معنا.</div>';
      form.reset();
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  setupDarkMode();
  setupScrollTop();

  const page = document.body.getAttribute('data-page');
  if (page === 'home') initHomePage();
  else if (page === 'events') initEventsPage();
  else if (page === 'event') initEventDetailPage();
  else if (page === 'contact') initContactPage();

  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
