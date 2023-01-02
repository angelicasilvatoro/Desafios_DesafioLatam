const propiedades = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
    
  
  ];

  //Cargamos los elementos a modificar
let cantidad = document.getElementById('cantidad')
let minimo = document.getElementById('minimo')
let maximo = document.getElementById('maximo')
let total = document.getElementById('total')
let propiedadesInmuebles = document.querySelector('.propiedades')

let btn = document.querySelector('.btn')  .addEventListener('click', buscarProps)

let modelo = ''
// let contador = 0
for(let casas of propiedades){
// contador ++

modelo += ` 
          <div class="propiedad">
          <div class="img" style="background-image: url('${casas.src}')"></div>
          <section>
              <h5>${casas.name}</h5>
              <div class="d-flex justify-content-between">
                  <p>Cuartos: ${casas.rooms}</p>
                  <p>Metros: ${casas.m}</p>
              </div>
              <p class="my-3">${casas.description}</p>
              <button class="btn btn-info ">Ver más</button>
          </section>
          </div> 
      `
propiedadesInmuebles.innerHTML = modelo
total.innerHTML = propiedades.length
// total.innerHTML = contador
}
  

//Crear la lógica del buscador

function buscarProps() {
  let modelo =''
  let contador = 0
  if(cantidad.value == '' || minimo.value == '' || maximo.value =='') {
    alert('faltan datos por ingresar')
  }else {
    for(let casas of propiedades)
    if(
      +cantidad.value == casas.rooms && 
      +minimo.value <= casas.m && 
      +maximo.value >= casas.m 
    ) {
      contador++
      modelo += ` 
          <div class="propiedad">
          <div class="img" style="background-image: url('${casas.src}')"></div>
          <section>
              <h5>${casas.name}</h5>
              <div class="d-flex justify-content-between">
                  <p>Cuartos: ${casas.rooms}</p>
                  <p>Metros: ${casas.m}</p>
              </div>
              <p class="my-3">${casas.description}</p>
              <button class="btn btn-info ">Ver más</button>
          </section>
          </div> 
      `

propiedadesInmuebles.innerHTML = modelo
total.innerHTML = contador;
    }
    if(contador == 0) {
      propiedadesInmuebles.innerHTML ='<h2>No hay resultados para tu búsqueda</h2>'
    }
  }
}