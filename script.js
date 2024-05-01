// DESKTOP

const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())   
btnRight.addEventListener("click", e => moveToRight()) 

setInterval(() => {
    moveToRight()
}, 9000);

let operacion = 0;
    counter=0
    widthImg=100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1){
        counter=0
        operacion=0
        slider.style.transform = `translate(-${operacion}%)`
        return;
    } 
        counter++;
        operacion=operacion + widthImg
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease .6s"
     
}

function moveToLeft(){
    counter--;
    if(counter < 0){
        counter=sliderSection.length-1;
        operacion= widthImg * (sliderSection.length -1)
        slider.style.transform = `translate(-${operacion}%)`
        return;
    } 
        operacion=operacion - widthImg
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease .6s"
    
   
    
}


// Obtener referencia al checkbox y al div a desplazar
const checkbox = document.getElementById('check');
const divDesplazar = document.getElementById('desplazar');

// Agregar un event listener al checkbox para detectar cambios en su estado
checkbox.addEventListener('change', function() {
    console.log('Checkbox estado cambiado');
    // Verificar si el checkbox está marcado
    if (this.checked) {
        // Si está marcado, desplazar el div hacia abajo
        divDesplazar.style.transform = 'translateY(100vh)';
        divDesplazar.style.transition = '.3s' // Puedes ajustar el valor de translateY según tu diseño
    } else {
        // Si no está marcado, restaurar la posición del div
        divDesplazar.style.transform = 'translateY(0)';
    }
});

