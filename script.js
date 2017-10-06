
var friends= ["bill", "tim", "john","will","eric"];
var places= ["la","alabama","spain","georgia", "New York","england","italy","canada","mexico","guam"];
var weapons=["bat","pencil","ruller","car","phone","nail","train","speaker","hand","leg","shoe","purse","backpack","lunchbox","keyboard","glass","sword","fish","mouse","horse"];



function back(){
    console.log(this);
    alert( `I accuse ${this.item1} , with the ${ this.item2} in the ${this.item3}`)
}


$(document).ready(function(){
  
        for (var i = 1; i < 101; i++) {
            var h3 = $(`<h3>Accusation ${i}</h3>`);
           
            
            h3.click(back.bind({
                 item1:friends[Math.floor(Math.random()*friends.length)],
                 item2:places[Math.floor(Math.random()*places.length)],
                 item3:weapons[Math.floor(Math.random()*weapons.length)],

                 
            }));


            $('body').append(h3);
        }
       
});


