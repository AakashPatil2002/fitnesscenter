$(document).ready(function(){
    $(".counter").counterUp({
        time:2000
    })
});
AOS.init();
$(".sadra-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    dots:false,
    nav:true,
    navText:["<i class='bi bi-arrow-left-circle arrow-h'></i>","<i class='bi bi-arrow-right-circle arrow-h'></i>"]
});