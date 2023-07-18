function validar(formulario) {

    if (formulario.name.value.trim().length == 0) {
        alert('Nombre Obligatorio')
        return false;
    }

    //Validdando el email con una expresion regular
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (!re.test(formulario.email.value)) {
        alert('Email Invalido')
        return false
    }

    if (formulario.password.value == 0) {
        alert('Contraseña Obligatoria')
        return false;
    }

    if (formulario.password.value != formulario.validation.value) {
        alert("Las Contraseñas no Conhiciden")
        return false;
    }

    if (formulario.genero.value == "") {
        alert('El Genero es obligatorio')
        return false;
    }

    if (formulario.pais.value == "") {
        alert('Debes seleccionar un Pais')
        return false;
    }

    if (!formulario.check.checked) {
        alert("Debes aceptar los terminos y condiciones")
        return false;
    }

    alert('Formulario Aceptado')
    return true;
    
}