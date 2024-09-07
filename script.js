$(document).ready(function() {
    // Inicializar AOS
    AOS.init({
        duration: 1000, // Duração da animação
        once: false // A animação só ocorre uma vez, quando o elemento entra na tela
    });

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