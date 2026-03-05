const html=document.documentElement;
const saved=localStorage.getItem('theme')||'dark';
html.setAttribute('data-theme',saved);
document.getElementById('themeToggle').addEventListener('click',()=>{
  const next=html.getAttribute('data-theme')==='dark'?'light':'dark';
  html.setAttribute('data-theme',next);
  localStorage.setItem('theme',next);
});
window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('scrolled',window.scrollY>50);
});
const start=new Date(2022,3,1),now=new Date();
let yrs=now.getFullYear()-start.getFullYear(),mos=now.getMonth()-start.getMonth();
if(mos<0){yrs--;mos+=12;}
document.getElementById('stat-anos').textContent=yrs+'+';
document.getElementById('exp-badge').textContent=`${yrs} anos e ${mos} meses de experiência`;
lottie.loadAnimation({container:document.getElementById('lottie-animation'),path:'images/data-analyst-lottie.json',renderer:'svg',loop:true,autoplay:true});
const SVG_POWERBI = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='4' height='12' x='1' y='12' rx='1' fill='%23F2C811'/%3E%3Crect width='4' height='16' x='6.5' y='8' rx='1' fill='%23F2C811' opacity='.85'/%3E%3Crect width='4' height='20' x='12' y='4' rx='1' fill='%23F2C811' opacity='.7'/%3E%3Crect width='4' height='24' x='17.5' y='0' rx='1' fill='%23F2C811' opacity='.55'/%3E%3C/svg%3E`;
const SVG_AUTOMATE = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3ClinearGradient id='a' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%230D6EFD'/%3E%3Cstop offset='1' stop-color='%2300B4D8'/%3E%3C/linearGradient%3E%3Crect width='24' height='24' rx='4' fill='url(%23a)'/%3E%3Cpath d='M7 8l5-3 5 3v4l-5 3-5-3V8z' fill='white' opacity='.9'/%3E%3Cpath d='M7 12v4l5 3 5-3v-4l-5 3-5-3z' fill='white' opacity='.6'/%3E%3C/svg%3E`;
const SVG_EXCEL = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='3' fill='%23217346'/%3E%3Cpath d='M13 3v18h8V3h-8zm6 4h-4V5h4v2zm0 4h-4V9h4v2zm0 4h-4v-2h4v2zm0 4h-4v-2h4v2z' fill='white' opacity='.3'/%3E%3Cpath d='M3 6l8-1v14l-8-1V6z' fill='%2333A85E'/%3E%3Ctext x='4.5' y='15.5' font-family='Arial' font-weight='bold' font-size='8' fill='white'%3EX%3C/text%3E%3C/svg%3E`;
const SVG_QUICKSIGHT = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='3' fill='%23232F3E'/%3E%3Ccircle cx='12' cy='10' r='5' fill='none' stroke='%23FF9900' stroke-width='2'/%3E%3Cline x1='16' y1='14' x2='20' y2='18' stroke='%23FF9900' stroke-width='2.5' stroke-linecap='round'/%3E%3Ccircle cx='12' cy='10' r='2' fill='%23FF9900'/%3E%3C/svg%3E`;

const SVG_ORACLE = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='3' fill='%23F80000'/%3E%3Cellipse cx='12' cy='12' rx='7' ry='4.5' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E`;

const techs=[
  {name:'Python',          img:'https://cdn.simpleicons.org/python/3776AB'},
  {name:'SQL',             img:'https://cdn.simpleicons.org/postgresql/4169E1'},
  {name:'Power BI',        img:SVG_POWERBI},
  {name:'Qlik Sense',      img:'https://cdn.simpleicons.org/qlik/009845'},
  {name:'Looker',          img:'https://cdn.simpleicons.org/looker/4285F4'},
  {name:'Amazon QuickSight',img:SVG_QUICKSIGHT},
  {name:'BigQuery',        img:'https://cdn.simpleicons.org/googlebigquery/669DF6'},
  {name:'PostgreSQL',      img:'https://cdn.simpleicons.org/postgresql/336791'},
  {name:'MySQL',           img:'https://cdn.simpleicons.org/mysql/4479A1'},
  {name:'Oracle',          img:SVG_ORACLE},
  {name:'Pentaho',         img:'https://cdn.simpleicons.org/hitachi/CF0A2C'},
  {name:'Power Automate',  img:SVG_AUTOMATE},
  {name:'Excel',           img:SVG_EXCEL},
  {name:'Google Analytics',img:'https://cdn.simpleicons.org/googleanalytics/E37400'},
  {name:'Git',             img:'https://cdn.simpleicons.org/git/F05032'},
  {name:'JIRA',            img:'https://cdn.simpleicons.org/jira/0052CC'},
  {name:'DBeaver',         img:'https://cdn.simpleicons.org/dbeaver/382923'},
  {name:'Flask',           img:'https://cdn.simpleicons.org/flask/000000'},
];
const chip=t=>`<div class="tech-chip"><img src="${t.img}" alt="${t.name}" onerror="this.style.display='none'"><span>${t.name}</span></div>`;
const half=Math.ceil(techs.length/2),t1=techs.slice(0,half),t2=techs.slice(half);
document.getElementById('row1').innerHTML=[...t1,...t1,...t1].map(chip).join('');
document.getElementById('row2').innerHTML=[...t2,...t2,...t2].map(chip).join('');
const obs=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*70);obs.unobserve(e.target);}});
},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));