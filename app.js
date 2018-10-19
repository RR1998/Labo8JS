
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");
/*1.Los elementos que contengan el id bitacora*/

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
    
  }
  if(formulario[1].value == "" && formulario[2].value != "" && formulario[3].value != ""){
    formulario[1].style.borderColor = "red";
    formulario[2].style.borderColor = "green";
    formulario[3].style.borderColor = "green";
  }
  
  if(formulario[1].value != "" && formulario[2].value == "" && formulario[3].value != ""){
    formulario[1].style.borderColor = "green";
    formulario[2].style.borderColor = "red";
    formulario[3].style.borderColor = "green";
  }
  
  if(formulario[1].value != "" && formulario[2].value != "" || formulario[3].value == ""){
    formulario[1].style.borderColor = "green";
    formulario[2].style.borderColor = "green";
    formulario[3].style.borderColor = "red";
  }
  
  if(formulario[1].value == "" && formulario[2].value == "" || formulario[3].value != ""){
    formulario[1].style.borderColor = "red";
    formulario[2].style.borderColor = "red";
    formulario[3].style.borderColor = "green";
  }
  
  if(formulario[1].value == "" && formulario[2].value == "" || formulario[3].value != ""){
    formulario[1].style.borderColor = "red";
    formulario[2].style.borderColor = "green";
    formulario[3].style.borderColor = "red";
  }
  
  if(formulario[1].value == "" && formulario[2].value == "" || formulario[3].value == ""){
    formulario[1].style.borderColor = "green";
    formulario[2].style.borderColor = "red";
    formulario[3].style.borderColor = "red";
  }
  
  if(formulario[1].value == "" && formulario[2].value == "" || formulario[3].value == ""){
    formulario[1].style.borderColor = "red";
    formulario[2].style.borderColor = "red";
    formulario[3].style.borderColor = "red";
  }
  
  if(formulario[3].value < 0){
      formulario[3].style.borderColor = "red";
  }

  else{
    formulario[1].style.borderColor = "green";
    formulario[2].style.borderColor = "green";
    formulario[3].style.borderColor = "green";
    bitacoras.push(bitacora);
    cont++;
    mostrar();
  };
    
 }); 
//2.evita que la accion por defecto se active
//3.contiene el valor de la poscision del formulario


const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 

//tr contiene un elemento nuevo de ese tipo, td contiene un elemento nuevo por cada vez que se ejecute el tamano de la bitacora
//
//el ultimo valor enviado para agregar a la  lista
//Crea el elemento
const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }
//selecciona el primer valor del arreglo
//vacio
const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
//extrae el valor de la posicion en el areglo de items
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
//Se crea un elemento con los campos necesarios para la tabla
//contar los elementos heredados
//Un elemento extra en la tabla de datos
//Todos los elementos ingresados 