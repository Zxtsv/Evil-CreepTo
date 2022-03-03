function redirectPage(){
  window.location = "perfilUsuario.html";
} //redirectPage()
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
else if (usuario.length>45){
  alert("El correo es muy largo");
return false;
 } 
 else if(expresion.test(usuario)){
  alert("El correo no es válido"); 
  return false;
 }
 else if(contraseña.length>45){
  alert("La contraseña es muy larga"); 
return false; 
}else if(dataUser.email != usuario || dataUser.contrasena != contraseña){
  alert("Ese correo y/o contraseña no existe")}
  else if(dataUser.email == usuario && dataUser.contrasena == contraseña){
//almacenamiento de datos Local
localStorage.setItem("usuario", usuario);
localStorage.setItem("contraseña", contraseña);
setTimeout(redirectPage(), 1000); //Redirecciona la pagina en cierto tiempo / 1 seg = 1000mseg
}else {
alert("Error");
}
}
//validar registro
function validarRegistro() {
  var usuarioRegistro, contraseñaRegistro,repetirContraseña,expresionRegistro, nombre_usuario;
  usuarioRegistro=document.getElementById("usuarioRegistro").value;
  contraseñaRegistro=document.getElementById("contraseñaRegistro").value;
  repetirContraseña=document.getElementById("repetirContraseña").value;
  nombre_usuario=document.getElementById("nombre_usuario").value;
  
  expresionRegistro= /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w)+$/
  
  if (usuarioRegistro ==="" || contraseñaRegistro===""){
    alert ("Todos los campos son obligatorios");
    return false;
  }
  else if (nombre_usuario.length>45){
    alert("Tu nombre es muy largo");
  return false;
   }
  else if (usuarioRegistro.length>45){
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
  setTimeout("redirectPage()", 1000); //Redirecciona la pagina en cierto tiempo / 1 seg = 1000mseg
    return console.log("acceso");
  }else{
alert("Las contraseñas no coinciden, favor de verificarlas")
return false;

//almacenamiento de datos Local
localStorage.setItem("usuarioRegistro", usuarioRegistro);
localStorage.setItem("contraseñaRegistro", contraseñaRegistro);
localStorage.setItem("repetirContraseñacontraseña", repetirContraseña);
  }
}
/*funciones del formato*/
$('.toggle').on('click', function() {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.container').stop().removeClass('active');
});

//Conexion front y back "Login"
document.getElementById("btnSend").addEventListener("click", function(e){
  let usuario = document.getElementById("usuario");
  let contraseña = document.getElementById("contraseña");
  console.log(usuario.value);
  console.log(contraseña.value);
  var dataUser = { email: usuario.value, 
                      contrasena: contraseña.value
  };

fetch("http://127.0.0.1:8081/api/login/", {
method: 'POST', // or 'PUT'
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(dataUser),
})
.then(response => response.text())
.then(dataUser => {
console.log('Success:', dataUser);
redirectPage();
})
.catch((error) => {
console.error(alert('Error:'), error);
});
});



//Conexion front y back "Registro"
document.getElementById("btnSend2").addEventListener("click", function(e){
  let nombre_usuario=document.getElementById("nombre_usuario")
  let usuarioRegistro = document.getElementById("usuarioRegistro");
  let contraseñaRegistro = document.getElementById("contraseñaRegistro");
  
  
  console.log(nombre_usuario.value);
  console.log(usuarioRegistro.value);
  console.log(contraseñaRegistro.value);
  
  var data = { nombre_usuario:nombre_usuario.value,
                  email: usuarioRegistro.value, 
                  contrasena: contraseñaRegistro.value
  };

fetch("http://127.0.0.1:8081/api/usuarios/", {
method: 'POST', // or 'PUT'
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
})
.then(response => response.text())
.then(data => {
console.log('Success:', data);
redirectPage();
})
.catch((error) => {
console.error(alert('Error:'), error);
});
});
