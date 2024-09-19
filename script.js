$(document).ready(function() {
    // Inicializar AOS após um pequeno atraso para estabilizar o layout
    setTimeout(function() {
        AOS.init({
            duration: 800,           // Duração da animação
            once: false,            // A animação ocorre uma única vez
            offset: 0,             // Reduzir o deslocamento para 0
            easing: 'ease-in-out' // Suavizar a animação
        });
    }, 300); // Aguarda 300ms antes de inicializar o AOS

    // Inicializar carrossel de Satisfação dos Clientes
    $('.customer-feedback').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});
