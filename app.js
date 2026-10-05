const cars=[{"id": 1, "brand": "LADA", "model": "ВАЗ-2106", "year": 2001, "mileage": 168000, "state": "Нормальное", "price": 175000, "repair": 22000, "img": "https://images.unsplash.com/photo-1493238792000-8113da705763", "engine": "1.6 л · бензин · МКПП", "pros": "Простая конструкция, дешёвое обслуживание.", "cons": "Возрастной кузов, возможна коррозия. Электрика требует проверки.", "desc": "Авто на ходу, салон уставший. Есть мелкие следы эксплуатации."}, {"id": 2, "brand": "LADA", "model": "ВАЗ-2114", "year": 2012, "mileage": 104000, "state": "Хорошее", "price": 335000, "repair": 16000, "img": "https://images.unsplash.com/photo-1555215695-3004980ad54e", "engine": "1.6 л · бензин · МКПП", "pros": "Дешёвые запчасти, понятная конструкция.", "cons": "Возраст, возможны проблемы с кузовом.", "desc": "Ровный кузов, двигатель запускается уверенно."}, {"id": 3, "brand": "LADA", "model": "Vesta", "year": 2020, "mileage": 73000, "state": "Отличное", "price": 930000, "repair": 18000, "img": "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d", "engine": "1.6 л · бензин · МКПП", "pros": "Современный салон, хорошая ликвидность.", "cons": "Проверить подвеску и историю обслуживания.", "desc": "Один владелец, сервисная история в объявлении."}, {"id": 4, "brand": "BMW", "model": "E60 520i", "year": 2005, "mileage": 218000, "state": "Нормальное", "price": 780000, "repair": 95000, "img": "https://images.unsplash.com/photo-1555215695-3004980ad54e", "engine": "2.2 л · бензин · АКПП · M54B22", "pros": "Комфорт, динамика, интересный спрос у любителей E60.", "cons": "Возрастная электроника, подвеска и система охлаждения требуют внимания.", "desc": "Кузов без крупных ДТП по словам продавца. Есть косметика по бамперам."}, {"id": 5, "brand": "BMW", "model": "E60 525d", "year": 2007, "mileage": 264000, "state": "Хорошее", "price": 1120000, "repair": 110000, "img": "https://images.unsplash.com/photo-1523987355523-c7b5b84f2c2a", "engine": "2.5 л · дизель · АКПП · M57", "pros": "Тяговитый дизель, комфорт, хорошая трассовая машина.", "cons": "Большой пробег; перед покупкой проверить турбину и топливную систему.", "desc": "АКПП переключает плавно, есть небольшие следы эксплуатации."}, {"id": 6, "brand": "BMW", "model": "E60 530i", "year": 2006, "mileage": 189000, "state": "Хорошее", "price": 1250000, "repair": 80000, "img": "https://images.unsplash.com/photo-1555215695-3004980ad54e", "engine": "3.0 л · бензин · АКПП · N52", "pros": "Мощный атмосферный мотор, комфорт и управляемость.", "cons": "Возраст, подвеска и охлаждение требуют диагностики.", "desc": "Хорошая комплектация, салон сохранён."}, {"id": 7, "brand": "BMW", "model": "F10 520d", "year": 2014, "mileage": 172000, "state": "Нормальное", "price": 1450000, "repair": 120000, "img": "https://images.unsplash.com/photo-1525609004556-c46c7cf7cf81", "engine": "2.0 л · дизель · АКПП", "pros": "Комфорт, современный салон.", "cons": "Большой пробег, дорогие узлы.", "desc": "Есть сервисные чеки, косметические дефекты."}, {"id": 8, "brand": "BMW", "model": "F30 320i", "year": 2015, "mileage": 134000, "state": "Хорошее", "price": 1580000, "repair": 65000, "img": "https://images.unsplash.com/photo-1502877338535-766e1452684a", "engine": "2.0 л · бензин · АКПП", "pros": "Управляемость, ликвидность.", "cons": "Проверить цепь/масляную систему и подвеску.", "desc": "Ровный кузов, два комплекта колёс."}, {"id": 9, "brand": "Kia", "model": "Rio", "year": 2015, "mileage": 119000, "state": "Хорошее", "price": 690000, "repair": 25000, "img": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd", "engine": "1.6 л · бензин · АКПП", "pros": "Ликвидность, доступные запчасти.", "cons": "Шумоизоляция и возрастные элементы подвески.", "desc": "Хороший городской вариант, есть косметика."}, {"id": 10, "brand": "Kia", "model": "Ceed", "year": 2017, "mileage": 102000, "state": "Хорошее", "price": 980000, "repair": 30000, "img": "https://images.unsplash.com/photo-1550355291-bbee04a92027", "engine": "1.6 л · бензин · АКПП", "pros": "Практичный салон, хорошая ликвидность.", "cons": "Проверить коробку и подвеску.", "desc": "Салон ухоженный, обслуживание по регламенту."}, {"id": 11, "brand": "Kia", "model": "Optima", "year": 2018, "mileage": 126000, "state": "Нормальное", "price": 1350000, "repair": 50000, "img": "https://images.unsplash.com/photo-1542362567-b07e54358753", "engine": "2.4 л · бензин · АКПП", "pros": "Просторный салон, комфорт.", "cons": "Расход топлива, проверить историю ДТП.", "desc": "Есть косметические сколы."}, {"id": 12, "brand": "Kia", "model": "Sportage", "year": 2020, "mileage": 84000, "state": "Отличное", "price": 1850000, "repair": 35000, "img": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf", "engine": "2.0 л · бензин · АКПП", "pros": "Популярный кроссовер, ликвидность.", "cons": "Дороже обслуживание.", "desc": "Без серьёзных замечаний со слов продавца."}, {"id": 13, "brand": "Hyundai", "model": "Solaris", "year": 2017, "mileage": 93000, "state": "Хорошее", "price": 890000, "repair": 24000, "img": "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d", "engine": "1.6 л · бензин · АКПП", "pros": "Надёжный городской вариант, недорогие запчасти.", "cons": "Шумоизоляция, возрастные элементы.", "desc": "Салон аккуратный, есть мелкие сколы."}, {"id": 14, "brand": "Hyundai", "model": "Creta", "year": 2019, "mileage": 76000, "state": "Хорошее", "price": 1350000, "repair": 32000, "img": "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a", "engine": "2.0 л · бензин · АКПП", "pros": "Высокий клиренс, спрос на вторичке.", "cons": "Проверить полный привод, если установлен.", "desc": "Комплектация выше средней."}, {"id": 15, "brand": "Hyundai", "model": "Tucson", "year": 2020, "mileage": 91000, "state": "Отличное", "price": 1980000, "repair": 40000, "img": "https://images.unsplash.com/photo-1511919884226-fd3cad34687c", "engine": "2.0 л · бензин · АКПП", "pros": "Комфортный кроссовер, хороший спрос.", "cons": "Расход и стоимость обслуживания.", "desc": "Есть история обслуживания."}, {"id": 16, "brand": "Volkswagen", "model": "Polo", "year": 2019, "mileage": 76000, "state": "Отличное", "price": 980000, "repair": 18000, "img": "https://images.unsplash.com/photo-1547038577-da80abbc4f19", "engine": "1.6 л · бензин · АКПП", "pros": "Ликвидность, экономичность.", "cons": "Проверить коробку и подвеску.", "desc": "Аккуратный автомобиль без заметных дефектов."}, {"id": 17, "brand": "Volkswagen", "model": "Passat B7", "year": 2014, "mileage": 176000, "state": "Нормальное", "price": 980000, "repair": 60000, "img": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2", "engine": "1.8 л · бензин · DSG", "pros": "Простор, комфорт.", "cons": "Коробка и возрастные узлы требуют диагностики.", "desc": "Есть косметические дефекты."}, {"id": 18, "brand": "Toyota", "model": "Camry", "year": 2017, "mileage": 118000, "state": "Хорошее", "price": 1850000, "repair": 45000, "img": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2", "engine": "2.5 л · бензин · АКПП", "pros": "Надёжность и ликвидность.", "cons": "Цена покупки выше.", "desc": "Ухоженный салон, два комплекта колёс."}, {"id": 19, "brand": "Mercedes-Benz", "model": "E-Class W212", "year": 2013, "mileage": 165000, "state": "Хорошее", "price": 1750000, "repair": 85000, "img": "https://images.unsplash.com/photo-1563720223185-11003d516935", "engine": "2.0 л · бензин · АКПП", "pros": "Комфорт, престиж, хороший салон.", "cons": "Дорогие запчасти и электроника.", "desc": "Есть сервисные документы."}, {"id": 20, "brand": "Audi", "model": "A4 B9", "year": 2017, "mileage": 121000, "state": "Хорошее", "price": 1650000, "repair": 70000, "img": "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6", "engine": "2.0 л · бензин · S tronic", "pros": "Динамика, интерьер.", "cons": "Требует тщательной диагностики коробки.", "desc": "Кузов выглядит аккуратно."}];
const descriptionSets={
 "LADA":[
  c=>`Автомобиль используется по назначению, по кузову есть обычные следы эксплуатации. На холодную запускается без лишних вопросов. Перед продажей желательно проверить ходовую часть.`,
  c=>`Владелец описывает машину как ухоженную для своего возраста. Салон сохранён, по кузову есть небольшие косметические моменты. Технически без заявленных серьёзных проблем.`,
  c=>`Машина на уверенном ходу. Есть мелкие возрастные недочёты, которые заметны при внимательном осмотре. Продавец готов показать авто и документы.`
 ],
 "BMW":[
  c=>`Автомобиль обслуживался по мере необходимости. Мотор работает ровно, коробка без резких переключений. По кузову есть небольшая косметика, серьёзные вложения лучше оценить после диагностики.`,
  c=>`Салон аккуратный, основные функции автомобиля работают штатно. Продавец отмечает нормальную работу силового агрегата. Есть несколько возрастных моментов по кузову и подвеске.`,
  c=>`Машина выглядит достойно с учётом пробега. Запуск уверенный, посторонних звуков со стороны двигателя со слов владельца нет. Перед сделкой рекомендуется полноценная компьютерная и ходовая диагностика.`
 ],
 "Kia":[
  c=>`Городская эксплуатация, салон без сильного износа. Двигатель запускается ровно, коробка ведёт себя предсказуемо. По кузову присутствуют небольшие следы использования.`,
  c=>`Автомобиль в повседневном состоянии: без критичных замечаний по словам владельца. Есть локальные сколы и потёртости. Обслуживание проводилось регулярно, подтверждение можно посмотреть при осмотре.`,
  c=>`Кроссовер/легковой автомобиль использовался спокойно. Силовой агрегат работает штатно, уровень технических жидкостей в норме со слов продавца. Перед покупкой можно провести диагностику.`
 ],
 "Hyundai":[
  c=>`Машина ухожена для своего пробега. В салоне без заметных повреждений, запуск и работа двигателя стабильные. На кузове есть несколько небольших косметических отметин.`,
  c=>`Автомобиль эксплуатировался преимущественно в городе. По технике продавец серьёзных нареканий не указывает. Есть обычные следы парковки и эксплуатации, которые лучше оценить вживую.`,
  c=>`Состояние соответствует возрасту и пробегу. Двигатель работает ровно, трансмиссия переключается без явных проблем со слов владельца. Документы и историю обслуживания готовы показать.`
 ],
 "Volkswagen":[
  c=>`Автомобиль поддерживали в рабочем состоянии, салон аккуратный. Двигатель заводится без затруднений, по коробке продавец критичных замечаний не отмечает. Есть возрастные косметические нюансы.`,
  c=>`По машине есть следы обычной эксплуатации, без попытки скрыть возраст. Основные узлы работают штатно со слов владельца. Перед покупкой разумно проверить подвеску и трансмиссию.`,
  c=>`Ухоженный экземпляр с несколькими мелкими недостатками по кузову. Техника обслуживалась, запуск уверенный. Историю обслуживания можно обсудить непосредственно с продавцом.`
 ],
 "Toyota":[
  c=>`Автомобиль использовался ежедневно, но за состоянием следили. Салон чистый, двигатель работает ровно. По кузову есть небольшие следы эксплуатации, без критичных замечаний со слов продавца.`,
  c=>`Машина выглядит аккуратно, обслуживание проводилось по необходимости. Силовой агрегат и коробка работают штатно. Перед сделкой продавец не возражает против проверки на сервисе.`,
  c=>`Экземпляр без явных серьёзных проблем по словам владельца. Есть мелкие косметические недостатки, характерные для пробега. Техническое состояние лучше подтвердить диагностикой.`
 ],
 "Mercedes-Benz":[
  c=>`Автомобиль обслуживался с учётом возраста. Салон в хорошем состоянии, электрооборудование работает без заявленных серьёзных сбоев. По кузову присутствуют небольшие косметические моменты.`,
  c=>`Машина сохранилась достойно, учитывая пробег. Двигатель запускается уверенно, коробка работает плавно со слов продавца. Перед покупкой рекомендуется проверить подвеску и электронику.`,
  c=>`Владелец следил за техническим состоянием и готов показать документы по обслуживанию. Есть обычные следы эксплуатации и отдельные косметические недочёты.`
 ],
 "Audi":[
  c=>`Автомобиль обслуживался регулярно, салон аккуратный. Двигатель работает ровно, трансмиссия без заявленных резких переключений. По кузову есть мелкие косметические моменты.`,
  c=>`Экземпляр выглядит ухоженным. Основные системы работают штатно со слов владельца, но перед сделкой рекомендуется проверить коробку и подвеску.`,
  c=>`Машина использовалась в обычном режиме. По технике серьёзных нареканий продавец не указывает. Есть несколько небольших следов эксплуатации, которые видны на фото/при осмотре.`
 ]
};
function variedDescription(c){
 const set=descriptionSets[c.brand]||descriptionSets["LADA"];
 return set[(c.id*7+c.year)%set.length](c);
}
function applyVariedDescriptions(){cars.forEach(c=>{c.desc=variedDescription(c)})}
applyVariedDescriptions();
const brands=["Все","LADA","BMW","Kia","Hyundai","Volkswagen","Toyota","Mercedes-Benz","Audi"];
let selected="Все";
let balance=Number(localStorage.getItem("perekup_balance")||150000);
let garage=JSON.parse(localStorage.getItem("perekup_garage")||"[]");
let boughtIds=new Set(JSON.parse(localStorage.getItem("perekup_bought")||"[]"));
let profitTotal=Number(localStorage.getItem("perekup_profit")||0);
const $=s=>document.querySelector(s);
const money=n=>n.toLocaleString("ru-RU");
function saveState(){
 localStorage.setItem("perekup_garage",JSON.stringify(garage));
 localStorage.setItem("perekup_bought",JSON.stringify([...boughtIds]));
 localStorage.setItem("perekup_profit",profitTotal);
 localStorage.setItem("perekup_balance",balance);
 $("#balance").textContent=money(balance);
 $("#garageCount").textContent=garage.length;
}
function renderBrands(){
 $("#brands").innerHTML=brands.map(b=>`<button class="brand ${b===selected?"active":""}" onclick="filterBrand('${b}')">${b}</button>`).join("");
}
function render(){
 const list=(selected==="Все"?cars:cars.filter(c=>c.brand===selected)).filter(c=>!boughtIds.has(c.id));
 $("#title").textContent=selected==="Все"?"Все автомобили":selected;
 $("#count").textContent=`${list.length} доступных объявлений`;
 $("#catalog").innerHTML=list.length?list.map(c=>`<article class="card"><div class="photo"><img src="${c.img}?auto=format&fit=crop&w=1000&q=85" alt="${c.brand} ${c.model}"><span class="badge">${c.state}</span><button class="favorite">♡</button></div><div class="body"><div class="name">${c.brand} ${c.model}</div><div class="sub">${c.year} год · ${money(c.mileage)} км · ${c.engine}</div><div class="chips"><span class="chip">Ремонт ≈ ${money(c.repair)} ₽</span><span class="chip">Частник</span></div><div class="price">${money(c.price)} ₽</div><button class="buy" onclick="openCar(${c.id})">Подробнее об авто</button></div></article>`).join(""):`<div class="empty">В этой категории сейчас нет доступных объявлений.</div>`;
}
function filterBrand(b){selected=b;renderBrands();render()}
function sellerPhrase(c){
 const phrases=[
  `Авто ещё в продаже. Можете посмотреть вживую, по цене обсудим после осмотра.`,
  `Машина на ходу, скрывать по ней особо нечего. Если заинтересовала — приезжайте смотреть.`,
  `По состоянию всё написал в объявлении. Небольшой торг возможен у автомобиля.`,
  `Продаю без спешки. Покажу машину и расскажу, что делалось по обслуживанию.`,
  `Если готовы покупать после осмотра, немного уступлю. Сначала лучше посмотреть авто.`
 ];
 return phrases[(c.id*11)%phrases.length]+`»`;
}
function openCar(id){
 let c=cars.find(x=>x.id===id);
 $("#modal").classList.remove("hidden");
 $("#modal").innerHTML=`<div class="sheet"><div class="sheetHero"><img src="${c.img}?auto=format&fit=crop&w=1200&q=90"></div><h2>${c.brand} ${c.model}</h2><div class="priceBig">${money(c.price)} ₽</div>
 <div class="meta"><div><small>Год</small><b>${c.year}</b></div><div><small>Пробег</small><b>${money(c.mileage)} км</b></div><div><small>Состояние</small><b>${c.state}</b></div><div><small>Двигатель</small><b>${c.engine}</b></div><div><small>Подготовка</small><b>${money(c.repair)} ₽</b></div><div><small>Продавец</small><b>Частник</b></div></div>
 <div class="box"><small>ОПИСАНИЕ</small>${c.desc}</div><div class="box"><small>ПЛЮСЫ</small><span class="good">✓ ${c.pros}</span></div><div class="box"><small>МИНУСЫ</small><span class="bad">⚠ ${c.cons}</span></div>
 <div class="chat">Продавец: «${sellerPhrase(c)}</div>
 <div class="actions"><button class="buy secondary" onclick="haggle(${id})">Попробовать торг</button><button class="buy" onclick="buy(${id},${c.price})">Купить</button></div>
 <button class="buy close" onclick="closeModal()">Закрыть</button></div>`
}
function haggle(id){
 let c=cars.find(x=>x.id===id),offer=Math.round(c.price*(.91+Math.random()*.06));
 $(".chat").innerHTML=`Продавец: «Ладно, могу отдать за <b>${money(offer)} ₽</b>.»`;
 $(".actions").innerHTML=`<button class="buy" onclick="buy(${id},${offer})">Забрать за ${money(offer)} ₽</button>`;
}
function buy(id,p){
 let c=cars.find(x=>x.id===id);
 if(!c){alert("Объявление больше недоступно.");return}
 if(boughtIds.has(id)){alert("Этот экземпляр уже продан.");return}
 if(balance<p){alert("Не хватает денег.");return}
 balance-=p;
 boughtIds.add(id);
 garage.push({...c,buyPrice:p,repairPaid:false,ready:false,purchasedAt:Date.now(),salePrice:null});
 saveState(); closeModal(); render(); garageView();
 alert(`${c.brand} ${c.model} куплена и перенесена в гараж. Объявление снято с рынка.`);
}
function garageView(){
 $("#title").textContent="Мой гараж"; $("#count").textContent=`${garage.length} автомобилей`;
 $("#brands").innerHTML="";
 $("#reset").style.display="none";
 if(!garage.length){$("#catalog").innerHTML='<div class="empty">Гараж пуст.<br><br>Перейди в «Рынок» и купи первый автомобиль.</div>';return}
 $("#catalog").innerHTML=garage.map((c,i)=>`<article class="card garageCard"><div class="photo"><img src="${c.img}?auto=format&fit=crop&w=1000&q=85"><span class="badge">${c.ready?"Готов к продаже":"В работе"}</span></div><div class="body"><div class="name">${c.brand} ${c.model}</div><div class="sub">${c.year} · ${money(c.mileage)} км · ${c.engine}</div><div class="chips"><span class="chip">Покупка: ${money(c.buyPrice)} ₽</span><span class="chip">Подготовка: ${money(c.repair)} ₽</span></div>${c.ready?'<div class="profit">Авто подготовлено к продаже</div>':`<button class="buy" onclick="prepare(${i})">Подготовить · ${money(c.repair)} ₽</button>`}${c.ready?`<br><button class="buy" onclick="sell(${i})">Выставить на рынок</button>`:""}<div class="footerNote">Это конкретный экземпляр. Повторно купить его по старому объявлению нельзя.</div></div></article>`).join("")
}
function prepare(i){
 let c=garage[i];
 if(c.repairPaid){c.ready=true;saveState();garageView();return}
 if(balance<c.repair){alert("Не хватает денег на подготовку.");return}
 balance-=c.repair;c.repairPaid=true;c.ready=true;saveState();garageView();
}
function sell(i){
 let c=garage[i];
 let base=c.buyPrice+(c.repairPaid?c.repair:0);
 let sale=Math.round(base*(1.04+Math.random()*.20));
 balance+=sale;
 profitTotal+=sale-base;
 garage.splice(i,1);
 // IMPORTANT: the old market listing never returns. This is a unique instance.
 saveState(); garageView();
 alert(`Автомобиль продан за ${money(sale)} ₽. Прибыль сделки: ${money(sale-base)} ₽.`);
}
function closeModal(){$("#modal").classList.add("hidden")}
function showMarket(){
 $("#marketTab").classList.add("active");$("#garageTab").classList.remove("active");
 $("#reset").style.display="block";renderBrands();render();
}
function showGarage(){
 $("#garageTab").classList.add("active");$("#marketTab").classList.remove("active");
 garageView();
}
$("#marketTab").onclick=showMarket;
$("#garageTab").onclick=showGarage;
$("#reset").onclick=()=>{selected="Все";renderBrands();render()};
$("#balance").textContent=money(balance);saveState();renderBrands();render();
