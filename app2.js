$(document).ready(function(){
	console.log('hello');
	
	$('#number').keyup(function(enter){
		if(enter.keyCode == 13){
			numList();
		}
	});

	$('#btn').click(function(){
		numList();
	});

	function numList(){
		var num = +$('#number').val();
		var aNums = [];
		var string = '';
		for(var i = 1; i <= num; i++){
			aNums[i] = i;
			if(aNums[i] % 3 == 0 || aNums[i] % 5 == 0){
					if(aNums[i] % 3 == 0 && aNums[i] % 5 !=0){
						aNums[i] = 'fizz';
					}else if(aNums[i] % 5 == 0 && aNums[i] % 3 != 0){
						aNums[i] = 'buzz';
					}else{
						aNums[i] = 'fizz buzz';
					}
			}
			string = aNums[i];
			$('#listnum').append('<p id="order">' + string + '</p><br>');
		}


		
	}
	
});
