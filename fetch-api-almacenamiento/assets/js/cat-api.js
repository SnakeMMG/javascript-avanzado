let $btnGato = document.querySelector('#btnGato');

$btnGato.addEventListener('click', () =>{
    fetch('https://api.thecatapi.com/v1/images/search    ')
   /*  function (resp) {
        return resp.json
    } */
    
    .then(resp => resp.json()).then(data => {
        console.log(data);
        let imagenGatito = document.createElement('img');
        imagenGatito.src = data[0].url;
        document.body.appendChild(imagenGatito);

       })
           
});

let $btnPerro = document.querySelector('#perro')

$btnPerro.addEventListener('click', () =>{
    fetch('https://dog.ceo/api/breeds/image/random')
     
    .then(resp => resp.json()).then(data => {
        console.log(data);
        let imagenPerro = document.createElement('img');
        imagenPerro.src = data.message;
        document.body.appendChild(imagenPerro);

       })
           
}); 