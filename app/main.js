$(document).ready(function(){
	$.get('names.txt', function(data) {    
    var lines = data.split("\n");
   
   let bigNames1 = []

    $.each(lines, function(n, elem) {
    let arr = elem.split(',');

     for (let i = 0 ; i < arr.length; i++) {
     	bigNames1.push(arr[i].slice(1,-1));
     }
    });

    bigNames1.sort();

    const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let allSumm = 0;
    for(let j = 0 ; j < bigNames1.length; j++){
     let pArr =  bigNames1[j].split('');
      let nArr = [];
      for(let k = 0; k<pArr.length ; k++){    	
      	nArr.push(ALPHABET.indexOf(pArr[k])+1);	
      }
      let summ = 0;
      for(let l = 0; l<nArr.length ; l++){
      	summ += nArr[l];
      }
      let prois = summ * (j+1);

      allSumm+=prois;

       $('.app').append(`<div class = "app_item">
       	${bigNames1[j]}(алфавитная сумма - ${summ})
       	(произведение суммы на порядковый номер - ${prois})
       	</div>`);     
    }

    $('.preApp').append(`Сумма произведений из п. 3 по всем именам из файла - ${allSumm}`)

   });
})