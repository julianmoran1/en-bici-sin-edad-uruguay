function validar() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    console.log("hola");

    if (nombre === "") {
        alert("El campo está vacío");
    }

}