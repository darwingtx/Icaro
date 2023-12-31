$(document).ready(function () {
    
    function validarFormulario() {
       
        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        var usuario = $('#usuario').val();
        var email = $('#E-mail').val();
        var pais = $('#pais').val();
        
        if (nombre === '' || apellido === '' || usuario === '' || email === '' || pais === '') {
            alert('Todos los campos son obligatorios. Por favor, complete el formulario.');
            return false;
        }

        // Validar el formato del correo electrónico
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Ingrese una dirección de correo electrónico válida.');
            return false;
        }

         
        var usuarioData = {
            nombre: nombre,
            apellido: apellido,
            usuario: usuario,
            email: email,
            pais: pais,
            foto: "./Assets/Images/cuenta.png"
        };

        localStorage.setItem('usuarioData', JSON.stringify(usuarioData));

        alert('Registro exitoso. ¡Bienvenido a ÍCARO!');
        window.location.href = 'Inicio.html';
        return true;
    }

    // Asociar la función de validación al evento de clic en el botón Registrar
    $('.clas').on('click', function (e) {
        e.preventDefault();
        validarFormulario();
    });
});