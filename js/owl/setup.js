$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{ /*Quando a tela tiver ate 599px exibir 1 item*/
            items:1
        },
        600:{ /*Quando a tela tiver 600px ou menos exibir 3 items*/ 
            items:3
        },
        1000:{ /*Quando a tela tiver 1000px ou menos exibir 5 items*/ 
            items:5
        }
    }
})