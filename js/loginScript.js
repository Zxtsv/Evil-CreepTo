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
    return console.log("acceso");;
   
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

