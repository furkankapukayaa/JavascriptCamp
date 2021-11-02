function addToCard(quantity, productName="Elma") {
    console.log(quantity+" Adet "+productName +" Sepete Eklendi!")
}

addToCard(1)
addToCard(15,1)
addToCard("Telefon",2)
addToCard("Bilgisayar",5)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2!")
}

sayHello2()

function addToCard2(productName, quantity, unitPrice) {
    
}

function addToCard3(product) {
console.log("Ürün : " + product.productName)
console.log("Adet : " + product.quantity)
console.log("Fiyat : " + product.unitPrice)
}

let product1 = {productName:"Elma", unitPrice:10, quantity:5}
addToCard3(product1)
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
addToCard3(product1)
let product2 = product3
product2.productName="Karpuz"
console.log(product3.productName)

function addToCard4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCard4(products)

function add(bisey,...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total+numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30,40)
//add(20,30,50)

let numbers = [30,10,500,600,120]
console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,kardeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Kardeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(marmara.name)
console.log(marmara.population)
console.log(icAnadoluSehirleri)
console.log(marmaraSehirleri)


let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
= {productName:"Armut", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)