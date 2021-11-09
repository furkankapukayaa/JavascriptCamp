// 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

console.log("1000'e Kadar Olan Tüm Asal Sayılar")
function primeNumbers(limit) {
    for (let i = 2; i<= limit; i++) {
        let isPrime = true;
        if (i == 2) {
            console.log(`${i} Asal Sayıdır.`)
            continue
        }
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break
            }
        }
        if (isPrime) {
            console.log(`${i} Asal Sayıdır.`)
        }
    }
}
primeNumbers(1000)