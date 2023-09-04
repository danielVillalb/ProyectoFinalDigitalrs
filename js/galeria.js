let header = document.getElementById('header')
// let navegacion = Handlebars.compile(`
// <div id="nav-header">
//     <a href="#">🍚</a>
//     <label for="menu" class="menu_hamburguesa" id="hamburguesa"><img src="../assets/img/hamburguesa.png" width="25px" height="15px"></label>
//     <div class="escritorio">
//         <a href="../index.html">Home</a>
//         <a href="./decoraciones.html">Decoraciones && Tortas</a>
//         <a href="./galeria.html">Galeria</a>
//         <a href="./nosotros.html">Sobre Nosotros</a>
//     </div>
// </div>

// <input type="checkbox" id="menu">
// <nav class="movile">
// <a href="../index.html">Home</a>
//         <a href="./decoraciones.html">Decoraciones && Tortas</a>
//         <a href="./galeria.html">Galeria</a>
//         <a href="./nosotros.html">Sobre Nosotros</a>
// </nav>
// `);
header.innerHTML = `
<div id="nav-header">
    <a href="#">🍚</a>
    <label for="menu" class="menu_hamburguesa" id="hamburguesa"><img src="../assets/img/hamburguesa.png" width="25px" height="15px"></label>
    <div class="escritorio">
        <a href="../index.html">Home</a>
        <a href="./decoraciones.html">Decoraciones && Tortas</a>
        <a href="./galeria.html">Galeria</a>
        <a href="./nosotros.html">Sobre Nosotros</a>
    </div>
</div>

<input type="checkbox" id="menu">
<nav class="movile">
<a href="../index.html">Home</a>
        <a href="./decoraciones.html">Decoraciones && Tortas</a>
        <a href="./galeria.html">Galeria</a>
        <a href="./nosotros.html">Sobre Nosotros</a>
</nav>`

let checkbox=document.getElementById('menu');
let headerNav=document.getElementById('nav-header');

let hamburguesa=document.getElementById('hamburguesa')

checkbox.addEventListener('change',function(){
    if(checkbox.checked){
        hamburguesa.innerHTML='<img src="../assets/img/cruz.png" width="15px" height="15px">'
        headerNav.classList.add('sticky');
        header.classList.add('padding');
    }else{
        headerNav.classList.remove('sticky');
        header.classList.remove('padding');
        hamburguesa.innerHTML='<img src="../assets/img/hamburguesa.png" width="25px" height="15px">'
    }
})

// let prueba=document.getElementById('prueba')
// header.innerHTML=navegacion()



/*<--------------------galeria--------------> */



$('.galeria2').slick({
    slidesToShow: 2,
    dots:true,
    slidesToScroll: 1,
    autoplay: false,
    arrows:false,
    autoplaySpeed: 2000,
});













