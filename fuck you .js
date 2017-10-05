
var friends= ["bill", "tim", "john","will","eric"];
var places= ["la","alabama","spain","georgia", "New York","england","italy","canada","mexico","guam"];
var weapons=["bat","pencil","ruller","car","phone","nail","train","speaker","hand","leg","shoe","purse","backpack","lunchbox","keyboard","glass","sword","fish","mouse","horse"];


var hey={
    friend:random(friends),
    place: random(places),
    weapon: random(weapons),
};



$(document).ready(function(){
 
        for (var i = 1; i < 101; i++) {
            $(document.body).append(`<h3 id=${i}>accusation ${i}</h3>`);
            $('h3').click.bind(null, random(friend), random(places), random(weapon));
            ('h3').click(function(){
                alert(``);
            });
        };

       
       
});



function random(arr){
  return arr[Math.floor(Math.random()*arr.length)];
    
}