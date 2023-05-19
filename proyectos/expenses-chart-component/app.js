const dias = [
    document.querySelector('.mon'),
    document.querySelector('.tue'),
    document.querySelector('.wed'),
    document.querySelector('.thu'),
    document.querySelector('.fri'),
    document.querySelector('.sat'),
    document.querySelector('.sun')
];

const diasHover = [
    document.querySelector('.mon-hover'),
    document.querySelector('.tue-hover'),
    document.querySelector('.wed-hover'),
    document.querySelector('.thu-hover'),
    document.querySelector('.fri-hover'),
    document.querySelector('.sat-hover'),
    document.querySelector('.sun-hover')
];

//Lunes

dias[0].addEventListener("mouseover", function(){
    diasHover[0].style.visibility = "visible";
});
dias[0].addEventListener("mouseout", function(){
    diasHover[0].style.visibility = "hidden";
});

//Martes

dias[1].addEventListener("mouseover", function(){
    diasHover[1].style.visibility = "visible";
});
dias[1].addEventListener("mouseout", function(){
    diasHover[1].style.visibility = "hidden";
});

//Miércoles

dias[2].addEventListener("mouseover", function(){
    diasHover[2].style.visibility = "visible";
});
dias[2].addEventListener("mouseout", function(){
    diasHover[2].style.visibility = "hidden";
});

//Jueves

dias[3].addEventListener("mouseover", function(){
    diasHover[3].style.visibility = "visible";
});
dias[3].addEventListener("mouseout", function(){
    diasHover[3].style.visibility = "hidden";
});

//Viernes

dias[4].addEventListener("mouseover", function(){
    diasHover[4].style.visibility = "visible";
});
dias[4].addEventListener("mouseout", function(){
    diasHover[4].style.visibility = "hidden";
});

//Sábado

dias[5].addEventListener("mouseover", function(){
    diasHover[5].style.visibility = "visible";
});
dias[5].addEventListener("mouseout", function(){
    diasHover[5].style.visibility = "hidden";
});


//Domingo

dias[6].addEventListener("mouseover", function(){
    diasHover[6].style.visibility = "visible";
});
dias[6].addEventListener("mouseout", function(){
    diasHover[6].style.visibility = "hidden";
});