// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){
    return cats.push('Ralph');
}
console.log(destructivelyAppendCat());

beforeEach(function () {
    cats.length = 0;
    
    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyPrependCat(Bob){
    return cats.unshift('Bob');
}

beforeEach(function () {
    cats.length = 0;
    
    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyRemoveLastCat(){
    cats.pop();
}

beforeEach(function () {
    cats.length = 0;
    
    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyRemoveFirstCat(){
    cats.shift()
}

beforeEach(function () {
    cats.length = 0;
    
    cats.push("Milo", "Otis", "Garfield");
});

function appendCat(Broom){
    const newCats = cats.slice();
    newCats.push("Broom");
    return newCats;
}

beforeEach(function () {
    cats.length = 0;
    
    cats.push("Milo", "Otis", "Garfield");
});

function prependCat(Arnold){
    const newCats1 = cats.slice();
    newCats1.unshift("Arnold");
    return newCats1;
}

beforeEach(function () {
    cats.length = 0;
    
    cats.push("Milo", "Otis", "Garfield");
});

function removeFirstCat(){
    const newCatsArray = cats.slice();
    newCatsArray.shift();
    return newCatsArray;
}

beforeEach(function () {
    cats.length = 0;
    
    cats.push("Milo", "Otis", "Garfield");
});

function removeLastCat(){
    const newCatsArray2 = cats.slice();
    newCatsArray2.pop();
    return newCatsArray2;
}