const target = new Date('2026-11-19T09:00:00+03:00').getTime();
function tick(){
  const d=Math.max(0,target-Date.now());
  const days=Math.floor(d/86400000), hours=Math.floor(d/3600000)%24, mins=Math.floor(d/60000)%60, secs=Math.floor(d/1000)%60;
  ['days','hours','minutes','seconds'].forEach((id,i)=>{const el=document.getElementById(id);if(el)el.textContent=[days,hours,mins,secs][i].toString().padStart(2,'0')});
}
setInterval(tick,1000); tick();
const menu=document.querySelector('.menu'); const nav=document.querySelector('.nav'); if(menu)menu.addEventListener('click',()=>nav.classList.toggle('open'));
const page=document.body.dataset.page; document.querySelectorAll('.nav a').forEach(a=>{if(a.dataset.page===page)a.classList.add('active')});
