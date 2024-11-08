/* 
Ejercicio: Vamos a realizar la validación de una contraseña segura en un formulario de registro (para registrarnos sólo necesitamos un email, que se puede validar desde HTML y una contraseña, que se debe repetir y validar desde JS)

La contraseña debe tener lo siguiente (Todo obligatorio): 

1. Al menos dos mayúsculas.
2. Al menos un carácter de los siguientes: * / - # ~
3. Al menos tres números entre 5 y 9
4. Un tamaño de entre 10 y 15
*/

function validarPassword() {
	let password_1 = document.getElementById("password").value;
	let password_2 = document.getElementById("confirmpassword").value;
	let message = document.getElementById("message");

	// Establecemos las condiciones de la contraseña:
	let mayusculas = (password_1.match(/[A-Z]/g) || []).length >= 2;
	let caracterEspecial = /[*\/#~-]/.test(password_1);
    const tresNumeros = (password_1.match(/[5-9]/g) || []).length >= 3;
    const tamaño = password_1.length >= 10 && password_1.length <= 15;

    // Verifica si la contraseña cumple todos los requisitos
    if (!mayusculas) {
        message.innerText = "La contraseña debe contener al menos dos letras mayúsculas.";
    } else if (!caracterEspecial) {
        message.innerText = "La contraseña debe contener al menos un carácter especial: * / - # ~.";
    } else if (!tresNumeros) {
        message.innerText = "La contraseña debe contener al menos tres números entre 5 y 9.";
    } else if (!tamaño) {
        message.innerText = "La contraseña debe tener entre 10 y 15 caracteres.";
    } else if (password_1 !== password_2) {
        message.innerText = "Las contraseñas no coinciden.";
    } else {
        message.innerText = "Registro exitoso!";
    }


	/* if (password_1 == password_2) {
		alert("Registro existoso");
	} else {
		let message = "No ha sido posible registrarte";
		alert(message);
	} */

}