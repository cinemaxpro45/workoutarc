"use strict";
/* ============================== Arc app.js ============================== */
const I={
  bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  minus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  more:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><circle cx="12" cy="5" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="12" cy="19" r="1.3"/></svg>',
  dumbbell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>',
  spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
  trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
  up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  reset:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',
  copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>',
  run:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="4.5" r="2"/><path d="M6.5 21l2.5-5 3.5-2-2-5"/><path d="M10.5 9 7 11l-2-3"/><path d="M12.5 14l4 1 2.5 4"/></svg>',
  flame:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  body:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.3"/><path d="M12 8v7M12 15l-4 6M12 15l4 6M6 10l6 1 6-1"/></svg>',
  target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>',
  dice:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8.5" cy="8.5" r="1.1" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/></svg>',
  activity:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  pie:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>',
  scale:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 8h14M7 8l-3 6a3 3 0 0 0 6 0zM17 8l-3 6a3 3 0 0 0 6 0z"/></svg>',
};

const MCOL={'Pecs':'#4F5BFF','Dos':'#0FB672','Épaules':'#F5980B','Biceps':'#7A5AF8','Triceps':'#F63D68','Quadriceps':'#0BA5EC','Ischios':'#EE46BC','Fessiers':'#FDB022','Mollets':'#66C61C','Abdos':'#2E90FA'};
const PCOL={push:'#4F5BFF',pull:'#0FB672',legs:'#F5980B'};
function mcol(m){return MCOL[m]||'#9AA0AD';}

const LIB=[
 {n:'Développé couché barre',m:'Pecs',p:'push',c:1,r:'8-10',w:60},
 {n:'Développé incliné haltères',m:'Pecs',p:'push',c:1,r:'10-12',w:24},
 {n:'Développé militaire',m:'Épaules',p:'push',c:1,r:'8-10',w:35},
 {n:'Développé machine',m:'Pecs',p:'push',c:1,r:'12',w:60},
 {n:'Dips lestés',m:'Triceps',p:'push',c:1,r:'8-12',w:10},
 {n:'Écartés haltères',m:'Pecs',p:'push',c:0,r:'15',w:16},
 {n:'Élévations latérales',m:'Épaules',p:'push',c:0,r:'15',w:9},
 {n:'Extension triceps corde',m:'Triceps',p:'push',c:0,r:'12-15',w:20},
 {n:'Barre au front',m:'Triceps',p:'push',c:0,r:'10-12',w:22},
 {n:'Tractions',m:'Dos',p:'pull',c:1,r:'6-10',w:0,u:'PDC'},
 {n:'Tirage vertical',m:'Dos',p:'pull',c:1,r:'10-12',w:60},
 {n:'Rowing barre',m:'Dos',p:'pull',c:1,r:'8-10',w:60},
 {n:'Rowing T-Bar',m:'Dos',p:'pull',c:1,r:'10',w:50},
 {n:'Tirage horizontal',m:'Dos',p:'pull',c:1,r:'12',w:65},
 {n:'Curl barre',m:'Biceps',p:'pull',c:0,r:'10-12',w:25},
 {n:'Curl incliné haltères',m:'Biceps',p:'pull',c:0,r:'12',w:14},
 {n:'Curl marteau',m:'Biceps',p:'pull',c:0,r:'12-15',w:14},
 {n:'Oiseau (rear delt)',m:'Épaules',p:'pull',c:0,r:'15-20',w:10},
 {n:'Face pull',m:'Épaules',p:'pull',c:0,r:'15',w:25},
 {n:'Squat barre',m:'Quadriceps',p:'legs',c:1,r:'6-10',w:80},
 {n:'Presse à cuisses',m:'Quadriceps',p:'legs',c:1,r:'10-12',w:140},
 {n:'Fentes haltères',m:'Fessiers',p:'legs',c:1,r:'10',w:18},
 {n:'Soulevé de terre roumain',m:'Ischios',p:'legs',c:1,r:'8-10',w:70},
 {n:'Leg curl',m:'Ischios',p:'legs',c:0,r:'12-15',w:45},
 {n:'Leg extension',m:'Quadriceps',p:'legs',c:0,r:'12-15',w:50},
 {n:'Hip thrust',m:'Fessiers',p:'legs',c:1,r:'10-12',w:80},
 {n:'Mollets debout',m:'Mollets',p:'legs',c:0,r:'15-20',w:60},
 {n:'Relevé de jambes',m:'Abdos',p:'core',c:0,r:'15',w:0,u:'PDC'},
 {n:'Crunch câble',m:'Abdos',p:'core',c:0,r:'15-20',w:25},
 {n:'Gainage',m:'Abdos',p:'core',c:0,r:'45s',w:0,u:'PDC'},
];
function libFind(n){return LIB.find(x=>x.n===n);}

function uid(){return 'x'+Math.random().toString(36).slice(2,9);}
function mkEx(n,setsN,r,w,u,m,p){u=u||'kg';const sets=[];for(let i=0;i<setsN;i++)sets.push({reps:'',weight:(w===0?'':String(w)),done:false});return {id:uid(),name:n,target:String(r),plannedWeight:String(w),unit:u,muscle:m||'',pattern:p||'',sets};}
function defaultProgram(){return {
  A:{key:'A',name:'Push',title:'Push — Supersets',desc:'Poussée horizontale et verticale en superset.',blocks:[
    {id:uid(),type:'Superset 1',exercises:[mkEx('Développé couché barre',4,'8-10',65,'kg','Pecs','push'),mkEx('Tirage horizontal',4,'10-12',65,'kg','Dos','pull')]},
    {id:uid(),type:'Superset 2',exercises:[mkEx('Tractions',3,'6-8',0,'PDC','Dos','pull'),mkEx('Élévations latérales',3,'15',9,'kg','Épaules','push')]},
    {id:uid(),type:'Superset 3',exercises:[mkEx('Développé incliné haltères',3,'10',22,'kg','Pecs','push'),mkEx('Curl barre',3,'12',22,'kg','Biceps','pull'),mkEx('Extension triceps corde',3,'12',18,'kg','Triceps','push')]}
  ]},
  B:{key:'B',name:'Pull',title:'Pull — Volume',desc:'Hypertrophie, volume propre sur le dos et les bras.',blocks:[
    {id:uid(),type:'Séance',exercises:[
      mkEx('Dips lestés',4,'8-12',10,'kg','Triceps','push'),mkEx('Rowing T-Bar',4,'10',55,'kg','Dos','pull'),
      mkEx('Développé machine',3,'12',70,'kg','Pecs','push'),mkEx('Tirage vertical',3,'12',60,'kg','Dos','pull'),
      mkEx('Oiseau (rear delt)',3,'15-20',10,'kg','Épaules','pull'),mkEx('Curl incliné haltères',3,'12',14,'kg','Biceps','pull'),
      mkEx('Barre au front',3,'10',22,'kg','Triceps','push')]}
  ]},
  C:{key:'C',name:'Legs',title:'Legs — Bas du corps',desc:'Quadriceps, ischios, fessiers et mollets.',blocks:[
    {id:uid(),type:'Séance',exercises:[
      mkEx('Squat barre',4,'6-10',80,'kg','Quadriceps','legs'),mkEx('Soulevé de terre roumain',3,'8-10',70,'kg','Ischios','legs'),
      mkEx('Presse à cuisses',3,'12',140,'kg','Quadriceps','legs'),mkEx('Leg curl',3,'12-15',45,'kg','Ischios','legs'),
      mkEx('Hip thrust',3,'10-12',80,'kg','Fessiers','legs'),mkEx('Mollets debout',4,'15-20',60,'kg','Mollets','legs')]}
  ]}
};}

const SKEY='arc_v2';
let S={program:null,generated:null,history:[],custom:[],order:[],settings:{}};
let AC={bid:null,exid:null,matches:[]};
let currentDay='A',currentView='session';
let energy=3,genMode='type',genType='auto',focusMuscle=null,genResult=null,statExercise=null;
let PK=null;

function load(){try{const raw=localStorage.getItem(SKEY);if(raw){const d=JSON.parse(raw);S.program=d.program||defaultProgram();S.generated=d.generated||null;S.history=d.history||[];S.custom=d.custom||[];S.order=d.order||Object.keys(S.program);S.settings=d.settings||{};}else{importOld();}}catch(e){S.program=defaultProgram();}if(!S.program)S.program=defaultProgram();if(!S.custom)S.custom=[];if(!S.order||!S.order.length)S.order=Object.keys(S.program);S.order=S.order.filter(k=>S.program[k]);Object.keys(S.program).forEach(k=>{if(S.order.indexOf(k)<0)S.order.push(k);});if(S.order.indexOf(currentDay)<0)currentDay=S.order[0];}
function importOld(){S.program=defaultProgram();S.history=[];S.custom=[];S.order=['A','B','C'];try{const o=JSON.parse(localStorage.getItem('forge_v1')||'null');if(o&&o.history)S.history=o.history;}catch(e){}}
function save(){localStorage.setItem(SKEY,JSON.stringify(S));}

function num(v){const n=parseFloat(String(v).replace(',','.'));return isNaN(n)?0:n;}
function topRep(t){const m=String(t).match(/(\d+)(?:\s*-\s*(\d+))?/);if(!m)return 0;return m[2]?+m[2]:+m[1];}
function fmt(n){return (Math.round(n*10)/10).toString().replace(/\.0$/,'');}
function fmtT(kg){return kg>=1000?fmt(kg/1000)+' t':Math.round(kg)+' kg';}
function haptic(m){if(navigator.vibrate){try{navigator.vibrate(m||8);}catch(e){}}}
function esc(s){return String(s).replace(/"/g,'&quot;');}
function dkey(d){d=new Date(d);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function e1rm(w,r){return w>0&&r>0?w*(1+r/30):0;}

function curSession(){return currentDay==='GEN'?S.generated:S.program[currentDay];}
function progress(sess){let t=0,d=0;sess.blocks.forEach(b=>b.exercises.forEach(ex=>ex.sets.forEach(s=>{t++;if(s.done)d++;})));return{t,d,pct:t?Math.round(d/t*100):0};}
function lastPerf(name){for(const h of S.history){const e=(h.exercises||[]).find(x=>x.name.toLowerCase()===name.toLowerCase());if(e&&e.sets&&e.sets.length){let best=null;e.sets.forEach(s=>{const w=num(s.weight),r=num(s.reps);if(w>0&&r>0&&(!best||w>best.w||(w===best.w&&r>best.r)))best={w,r};});if(best)return{best,sets:e.sets};}}return null;}
function lastWeight(name){const lp=lastPerf(name);return lp?lp.best.w:null;}
function lastSessionOf(key){for(const h of S.history){if(h.kind!=='cardio'&&h.key===key&&(h.totalVolume||h.totalSets))return h;}return null;}
function relDays(date){const d=new Date(date),n=new Date();const a=new Date(d.getFullYear(),d.getMonth(),d.getDate()),b=new Date(n.getFullYear(),n.getMonth(),n.getDate());const diff=Math.round((b-a)/864e5);if(diff<=0)return"aujourd'hui";if(diff===1)return"hier";if(diff<7)return"il y a "+diff+" j";if(diff<14)return"il y a 1 sem";if(diff<31)return"il y a "+Math.round(diff/7)+" sem";return"il y a "+Math.round(diff/30)+" mois";}
function prevRecap(ex){for(const h of S.history){if(h.kind==='cardio')continue;const e=(h.exercises||[]).find(x=>x.name&&x.name.toLowerCase()===ex.name.toLowerCase());if(e&&e.sets){const ss=e.sets.filter(s=>num(s.reps)>0||num(s.weight)>0).slice(0,5);if(ss.length)return ss.map(s=>ex.unit==='PDC'?((num(s.weight)>0?'+'+fmt(num(s.weight))+' ':'')+(num(s.reps)||'–')+' rp'):(fmt(num(s.weight))+'×'+(num(s.reps)||'–'))).join('   ');}}return null;}
function suggestUp(ex){const lp=lastPerf(ex.name);if(!lp||ex.unit==='PDC')return null;const top=topRep(ex.target);if(!top)return null;const done=lp.sets.filter(s=>num(s.reps)>0);if(done.length<Math.max(1,ex.sets.length))return null;if(!done.every(s=>num(s.reps)>=top&&num(s.weight)>0))return null;const w=lp.best.w;const inc=w>=20?2.5:(w>=10?1:0.5);return fmt(w+inc);}

/* ---------- live (in-progress) ---------- */
function liveEntry(){const exs=[];const add=sess=>{if(!sess)return;sess.blocks.forEach(b=>b.exercises.forEach(ex=>{const done=ex.sets.filter(s=>s.done).map(s=>({reps:s.reps,weight:ex.unit==='PDC'?'0':s.weight}));if(done.length)exs.push({name:ex.name,muscle:ex.muscle,pattern:ex.pattern,unit:ex.unit,sets:done});}));};S.order.forEach(k=>add(S.program[k]));add(S.generated);return{date:new Date().toISOString(),live:true,exercises:exs};}
function liveTotals(){const le=liveEntry();let v=0,st=0,rp=0;le.exercises.forEach(e=>e.sets.forEach(s=>{v+=num(s.reps)*num(s.weight);st++;rp+=num(s.reps);}));return{vol:v,sets:st,reps:rp,has:le.exercises.length>0};}
function allEntries(live){const arr=S.history.slice();if(live){const le=liveEntry();if(le.exercises.length)arr.unshift(le);}return arr;}

/* ---------- router ---------- */
function render(){document.getElementById('logo').innerHTML=I.bolt;document.getElementById('btn-settings').innerHTML=I.settings;renderNav();if(currentView==='session')renderSession();else if(currentView==='coach')renderCoach();else renderStats();updateScroll();}
function renderNav(){const it=[['session','Séance',I.dumbbell],['coach','Coach',I.spark],['stats','Progrès',I.chart]];document.getElementById('nav').innerHTML=it.map(([k,l,ic])=>`<button class="nav-i ${currentView===k?'on':''}" onclick="go('${k}')">${ic}<span>${l}</span></button>`).join('');}
function go(v){currentView=v;window.scrollTo(0,0);render();}
function updateScroll(){const t=document.getElementById('top');if(window.scrollY>4)t.classList.add('scrolled');else t.classList.remove('scrolled');acHide();}
window.addEventListener('scroll',updateScroll,{passive:true});

/* ---------- SESSION ---------- */
function renderSession(){
  const sess=curSession();
  document.getElementById('brand-sub').textContent='Ton entraînement';
  const prog=progress(sess);
  const tabs=S.order.map(k=>{const d=S.program[k];if(!d)return'';const p=progress(d);return `<button class="${currentDay===k?'on':''}" onclick="switchDay('${k}')">${d.name}${p.pct>0&&p.pct<100?'<span class="sdot"></span>':''}</button>`;}).join('');
  const genTab=S.generated?`<button class="${currentDay==='GEN'?'on':''}" onclick="switchDay('GEN')">${I.spark}Séance</button>`:'';
  const addBtn=`<button class="seg-add" onclick="openNewTemplate()" aria-label="Nouvelle séance">${I.plus}</button>`;
  document.getElementById('hdr').innerHTML=`<div class="seg">${tabs}${genTab}${addBtn}</div>
    <div class="pbar-wrap"><div class="pbar-head"><span>${prog.d}/${prog.t} séries · <b class="pct">${prog.pct}%</b></span>${prog.d>0?`<button class="reset-link" onclick="resetDay()">${I.reset} Annuler</button>`:''}</div><div class="pbar"><i style="width:${prog.pct}%"></i></div></div>`;

  let h=`<div class="view">`;
  if(currentDay==='GEN'){h+=`<div class="gen-banner rise">${I.spark}<div><div class="gt">${sess.title}</div><div class="gs">Séance générée · ${sess.desc}</div></div><button class="gen-discard" onclick="discardGen()">${I.x}</button></div>`;}
  else{h+=`<div class="h1">${sess.title}</div><div class="h-desc">${sess.desc}</div>`;const ls=lastSessionOf(currentDay);if(ls)h+=`<div class="recap">${I.clock} Dernière fois ${relDays(ls.date)} · ${fmtT(ls.totalVolume)} · ${ls.totalSets} séries</div>`;}

  sess.blocks.forEach((b,bi)=>{
    h+=`<div class="block rise" style="animation-delay:${bi*.05}s"><div class="block-head"><div class="block-name">${b.type}</div></div>`;
    b.exercises.forEach(ex=>{
      const rec=prevRecap(ex),sug=suggestUp(ex);
      let hint=rec?`<span class="prev-lbl">Dernière fois</span><span class="prev-v">${rec}</span>`:`Objectif : ${ex.target} reps`;
      if(sug)hint+=`<span class="up">${I.up} ${sug} kg</span>`;
      h+=`<div class="ex"><div class="ex-head"><span class="mtag" style="background:${mcol(ex.muscle)}"></span>
        <input class="ex-name" value="${esc(ex.name)}" placeholder="Nom de l'exercice" autocomplete="off" autocorrect="off" autocapitalize="words" spellcheck="false" oninput="acInput(this,'${b.id}','${ex.id}')" onfocus="acInput(this,'${b.id}','${ex.id}')" onblur="acBlur()" onchange="editName('${b.id}','${ex.id}',this.value)">
        <button class="ex-menu" onclick="exMenu('${b.id}','${ex.id}')">${I.more}</button></div>
        <div class="ex-hint">${hint}</div>
        <div class="sets"><div class="set-lbls"><span></span><span>Reps</span><span>${ex.unit==='PDC'?'Lest':'Poids'}</span><span class="c">OK</span></div>`;
      ex.sets.forEach((s,si)=>{
        const rShown=s.reps!==''?s.reps:(topRep(ex.target)||'—'),rPh=s.reps==='';
        let wShown,wUnit,wPh=false;
        if(ex.unit==='PDC'){wShown=num(s.weight)>0?'+'+fmt(num(s.weight)):'PDC';wUnit=num(s.weight)>0?'kg':'';}
        else{const has=s.weight!=='';wShown=has?fmt(num(s.weight)):(ex.plannedWeight||'0');wUnit='kg';wPh=!has;}
        h+=`<div class="set ${s.done?'on':''}"><div class="set-n">${si+1}</div>
          <button class="val" onclick="openPicker('${b.id}','${ex.id}',${si})"><b class="${rPh?'ph':''}">${rShown}</b><span>reps</span></button>
          <button class="val" onclick="openPicker('${b.id}','${ex.id}',${si})"><b class="${wPh?'ph':''}">${wShown}</b><span>${wUnit}</span></button>
          <button class="chk ${s.done?'on':''}" onclick="toggleSet('${b.id}','${ex.id}',${si})">${I.check}</button></div>`;
      });
      h+=`</div><div class="ex-acts"><button class="mini" onclick="addSet('${b.id}','${ex.id}')">${I.plus} Série</button><button class="mini red" onclick="rmSet('${b.id}','${ex.id}')">${I.minus} Série</button></div></div>`;
    });
    h+=`<button class="add-ex" onclick="addEx('${b.id}')">${I.plus} Ajouter un exercice</button></div>`;
  });
  if(prog.pct===100&&prog.t>0)h+=`<button class="finish" onclick="finish()">${I.check} Valider la séance</button>`;
  h+=`</div>`;
  document.getElementById('main').innerHTML=h;
}
function switchDay(k){currentDay=k;window.scrollTo({top:0,behavior:'smooth'});renderSession();haptic(6);}
function fB(bid){return curSession().blocks.find(x=>x.id===bid);}
function fE(bid,exid){const b=fB(bid);return b?b.exercises.find(x=>x.id===exid):null;}
function editName(bid,exid,v){const ex=fE(bid,exid);if(ex){ex.name=v;const l=libFind(v);if(l){ex.muscle=l.m;ex.pattern=l.p;ex.unit=l.u||ex.unit;}else{saveCustom(v,ex.muscle);}save();renderSession();}}
/* ---------- autocomplete exercices ---------- */
function saveCustom(name,muscle){name=(name||'').trim();if(!name||libFind(name))return;if(S.custom.some(c=>c.n.toLowerCase()===name.toLowerCase()))return;S.custom.push({n:name,m:muscle||'',p:'',u:'kg',r:'10',w:0});save();}
function acPool(){const seen=new Set();const out=[];LIB.forEach(x=>{seen.add(x.n.toLowerCase());out.push({n:x.n,m:x.m,p:x.p,u:x.u||'kg',r:x.r,w:x.w,custom:false});});S.custom.forEach(c=>{if(!seen.has(c.n.toLowerCase())){seen.add(c.n.toLowerCase());out.push({n:c.n,m:c.m||'',p:c.p||'',u:c.u||'kg',r:c.r||'10',w:c.w||0,custom:true});}});return out;}
function acInput(inp,bid,exid){
  AC.bid=bid;AC.exid=exid;
  const box=document.getElementById('ac');const q=inp.value.trim().toLowerCase();
  if(!q){box.classList.remove('on');return;}
  const all=acPool();const seen=new Set();const res=[];
  all.forEach(x=>{if(x.n.toLowerCase().startsWith(q)&&!seen.has(x.n.toLowerCase())){seen.add(x.n.toLowerCase());res.push(x);}});
  all.forEach(x=>{const k=x.n.toLowerCase();if(k.includes(q)&&!seen.has(k)){seen.add(k);res.push(x);}});
  AC.matches=res.slice(0,7);
  if(!AC.matches.length){box.classList.remove('on');return;}
  box.innerHTML=AC.matches.map((x,i)=>`<button class="ac-i" onmousedown="event.preventDefault()" onclick="acPick(${i})"><span class="mtag" style="background:${mcol(x.m)}"></span><span class="ac-n">${x.n}</span><span class="ac-m">${x.custom?'perso':(x.m||'')}</span></button>`).join('');
  positionAC(inp);box.classList.add('on');
}
function positionAC(inp){const r=inp.getBoundingClientRect();const box=document.getElementById('ac');box.style.left=r.left+'px';box.style.top=(r.bottom+6)+'px';box.style.width=r.width+'px';}
function acPick(i){const x=AC.matches[i];if(!x)return;const ex=fE(AC.bid,AC.exid);if(!ex){acHide();return;}ex.name=x.n;ex.muscle=x.m||'';ex.pattern=x.p||'';ex.unit=x.u||'kg';ex.target=String(x.r||ex.target);if(x.w){ex.plannedWeight=String(x.w);ex.sets.forEach(s=>{if(!s.weight&&ex.unit!=='PDC')s.weight=String(x.w);});}if(x.custom)saveCustom(x.n,x.m);acHide();save();renderSession();haptic(8);}
function acBlur(){setTimeout(acHide,160);}
function acHide(){const b=document.getElementById('ac');if(b)b.classList.remove('on');}
function addSet(bid,exid){const ex=fE(bid,exid);if(ex){const l=ex.sets[ex.sets.length-1]||{};ex.sets.push({reps:'',weight:l.weight||ex.plannedWeight||'',done:false});save();renderSession();haptic();}}
function rmSet(bid,exid){const ex=fE(bid,exid);if(ex&&ex.sets.length>1){ex.sets.pop();save();renderSession();haptic();}}
function addEx(bid){const b=fB(bid);if(b){b.exercises.push(mkEx('',3,'10',0,'kg','',''));save();renderSession();setTimeout(()=>{const e=document.querySelectorAll('.ex-name');if(e.length)e[e.length-1].focus();},60);}}
function exMenu(bid,exid){const ex=fE(bid,exid);openSheet(`<h3>${ex.name||'Exercice'}</h3><p class="sd">Que faire avec cet exercice ?</p><button class="srow" onclick="dupEx('${bid}','${exid}')">${I.copy} Dupliquer</button><button class="srow red" onclick="delEx('${bid}','${exid}')">${I.trash} Supprimer</button>`);}
function dupEx(bid,exid){const b=fB(bid),ex=b.exercises.find(x=>x.id===exid);const c=JSON.parse(JSON.stringify(ex));c.id=uid();c.sets.forEach(s=>s.done=false);b.exercises.splice(b.exercises.indexOf(ex)+1,0,c);save();closeSheet();renderSession();}
function delEx(bid,exid){const b=fB(bid);b.exercises=b.exercises.filter(x=>x.id!==exid);save();closeSheet();renderSession();}
function toggleSet(bid,exid,si){const ex=fE(bid,exid);if(!ex)return;const s=ex.sets[si];s.done=!s.done;if(s.done){if(!s.reps)s.reps=String(topRep(ex.target)||'');if(!s.weight&&ex.plannedWeight&&ex.unit!=='PDC')s.weight=ex.plannedWeight;haptic(12);}save();renderSession();}
function discardGen(){if(confirm('Supprimer la séance générée ?')){S.generated=null;currentDay=S.order[0];save();renderSession();}}

/* ---------- templates personnalisés ---------- */
function openNewTemplate(){openSheet(`<h3>Nouvelle séance</h3><p class="sd">Ajoute un onglet personnalisé sur ta page d'accueil, nommé comme tu veux.</p>
  <input id="tpl-name" class="sheet-input" placeholder="Nom (ex : Haut du corps, Bras, Cardio…)" maxlength="24" autocapitalize="words">
  <button class="btn" style="margin-top:6px" onclick="createTemplate(false)">${I.plus} Créer une séance vide</button>
  <button class="btn ghost" style="margin-top:9px" onclick="createTemplate(true)">${I.copy} Dupliquer la séance actuelle</button>`);
  setTimeout(()=>{const i=document.getElementById('tpl-name');if(i)i.focus();},90);}
function createTemplate(dup){
  const inp=document.getElementById('tpl-name');let name=(inp&&inp.value.trim())||'Ma séance';
  const key=uid();let tpl;
  if(dup&&curSession()){tpl=JSON.parse(JSON.stringify(curSession()));tpl.key=key;tpl.name=name;tpl.title=name;tpl.desc='Séance personnalisée';tpl.blocks.forEach(b=>{b.id=uid();b.exercises.forEach(ex=>{ex.id=uid();ex.sets.forEach(s=>s.done=false);});});}
  else{tpl={key,name,title:name,desc:'Séance personnalisée — ajoute tes exercices.',blocks:[{id:uid(),type:'Séance',exercises:[]}]};}
  S.program[key]=tpl;S.order.push(key);currentDay=key;save();closeSheet();go('session');toast(`${I.check} « ${name} » ajoutée`);}
function renameTemplate(){if(currentDay==='GEN')return;const sess=curSession();openSheet(`<h3>Renommer la séance</h3><p class="sd">Nouveau nom de l'onglet.</p><input id="tpl-name" class="sheet-input" value="${esc(sess.name)}" maxlength="24"><button class="btn" style="margin-top:6px" onclick="doRename()">${I.check} Enregistrer</button>`);setTimeout(()=>{const i=document.getElementById('tpl-name');if(i)i.focus();},90);}
function doRename(){const inp=document.getElementById('tpl-name');const sess=curSession();const n=inp&&inp.value.trim();if(n){sess.name=n;sess.title=n;}save();closeSheet();renderSession();}
function deleteTemplate(){if(currentDay==='GEN'){discardGen();closeSheet();return;}if(S.order.length<=1){toast('Garde au moins une séance');return;}if(confirm('Supprimer la séance « '+curSession().name+' » ? Son historique est conservé.')){delete S.program[currentDay];S.order=S.order.filter(k=>k!==currentDay);currentDay=S.order[0];save();closeSheet();go('session');}}

/* ---------- WHEEL PICKER ---------- */
function openPicker(bid,exid,si){
  const ex=fE(bid,exid);if(!ex)return;const s=ex.sets[si];
  const repsVals=[];for(let i=1;i<=60;i++)repsVals.push(i);
  const wVals=[];if(ex.unit==='PDC'){for(let i=0;i<=80;i++)wVals.push(i);}else{for(let i=0;i<=300;i+=0.5)wVals.push(Math.round(i*2)/2);}
  PK={bid,exid,si,repsVals,wVals,unit:ex.unit};
  const curR=num(s.reps)||topRep(ex.target)||10;
  const curW=num(s.weight)||(ex.unit==='PDC'?0:num(ex.plannedWeight))||0;
  const ri=nearestIdx(repsVals,curR),wi=nearestIdx(wVals,curW);
  document.getElementById('pick-title').textContent='Série '+(si+1);
  document.getElementById('pick-sub').textContent=ex.name;
  document.getElementById('pick-wheels').innerHTML=
    wheelHTML('wheel-reps','Reps',repsVals,ri,'')+
    wheelHTML('wheel-w',ex.unit==='PDC'?'Lest (kg)':'Poids (kg)',wVals,wi,ex.unit==='PDC'?'pdc':'');
  openEl('pick');
  requestAnimationFrame(()=>{initWheel('wheel-reps',ri);initWheel('wheel-w',wi);});
}
function wheelHTML(id,cap,vals,sel,mode){const items=vals.map((v,i)=>{let l=v;if(mode==='pdc'&&v===0)l='PDC';return `<div class="wheel-item ${i===sel?'sel':''}">${l}</div>`;}).join('');return `<div class="wheel-col"><div class="wheel-cap">${cap}</div><div class="wheel"><div class="wheel-band"></div><div class="wheel-scroll" id="${id}">${items}</div></div></div>`;}
function initWheel(id,sel){const el=document.getElementById(id);if(!el)return;el.scrollTop=sel*40;el.onscroll=()=>{markWheel(el);clearTimeout(el._t);el._t=setTimeout(()=>haptic(4),90);};}
function markWheel(el){const idx=Math.round(el.scrollTop/40);const ch=el.children;for(let i=0;i<ch.length;i++)ch[i].classList.toggle('sel',i===idx);}
function nearestIdx(vals,v){let bi=0,bd=Infinity;for(let i=0;i<vals.length;i++){const d=Math.abs(vals[i]-v);if(d<bd){bd=d;bi=i;}}return bi;}
function wheelVal(id,vals){const el=document.getElementById(id);const idx=Math.max(0,Math.min(vals.length-1,Math.round(el.scrollTop/40)));return vals[idx];}
function confirmPick(){if(!PK)return;const ex=fE(PK.bid,PK.exid);if(!ex){closeEl('pick');return;}const s=ex.sets[PK.si];const r=wheelVal('wheel-reps',PK.repsVals),w=wheelVal('wheel-w',PK.wVals);s.reps=String(r);s.weight=(PK.unit==='PDC'&&w===0)?'0':String(w);save();closeEl('pick');renderSession();haptic(12);}

/* ---------- FINISH ---------- */
function finish(){
  const sess=curSession();let vol=0,setsN=0,reps=0;const exs=[];
  sess.blocks.forEach(b=>b.exercises.forEach(ex=>{const done=ex.sets.filter(s=>s.done).map(s=>({reps:s.reps,weight:ex.unit==='PDC'?'0':s.weight}));done.forEach(s=>{vol+=num(s.reps)*num(s.weight);setsN++;reps+=num(s.reps);});if(done.length)exs.push({name:ex.name,muscle:ex.muscle,pattern:ex.pattern,unit:ex.unit,sets:done});}));
  S.history.unshift({id:Date.now(),date:new Date().toISOString(),key:sess.key||currentDay,name:sess.title,totalVolume:Math.round(vol),totalSets:setsN,totalReps:reps,exercises:exs});
  if(currentDay==='GEN'){S.generated=null;currentDay='A';}else{sess.blocks.forEach(b=>b.exercises.forEach(ex=>ex.sets.forEach(s=>s.done=false)));}
  save();confetti();setTimeout(confetti,380);toast(`${I.check} Séance validée — ${fmtT(vol)} soulevés`);
  setTimeout(()=>go('stats'),850);
}

/* ---------- COACH ---------- */
const EN=[
 {e:'🥱',n:'Épuisé',d:'Récupération : peu d\'exercices, charges légères.',ex:4,sets:2,w:.82},
 {e:'😮‍💨',n:'Fatigué',d:'Volume réduit, on reste technique et propre.',ex:5,sets:3,w:.92},
 {e:'🙂',n:'Normal',d:'Séance équilibrée, comme d\'habitude.',ex:6,sets:3,w:1},
 {e:'💪',n:'En forme',d:'Bonne énergie, on pousse un peu les charges.',ex:6,sets:4,w:1.03},
 {e:'🔥',n:'En feu',d:'Jour PR : volume et intensité au maximum.',ex:7,sets:4,w:1.07},
];
const TYPES=[['auto','Auto',I.dice],['full','Full body',I.body],['superset','Superset',I.layers],['push','Push',I.dumbbell],['pull','Pull',I.up],['legs','Legs',I.activity]];
const FOCUS=[['Pecs','Pectoraux'],['Dos','Dos'],['Épaules','Épaules'],['Biceps','Biceps'],['Triceps','Triceps'],['Jambes','Jambes']];
function last7Pattern(){const now=Date.now();const v={push:0,pull:0,legs:0};S.history.forEach(h=>{if(now-new Date(h.date).getTime()<7*864e5)(h.exercises||[]).forEach(e=>{if(v[e.pattern]!=null)(e.sets||[]).forEach(s=>{v[e.pattern]+=num(s.reps)*num(s.weight);});});});return v;}
function autoType(lvl){if(lvl<=2)return'full';const v=last7Pattern();let best='push',bv=Infinity;['push','pull','legs'].forEach(p=>{if(v[p]<bv){bv=v[p];best=p;}});return best;}
function roundW(w,u){if(u==='PDC'||!w)return 0;const st=w>=20?2.5:(w>=6?1:.5);return Math.max(st,Math.round(w/st)*st);}
function pick(pool,n){const a=pool.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a.slice(0,n);}
function poolBy(f){return LIB.filter(f);}
function buildEx(l,setsN,cfg){const bw=l.u==='PDC'?0:roundW((lastWeight(l.n)||l.w)*cfg.w,l.u);return mkEx(l.n,setsN,l.r,bw,l.u||'kg',l.m,l.p);}
function genSession(type,lvl){const cfg=EN[lvl-1];const rt=type==='auto'?autoType(lvl):type;let blocks=[],title='',desc='';const sn=cfg.sets;
  if(rt==='superset'){title='Séance Superset';desc='Paires agoniste / antagoniste';const pu=pick(poolBy(x=>x.p==='push'&&x.c),2),pl=pick(poolBy(x=>x.p==='pull'&&x.c),2);const bi=pick(poolBy(x=>x.m==='Biceps'),1),tr=pick(poolBy(x=>x.m==='Triceps'),1);blocks=[{id:uid(),type:'Superset 1',exercises:[buildEx(pu[0],sn+1,cfg),buildEx(pl[0],sn+1,cfg)]},{id:uid(),type:'Superset 2',exercises:[buildEx(pu[1],sn,cfg),buildEx(pl[1],sn,cfg)]}];if(lvl>=3)blocks.push({id:uid(),type:'Superset 3 (bras)',exercises:[buildEx(bi[0],sn,cfg),buildEx(tr[0],sn,cfg)]});}
  else if(rt==='full'){title='Séance Full body';desc='Tout le corps en une séance';const sel=[pick(poolBy(x=>x.p==='push'&&x.c),1)[0],pick(poolBy(x=>x.p==='pull'&&x.c),1)[0],pick(poolBy(x=>x.p==='legs'&&x.c),1)[0],pick(poolBy(x=>x.m==='Épaules'),1)[0],pick(poolBy(x=>x.m==='Biceps'||x.m==='Triceps'),1)[0]];if(lvl>=4)sel.push(pick(poolBy(x=>x.p==='core'),1)[0]);blocks=[{id:uid(),type:'Full body',exercises:sel.filter(Boolean).map(l=>buildEx(l,sn,cfg))}];}
  else{const map={push:'Push',pull:'Pull',legs:'Legs'};title='Séance '+map[rt];desc=rt==='push'?'Pecs · épaules · triceps':rt==='pull'?'Dos · biceps':'Quadriceps · ischios · fessiers';const comp=pick(poolBy(x=>x.p===rt&&x.c),Math.min(3,cfg.ex-2));const iso=pick(poolBy(x=>x.p===rt&&!x.c),cfg.ex-comp.length);blocks=[{id:uid(),type:'Séance',exercises:comp.concat(iso).map(l=>buildEx(l,sn,cfg))}];}
  return {key:'GEN',type:rt,level:lvl,title,desc,blocks};}
function genFocus(muscle,lvl){const cfg=EN[lvl-1];const label={Pecs:'Pectoraux',Dos:'Dos','Épaules':'Épaules',Biceps:'Biceps',Triceps:'Triceps',Jambes:'Jambes'}[muscle];
  const mainPool=muscle==='Jambes'?poolBy(x=>x.p==='legs'):poolBy(x=>x.m===muscle);
  const mainN=muscle==='Jambes'?(lvl>=3?4:3):(lvl<=2?2:3);
  const comp=mainPool.filter(x=>x.c),iso=mainPool.filter(x=>!x.c);
  const orderedMain=pick(comp,comp.length).concat(pick(iso,iso.length));// compounds prioritaires
  let mains=orderedMain.slice(0,mainN);
  const cMap={Pecs:['Triceps','Dos'],Dos:['Biceps','Pecs'],'Épaules':['Triceps','Dos'],Biceps:['Dos','Triceps'],Triceps:['Pecs','Épaules'],Jambes:['Fessiers','Mollets']};
  const cN=lvl<=2?1:2;let comps=[];(cMap[muscle]||[]).forEach(m=>{const p=poolBy(x=>x.m===m&&mains.indexOf(x)<0&&comps.indexOf(x)<0);comps=comps.concat(pick(p,1));});comps=comps.slice(0,cN);
  const exs=mains.map(l=>buildEx(l,cfg.sets+1,cfg)).concat(comps.map(l=>buildEx(l,cfg.sets,cfg)));
  return {key:'GEN',type:'focus',muscle,level:lvl,title:'Focus '+label,desc:'Séance centrée sur : '+label,blocks:[{id:uid(),type:'Focus '+label,exercises:exs}]};}

function renderCoach(){
  document.getElementById('brand-sub').textContent='Coach';
  document.getElementById('hdr').innerHTML='';
  const c=EN[energy-1];
  let h=`<div class="view"><div class="h1">Génère ta séance</div><div class="h-desc">Selon ta forme du jour, un type de séance ou un muscle à cibler.</div>
    <div class="card energy"><div class="emo" id="emo">${c.e}</div><div class="en" id="en">${c.n}</div><div class="ed" id="ed">${c.d}</div>
      <input type="range" min="1" max="5" value="${energy}" style="--f:${(energy-1)/4*100}%" oninput="onEnergy(this.value)">
      <div class="rscale"><span>Épuisé</span><span>Fatigué</span><span>Normal</span><span>Forme</span><span>Feu</span></div></div>
    <div class="sec-title">Type de séance</div>
    <div class="card"><div class="chips">${TYPES.map(([k,l,ic])=>`<button class="chip ${genMode==='type'&&genType===k?'on':''}" onclick="setType('${k}')">${ic}${l}</button>`).join('')}</div>
    ${genMode==='type'&&genType==='auto'?`<p class="card-sub" style="margin:14px 0 0">Auto choisit le type selon ce que tu as le moins travaillé cette semaine${energy<=2?' — au repos → full body léger':''}.</p>`:''}</div>
    <div class="sec-title">Ou cible un muscle</div>
    <div class="card"><div class="chips">${FOCUS.map(([k,l])=>`<button class="chip ${genMode==='focus'&&focusMuscle===k?'on':''}" onclick="setFocus('${k}')"><span class="cdot" style="background:${mcol(k==='Jambes'?'Quadriceps':k)}"></span>${l}</button>`).join('')}</div>
    ${genMode==='focus'?`<p class="card-sub" style="margin:14px 0 0">Séance construite autour de ce muscle (exercices principaux + complémentaires pour l'équilibre).</p>`:''}</div>
    <button class="btn" onclick="doGen()">${I.spark} Générer ma séance</button>
    <div class="sec-title">Cardio</div>
    <div class="card"><div class="card-h">${I.run} Ajouter du cardio</div><div class="card-sub">Tapis, HIIT maison… compté dans tes stats et ton streak.</div>
      <div class="chips"><button class="chip" onclick="openCardio('treadmill')">${I.run} Tapis de course</button><button class="chip" onclick="openCardio('hiit')">${I.flame} HIIT maison</button><button class="chip" onclick="openCardio('other')">${I.activity} Autre</button></div></div>`;
  if(genResult){
    h+=`<div class="card" style="margin-top:16px"><div class="card-h">${I.dumbbell} ${genResult.title}</div><div class="card-sub">${genResult.desc} · ${c.n}</div>`;
    genResult.blocks.forEach(b=>{if(genResult.blocks.length>1)h+=`<div class="block-tag" style="display:inline-block;margin:10px 0 4px">${b.type}</div>`;
      b.exercises.forEach(ex=>{h+=`<div class="cp"><div class="cpl"><span class="mtag" style="background:${mcol(ex.muscle)}"></span><div><div class="cpn">${ex.name}</div><div class="cps">${ex.sets.length} × ${ex.target}</div></div></div><div class="cpw">${ex.unit==='PDC'?'PDC':fmt(num(ex.plannedWeight))+' kg'}</div></div>`;});});
    h+=`<button class="btn" style="margin-top:18px" onclick="startGen()">${I.play} Démarrer cette séance</button><button class="btn ghost" style="margin-top:9px" onclick="doGen()">${I.reset} Régénérer</button></div>`;
  }
  h+=`</div>`;
  document.getElementById('main').innerHTML=h;
}
function onEnergy(v){energy=+v;const c=EN[energy-1];const e=document.getElementById('emo');e.textContent=c.e;e.style.transform='scale(1.2)';setTimeout(()=>e.style.transform='scale(1)',200);document.getElementById('en').textContent=c.n;document.getElementById('ed').textContent=c.d;document.querySelector('input[type=range]').style.setProperty('--f',(energy-1)/4*100+'%');haptic(5);}
function setType(t){genMode='type';genType=t;focusMuscle=null;renderCoach();haptic(6);}
function setFocus(m){genMode='focus';focusMuscle=m;renderCoach();haptic(6);}
function doGen(){genResult=genMode==='focus'?genFocus(focusMuscle,energy):genSession(genType,energy);haptic(12);renderCoach();setTimeout(()=>window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'}),60);}
function startGen(){S.generated=JSON.parse(JSON.stringify(genResult));currentDay='GEN';genResult=null;save();toast(`${I.spark} Séance prête — au boulot !`);go('session');}

/* ---------- STATS ---------- */
function stats(){
  const hist=S.history;const total=hist.length;let totalVol=hist.reduce((a,h)=>a+(h.totalVolume||0),0);
  let totalSets=hist.reduce((a,h)=>a+(h.totalSets||0),0);let totalReps=hist.reduce((a,h)=>a+(h.totalReps||0),0);
  const days=[...new Set(hist.map(h=>dkey(h.date)))].sort().reverse();let streak=0;
  if(days.length){const t=new Date(),tk=dkey(t),yk=dkey(new Date(t.getTime()-864e5));if(days[0]===tk||days[0]===yk){let p=new Date(days[0]+'T12:00:00');for(const ds of days){if(ds===dkey(p)){streak++;p=new Date(p.getTime()-864e5);}else break;}}}
  const now=new Date();const mon=new Date(now);mon.setDate(now.getDate()-((now.getDay()+6)%7));mon.setHours(0,0,0,0);
  const week=hist.filter(h=>new Date(h.date)>=mon);let weekVol=week.reduce((a,h)=>a+(h.totalVolume||0),0);
  const lt=liveTotals();totalVol+=lt.vol;totalSets+=lt.sets;totalReps+=lt.reps;weekVol+=lt.vol;
  const cardio=hist.filter(h=>h.kind==='cardio');const cardioMin=cardio.reduce((a,h)=>a+(h.minutes||0),0);const cardioWeek=cardio.filter(h=>new Date(h.date)>=mon).reduce((a,h)=>a+(h.minutes||0),0);
  return{total,totalVol,totalSets,totalReps,streak,week:week.length,weekVol,live:lt,cardioMin,cardioCount:cardio.length,cardioWeek};
}
function muscleVol(entries,db){const now=Date.now();const m={};entries.forEach(h=>{if(db&&now-new Date(h.date).getTime()>db*864e5)return;(h.exercises||[]).forEach(e=>{const mm=e.muscle||'Autre';(e.sets||[]).forEach(s=>{m[mm]=(m[mm]||0)+num(s.reps)*num(s.weight);});});});return m;}
function patternSplit(entries,db){const now=Date.now();const v={push:0,pull:0,legs:0};entries.forEach(h=>{if(db&&now-new Date(h.date).getTime()>db*864e5)return;(h.exercises||[]).forEach(e=>{if(v[e.pattern]!=null)(e.sets||[]).forEach(s=>{v[e.pattern]+=num(s.reps)*num(s.weight);});});});return v;}
function prList(entries){const m={};entries.forEach(h=>(h.exercises||[]).forEach(e=>{(e.sets||[]).forEach(s=>{const w=num(s.weight),r=num(s.reps);if(w>0&&r>0){const o=e1rm(w,r);if(!m[e.name]||o>m[e.name].o)m[e.name]={o,w,r};}});}));return Object.entries(m).map(([n,d])=>({n,...d})).sort((a,b)=>b.o-a.o);}
function exNames(entries){const s=new Set();entries.forEach(h=>(h.exercises||[]).forEach(e=>{if((e.sets||[]).some(x=>num(x.weight)>0&&num(x.reps)>0))s.add(e.name);}));return[...s];}

function renderStats(){
  document.getElementById('brand-sub').textContent='Progrès';document.getElementById('hdr').innerHTML='';
  const st=stats();const live=allEntries(true);
  const goal=4,gp=Math.min(100,Math.round(st.week/goal*100)),RC=Math.round(2*Math.PI*52);
  let h=`<div class="view"><div class="h1">Tes progrès</div><div class="h-desc">Ta semaine, en un coup d'œil.</div>`;
  if(st.live.has)h+=`<div class="live"><span class="pulse"></span>Séance en cours comptée · +${st.live.sets} séries · +${st.live.reps} reps</div>`;
  h+=`<div class="hero rise"><div class="hero-top">
    <div class="ring"><svg width="118" height="118" viewBox="0 0 118 118"><circle cx="59" cy="59" r="52" fill="none" stroke="rgba(18,20,28,.07)" stroke-width="10"/><circle id="ring-fg" cx="59" cy="59" r="52" fill="none" stroke="url(#rg)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${RC}" stroke-dashoffset="${RC}"/><defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4B57F5"/><stop offset="1" stop-color="#7C84FF"/></linearGradient></defs></svg><div class="rc"><b id="ring-num">0</b><span>/ ${goal} sem.</span></div></div>
    <div class="hero-side"><div class="hero-goal">Objectif de la semaine</div><div class="hero-goalsub">${st.week>=goal?'Atteint, superbe régularité 🎉':'Plus que '+(goal-st.week)+' séance'+(goal-st.week>1?'s':'')+' pour valider ta semaine.'}</div><div class="hero-streak">${I.flame} <span id="streak-num">0</span>&nbsp;jour${st.streak>1?'s':''} d'affilée</div></div>
  </div>
  <div class="hero-metrics"><div class="hm"><b>${fmtT(st.totalVol)}</b><span>Volume total</span></div><div class="hm"><b id="hm-tot">0</b><span>Séances</span></div><div class="hm"><b id="hm-sets">0</b><span>Séries</span></div></div></div>`;

  if(st.cardioCount||st.cardioWeek){
    h+=`<div class="card"><div class="card-h">${I.run} Cardio</div><div class="card-sub">${st.cardioCount} séance(s) · ${st.cardioMin} min cumulées</div>
      <div class="hero-metrics" style="margin-top:4px;padding-top:0;border-top:none"><div class="hm"><b>${st.cardioWeek}</b><span>Min cette sem.</span></div><div class="hm"><b>${st.cardioMin}</b><span>Min au total</span></div></div>
      <button class="btn ghost" style="margin-top:18px" onclick="openCardio()">${I.plus} Ajouter du cardio</button></div>`;
  }
  const strengthN=S.history.filter(h=>h.kind!=='cardio').length;
  if(strengthN>=2){
    h+=`<div class="card"><div class="card-h">${I.chart} Volume par séance</div><div class="card-sub">12 dernières séances de muscu</div><canvas id="c-vol" height="150"></canvas></div>`;
  }
  if(S.history.length>=2){
    h+=`<div class="card"><div class="card-h">${I.cal} Fréquence</div><div class="card-sub">Séances par semaine (8 sem.)</div><div id="freq"></div></div>`;
  }

  const mv=muscleVol(live,30);const mk=Object.keys(mv).filter(k=>mv[k]>0).sort((a,b)=>mv[b]-mv[a]);const mmax=Math.max(1,...mk.map(k=>mv[k]));
  h+=`<div class="card"><div class="card-h">${I.activity} Volume par muscle</div><div class="card-sub">30 derniers jours · séance en cours incluse</div>`;
  h+=mk.length?mk.map(m=>`<div class="mbar"><div class="mn">${m}</div><div class="mt"><i data-fill="${mv[m]/mmax*100}%" style="width:0;background:${mcol(m)}"></i></div><div class="mv">${fmtT(mv[m])}</div></div>`).join(''):`<div class="empty" style="padding:20px">${I.activity}<p>Pas encore de données.</p></div>`;
  h+=`</div>`;

  const ps=patternSplit(live,30);const pt=ps.push+ps.pull+ps.legs;
  if(pt>0){const a1=ps.push/pt*100,a2=ps.pull/pt*100;
    h+=`<div class="card"><div class="card-h">${I.pie} Équilibre Push / Pull / Legs</div><div class="card-sub">30 derniers jours</div>
      <div class="donut-wrap"><div class="donut" style="background:conic-gradient(${PCOL.push} 0 ${a1}%,${PCOL.pull} ${a1}% ${a1+a2}%,${PCOL.legs} ${a1+a2}% 100%)"><div class="dc"><b>${Math.round(a1)}%</b><span>Push</span></div></div>
      <div class="leg"><div class="leg-i"><span class="d" style="background:${PCOL.push}"></span>Push <b>${Math.round(a1)}%</b></div><div class="leg-i"><span class="d" style="background:${PCOL.pull}"></span>Pull <b>${Math.round(a2)}%</b></div><div class="leg-i"><span class="d" style="background:${PCOL.legs}"></span>Legs <b>${Math.round(100-a1-a2)}%</b></div></div></div></div>`;}

  const names=exNames(live);
  if(names.length){if(!statExercise||names.indexOf(statExercise)<0)statExercise=names[0];
    h+=`<div class="card"><div class="card-h">${I.up} Progression par exercice</div><div class="card-sub">Force estimée (1RM, formule d'Epley)</div>
      <div class="selrow"><select class="exsel" onchange="statExercise=this.value;drawEx()">${names.map(n=>`<option ${n===statExercise?'selected':''}>${n}</option>`).join('')}</select></div><canvas id="c-ex" height="150"></canvas></div>`;}

  const prs=prList(live);
  h+=`<div class="card"><div class="card-h">${I.trophy} Records personnels</div><div class="card-sub">1RM estimé</div>`;
  h+=prs.length?prs.slice(0,8).map((p,i)=>`<div class="pr"><div class="pm">${i===0?'🥇':i===1?'🥈':i===2?'🥉':'🎯'}</div><div class="pn">${p.n}</div><div class="pv"><b>${fmt(p.o)} kg</b><span>${fmt(p.w)}kg × ${p.r}</span></div></div>`).join(''):`<div class="empty" style="padding:20px">${I.trophy}<p>Pas encore de record.</p><p class="s">Logue tes charges pour les suivre.</p></div>`;
  h+=`</div>`;

  h+=`<div class="card"><div class="card-h">${I.flame} Récompenses</div><div class="badges">${bdg('🥇','Première séance','Commencer',st.total>=1)}${bdg('🔥','Série x3','3 jours d\'affilée',st.streak>=3)}${bdg('💯','10 séances','Assidu',st.total>=10)}${bdg('🏋️','10 tonnes','Gros volume',st.totalVol>=10000)}</div></div>`;

  h+=`<div class="card"><div class="card-h">${I.cal} Historique</div>`;
  h+=S.history.length?S.history.slice(0,25).map(e=>{const d=new Date(e.date);const when=`${d.toLocaleDateString('fr-FR',{weekday:'short',day:'numeric',month:'short'})} · ${d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})}`;
    if(e.kind==='cardio'){const right=e.cardioType==='treadmill'?(e.distance?fmt(e.distance)+' km':'')+'':'diff. '+(e.difficulty||'–')+'/5';return `<div class="hist"><div class="hb" style="background:rgba(245,152,11,.12);color:var(--warn)">${I.run}</div><div class="hn"><div class="h1" style="font-size:14.5px;margin:0;letter-spacing:-.01em">${e.name||'Cardio'}${e.note?' · '+esc(e.note):''}</div><div class="h2">${when}</div></div><div class="hv"><b>${e.minutes} min</b><span>${right}</span></div></div>`;}
    return `<div class="hist"><div class="hb">${I.dumbbell}</div><div class="hn"><div class="h1" style="font-size:14.5px;margin:0;letter-spacing:-.01em">${e.name||'Séance'}</div><div class="h2">${when}</div></div><div class="hv"><b>${e.totalVolume?fmtT(e.totalVolume):'—'}</b><span>${e.totalSets||0} séries</span></div></div>`;}).join(''):`<div class="empty">${I.cal}<p>Aucune séance terminée.</p><p class="s">Valide une séance pour la voir ici.</p></div>`;
  h+=`</div></div>`;
  document.getElementById('main').innerHTML=h;
  requestAnimationFrame(()=>{
    document.querySelectorAll('[data-fill]').forEach(el=>{el.style.width=el.getAttribute('data-fill');});
    const rf=document.getElementById('ring-fg');if(rf){rf.style.transition='stroke-dashoffset 1.05s cubic-bezier(.3,.85,.25,1)';rf.style.strokeDashoffset=RC*(1-gp/100);}
    countUp('ring-num',st.week,900);countUp('streak-num',st.streak,900);countUp('hm-tot',st.total,950);countUp('hm-sets',st.totalSets,1050);
  });
  if(strengthN>=2)drawVol();
  if(S.history.length>=2)drawFreq();
  if(names.length)drawEx();
}
function countUp(id,to,dur){const el=document.getElementById(id);if(!el)return;to=to||0;const t0=(performance&&performance.now)?performance.now():Date.now();function f(t){const p=Math.min(1,(t-t0)/dur);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
function bdg(e,t,d,on){return`<div class="bg ${on?'on':''}"><div class="be">${e}</div><div class="bt">${t}</div><div class="bd">${d}</div></div>`;}
function setupCanvas(id,H){const cv=document.getElementById(id);if(!cv)return null;const dpr=window.devicePixelRatio||1;const W=cv.clientWidth;cv.width=W*dpr;cv.height=H*dpr;const ctx=cv.getContext('2d');ctx.scale(dpr,dpr);return{ctx,W,H};}
function drawLine(id,data,color){const s=setupCanvas(id,150);if(!s||data.length<2)return;const{ctx,W,H}=s;const max=Math.max(...data)*1.12||1;const min=Math.min(...data)*.9;const pad=10,gh=H-pad*2-14,gw=W-pad*2;const step=gw/(data.length-1);const rng=(max-min)||1;const pts=data.map((v,i)=>({x:pad+i*step,y:pad+gh-((v-min)/rng*gh)}));
  const g=ctx.createLinearGradient(0,pad,0,pad+gh);g.addColorStop(0,color+'2b');g.addColorStop(1,color+'00');
  ctx.beginPath();ctx.moveTo(pts[0].x,pad+gh);pts.forEach(p=>ctx.lineTo(p.x,p.y));ctx.lineTo(pts[pts.length-1].x,pad+gh);ctx.closePath();ctx.fillStyle=g;ctx.fill();
  ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.strokeStyle=color;ctx.lineWidth=2.6;ctx.lineJoin='round';ctx.stroke();
  pts.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,3.4,0,7);ctx.fillStyle=color;ctx.fill();ctx.beginPath();ctx.arc(p.x,p.y,3.4,0,7);ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.stroke();});
  const lp=pts[pts.length-1];ctx.fillStyle='#14161D';ctx.font='600 11px '+getFont();ctx.textAlign='right';ctx.fillText(fmt(data[data.length-1]),W-4,lp.y-9<12?14:lp.y-9);}
function getFont(){return "'Plus Jakarta Sans',-apple-system,sans-serif";}
function drawVol(){drawLine('c-vol',S.history.filter(h=>h.kind!=='cardio').slice(0,12).reverse().map(h=>h.totalVolume||0),'#4F5BFF');}
function drawEx(){const pts=[];S.history.slice().reverse().forEach(h=>{const e=(h.exercises||[]).find(x=>x.name===statExercise);if(e){let b=0;(e.sets||[]).forEach(s=>{b=Math.max(b,e1rm(num(s.weight),num(s.reps)));});if(b>0)pts.push(Math.round(b));}});drawLine('c-ex',pts,'#0FB672');const cv=document.getElementById('c-ex');if(cv&&pts.length<2){const s=setupCanvas('c-ex',150);if(s){s.ctx.fillStyle='#9AA0AD';s.ctx.font='450 13px '+getFont();s.ctx.textAlign='center';s.ctx.fillText('Pas assez de données pour cet exercice',s.W/2,80);}}}
function drawFreq(){const wk=[];const now=new Date();const mon=new Date(now);mon.setDate(now.getDate()-((now.getDay()+6)%7));mon.setHours(0,0,0,0);for(let i=7;i>=0;i--){const start=new Date(mon.getTime()-i*7*864e5),end=new Date(start.getTime()+7*864e5);const c=S.history.filter(h=>{const t=new Date(h.date);return t>=start&&t<end;}).length;wk.push({c,label:start.getDate()+'/'+(start.getMonth()+1)});}const max=Math.max(1,...wk.map(w=>w.c));document.getElementById('freq').innerHTML=`<div style="display:flex;align-items:flex-end;gap:7px;height:110px;padding-top:6px">${wk.map(w=>`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:5px;height:100%;justify-content:flex-end"><div style="font-size:10px;font-weight:600;color:${w.c?'#4F5BFF':'#C7CDDA'}">${w.c||''}</div><div style="width:100%;height:${w.c/max*76}px;min-height:${w.c?6:2}px;border-radius:7px;background:${w.c?'linear-gradient(180deg,#6E77FF,#4F5BFF)':'#EBEEF5'}"></div><div style="font-size:9px;color:#9AA0AD;font-weight:450">${w.label}</div></div>`).join('')}</div>`;}

/* ---------- CARDIO ---------- */
let cardioDraft={type:'treadmill',minutes:30,difficulty:3,distance:0,note:''};
const CARDIO_LBL={treadmill:'Tapis de course',hiit:'HIIT maison',other:'Cardio'};
const DIFF_LBL=['Très facile','Facile','Modéré','Difficile','Maximal'];
function openCardio(type){if(type)cardioDraft.type=type;renderCardioSheet();openEl('sheet');}
function renderCardioSheet(){const c=cardioDraft;const types=[['treadmill','Tapis',I.run],['hiit','HIIT',I.flame],['other','Autre',I.activity]];
  let h=`<h3>Séance cardio</h3><p class="sd">Note ton activité — elle compte dans ton streak et tes stats.</p>
    <div class="chips" style="margin-bottom:22px">${types.map(([k,l,ic])=>`<button class="chip ${c.type===k?'on':''}" onclick="cardioSet('type','${k}')">${ic}${l}</button>`).join('')}</div>
    <div class="dur-head"><span class="cf-l">Durée</span><b class="dur-val" id="dur-val">${c.minutes} min</b></div>
    <input type="range" id="cardio-dur" min="5" max="120" step="5" value="${c.minutes}" style="--f:${(c.minutes-5)/115*100}%" oninput="cardioDur(this.value)">
    <div class="rscale"><span>5 min</span><span>1 h</span><span>2 h</span></div>`;
  if(c.type==='hiit'||c.type==='other'){
    h+=`<div class="cardio-field" style="margin-top:20px"><span class="cf-l">Difficulté</span><div class="diff">${[1,2,3,4,5].map(d=>`<button class="dbtn ${c.difficulty>=d?'on':''}" onclick="cardioSet('difficulty',${d})">${d}</button>`).join('')}</div></div><div class="cf-hint">${DIFF_LBL[c.difficulty-1]}</div>`;
    h+=`<input class="sheet-input" placeholder="Vidéo / séance (optionnel)" value="${esc(c.note||'')}" oninput="cardioDraft.note=this.value" maxlength="60" style="margin-top:16px">`;
  }
  if(c.type==='treadmill'){
    h+=`<div class="cardio-field" style="margin-top:20px"><span class="cf-l">Distance</span><div class="stepper"><button onclick="cardioAdj('distance',-0.5,0,100)">−</button><b>${fmt(c.distance)} km</b><button onclick="cardioAdj('distance',0.5,0,100)">+</button></div></div>`;
  }
  h+=`<button class="btn" style="margin-top:22px" onclick="saveCardio()">${I.check} Enregistrer</button>`;
  document.getElementById('sheet-c').innerHTML=h;
}
function cardioDur(v){cardioDraft.minutes=+v;const el=document.getElementById('dur-val');if(el)el.textContent=v+' min';const r=document.getElementById('cardio-dur');if(r)r.style.setProperty('--f',((v-5)/115*100)+'%');}
function cardioSet(k,v){cardioDraft[k]=v;renderCardioSheet();haptic(5);}
function cardioAdj(k,d,min,max){let v=Math.round(((cardioDraft[k]||0)+d)*10)/10;if(v<min)v=min;if(max&&v>max)v=max;cardioDraft[k]=v;renderCardioSheet();haptic(5);}
function saveCardio(){const c=cardioDraft;const label=CARDIO_LBL[c.type];S.history.unshift({id:Date.now(),date:new Date().toISOString(),kind:'cardio',cardioType:c.type,name:label,minutes:c.minutes,difficulty:c.difficulty,distance:c.distance||0,note:(c.note||'').trim()});save();closeSheet();confetti();toast(`${I.check} ${label} — ${c.minutes} min`);cardioDraft={type:'treadmill',minutes:30,difficulty:3,distance:0,note:''};setTimeout(()=>go('stats'),750);}

/* ---------- settings / sheets / toast ---------- */
function openSettings(){openSheet(`<h3>Réglages</h3><p class="sd">Gère tes séances et tes données.</p>
  <button class="srow" onclick="openNewTemplate()">${I.plus} Ajouter une séance personnalisée</button>
  ${currentDay!=='GEN'?`<button class="srow" onclick="renameTemplate()">${I.edit} Renommer la séance en cours</button>`:''}
  <button class="srow" onclick="resetDay()">${I.reset} Réinitialiser la séance en cours</button>
  ${currentDay!=='GEN'&&S.order.length>1?`<button class="srow red" onclick="deleteTemplate()">${I.trash} Supprimer la séance en cours</button>`:''}
  ${S.generated?`<button class="srow red" onclick="discardGen();closeSheet();">${I.x} Supprimer la séance générée</button>`:''}
  <button class="srow red" onclick="resetAll()">${I.trash} Tout réinitialiser (programme + historique)</button>
  <p class="sd" style="margin:16px 0 0;font-size:12px;color:var(--ink3);text-align:center;line-height:1.5">💡 iPhone : Safari → Partager → « Sur l'écran d'accueil » pour installer Arc en plein écran et hors-ligne.</p>`);}
function resetDay(){if(!confirm('Annuler cette séance ? Les séries cochées seront décochées.'))return;const s=curSession();s.blocks.forEach(b=>b.exercises.forEach(ex=>ex.sets.forEach(x=>{x.done=false;x.reps='';})));save();closeSheet();go('session');toast(`${I.reset} Séance réinitialisée`);}
function resetAll(){if(confirm('Effacer le programme, la séance générée et tout l\'historique ? Irréversible.')){S.program=defaultProgram();S.generated=null;S.history=[];S.custom=[];S.order=['A','B','C'];currentDay='A';save();closeSheet();go('session');}}
function openSheet(html){document.getElementById('sheet-c').innerHTML=html;openEl('sheet');}
function closeSheet(){closeEl('sheet');}
function openEl(id){document.getElementById(id).classList.add('on');document.getElementById(id==='pick'?'pick-bg':'sheet-bg').classList.add('on');}
function closeEl(id){document.getElementById(id).classList.remove('on');document.getElementById(id==='pick'?'pick-bg':'sheet-bg').classList.remove('on');}
let toastT=null;
function toast(html){const t=document.getElementById('toast');t.innerHTML=html;t.classList.add('on');if(toastT)clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('on'),2600);}
function confetti(){const cv=document.getElementById('confetti');const ctx=cv.getContext('2d');const dpr=window.devicePixelRatio||1;cv.width=innerWidth*dpr;cv.height=innerHeight*dpr;ctx.scale(dpr,dpr);const cols=['#4F5BFF','#0FB672','#F5980B','#F63D68','#7A5AF8','#0BA5EC'];const P=[];for(let i=0;i<130;i++)P.push({x:innerWidth/2,y:innerHeight*.5,vx:(Math.random()-.5)*15,vy:Math.random()*-17-4,g:.42+Math.random()*.3,s:5+Math.random()*6,c:cols[i%cols.length],r:Math.random()*6,vr:(Math.random()-.5)*.4,l:1});let f=0;(function a(){f++;ctx.clearRect(0,0,innerWidth,innerHeight);let al=false;P.forEach(p=>{p.vy+=p.g;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;p.l-=.008;if(p.y<innerHeight+20&&p.l>0){al=true;ctx.save();ctx.globalAlpha=Math.max(0,p.l);ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.c;ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);ctx.restore();}});if(al&&f<220)requestAnimationFrame(a);else ctx.clearRect(0,0,innerWidth,innerHeight);})();}

/* ---------- events / init ---------- */
document.getElementById('btn-settings').addEventListener('click',openSettings);
document.getElementById('sheet-bg').addEventListener('click',closeSheet);
document.getElementById('pick-bg').addEventListener('click',()=>closeEl('pick'));
document.getElementById('pick-ok').addEventListener('click',confirmPick);
window.addEventListener('resize',()=>{if(currentView==='stats'){if(S.history.length>=2){drawVol();drawFreq();}if(exNames(allEntries(true)).length)drawEx();}});

load();render();
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));}
