function square (value){
    let radius = value;
    let result1 = 3.14 * (radius ** 2);
    console.log(`square of a circle with radius ${value} equals`, result1)
    return result1
}
// нужно обязательно записать значение, например с помощью let circle = square
square(9);
//если нам нужно вернуть два раза что-либо то можно воспользоваться конструкцией с объектами
// return {one: result1, two: result2}
//можно возвращать также и массивы
//return [value1, value2];
function createElement (tag, id, text){
    const element = document.createElement(tag);
    element.id = id;
    element.innerText = text;
    return element;
}
const h1Element = createElement('h1', 'header1', 'just a text')
console.log(h1Element)
document.body.append(h1Element)


//click1
console.log("Вы нажали на продукт А")
function addProduct(){
    isProductAvailable()
    isBlocked()
    typeOfDelivery()
}
function isProductAvailable(){

}
function isBlocked(){

}
function typeOfDelivery(){

}


