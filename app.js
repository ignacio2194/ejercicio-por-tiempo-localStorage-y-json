
 const pedirNombre = prompt('ingresa tu nombre')
 const pedirApellido = prompt('ingresa tu Apellido')
const pedirDNI = prompt('ingresa tu dni') 
// guardarDatos para despues mostrarlos 
if(pedirNombre===''||pedirApellido===''||pedirDNI===''){
    alert('Datos mal ingresados');
}
 let datosUsuarios = [pedirNombre,pedirApellido,pedirDNI]; 
//guardo en local
 localStorage.setItem('nombre',pedirNombre)
localStorage.setItem('Apellidos',pedirApellido)
 localStorage.setItem('DNI ',pedirDNI) 
 //muestro esos datos 
datosUsuarios.forEach(datos => {
     alert(datos)
});
 


 