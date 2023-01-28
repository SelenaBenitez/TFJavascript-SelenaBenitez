const guardarContacto = (local, contacto) => {
    local.setItem( contacto, JSON.stringify(contacto))
    window.location.href = '/'
}

const cargarContactos = (local, parentNode) => {
    let claves = Object.keys(local)
    
    for(claves of claves){
        let contacto = JSON.parse(local.getItem(claves))
        crearContacto(parentNode, contacto, local)
}
}
const crearContacto = (parentNode, contacto, local) =>{
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let borrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    nombreContacto.innerHTML = contacto.numero
    nombreContacto.innerHTML = contacto.direccion
    borrar.innerHTML = 'borrar.forever'

    divContacto.classList.add('contacto')
    borrar.classList.add('delete', 'borrar')

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(borrar)

    parentNode.appendChild(divContacto)
}