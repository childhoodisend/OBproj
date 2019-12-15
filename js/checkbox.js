	function calculate(){
	var list = document.getElementsByClassName('left_blocks');
	var counter = 0;
	var money = 0;
	for (var i = 0; i < list.length; i++) {
		if(list[i].getElementsByTagName('input')[0].checked) {
			counter = counter + 1;
			money = money + parseInt(list[i].getElementsByTagName('span')[0].innerHTML);
		}
	}
	var multiplie = 1.0;
	var discount;
		if(counter >= 3 && counter < 5) {
			multiplie = 0.9;
	}
	 	if(counter >= 5 && counter < 10) {
			multiplie = 0.8;
	}
		if (counter >= 10 && counter < 15) {
			multiplie = 0.7;
	}
		if (counter >= 15 && counter < 24) {
			multiplie = 0.6;
	}
		if (counter >= 24) {
			multiplie = 0.5;
	}

	discount = (1.0 - multiplie) * 100.0;//скидка
	if(counter < 3)
	document.getElementsByClassName('sumup_without_discount')[0].getElementsByTagName('h2')[0].style.textDecorationLine = "none";
	else
	document.getElementsByClassName('sumup_without_discount')[0].getElementsByTagName('h2')[0].style.textDecorationLine = "line-through";

	document.getElementById('discount').textContent = Math.round(discount);
	document.getElementById('sumup_without_discount').textContent = money;
	if(multiplie != 1.0){

	document.getElementById('sumup_with_discount').textContent = (money * multiplie) + " Руб";
	}
	else
	document.getElementById('sumup_with_discount').textContent = " ";




//сколько осталось до очередной скидки
	if(counter < 3){
	document.getElementById('recipe_to_discount_').textContent = 3 - counter;
	document.getElementById('mobile_disc').textContent =  3 - counter + " до следующей скидки";
	}
	else if(counter < 5){
	document.getElementById('recipe_to_discount_').textContent = 5 - counter;
	document.getElementById('mobile_disc').textContent =  5 - counter + " до следующей скидки";
	}
	else if(counter < 10){
	document.getElementById('recipe_to_discount_').textContent = 10 - counter;
	document.getElementById('mobile_disc').textContent = 10 - counter + " до следующей скидки";
	}
	else if(counter < 15){
	document.getElementById('recipe_to_discount_').textContent = 15 - counter;
	document.getElementById('mobile_disc').textContent = 15 - counter + " до следующей скидки";
	}
	else if(counter < 24){
	document.getElementById('recipe_to_discount_').textContent = 24 - counter;
	document.getElementById('mobile_disc').textContent = 24 - counter + " до следующей скидки";
	}
	else if(counter >= 24){
	document.getElementById('recipe_to_discount_').textContent = 0;
	document.getElementById('mobile_disc').textContent = "Максимальная скидка";
	}
}




function setcolor_and_sumup(val){
	var chbox = document.getElementById(val);
	if(chbox.checked){
		chbox.parentNode.style.background = "#31E08C";
		chbox.parentNode.getElementsByClassName('text_box')[0].getElementsByTagName('h1')[0].style.color = "#FFFFFF";
		chbox.parentNode.getElementsByClassName('text_box')[0].getElementsByTagName('h2')[0].style.color = "#FFFFFF";
		chbox.parentNode.getElementsByClassName('price')[0].style.color = "#FFFFFF";
	}
	else{
	chbox.parentNode.style.background = "#FFFFFF";
	chbox.parentNode.getElementsByClassName('text_box')[0].getElementsByTagName('h1')[0].style.color = "#000000";
	chbox.parentNode.getElementsByClassName('text_box')[0].getElementsByTagName('h2')[0].style.color = "#000000";
	chbox.parentNode.getElementsByClassName('price')[0].style.color = "#000000";
	}
	calculate();
 }
