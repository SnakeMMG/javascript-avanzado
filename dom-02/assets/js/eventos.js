let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector('#btnMensaje');
let $spanError = document.querySelector('span')
/* addEvenlistener arega un evento a un elemento */
$btnMensaje.addEventListener('click', () => {
    console.log('no me preciones');
});

/* keydown, se activa el enevento cuando se usan las teclas */
$mensaje.addEventListener('keyup', (e) => {
    console.log(e.target.value);//nos muestra lo que se lo que se escribe
    /* console.log(e); */
   /*  console.log('escribiste algo'); */
   if(e.target.value.length < 3){
    $spanError.classList.remove('hide');
    $spanError.classList.add('error');
   }else{
    $spanError.classList.remove('error');
    $spanError.classList.add('hide');
   }
});

/* function mostrarConsole(){
    console.log('escribiste algo')
} */
