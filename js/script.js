function eliminaCookie() {
    var elementoCookie = document.querySelector('.cookie'); //Seleccionamos aquel elemento que tenga la clase cookie
    elementoCookie.remove();
}

function loadingw(elementoCiudad) {

    var city = elementoCiudad.innerText;

    alert("Loading weather report of "+city+" ...");

    var elementoH2 = document.querySelector('.sanjose h2');
    elementoH2.innerText = city;

}