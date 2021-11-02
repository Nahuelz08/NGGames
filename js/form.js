
$(document).ready(function () {
    $("#form").submit(function (e) { 
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Muy bien!',
            text: 'Tu mensaje ha sido enviado!',
            confirmButtonText: 'Genial!'
        })
        $('#reset').click(); //Al enviar da click en Limpiar y borra los campos.
    });
});


