function omikujishow(){
	var omikuji = new Array("大吉","中吉","小吉","凶");
		
	var number1 = Math.random();
	var number2 = number1 * 4;
	var number = Math.floor(number2);
	var message = omikuji[number];
	
	var object = document.getElementById("omikuji");
	object.innerText = message;

	if( message == "大吉"){
		object.style.color = "red";
		object.style.fontWeight = "900"; //文字の大きさ変更
	}else if( message == "中吉"){
		object.style.color = "blue";
		object.style.fontWeight = "normal";
	}else if( message == "小吉"){
		object.style.color = "#ffaa00";
		object.style.fontWeight = "normal";
	}else{
		object.style.color = "black";
		object.style.fontWeight = "900";
	}
}