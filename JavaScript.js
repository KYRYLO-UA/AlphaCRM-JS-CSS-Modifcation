let DEDICATE_EMPTY = true;
let DEDICATE_BUSY = true;
let DEDICATE_DEPRICATED = true;

let WARNING_MODE = 0;

function getFooter() {
	return document
		.getElementsByTagName('footer')[0]
		.getElementsByTagName('div')[0]
		.getElementsByTagName('p')[0];
}
// footer
getFooter().innerText = getFooter().innerText + ' | Модифікація - Кирило Біцай';

function checkOnWarningMode() {
	var divs = document.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++) {
		var d = divs[i];
		if (d.classList.contains('slot')) {
			if (WARNING_MODE === 0 && d.classList.contains('clear_slot')) {
				d.classList.remove('clear_slot');
			} else {
				d.classList.add('clear_slot');
			}
		}
	}
}

function isCalendarSlot(element) {
	return element.parentElement.classList.contains('calendar-rec');
}

let currentUrl = window.location.href.split("/")
let newUrl = "https://mattseprosto.alfacrm.com/company/"
newUrl += currentUrl[4]

let colsm12 = document.getElementsByClassName("col-sm-12")[1]
// let iboxcontent = colsm12.getElementsByClassName("ibox-content")[0]
let iboxcontent = document.getElementsByClassName("nav metismenu")[0]


// <button type='button' class='btn btn-sm btn-success btn-w-m dropdown-toggle' data-toggle='dropdown'>"+"<span class=hidden-xs>Модифікація</span> "+"<span class=caret></span>"+"</button>"


// dropdown btn-group no-padding
iboxcontent.innerHTML += "<li class='modifcation-btn dropdown'>"+"<a class='dropdown-toggle' data-toggle='dropdown'>"+"<i class=ion-wrench></i><span class=hidden-xs>Модифікація</span> "+"<span class=caret></span>"+"</a>"+"<ul class=dropdown-menu>" +                                                                                                                           "<li><input type=text class='crm-ajax-link mod-btn mod-input-client' placeholder='Пошук клієнта...'></input><li>" + "<li><input type=text class='crm-ajax-link mod-btn mod-input-lead' placeholder='Пошук ліда...'></a><li>" + "<li><input type=text class='crm-ajax-link mod-btn mod-input-pedagog' placeholder='Пошук педагога...'></input><li>"         + "<li class=divider></li>"                                                                                                                                                       + "<li><a class='crm-ajax-link mod-btn modification-change-graphic-mode' href=#></a><li>" + "<li><a class='crm-ajax-link mod-btn modification-change-comments-mode' href=#></a><li>" +      "<li class=divider></li>"                    + "<li><a class='crm-ajax-link mod-btn modification-change-dedicate-able' href=#></a><li>" + "<li><a class='crm-ajax-link mod-btn modification-change-copy-able' href=#></a><li>"   + "<li class=divider></li>"    +   "<li><a class='crm-ajax-link mod-btn modification-change-quick-urls' href=#></a><li>"   +   "<li><a class='crm-ajax-link mod-btn modification-change-detect-nakladki' href=#></a><li>"  + "<li class=divider></li>" +                                                                                       "<li><a class='crm-ajax-link mod-btn modification-pidrahunok-hodyn' href=#></a><li>" +                                                                                                                                          "<li class=divider></li>" + "<li><a class='crm-ajax-link mod-btn modification-support href='#'><i class='glyph-icon flaticon-telegram'></i> Виникла проблема</a><li>" + "<li><a class='crm-ajax-link mod-btn modification-tech href='#'><i class='glyph-icon flaticon-telegram'></i> Технічний відділ</a><li>" +"</ul>"+"</li>"





function searchCustomerByName(name){
	let my = newUrl 
	my += "/customer/index?"
	my += "CustomerSearch%5Bf_id%5D=&CustomerSearch%5Bf_name%5D="+name+"&CustomerSearch%5Bf_gender%5D=&CustomerSearch%5Bf_age_from%5D=&CustomerSearch%5Bf_age_to%5D=&CustomerSearch%5Bf_phone%5D=&CustomerSearch%5Bf_comment%5D=&CustomerSearch%5Bf_balance_from%5D=&CustomerSearch%5Bf_balance_to%5D=&CustomerSearch%5Bf_lesson_count_from%5D=&CustomerSearch%5Bf_lesson_count_to%5D=&CustomerSearch%5Bf_removed%5D=&CustomerSearch%5Bf_removed_from%5D=&CustomerSearch%5Bf_removed_to%5D=&CustomerSearch%5Bf_date_from%5D=&CustomerSearch%5Bf_date_to%5D=&CustomerSearch%5Bf_next_lesson_date_from%5D=&CustomerSearch%5Bf_next_lesson_date_to%5D=&CustomerSearch%5Bf_tariff_till_from%5D=&CustomerSearch%5Bf_tariff_till_to%5D=&CustomerSearch%5Bf_custom_kommentar_%5D=&CustomerSearch%5Bf_custom_obratna%5D=&CustomerSearch%5Bf_custom_obratnayasv%5D=&CustomerSearch%5Bf_custom_obratnayasvyazpo%5D=&CustomerSearch%5Bf_last_attend_date_from%5D=&CustomerSearch%5Bf_last_attend_date_to%5D=&CustomerSearch%5Bf_is_allowed%5D=&CustomerSearch%5Bf_custom_dz%5D="
	return my
}

function searchCustomerById(id){
	let my = newUrl 
	my += "/customer/index?"
	my += "CustomerSearch%5Bf_id%5D="+id+"&CustomerSearch%5Bf_name%5D=&CustomerSearch%5Bf_gender%5D=&CustomerSearch%5Bf_age_from%5D=&CustomerSearch%5Bf_age_to%5D=&CustomerSearch%5Bf_phone%5D=&CustomerSearch%5Bf_comment%5D=&CustomerSearch%5Bf_balance_from%5D=&CustomerSearch%5Bf_balance_to%5D=&CustomerSearch%5Bf_lesson_count_from%5D=&CustomerSearch%5Bf_lesson_count_to%5D=&CustomerSearch%5Bf_removed%5D=&CustomerSearch%5Bf_removed_from%5D=&CustomerSearch%5Bf_removed_to%5D=&CustomerSearch%5Bf_date_from%5D=&CustomerSearch%5Bf_date_to%5D=&CustomerSearch%5Bf_next_lesson_date_from%5D=&CustomerSearch%5Bf_next_lesson_date_to%5D=&CustomerSearch%5Bf_tariff_till_from%5D=&CustomerSearch%5Bf_tariff_till_to%5D=&CustomerSearch%5Bf_custom_kommentar_%5D=&CustomerSearch%5Bf_custom_obratna%5D=&CustomerSearch%5Bf_custom_obratnayasv%5D=&CustomerSearch%5Bf_custom_obratnayasvyazpo%5D=&CustomerSearch%5Bf_last_attend_date_from%5D=&CustomerSearch%5Bf_last_attend_date_to%5D=&CustomerSearch%5Bf_is_allowed%5D=&CustomerSearch%5Bf_custom_dz%5D="
	return my
}

function searchLeadByName(name){
	let my = newUrl 
	my += "/lead/index?"
	my += "https://mattseprosto.alfacrm.com/company/3/lead/index?LeadSearch%5Bf_id%5D=&LeadSearch%5Bf_name%5D="+name+"&LeadSearch%5Bf_phone%5D=&LeadSearch%5Bf_gender%5D=&LeadSearch%5Bf_date_from%5D=&LeadSearch%5Bf_date_to%5D=&LeadSearch%5Bf_age_from%5D=&LeadSearch%5Bf_age_to%5D=&LeadSearch%5Bf_custom_dz%5D=&LeadSearch%5Bf_custom_obratna%5D=&LeadSearch%5Bf_custom_obratnayasv%5D=&LeadSearch%5Bf_custom_obratnayasvyazpo%5D=&LeadSearch%5Bf_custom_kommentar_%5D=&LeadSearch%5Bf_is_allowed%5D="
	return my
}

function searchLeadById(id){
	let my = newUrl 
	my += "/lead/index?"
	my += "LeadSearch%5Bf_id%5D="+id+"&LeadSearch%5Bf_name%5D=&LeadSearch%5Bf_phone%5D=&LeadSearch%5Bf_gender%5D=&LeadSearch%5Bf_date_from%5D=&LeadSearch%5Bf_date_to%5D=&LeadSearch%5Bf_age_from%5D=&LeadSearch%5Bf_age_to%5D=&LeadSearch%5Bf_is_allowed%5D=&LeadSearch%5Bf_custom_datazaknchennya%5D=&LeadSearch%5Bf_custom_dz%5D=&LeadSearch%5Bf_custom_kommentar_%5D="
	return my
}

function searchPedagogByName(name){
	let my = newUrl 
	my += "/employee/index?"
	my += "TeacherSearch%5Bf_name%5D="+name+"&TeacherSearch%5Bf_subject_id%5D=&TeacherSearch%5Bf_skill_id%5D=&TeacherSearch%5Bf_phone%5D=&TeacherSearch%5Bf_custom_adaptator_vchyteliv%5D=&TeacherSearch%5Bf_custom_adaptatsyuproyshov%5D=&TeacherSearch%5Bf_custom_vstupni_uroky%5D="
	return my
}

function getSearchUrl(what, name){
	if (what == "вступний"){
		return searchLeadByName(name)
	} else {
		return searchCustomerByName(name)
	}
}




function submitSearch(what, arg) {
	arg = arg.replace("id=", "")
	let searchType = isNaN(parseInt(arg)) ? "str" : "int"
	if (what == "client") {
		if (searchType == "str") window.location.href = searchCustomerByName(arg);
		if (searchType == "int") window.location.href = searchCustomerById(arg);
	} else if (what == "lead") {
		if (searchType == "str") window.location.href = searchLeadByName(arg);
		if (searchType == "int") window.location.href = searchLeadById(arg);
	} else if (what == "pedagog") {
		window.location.href = searchPedagogByName(arg)
	}
	console.log("search submit", what, searchType, arg)
}



function getMainName() {
	if (document.getElementsByClassName('col-lg-8')[0] == undefined) return;
	let t = document.getElementsByClassName('col-lg-8')[0].getElementsByClassName('ibox float-e-margins m-b-sm')[0].getElementsByTagName('div')[0].getElementsByTagName('h2')[0];
	var f = t.innerText || t.textContent;
	var s = f.split(' ');
	return s[0] + ' ' + s[1];
}
var mainName = getMainName();

let modificationSupport = document.getElementsByClassName("modification-support")[0]
modificationSupport.onclick = function(){
	window.location.href = "https://t.me/m/cFmlHu6JYWEy";
}

let modificationTech = document.getElementsByClassName("modification-tech")[0]
modificationTech.onclick = function(){
	navigator.clipboard.writeText("Вчитель: "+mainName+"\nПредмет: \nУчень:\nОпис звернення:");
	window.location.href = "https://t.me/texnitchnichnui_bot";
}


/// POSHUK
let searchClient = document.getElementsByClassName("mod-input-client")[0]
let searchLead = document.getElementsByClassName("mod-input-lead")[0]
let searchPedagog = document.getElementsByClassName("mod-input-pedagog")[0]

searchClient.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
  	submitSearch("client", searchClient.value)
  } else if (event.key == "ArrowDown") {
  	searchLead.focus()
  } else if (event.key == "ArrowUp") {
  	searchPedagog.focus()
  }
});

searchLead.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
  	submitSearch("lead", searchLead.value)
  } else if (event.key == "ArrowDown") {
  	searchPedagog.focus()
  } else if (event.key == "ArrowUp") {
  	searchClient.focus()
  }
});

searchPedagog.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
  	submitSearch("pedagog", searchPedagog.value)
  } else if (event.key == "ArrowDown") {
  	searchClient.focus()
  } else if (event.key == "ArrowUp") {
  	searchLead.focus()
  }
});

// CHANGE GRAPHIC MODE
let changeGraphicMode = document.getElementsByClassName("modification-change-graphic-mode")[0]
var currentGraphicMode = localStorage.getItem("modificationGraphicMode");
if (currentGraphicMode == undefined) currentGraphicMode = "colored"
changeGraphicMode.textContent = "Відображення графіку: "
changeGraphicMode.innerHTML += "<u>"+(currentGraphicMode == "colored" ? "кольоровий" : "накладки")+"</u>"
changeGraphicMode.onclick = function(){
	if (currentGraphicMode == "colored"){
		localStorage.setItem("modificationGraphicMode", "nakladki");
	} else if (currentGraphicMode == "nakladki"){
		localStorage.setItem("modificationGraphicMode", "colored");
	}
	window.location.reload();
}


// CHANGE COMMENTS MODE
let changeCommentsMode = document.getElementsByClassName("modification-change-comments-mode")[0]
var currentCommentsMode = localStorage.getItem("modificationCommentsMode");
if (currentCommentsMode == undefined) currentCommentsMode = "colored"
changeCommentsMode.textContent = "Відображення коментарів: "
changeCommentsMode.innerHTML += "<u>"+(currentCommentsMode == "colored" ? "кольоровий" : "звичайний")+"</u>"
changeCommentsMode.onclick = function(){
	localStorage.setItem("modificationCommentsMode", (currentCommentsMode == "colored" ? "default" : "colored"));
	window.location.reload();
}




// CHANGE DEDICATE ABLE
let changeDedicateAble = document.getElementsByClassName("modification-change-dedicate-able")[0]
var currentDedicateAble = localStorage.getItem("modificationDedicateAble") == "true";
changeDedicateAble.textContent = "Виділення слотів: "
changeDedicateAble.textContent += currentDedicateAble ? "✅" : "❌"

changeDedicateAble.onclick = function(){
	localStorage.setItem("modificationDedicateAble", !currentDedicateAble)
	window.location.reload();
}



// CHANGE COPY ABLE
let changeCopyAble = document.getElementsByClassName("modification-change-copy-able")[0]
var currentCopyAble = localStorage.getItem("modificationCopyAble") == "true";
changeCopyAble.textContent = "Копіювання інформації слотів: "
changeCopyAble.textContent += currentCopyAble ? "✅" : "❌"

changeCopyAble.onclick = function(){
	localStorage.setItem("modificationCopyAble", !currentCopyAble)
	window.location.reload();
}



// CHANGE quick urls
let changeQuickUrls = document.getElementsByClassName("modification-change-quick-urls")[0]
var currentQuickUrls = localStorage.getItem("modificationQuickUrls") == "true";
changeQuickUrls.textContent = "Швидкий пошук учня: "
changeQuickUrls.textContent += currentQuickUrls ? "✅" : "❌"

changeQuickUrls.onclick = function(){
	localStorage.setItem("modificationQuickUrls", !currentQuickUrls)
	window.location.reload();
}



// CHANGE DETECT nakladki
let changeDetectNakladki = document.getElementsByClassName("modification-change-detect-nakladki")[0]
var currentDetectNakladki = localStorage.getItem("modificationDetectNakladki") == "true";
changeDetectNakladki.textContent = "Попередження про накладки: "
changeDetectNakladki.textContent += currentDetectNakladki ? "✅" : "❌"

changeDetectNakladki.onclick = function(){
	localStorage.setItem("modificationDetectNakladki", !currentDetectNakladki)
	window.location.reload();
}




// CHANGE PIDRAHUNOK HODYN
let changePidrahunokHodyn = document.getElementsByClassName("modification-pidrahunok-hodyn")[0]
var currentPidrahunokHodyn = localStorage.getItem("modificationPidrahunokHodyn") == "true";
changePidrahunokHodyn.textContent = "Підрахунок годин: "
changePidrahunokHodyn.textContent += currentPidrahunokHodyn ? "✅" : "❌"

changePidrahunokHodyn.onclick = function(){
	localStorage.setItem("modificationPidrahunokHodyn", !currentPidrahunokHodyn)
	window.location.reload();
}












const slots = []

var divs = document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
	(function (d) {
		var parent = d.parentElement;

		if (isCalendarSlot(d)) {
			d.classList.add('slot');

			if (currentGraphicMode == "colored"){
				if (d.textContent.includes('порожньо') && parent.style.textDecoration !== 'line-through') {
					if (DEDICATE_EMPTY) {
						d.classList.add('empty_slot');
					}
				} else if (parent.style.textDecoration === 'line-through') {
					if (DEDICATE_DEPRICATED) {
						d.classList.add('depricated_slot');
					}
				} else {
					if (DEDICATE_BUSY) {
						d.classList.add('busy_slot');
					}
				}		
			} else {
				if (parent.style.textDecoration == 'line-through') {
					d.classList.add('depricated2_slot');
				}
			}
			

			
			var normalD = d.innerText || d.textContent;
			let splittedD = normalD.split(' ');
			let hisTime = splittedD[0]
			let weekDay = parent.parentElement.parentElement
					.getElementsByClassName('text-muted')[0]
					.getElementsByTagName('small')[0];
			var normalW = weekDay.innerText || weekDay.textContent;
			var realW = normalW.split('\n')[1].split('.');
			var mrealW = realW[0] + '.' + realW[1];
			
			let vstupIcon = d.getElementsByClassName("ion-asterisk")[0]
			let urokType = "плановий"
			if (vstupIcon) urokType = "вступний";
			let chas = splittedD[0].split(":")
			let imena = splittedD
			imena.shift()
			imena.shift()
			imena.shift()
			imena.shift()
			imena.pop()
			imena.pop()
			imena = imena.join(" ").trimEnd();
			
			if (parent.style.textDecoration !== 'line-through'){
				slots.push([d, [parseInt(realW[0]), parseInt(realW[1])], [parseInt(chas[0]),parseInt(chas[1])], urokType, imena])
			}
		
			if ((currentCopyAble || currentQuickUrls) && (!d.textContent.includes('порожньо') && parent.style.textDecoration !== 'line-through')){
				d.classList.add("clickable")
				d.onclick = function () {
					if (currentCopyAble) {
						var toCopy = mainName + ' - ' + hisTime + ' ' + mrealW;
						navigator.clipboard.writeText(toCopy);
						console.log('Copied:', toCopy);
					};
					
					if (currentQuickUrls) {
						window.location.href = getSearchUrl(urokType, imena);
					};
				};
			}
				
			if (currentDedicateAble) {
				// parent.classList.add("clickable")
				parent.onclick = function () {
					if (d.classList.contains('warned_slot')) {
						d.classList.remove('warned_slot');
						WARNING_MODE += 1;
					} else {
						d.classList.add('warned_slot');
						WARNING_MODE -= 1;
					}
					checkOnWarningMode();
				};
			}
		}
	})(divs[i]);
}


const comments = []

var comms = document.getElementsByClassName('feed-element');
for (var i = 0; i < comms.length; i++) {
	(function (c) {
		if (!c.classList.value.includes("js-communication-form-container")){

			var addition = "вчитель"
			let titleElement = c.getElementsByTagName("div")[0].getElementsByTagName("h5")[0]
			if (titleElement){
				let bodyElement = c.getElementsByTagName("div")[0].getElementsByTagName("div")[0]
				let additionElement = titleElement.getElementsByTagName("em")[0]
				
				if (titleElement.innerText.includes("куратор") || titleElement.innerText.includes("kurator") || titleElement.innerText.includes("Карина") || titleElement.innerText.includes("Користувач не визначений")) addition = "куратор";
				if (titleElement.innerText.includes("коментар")) addition = "коментар";
				if (titleElement.innerText.includes("Service Account")) {
					if (bodyElement.innerText.includes("Через 1 годину у вас почнеться заняття з вчителем, тому з нетерпінням чекаємо на уроці") || bodyElement.innerText.includes("заплановано урок з вчителем"))	{
						addition = "система"
					} else {
						addition = "клієнт"
					}
				}
				// additionElement.innerHTML = "["+addition+"]"		
			}
			
			c.classList.add("ky-comment")
			
			if (currentCommentsMode == "colored"){
				if (addition == "вчитель") {
					c.classList.add("comment-teacher")
					
				} else if (addition == "куратор") {
					c.classList.add("comment-curator")
					
				} else if (addition == "система") {
					c.classList.add("comment-system")
					
				} else if (addition == "клієнт") {
					c.classList.add("comment-customer")
					
				}	else if (addition == "коментар") {
					c.classList.add("comment-comment")
				}		
			}

		}
	})(comms[i]);
}

// [div, [31, 10], [16, 0], "вступний", "ім'я"]
const nakladki = [];
let rozkladDiv = document.getElementsByClassName('table-responsive')[0];

if (currentPidrahunokHodyn) {
	let zahalHodyny = 0
	let hodynyDo14 = 0
	let hodynyPislya14 = 0
	
	let zaynatiHodyny = 0
	let zaynatiDo14 = 0
	let zaynatiPislya14 = 0
	
	function getHodyny() {
		let graphic = document.getElementsByClassName("crm-hover-block crm-modal-btn p-xxs")[0].getElementsByClassName("row")
		for (var i = 0; i < graphic.length; i++) {
			(function (row) {
				let myText = row.getElementsByClassName("col-xs-11")[0].getElementsByTagName("small")[0].innerText.split(", ")

		    myText.forEach(interval => {
		        let [start, end] = interval.split(" – ").map(time => parseInt(time.split(":")[0]));
		        
		        let itr = ((end-start)==1 ? 1 : (end-start)+1);
		        
		        if (start < 14 && end < 14) {
		        	hodynyDo14 += itr;
		        } else if (start < 14 && end >= 14) {
		        	hodynyDo14 += 14-start
		        	hodynyPislya14 += end-13
		        } else if (start >= 14 && end >= 14) {
		        	hodynyPislya14 += itr;
		        }
		        
		        zahalHodyny += itr;
		    });
				
			})(graphic[i]);
		}
	}
	
	function getZaynyati() {
		// zaynatiHodyny = zahalHodyny
		
		for (var i = 0; i < slots.length; i++) {
			let slot = slots[i]
			if (slot[3] == "плановий") {
				zaynatiHodyny += 1
				console.log(slot[2][0])
				if (slot[2][0] < 14) {
					zaynatiDo14 += 1;
				} else {
					zaynatiPislya14 += 1
				}
			}
		}
	} 
	
	function copyVal(val) {
		navigator.clipboard.writeText(val);
	}
	
	rozkladDiv.getElementsByTagName('h4')[0].innerHTML += "<br><br>Підрахунок годин<p class=kudatuda></p>"
	let kuda = rozkladDiv.getElementsByTagName('h4')[0].getElementsByTagName('p')[0]
	
	getHodyny()
	getZaynyati()
	
	kuda.innerHTML += "<br>Всього годин по графіку: <button onclick=copyVal("+zahalHodyny+")>"+zahalHodyny+"</button>"
	kuda.innerHTML += "<br>Всього <b>зайнятих</b> годин по графіку: <button onclick=copyVal("+zaynatiHodyny+")>"+zaynatiHodyny+"</button>"
	kuda.innerHTML += "<br>Всього <b>вільних</b> годин по графіку: <button onclick=copyVal("+(zahalHodyny-zaynatiHodyny)+")>"+(zahalHodyny-zaynatiHodyny)+"</button><br>"
	
	kuda.innerHTML += "<br>Всього годин ДО 14:00: <button onclick=copyVal("+hodynyDo14+")>"+hodynyDo14+"</button>"
	kuda.innerHTML += "<br><b>Зайнятих</b> годин ДО 14:00: <button onclick=copyVal("+zaynatiDo14+")>"+zaynatiDo14+"</button>"
	kuda.innerHTML += "<br><b>Вільних</b> годин ДО 14:00: <button onclick=copyVal("+(hodynyDo14-zaynatiDo14)+")>"+(hodynyDo14-zaynatiDo14)+"</button><br>"
	
	kuda.innerHTML += "<br>Всього годин ПІСЛЯ 14:00: <button onclick=copyVal("+hodynyPislya14+")>"+hodynyPislya14+"</button>"
	kuda.innerHTML += "<br><b>Зайнятих</b> годин ПІСЛЯ 14:00: <button onclick=copyVal("+zaynatiPislya14+")>"+zaynatiPislya14+"</button>"
	kuda.innerHTML += "<br><b>Вільних</b> годин ПІСЛЯ 14:00: <button onclick=copyVal("+(hodynyPislya14-zaynatiPislya14)+")>"+(hodynyPislya14-zaynatiPislya14)+"</button>"
}


function detectNakladki() {
	if (slots == undefined){
		return "none_slots"
	}
	if (slots.length <= 0) {
		return "none_slots"
	}
  for (let i = 0; i < slots.length - 1; i++) {
    for (let j = i + 1; j < slots.length; j++) {
      if (slots[i][1][0] === slots[j][1][0] && slots[i][2][0] === slots[j][2][0]) {
	    	console.log("Перевірка:", slots[i], slots[j])
        let timeDiff = Math.abs(slots[i][2][1] - slots[j][2][1])
        if (timeDiff < 40) {
        	console.log("Знайдена накладка.")
          nakladki.push([timeDiff, slots[i], slots[j]]);
        }
      }
    }
  }
  if (nakladki == undefined) {
  	return "good"
  }
  if (nakladki.length <= 0) {
  	return "good"
  }
  return "have_nakladki";
}



rozkladDiv.getElementsByTagName('h4')[0].innerHTML +=
	'<center>Шукаю накладки...</center>';
let shukauNakl = rozkladDiv
	.getElementsByTagName('h4')[0]
	.getElementsByTagName('center')[0];
	

var result = detectNakladki()

if (currentGraphicMode == "nakladki") {
	for (let i = 0; i < nakladki.length; i++) {
		let nakl = nakladki[i] 
		nakl[1][0].classList.add("depricated_slot")
		nakl[2][0].classList.add("depricated_slot")
  }
}


// let slots = slots
let newNakladki = nakladki.filter((item, index, self) => 
  index === self.findIndex((t) => 
      JSON.stringify(t) === JSON.stringify(item)
  )
);

if (currentDetectNakladki){
	if (result == "none_slots") {
		shukauNakl.innerHTML = '❌ <b>Немає слотів</b> ❌';
		
	} else if (result == "have_nakladki") {
		shukauNakl.classList.add('detected-nakladi');
		shukauNakl.innerHTML = '❗<b>Знайдено накладки:</b>❗';
	
		rozkladDiv.getElementsByTagName('h4')[0].innerHTML += "<center class=spisok><ul></ul></center>"
		let spisok = rozkladDiv.getElementsByTagName('h4')[0].getElementsByClassName('spisok')[0].getElementsByTagName("ul")[0]
		
		// [div, [31, 10], [16, 0], "вступний", "ім'я"]
		for (let i = 0; i < newNakladki.length; i++) {
			console.log(currentUrl)
			let nakl = newNakladki[i]
			let riznText = ""
			if (nakl[0] > 0){
				riznText = "<i class=riznyza>"+nakl[0]+" хв.</i>"
			}
			spisok.innerHTML += "<center>"+nakl[1][1].join(".")+" "+nakl[1][2].join(":")+" <a href='"+getSearchUrl(nakl[1][3], nakl[1][4])+"'>"+nakl[1][4]+"</a>, "+nakl[2][2].join(":")+" <a href='"+getSearchUrl(nakl[2][3], nakl[2][4])+"'>"+nakl[2][4]+"</a> "+riznText+"</center>"
	  }
		
	} else {
		shukauNakl.innerHTML = 'Накладок не виявлено ✅';
	}
} else {
	shukauNakl.remove()
}
