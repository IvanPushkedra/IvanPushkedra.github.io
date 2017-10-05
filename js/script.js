var country = document.getElementById("country");
var main = document.getElementById("main");

document.addEventListener("DOMContentLoaded", addDate);

function addDate() {
	
	var divElem;
	var temp1, temp2;
	var lenght1 = data.countries.length;
	var lenght2 = data.travel.length;
	
	for (var i = 0; i < lenght1; i++){
		divElem = document.createElement('div');
		divElem.className = "country";
		divElem.innerHTML = "<div><img src='resourses/rectangle.png' width='26px'><span>" + data.countries[i] + "</span>	</div><div class='hiddenText'>Дополнительная информация</div>";
		country.appendChild(divElem);
	}
	for (var i = 0; i < lenght2; i++){
		if (data.travel[i].type == "mounth") {
			divElem = document.createElement('div');
			divElem.className = "mounth";
			divElem.innerHTML = data.travel[i].name + " " + data.travel[i].year;
			main.appendChild(divElem);
		}
		else if (data.travel[i].type == "rout") {
			divElem = document.createElement('div');
			divElem.className = "travel";
			switch(data.travel[i].diff) {
				case "1": temp1 = "<b>1</b> 2 3 4 5";
					break;
				case "2": temp1 = "1 <b>2</b> 3 4 5";
					break;
				case "3": temp1 = "1 2 <b>3</b> 4 5";
					break;
				case "4": temp1 = "1 2 3 <b>4</b> 5";
					break;
				default:
					temp1 = "1 2 3 4 <b>5</b>";
			}
			temp2 = "<table cellspacing='0' cellpadding='0'><tr><td rowspan='6' class='tdimg'><img src='resourses/foto.png' width='247'></td></tr><tr><td colspan='2'><h3>" + data.travel[i].name + "<h3></td><td class='td1'>$1200</td></tr><tr><td colspan='3' class='td2'><img src='resourses/calendar.png' height='12'> " + data.travel[i].date + "</td></tr><tr><td class='td3'>Продолжительность:<br>Длина похода:<br>Сложность: <img src='resourses/inform.png' height='10px'></td><td class='td4'>" + data.travel[i].duration + "<br>" + data.travel[i].lenght + "<br><span>" + temp1 + "</span></td><td class='td5'><div align='right' class='buttonDetail'>Подробнее</div></td></tr></table>"
			divElem.innerHTML = temp2;
			main.appendChild(divElem);
		}
	}
}








