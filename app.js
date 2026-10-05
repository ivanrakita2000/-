/* ПЕРЕКУП v7 — mobile-first prototype */
const IMAGE_API='https://commons.wikimedia.org/w/api.php';
const IMAGE_CACHE_KEY='perekup_images_v7';

const modelRows = [
  // LADA
  ['LADA','ВАЗ-2101',1985,69000,'1.2 л · бензин · МКПП','седан'],['LADA','ВАЗ-2105',1999,105000,'1.5 л · бензин · МКПП','седан'],['LADA','ВАЗ-2106',2001,175000,'1.6 л · бензин · МКПП','седан'],['LADA','ВАЗ-2107',2008,260000,'1.6 л · бензин · МКПП','седан'],['LADA','ВАЗ-2114',2012,335000,'1.6 л · бензин · МКПП','хэтчбек'],['LADA','Vesta',2020,930000,'1.6 л · бензин · МКПП','седан'],
  // BMW
  ['BMW','E39 520i',2002,620000,'2.0 л · бензин · АКПП','седан'],['BMW','E46 320i',2004,690000,'2.2 л · бензин · АКПП','седан'],['BMW','E60 520i',2005,780000,'2.2 л · бензин · АКПП · M54B22','седан'],['BMW','E60 530i',2006,1250000,'3.0 л · бензин · АКПП · N52','седан'],['BMW','F10 520d',2014,1450000,'2.0 л · дизель · АКПП','седан'],['BMW','F30 320i',2015,1580000,'2.0 л · бензин · АКПП','седан'],
  // Kia
  ['Kia','Rio',2015,690000,'1.6 л · бензин · АКПП','седан'],['Kia','Ceed',2017,980000,'1.6 л · бензин · АКПП','хэтчбек'],['Kia','Optima',2018,1350000,'2.4 л · бензин · АКПП','седан'],['Kia','Sportage',2020,1850000,'2.0 л · бензин · АКПП','кроссовер'],['Kia','Cerato',2019,1120000,'2.0 л · бензин · АКПП','седан'],['Kia','Sorento',2017,1790000,'2.2 л · дизель · АКПП','внедорожник'],
  // Hyundai
  ['Hyundai','Solaris',2017,890000,'1.6 л · бензин · АКПП','седан'],['Hyundai','Elantra',2018,980000,'2.0 л · бензин · АКПП','седан'],['Hyundai','i30',2016,820000,'1.6 л · бензин · АКПП','хэтчбек'],['Hyundai','Creta',2019,1350000,'2.0 л · бензин · АКПП','кроссовер'],['Hyundai','Tucson',2020,1980000,'2.0 л · бензин · АКПП','кроссовер'],['Hyundai','Santa Fe',2018,2250000,'2.4 л · бензин · АКПП','внедорожник'],
  // Volkswagen
  ['Volkswagen','Polo',2019,980000,'1.6 л · бензин · АКПП','седан'],['Volkswagen','Golf 7',2017,1180000,'1.4 л · бензин · DSG','хэтчбек'],['Volkswagen','Jetta 6',2015,910000,'1.6 л · бензин · АКПП','седан'],['Volkswagen','Passat B7',2014,980000,'1.8 л · бензин · DSG','седан'],['Volkswagen','Tiguan',2017,1450000,'2.0 л · бензин · DSG','кроссовер'],['Volkswagen','Touareg',2015,1870000,'3.0 л · дизель · АКПП','внедорожник'],
  // Toyota
  ['Toyota','Corolla',2016,1160000,'1.6 л · бензин · CVT','седан'],['Toyota','Camry',2017,1850000,'2.5 л · бензин · АКПП','седан'],['Toyota','RAV4',2018,1990000,'2.0 л · бензин · CVT','кроссовер'],['Toyota','Land Cruiser Prado 150',2014,3150000,'2.7 л · бензин · АКПП','внедорожник'],['Toyota','Avensis',2014,990000,'1.8 л · бензин · CVT','седан'],['Toyota','Prius',2015,1420000,'1.8 л · гибрид · CVT','хэтчбек'],
  // Mercedes-Benz
  ['Mercedes-Benz','C-Class W204',2013,1280000,'1.8 л · бензин · АКПП','седан'],['Mercedes-Benz','E-Class W212',2013,1750000,'2.0 л · бензин · АКПП','седан'],['Mercedes-Benz','S-Class W221',2011,1950000,'3.0 л · дизель · АКПП','седан'],['Mercedes-Benz','GLC X253',2017,2650000,'2.0 л · бензин · АКПП','кроссовер'],['Mercedes-Benz','GLE W166',2016,2900000,'3.0 л · дизель · АКПП','внедорожник'],['Mercedes-Benz','A-Class W176',2015,1350000,'1.6 л · бензин · АКПП','хэтчбек'],
  // Audi
  ['Audi','A3 8V',2016,1190000,'1.4 л · бензин · S tronic','хэтчбек'],['Audi','A4 B8',2013,1050000,'1.8 л · бензин · Multitronic','седан'],['Audi','A4 B9',2017,1650000,'2.0 л · бензин · S tronic','седан'],['Audi','A6 C7',2015,1590000,'2.0 л · дизель · S tronic','седан'],['Audi','Q5 8R',2014,1470000,'2.0 л · бензин · S tronic','кроссовер'],['Audi','Q7 4M',2017,2790000,'3.0 л · дизель · Tiptronic','внедорожник'],
  // Ford
  ['Ford','Focus 3',2016,920000,'1.6 л · бензин · АКПП','хэтчбек'],['Ford','Mondeo 5',2016,1240000,'2.0 л · бензин · АКПП','седан'],['Ford','Kuga 2',2017,1340000,'2.5 л · бензин · АКПП','кроссовер'],['Ford','Fiesta',2015,720000,'1.6 л · бензин · АКПП','хэтчбек'],['Ford','Explorer 5',2015,1840000,'3.5 л · бензин · АКПП','внедорожник'],['Ford','Transit',2016,1590000,'2.2 л · дизель · МКПП','минивэн'],
  // Skoda
  ['Skoda','Rapid',2018,850000,'1.6 л · бензин · АКПП','седан'],['Skoda','Octavia A7',2017,1060000,'1.8 л · бензин · DSG','универсал'],['Skoda','Superb 2',2014,1120000,'1.8 л · бензин · DSG','седан'],['Skoda','Kodiaq',2018,1790000,'2.0 л · бензин · DSG','кроссовер'],['Skoda','Yeti',2015,900000,'1.8 л · бензин · DSG','кроссовер'],['Skoda','Fabia 3',2016,690000,'1.2 л · бензин · DSG','хэтчбек'],
  // Renault
  ['Renault','Logan 2',2018,720000,'1.6 л · бензин · МКПП','седан'],['Renault','Duster 1',2016,930000,'2.0 л · бензин · АКПП','кроссовер'],['Renault','Sandero 2',2017,680000,'1.6 л · бензин · МКПП','хэтчбек'],['Renault','Kaptur',2018,1050000,'2.0 л · бензин · АКПП','кроссовер'],['Renault','Arkana',2020,1320000,'1.3 л · бензин · CVT','кроссовер'],['Renault','Megane 4',2017,940000,'1.2 л · бензин · EDC','хэтчбек'],
  // Nissan
  ['Nissan','Almera G15',2016,690000,'1.6 л · бензин · АКПП','седан'],['Nissan','Qashqai J11',2017,1230000,'2.0 л · бензин · CVT','кроссовер'],['Nissan','X-Trail T32',2018,1560000,'2.0 л · бензин · CVT','кроссовер'],['Nissan','Teana J32',2014,980000,'2.5 л · бензин · CVT','седан'],['Nissan','Murano Z52',2017,1710000,'3.5 л · бензин · CVT','кроссовер'],['Nissan','Terrano D10',2018,990000,'2.0 л · бензин · АКПП','кроссовер'],
  // Mazda
  ['Mazda','3 BM',2015,980000,'1.5 л · бензин · АКПП','седан'],['Mazda','6 GJ',2017,1390000,'2.0 л · бензин · АКПП','седан'],['Mazda','CX-5 KE',2015,1250000,'2.0 л · бензин · АКПП','кроссовер'],['Mazda','CX-5 KF',2018,1740000,'2.0 л · бензин · АКПП','кроссовер'],['Mazda','CX-9',2017,2050000,'2.5 л · бензин · АКПП','внедорожник'],['Mazda','2 DE',2012,590000,'1.5 л · бензин · АКПП','хэтчбек'],
  // Chevrolet
  ['Chevrolet','Cruze',2014,720000,'1.8 л · бензин · АКПП','седан'],['Chevrolet','Niva',2017,790000,'1.7 л · бензин · МКПП','внедорожник'],['Chevrolet','Orlando',2015,990000,'1.8 л · бензин · АКПП','минивэн'],['Chevrolet','Captiva',2015,1180000,'2.4 л · бензин · АКПП','кроссовер'],['Chevrolet','Aveo T300',2014,610000,'1.6 л · бензин · АКПП','седан'],['Chevrolet','Tahoe GMT900',2013,1850000,'5.3 л · бензин · АКПП','внедорожник'],
  // Honda
  ['Honda','Civic 9',2014,940000,'1.8 л · бензин · АКПП','седан'],['Honda','Accord 9',2015,1370000,'2.4 л · бензин · АКПП','седан'],['Honda','CR-V 4',2015,1430000,'2.0 л · бензин · АКПП','кроссовер'],['Honda','Fit / Jazz',2014,780000,'1.3 л · бензин · CVT','хэтчбек'],['Honda','Pilot 2',2014,1360000,'3.5 л · бензин · АКПП','внедорожник'],['Honda','Crosstour',2014,1450000,'3.5 л · бензин · АКПП','универсал']
];

const descriptionSets={
  LADA:[c=>`Автомобиль эксплуатировался спокойно, по возрасту есть небольшая косметика. Продавец предлагает посмотреть машину без предварительной подготовки.`,c=>`Обычный живой вариант для повседневной езды. Салон не новый, но без явных сюрпризов на фотографиях.`,c=>`Машина на ходу, владелец готов показать документы и рассказать, что обслуживалось в последнее время.`],
  BMW:[c=>`Автомобиль использовался регулярно, обслуживание проводилось по мере необходимости. По кузову есть несколько возрастных моментов.`,c=>`Владелец говорит, что машина ухоженная, но перед покупкой предлагает спокойно всё осмотреть. Комплектация интересная.`,c=>`Продаётся без красивых обещаний: есть следы эксплуатации, но автомобиль выглядит целостно. Торг обсуждается у капота.`],
  Kia:[c=>`Городской автомобиль с понятной историей использования. Салон аккуратный, внешне есть только обычные следы эксплуатации.`,c=>`Машина ежедневно ездила по городу. Продавец говорит, что серьёзных вложений недавно не делал.`,c=>`Выглядит аккуратно, по комплектации всё основное есть. Небольшая косметика присутствует, подробнее владелец расскажет при осмотре.`],
  Hyundai:[c=>`Авто эксплуатировалось без экстремальных нагрузок. По кузову замечены небольшие сколы и следы городского использования.`,c=>`Владелец описывает машину как семейную и не требует идеального состояния — предлагает оценить её лично.`,c=>`Продаётся обычный экземпляр без попытки скрыть возраст. Документы на руках, осмотр возможен в удобное время.`],
  Volkswagen:[c=>`Машина использовалась как основной автомобиль. Салон сохранён, по кузову есть пара небольших косметических дефектов.`,c=>`Владелец готов обсудить цену после осмотра. По фотографиям автомобиль выглядит аккуратно, но всё лучше проверить самостоятельно.`,c=>`Авто выставлено после обслуживания. Продавец подробно отвечает на вопросы и готов показать бумаги.`],
  Toyota:[c=>`Автомобиль эксплуатировался в спокойном режиме. Салон выглядит ухоженно, внешний вид соответствует возрасту и пробегу.`,c=>`Продавец делает ставку на надёжность машины, но честно говорит, что без осмотра выводы делать рано.`,c=>`Машина выглядит аккуратно. Есть несколько небольших следов эксплуатации, которые видно при внимательном просмотре.`],
  'Mercedes-Benz':[c=>`Автомобиль обслуживался по мере необходимости. Продавец не скрывает возрастные моменты и предлагает проверить технику перед сделкой.`,c=>`Владелец говорит, что машина комфортная и ухоженная. По кузову присутствуют небольшие следы эксплуатации.`,c=>`Продажа связана со сменой автомобиля. Есть сервисные документы, осмотр приветствуется.`],
  Audi:[c=>`Машина использовалась каждый день, салон сохранён хорошо. По кузову есть небольшая косметика, не влияющая на внешний вид издалека.`,c=>`Продавец предлагает не торопиться с выводами: можно осмотреть автомобиль, документы и обсудить цену на месте.`,c=>`Автомобиль выглядит аккуратно, установлен второй комплект колёс. По обслуживанию есть часть документов.`],
  Ford:[c=>`Практичная машина для повседневной эксплуатации. Владелец указывает на обычные возрастные следы, без попытки приукрасить объявление.`,c=>`Продавец говорит, что автомобиль обслуживался регулярно. Состояние салона и кузова лучше оценить по фотографиям и при встрече.`,c=>`Авто продаётся из-за смены машины. В объявлении указаны основные характеристики, остальное владелец готов обсудить.`],
  Skoda:[c=>`Автомобиль использовался спокойно, кузов выглядит ровно. Небольшие следы эксплуатации присутствуют, как и у большинства машин этого возраста.`,c=>`Семейный автомобиль, продавец отвечает на вопросы и готов показать машину без предварительной подготовки.`,c=>`Машина обслуживалась по регламенту, но часть работ могла выполняться без официального сервиса.`],
  Renault:[c=>`Недорогой в содержании автомобиль, который использовали как основной транспорт. Косметика присутствует, серьёзные выводы — только после проверки.`,c=>`Продавец рассказывает о машине без лишней рекламы. Осмотр и разговор по цене возможны рядом с автомобилем.`,c=>`Машина выглядит как обычный рабочий экземпляр. Есть следы эксплуатации, но ничего явно критичного по объявлению не заявлено.`],
  Nissan:[c=>`Автомобиль использовался преимущественно в городе. Внешне выглядит аккуратно, по кузову есть отдельные небольшие моменты.`,c=>`Продаётся в связи с покупкой другой машины. Владелец готов ответить на вопросы и показать сервисные бумаги.`,c=>`Машина не прячется от осмотра. Продавец считает состояние нормальным для указанного пробега.`],
  Mazda:[c=>`Автомобиль эксплуатировался регулярно, салон без сильных следов износа. Косметические моменты отмечены на кузове.`,c=>`Владелец говорит, что машина приносила минимум проблем, но рекомендует сделать собственную диагностику.`,c=>`Хороший городской/трассовый вариант по словам продавца. Есть мелкие следы эксплуатации, видимые на фото.`],
  Chevrolet:[c=>`Практичный автомобиль для города и поездок. Внешне есть обычные следы эксплуатации, без попытки скрыть их в объявлении.`,c=>`Владелец готов рассказать историю машины и показать документы. Часть косметики лучше рассмотреть на фото крупным планом.`,c=>`Автомобиль продаётся без спешки. По комплектации всё основное есть, а техническое состояние лучше подтвердить диагностикой.`],
  Honda:[c=>`Машина использовалась как семейный транспорт. По кузову есть мелкие следы парковочной жизни, салон сохранён нормально.`,c=>`Продавец не спешит с продажей и готов дать время на осмотр. По документам обещает всё показать.`,c=>`Автомобиль выставлен после очередного обслуживания. Несколько косметических моментов владелец считает несущественными.`]
};

const sellerTypes=[
  {name:'Спокойный',style:'Спокойно отвечает, торгуется только после осмотра.'},
  {name:'Торгаш',style:'Сам любит торг и быстро обсуждает цену.'},
  {name:'Деловой',style:'Отвечает коротко, по существу и без лишних эмоций.'},
  {name:'Переживающий',style:'Нервничает из-за сроков продажи и хочет поскорее закрыть сделку.'},
  {name:'Автолюбитель',style:'Знает особенности модели и может рассказать, что делалось с машиной.'}
];
const reasons=['Покупает машину поновее','Нужны деньги','Машина стала второй в семье','Уезжает в другой город','Пересаживается на кроссовер','Просто решил продать'];
const urgency=['Без спешки','Можно немного поторговаться','Продать в ближайшую неделю','Нужно закрыть вопрос побыстрее'];

function hash(n){let x=Math.sin(n*12.9898)*43758.5453;return x-Math.floor(x)}
function pick(a,n){return a[Math.floor(hash(n)*a.length)%a.length]}
function money(n){return Number(n||0).toLocaleString('ru-RU')}
function gearboxOf(engine){ if(engine.includes('МКПП'))return 'МКПП'; if(engine.includes('DSG'))return 'DSG'; if(engine.includes('CVT'))return 'CVT'; if(engine.includes('S tronic'))return 'S tronic'; if(engine.includes('EDC'))return 'EDC'; return 'АКПП'; }
function makeVin(id){const chars='ABCDEFGHJKLMNPRSTUVWXYZ0123456789';let s='X'+String(id).padStart(2,'0');for(let i=0;i<15;i++)s+=chars[Math.floor(hash(id*31+i)*chars.length)];return s.slice(0,17)}

const cars=modelRows.map((r,i)=>{
 const [brand,model,year,price,engine,body]=r;const id=i+1;
 const mileage=Math.round((hash(id*4.2)*120000 + (year<2010?125000:52000)) / 1000)*1000;
 const states=['Отличное','Хорошее','Нормальное'];const state=pick(states,id*1.9);
 const owners=1+Math.floor(hash(id*2.1)*5);
 const importYear=Math.min(2026, year + Math.floor(hash(id*3.1)*7));
 const postedAgo=Math.floor(hash(id*4.7)*10);
 const posted=new Date(Date.now()-postedAgo*86400000-(Math.floor(hash(id*5.6)*18))*3600000);
 const type=pick(sellerTypes,id*6.7);
 const reason=pick(reasons,id*7.2), urgencyText=pick(urgency,id*8.4);
 const accident=hash(id*9.3)>.56;
 const rollback=hash(id*11.1)>.82 || (mileage>180000 && hash(id*12.2)>.65);
 const historyMileage=rollback?Math.max(48000,mileage-Math.floor(32000+hash(id*13.2)*90000)):mileage+Math.floor(hash(id*14.2)*6000);
 const desc=pick(descriptionSets[brand],id*15.1)(null);
 const pros=pick(['Ликвидная модель','Нормально сохранился салон','Есть интересный комплект колёс','Понятный спрос на вторичке','Небольшой расход топлива','Хорошая комплектация'],id*16.3);
 const cons=pick(['Есть косметические моменты','Стоит внимательнее посмотреть ходовую','Возраст уже заметен по отдельным элементам','Есть следы городского использования','Перед покупкой лучше проверить историю','Пробег требует внимательной оценки'],id*17.4);
 return {id,brand,model,year,price,engine,body,mileage,state,owners,importYear,posted,postedAgo,urgency:urgencyText,reason,seller:type,accident,rollback,historyMileage,vin:makeVin(id),desc,pros,cons,photoQuery:`${brand} ${model}`};
});

const brands=['Все',...Array.from(new Set(cars.map(c=>c.brand)))];
let selected='Все';
let view='market';
let filters={priceMin:'',priceMax:'',yearMin:'',mileageMax:'',gearbox:'',bodyType:'',ownersMax:'',sortBy:'new'};
let balance=Number(localStorage.getItem('perekup_balance_v7')||150000);
let garage=JSON.parse(localStorage.getItem('perekup_garage_v7')||'[]');
let boughtIds=new Set(JSON.parse(localStorage.getItem('perekup_bought_v7')||'[]'));
let favoriteIds=new Set(JSON.parse(localStorage.getItem('perekup_favorite_v7')||'[]'));
let removedIds=new Set(JSON.parse(localStorage.getItem('perekup_removed_v7')||'[]'));
let profitTotal=Number(localStorage.getItem('perekup_profit_v7')||0);
const $=s=>document.querySelector(s);

function cacheRead(){try{return JSON.parse(localStorage.getItem(IMAGE_CACHE_KEY)||'{}')}catch{return {}}}
function cacheWrite(o){localStorage.setItem(IMAGE_CACHE_KEY,JSON.stringify(o))}
const photoCache=cacheRead();

function save(){
 localStorage.setItem('perekup_balance_v7',balance);
 localStorage.setItem('perekup_garage_v7',JSON.stringify(garage));
 localStorage.setItem('perekup_bought_v7',JSON.stringify([...boughtIds]));
 localStorage.setItem('perekup_favorite_v7',JSON.stringify([...favoriteIds]));
 localStorage.setItem('perekup_removed_v7',JSON.stringify([...removedIds]));
 localStorage.setItem('perekup_profit_v7',profitTotal);
 updateTop();
}
function updateTop(){
 $('#balance').textContent=money(balance);$('#garageCount').textContent=garage.length;$('#favoritesCount').textContent=favoriteIds.size;$('#favoriteStat').textContent=favoriteIds.size;$('#marketStat').textContent=cars.length;
 const lvl=1+Math.floor(Math.max(0,profitTotal)/300000);$('#level').textContent=Math.min(30,lvl);
}
function renderBrands(){
 if(view!=='market' && view!=='favorites'){$('#brands').innerHTML='';return}
 $('#brands').innerHTML=brands.map(b=>`<button class="brand ${b===selected?'active':''}" onclick="filterBrand('${b.replace(/'/g,"\\'")}')">${b}</button>`).join('');
}
function filterBrand(b){selected=b;view='market';setActiveNav();render()}
function currentMarket(){
 let list=cars.filter(c=>!boughtIds.has(c.id)&&!removedIds.has(c.id));
 if(selected!=='Все')list=list.filter(c=>c.brand===selected);
 const f=filters;
 if(f.priceMin)list=list.filter(c=>c.price>=Number(f.priceMin));
 if(f.priceMax)list=list.filter(c=>c.price<=Number(f.priceMax));
 if(f.yearMin)list=list.filter(c=>c.year>=Number(f.yearMin));
 if(f.mileageMax)list=list.filter(c=>c.mileage<=Number(f.mileageMax));
 if(f.gearbox)list=list.filter(c=>gearboxOf(c.engine)===f.gearbox);
 if(f.bodyType)list=list.filter(c=>c.body===f.bodyType);
 if(f.ownersMax)list=list.filter(c=>c.owners<=Number(f.ownersMax));
 if(f.sortBy==='priceAsc')list.sort((a,b)=>a.price-b.price);
 else if(f.sortBy==='priceDesc')list.sort((a,b)=>b.price-a.price);
 else if(f.sortBy==='mileageAsc')list.sort((a,b)=>a.mileage-b.mileage);
 else if(f.sortBy==='yearDesc')list.sort((a,b)=>b.year-a.year);
 else list.sort((a,b)=>b.posted-a.posted);
 return list;
}
function card(c,mode='market'){
 const fav=favoriteIds.has(c.id);const status=removedIds.has(c.id)?'removed':boughtIds.has(c.id)?'bought':'active';
 const source=mode==='garage'?'garage':mode==='favorites'?'favorites':'market';
 const photoKey=encodeURIComponent(c.photoQuery);
 return `<article class="card ${status!=='active'?'inactiveCard':''}">
 <div class="photo" data-photo-query="${photoKey}"><div class="photoLoader">Загрузка фото…</div><span class="badge">${c.state}</span><button class="favorite ${fav?'on':''}" title="Избранное" onclick="toggleFavorite(event,${c.id})">${fav?'♥':'♡'}</button></div>
 <div class="body"><div class="name">${c.brand} ${c.model}</div><div class="sub">${c.year} · ${money(c.mileage)} км · ${gearboxOf(c.engine)}</div>
 <div class="chips"><span class="chip">${c.owners} ${c.owners===1?'владелец':'владельца'}</span><span class="chip">${c.body}</span><span class="chip">${c.postedAgo===0?'сегодня':`${c.postedAgo} дн. назад`}</span></div>
 <div class="listingInfo"><span>${c.urgency}</span><span>${c.reason}</span></div>
 ${status==='active'?`<div class="price">${money(c.price)} ₽</div><button class="buy" onclick="openCar(${c.id})">Открыть объявление</button>`:status==='bought'?`<div class="removedLabel">Куплено вами</div><button class="buy secondary" onclick="garageView()">Открыть гараж</button>`:`<div class="removedLabel">Объявление снято с продажи</div><button class="buy secondary" onclick="openCar(${c.id},true)">Смотреть карточку</button>`}
 </div></article>`;
}
function render(){
 renderBrands(); updateTop();
 if(view==='garage'){garageView(false);return}
 if(view==='favorites'){favoritesView(false);return}
 $('#reset').style.display='block';
 const list=currentMarket();$('#title').textContent=selected==='Все'?'Все автомобили':selected;$('#count').textContent=`${list.length} доступных объявлений`;
 $('#catalog').innerHTML=list.length?list.map(c=>card(c)).join(''):`<div class="empty">По выбранным параметрам ничего не найдено.</div>`;
 hydratePhotoPlaceholders();
}
function hydratePhotoPlaceholders(){
 const nodes=[...document.querySelectorAll('[data-photo-query]')]; if(!nodes.length)return;
 if(!('IntersectionObserver' in window)){nodes.forEach(n=>loadPhotoInto(n,decodeURIComponent(n.dataset.photoQuery),false));return;}
 const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){loadPhotoInto(e.target,decodeURIComponent(e.target.dataset.photoQuery),false);obs.unobserve(e.target)}})},{rootMargin:'500px'});nodes.forEach(n=>obs.observe(n));
}
function fallbackPhoto(query){return `https://placehold.co/1200x800/181d27/ffffff?text=${encodeURIComponent(query)}`}
async function fetchCommons(query,limit=5){
 if(photoCache[query]?.length)return photoCache[query];
 const url=`${IMAGE_API}?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url|descriptionurl|extmetadata&iiurlwidth=1200&format=json&origin=*`;
 try{const res=await fetch(url);const data=await res.json();const pages=Object.values(data.query?.pages||{});const imgs=pages.map(p=>p.imageinfo?.[0]).filter(Boolean).map(ii=>({url:ii.thumburl||ii.url,source:ii.descriptionurl||''})).filter(x=>x.url);photoCache[query]=imgs.slice(0,5);cacheWrite(photoCache);return photoCache[query]}catch{return []}
}
async function loadPhotoInto(node,query,first=true){
 if(node.dataset.loaded)return;node.dataset.loaded='1';const arr=await fetchCommons(query,5);const img=arr[0]?.url||fallbackPhoto(query);node.innerHTML=`<img loading="lazy" src="${img}" alt="${query.replace(/"/g,'')}" onerror="this.src='${fallbackPhoto(query)}'"><span class="badge">${node.closest('.garageCard')?'Гараж':'Объявление'}</span>`;
 if(first&&arr[0]?.source)node.dataset.source=arr[0].source;
}

function toggleFavorite(e,id){e.stopPropagation();if(favoriteIds.has(id))favoriteIds.delete(id);else favoriteIds.add(id);save();showToast(favoriteIds.has(id)?'Машина добавлена в избранное':'Машина убрана из избранного');render();}
function favoritesView(doRender=true){
 renderBrands();$('#reset').style.display='none';const list=cars.filter(c=>favoriteIds.has(c.id));$('#title').textContent='Избранное';$('#count').textContent=`${list.length} сохранённых объявлений`;
 $('#catalog').innerHTML=list.length?list.map(c=>card(c,'favorites')).join(''):`<div class="empty">Ты ещё ничего не сохранил.<br><br>Нажми на ♥ в объявлении, чтобы вернутьcя к машине позже.</div>`;if(doRender)hydratePhotoPlaceholders();else hydratePhotoPlaceholders();
}

function openGallery(c,arr){
 const slides=arr.length?arr:[{url:fallbackPhoto(c.photoQuery),source:''}];
 let idx=0;
 $('#modal').classList.remove('hidden');
 const renderSlide=()=>{$('.galleryMain img').src=slides[idx].url;$('.galleryCounter').textContent=`${idx+1}/${slides.length}`;$('.sourceLink').href=slides[idx].source||'#';$('.sourceLink').style.display=slides[idx].source?'inline-block':'none';document.querySelectorAll('.thumb').forEach((x,i)=>x.classList.toggle('on',i===idx));};
 $('#modal').innerHTML=`<div class="sheet photoSheet"><div class="sheetHead"><b>Фото ${c.brand} ${c.model}</b><button class="x" onclick="closeModal()">×</button></div><div class="galleryMain"><img src="${slides[0].url}" alt="${c.brand} ${c.model}"><button class="gPrev">‹</button><button class="gNext">›</button><span class="galleryCounter">1/${slides.length}</span></div><div class="thumbs">${slides.map((x,i)=>`<button class="thumb ${i===0?'on':''}" onclick="window._galleryIndex(${i})"><img src="${x.url}"></button>`).join('')}</div><a class="sourceLink" target="_blank" rel="noopener">Источник фото</a></div>`;
 window._galleryIndex=i=>{idx=(i+slides.length)%slides.length;renderSlide()};$('.gPrev').onclick=()=>window._galleryIndex(idx-1);$('.gNext').onclick=()=>window._galleryIndex(idx+1);
}

async function openCar(id,archived=false){
 const c=cars.find(x=>x.id===id);if(!c)return;
 $('#modal').classList.remove('hidden');$('#modal').innerHTML=`<div class="sheet"><div class="sheetHero clickable" onclick="showCarPhotos(${id})"><div class="photoBigLoader">Загружаем фото ${c.brand} ${c.model}…</div></div><div class="sheetHead"><h2>${c.brand} ${c.model}</h2><button class="x" onclick="closeModal()">×</button></div>${archived||removedIds.has(id)?`<div class="archivedBanner">Объявление снято с продажи. Карточка и сохранённая информация остались в избранном.</div>`:''}<div class="priceBig">${money(c.price)} ₽</div>
 <div class="meta"><div><small>Год</small><b>${c.year}</b></div><div><small>Пробег</small><b>${money(c.mileage)} км</b></div><div><small>Владельцы</small><b>${c.owners}</b></div><div><small>Год регистрации</small><b>${c.importYear}</b></div><div><small>Кузов</small><b>${c.body}</b></div><div><small>Коробка</small><b>${gearboxOf(c.engine)}</b></div></div>
 <div class="smallLine">Объявление размещено: <b>${c.posted.toLocaleDateString('ru-RU')} · ${c.posted.toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'})}</b></div>
 <div class="box"><small>ОПИСАНИЕ ПРОДАВЦА</small>${c.desc}</div><div class="box"><small>ПЛЮС</small><span class="good">✓ ${c.pros}</span></div><div class="box"><small>ЧТО ВЫЗЫВАЕТ ВОПРОСЫ</small><span class="bad">⚠ ${c.cons}</span></div>
 <div class="listingData"><span>Срочность: <b>${c.urgency}</b></span><span>Причина: <b>${c.reason}</b></span><span>Продавец: <b>${c.seller.name}</b></span></div>
 <div class="chatBox"><div class="chatHeader">Чат с продавцом <span>${c.seller.style}</span></div><div class="chatMessages" id="chatMessages"><div class="msg seller">Продавец: «Да, машина ещё в продаже. Спрашивай, расскажу что знаю.»</div></div><div class="quickQuestions"><button onclick="askSeller(${id},'body')">Что с кузовом?</button><button onclick="askSeller(${id},'tech')">Что делали по технике?</button><button onclick="askSeller(${id},'reason')">Почему продаёте?</button></div><div class="chatInput"><input id="sellerInput" placeholder="Напиши вопрос продавцу…"><button onclick="sendSellerMessage(${id})">→</button></div></div>
 <div class="checks"><div><div><b>Автотека</b><small>История ДТП, пробега, владельцев</small></div><button class="buy secondary" onclick="buyAutoteka(${id})">150 ₽</button></div><div><div><b>VIN-проверка</b><small>Идентификатор и дополнительные отметки</small></div><button class="buy secondary" onclick="buyVin(${id})">250 ₽</button></div></div>
 <div class="actions">${archived||removedIds.has(id)?'<button class="buy secondary" onclick="toggleFavorite(event,'+id+')">♥ Избранное</button>':`<button class="buy secondary" onclick="haggle(${id})">Торг</button><button class="buy" onclick="buy(${id},${c.price})">Купить</button>`}</div><button class="buy close" onclick="closeModal()">Закрыть</button></div>`;
 loadHeroPhoto(c); hydrateModalChat(c);
}
async function loadHeroPhoto(c){const box=$('.sheetHero');const arr=await fetchCommons(c.photoQuery,5);const img=arr[0]?.url||fallbackPhoto(c.photoQuery);box.innerHTML=`<img src="${img}" alt="${c.brand} ${c.model}"><span class="galleryHint">Нажми, чтобы открыть фотогалерею</span>`;box.dataset.imgs=encodeURIComponent(JSON.stringify(arr));}
async function showCarPhotos(id){const c=cars.find(x=>x.id===id);if(!c)return;const arr=await fetchCommons(c.photoQuery,5);openGallery(c,arr)}
function hydrateModalChat(c){const input=$('#sellerInput');if(input)input.addEventListener('keydown',e=>{if(e.key==='Enter')sendSellerMessage(c.id)})}
function sellerReply(c,type){
 const variants={body:[`По кузову есть пара косметических моментов, но крупные ремонты я бы не стал скрывать.`, `Красилось ${hash(c.id*4)>0.5?'одно':'два'} элемента, остальное лучше посмотреть при встрече.`, `Есть небольшая косметика, на фото должна быть видна. Если что-то смущает — покажу на месте.`],tech:[`Последнее обслуживание делал не так давно, но перед покупкой всё равно рекомендую свою диагностику.`,`Масла и фильтры менялись, остальное могу рассказать по чекам.`,`По технике ездит нормально, но я не специалист по диагностике — лучше проверить на СТО.`],reason:[`Собираюсь брать машину поновее, поэтому эта стала лишней.`,`Нужны деньги на другую покупку, поэтому готов немного обсуждать цену.`,`В семье появилась другая машина, две держать смысла нет.`]};return pick(variants[type]||variants.body,c.id*21.5)}
function askSeller(id,type){const c=cars.find(x=>x.id===id);const box=$('#chatMessages');if(!c||!box)return;box.innerHTML+=`<div class="msg you">Ты: «${type==='body'?'Что с кузовом?':type==='tech'?'Что делали по технике?':'Почему продаёте?'}»</div><div class="msg seller">Продавец: «${sellerReply(c,type)}»</div>`;box.scrollTop=box.scrollHeight}
function sendSellerMessage(id){const input=$('#sellerInput'),box=$('#chatMessages'),c=cars.find(x=>x.id===id);if(!input||!box||!c)return;const q=input.value.trim();if(!q)return;box.innerHTML+=`<div class="msg you">Ты: «${q.replace(/</g,'&lt;')}»</div><div class="msg seller">Продавец: «${genericReply(c,q)}»</div>`;input.value='';box.scrollTop=box.scrollHeight}
function genericReply(c,q){const s=q.toLowerCase();if(s.includes('цена')||s.includes('торг')||s.includes('скид'))return `Небольшой торг у машины возможен. Сильно цену опускать не буду.`;if(s.includes('масл')||s.includes('двиг')||s.includes('мотор'))return sellerReply(c,'tech');if(s.includes('бит')||s.includes('дтп')||s.includes('куз'))return sellerReply(c,'body');if(s.includes('пробег'))return `По одометру сейчас ${money(c.mileage)} км. Если хотите быть уверены — лучше заказать отчёт.`;return `Честно скажу, что знаю сам. Остальное лучше проверить на осмотре, поэтому и предлагаю спокойно посмотреть машину.`}
function haggle(id){const c=cars.find(x=>x.id===id);if(!c)return;const off=Math.round(c.price*(0.92+Math.random()*0.055));const el=$('.actions');el.innerHTML=`<div class="dealOffer">Продавец подумал и готов отдать за <b>${money(off)} ₽</b>.</div><button class="buy secondary" onclick="buy(${id},${off})">Забрать за ${money(off)} ₽</button><button class="buy close" onclick="openCar(${id})">Вернуться</button>`}
function buy(id,p){const c=cars.find(x=>x.id===id);if(!c)return;if(boughtIds.has(id)||removedIds.has(id)){showToast('Этот экземпляр уже недоступен.');return}if(balance<p){showToast('Не хватает денег на покупку.');return}balance-=p;boughtIds.add(id);garage.push({...c,buyPrice:p,diagnosed:false,serviceIssues:[],ready:false,autotekaBought:false,vinBought:false,purchasedAt:Date.now(),salePrice:null});save();closeModal();render();showToast(`${c.brand} ${c.model} куплена. Объявление исчезло с рынка.`)}

const serviceBase=[
 ['Замена масла и масляного фильтра','engine',6500],['Замена свечей зажигания','engine',4200],['Прокладка клапанной крышки потеет','engine',6200],['Требуется замена приводного ремня','engine',7600],['Передние тормозные колодки изношены','brakes',4700],['Задние тормозные колодки имеют заметный износ','brakes',4200],['Передние тормозные диски близки к замене','brakes',9800],['Тормозная жидкость требует замены','brakes',2600],['Втулки стабилизатора имеют люфт','suspension',3900],['Передние стойки/амортизаторы требуют внимания','suspension',13500],['Сайлентблоки рычагов имеют износ','suspension',9200],['Ступичный подшипник начинает шуметь','suspension',9800],['Масло в коробке желательно обновить','transmission',7500],['Есть начальный износ сцепления','transmission',17500],['Нужна диагностика мехатроника/робота','transmission',9500],['Слабый заряд аккумулятора','electrical',6900],['Есть ошибка одного из электронных блоков','electrical',5200],['Есть утечка тока, нужна проверка','electrical',4800],['Локальный скол/царапина требует косметики','body',4800],['Передний бампер имеет следы парковочных контактов','body',7200]
];
const brandCost={LADA:.72,BMW:1.35,Kia:.95,Hyundai:.9,Volkswagen:1.08,Toyota:1.08,'Mercedes-Benz':1.5,Audi:1.4,Ford:.98,Skoda:1.0,Renault:.82,Nissan:1.02,Mazda:1.05,Honda:1.05,Chevrolet:1.08};
function issueCount(c){return c.state==='Отличное'?(hash(c.id*30)>.63?1:0):c.state==='Хорошее'?(1+Math.floor(hash(c.id*31)*2)):(2+Math.floor(hash(c.id*32)*3))}
function generateIssues(c){const count=issueCount(c), pool=[...serviceBase].sort((a,b)=>hash(c.id*a[2])-hash(c.id*b[2]));const used=[];for(const it of pool){if(used.length>=count)break;if(c.mileage<90000 && it[1]==='transmission' && hash(c.id*4)>0.35)continue;used.push({name:it[0],cat:it[1],cost:Math.round(it[2]*brandCost[c.brand]*(0.9+hash(c.id*it[2])*.22)),done:false});}return used}
function garageView(doRender=true){view='garage';setActiveNav();renderBrands();$('#reset').style.display='none';$('#title').textContent='Мой гараж';$('#count').textContent=`${garage.length} автомобилей`;
 if(!garage.length){$('#catalog').innerHTML='<div class="empty">Гараж пуст.<br><br>Перейди в «Рынок» и купи первый автомобиль.</div>';return}
 $('#catalog').innerHTML=garage.map((c,i)=>garageCard(c,i)).join('');hydratePhotoPlaceholders();}
function garageCard(c,i){const open=c.diagnosed?c.serviceIssues.filter(x=>!x.done):[];const status=!c.diagnosed?'Не проверено':open.length?`Есть ${open.length} замеч.`:'Готово к продаже';return `<article class="card garageCard"><div class="photo" data-photo-query="${encodeURIComponent(c.photoQuery)}"><div class="photoLoader">Загрузка фото…</div><span class="badge">${status}</span></div><div class="body"><div class="name">${c.brand} ${c.model}</div><div class="sub">${c.year} · ${money(c.mileage)} км · ${gearboxOf(c.engine)}</div><div class="chips"><span class="chip">Покупка: ${money(c.buyPrice)} ₽</span><span class="chip">${c.owners} ${c.owners===1?'владелец':'владельца'}</span></div>${!c.diagnosed?`<button class="buy" onclick="diagnose(${i})">Проверить состояние · 2 000 ₽</button>`:renderIssues(c,i)}<div class="footerNote">После проверки ты узнаешь конкретные работы, а не абстрактный «ремонт ≈ …».</div></div></article>`}
function renderIssues(c,i){const open=c.serviceIssues.filter(x=>!x.done);if(!open.length)return `<div class="profit">Диагностика пройдена. Все найденные работы закрыты.</div><button class="buy" onclick="prepare(${i})">Подготовить авто к продаже</button>`;return `<div class="serviceBox"><div class="serviceTitle">Что нашли на СТО</div>${open.map((x,j)=>`<div class="issue"><div><b>${x.name}</b><small>Работа + расходники, ориентир</small></div><strong>${money(x.cost)} ₽</strong><button class="smallBtn" onclick="fixIssue(${i},${j})">Устранить</button></div>`).join('')}</div>`}
function diagnose(i){const c=garage[i];if(balance<2000){showToast('Не хватает денег на диагностику.');return}balance-=2000;c.diagnosed=true;c.serviceIssues=generateIssues(c);save();garageView();showToast('СТО закончило проверку. Найдены конкретные моменты.');}
function fixIssue(i,j){const c=garage[i],x=c.serviceIssues.filter(y=>!y.done)[j];if(!x)return;if(balance<x.cost){showToast('Не хватает денег на эту работу.');return}balance-=x.cost;x.done=true;save();garageView();showToast('Работа выполнена.');}
function prepare(i){const c=garage[i];if(!c.diagnosed){showToast('Сначала нужно провести диагностику.');return}if(c.serviceIssues.some(x=>!x.done)){showToast('Сначала закрой найденные работы.');return}c.ready=true;save();garageView();showToast('Автомобиль подготовлен к продаже.');}
function sell(i){const c=garage[i];if(!c.ready){showToast('Сначала подготовь автомобиль.');return}const demand=(0.98+hash(c.id*52)*.22);const sale=Math.round(c.buyPrice*demand);const serviceSpent=2000+(c.serviceIssues||[]).reduce((sum,x)=>sum+x.cost,0);const result=sale-c.buyPrice-serviceSpent;balance+=sale;profitTotal+=result;garage.splice(i,1);save();garageView();showToast(`Продано за ${money(sale)} ₽. Результат сделки: ${result>=0?'+':''}${money(result)} ₽.`)}

function buyAutoteka(id){const g=garage.find(x=>x.id===id)||null;const c=cars.find(x=>x.id===id);if(g&&!g.autotekaBought){if(balance<150){showToast('Не хватает 150 ₽ на Автотеку.');return}balance-=150;g.autotekaBought=true;save();showReport('Автотека',c||g,true);return}if(g?.autotekaBought)return showReport('Автотека',c||g,true);if(balance<150){showToast('Не хватает 150 ₽.');return}balance-=150;save();showReport('Автотека',c,false)}
function buyVin(id){const g=garage.find(x=>x.id===id);const c=cars.find(x=>x.id===id);if(g&&!g.vinBought){if(balance<250){showToast('Не хватает 250 ₽ на VIN-проверку.');return}balance-=250;g.vinBought=true;save();showReport('VIN-проверка',c||g,false);return}showReport('VIN-проверка',c||g,false)}
function showReport(kind,c,fromGarage){if(!c)return;let content='';if(kind==='Автотека'){const accident=c.accident?`Есть ДТП: ${pick(['переднее левое крыло и бампер','правое заднее крыло и дверь','передний бампер и капот','левая задняя часть кузова'],c.id*60)}`:'ДТП в отчёте не обнаружены';const rollback=c.rollback?`Обнаружено расхождение: одометр показывает ${money(c.mileage)} км, в истории встречается ${money(c.historyMileage)} км.`:'По доступной истории пробег выглядит последовательным.';content=`<div class="reportGrid"><div><small>Владельцы</small><b>${c.owners}</b></div><div><small>Год регистрации</small><b>${c.importYear}</b></div><div><small>ДТП</small><b>${accident}</b></div><div><small>Пробег</small><b>${rollback}</b></div><div><small>Последний зафиксированный пробег</small><b>${money(c.historyMileage)} км</b></div><div><small>Старые объявления</small><b>${1+Math.floor(hash(c.id*61)*4)}</b></div></div><div class="reportNote">Отчёт игрового сервиса «Автотека». Данные специально сделаны неполными, чтобы проверка помогала принимать решение, а не давала гарантированный ответ.</div>`}else{content=`<div class="vinBig">${c.vin}</div><div class="reportGrid"><div><small>Марка / модель</small><b>${c.brand} ${c.model}</b></div><div><small>Год</small><b>${c.year}</b></div><div><small>Кузов</small><b>${c.body}</b></div><div><small>Доп. отметка</small><b>${hash(c.id*64)>.82?'Есть отметка, нужна проверка документов':'Явных дополнительных отметок не найдено'}</b></div></div>`}$('#modal').innerHTML=`<div class="sheet"><div class="sheetHead"><h2>${kind}</h2><button class="x" onclick="closeModal()">×</button></div>${content}<button class="buy close" onclick="closeModal()">Закрыть</button></div>`}

function setActiveNav(){document.querySelectorAll('.nav').forEach(b=>b.classList.remove('active'));if(view==='market')$('#marketTab').classList.add('active');if(view==='favorites')$('#favoritesTab').classList.add('active');if(view==='garage')$('#garageTab').classList.add('active')}
function showMarket(){view='market';setActiveNav();render()}
function showFavorites(){view='favorites';setActiveNav();favoritesView()}
function closeModal(){$('#modal').classList.add('hidden')}
function showToast(t){const el=$('#toast');el.textContent=t;el.classList.remove('hidden');clearTimeout(window._toastTimer);window._toastTimer=setTimeout(()=>el.classList.add('hidden'),2800)}

function simulateMarket(){const candidates=cars.filter(c=>favoriteIds.has(c.id)&&!removedIds.has(c.id)&&!boughtIds.has(c.id));if(!candidates.length)return;if(hash(Date.now()/60000)>0.94){const c=pick(candidates,Date.now()/60000);removedIds.add(c.id);save();if(view==='favorites')favoritesView();else render();showToast(`${c.brand} ${c.model}: продавец снял объявление с продажи.`)}}

$('#marketTab').onclick=showMarket;$('#favoritesTab').onclick=showFavorites;$('#garageTab').onclick=garageView;$('#reset').onclick=()=>{filters={priceMin:'',priceMax:'',yearMin:'',mileageMax:'',gearbox:'',bodyType:'',ownersMax:'',sortBy:'new'};['priceMin','priceMax','yearMin','mileageMax','gearbox','bodyType','ownersMax','sortBy'].forEach(id=>{const e=$('#'+id);e.value=filters[id]||''});selected='Все';view='market';render()};
$('#filterOpen').onclick=()=>$('#filterPanel').classList.toggle('hidden');$('#applyFilters').onclick=()=>{filters={priceMin:$('#priceMin').value,priceMax:$('#priceMax').value,yearMin:$('#yearMin').value,mileageMax:$('#mileageMax').value,gearbox:$('#gearbox').value,bodyType:$('#bodyType').value,ownersMax:$('#ownersMax').value,sortBy:$('#sortBy').value};view='market';render()};
$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});

updateTop();renderBrands();render();setInterval(simulateMarket,60000);
