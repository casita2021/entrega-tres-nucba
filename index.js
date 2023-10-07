const pizzas = [

    {
  
      id: 1,
  
      nombre: "pizza de Muzzarella",
  
      precio: 500,
  
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  
      imagen: "./img/muzzarella.png",
  
    },
  
    {
  
      id: 2,
  
      nombre: "pizza de Cebolla",
  
      precio: 1500,
  
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  
      imagen: "./img/cebolla.png",
  
    },
  
  
    {
  
      id: 3,
  
      nombre: "pizza 4 Quesos",
  
      precio: 1380,
  
      ingredientes: [
  
        "Muzzarella",
  
        "Tomate",
  
        "Queso Azul",
  
        "Parmesano",
  
        "Roquefort",
  
      ],
  
      imagen: "./img/4quesos.png",
  
    },
  
  
    {
  
      id: 4,
  
      nombre: "pizza Especial",
  
      precio: 1000,
  
      ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
  
      imagen: "./img/especial.png",
  
    },
  
  
    {
  
      id: 5,
  
      nombre: "pizza con Anana",
  
      precio: 600,
  
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
  
      imagen: "./img/anana.png",
  
    },
  
  ];
  
  
  
  
  const pizzaSeleccionada = document.getElementById('selectedPizza') //input
  
  const error = document.getElementById('errorContainer')//span error
  
  const selectPizza = document.getElementById('selectPizza') //boton
  
  const contenedorRender = document.querySelector('.renderContainer')// contenedor de pizza
  
  
  
  
  /* console.log(contenedorRender) */
  
  const hasError = (variableAVerificar) => {
  
    isValid = true
  
    if (!variableAVerificar.length) {
  
  
  
  
      error.innerHTML = "El input esta vacio"
  
  
  
  
      return
  
    } else if (variableAVerificar > pizzas.length || variableAVerificar < 1) {
  
      error.innerHTML = "La pizza seleccionada no existe"
  
      return
  
    }
  
  
  
  
    return isValid
  
  }
  
  
  
  
  const renderizarPizza = (pizzaSeleccionada) => {
  
    const selectedPizza = pizzas.filter((pizza) => { return pizza.id == pizzaSeleccionada })
  
    const { nombre, ingredientes, precio, imagen } = selectedPizza[0]
  
  
  
  
    return contenedorRender.innerHTML =
  
      `
  
  <div class="card">
  
      <h2>${nombre.toUpperCase()}</h2>
  
      <p>${ingredientes.join(' , ')}</p>
  
      <p>$ ${precio}</p>
  
      <img src="${imagen}" alt="" srcset="">
  
  </div>
  
  `
  
  
  
  
  }
  
  
  
  
  const saveLS = (selection) => {
  
    localStorage.setItem('pizzaGuardada', JSON.stringify(selection))
  
  }
  
  
  
  
  
  
  
  const seleccionarPizza = () => {
  
      const valorPizza = pizzaSeleccionada.value
  
    contenedorRender.innerHTML = ""
  
    if (hasError(valorPizza)) {
  
      error.innerHTML = ""
  
      saveLS(valorPizza)
  
      renderizarPizza(valorPizza)
  
    }
  
  
  
  
  }
  
  
  
  
  const pizzaGuardada = () => {
  
        const pizzaPorDefecto = JSON.parse(localStorage.getItem('pizzaGuardada'))
  
      if (pizzaPorDefecto) {
  
       renderizarPizza(pizzaPorDefecto)
  
      }
  
  }
  
  
  
  
  const init = () => {
  
    pizzaSeleccionada.addEventListener('submit',(e) => {e.preventDefault})
  
    document.addEventListener("DOMContentLoaded", pizzaGuardada)
  
    selectPizza.addEventListener('click', seleccionarPizza)
  
  
  
  
  }
  
  init()