// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

p1.dataset.nombre = (parseInt(p1.dataset.nombre) + 10).toString();
p1.innerHTML += " : le nombre vaut "  + p1.dataset.nombre;

let lengthh = p2.dataset.lenght.length;
p2.innerHTML += " : " + lengthh;

let tab = p3.dataset.tab;
p3.innerHTML += " : " + tab;

let booleanTest = p4.dataset.booleanTest;
booleanTest = booleanTest.toLowerCase() === 'true';
if(booleanTest){
    p4.innerHTML += " : la valeur vaut true";
}
else{
    p4.innerHTML +=" : la valeur vaut false";
}

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

p5.dataset.num = (parseInt(p1.dataset.num) + 10).toString();
p5.innerHTML += "Depuis JS - Dataset représentant un nombre : le nombre vaut "  + p1.dataset.nombre;

let tabl = p6.dataset.tabl;
p6.innerHTML += "Depuis JS - Dataset représentant une liste ( un tableau de valeurs par exemple ) : " + tabl;

let longueur = p7.dataset.longueur.length;
p7.innerHTML += "Depuis JS - Dataset représentant une chaîne de caractères : " + longueur;


let booleanTestt = p8.dataset.booleanTestt;
booleanTestt = booleanTestt.toLowerCase() === 'true';
if(booleanTestt){
    p8.innerHTML += "Depuis JS - Dataset représentant un booléen : la valeur vaut true";
}
else{
    p8.innerHTML +="Depuis JS - Dataset représentant un booléen : la valeur vaut false";
}