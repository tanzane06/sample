//document.getElementById("count-el").innerText = 5;

let count = 0; 
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment(){
    count+=1;
    countEl.textContent = count;
}
increment()

function save(){
    let countStr = count + "-";
    //we use textContent instead of innerText cuz it leaves some space
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}
save()

/*Exercise 1
let myAge = 18;
let humanDogRatio = 7;
let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);*/
