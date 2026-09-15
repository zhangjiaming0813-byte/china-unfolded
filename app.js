
/* China, unfolded. • A dependency-free, local-first interactive prototype.
 * Pricing presets are fictional planning assumptions, NOT market quotes.
 * All arithmetic is deterministic. No LLM, booking API or analytics is used.
 */
'use strict';
const VERSION = 1;
const SAVE_KEY = 'china-unfolded-saved-v1';
const CHECK_KEY = 'china-unfolded-checks-v1';
const ICONS = {
  mountain:'<path d="m2 19 7-13 5 9 4-6 4 10H2Z"/><path d="m6.3 11 2.7 2 2.6-2"/>',
  arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
  diagonal:'<path d="M6 18 18 6M6 6h12v12"/>',
  down:'<path d="m6 9 6 6 6-6"/>',
  left:'<path d="M20 12H4m6-6-6 6 6 6"/>',
  check:'<path d="m5 12 4 4 10-10"/>',
  close:'<path d="m6 6 12 12M6 18 18 6"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  minus:'<path d="M5 12h14"/>',
  globe:'<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  bookmark:'<path d="M6 4h12v17l-6-4-6 4V4Z"/>',
  calendar:'<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4m8-4v4M4 11h16m-11 4h2m3 0h2"/>',
  users:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2m1-15a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5v1"/>',
  wallet:'<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M18 6V3L5 6m16 5h-6v5h6m-3-2.5h.1"/>',
  train:'<rect x="6" y="3" width="12" height="15" rx="3"/><path d="M6 10h12m-9 8-3 3m9-3 3 3M9 14h.1m5.9 0h.1"/>',
  food:'<path d="M5 3v6q0 3 3 3t3-3V3M8 3v18m11 0V3q-4 2-4 8h4"/>',
  culture:'<path d="m3 9 9-6 9 6H3ZM4 21h16M6 11v7m6-7v7m6-7v7M3 18h18"/>',
  leaf:'<path d="M4 20 16 8M5 17C-1 7 10 3 21 3c0 11-4 22-16 14Z"/>',
  city:'<path d="M3 21V9h7v12m0 0V3h10v18M2 21h20M6 12h1m-1 4h1m6-9h1m2 0h1m-4 4h1m2 0h1m-4 4h1m2 0h1"/>',
  coffee:'<path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm13 1h1a3 3 0 0 1 0 6h-1M7 3v2m4-2v2M2 22h18"/>',
  photo:'<path d="M3 7h5l2-3h4l2 3h5v14H3V7Z"/><circle cx="12" cy="13" r="4"/>',
  sliders:'<path d="M4 7h6m4 0h6M4 17h10m4 0h2"/><circle cx="12" cy="7" r="2"/><circle cx="16" cy="17" r="2"/>',
  spark:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM20 2v4m-2-2h4"/>',
  shield:'<path d="m12 3 8 3v6q0 6-8 9-8-3-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>',
  pin:'<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6 6-2Z"/>',
  route:'<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h8a4 4 0 0 1 0 8H9a3 3 0 0 0 0 6h8"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/>',
  bed:'<path d="M3 18V7m18 11V9H9v8H3m0-7h6M3 18h18M3 18v3m18-3v3"/>',
  list:'<path d="M9 6h12M9 12h12M9 18h12M3 6h.01M3 12h.01M3 18h.01"/>',
  edit:'<path d="m4 16 12-12 4 4L8 20H4v-4Zm10-10 4 4"/>',
  file:'<path d="M5 3h9l5 5v13H5V3Zm9 0v6h5M9 13h6m-6 4h6"/>',
  download:'<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',
  print:'<path d="M6 9V3h12v6M6 17H3V9h18v8h-3M6 14h12v7H6v-7Zm11-2h1"/>',
  phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 5h4m-2 13h.01"/>',
  passport:'<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="4"/><path d="M8 10h8m-4-4v8M9 18h6"/>',
  chat:'<path d="M4 4h16v12H9l-5 4V4Z"/><path d="M8 8h8m-8 4h5"/>',
  copy:'<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',
  heart:'<path d="M12 21 3 12a6 6 0 0 1 9-8 6 6 0 0 1 9 8l-9 9Z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1"/>',
  moon:'<path d="M20 14A8 8 0 0 1 10 4a8.5 8.5 0 1 0 10 10Z"/>',
  suitcase:'<rect x="4" y="7" width="16" height="13" rx="2"/><path d="M9 7V3h6v4M8 7v13m8-13v13"/>',
  lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 5v2"/>',
  reset:'<path d="M3 4v6h6M4 10a8 8 0 1 1 0 6"/>',
  trash:'<path d="M3 6h18M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7"/>'
};
function icon(name, extra='') { return `<svg class="icon ${extra}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] || ICONS.compass}</svg>`; }
const pair = (en, zh) => [en, zh];
const CITY = {
  shanghai:{name:pair('Shanghai','上海'), zh:'上海', subtitle:pair('Skyline evenings. Little neighborhood discoveries.','天际线下的夜晚，也有街巷里的小惊喜。'),tags:['city','food','culture'],environment:'urban',rate:[380,650],theme:pair('City rhythms','摩登都市'), trade:pair('A city-focused stay; leave space for queues and cross-city journeys.','以城市体验为主；需要为排队和市内移动留出时间。'),activities:[pair('A walk along the Bund','外滩漫步'),pair('Old-city lanes around Yuyuan','豫园周边街巷'),pair('An art-filled neighborhood afternoon','街区艺术与小店'),pair('A museum of your choice','自选博物馆')],source:'https://english.shanghai.gov.cn/'},
  hangzhou:{name:pair('Hangzhou','杭州'),zh:'杭州',subtitle:pair('Lakeside wandering and a slower cup of tea.','沿湖散步，把一杯茶的时间留给自己。'),tags:['nature','slow','culture'],environment:'nature',rate:[300,500],theme:pair('The softer side','湖山慢游'),trade:pair('Outdoor ideas need a weather backup; transport to tea areas is not yet priced.','户外活动需要天气备选；茶区接驳费用尚待核实。'),activities:[pair('West Lake at your own pace','西湖慢行'),pair('A tea-themed afternoon','茶文化体验'),pair('Historic neighborhood wandering','老街区漫步'),pair('Choose a lakeside walking route','自选湖畔步行路线')],source:'https://www.ehangzhou.gov.cn/'},
  chengdu:{name:pair('Chengdu','成都'),zh:'成都',subtitle:pair('Tea-house afternoons. A table full of stories.','茶馆里的下午，一张餐桌上的烟火气。'),tags:['food','slow','culture'],environment:'urban',rate:[240,420],theme:pair('Follow your appetite','为美食出发'),trade:pair('Check dietary requirements directly; nearby mountain trips are not included.','饮食要求需直接向商家确认；周边山地旅行未包含。'),activities:[pair('A tea-house visit in People’s Park','人民公园茶馆'),pair('Explore the Wenshu neighborhood','文殊院周边街区'),pair('Choose a local cultural experience','自选本地文化体验'),pair('A neighborhood food discovery walk','街区美食探索')],source:'https://www.gochengdu.cn/'},
  beijing:{name:pair('Beijing','北京'),zh:'北京',subtitle:pair('Ancient courtyards. A story around every corner.','古老院落与胡同，把历史写进日常。'),tags:['culture','photo','food'],environment:'urban',rate:[360,650],theme:pair('Layers of history','历史与街巷'),trade:pair('Opening days, reservations and travel to outlying sights all need checking.','开放日期、预约要求及远郊景点交通都需要进一步确认。'),activities:[pair('Choose a hutong walking route','自选胡同步行路线'),pair('A palace or museum visit','宫殿或博物馆参观'),pair('Temple of Heaven area','天坛周边'),pair('A neighborhood culture day','街区文化探索')],source:'https://english.beijing.gov.cn/'},
  xian:{name:pair('Xi’an','西安'),zh:'西安',subtitle:pair('Old city walls, warm bowls, unhurried discoveries.','城墙、面食，在旧城里慢慢发现。'),tags:['culture','food','photo'],environment:'urban',rate:[240,420],theme:pair('A taste of history','长安的味道'),trade:pair('Major sights outside the center need extra transfer planning and reservations.','市中心以外的大型景点需要额外规划接驳及预约。'),activities:[pair('Explore the city-wall neighborhood','城墙周边探索'),pair('Old-city food and market walk','旧城美食与市集'),pair('Choose a museum experience','自选博物馆体验'),pair('A historic-neighborhood afternoon','历史街区漫步')],source:'https://en.xa.gov.cn/'},
  yangshuo:{name:pair('Yangshuo','阳朔'),zh:'阳朔',subtitle:pair('Green peaks, winding rivers, room to breathe.','青山与河流之间，让旅行慢下来。'),tags:['nature','slow','photo'],environment:'nature',rate:[220,460],theme:pair('Take the scenic route','走进山水'),trade:pair('Local transfers and outdoor conditions need checking; arrival transport is separate.','本地接驳和户外条件需要核实；抵达目的地的交通单独安排。'),activities:[pair('A Yulong River-area walk','遇龙河周边步行'),pair('Choose a countryside route','自选乡间路线'),pair('An old-town afternoon','古镇午后'),pair('A scenic photography day','山水摄影日')],source:'https://www.guilin.gov.cn/'}
};
const INTERESTS = {
  food:{label:pair('Food & flavors','美食烟火'),icon:'food'},culture:{label:pair('Culture & history','人文历史'),icon:'culture'},nature:{label:pair('Nature','自然山水'),icon:'leaf'},city:{label:pair('City life','都市生活')},slow:{label:pair('Slow travel','慢旅行'),icon:'coffee'},photo:{label:pair('Photography','摄影'),icon:'photo'}
};
INTERESTS.city.icon='city';
const SOURCES = {
  visa:{url:'https://en.nia.gov.cn/',name:pair('National Immigration Administration','国家移民管理局')},
  payment:{url:'https://english.www.gov.cn/services/workinchina',name:pair('State Council · Live & work in China','中国政府网 · 在华生活与工作指南')},
  train:{url:'https://www.12306.cn/en/faq.html',name:pair('China Railway 12306 · official FAQ','中国铁路 12306 · 官方常见问题')},
  emergency:{url:'https://english.www.gov.cn/2025special/bizexpatsinchina2025',name:pair('State Council · Official practical guide','中国政府网 · 官方实用指南')}
};
function freshState(){ return {version:VERSION,lang:'en',days:7,people:2,rooms:1,budget:'comfort',environment:'all',mobility:'balanced',month:'unsure',arrival:'',interests:['food','culture'],route:['shanghai','hangzhou'],allocations:[4,3],expenses:{},disabledSlots:[],extras:[],checks:{},target:8500,manualRoute:false}; }
function isPlain(o){return o!==null&&typeof o==='object'&&!Array.isArray(o);}
function validSaved(o){
  if(!isPlain(o)||o.version!==VERSION||!['en','zh'].includes(o.lang))return false;
  if(!Number.isInteger(o.days)||o.days<3||o.days>21||!Number.isInteger(o.people)||o.people<1||o.people>8||!Number.isInteger(o.rooms)||o.rooms<1||o.rooms>8)return false;
  if(!['value','comfort','premium'].includes(o.budget)||!['all','urban','nature'].includes(o.environment)||!['easy','balanced','open'].includes(o.mobility))return false;
  if(!Array.isArray(o.route)||o.route.length<1||o.route.length>2||o.route.some(c=>!Object.hasOwn(CITY,c))||new Set(o.route).size!==o.route.length)return false;
  if(!Array.isArray(o.allocations)||o.allocations.length!==o.route.length||o.allocations.some(x=>!Number.isInteger(x)||x<2)||o.allocations.reduce((a,b)=>a+b,0)!==o.days)return false;
  if(!Array.isArray(o.interests)||o.interests.length<1||o.interests.length>4||o.interests.some(x=>!Object.hasOwn(INTERESTS,x)))return false;
  if(typeof o.arrival!=='string'||(o.arrival!==''&&!/^\d{4}-\d{2}-\d{2}$/.test(o.arrival)))return false;
  if(!['unsure',...Array.from({length:12},(_,i)=>String(i+1))].includes(o.month))return false;
  if(!isPlain(o.expenses)||Object.keys(o.expenses).length>150||!Array.isArray(o.extras)||o.extras.length>30||!Array.isArray(o.disabledSlots)||o.disabledSlots.some(x=>typeof x!=='string'||!/^d\d+-(main|afternoon|evening)$/.test(x)))return false;
  if(!Number.isFinite(o.target)||o.target<0||o.target>10000000)return false;
  for(const [k,v] of Object.entries(o.expenses)){
    if(!/^[a-z0-9:_-]+$/i.test(k)||!isPlain(v)||!['estimated','pending','confirmed'].includes(v.mode))return false;
    if(v.mode==='estimated'&&(!Number.isFinite(v.min)||!Number.isFinite(v.max)||v.min<0||v.max<v.min||v.max>1000000))return false;
    if(v.mode==='confirmed'&&(!Number.isFinite(v.total)||v.total<0||v.total>10000000||typeof v.fp!=='string'))return false;
    if(v.note!=null&&(typeof v.note!=='string'||v.note.length>200))return false;
  }
  if(o.extras.some(x=>!isPlain(x)||typeof x.id!=='string'||!/^extra-[a-z0-9-]+$/.test(x.id)||typeof x.label!=='string'||x.label.length>70||!['group','person'].includes(x.unit)))return false;
  return isPlain(o.checks);
}
function readSaved(){try{const obj=JSON.parse(localStorage.getItem(SAVE_KEY)||'null');return obj&&validSaved(obj.state)?obj:null;}catch{return null;}}
let saved=readSaved();
let state=saved?structuredClone(saved.state):freshState();
try{const checks=JSON.parse(localStorage.getItem(CHECK_KEY)||'null');if(isPlain(checks))state.checks=checks;}catch{}
const ui={tab:'route',day:0,filter:'all',showAll:false,advanced:false,needsRefresh:false,toastTimer:null,modalType:null,editRow:null,print:false};
function t(en,zh){return state.lang==='zh'?zh:en;}
function txt(v){return Array.isArray(v)?v[state.lang==='zh'?1:0]:String(v??'');}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function money(n){const rounded=Math.round((n+Number.EPSILON)*100)/100;return rounded.toLocaleString(state.lang==='zh'?'zh-CN':'en-US',{minimumFractionDigits:Number.isInteger(rounded)?0:2,maximumFractionDigits:2});}
function amount(lo,hi=lo){return lo===hi?`¥${money(lo)}`:`¥${money(lo)}–${money(hi)}`;}
function cityName(id){return txt(CITY[id].name);}
function names(route=state.route){return route.map(cityName).join(' → ');}
function interestLabel(id){return txt(INTERESTS[id].label);}
function option(v,label,current){return `<option value="${esc(v)}"${String(v)===String(current)?' selected':''}>${esc(label)}</option>`;}
function statusBadge(mode,stale=false){return `<span class="status-badge ${mode}">${icon(mode==='confirmed'?'check':mode==='pending'?'clock':'edit')}${mode==='confirmed'?t('Confirmed by you','你已确认'):mode==='pending'?(stale?t('Recheck needed','需要重核'):t('Not priced yet','待估算')):t('Planning estimate','规划估算')}</span>`;}
function profileSummary(){return t(`${state.people} adults · ${state.days} days · ${state.days-1} nights · ${state.rooms} room${state.rooms>1?'s':''}`,`${state.people} 位成人 · ${state.days} 天 ${state.days-1} 晚 · ${state.rooms} 间房`);}
function dateText(){return state.arrival||t('Dates not set','日期未确定');}
function roundRate(n){return Math.round(n/10)*10;}
function budgetFactor(){return {value:.65,comfort:1,premium:1.8}[state.budget];}
function getPlanDays(){
  let offset=0;const result=[];
  state.route.forEach((cid,index)=>{
    for(let n=0;n<state.allocations[index];n++){
      const d=offset+n;const slots=[];const arrival=d===0,departure=d===state.days-1,transfer=index>0&&n===0;
      if(arrival)slots.push({id:`d${d}-arrival`,name:pair('Arrive, settle in, take a breath','抵达、入住，先休息一下'),desc:pair('Keep arrival flexible. Airport/station transfers and hotel check-in are not booked here.','保留弹性抵达时间。机场／车站接驳与酒店入住尚未预订。'),icon:'suitcase',period:pair('Arrival day','抵达日'),fixed:true});
      else if(transfer)slots.push({id:`d${d}-transfer`,name:pair(`Travel to ${CITY[cid].name[0]}`,`前往${CITY[cid].name[1]}`),desc:pair('Reserve a travel block. Route, station, timetable, fare and door-to-door duration still need confirmation.','预留移动时段。路线、车站、时刻、票价与门到门时长均待确认。'),icon:'train',period:pair('Transfer day','跨城移动日'),fixed:true,source:true});
      else if(departure)slots.push({id:`d${d}-departure`,name:pair('A flexible morning, then your onward journey','弹性安排上午，然后开启返程'),desc:pair('Keep check-out and your onward journey as the priority. Verify your actual departure time.','优先预留退房与后续交通时间，请核对实际出发时刻。'),icon:'suitcase',period:pair('Departure day','离开日'),fixed:true});
      else{
        const activity=CITY[cid].activities[(n-1+CITY[cid].activities.length)%CITY[cid].activities.length];
        slots.push({id:`d${d}-main`,name:activity,desc:pair('An editable idea, not a reservation. Check opening hours, access requirements and the actual admission price.','可调整的体验灵感，并非预约。请核实开放时间、入场要求与实际门票价格。'),icon:INTERESTS[CITY[cid].tags[0]].icon,period:pair('Morning · main experience','上午 · 主要体验'),experience:true,copy:activity[1]});
        slots.push({id:`d${d}-afternoon`,name:pair('Leave a little room for discovery','把一点时间留给偶遇'),desc:pair('Stay in the same neighborhood for a meal, a café or a relaxed walk. Meals are covered by your daily meal allowance.','在同一街区用餐、喝咖啡或轻松散步。餐饮由每日餐饮预算统一计算。'),icon:'coffee',period:pair('Afternoon · flexible','下午 · 弹性时间')});
      }
      if(!departure)slots.push({id:`d${d}-evening`,name:pair('Dinner, then an easy evening nearby','晚餐与附近的轻松夜晚'),desc:pair('Keep the first or final evening simple. Confirm ingredients and dietary needs directly with the restaurant.','晚上不必排得太满。食材及特殊饮食要求请直接向餐厅确认。'),icon:'moon',period:pair('Evening · unhurried','晚上 · 慢一点')});
      result.push({index:d,city:cid,arrival,departure,transfer,slots:slots.filter(s=>!state.disabledSlots.includes(s.id))});
    }
    offset+=state.allocations[index];
  });
  return result;
}
function baseExpenseRows(){
  const rows=[];let offset=0;const f=budgetFactor();
  state.route.forEach((cid,index)=>{
    const nights=state.allocations[index]-(index===state.route.length-1?1:0);
    rows.push({id:`stay:${cid}`,label:t(`${cityName(cid)} · accommodation`,`${cityName(cid)} · 住宿`),cat:'stay',qty:nights*state.rooms,unit:t('room-night','间·晚'),min:roundRate(CITY[cid].rate[0]*f),max:roundRate(CITY[cid].rate[1]*f),formula:t(`${state.rooms} room${state.rooms>1?'s':''} × ${nights} nights`,`${state.rooms} 间房 × ${nights} 晚`),basis:t('Illustrative room-rate assumption; not a hotel offer. Confirm taxes and fees with the provider.','示例房价假设，不是酒店报价。税费及服务费需向供应商确认。'),details:{city:cid,offset,nights}});
    offset+=state.allocations[index];
  });
  rows.push({id:'meals',label:t('Meals & everyday flavors','餐饮与日常美食'),cat:'food',qty:state.people*state.days,unit:t('person-day','人·天'),min:roundRate(70*f),max:roundRate(130*f),formula:t(`${state.people} adults × ${state.days} days`,`${state.people} 位成人 × ${state.days} 天`),basis:t('Illustrative daily meal allowance. No restaurant prices or meal bookings are implied.','示例每日餐饮预算额度，不代表餐厅报价或餐饮预订。')});
  rows.push({id:'local',label:t('Getting around locally','市内交通'),cat:'local',qty:state.people*state.days,unit:t('person-day','人·天'),min:20,max:50,formula:t(`${state.people} adults × ${state.days} days`,`${state.people} 位成人 × ${state.days} 天`),basis:t('A per-person daily allowance, not a fare quote. This is not a per-car taxi price.','按人每天预留的交通额度，并非实际票价，也不是整车出租车价格。')});
  const activityCount=getPlanDays().reduce((n,d)=>n+d.slots.filter(s=>s.experience).length,0);
  if(activityCount)rows.push({id:'activities',label:t('Main-experience allowances','主要体验预算额度'),cat:'activities',qty:activityCount*state.people,unit:t('person-experience','人·体验'),min:40,max:100,formula:t(`${activityCount} main experiences × ${state.people} adults`,`${activityCount} 项主要体验 × ${state.people} 位成人`),basis:t('An illustrative spending allowance, NOT admission prices. Some suggested experiences may be free; adjust this fund to your actual plans.','示例体验消费额度，并非门票报价。部分建议可能免费，请按实际计划调整。')});
  for(let i=0;i<state.route.length-1;i++)rows.push({id:`transfer:${state.route[i]}:${state.route[i+1]}`,label:`${cityName(state.route[i])} → ${cityName(state.route[i+1])}`,cat:'intercity',qty:state.people,unit:t('traveler / leg','人·单程'),min:null,max:null,formula:t(`${state.people} adults × 1 journey`,`${state.people} 位成人 × 1 段行程`),basis:t('No live fare or timetable connected. Enter your own verified fare or a planning range.','未连接实时票价或时刻表。请填入自己核实的票价或规划区间。')});
  state.extras.forEach(e=>rows.push({id:e.id,label:e.label,cat:'extra',qty:e.unit==='person'?state.people:1,unit:e.unit==='person'?t('person','人'):t('whole group','全组'),min:null,max:null,formula:e.unit==='person'?t(`${state.people} adults`,`${state.people} 位成人`):t('1 × group expense','1 × 全组费用'),basis:t('A custom expense entered by you.','你自行添加的费用项目。'),custom:true}));
  return rows;
}
function scopeFingerprint(row){return JSON.stringify({id:row.id,qty:row.qty,people:state.people,rooms:state.rooms,days:state.days,route:state.route,allocations:state.allocations,date:state.arrival,month:state.month,activityIds:row.id==='activities'?getPlanDays().flatMap(d=>d.slots.filter(s=>s.experience).map(s=>s.id)):null});}
function getExpenseRows(){
  return baseExpenseRows().map(base=>{
    const row={...base,mode:base.min===null?'pending':'estimated',stale:false};const o=state.expenses[row.id];row.fp=scopeFingerprint(row);
    if(o){row.mode=o.mode;row.note=o.note||'';if(o.mode==='estimated'){row.min=o.min;row.max=o.max;row.basis=t('Your own planning-rate assumption.','你自行填写的规划单价。');}if(o.mode==='confirmed'){
      if(o.fp===row.fp){row.totalMin=row.totalMax=o.total;row.basis=t('A total manually confirmed by you, not verified by this website.','你手动确认的整项总额，未经本网站核验。');}
      else{row.mode='pending';row.stale=true;row.previousTotal=o.total;row.basis=t('Trip assumptions changed. Recheck your saved amount before it can be included again.','行程条件已变化。原有金额需要重新确认，暂不计入小计。');}
    }}
    if(row.mode==='estimated'){row.totalMin=Math.round(row.qty*row.min*100)/100;row.totalMax=Math.round(row.qty*row.max*100)/100;}
    if(row.mode==='pending'){row.totalMin=null;row.totalMax=null;}
    return row;
  });
}
function getBudget(){
  const rows=getExpenseRows();const categories={stay:{label:pair('Stays','住宿'),color:'#dce7b1'},food:{label:pair('Food & drinks','餐饮'),color:'#b3c795'},local:{label:pair('Local transport','市内交通'),color:'#83a591'},activities:{label:pair('Experiences','体验额度'),color:'#d1b88e'},intercity:{label:pair('Intercity travel','城际交通'),color:'#d9cda9'},extra:{label:pair('Your extras','自定义费用'),color:'#c8cbb4'}};
  let low=0,high=0,pending=0,confirmed=0,estimated=0;
  Object.entries(categories).forEach(([key,c])=>{c.rows=rows.filter(r=>r.cat===key);c.low=0;c.high=0;c.pending=0;});
  rows.forEach(r=>{const cat=categories[r.cat];if(r.mode==='pending'){pending++;cat.pending++;}else{low=Math.round((low+r.totalMin)*100)/100;high=Math.round((high+r.totalMax)*100)/100;cat.low=Math.round((cat.low+r.totalMin)*100)/100;cat.high=Math.round((cat.high+r.totalMax)*100)/100;if(r.mode==='confirmed')confirmed++;else estimated++;}});
  return {rows,low,high,pending,confirmed,estimated,categories,known:rows.length-pending};
}
function getCandidates(){
  const eligible=Object.keys(CITY).filter(cid=>state.environment==='all'||CITY[cid].environment===state.environment);
  let routes=eligible.map(c=>[c]);
  if(state.mobility!=='easy'&&state.days>=5&&eligible.includes('shanghai')&&eligible.includes('hangzhou'))routes.push(['shanghai','hangzhou']);
  if(state.mobility==='open'&&state.days>=8&&eligible.includes('beijing')&&eligible.includes('xian'))routes.push(['beijing','xian']);
  return routes.map(route=>{
    const tags=new Set(route.flatMap(c=>CITY[c].tags));const matched=state.interests.filter(i=>tags.has(i));
    let score=matched.length*5;
    if(route.length===2)score+=state.mobility==='balanced'?1.1:.5;
    if(state.budget==='value')score-=route.reduce((n,c)=>n+CITY[c].rate[0],0)/route.length/700;
    return {route,matched,score};
  }).sort((a,b)=>b.score-a.score).slice(0,3);
}
function allocateDays(route){const base=Math.floor(state.days/route.length);return route.map((_,i)=>base+(i<state.days%route.length?1:0));}
function setRoute(route,manual=false){state.route=route;state.allocations=allocateDays(route);state.disabledSlots=[];state.manualRoute=manual;ui.day=0;ui.needsRefresh=false;}
function brand(){return `<a class="brand" href="#top" aria-label="China, unfolded — home"><span class="brand-mark">${icon('mountain')}</span><span class="brand-name">China, <em>unfolded.</em></span></a>`;}
function renderPage(){
  document.documentElement.lang=state.lang==='zh'?'zh-CN':'en';
  document.title=t('China, unfolded. — Find your kind of China','China, unfolded. — 发现适合你的中国旅行');
  document.querySelector('.skip-link').textContent=t('Skip to trip planner','跳转至旅行规划器');
  document.getElementById('app').innerHTML=`<header class="site-header"><div class="container nav">${brand()}<nav class="nav-links" aria-label="${t('Main navigation','主导航')}"><a href="#discover" class="active">${t('Discover China','探索中国')}</a><a href="#workspace">${t('Trip planner','旅行规划')}</a><a href="#essentials">${t('Travel essentials','旅行必备')}</a></nav><div class="nav-actions"><button class="lang-btn" data-action="language" aria-label="${t('Switch to Chinese','Switch to English')}">${icon('globe')}${t('中文','EN')}</button><button class="btn outline" data-action="saved">${icon('bookmark')}<span class="saved-label">${t('My trip','我的行程')}</span><i class="saved-dot${saved?' on':''}"></i></button></div></div></header>
  <main id="top"><section class="container hero"><div class="hero-copy"><div class="eyebrow"><span class="dot"></span>${t('A little curiosity. A whole new world.','带着好奇心，去看一个真实的中国')}</div><h1>${t('Find your kind<em>of China.</em>','中国之旅，<em>由你定义。</em>')}</h1><p class="hero-desc">${t('From the places you’ll love to the little things you need to know. A China trip that feels like you.','从值得出发的目的地，到落地后的小事。按你的喜好、节奏和预算，把旅行安排明白。')}</p><div class="hero-actions"><a class="btn primary" href="#planner">${t('Let’s plan your trip','开始规划旅行')}${icon('arrow')}</a><button class="text-link" data-action="how">${t('How it works','如何使用')}${icon('diagonal')}</button></div><div class="hero-footnote">${icon('check')}${t('No sign-up. No mystery totals. Just a clearer plan.','无需注册，不猜总价。每一步都更清楚。')}</div></div><div class="hero-art"><div class="art-frame">${landscape('yangshuo')}<div class="art-caption">${icon('pin')}<div>${t('Inspired by Yangshuo, Guangxi','灵感来自 · 广西阳朔')}<small>${t('An original illustrated escape','原创山水插画 · 非实景照片')}</small></div></div></div><div class="art-stamp"><span>${t('Less rush','慢一点')}</span>${icon('compass')}<span>${t('More wonder','多一点发现')}</span></div><div class="art-note"><span class="mini-icon">${icon('leaf')}</span><div>${t('Take the scenic route.','把时间留给沿途风景。')}<small>${t('Your pace. Your places. Your China.','你的节奏，你的目的地，你的中国之旅。')}</small></div></div><div class="art-orbit">${t('GO SOMEWHERE THAT FEELS LIKE YOU','让每一次出发，都更像自己')}</div></div></section>
  <div class="container"><section class="planner-panel" id="planner" aria-labelledby="planner-heading">${renderPreferences()}</section><div class="prototype-note">${icon('info')}${t('Interactive prototype · editable sample allowances, not live prices or confirmed bookings.','交互原型 · 费用均为可编辑示例额度，不是实时价格或已确认预订。')}</div></div>
  <section class="section destinations container" id="discover"><div class="section-top"><div><div class="eyebrow">${t('A place for every kind of traveler','不同喜好，都有自己的目的地')}</div><h2>${t('Where will curiosity take you?','这一次，你想去哪里？')}</h2><p>${t('Start with a feeling. Find a place that fits.','先找到心动的方向，再决定下一站。')}</p></div><button class="view-all" data-action="all-cities">${t('All 6 destinations','全部 6 个目的地')}${icon('arrow')}</button></div><div id="destination-filters">${renderFilters()}</div><div class="destinations-grid" id="destinations-grid">${renderDestinations()}</div></section>
  <section class="section workspace container" id="workspace"><div class="section-top"><div><div class="eyebrow">${t('Make room for the good stuff','让好风景，也有好安排')}</div><h2>${t('Your China, piece by piece.','把旅行，一步步安排好。')}</h2><p>${t('A flexible route. An honest budget. You’re in control.','路线可以改，预算算得清。选择权始终在你手中。')}</p></div><div class="workspace-head-actions"><button class="btn outline small" data-action="export">${icon('download')}${t('Export plan','导出计划')}</button><button class="btn outline small" data-action="print">${icon('print')}${t('Print','打印')}</button><button class="btn primary small" data-action="save">${icon('bookmark')}${t('Save trip','保存行程')}</button></div></div><div id="workspace-content">${renderWorkspace()}</div></section>
  <section class="section essentials container" id="essentials"><div class="section-top"><div><div class="eyebrow">${t('The small things, sorted','从容落地，从这些小事开始')}</div><h2>${t('Arrive a little more prepared.','出发前，多一份准备。')}</h2><p>${t('Practical next steps, with official sources where they matter.','实用准备事项，重要信息直接查阅官方来源。')}</p></div><button class="view-all" data-action="checklist">${t('My checklist','我的准备清单')}${icon('arrow')}</button></div><div class="essentials-grid">${[
    ['visa','passport',t('Entry & visas','入境与签证'),t('Find the official rules for your journey.','前往官方入口核对适用条件。')],
    ['payment','wallet',t('Pay with confidence','支付与备用方案'),t('A payment plan, and a backup too.','提前准备常用支付与备用方式。')],
    ['train','train',t('Getting around','交通不迷路'),t('Tickets, passports and travel-day basics.','购票、证件和出行当日准备。')],
    ['phrases','chat',t('A little Chinese','随身中文卡片'),t('Useful phrases to show, not just say.','把常用中文直接展示给对方。')]
  ].map(([id,i,h,p])=>`<button class="essential-card" data-action="guide" data-id="${id}"><span class="essential-icon">${icon(i)}</span>${icon('diagonal')}<h3>${h}</h3><p>${p}</p></button>`).join('')}</div><div class="essentials-bottom"><p>${t('Policies can change. Check official details again before departure.','政策可能变化，请在出发前再次核验官方信息。')}</p><div style="display:flex;gap:15px"><button class="text-link" data-action="guide" data-id="internet">${t('SIM & internet','通信与网络')}</button><button class="text-link" data-action="guide" data-id="emergency">${t('Emergency help','应急帮助')}${icon('arrow')}</button></div></div></section>
  <section class="container bottom-banner"><div><div class="eyebrow">${t('The best part is still out there','旅程的精彩，正在前方')}</div><h2>${t('Less guesswork.<br>More getting out there.','少一点不确定，<br>多一点想出发。')}</h2></div><a href="#planner" class="btn primary">${t('Find my China trip','规划我的中国之旅')}${icon('arrow')}</a></section></main>
  <footer class="site-footer"><div class="container footer-inner">${brand()}<div class="footer-center">${t('Thoughtfully planned. Wonderfully yours.','认真安排，只为你的旅程。')}</div><div class="footer-links"><button data-action="about">${t('About this prototype','关于原型')}</button><button data-action="privacy">${t('Privacy & data','隐私与数据')}</button><span>© 2026</span></div></div></footer>
  <nav class="mobile-nav" aria-label="${t('Mobile navigation','移动端导航')}"><a href="#discover">${icon('compass')}${t('Discover','探索')}</a><a href="#planner">${icon('sliders')}${t('Plan','规划')}</a><a href="#workspace">${icon('route')}${t('My route','行程')}</a><a href="#essentials">${icon('passport')}${t('Essentials','必备')}</a></nav>`;
}
function renderPreferences(){
  return `<div class="panel-heading"><h2 id="planner-heading">${t('First, a little about your trip.','先说说，你想要怎样的旅行。')}</h2><span class="step-label">${icon('compass')}${t('YOUR TRIP, YOUR RULES','按你的方式出发')}</span></div><div class="quick-fields">
  <div class="field"><label for="pref-days">${t('How long?','旅行天数')}</label><div class="input-shell">${icon('calendar')}<select id="pref-days" data-field="days">${[3,4,5,6,7,8,9,10,12,14,18,21].map(n=>option(n,t(`${n} days`,`${n} 天`),state.days)).join('')}</select></div></div>
  <div class="field"><label for="pref-people">${t('Who’s coming?','同行人数')}</label><div class="input-shell">${icon('users')}<select id="pref-people" data-field="people">${Array.from({length:8},(_,i)=>option(i+1,t(`${i+1} adult${i?'s':''}`,`${i+1} 位成人`),state.people)).join('')}</select></div></div>
  <div class="field"><label for="pref-budget">${t('Your comfort level','住宿与消费偏好')}</label><div class="input-shell">${icon('wallet')}<select id="pref-budget" data-field="budget">${option('value',t('Keep it simple','经济实用'),state.budget)}${option('comfort',t('A little comfort','舒适平衡'),state.budget)}${option('premium',t('Something special','品质体验'),state.budget)}</select></div></div>
  <div class="field"><label for="pref-mobility">${t('Moving between cities','城市之间怎么走')}</label><div class="input-shell">${icon('train')}<select id="pref-mobility" data-field="mobility">${option('easy',t('One home base','只住一座城市'),state.mobility)}${option('balanced',t('A regional pairing','相邻区域组合'),state.mobility)}${option('open',t('Open to a longer trip','可接受较长移动'),state.mobility)}</select></div></div>
  <button class="btn primary" data-action="generate" id="generate-btn">${icon('spark')}${ui.needsRefresh?t('Update my trip','更新我的方案'):t('Find my China','发现我的中国之旅')}${icon('arrow')}</button></div>
  <div class="preferences-bottom"><span class="interests-label">${t('I’m here for','我喜欢')}</span>${Object.entries(INTERESTS).map(([id,v])=>`<button class="interest-chip ${state.interests.includes(id)?'selected':''}" data-action="interest" data-id="${id}" aria-pressed="${state.interests.includes(id)}">${icon(v.icon)}${txt(v.label)}</button>`).join('')}<button class="more-preferences" data-action="advanced" aria-expanded="${ui.advanced}" aria-controls="advanced-fields">${icon('sliders')}${t('More preferences','更多偏好')}</button></div>
  <div class="advanced-grid" id="advanced-fields" ${ui.advanced?'':'hidden'}><div class="field"><label for="pref-rooms">${t('Rooms (not people)','房间数（不等于人数）')}</label><div class="input-shell">${icon('bed')}<select id="pref-rooms" data-field="rooms">${Array.from({length:8},(_,i)=>option(i+1,t(`${i+1} room${i?'s':''}`,`${i+1} 间房`),state.rooms)).join('')}</select></div></div><div class="field"><label for="pref-environment">${t('Your surroundings','环境偏好')}</label><div class="input-shell">${icon('leaf')}<select id="pref-environment" data-field="environment">${option('all',t('A little of everything','城市与自然都喜欢'),state.environment)}${option('urban',t('Cities & neighborhoods','都市与街区'),state.environment)}${option('nature',t('Lakes, rivers & mountains','湖泊、河流与山地'),state.environment)}</select></div></div><div class="field"><label for="pref-month">${t('Travel month','旅行月份')}</label><div class="input-shell">${icon('sun')}<select id="pref-month" data-field="month">${option('unsure',t('Not sure yet','还没确定'),state.month)}${Array.from({length:12},(_,i)=>option(String(i+1),t(new Date(2026,i,1).toLocaleString('en-US',{month:'long'}),`${i+1} 月`),state.month)).join('')}</select></div></div><div class="field"><label for="pref-arrival">${t('Arrival date (optional)','抵达日期（选填）')}</label><div class="input-shell"><input id="pref-arrival" type="date" data-field="arrival" value="${esc(state.arrival)}"></div></div><p class="hint">${t('Adult-only prototype · choose up to 4 interests. Month and date are recorded, not weather or seasonal-price forecasts. No accessibility or entry eligibility checks are performed.','成人旅行原型 · 最多选择 4 项兴趣。月份与日期仅记录，不预测天气或季节价格。尚未核验无障碍条件及入境资格。')}</p></div>`;
}
function renderFilters(){return `<div class="filter-row" aria-label="${t('Filter destinations','筛选目的地')}">${[['all',t('A little of everything','全部灵感')],['food',t('Follow the food','美食之旅')],['nature',t('Into the green','自然山水')],['culture',t('Stories & culture','人文历史')],['slow',t('Slow things down','放慢脚步')]].map(([id,label])=>`<button class="filter-chip ${ui.filter===id?'selected':''}" data-action="filter" data-id="${id}" aria-pressed="${ui.filter===id}">${label}</button>`).join('')}</div>`;}
function renderDestinations(){
  let list=Object.keys(CITY).filter(cid=>ui.filter==='all'||CITY[cid].tags.includes(ui.filter));
  if(ui.filter==='all')list.sort((a,b)=>state.interests.filter(x=>CITY[b].tags.includes(x)).length-state.interests.filter(x=>CITY[a].tags.includes(x)).length);
  if(!ui.showAll)list=list.slice(0,3);
  if(!list.length)return `<div class="empty-state"><h3>${t('Let’s try another direction.','换个方向，再看看。')}</h3><button class="btn outline" data-action="filter" data-id="all">${t('Show all places','查看全部目的地')}</button></div>`;
  return list.map(cid=>{const c=CITY[cid];return `<article class="destination-card"><div class="destination-image">${landscape(cid)}<span class="corner-tag">${txt(c.theme)}</span><button class="icon-btn card-open" data-action="city" data-id="${cid}" aria-label="${esc(t(`Explore ${c.name[0]}`,`了解${c.name[1]}`))}">${icon('diagonal')}</button></div><div class="destination-body"><div class="city-name-row"><h3>${cityName(cid)}</h3><span>${state.lang==='en'?c.zh:c.name[0]}</span></div><p class="city-subtitle">${txt(c.subtitle)}</p><div class="city-tags">${c.tags.slice(0,3).map(id=>`<span class="tag">${interestLabel(id)}</span>`).join('')}</div><div class="city-bottom"><span class="small">${icon(c.environment==='nature'?'leaf':'city')}${c.environment==='nature'?t('Nature-inspired','山水与自然'):t('Urban discoveries','都市与街区')}</span><button class="text-link" data-action="city" data-id="${cid}">${t('Take a closer look','看看这个地方')}${icon('arrow')}</button></div></div></article>`;}).join('');
}
function renderWorkspace(){return `<div class="workspace-grid"><div class="route-workbench"><div class="tabs" role="tablist" aria-label="${t('Trip details','行程详情')}">${[['route','route',t('Your route','旅行路线')],['days','list',t('Day by day','每日安排')],['budget','wallet',t('Budget details','预算明细')]].map(([id,i,label])=>`<button class="tab ${ui.tab===id?'active':''}" role="tab" id="tab-${id}" aria-controls="plan-panel" aria-selected="${ui.tab===id}" tabindex="${ui.tab===id?0:-1}" data-action="tab" data-id="${id}">${icon(i)}${label}</button>`).join('')}</div><div class="tab-body" id="plan-panel" role="tabpanel" aria-labelledby="tab-${ui.tab}">${renderTab()}</div></div><aside class="budget-sidebar" aria-label="${t('Transparent budget summary','透明预算概览')}">${renderBudgetCard()}<p class="budget-notice">${icon('shield')}${t('Nothing is booked. Every amount has a visible assumption. Unknown costs never become zero.','尚未预订任何项目。每笔金额都有明确假设，未知费用不会按零元计算。')}</p></aside></div>`;}
function renderTab(){return ui.tab==='route'?renderRoute():ui.tab==='days'?renderDays():renderBudgetDetails();}
function routeReasons(){
  const tags=new Set(state.route.flatMap(c=>CITY[c].tags));const matched=state.interests.filter(x=>tags.has(x));
  return [state.manualRoute?t('You chose this destination as your home base.','你主动选择了这个目的地作为旅行据点。'):matched.length?t(`Makes room for ${matched.map(interestLabel).join(' + ')}.`,`照顾到你的${matched.map(interestLabel).join('、')}偏好。`):t('A starting point to customize to your interests.','先有一个起点，再按你的兴趣调整。'),state.route.length===1?t('One home base, without planned intercity moves.','以一座城市为据点，不安排跨城移动。'):t('A two-stop template, with a separate block for the move.','两站组合模板，单独为跨城移动留出时段。'),t('Arrival and departure are kept flexible, not packed with sights.','抵达与离开当天保留弹性，不堆叠景点。')];
}
function renderRoute(){
  const route=state.route;const title=route.length===1?t('One place. A little more depth.','在一个地方，走得更深入。'):t('Two chapters, one thoughtful trip.','两个目的地，一段从容的旅程。');
  return `<div class="fade-in"><div class="route-topline"><div><div class="known-stamp">${icon('compass')}${t('EDITABLE ROUTE TEMPLATE','可编辑路线模板')}</div><h3>${esc(names())}</h3><p>${title}</p></div><span class="tag">${t(`${state.days} days`,`${state.days} 天`)}</span></div>${ui.needsRefresh?`<div class="tradeoff">${icon('info')}${t('Preferences changed. Use “Find my China” to refresh the destination match. The current route stays in place until then.','偏好已变化。点击“更新我的方案”重新匹配；当前路线不会被自动替换。')}</div>`:''}<div class="route-map"><div class="route-diagram">${route.map((cid,i)=>`${i?`<div class="route-line">${icon('train')}<span>${t('Transfer to verify','交通待核实')}</span></div>`:''}<div class="route-stop"><span class="route-stop-dot"></span><strong>${cityName(cid)}</strong><small>${t(`${state.allocations[i]} days / ${state.allocations[i]-(i===route.length-1?1:0)} nights`,`${state.allocations[i]} 天 / ${state.allocations[i]-(i===route.length-1?1:0)} 晚`)}</small></div>`).join('')}</div><p class="diagram-note">${t('ROUTE DIAGRAM · NOT A MAP OR TIMETABLE','路线示意 · 非地图或时刻表')}</p></div><div class="route-facts"><div class="route-fact">${t('Who’s traveling','出行人员')}<strong>${t(`${state.people} adults`,`${state.people} 位成人`)}</strong></div><div class="route-fact">${t('Where you’ll stay','住宿安排')}<strong>${t(`${state.rooms} room${state.rooms>1?'s':''} · ${state.days-1} nights`,`${state.rooms} 间房 · ${state.days-1} 晚`)}</strong></div><div class="route-fact">${t('Your dates','出行日期')}<strong>${esc(dateText())}</strong></div></div><div class="why-card"><h4>${icon('spark')}${t('Why this plan makes room for you','为什么这样安排')}</h4>${routeReasons().map(r=>`<p class="reason">${icon('check')}${r}</p>`).join('')}</div><div class="tradeoff">${icon('info')}<div><strong>${t('The trade-off: ','需要接受的取舍：')}</strong>${route.length===1?txt(CITY[route[0]].trade):t('A second city means another check-in and an unpriced transfer. Actual connections, opening days and seasonal suitability still need checking.','增加一座城市，也增加一次入住与一段尚未定价的交通。实际衔接、开放日期及季节适配仍需核实。')}</div></div><div class="route-actions"><button class="btn primary" data-action="tab" data-id="days">${t('Unfold my itinerary','展开每日行程')}${icon('arrow')}</button><div style="display:flex;gap:14px"><button class="text-link" data-action="route-edit">${t('Adjust days','分配天数')}</button><button class="text-link" data-action="alternatives">${t('Other routes','换个方案')}</button></div></div></div>`;
}
function renderBudgetCard(){
  const b=getBudget(),avg=(b.low+b.high)/2;const active=Object.values(b.categories).filter(c=>c.rows.length);const note=b.pending?t(`${b.pending} unpriced item${b.pending>1?'s':''} not included.`,`还有 ${b.pending} 项待估算费用，未计入。`):t('This is an in-scope subtotal, not an all-inclusive trip price.','这是已纳入项目的小计，不是全包旅行价格。');
  return `<div class="budget-card"><div class="budget-heading"><div class="eyebrow">${icon('wallet')}${t('An honest little budget','一份算得清的预算')}</div><span class="currency-tag">CNY</span></div><p class="budget-context">${t('Planned subtotal · whole group','已纳入项目小计 · 全组')}</p><div class="budget-value ${(money(b.low)+money(b.high)).length>18?'compact':''}">${b.known?`<sup>¥</sup>${money(b.low)}${b.low!==b.high?`<span style="opacity:.6;font-size:.75em"> – </span>${money(b.high)}`:''}`:t('Not priced yet','尚未估算')}</div><p class="budget-subtitle">${t(`${state.people} adults · ${state.days} days · ${state.rooms} room${state.rooms>1?'s':''}`,`${state.people} 位成人 · ${state.days} 天 · ${state.rooms} 间房`)}</p><div class="budget-visual" aria-hidden="true">${active.filter(c=>c.low+c.high>0).map(c=>`<span style="width:${avg?((c.low+c.high)/2/avg)*100:0}%;background:${c.color}"></span>`).join('')}</div>${active.map(c=>`<div class="budget-category"><span class="cat-name"><i class="cat-dot" style="background:${c.color}"></i>${txt(c.label)}</span><span class="cat-price ${c.rows.every(r=>r.mode==='pending')?'pending-price':''}">${c.rows.every(r=>r.mode==='pending')?t('Not priced yet','待估算'):amount(c.low,c.high)+(c.pending?' + ?':'')}</span></div>`).join('')}<div class="budget-separator"></div><div class="pending-notice">${icon('info')}<span>${note}<br>${t('International travel, visa, insurance, connectivity & shopping are excluded unless you add them.','国际交通、签证、保险、通信和购物，需自行添加后才纳入。')}</span></div><button class="btn lime full" data-action="tab" data-id="budget">${t('See every assumption','查看每一项怎么算')}${icon('arrow')}</button><p class="budget-footer">${t(`${b.estimated} planning estimates · ${b.confirmed} confirmed by you`,`${b.estimated} 项规划估算 · ${b.confirmed} 项由你确认`)}<br>${t('Illustrative presets. Not live market quotes.','预设仅为演示假设，不是实时市场报价。')}</p><div class="target-line"><span>${t('Your budget target','你的预算目标')} <strong>${state.target?amount(state.target):t('Not set','未设置')}</strong></span><button data-action="target">${t('Edit','修改')}${icon('edit')}</button></div>${state.target?`<p class="hint" style="margin-top:7px;color:#d6dfc5;font-size:8px">${b.pending?t('Missing costs remain; budget fit cannot be confirmed.','仍有未估算费用，暂不能确认是否符合预算。'):b.low>state.target?t('The known lower bound already exceeds your target.','已纳入费用下限已超过目标预算。'):b.high>state.target?t('The planning range crosses your target, before exclusions.','当前区间可能超过预算，且尚有未包含项目。'):t('The known upper bound is below your target, before excluded costs.','已纳入费用上限低于目标；仍需考虑未包含项目。')}</p>`:''}</div>`;
}
function renderBudgetDetails(){
  const b=getBudget();
  return `<div class="fade-in"><div class="route-topline"><div><h3>${t('Every yuan, explained.','每一笔钱，都有依据。')}</h3><p>${t('Change the assumptions. Watch the arithmetic follow.','调整计算条件，费用明细随之更新。')}</p></div><button class="text-link" data-action="add-expense">${icon('plus')}${t('Add item','加一项')}</button></div><div class="budget-scope"><strong>${profileSummary()} · CNY</strong><p>${t('Scope: stays, meals, local transport, main-experience allowances and any priced route transfers.','范围：住宿、餐饮、市内交通、主要体验额度，以及已定价的路线交通。')}</p><p>${esc(dateText())} · ${t('All preset rates are fictional, editable planning assumptions. No exchange-rate conversion.','所有预设单价均为虚构、可编辑的规划假设。不进行汇率换算。')}</p></div><div class="status-key">${statusBadge('estimated')}${statusBadge('confirmed')}${statusBadge('pending')}</div>${b.rows.map(r=>renderExpenseRow(r)).join('')}<div class="budget-total-line"><div><h4>${t('Planned subtotal','已纳入项目小计')}</h4><span class="hint">${t('Whole group · priced items only','全组 · 仅计入已有金额的项目')}</span></div><strong>${b.known?amount(b.low,b.high):t('Not priced yet','尚未估算')}</strong></div><div class="expense-footnotes"><strong>${b.pending?t(`Not included in subtotal: ${b.pending} unpriced items`,`小计尚未包括：${b.pending} 项待估算费用`):t('Check what is outside this plan','请检查计划以外的费用')}</strong>${b.pending?esc(b.rows.filter(r=>r.mode==='pending').map(r=>r.label).join(' · '))+'<br>':''}${t('International flights / cross-border arrival & departure, visa fees, travel insurance, SIM/eSIM, shopping and any unlisted services are excluded unless added as custom expenses. No automatic contingency or currency conversion. Hotel taxes and service charges must be confirmed with the provider.','国际航班／跨境进出交通、签证、保险、SIM/eSIM、购物及所有未列出的服务，除非以自定义费用添加，否则不计入。不自动添加应急金，不进行汇率转换。酒店税费及服务费需向供应商确认。')}</div></div>`;
}
function renderExpenseRow(r){
  const calc=r.mode==='estimated'?`${amount(r.min,r.max)} / ${r.unit} × ${r.qty} = ${amount(r.totalMin,r.totalMax)}`:r.mode==='confirmed'?t('Your confirmed total for this item; not multiplied again.','这项费用由你确认的总额，不再次乘以数量。'):t('Unknown amount ≠ ¥0. Excluded from subtotal.','金额未知 ≠ ¥0。暂不计入小计。');
  return `<div class="expense-row"><div><h4>${esc(r.label)}</h4><p>${esc(r.formula)}</p><p>${esc(calc)}</p><p>${esc(r.note||r.basis)}</p>${r.stale?`<p style="color:#977a40">${t('Previous recorded total: ','原记录总额：')}${amount(r.previousTotal)}</p>`:''}</div><div class="expense-right"><span class="expense-amount">${r.mode==='pending'?t('Not priced yet','待估算'):amount(r.totalMin,r.totalMax)}</span>${statusBadge(r.mode,r.stale)}<br><button class="text-link" data-action="expense" data-id="${esc(r.id)}">${icon('edit')}${t('Edit assumption','修改条件')}</button>${r.custom?`<br><button class="text-link" data-action="delete-expense" data-id="${r.id}">${t('Remove','移除')}</button>`:''}</div></div>`;
}
function renderDays(){const days=getPlanDays();ui.day=Math.min(ui.day,days.length-1);return `<div class="fade-in"><div class="day-nav" role="group" aria-label="${t('Select a day','选择天数')}">${days.map((d,i)=>`<button class="day-chip ${ui.day===i?'selected':''}" data-action="day" data-day="${i}" aria-pressed="${ui.day===i}">${t(`Day ${i+1}`,`第 ${i+1} 天`)}</button>`).join('')}</div>${renderDay(days[ui.day])}<div class="day-controls"><button class="text-link" data-action="day" data-day="${ui.day-1}" ${ui.day===0?'disabled':''}>${icon('left')}${t('Previous day','前一天')}</button><button class="text-link" data-action="reset-day">${icon('reset')}${t('Restore this day','恢复当天建议')}</button><button class="text-link" data-action="day" data-day="${ui.day+1}" ${ui.day===days.length-1?'disabled':''}>${t('Next day','后一天')}${icon('arrow')}</button></div></div>`;}
function renderDay(day){
  let label=t(`Day ${day.index+1} · ${cityName(day.city)}`,`第 ${day.index+1} 天 · ${cityName(day.city)}`);
  let date='';if(state.arrival){const d=new Date(`${state.arrival}T12:00:00`);d.setDate(d.getDate()+day.index);date=d.toLocaleDateString(state.lang==='zh'?'zh-CN':'en-US',{month:'short',day:'numeric',weekday:'short'});}
  return `<section class="print-day"><div class="day-heading"><div><h3>${label}</h3><small>${esc(date||t('Flexible schedule · no fixed appointment times','弹性日程 · 未设置实际预约时刻'))}</small></div>${icon(day.arrival||day.departure?'suitcase':'sun')}</div>${day.slots.map(s=>`<div class="day-item"><div class="slot-icon">${icon(s.icon)}</div><article><div class="slot-label">${txt(s.period)}</div><h4>${txt(s.name)}</h4><p>${txt(s.desc)}</p>${s.experience?`<p class="hint">${t('Included in the main-experience allowance, not a ticket quote.','计入主要体验预算额度，不代表实际门票价格。')}</p>`:''}${s.copy?`<button class="slot-link" data-action="copy" data-text="${esc(s.copy)}">${icon('copy')}${t('Copy Chinese name','复制中文名称')}</button>`:''}${s.source?`<a class="slot-link" href="${SOURCES.train.url}" target="_blank" rel="noopener noreferrer">${icon('diagonal')}${t('Check official railway information','查看铁路官方信息')}</a>`:''}${!s.fixed?`<button class="slot-remove" data-action="remove-slot" data-id="${s.id}" aria-label="${esc(t(`Remove ${txt(s.name)}`,`移除${txt(s.name)}`))}">${icon('close')}</button>`:''}</article></div>`).join('')}<div class="arrival-note">${icon('info')}<span>${t('These are editable starting points, not verified attraction schedules. Before travel, confirm opening days, booking rules, route feasibility and any accessibility needs.','以上是可编辑的行程起点，非已核实的景点日程。出行前请核实开放日、预约规则、路线可行性及无障碍需求。')}</span></div></section>`;
}

/* Dialogs and actions */
const modal=document.getElementById('modal');
function openModal(title,body,type='generic'){
  ui.modalType=type;
  modal.innerHTML=`<div class="modal-head"><h2 id="modal-title">${title}</h2><button class="icon-btn" data-action="close" aria-label="${t('Close dialog','关闭弹窗')}">${icon('close')}</button></div><div class="modal-body">${body}</div>`;
  if(!modal.open)modal.showModal();
  modal.scrollTop=0;
}
function closeModal(){if(modal.open)modal.close();ui.modalType=null;ui.editRow=null;}
function toast(message){const el=document.getElementById('toast');clearTimeout(ui.toastTimer);el.textContent=message;el.classList.add('show');ui.toastTimer=setTimeout(()=>el.classList.remove('show'),4000);}
function refreshWorkspace(){const el=document.getElementById('workspace-content');if(el)el.innerHTML=renderWorkspace();}
function refreshDestinations(){document.getElementById('destination-filters').innerHTML=renderFilters();document.getElementById('destinations-grid').innerHTML=renderDestinations();}
function refreshPreferences(){document.getElementById('planner').innerHTML=renderPreferences();}
function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});}
function savePlan(){
  const obj={savedAt:new Date().toISOString(),state:structuredClone(state)};
  try{localStorage.setItem(SAVE_KEY,JSON.stringify(obj));saved=obj;document.querySelectorAll('.saved-dot').forEach(el=>el.classList.add('on'));toast(t('Saved on this browser. No account or cloud backup.','已保存在当前浏览器中，没有账号或云端备份。'));}
  catch{toast(t('This browser could not save the plan. Export a text copy instead.','当前浏览器无法保存，请导出一份文本副本。'));}
}
function openSaved(){
  saved=readSaved();
  if(!saved){openModal(t('A trip worth keeping.','把喜欢的旅行留住。'),`<p>${t('There is no saved trip in this browser yet. Save your current plan to come back to it on this device.','当前浏览器还没有已保存的行程。可以保存正在编辑的计划，下次在这个设备上继续。')}</p><div class="info-block">${t('Local storage is not a cloud backup. Clearing browser data removes the saved plan.','本地存储不是云备份，清理浏览器数据会删除已保存的行程。')}</div><div class="modal-actions"><button class="btn primary" data-action="save-close">${icon('bookmark')}${t('Save current trip','保存当前行程')}</button></div>`,'saved');return;}
  const s=saved.state;const when=new Date(saved.savedAt).toLocaleString(state.lang==='zh'?'zh-CN':'en-US',{year:'numeric',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
  openModal(t('Your saved chapter.','你保存的旅程。'),`<div class="modal-scene">${landscape(s.route[0])}</div><h3 class="serif" style="font-size:27px">${s.route.map(cityName).join(' → ')}</h3><p style="margin:9px 0">${t(`${s.days} days · ${s.people} adults · ${s.rooms} room${s.rooms>1?'s':''}`,`${s.days} 天 · ${s.people} 位成人 · ${s.rooms} 间房`)}<br><span class="hint">${t('Saved: ','保存于：')}${esc(when)}</span></p><div class="info-block">${t('Restoring replaces your current unsaved edits with this saved version. This trip is only stored in this browser.','恢复后，当前尚未保存的修改将被此版本替换。这份行程只保存在当前浏览器中。')}</div><div class="modal-actions"><button class="btn outline" data-action="export">${icon('download')}${t('Export current edits','导出当前编辑稿')}</button><button class="btn primary" data-action="restore">${t('Restore saved trip','恢复已保存行程')}${icon('arrow')}</button></div>`,'saved');
}
function openAlternatives(){const plans=getCandidates();openModal(t('Another way to see China.','换一种方式，看见中国。'),`<p>${t('These rule-based templates respect your current environment and city-transfer preferences. They are not live transport itineraries.','以下规则模板遵循当前环境及跨城偏好，不代表已核实的实时交通方案。')}</p>${plans.map(p=>`<button class="route-option" data-action="select-route" data-route="${p.route.join(',')}"><span class="arrow-right">${icon('arrow')}</span><h3>${names(p.route)}</h3><p>${p.route.length===1?t('One accommodation base. No planned intercity transfer.','一个住宿据点，不安排跨城移动。'):t('Two bases. Transfer fare and timing need checking.','两个住宿据点，交通费用与时长待核实。')}</p><span class="tag">${p.matched.map(interestLabel).join(' · ')||t('A fresh starting point','一个新的起点')}</span></button>`).join('')}${plans.length?'':`<div class="empty-state">${t('No template matches these constraints. Try changing your preferences.','没有满足当前约束的模板，请调整偏好。')}</div>`}`,'alternatives');}
function openRouteEdit(){openModal(t('A little more time here?','想在哪一站多留一天？'),`<p>${t(`Your ${state.days}-day trip stays the same length. Move a day between stops; room-nights and costs update separately. Each stop needs at least two assigned days in this prototype.`,`行程总计 ${state.days} 天不变。可以在两站之间调配天数，住宿晚数和费用会单独更新。本原型每站至少分配 2 天。`)}</p>${state.route.map((cid,i)=>`<div class="route-edit-stop"><div><strong>${cityName(cid)}</strong><div class="hint">${t(`${state.allocations[i]-(i===state.route.length-1?1:0)} accommodation nights`,`${state.allocations[i]-(i===state.route.length-1?1:0)} 个住宿晚数`)}</div></div><div class="counter"><button data-action="shift-day" data-index="${i}" data-delta="-1" ${state.route.length===1||state.allocations[i]<=2?'disabled':''} aria-label="${t('Move a day away','减少一天')}">${icon('minus')}</button><span>${t(`${state.allocations[i]} days`,`${state.allocations[i]} 天`)}</span><button data-action="shift-day" data-index="${i}" data-delta="1" ${state.route.length===1||state.allocations[1-i]<=2?'disabled':''} aria-label="${t('Add a day','增加一天')}">${icon('plus')}</button></div></div>`).join('')}<p class="edit-note">${t('The final departure day has no overnight stay. Dates, party or route changes make manually confirmed totals require rechecking.','最后一个离开日不产生住宿晚数。日期、同行人数或路线变化后，手动确认的金额需要重新核对。')}</p><div class="info-block">${t('Changes apply immediately to the draft. Use “Save trip” separately to keep them for your next visit.','修改会立即应用到草稿，需要另行点击“保存行程”才会留存到下次访问。')}</div><div class="modal-actions"><button class="btn primary" data-action="close">${t('Done','完成')}${icon('check')}</button></div>`,'route-edit');}
function openCity(cid){const c=CITY[cid];openModal(cityName(cid),`<div class="modal-scene">${landscape(cid)}</div><p>${txt(c.subtitle)}</p><div class="modal-tags">${c.tags.map(i=>`<span class="tag">${interestLabel(i)}</span>`).join('')}</div><div class="info-block"><strong>${t('A few starting points','几个体验起点')}</strong>${c.activities.map(a=>esc(txt(a))).join('<br>')}</div><div class="info-block"><strong>${t('Know the trade-off','也看看需要接受的取舍')}</strong>${txt(c.trade)}</div><p class="source-note">${t('Editorial inspiration and original illustration, not a verified attraction schedule. Do not treat the sample accommodation rate as a real quote.','内容为编辑灵感与原创插画，不是经核实的景点日程；示例住宿单价不可作为真实报价。')}</p><a class="source-link" href="${c.source}" target="_blank" rel="noopener noreferrer">${t('Visitor information · external website','旅游信息 · 外部网站')}${icon('diagonal')}</a><div class="modal-actions"><button class="btn primary" data-action="choose-city" data-id="${cid}">${t('Build my trip around here','以这里为据点规划')}${icon('arrow')}</button></div>`,'city');}
function openExpense(id){
  const row=getExpenseRows().find(r=>r.id===id);if(!row)return;
  ui.editRow=row;
  const existing=state.expenses[id];const mode=row.mode;
  const min=row.min??'',max=row.max??'';
  const confirmed=existing?.mode==='confirmed'?existing.total:'';
  openModal(t('Let’s make that number clear.','把这笔费用说明白。'),`<h3 style="font-size:16px;margin-bottom:6px">${esc(row.label)}</h3><p>${esc(row.formula)} · ${t('Quantity: ','计算数量：')}${row.qty}</p><form id="expense-form"><div class="modal-form-grid"><div class="field full"><label for="expense-mode">${t('How certain is this cost?','这笔费用确定了吗？')}</label><select class="standard-input" id="expense-mode">${option('estimated',t('Planning estimate · per-unit range','规划估算 · 单价区间'),mode)}${option('confirmed',t('Confirmed by me · full line total','我已确认 · 整项总额'),mode)}${option('pending',t('Not priced yet · exclude from subtotal','待估算 · 暂不计入小计'),mode)}</select></div><div class="field expense-range" ${mode==='estimated'?'':'hidden'}><label for="expense-min">${t('Lower rate · CNY / ','单价下限 · 元 / ')}${esc(row.unit)}</label><input class="standard-input" id="expense-min" type="number" min="0" max="1000000" step="0.01" inputmode="decimal" value="${min}" placeholder="${t('e.g. 280','例如 280')}"></div><div class="field expense-range" ${mode==='estimated'?'':'hidden'}><label for="expense-max">${t('Upper rate · CNY / ','单价上限 · 元 / ')}${esc(row.unit)}</label><input class="standard-input" id="expense-max" type="number" min="0" max="1000000" step="0.01" inputmode="decimal" value="${max}" placeholder="${t('e.g. 420','例如 420')}"></div><div class="field full expense-confirmed" ${mode==='confirmed'?'':'hidden'}><label for="expense-total">${t('Confirmed total for this whole line · CNY','这整项费用的已确认总额 · 元')}</label><input class="standard-input" id="expense-total" type="number" min="0" max="10000000" step="0.01" inputmode="decimal" value="${confirmed}" placeholder="${t('Enter the full amount, not a unit rate','请输入整项总额，不是单价')}"></div><div class="field full"><label for="expense-note">${t('Your source or assumption (optional)','来源或估算说明（选填）')}</label><input class="standard-input" id="expense-note" type="text" maxlength="200" placeholder="${t('e.g. My hotel confirmation, taxes included','例如：酒店确认单金额，含税') }" value="${esc(row.note||'')}"></div></div><div class="calc-preview" id="calc-preview"></div><label class="check-item expense-confirmed" ${mode==='confirmed'?'':'hidden'}><input type="checkbox" id="expense-attest"><span>${t('I checked this full amount myself. It is not verified by this website.','我已自行核实此整项总额，网站并未替我核验。')}</span></label><div class="info-block">${t('Estimated rates multiply by the visible quantity. Confirmed costs are a fixed line total and are never multiplied again. Changing trip assumptions makes a confirmed total pending until you recheck it.','估算单价乘以明确数量；已确认金额是整项总额，不再重复相乘。行程条件变化后，已确认金额会变为待核实，直到你重新确认。')}</div><div class="form-error" id="expense-error" role="alert"></div><div class="modal-actions"><button type="button" class="btn outline" data-action="close">${t('Cancel','取消')}</button><button type="submit" class="btn primary">${t('Update this cost','更新费用')}${icon('check')}</button></div></form>`,'expense');
  ui.editRow=row;updateExpensePreview();
}
function updateExpensePreview(){
  const row=ui.editRow;if(!row)return;
  const mode=document.getElementById('expense-mode')?.value;if(!mode)return;
  document.querySelectorAll('.expense-range').forEach(el=>el.hidden=mode!=='estimated');document.querySelectorAll('.expense-confirmed').forEach(el=>el.hidden=mode!=='confirmed');
  const preview=document.getElementById('calc-preview');
  if(mode==='pending'){preview.innerHTML=t('This amount will stay visible as unpriced and will not be included in the subtotal. It is not treated as zero.','这笔费用将继续显示为“待估算”，暂不计入小计，不会当作零元。');return;}
  if(mode==='confirmed'){const raw=document.getElementById('expense-total').value;const val=Number(raw);preview.innerHTML=raw!==''&&Number.isFinite(val)&&val>=0?`${t('Whole-line amount, counted once:','整项总额，仅计算一次：')}<strong>${amount(val)}</strong>`:t('Enter the full confirmed amount.','请填写已确认的整项总额。');return;}
  const a=document.getElementById('expense-min').value,b=document.getElementById('expense-max').value;const lo=Number(a),hi=Number(b);
  preview.innerHTML=a!==''&&b!==''&&Number.isFinite(lo)&&Number.isFinite(hi)&&lo>=0&&hi>=lo?`${amount(lo,hi)} × ${row.qty} ${esc(row.unit)}<strong>${amount(lo*row.qty,hi*row.qty)}</strong>`:t('Enter a nonnegative range. The upper rate must not be lower than the lower rate.','请输入非负的单价区间，上限不能低于下限。');
}
function submitExpense(event){
  event.preventDefault();const row=ui.editRow;if(!row)return;const mode=document.getElementById('expense-mode').value;const note=document.getElementById('expense-note').value.trim().slice(0,200);let data={mode,note};const err=document.getElementById('expense-error');
  if(mode==='estimated'){
    const a=document.getElementById('expense-min').value,b=document.getElementById('expense-max').value;const min=Number(a),max=Number(b);
    if(a===''||b===''||!Number.isFinite(min)||!Number.isFinite(max)||min<0||max<min||max>1000000){err.textContent=t('Please enter valid rates: 0 ≤ lower ≤ upper ≤ 1,000,000.','请输入有效单价：0 ≤ 下限 ≤ 上限 ≤ 1,000,000。');return;}
    data={...data,min,max};
  }else if(mode==='confirmed'){
    const raw=document.getElementById('expense-total').value,total=Number(raw);
    if(raw===''||!Number.isFinite(total)||total<0||total>10000000){err.textContent=t('Enter a valid full amount between 0 and 10,000,000 CNY.','请输入 0 至 10,000,000 元之间的有效整项总额。');return;}
    if(!document.getElementById('expense-attest').checked){err.textContent=t('Please confirm that you checked this amount yourself.','请勾选你已自行核实此金额。');return;}
    data={...data,total,fp:row.fp};
  }
  state.expenses[row.id]=data;closeModal();refreshWorkspace();toast(t('Budget updated. Nothing was booked or paid.','预算已更新，没有预订或支付任何项目。'));
}
function openAddExpense(){openModal(t('Make room for one more item.','再加一项费用。'),`<p>${t('Add a cost that is outside the preset plan, such as travel insurance or a SIM. It starts as unpriced so it cannot silently become zero.','可以添加保险、电话卡等预设以外的费用。新项目默认待估算，不会悄悄按零元计算。')}</p><form id="add-expense-form"><div class="field"><label for="new-expense-label">${t('Expense name','费用名称')}</label><input id="new-expense-label" class="standard-input" maxlength="70" required placeholder="${t('e.g. SIM cards for the trip','例如：本次旅行电话卡')}"></div><div class="field" style="margin-top:15px"><label for="new-expense-unit">${t('How is it counted?','按什么单位计算？')}</label><select class="standard-input" id="new-expense-unit">${option('group',t('One amount for the whole group','全组一笔费用'),'group')}${option('person',t('One rate for each adult','每位成人的单价'),'group')}</select></div><div class="modal-actions"><button class="btn outline" type="button" data-action="close">${t('Cancel','取消')}</button><button type="submit" class="btn primary">${t('Add & set amount','添加并填写金额')}${icon('arrow')}</button></div></form>`,'add-expense');}
function openTarget(){openModal(t('What feels comfortable?','你希望控制在多少预算？'),`<p>${t('Set one CNY target for the whole group. This compares against the current in-scope subtotal; missing and excluded costs mean it cannot guarantee the full trip is affordable.','设置全组人民币目标预算，仅与当前纳入项目小计比较。存在待估算或未包含费用时，不能保证整趟旅行符合预算。')}</p><form id="target-form"><div class="field"><label for="target-input">${t('Whole-group target · CNY (0 = not set)','全组目标预算 · 元（0 表示未设置）')}</label><input id="target-input" class="standard-input" type="number" min="0" max="10000000" step="1" required value="${state.target}"></div><div class="modal-actions"><button class="btn primary" type="submit">${t('Set my target','设置预算目标')}${icon('check')}</button></div></form>`,'target');}
const CHECKS=[
  ['entry',pair('Check passport, visa / entry rules for my actual itinerary','核对护照及实际行程适用的签证／入境规则')],
  ['transport',pair('Confirm arrival, onward travel and any intercity tickets','确认抵达、离开及城际交通')],
  ['stay',pair('Confirm accommodation, check-in documents and registration','确认住宿、入住证件及登记事项')],
  ['payment',pair('Prepare a working payment method and a backup','准备可用的支付方式及备用方案')],
  ['internet',pair('Check device compatibility and a connectivity plan','核对设备兼容性及通信方案')],
  ['addresses',pair('Save important Chinese names and addresses offline','离线保存重要中文名称及地址')],
  ['insurance',pair('Review insurance and save emergency / embassy contacts','检查保险并保存应急／使领馆联系方式')]
];
function openChecklist(){const n=CHECKS.filter(([id])=>state.checks[id]).length;openModal(t('A few things before you go.','出发前，把小事准备好。'),`<p>${t('A personal checklist, not an entry approval or safety guarantee. Mark only the things you have actually checked.','这是一份个人清单，不代表入境批准或安全保证。请只勾选已经实际核实的事项。')}</p><div id="check-count" class="hint">${t(`${n} of ${CHECKS.length} tasks complete`,`${CHECKS.length} 项准备中已完成 ${n} 项`)}</div><div class="check-progress"><span id="check-progress-bar" style="width:${n/CHECKS.length*100}%"></span></div>${CHECKS.map(([id,label])=>`<label class="check-item ${state.checks[id]?'checked':''}"><input type="checkbox" data-check="${id}" ${state.checks[id]?'checked':''}><span>${txt(label)}</span></label>`).join('')}<div class="source-note">${t('Checklist changes are stored in this browser when local storage is available.','浏览器支持本地存储时，清单修改会保存在本机。')}</div><div class="modal-actions"><button class="btn primary" data-action="close">${t('Back to my trip','回到我的行程')}${icon('arrow')}</button></div>`,'checklist');}
const PHRASES=[
  {zh:'请带我去这个地址。',en:'Please take me to this address.',py:'Qǐng dài wǒ qù zhège dìzhǐ.'},
  {zh:'请问，洗手间在哪里？',en:'Excuse me, where is the restroom?',py:'Qǐngwèn, xǐshǒujiān zài nǎlǐ?'},
  {zh:'我想要不辣的菜。',en:'I would like a dish that is not spicy.',py:'Wǒ xiǎng yào bù là de cài.'},
  {zh:'我有一个酒店预订。',en:'I have a hotel reservation.',py:'Wǒ yǒu yí ge jiǔdiàn yùdìng.'}
];
function sourceHtml(key){const s=SOURCES[key];return `<a class="source-link" href="${s.url}" target="_blank" rel="noopener noreferrer">${txt(s.name)}${icon('diagonal')}</a><p class="source-note">${t('External official source · checked for this prototype on 15 Sep 2026. Recheck before travel; this is not a live policy feed.','外部官方来源 · 本原型资料检索于 2026 年 9 月 15 日。出行前请重新核对，本站不实时同步政策。')}</p>`;}
function openGuide(id){
  if(id==='phrases'){openModal(t('A little Chinese goes a long way.','把这句话，给对方看。'),`<p>${t('Simple, fixed travel phrases. Copy or show the Chinese text. This is not a live translator or a medical translation tool.','固定旅行短句，可以复制或直接展示中文。这里不是实时翻译或医疗翻译工具。')}</p>${PHRASES.map(p=>`<div class="phrase"><div class="chinese">${p.zh}</div><p>${p.en}</p><p class="pinyin">${p.py}</p><button class="text-link" data-action="copy" data-text="${p.zh}">${icon('copy')}${t('Copy Chinese','复制中文')}</button></div>`).join('')}`,'guide');return;}
  if(id==='emergency'){openModal(t('Keep the important numbers close.','把重要号码放在身边。'),`<p>${t('Emergency numbers for mainland China. This website cannot contact emergency services for you. The links below ask your device to dial.','以下号码适用于中国内地。本网站不能替你联系应急机构，点击后将请求设备拨号。')}</p><div class="emergency-grid"><a href="tel:110"><strong>110</strong>${t('Police','报警')}</a><a href="tel:119"><strong>119</strong>${t('Fire','火警')}</a><a href="tel:120"><strong>120</strong>${t('Ambulance','急救')}</a></div><div class="info-block">${t('Have your location and a clear description of the situation ready. Save the current contact details of your own embassy or consulate separately before departure.','请准备好所在位置及情况说明。出发前请另行保存本国使领馆当前有效的联系方式。')}</div>${sourceHtml('emergency')}`,'guide');return;}
  const guides={
    visa:{title:pair('Start with the official entry rules.','入境规则，先看官方。'),intro:pair('We do not decide visa eligibility. Your passport, nationality, route, dates and entry/exit points can all matter.','本工具不判定签证资格。护照、国籍、路线、日期及出入境口岸都可能影响适用条件。'),steps:[pair('Open the National Immigration Administration’s current policy pages and identify the route-specific requirements.','前往国家移民管理局当前政策页面，核对实际路线适用的要求。'),pair('Match your actual passport type, country and onward journey. Do not assume entry exemption and transit exemption are the same.','核对实际护照类型、国家及后续行程，不要将入境免签和过境免签视为同一规则。'),pair('Recheck with the relevant authority before making nonrefundable travel decisions.','作出不可退款的旅行决定前，向相关主管机构再次核实。')],source:'visa'},
    payment:{title:pair('A payment plan, plus a backup.','常用支付，也要有备用。'),intro:pair('Use the official practical guide as a starting point. Card support, verification, limits and fees depend on the service and provider.','以官方实用指南为起点。银行卡支持、验证、限额与收费需以具体服务及提供方为准。'),steps:[pair('Choose your intended payment service and read its current instructions for your card and account.','选好准备使用的支付服务，阅读其对你的银行卡及账号适用的当前说明。'),pair('Complete any required setup and confirm provider limits and fees before relying on it.','完成必要设置，确认提供方限额及收费后再使用。'),pair('Prepare a fallback payment method and record any costs in your budget; no payment setup happens on this website.','准备备用支付方式，并将相关费用记入预算。本网站不代办支付开通。')],source:'payment'},
    train:{title:pair('Train travel, one clear step at a time.','坐火车，每一步都清楚。'),intro:pair('Use China Railway 12306 for current railway information. This prototype does not fetch fares, availability or tickets.','请使用中国铁路 12306 查询当前铁路信息。本原型不查询实时票价、余票或生成车票。'),steps:[pair('Read the official FAQ and confirm the valid passport and passenger details needed for booking.','阅读官方常见问题，确认购票所需的有效护照及乘客信息。'),pair('Check the exact departure and arrival stations, travel date, service, seat and full fare.','核对具体出发站、到达站、日期、车次、席别和完整票价。'),pair('Keep the valid document used for the booking accessible. Follow station instructions and leave enough time for checks and boarding.','随身携带购票使用的有效证件，遵循车站提示，为查验与乘车留足时间。')],source:'train'},
    internet:{title:pair('Stay connected, on your own terms.','通信方案，也提前安排。'),intro:pair('This is a preparation checklist, not a SIM/eSIM recommendation or a guarantee that your apps will work.','这里是准备清单，不是 SIM/eSIM 产品推荐，也不保证特定应用可用。'),steps:[pair('Confirm your exact device model, whether it is unlocked, and compatibility with your chosen provider.','核对准确设备型号、是否解锁及与所选提供方的兼容性。'),pair('Ask the provider about coverage, identity checks, voice/SMS, data limits, fees and activation steps.','向提供方确认覆盖、身份验证、通话／短信、流量、费用与开通步骤。'),pair('Check whether your intended services are accessible through the chosen connection. Save essential names, addresses and your plan offline.','确认计划使用的服务能否通过所选网络访问，离线保存重要名称、地址及行程。')],source:'payment'}
  };
  const g=guides[id];if(!g)return;openModal(txt(g.title),`<p>${txt(g.intro)}</p>${g.steps.map((s,i)=>`<div class="guide-step"><span class="guide-number">${i+1}</span><div>${txt(s)}</div></div>`).join('')}${sourceHtml(g.source)}`,'guide');
}
function openHow(){openModal(t('A clearer trip, in three steps.','三步，让旅行更清楚。'),`${[
  [t('Start with you','先说说你'),t('Choose your days, party, interests and surroundings. One-home-base mode does not add intercity travel.','选择天数、同行人数、兴趣和环境。选择单城据点时，不添加跨城移动。')],
  [t('Shape a route','再安排路线'),t('Pick a rule-based route template, redistribute days and remove activities. No AI model is connected in this prototype.','选择基于规则的路线模板，调整天数，移除活动。本原型未连接 AI 模型。')],
  [t('Understand the budget','把预算算清'),t('See quantities, rates, confirmed totals and missing costs separately. Then save locally or take a text copy with you.','分别查看数量、单价、已确认总额和缺失费用，然后在本地保存或导出文本副本。')]
].map(([h,p],i)=>`<div class="guide-step"><span class="guide-number">${i+1}</span><div><strong>${h}</strong><br>${p}</div></div>`).join('')}<div class="info-block">${t('This first version is a working planning prototype, not a booking agent, travel guarantee or real-time pricing service.','第一版是可操作的规划原型，不是预订代理、旅行保证或实时价格服务。')}</div><div class="modal-actions"><button class="btn primary" data-action="start">${t('Let’s give it a try','现在试试看')}${icon('arrow')}</button></div>`,'how');}
function openAbout(){openModal(t('Small tool. Thoughtful beginnings.','小工具，认真开始。'),`<div class="privacy-list"><p>${t('China, unfolded. is a local-first prototype for exploring six destinations, editing a trip and making every budget assumption visible.','China, unfolded. 是一个本地优先的交互原型，可以探索六个目的地、编辑行程，并查看每一项预算假设。')}</p><p><strong>${t('What is real:','已经可以使用：')}</strong> ${t('Rule-based matching, day and night arithmetic, editable estimated/confirmed/unpriced costs, local saving, text export, printing, Chinese phrase cards and English/Chinese interfaces.','规则匹配、天数与晚数计算、估算／已确认／待估算费用编辑、本地保存、文本导出、打印、中文卡片与中英文界面。')}</p><p><strong>${t('What is not connected:','尚未接入：')}</strong> ${t('Live hotel prices, railway or flight inventory, a map provider, booking/payment, a language model, account sync or automatic policy updates.','实时酒店价格、火车／机票库存、地图服务、预订支付、大模型、账号同步及政策自动更新。')}</p><p>${t('All landscape illustrations are original inline vectors. They are visual inspiration, not destination photographs. No external fonts or remote image services are required.','所有山水与城市插画都是原创内嵌矢量图，仅用于视觉灵感，不是实景照片。不需要外部字体或远程图片服务。')}</p></div><div class="info-block">${t('Core rule: recommendations can be creative; costs must be explicit arithmetic. Unknown costs never silently become zero.','核心原则：推荐可以有创意，预算必须按条件计算。未知费用，绝不悄悄算成零。')}</div>`,'about');}
function openPrivacy(){openModal(t('Your trip stays with you.','你的旅行数据，留在你这里。'),`<div class="privacy-list"><p>${t('This prototype has no backend, account, analytics or third-party API calls. Saving uses this browser’s local storage. We do not ask for a passport number, passport image or payment card.','本原型没有后端、账号、分析追踪或第三方 API 调用。保存功能使用当前浏览器的本地存储，不索取护照号码、护照影像或支付卡资料。')}</p><p>${t('Your plan is not synced between devices. Clearing browser data or using a different browser can make it unavailable. Export a copy for your records. Local storage is not encrypted storage for sensitive information.','行程不会在设备间同步。清理浏览器数据或更换浏览器可能无法继续访问，请导出副本。本地存储不是敏感信息的加密保险箱。')}</p><p>${t('External official and visitor-information links open another website. Those websites have their own policies and may need an internet connection.','外部官方及旅游信息链接会打开其他网站，它们有自己的隐私政策，也需要网络连接。')}</p></div><div class="modal-actions"><button class="btn outline" data-action="confirm-clear">${icon('trash')}${t('Clear saved data','清除已保存数据')}</button><button class="btn primary" data-action="close">${t('Done','完成')}</button></div>`,'privacy');}
function exportText(){
  const b=getBudget();const line='─'.repeat(48);const all=[];
  all.push('CHINA, UNFOLDED.',names(),profileSummary(),`${t('Date','日期')}: ${dateText()}`,`${t('Recorded month','记录月份')}: ${state.month==='unsure'?t('Not set','未设置'):state.month}`,line,t('PLANNING PROTOTYPE — NOT A BOOKING OR LIVE QUOTE','规划原型 — 不是预订或实时报价'),t('All preset rates are fictional, editable planning assumptions.','所有预设单价均为虚构、可编辑的规划假设。'),t('No live schedules, opening days, accessibility, entry eligibility or seasonal feasibility have been verified.','尚未核验实时交通、开放日期、无障碍条件、入境资格及季节适配。'),'',t('STAY ALLOCATION','住宿分配'));
  state.route.forEach((cid,i)=>all.push(t(`${cityName(cid)}: ${state.allocations[i]} days, ${state.allocations[i]-(i===state.route.length-1?1:0)} nights × ${state.rooms} rooms`,`${cityName(cid)}：${state.allocations[i]} 天，${state.allocations[i]-(i===state.route.length-1?1:0)} 晚 × ${state.rooms} 间房`)));
  all.push('',line,t('DAY BY DAY','每日安排'));
  getPlanDays().forEach(d=>{all.push('',t(`DAY ${d.index+1}: ${cityName(d.city)}`,`第 ${d.index+1} 天：${cityName(d.city)}`));d.slots.forEach(s=>all.push(`  ${txt(s.period)} — ${txt(s.name)}`,`  ${txt(s.desc)}`));});
  all.push('',line,t('BUDGET — CNY, WHOLE GROUP','预算 — 人民币，全组'));
  b.rows.forEach(r=>{all.push('',`${r.label}: ${r.mode==='pending'?t('UNPRICED / EXCLUDED','待估算／未计入'):amount(r.totalMin,r.totalMax)}`,`  ${r.formula}`,`  ${r.mode==='estimated'?`${amount(r.min,r.max)} / ${r.unit} × ${r.qty}`:r.mode==='confirmed'?t('Manually confirmed full line total; counted once.','手动确认的整项总额，仅计算一次。'):t('Unknown amount is not zero.','未知费用不等于零。')}`,`  ${r.note||r.basis}`);if(r.stale)all.push(`  ${t('Previous amount requiring recheck: ','原金额需重新核实：')}${amount(r.previousTotal)}`);});
  all.push('',`${t('PLANNED SUBTOTAL','已纳入项目小计')}: ${b.known?amount(b.low,b.high):t('Not priced yet','待估算')}`,t(`${b.pending} unpriced items are NOT included.`,`${b.pending} 项待估算费用未计入。`),t('Excluded unless added: international / cross-border travel, visa, insurance, SIM/eSIM, shopping and unlisted services. Confirm hotel taxes and service fees.','除非自行添加，否则未包含：国际／跨境交通、签证、保险、SIM/eSIM、购物及所有未列出的服务。请核实酒店税费及服务费。'),t('No automatic contingency or exchange-rate conversion.','不自动添加应急金，不进行汇率转换。'),'',line,t('OFFICIAL SOURCES — RECHECK BEFORE TRAVEL','官方来源 — 请在出发前重新核验'));
  Object.values(SOURCES).forEach(s=>all.push(`${txt(s.name)}: ${s.url}`));
  all.push('',t('CHECKLIST (NOT A SAFETY / ENTRY GUARANTEE)','准备清单（不代表安全／入境保证）'));
  CHECKS.forEach(([id,label])=>all.push(`[${state.checks[id]?'x':' '}] ${txt(label)}`));
  all.push('',t('Exported locally. No booking or payment has taken place.','本机导出，未发生任何预订或支付。'));
  const blob=new Blob(['\uFEFF'+all.join('\n')],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download=`china-trip-${state.days}-days.txt`;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast(t('Your current plan was exported as a text file.','当前计划已导出为文本文件。'));
}
async function copyText(value){
  let success=false;
  try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(value);success=true;}}catch{}
  if(!success){const temp=document.createElement('textarea');temp.value=value;temp.style.position='fixed';temp.style.opacity='0';const root=modal.open?modal:document.body;root.appendChild(temp);temp.select();try{success=document.execCommand('copy');}catch{}temp.remove();}
  toast(success?t('Chinese text copied.','中文已复制。'):t('Copy was blocked. Select the Chinese text and copy it manually.','浏览器阻止了复制，请选中文字后手动复制。'));
}
function printPlan(){
  const panel=document.getElementById('plan-panel');if(!panel)return;
  ui.print=true;panel.innerHTML=getPlanDays().map(renderDay).join('')+'<div style="margin-top:30px">'+renderBudgetDetails()+'</div>';
  try{window.print();}catch{toast(t('Printing is unavailable here. Export a text copy instead.','当前环境无法打印，请导出文本副本。'));}
  // afterprint is standard; timeout is a defensive restore for restrictive viewers.
  setTimeout(()=>{if(ui.print){ui.print=false;refreshWorkspace();}},500);
}
window.addEventListener('afterprint',()=>{ui.print=false;refreshWorkspace();});
function changePreference(field,value){
  if(!['days','people','rooms','budget','environment','mobility','month','arrival'].includes(field))return;
  if(['days','people','rooms'].includes(field)){
    const n=Number(value);if(!Number.isInteger(n)||n<1)return;state[field]=n;
    if(field==='days'){if(state.days<5&&state.route.length>1)setRoute([state.route[0]],true);else state.allocations=allocateDays(state.route);state.disabledSlots=[];ui.day=0;ui.needsRefresh=true;}
  }else state[field]=value;
  if(['environment','mobility','month','budget'].includes(field))ui.needsRefresh=true;
  refreshWorkspace();
  if(['budget','environment'].includes(field))refreshDestinations();
  const gen=document.getElementById('generate-btn');if(gen)gen.innerHTML=icon('spark')+(ui.needsRefresh?t('Update my trip','更新我的方案'):t('Find my China','发现我的中国之旅'))+icon('arrow');
}
document.addEventListener('click',async event=>{
  const btn=event.target.closest('[data-action]');if(!btn||btn.disabled)return;
  const action=btn.dataset.action,id=btn.dataset.id;
  switch(action){
    case 'language':{const y=window.scrollY;closeModal();state.lang=state.lang==='en'?'zh':'en';renderPage();window.scrollTo(0,y);break;}
    case 'close':closeModal();break;
    case 'start':closeModal();scrollToId('planner');break;
    case 'how':openHow();break;
    case 'about':openAbout();break;
    case 'privacy':openPrivacy();break;
    case 'saved':openSaved();break;
    case 'save':savePlan();break;
    case 'save-close':savePlan();closeModal();break;
    case 'restore':{const s=readSaved();if(!s){toast(t('The saved plan is no longer available.','已保存行程已不可用。'));closeModal();break;}const lang=state.lang;state=structuredClone(s.state);state.lang=lang;ui.day=0;ui.needsRefresh=false;closeModal();renderPage();scrollToId('workspace');toast(t('Saved version restored.','已恢复保存的版本。'));break;}
    case 'export':exportText();break;
    case 'print':printPlan();break;
    case 'advanced':ui.advanced=!ui.advanced;refreshPreferences();break;
    case 'interest':{
      const i=state.interests.indexOf(id);if(i>=0){if(state.interests.length===1){toast(t('Keep at least one interest so the plan has a direction.','请至少保留一项兴趣，让推荐有方向。'));break;}state.interests.splice(i,1);}else{if(state.interests.length>=4){toast(t('Choose up to four interests for a clearer match.','最多选择四项兴趣，便于明确推荐方向。'));break;}state.interests.push(id);}ui.needsRefresh=true;refreshPreferences();refreshDestinations();refreshWorkspace();break;
    }
    case 'filter':ui.filter=id;ui.showAll=true;refreshDestinations();break;
    case 'all-cities':ui.filter='all';ui.showAll=true;refreshDestinations();scrollToId('discover');break;
    case 'generate':{const plans=getCandidates();if(!plans.length){openAlternatives();break;}setRoute(plans[0].route);ui.tab='route';refreshWorkspace();refreshPreferences();refreshDestinations();scrollToId('workspace');toast(t('Your rule-based route is ready to edit. Check missing costs before booking.','规则路线已生成，可继续编辑。预订前请补齐缺失费用。'));break;}
    case 'tab':{
      if(!['route','days','budget'].includes(id))break;ui.tab=id;refreshWorkspace();
      if(!document.getElementById('workspace').getBoundingClientRect().top||document.getElementById('workspace').getBoundingClientRect().top< -300)scrollToId('workspace');break;
    }
    case 'city':if(Object.hasOwn(CITY,id))openCity(id);break;
    case 'choose-city':if(Object.hasOwn(CITY,id)){setRoute([id],true);ui.tab='route';closeModal();refreshWorkspace();refreshPreferences();scrollToId('workspace');}break;
    case 'alternatives':openAlternatives();break;
    case 'select-route':{const route=btn.dataset.route.split(',');if(route.every(c=>Object.hasOwn(CITY,c))){setRoute(route);closeModal();ui.tab='route';refreshWorkspace();refreshPreferences();toast(t('Route updated. Recheck any previously confirmed costs.','路线已更新，请重新核实之前确认的费用。'));}break;}
    case 'route-edit':openRouteEdit();break;
    case 'shift-day':{
      const i=Number(btn.dataset.index),delta=Number(btn.dataset.delta),other=1-i;if(state.route.length!==2||![0,1].includes(i)||![-1,1].includes(delta))break;
      if(state.allocations[i]+delta<2||state.allocations[other]-delta<2)break;state.allocations[i]+=delta;state.allocations[other]-=delta;state.disabledSlots=[];refreshWorkspace();openRouteEdit();break;
    }
    case 'day':{const d=Number(btn.dataset.day);if(d>=0&&d<state.days){ui.day=d;document.getElementById('plan-panel').innerHTML=renderDays();}break;}
    case 'remove-slot':if(!state.disabledSlots.includes(id)){state.disabledSlots.push(id);refreshWorkspace();toast(t('Idea removed. Experience allowances are recalculated where applicable.','已移除该建议；相关体验预算额度已重新计算。'));}break;
    case 'reset-day':state.disabledSlots=state.disabledSlots.filter(x=>!x.startsWith(`d${ui.day}-`));refreshWorkspace();toast(t('This day’s suggestions were restored.','已恢复当天建议。'));break;
    case 'expense':openExpense(id);break;
    case 'add-expense':if(state.extras.length>=30){toast(t('This prototype supports up to 30 custom expenses.','本原型最多支持 30 项自定义费用。'));}else openAddExpense();break;
    case 'delete-expense':{const item=state.extras.find(e=>e.id===id);if(!item)break;openModal(t('Remove this extra?','移除这项自定义费用？'),`<p>${esc(item.label)} — ${t('This also removes its amount from the draft budget.','也会从草稿预算中移除对应金额。')}</p><div class="modal-actions"><button class="btn outline" data-action="close">${t('Cancel','取消')}</button><button class="btn primary" data-action="delete-expense-confirmed" data-id="${id}">${t('Remove item','确认移除')}</button></div>`);break;}
    case 'delete-expense-confirmed':state.extras=state.extras.filter(e=>e.id!==id);delete state.expenses[id];closeModal();refreshWorkspace();break;
    case 'target':openTarget();break;
    case 'guide':openGuide(id);break;
    case 'checklist':openChecklist();break;
    case 'copy':await copyText(btn.dataset.text||'');break;
    case 'confirm-clear':openModal(t('Clear the saved local data?','清除本地保存的数据？'),`<p>${t('This deletes the saved trip and checklist from this browser. Your current draft stays open until you close or refresh the page. Export it first to keep a copy.','这将删除当前浏览器保存的行程与清单。当前草稿仍保留到页面关闭或刷新；需要留存时，请先导出副本。')}</p><div class="modal-actions"><button class="btn outline" data-action="close">${t('Keep my data','保留数据')}</button><button class="btn primary" data-action="clear-data">${t('Clear saved data','确认清除')}</button></div>`);break;
    case 'clear-data':try{localStorage.removeItem(SAVE_KEY);localStorage.removeItem(CHECK_KEY);saved=null;state.checks={};closeModal();document.querySelectorAll('.saved-dot').forEach(el=>el.classList.remove('on'));toast(t('Saved local data cleared. The current draft is still open.','已清除本地保存数据，当前草稿仍保留在页面中。'));}catch{toast(t('The browser did not allow local-data changes.','浏览器未允许更改本地数据。'));}break;
  }
});
document.addEventListener('change',event=>{
  const el=event.target;
  if(el.matches('[data-field]'))changePreference(el.dataset.field,el.value);
  if(el.id==='expense-mode')updateExpensePreview();
  if(el.matches('[data-check]')){
    state.checks[el.dataset.check]=el.checked;el.closest('label').classList.toggle('checked',el.checked);const n=CHECKS.filter(([id])=>state.checks[id]).length;document.getElementById('check-count').textContent=t(`${n} of ${CHECKS.length} tasks complete`,`${CHECKS.length} 项准备中已完成 ${n} 项`);document.getElementById('check-progress-bar').style.width=`${n/CHECKS.length*100}%`;
    try{localStorage.setItem(CHECK_KEY,JSON.stringify(state.checks));}catch{toast(t('Checklist changed for this visit only; browser storage is unavailable.','清单仅在本次访问中生效，浏览器存储不可用。'));}
  }
});
document.addEventListener('input',event=>{if(['expense-min','expense-max','expense-total'].includes(event.target.id))updateExpensePreview();});
document.addEventListener('submit',event=>{
  if(event.target.id==='expense-form')submitExpense(event);
  if(event.target.id==='add-expense-form'){
    event.preventDefault();const label=document.getElementById('new-expense-label').value.trim();if(!label)return;const unit=document.getElementById('new-expense-unit').value;const id=`extra-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`;state.extras.push({id,label:label.slice(0,70),unit});closeModal();ui.tab='budget';refreshWorkspace();openExpense(id);
  }
  if(event.target.id==='target-form'){
    event.preventDefault();const raw=document.getElementById('target-input').value,val=Number(raw);if(raw===''||!Number.isFinite(val)||val<0||val>10000000)return;state.target=Math.round(val);closeModal();refreshWorkspace();
  }
});
// Native dialogs provide keyboard focus containment and Escape-to-close behavior.
modal.addEventListener('click',event=>{if(event.target===modal){const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeModal();}});
modal.addEventListener('cancel',()=>{ui.modalType=null;ui.editRow=null;});
document.addEventListener('keydown',event=>{
  if(!event.target.matches('[role="tab"]')||!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
  event.preventDefault();const tabs=['route','days','budget'];let i=tabs.indexOf(ui.tab);i=event.key==='Home'?0:event.key==='End'?2:event.key==='ArrowRight'?(i+1)%3:(i+2)%3;ui.tab=tabs[i];refreshWorkspace();document.getElementById(`tab-${ui.tab}`).focus();
});
renderPage();
// Small read-only test hook, useful for regression tests of budget arithmetic.
window.ChinaUnfolded={getState:()=>structuredClone(state),getBudget:()=>structuredClone(getBudget()),getPlan:()=>structuredClone(getPlanDays()),validate:validSaved};

