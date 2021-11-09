// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız

console.log("1000'e Kadar Olan Mükemmel Sayılar")
function perfectNumber(limit){
    for(let i=1; i< limit; i++){
        let sum= 0;
        for(let j=1; j < i; j++){
            if(i % j == 0){
                sum += j;
            }
        }
        if(sum == i){
            console.log([i] +" Mükemmel Sayıdır.")
        }
    }
}
perfectNumber(1000)