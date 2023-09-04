
$('.galeria').slick({
    dots: true,
    infinite: false,
    pauseOnHover:true,
    arrows:false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect:true,
    // autoplay:true,
    // autoplaySpeed:3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite:true
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

let checkbox=document.getElementById('menu');
let headerNav=document.getElementById('nav-header');
let header=document.getElementById('header');
let hamburguesa=document.getElementById('hamburguesa')

checkbox.addEventListener('change',function(){
    if(checkbox.checked){
        hamburguesa.innerHTML='<img src="./assets/img/cruz.png" width="15px" height="15px">'
        headerNav.classList.add('sticky');
        header.classList.add('padding');
    }else{
        headerNav.classList.remove('sticky');
        header.classList.remove('padding');
        hamburguesa.innerHTML='<img src="./assets/img/hamburguesa.png" width="25px" height="15px">'
    }
})










