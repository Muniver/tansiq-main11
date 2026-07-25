const COLLEGES = [
  { name: "كلية الحب والجواز", university: "جامعة القاهرة", minScore: 300 },
  { name: "كلية نظام الطيبات", university: "جامعة ضياء العوضي", minScore: 160 },
  { name: "كلية إدارة المصالح الحكومية", university: "جامعة الزقازيق", minScore: 294 },
  { name: "كلية حلب الأبقار", university: "جامعة الزقازيق الأهلية", minScore: 291 },
  { name: "كلية هندسة جر الكنبة من الصالة", university: "جامعة القاهرة", minScore: 288 },
  { name: "كلية قلي السمك", university: "جامعة قناة السويس", minScore: 285 },
  { name: "كلية إدارة القهاوي", university: "جامعة الزقازيق", minScore: 282 },
  { name: "كلية هندسة تخليل الطرشي", university: "جامعة بنها", minScore: 279 },
  { name: "كلية علوم البحث عن الفردة التانية من الشراب", university: "جامعة بنها", minScore: 276 },
  { name: "كلية هندسة غط البسكوت من غير ما يقع", university: "جامعة بنها", minScore: 273 },
  { name: "كلية تكنولوجيا رص علب الصلصة", university: "جامعة طنطا", minScore: 270 },
  { name: "كلية فك عقد الخراطيم", university: "جامعة أسوان", minScore: 267 },
  { name: "كلية تمليح الفسيخ", university: "جامعة كفر الشيخ", minScore: 264 },
  { name: "كلية ركن التوك توك", university: "جامعة فاقوس", minScore: 261 },
  { name: "كلية جر الكنبة", university: "جامعة بنها", minScore: 258 },
  { name: "كلية ترقيص الجمبري", university: "جامعة المنوفية", minScore: 255 },
  { name: "كلية تربية السحالي", university: "جامعة دمنهور", minScore: 252 },
  { name: "كلية فنون رمي الزلط", university: "جامعة الزقازيق", minScore: 249 },
  { name: "كلية خرطوم المطافي", university: "جامعة طنطا", minScore: 246 },
  { name: "كلية رص الطوب", university: "جامعة المنوفية", minScore: 243 },
  { name: "كلية كبس الكرنب", university: "جامعة سوهاج", minScore: 240 },
  { name: "المعهد العالي للفراخ", university: "جامعة ضياء العوضي", minScore: 237 },
  { name: "كلية لف بفرة", university: "جامعة أسيوط", minScore: 237 },
  { name: "معهد استيراد الكبدة", university: "جامعة المنصورة فرع البرازيل", minScore: 234 },
  { name: "معهد تنطيط المواشي", university: "جامعة بنها", minScore: 231 },
  { name: "معهد عصر قصب", university: "جامعة حلوان", minScore: 228 },
  { name: "معهد الكارو", university: "جامعة عين شمس", minScore: 225 },
  { name: "معهد تزغيط البط", university: "جامعة الفيوم", minScore: 222 },
  { name: "معهد تسليك البلاعات", university: "جامعة أسيوط", minScore: 219 },
  { name: "معهد ربط الفراخ", university: "جامعة ضياء العوضي", minScore: 216 },
  { name: "معهد شحن الحمير", university: "جامعة دمياط", minScore: 213 },
  { name: "معهد تلميع الحنفيات", university: "شمال الزنكلون", minScore: 210 },
  { name: "المعهد العالي للحواوشي", university: "جامعة العزايزية", minScore: 207 },
  { name: "معهد نفخ الكاوتش", university: "جامعة بورسعيد", minScore: 204 },
  { name: "معهد تشحيم موتوسيكلات", university: "جامعة طنطا", minScore: 201 },
  { name: "معهد كبس الملايات", university: "جامعة المنوفية", minScore: 198 },
  { name: "معهد شحن البطيخ", university: "جامعة جنوب الوادي", minScore: 195 },
  { name: "معهد تكنولوجيا الشيشة", university: "جامعة السلوم", minScore: 192 },
  { name: "معهد تقليب المحشي", university: "جامعة القاهرة", minScore: 189 },
  { name: "معهد فرز اللب الأبيض", university: "جامعة الإسماعيلية", minScore: 186 },
  { name: "معهد تقشير بطاطس", university: "جامعة المنصورة", minScore: 183 },
  { name: "معهد ترقيع الجلاليب", university: "جامعة كفر الشيخ", minScore: 180 },
  { name: "معهد صلصة الكشري", university: "جامعة تعالي بليل", minScore: 177 },
  { name: "معهد شطف الجرادل", university: "جامعة طنطا", minScore: 174 },
  { name: "معهد فني تكييف", university: "شمال الزنكلون", minScore: 171 },
  { name: "معهد فعص الفول", university: "جنوب قلابشو", minScore: 168 },
  { name: "معهد تغميس الطحينة بالكفتة", university: "نوسا الغيط", minScore: 165 },
  { name: "معهد مص قصب", university: "جامعة جنوب الوادي", minScore: 165 },
  { name: "معهد جر عربيات الفول", university: "البهو فريك", minScore: 162 },
  { name: "كلية عدل الشبشب", university: "أبو قراميط", minScore: 159 },
  { name: "معهد تهشيك الجمبري", university: "براشيم", minScore: 156 },
  { name: "المعهد العالي لتقشير البطاطس", university: "جامعة الزقازيق", minScore: 153 },
  { name: "معهد طقطقة الصوابع", university: "جامعة تعالي بليل", minScore: 150 },
  { name: "معهد إدارة طوابير العيش", university: "جامعة المنوفية", minScore: 147 },
  { name: "معهد صيانة المراوح", university: "جامعة المنصورة", minScore: 144 },
  { name: "معهد سقسقة بقسماط محروق", university: "جامعة حلوان", minScore: 141 },
  { name: "معهد عدّ حبات الرز", university: "جامعة الزقازيق الأهلية", minScore: 138 },
  { name: "معهد تنظيم درج المطبخ", university: "جامعة دمياط", minScore: 135 },
  { name: "معهد فتح أكياس الشيبسي", university: "جامعة عين شمس", minScore: 132 },
  { name: "معهد حبيب دين امي", university: "جامعة ضياء العوضي", minScore: 129 },
  { name: "معهد فتح الكرتونة", university: "جامعة السويس", minScore: 126 },
  { name: "معهد عدل الشبشب", university: "جامعة الفيوم", minScore: 123 },
  { name: "معهد البحث عن الريموت", university: "جامعة الجلالة", minScore: 120 },
  { name: "معهد كشط بواقي الكيك", university: "جامعة كفر الشيخ", minScore: 117 },
  { name: "معهد طابور العيش", university: "جامعة أسيوط", minScore: 114 },
  { name: "معهد فك اللحمة", university: "جامعة سوهاج", minScore: 111 },
  { name: "معهد تربية النمل البلدي", university: "جامعة جنوب الوادي", minScore: 108 },
  { name: "المعهد العالي للف الأسلاك", university: "جامعة المنوفية", minScore: 105 },
  { name: "معهد تكنولوجيا الكفتة", university: "جامعة طنطا", minScore: 102 },
  { name: "معهد إدارة اكواب الي جمب السرير", university: "جامعة القاهرة", minScore: 99 },
  { name: "معهد سواقة ميكروباص", university: "جامعة المنصورة", minScore: 96 },
  { name: "كلية هندسة تركيب الكالونة", university: "جامعة تعالي بليل", minScore: 93 },
  { name: "معهد تكنولوجيا مسح الترابيزة", university: "جامعة دمياط", minScore: 90 },
  { name: "معهد إدارة مصاريف الفكة", university: "جامعة المنوفية", minScore: 87 },
  { name: "معهد تكسير ازاز", university: "جامعة طنطا", minScore: 84 },
  { name: "معهد تكنولوجيا تخزين الأكياس جوه بعضها", university: "جامعة الزقازيق", minScore: 81 },
  { name: "معهد رغيف الحبة الكاملة", university: "جامعة ضياء العوضي", minScore: 78 },
  { name: "معهد كبس الملوخية", university: "شمال الزنكلون", minScore: 75 },
  { name: "معهد فك غطا البرطمان", university: "نوسا الغيط", minScore: 72 },
  { name: "كلية تكنولوجيا رص الجزم", university: "البهو فريك", minScore: 69 },
  { name: "معهد السيد البدوي", university: "جامعة طنطا", minScore: 66 },
  { name: "معهد تكنولوجيا سلق البيض", university: "جامعة المنصورة", minScore: 63 },
  { name: "معهد تركيب نجف", university: "جنوب السودان", minScore: 60 },
  { name: "معهد تكنولوجيا قفل السوستة", university: "جامعة البدرشين", minScore: 57 }
].map((c, i) => ({ id: i, name: c.name, uni: c.university, minScore: c.minScore }));

const ADMIN_PASSWORD = "jolipa12";

// ==== Firebase Realtime Database (shared storage across all devices) ====
const FIREBASE_URL = "https://tansiq-debcf-default-rtdb.firebaseio.com";

// keys look like "applicant:12345" -> stored at path applicant/12345
function keyToPath(key){
  const i = key.indexOf(':');
  if(i === -1) return key;
  return key.slice(0,i) + '/' + key.slice(i+1);
}

async function storageGet(key){
  try{
    const res = await fetch(`${FIREBASE_URL}/${keyToPath(key)}.json`);
    if(!res.ok) return null;
    const data = await res.json();
    return (data === null || data === undefined) ? null : data;
  }catch(e){
    console.error('storageGet failed', e);
    return null;
  }
}

async function storageSet(key, value){
  try{
    const res = await fetch(`${FIREBASE_URL}/${keyToPath(key)}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value)
    });
    return { ok: res.ok };
  }catch(e){
    console.error('storageSet failed', e);
    return { ok:false };
  }
}

async function storageList(prefix){
  try{
    const node = prefix.endsWith(':') ? prefix.slice(0,-1) : prefix;
    const res = await fetch(`${FIREBASE_URL}/${node}.json`);
    if(!res.ok) return { keys: [] };
    const data = await res.json();
    if(!data) return { keys: [] };
    const childKeys = Array.isArray(data)
      ? data.map((_,i)=>String(i)).filter(i => data[i] !== null && data[i] !== undefined)
      : Object.keys(data);
    const keys = childKeys.map(k => `${node}:${k}`);
    return { keys };
  }catch(e){
    console.error('storageList failed', e);
    return { keys: [] };
  }
}

function setActiveNav(page){
  document.querySelectorAll('nav.pages a').forEach(a=>{
    a.classList.toggle('active', a.dataset.p === page);
  });
}

function getApplicantDraft(){
  try{ return JSON.parse(sessionStorage.getItem('applicantDraft')) || null; }catch(e){ return null; }
}
function setApplicantDraft(value){
  sessionStorage.setItem('applicantDraft', JSON.stringify(value));
}
function clearApplicantDraft(){
  sessionStorage.removeItem('applicantDraft');
}
function getRankedIds(){
  try{ return JSON.parse(sessionStorage.getItem('rankedIds')) || []; }catch(e){ return []; }
}
function setRankedIds(ids){
  sessionStorage.setItem('rankedIds', JSON.stringify(ids));
}
function clearRankedIds(){
  sessionStorage.removeItem('rankedIds');
}
function setLastSubmission(value){
  sessionStorage.setItem('lastSubmission', JSON.stringify(value));
}
function getLastSubmission(){
  try{ return JSON.parse(sessionStorage.getItem('lastSubmission')) || null; }catch(e){ return null; }
}

async function seatExists(seat){
  const res = await storageGet('applicant:'+seat);
  return !!res;
}

function showPageMessage(message){
  const main = document.querySelector('main');
  if(main){
    main.innerHTML = `<div class="form-card" style="text-align:center;"><p style="margin:0; font-size:1rem; color:var(--ink-soft);">${message}</p><div style="margin-top:16px;"><a href="register.html" class="ghost">العودة للتسجيل</a></div></div>`;
  }
}

function initRegisterPage(){
  setActiveNav('register');
  const draft = getApplicantDraft();
  if(draft){
    document.getElementById('in-name').value = draft.name || '';
    document.getElementById('in-seat').value = draft.seat || '';
    document.getElementById('in-score').value = draft.score || '';
  }
  const stepBtn = document.getElementById('step1-btn');
  if(stepBtn){
    stepBtn.addEventListener('click', () => {
      if (typeof window.handleRegisterNext === 'function') return window.handleRegisterNext();
      if (typeof window.goToRank === 'function') return window.goToRank();
    });
  }
}

async function goToRank(){
  const name = document.getElementById('in-name').value.trim();
  const seat = document.getElementById('in-seat').value.trim();
  const score = document.getElementById('in-score').value.trim();
  let ok = true;
  setFieldError('f-name',''); setFieldError('f-seat',''); setFieldError('f-score','');

  if(!name){ setFieldError('f-name','الاسم مطلوب.'); ok=false; }
  if(!seat || !/^[0-9]{3,10}$/.test(seat)){ setFieldError('f-seat','رقم جلوس غير صحيح (أرقام فقط).'); ok=false; }
  const scoreNum = parseFloat(score);
  if(score==='' || isNaN(scoreNum) || scoreNum<0 || scoreNum>320){ setFieldError('f-score','المجموع لازم يكون رقم بين 0 و 320.'); ok=false; }
  if(!ok) return;

  const btn = document.getElementById('step1-btn');
  btn.disabled = true; btn.textContent = 'جاري التحقق...';
  try{
    const exists = await seatExists(seat);
    if(exists){
      setFieldError('f-seat','رقم الجلوس ده مسجل قبل كده، مينفعش يتسجل مرتين.');
      btn.disabled = false; btn.textContent = 'التالي: ترتيب الرغبات ⟵';
      return;
    }
  }catch(e){
    btn.disabled = false; btn.textContent = 'التالي: ترتيب الرغبات ⟵';
    setFieldError('f-seat','حصل خطأ بسيط، جرّب مرة تانية.');
    return;
  }

  setApplicantDraft({ name, seat, score: scoreNum });
  clearRankedIds();
  window.location.href = 'rank.html';
}

window.goToRank = goToRank;

function setFieldError(id, msg){
  const f = document.getElementById(id);
  if(!f) return;
  f.classList.toggle('err', !!msg);
  const msgEl = f.querySelector('.msg');
  if(msgEl) msgEl.textContent = msg || '';
}

function initRankPage(){
  setActiveNav('register');
  const draft = getApplicantDraft();
  // Allow browsing the rank page even without a saved draft, but disable submission.
  if(!draft){
    const note = document.getElementById('rank-count-note');
    if(note) note.textContent = 'للتقديم: ادخل بياناتك أولاً من صفحة التسجيل.';
  }
  document.getElementById('avail-search')?.addEventListener('input', renderAvailable);
  document.getElementById('submit-btn')?.addEventListener('click', submitApplication);
  renderAvailable();
  renderRanked();
}

function renderAvailable(){
  const filter = (document.getElementById('avail-search')?.value||'').trim();
  const list = document.getElementById('avail-list');
  if(!list) return;
  const ids = getRankedIds();
  const remaining = COLLEGES.filter(c=>{
    return !ids.includes(c.id) && (!filter || c.name.includes(filter) || c.uni.includes(filter));
  });
  list.innerHTML = remaining.map(c=>`
    <div class="avail-item" onclick="addToRank(${c.id})">
      <span class="plus">+</span>
      <span class="name">${c.name}<span class="uni">${c.uni}</span></span>
    </div>`).join('') || '<div class="empty-note">كل الكليات اتاختيرت بالفعل.</div>';
  if(!remaining.length && !filter){
    list.innerHTML = '<div class="empty-note">كل الكليات اتاختيرت بالفعل.</div>';
  }
}

window.addToRank = function(id){
  const ids = getRankedIds();
  if(ids.includes(id)) return;
  ids.push(id);
  setRankedIds(ids);
  renderAvailable();
  renderRanked();
};

window.removeFromRank = function(id){
  const ids = getRankedIds().filter(x=>x!==id);
  setRankedIds(ids);
  renderAvailable();
  renderRanked();
};

let sortableInstance = null;
function renderRanked(){
  const list = document.getElementById('rank-list');
  const empty = document.getElementById('rank-empty');
  if(!list || !empty) return;
  const ids = getRankedIds();
  if(ids.length===0){
    list.innerHTML = '';
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    list.innerHTML = ids.map((id,idx)=>{
      const c = COLLEGES[id];
      return `<div class="rank-item" data-id="${id}">
        <span class="handle" onclick="moveUp(${id})">↑</span>
        <span class="badge">${idx+1}</span>
        <span class="name" style="flex:1;">${c.name}<span class="uni">${c.uni}</span></span>
        <span class="rm" onclick="removeFromRank(${id})">✕</span>
      </div>`;
    }).join('');
  }
  const eligibleCount = COLLEGES.length;
  const count = ids.length;
  const note = document.getElementById('rank-count-note');
  if(note) note.textContent = `اخترت ${count} من ${eligibleCount} كلية.`;
  if(sortableInstance){ sortableInstance.destroy(); sortableInstance = null; }
  // Disable drag-and-drop sorting and prefer explicit arrow controls.
  // If you later want to re-enable drag sorting, remove this block.
}

// Move an item up (decrease its index) when the up-arrow handle is clicked.
window.moveUp = function(id){
  const ids = getRankedIds();
  const idx = ids.indexOf(id);
  if(idx <= 0) return; // already first
  // swap with previous
  const newIds = ids.slice();
  const tmp = newIds[idx-1]; newIds[idx-1] = newIds[idx]; newIds[idx] = tmp;
  setRankedIds(newIds);
  renderRanked();
};

async function submitApplication(){
  const draft = getApplicantDraft();
  if(!draft){ window.location.href = 'register.html'; return; }
  const ids = getRankedIds();
  if(ids.length===0){ alert('لازم ترتّب رغبة كلية واحدة على الأقل قبل التقديم.'); return; }
  const btn = document.getElementById('submit-btn');
  if(btn){ btn.disabled = true; btn.textContent = 'جاري التسجيل...'; }
  const exists = await seatExists(draft.seat);
  if(exists){
    if(btn){ btn.disabled=false; btn.textContent='📮 تقديم الرغبات'; }
    alert('يبدو أن رقم الجلوس ده اتسجل من متصفح تاني في نفس اللحظة. جرّب رقم جلوس مختلف من صفحة البيانات.');
    window.location.href = 'register.html';
    return;
  }
  const record = { name: draft.name, seat: draft.seat, score: draft.score, order: ids.slice(), ts: Date.now() };
  try{
    await storageSet('applicant:'+record.seat, JSON.stringify(record));
  }catch(e){
    alert('حصل خطأ أثناء الحفظ، حاول تاني.');
    if(btn){ btn.disabled=false; btn.textContent='📮 تقديم الرغبات'; }
    return;
  }
  if(btn){ btn.disabled=false; btn.textContent='📮 تقديم الرغبات'; }
  setLastSubmission(record);
  clearApplicantDraft();
  clearRankedIds();
  window.location.href = 'confirm.html';
}

function initConfirmPage(){
  setActiveNav('register');
  const record = getLastSubmission();
  if(!record){ showPageMessage('ما فيش تسجيل جاهز للعرض دلوقتي. ارجع لصفحة التسجيل.'); return; }
  const list = document.getElementById('receipt-list');
  const rid = document.getElementById('receipt-id');
  if(list){ list.innerHTML = record.order.map(id=>`<li>${COLLEGES[id]?.name||'غير معروف'}</li>`).join(''); }
  if(rid){ rid.textContent = `رقم الجلوس: ${record.seat} — الاسم: ${record.name} — المجموع: ${record.score}`; }
  const gb = document.getElementById('get-result');
  if(gb){ gb.addEventListener('click', ()=>{
    location.href = 'result.html?seat=' + encodeURIComponent(record.seat);
  }); }
}

function initDirectoryPage(){
  setActiveNav('colleges');
  const draft = getApplicantDraft();
  if(!draft){ window.location.href = 'register.html'; return; }

  const input = document.getElementById('avail-search');
  if(input){ input.addEventListener('input', renderAvailable); }
  const submit = document.getElementById('submit-btn');
  if(submit){ submit.addEventListener('click', submitApplication); }
  renderAvailable();
  renderRanked();
}

function renderDirectory(){
  const filter = (document.getElementById('dir-search')?.value||'').trim();
  const grid = document.getElementById('dir-grid');
  if(!grid) return;
  const items = COLLEGES.filter(c=>!filter || c.name.includes(filter) || c.uni.includes(filter));
  grid.innerHTML = items.map(c=>`
    <div class="dir-card">
      <div class="num">#${c.id+1}</div>
      <div class="name">${c.name}</div>
      <div class="uni">${c.uni}</div>
    </div>`).join('') || '<div class="loading">مفيش نتائج مطابقة.</div>';
}

let statsCache = null;
let currentStatTab = 'first';

function initStatsPage(){
  setActiveNav('stats');
  document.getElementById('tab-first')?.addEventListener('click', ()=>switchStatTab('first'));
  loadStats();
}

async function fetchAllApplicants(){
  const idx = await storageList('applicant:');
  const keys = (idx && idx.keys) ? idx.keys : (Array.isArray(idx) ? idx : []);
  const records = [];
  for(const k of keys){
    try{
      const r = await storageGet(k);
      if(r) records.push(JSON.parse(r));
    }catch(e){ }
  }
  return records;
}

async function loadStats(){
  const body = document.getElementById('stats-body');
  if(body){ body.innerHTML = '<div class="loading">جاري تحميل النتائج من السجلات الرسمية...</div>'; }
  try{
    statsCache = await fetchAllApplicants();
    renderStats();
  }catch(e){
    if(body){ body.innerHTML = '<div class="loading">مفيش بيانات لسه، أو حصل خطأ في تحميل السجلات.</div>'; }
  }
}

function switchStatTab(tab){
  currentStatTab = tab;
  document.getElementById('tab-first')?.classList.toggle('active', tab==='first');
  document.getElementById('tab-any')?.classList.toggle('active', tab==='any');
  renderStats();
}

function renderStats(){
  const records = statsCache || [];
  const statTotalEl = document.getElementById('stat-total');
  if(statTotalEl) statTotalEl.textContent = records.length;
  const avg = records.length ? (records.reduce((s,r)=>s+parseFloat(r.score||0),0)/records.length).toFixed(1) : '—';
  const statAvgEl = document.getElementById('stat-avg');
  if(statAvgEl) statAvgEl.textContent = avg;
  const firstCount = new Array(COLLEGES.length).fill(0);
  const anyCount = new Array(COLLEGES.length).fill(0);
  records.forEach(r=>{
    (r.order||[]).forEach((id,idx)=>{
      if(idx===0) firstCount[id] = (firstCount[id]||0)+1;
      anyCount[id] = (anyCount[id]||0)+1;
    });
  });
  const topFirstId = firstCount.indexOf(Math.max(...firstCount));
  const statTopEl = document.getElementById('stat-top-college');
  if(statTopEl) statTopEl.textContent = records.length ? (COLLEGES[topFirstId]?.name || '—') : '—';
  const counts = currentStatTab==='first' ? firstCount : anyCount;
  const ranked = COLLEGES.map((c,i)=>({ ...c, n: counts[i] || 0 })).sort((a,b)=>b.n-a.n).slice(0,25);
  const maxN = Math.max(1, ranked[0] ? ranked[0].n : 1);
  const body = document.getElementById('stats-body');
  if(!body) return;
  if(records.length===0){
    body.innerHTML = '<div class="loading">لسه محدش سجّل. كن أول المتقدمين من صفحة التسجيل!</div>';
    return;
  }
  body.innerHTML = ranked.map((c,i)=>`
    <div class="bar-row">
      <span class="rank">${i+1}</span>
      <span class="lbl">${c.name}</span>
      <span class="track"><span class="fill" style="width:${(c.n/maxN*100)}%"></span></span>
      <span class="cnt">${c.n} طالب</span>
    </div>`).join('');
}

async function initAdminPage(){
  setActiveNav('admin');
  document.getElementById('admin-pass')?.addEventListener('keydown', e=>{ if(e.key==='Enter') checkAdminPass(); });
  document.getElementById('admin-search')?.addEventListener('input', renderAdminTable);
}

function checkAdminPass(){
  const val = document.getElementById('admin-pass')?.value || '';
  if(val === ADMIN_PASSWORD){
    document.getElementById('admin-gate').style.display='none';
    document.getElementById('admin-panel').style.display='block';
    loadAdminData();
  } else {
    const err = document.getElementById('admin-err');
    if(err){ err.textContent = 'كلمة المرور غلط، حاول تاني.'; err.style.color = 'var(--maroon)'; }
  }
}

async function loadAdminData(){
  const tbody = document.getElementById('admin-tbody');
  if(tbody){ tbody.innerHTML = '<tr><td colspan="4" class="loading">جاري التحميل...</td></tr>'; }
  try{
    window.adminData = await fetchAllApplicants();
    window.adminData.sort((a,b)=>b.ts-a.ts);
    renderAdminTable();
  }catch(e){
    if(tbody){ tbody.innerHTML = '<tr><td colspan="4" class="loading">حصل خطأ في تحميل البيانات.</td></tr>'; }
  }
}

function renderAdminTable(){
  const tbody = document.getElementById('admin-tbody');
  if(!tbody) return;
  const filter = (document.getElementById('admin-search')?.value||'').trim();
  let rows = window.adminData || [];
  if(filter){ rows = rows.filter(r => r.name.includes(filter) || r.seat.includes(filter)); }
  if(rows.length===0){
    tbody.innerHTML = '<tr><td colspan="4" class="loading">لا يوجد متقدمون مطابقون.</td></tr>';
    return;
  }
  tbody.innerHTML = rows.map(r=>{
    const choices = (r.order||[]).map((id,i)=>`${i+1}. ${COLLEGES[id] ? COLLEGES[id].name : '?'}`).join(' — ');
    return `<tr>
      <td>${r.seat}</td>
      <td>${r.name}</td>
      <td>${r.score}</td>
      <td class="choices">${choices}</td>
    </tr>`;
  }).join('');
}

function initPage(){
  const page = document.body.dataset.page;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const pageEl = document.getElementById('page-' + page);
  if(pageEl){ pageEl.classList.add('active'); }
  setActiveNav(page);
  switch(page){
    case 'register': initRegisterPage(); break;
    case 'rank': initRankPage(); break;
    case 'confirm': initConfirmPage(); break;
    case 'colleges': initDirectoryPage(); break;
    case 'stats': initStatsPage(); break;
    case 'admin': initAdminPage(); break;
    default: break;
  }
}

document.addEventListener('DOMContentLoaded', initPage);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('Service worker registered:', reg.scope))
      .catch(err => console.warn('Service worker failed to register:', err));
  });
}
