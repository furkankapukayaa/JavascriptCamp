// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
// (Araştırma konusu : şart blokları : if )
// Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

console.log("Asal Sayı Bulma")
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let isPrime = true
        if (numbers[i] <=1 ) {
            console.log(`${numbers[i]} Asal Değildir`)
            continue
        }
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            console.log(`${numbers[i]} Asal Sayıdır.`)
        } else {
            console.log(`${numbers[i]} Asal Değildir.`)
        }
    }
}

findPrime(2,5,7,19,24,33,56,58,67)