// MAP //
let arrMap = ["https://www.google.com/maps/embed/v1/place?q=rostov+on+don&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8","https://maps.google.com/maps?q=bat%20yam&t=&z=13&ie=UTF8&iwloc=&output=embed","https://maps.google.com/maps?q=tel%20aviv&t=&z=13&ie=UTF8&iwloc=&output=embed"];
let cityIndex = 1;

function fPrev(){
cityIndex--;
myFunction();
checkButtons();
}

function fNext(){
cityIndex++;
myFunction();
checkButtons();
}

function checkButtons(){
document.getElementById('prev').disabled = false;
document.getElementById('next').disabled = false;
if (cityIndex == arrMap.length - 1){
document.getElementById('next').disabled = true;
}
if (cityIndex ==  0){
document.getElementById('prev').disabled = true
}

}

function myFunction(){
document.getElementById('mapCity').src = arrMap[cityIndex];
}
// MAP //

