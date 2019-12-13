
function calculate(){
	var list = document.getElementsByClassName('left_blocks');
	var counter = 0;
	var money = 0;
	for (var i = 0; i < list.length; i++) {
		if(list[i].getElementsByTagName('input')[0].checked){
			counter = counter + 1;
			money = money + parseInt(list[i].getElementsByTagName('span')[0].innerHTML);

		}
	}
	var multiplie = 1.0;
	var discount;
	if(counter >= 3 && counter <= 5){
		multiplie = 0.8;
	}


	discount = (1.0 - multiplie) * 100.0;
	money = money * multiplie;
	alert(counter + " " + money);
}



function setcolor_and_sumup(val){
	var chbox = document.getElementById(val);
	if(chbox.checked){
		chbox.parentNode.style.background = "#31E08C";


		/*console.log(chbox.parentNode)
		var span = chbox.parentNode.getElementsByTagName("span")[0];
		var money = parseInt(span.innerHTML);
		alert(money);
		*/
	}
	else{
	chbox.parentNode.style.background = "#FFFFFF";
	}
	calculate();
 }
