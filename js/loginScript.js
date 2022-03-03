//validar login 
function validar() {
var usuario, contraseña, expresion;
usuario=document.getElementById("usuario").value;
contraseña=document.getElementById("contraseña").value;
expresion= /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w)+$/

if (usuario ==="" || contraseña===""){
  alert ("Todos los campos son obligatorios");
  return false;
}
else if (usuario.length>30){
  alert("El correo es muy largo");
return false;
 } 
 else if(expresion.test(usuario)){
  alert("El correo no es válido"); 
  return false;
 }
 else if(contraseña.length>9){
  alert("La contraseña es muy larga"); 
return false; 
}
//almacenamiento de datos Local
localStorage.setItem("usuario", usuario);
localStorage.setItem("contraseña", contraseña);

}
//validar registro
function validarRegistro() {
  var usuarioRegistro, contraseñaRegistro,repetirContraseña,expresionRegistro;
  usuarioRegistro=document.getElementById("usuarioRegistro").value;
  contraseñaRegistro=document.getElementById("contraseñaRegistro").value;
  repetirContraseña=document.getElementById("repetirContraseña").value;
  
  expresionRegistro= /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w)+$/
  
  if (usuarioRegistro ==="" || contraseñaRegistro===""){
    alert ("Todos los campos son obligatorios");
    return false;
  }
  else if (usuarioRegistro.length>30){
    alert("El correo es muy largo");
  return false;
   } 
   else if(expresionRegistro.test(usuarioRegistro)){
    alert("El correo no es válido"); 
    return false; 
  }
   if(contraseñaRegistro===repetirContraseña){
  localStorage.setItem("Nuevo usuario", usuarioRegistro);
  localStorage.setItem("Contraseña registro", contraseñaRegistro);
  return window.alert("Acceso")
   
  }else
alert("Las contraseñas no coinciden, favor de verificarlas")
return false;

//almacenamiento de datos Local
localStorage.setItem("usuarioRegistro", usuarioRegistro);
localStorage.setItem("contraseñaRegistrocontraseña", contraseñaRegistro);
localStorage.setItem("repetirContraseñacontraseña", repetirContraseña);
}
/*funciones del formato*/
$('.toggle').on('click', function() {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.container').stop().removeClass('active');
});

//Conexion fron y back "Login"
document.getElementById("btnSend").addEventListener("click", function(e){
  let usuario = document.getElementById("usuario");
  let contraseña = document.getElementById("contraseña");
  console.log(usuario.value);
  console.log(contraseña.value);
  const data = { usuario: usuario.value, 
                      contraseña: contraseña.value
  };

fetch("http://127.0.0.1:8080/api/login/", {
method: 'POST', // or 'PUT'
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
})
.then(response => response.text())
.then(data => {
console.log('Success:', data);
})
.catch((error) => {
console.error('Error:', error);
});
});

