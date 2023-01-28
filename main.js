const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const direccion = document.querySelector('.direccion')
const agregar = document.querySelector('.agregar')


const listadocontacto = document.querySelector('.listado-contacto')

const local = window.localStorage

agregar.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,

    }
    guardarContacto(local, contacto)
}
cargarContactos(local, listadocontacto)