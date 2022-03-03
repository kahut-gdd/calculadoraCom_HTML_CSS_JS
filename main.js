var a = '';
var b = '';
var num = [];
var ans;

function sendNum(digit){

	num.push(digit);

	if(num.length != 1){
		a = '';
		document.getElementById('tela').innerHTML = a;
	}

	for(i=0; i<num.length ; i++){

		a = a + num[i];				
		
	}

document.getElementById('tela').innerHTML = a;

	
}

 
function equalTo(){
	document.getElementById('tela').innerHTML = '';

	for(i=0; i<num.length ; i++){

		b += num[i];						
	}

	ans = eval(b);	

	document.getElementById('tela').innerHTML = ans;		

	while(num.length > 0){
    	num.pop();				
	}

	num.push(ans.toString());

	
}

function clearScr(){
	document.getElementById('tela').innerHTML = '';
	
	while(num.length > 0){
    	num.pop();				
	}

	a ='';	
	b ='';
}