const prayerTimes = {
  الفجر: "04:21",
  الشروق: "06:03",
  الظهر: "13:01",
  العصر: "16:37",
  المغرب: "19:58",
  العشاء: "21:29"
};

const adhanUrl = "https://www.islamcan.com/audio/adhan/azan2.mp3";

const quranData = [
  {"number":1,"name":"الفاتحة"},{"number":2,"name":"البقرة"},{"number":3,"name":"آل عمران"},{"number":4,"name":"النساء"},{"number":5,"name":"المائدة"},{"number":6,"name":"الأنعام"},{"number":7,"name":"الأعراف"},{"number":8,"name":"الأنفال"},{"number":9,"name":"التوبة"},{"number":10,"name":"يونس"},{"number":11,"name":"هود"},{"number":12,"name":"يوسف"},{"number":13,"name":"الرعد"},{"number":14,"name":"إبراهيم"},{"number":15,"name":"الحجر"},{"number":16,"name":"النحل"},{"number":17,"name":"الإسراء"},{"number":18,"name":"الكهف"},{"number":19,"name":"مريم"},{"number":20,"name":"طه"},{"number":21,"name":"الأنبياء"},{"number":22,"name":"الحج"},{"number":23,"name":"المؤمنون"},{"number":24,"name":"النور"},{"number":25,"name":"الفرقان"},{"number":26,"name":"الشعراء"},{"number":27,"name":"النمل"},{"number":28,"name":"القصص"},{"number":29,"name":"العنكبوت"},{"number":30,"name":"الروم"},{"number":31,"name":"لقمان"},{"number":32,"name":"السجدة"},{"number":33,"name":"الأحزاب"},{"number":34,"name":"سبأ"},{"number":35,"name":"فاطر"},{"number":36,"name":"يس"},{"number":37,"name":"الصافات"},{"number":38,"name":"ص"},{"number":39,"name":"الزمر"},{"number":40,"name":"غافر"},{"number":41,"name":"فصلت"},{"number":42,"name":"الشورى"},{"number":43,"name":"الزخرف"},{"number":44,"name":"الدخان"},{"number":45,"name":"الجاثية"},{"number":46,"name":"الأحقاف"},{"number":47,"name":"محمد"},{"number":48,"name":"الفتح"},{"number":49,"name":"الحجرات"},{"number":50,"name":"ق"},{"number":51,"name":"الذاريات"},{"number":52,"name":"الطور"},{"number":53,"name":"النجم"},{"number":54,"name":"القمر"},{"number":55,"name":"الرحمن"},{"number":56,"name":"الواقعة"},{"number":57,"name":"الحديد"},{"number":58,"name":"المجادلة"},{"number":59,"name":"الحشر"},{"number":60,"name":"الممتحنة"},{"number":61,"name":"الصف"},{"number":62,"name":"الجمعة"},{"number":63,"name":"المنافقون"},{"number":64,"name":"التغابن"},{"number":65,"name":"الطلاق"},{"number":66,"name":"التحريم"},{"number":67,"name":"الملك"},{"number":68,"name":"القلم"},{"number":69,"name":"الحاقة"},{"number":70,"name":"المعارج"},{"number":71,"name":"نوح"},{"number":72,"name":"الجن"},{"number":73,"name":"المزمل"},{"number":74,"name":"المدثر"},{"number":75,"name":"القيامة"},{"number":76,"name":"الإنسان"},{"number":77,"name":"المرسلات"},{"number":78,"name":"النبأ"},{"number":79,"name":"النازعات"},{"number":80,"name":"عبس"},{"number":81,"name":"التكوير"},{"number":82,"name":"الانفطار"},{"number":83,"name":"المطففين"},{"number":84,"name":"الانشقاق"},{"number":85,"name":"البروج"},{"number":86,"name":"الطارق"},{"number":87,"name":"الأعلى"},{"number":88,"name":"الغاشية"},{"number":89,"name":"الفجر"},{"number":90,"name":"البلد"},{"number":91,"name":"الشمس"},{"number":92,"name":"الليل"},{"number":93,"name":"الضحى"},{"number":94,"name":"الشرح"},{"number":95,"name":"التين"},{"number":96,"name":"العلق"},{"number":97,"name":"القدر"},{"number":98,"name":"البينة"},{"number":99,"name":"الزلزلة"},{"number":100,"name":"العاديات"},{"number":101,"name":"القارعة"},{"number":102,"name":"التكاثر"},{"number":103,"name":"العصر"},{"number":104,"name":"الهمزة"},{"number":105,"name":"الفيل"},{"number":106,"name":"قريش"},{"number":107,"name":"الماعون"},{"number":108,"name":"الكوثر"},{"number":109,"name":"الكافرون"},{"number":110,"name":"النصر"},{"number":111,"name":"المسد"},{"number":112,"name":"الإخلاص"},{"number":113,"name":"الفلق"},{"number":114,"name":"الناس"}
];

const hadithData = [
  {"slug":"bukhari","name":"صحيح البخاري"},
  {"slug":"muslim","name":"صحيح مسلم"},
  {"slug":"abudawud","name":"سنن أبي داود"},
  {"slug":"tirmidhi","name":"جامع الترمذي"},
  {"slug":"nasa'i","name":"سنن النسائي"},
  {"slug":"ibnmajah","name":"سنن ابن ماجه"},
  {"slug":"muwatta","name":"موطأ مالك"}
];

const azkar = {
  صباح: [
    { title: "آية الكرسي", text: "ٱللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ..." },
    { title: "الإخلاص والفلق والناس", text: "قُلْ هُوَ ٱللَّهُ أَحَدٌ ... / قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ ... / قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ ..." },
    { title: "سيد الاستغفار", text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ..." },
    { title: "أصبحنا وأصبح الملك لله", text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ..." }
  ],
  مساء: [
    { title: "آية الكرسي", text: "ٱللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ..." },
    { title: "الإخلاص والفلق والناس", text: "قُلْ هُوَ ٱللَّهُ أَحَدٌ ... / قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ ... / قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ ..." },
    { title: "أمسينا وأمسى الملك لله", text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ..." },
    { title: "بسم الله الذي لا يضر", text: "بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ..." }
  ]
};

const fixedTasks = ["صلاة الفجر","صلاة الظهر","صلاة العصر","صلاة المغرب","صلاة العشاء","ورد القرآن","ذكر الله"];

const state = {
  goodDeeds: 0,
  zikr: Number(localStorage.getItem("adhkarCount") || 0),
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  theme: localStorage.getItem("theme") || "dark",
  currentAdhkar: localStorage.getItem("currentAdhkar") || "صباح",
  lastPrayer: localStorage.getItem("lastPrayer") || "",
  completed: JSON.parse(localStorage.getItem("completedTasks") || "[]"),
  motivational: ["ممتاز! كمل واثبت.","أحسنت جدًا.","ربنا يبارك فيك.","خطوة جميلة جدًا.","استمر، أنت على الطريق الصح."]
};

const $ = id => document.getElementById(id);

function save() {
  localStorage.setItem("tasks", JSON.stringify(state.tasks));
  localStorage.setItem("adhkarCount", String(state.zikr));
  localStorage.setItem("theme", state.theme);
  localStorage.setItem("currentAdhkar", state.currentAdhkar);
  localStorage.setItem("lastPrayer", state.lastPrayer);
  localStorage.setItem("completedTasks", JSON.stringify(state.completed));
}

function toast(msg) {
  let el = document.getElementById("toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast";
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

async function requestNotify() {
  if (!("Notification" in window)) return toast("المتصفح لا يدعم الإشعارات");
  const p = await Notification.requestPermission();
  toast(p === "granted" ? "تم تفعيل الإشعارات" : "لم يتم تفعيل الإشعارات");
}

function notify(title, body) {
  if ("Notification" in window && Notification.permission === "granted") new Notification(title, { body });
}

function playAdhan() {
  const audio = $("adhanAudio");
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }
}

function renderPrayerTimes() {
  $("prayerTimes").innerHTML = Object.entries(prayerTimes).map(([name, time]) => `
    <div class="prayer-item"><strong>${name}</strong><span>${time}</span></div>
  `).join("");
}

function autoLocation() {
  if (!navigator.geolocation) {
    $("locationText").textContent = "الموقع غير مدعوم";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    pos => $("locationText").textContent = `الموقع: ${pos.coords.latitude.toFixed(2)}, ${pos.coords.longitude.toFixed(2)} | المواقيت مضبوطة`,
    () => $("locationText").textContent = "تعذر تحديد الموقع"
  );
}

function checkPrayer() {
  const now = new Date().toTimeString().slice(0, 5);
  Object.entries(prayerTimes).forEach(([name, time]) => {
    const key = `${name}-${time}-${now}`;
    if (now === time && state.lastPrayer !== key) {
      notify(`حان وقت ${name}`, `تذكير بصلاة ${name}`);
      playAdhan();
      state.lastPrayer = key;
      save();
      toast(`حان وقت ${name}`);
    }
  });
}

function renderQuran(list = quranData) {
  $("surahGrid").innerHTML = list.map(s => `
    <button class="prayer-item" type="button" onclick="openSurah(${s.number})">
      <strong>${s.number}</strong><span>سورة ${s.name}</span>
    </button>
  `).join("");
}

function renderBooks(list = hadithData) {
  $("bookGrid").innerHTML = list.map(b => `
    <button class="prayer-item" type="button" onclick="openHadith('${b.slug}','${b.name}')">
      <strong>${b.name}</strong><span>${b.slug}</span>
    </button>
  `).join("");
}

function renderAdhkar(type = state.currentAdhkar) {
  state.currentAdhkar = type;
  save();
  $("adhkarList").innerHTML = azkar[type].map(item => `
    <div class="adhkar-card">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <button class="btn alt done-btn" data-title="${item.title}">تمت القراءة</button>
    </div>
  `).join("");
  document.querySelectorAll(".done-btn").forEach(btn => {
    btn.onclick = () => {
      state.goodDeeds++;
      const msg = state.motivational[Math.floor(Math.random() * state.motivational.length)];
      notify("أحسنت", msg);
      toast(msg);
      loadStats();
    };
  });
}

function renderTasks() {
  $("taskList").innerHTML = fixedTasks.map(t => {
    const done = state.completed.includes(t);
    return `
      <li>
        <label><input type="checkbox" ${done ? "checked" : ""} onchange="doneFixed('${t}')"> ${t}</label>
        <button class="btn alt" onclick="doneFixed('${t}')">${done ? "مكتملة" : "إنجاز"}</button>
      </li>
    `;
  }).join("");
  save();
  loadStats();
}

window.doneFixed = function(task) {
  if (!state.completed.includes(task)) state.completed.push(task);
  state.goodDeeds++;
  const msg = state.motivational[Math.floor(Math.random() * state.motivational.length)];
  notify("أحسنت", msg);
  toast(msg);
  save();
  loadStats();
};

function rewardQuran() {
  state.goodDeeds++;
  const msg = state.motivational[Math.floor(Math.random() * state.motivational.length)];
  notify("ورد القرآن", msg);
  toast(msg);
  save();
  loadStats();
}

function openSurah(num) {
  const s = quranData.find(x => x.number === num);
  if (!s) return;
  $("surahView").classList.remove("hidden");
  $("surahTitle").textContent = `سورة ${s.name}`;
  $("surahMeta").textContent = "جاري تحميل السورة كاملة...";
  fetch(`https://api.alquran.cloud/v1/surah/${num}`)
    .then(r => r.json())
    .then(data => {
      $("surahMeta").textContent = `عدد الآيات: ${data.data.numberOfAyahs} | ${data.data.revelationType}`;
      $("ayahs").innerHTML = data.data.ayahs.map(a => `
        <div class="ayah">
          <div class="ayah-text">${a.text}<span class="ayah-number">${a.numberInSurah}</span></div>
        </div>
      `).join("");
      rewardQuran();
    })
    .catch(() => $("ayahs").innerHTML = `<div class="hadith-card">تعذر تحميل السورة الآن.</div>`);
}

function openHadith(slug, name) {
  $("bookView").classList.remove("hidden");
  $("bookTitle").textContent = name;
  $("bookMeta").textContent = slug;
  $("loadHadith").onclick = async () => {
    const id = $("hadithNo").value || 1;
    try {
      const res = await fetch(`https://ummahapi.com/api/hadith/${slug}/${id}`);
      const data = await res.json();
      const arabicText = data?.data?.hadith_arabic || data?.data?.hadithArabic || data?.data?.arabic || data?.hadith_arabic || data?.hadithArabic || data?.arabic || "";
      const englishText = data?.data?.hadith_english || data?.data?.hadithEnglish || data?.hadith_english || data?.hadithEnglish || "";
      $("hadithBox").innerHTML = `
        <div class="hadith-card">
          <h3>الحديث رقم ${id}</h3>
          <p>${arabicText || "لا توجد نسخة عربية"}</p>
          ${englishText ? `<hr /><p><strong>الترجمة:</strong> ${englishText}</p>` : ""}
        </div>
      `;
      state.goodDeeds++;
      notify("أحسنت", "أنت على خير. استمر.");
      toast("أحسنت");
      loadStats();
    } catch {
      $("hadithBox").innerHTML = `<div class="hadith-card">تعذر تحميل الحديث الآن.</div>`;
    }
  };
  $("loadHadith").click();
}

function parseHash() {
  const hash = location.hash;
  $("surahView").classList.add("hidden");
  $("bookView").classList.add("hidden");
  if (hash.startsWith("#quran")) {
    const q = new URLSearchParams(hash.split("?")[1] || "");
    openSurah(Number(q.get("s")));
  }
  if (hash.startsWith("#hadith")) {
    const q = new URLSearchParams(hash.split("?")[1] || "");
    openHadith(q.get("b"), q.get("n"));
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js").catch(() => {}));
}

$("themeToggle").onclick = () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  applyTheme();
};
$("notifyBtn").onclick = requestNotify;
$("adhanTestBtn").onclick = playAdhan;
$("showMorning").onclick = () => renderAdhkar("صباح");
$("showEvening").onclick = () => renderAdhkar("مساء");
$("countBtn").onclick = () => {
  state.zikr++;
  const msg = state.motivational[Math.floor(Math.random() * state.motivational.length)];
  notify("ذكر الله", msg);
  toast(msg);
  save();
  loadStats();
};
$("addTask").onclick = () => {
  const input = $("taskInput");
  if (!input.value.trim()) return;
  state.tasks.push({ text: input.value.trim(), done: false });
  input.value = "";
  renderTasks();
  toast("تمت إضافة المهمة");
};
$("quranSearch").oninput = e => renderQuran(quranData.filter(s => s.name.includes(e.target.value.trim())));
$("hadithSearch").oninput = e => renderBooks(hadithData.filter(b => b.name.includes(e.target.value.trim())));
$("backToQuran").onclick = () => location.hash = "#quran-section";
$("backToHadith").onclick = () => location.hash = "#hadith-section";

function applyTheme() {
  document.body.classList.toggle("light", state.theme === "light");
  $("themeToggle").textContent = state.theme === "light" ? "🌙" : "☀️";
  save();
}
function loadStats() {
  $("goodDeeds").textContent = state.goodDeeds;
  $("taskCount").textContent = state.tasks.length;
  $("zikrCount").textContent = state.zikr;
  $("count").textContent = state.zikr;
}

renderPrayerTimes();
renderQuran();
renderBooks();
renderAdhkar();
renderTasks();
applyTheme();
autoLocation();
loadStats();
parseHash();
window.addEventListener("hashchange", parseHash);
setInterval(checkPrayer, 30000);