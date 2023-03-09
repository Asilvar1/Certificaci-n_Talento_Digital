/* const baseDeDatos = [
    {
        id: 1,
        título: 'gatos1',
        imagen: '/public/images/Foto5.jpg',
        texto: 'texto',
        likes: 5,
        dislikes: 6,
        fecha: '05/03/2023',
        autor: 'Felipe',
        categoria: 'gatos',
    },
    {
        id: 2,
        título: 'gatos2',
        imagen: '/public/images/Foto5.jpg',
        texto: 'texto2',
        likes: 5,
        dislikes: 2,
        fecha: '06/03/2023',
        autor: 'Ignacio',
        categoria: 'gatos',
    },
    {
        id: 3,
        título: 'perros1',
        imagen: '/public/images/Foto5.jpg',
        texto: '',
        likes: '',
        dislikes: '',
        fecha: '07/03/2023',
        autor: 'Gabriela',
        categoria: 'perros',
    },
    {
    id: 4,
        título: 'perros2',
        imagen: '/public/images/Foto5.jpg',
        texto: 'texto4',
        likes: 4,
        dislikes: 8,
        fecha: '08/03/2023',
        autor: 'Camila',
        categoria: 'perros',
    }
    
        ]; */
        var baseDeDatos

document.addEventListener('DOMContentLoaded', () => {
    
    // Variables
obtenerdatos()


/* renderizarProductos(baseDeDatos) */
        })
                   


function renderizarProductos(arreglonoticias) {
    var DOMnoticias = document.querySelector('#noticias');
    // agregar función para limpear antes de inyectar

DOMnoticias.innerHTML = ""
          
    arreglonoticias.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-12', 'h-5', 'w-50');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.título;
        // Texto
        const miNodoTexto = document.createElement('p');
        miNodoTexto.classList.add('card-text');
        miNodoTexto.textContent = info.texto;
        // fecha
        const miNodoFecha = document.createElement('p');
        miNodoFecha.classList.add('card-subtitle');
        miNodoFecha.textContent = info.fecha;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid','w-25',);
        miNodoImagen.setAttribute('src', info.imagen);
        // Insertamos
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoTexto);
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoFecha);

        miNodo.appendChild(miNodoCardBody);
        DOMnoticias.appendChild(miNodo);
    
    });
}



function obtenerdatos () {
    fetch("http://localhost:3000/noticias", {
              method: 'GET', 
              headers: {'Content-Type': 'application/json'}
              
            })
    .then (function(res) {

/* console.log(res.json()) */
$.get('/noticias',function(res){
    baseDeDatos=res
    renderizarProductos(res)
})

    })
}

























// ------------------- Funciones para ordenar noticias/articulos

function ordenarDescendente() {
    /* const noticias = document.querySelectorAll(".card");
    const noticiasArray = Array.from(noticias); */
    const arregloordenado = baseDeDatos
    arregloordenado.sort(function(a, b) {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      return fechaB - fechaA;
    });
    
    renderizarProductos(arregloordenado)    
  }
  
  function ordenarAscendente() {
   const arregloordenado = baseDeDatos
    arregloordenado.sort(function(a, b) {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      return fechaA - fechaB;
    });
    renderizarProductos(arregloordenado) 

  }


