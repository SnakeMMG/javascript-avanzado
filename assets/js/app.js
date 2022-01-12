let title = document.getElementById('title'); //de esta manera accedemos al id que queremos acceder

//cuando se trabaja en javascript usamos id para acceder a los elementos de html
console.log(title);
title.textContent = 'Este texto esta escrito desde javascript';
let parrafos = document.getElementsByTagName('p');
console.log(parrafos);

/*parrafos[0].textContent = 'parrafos escritos desde Javascript';*/

/*for(let i = 0; i < parrafos.length; i++ ) {
    parrafos[1].textContent = 'parrafo' + i + 'escritos desde javascripts';
}*/
let email = document.getElementById('email');
let password = document.getElementById('password');

function getInformation(){
    console.log(email.value);
    console.log(password.value);
}