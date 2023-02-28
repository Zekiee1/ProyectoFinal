
function mostrarOcultar(div) {
    var exp = document.getElementById(div);
        
    if (exp.style.display === 'none') {
      exp.style.display = 'block';
      console.log("Mostrar experiencia");
    } else {
      exp.style.display = 'none';
      console.log("Ocultar experiencia");
      
    }
  }
 
  function cambioIcono(icono) {
    icono.classList.toggle('fa-chevron-down');
  } 
 
  /** Para esta parte me guié con la web w3schools */