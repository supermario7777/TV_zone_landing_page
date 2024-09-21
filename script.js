document.addEventListener( "DOMContentLoaded", function ()
{
    let slideIndex = 0;
    showSlides();

    function showSlides ()
    {
        const slides = document.getElementsByClassName( "slide" );
        for ( let i = 0; i < slides.length; i++ ) {
            slides[ i ].style.display = "none"; // Скрываем все слайды
        }
        slideIndex = ( slideIndex + 1 ) % slides.length; // Переходим к следующему слайду
        slides[ slideIndex ].style.display = "block"; // Показываем текущий слайд
        setTimeout( showSlides, 30000 ); // Автоматическая смена каждые 5 секунд
    }

    window.changeSlide = function ( n )
    {
        const slides = document.getElementsByClassName( "slide" );
        slides[ slideIndex ].style.display = "none"; // Скрываем текущий слайд
        slideIndex = ( slideIndex + n + slides.length ) % slides.length; // Изменяем индекс
        slides[ slideIndex ].style.display = "block"; // Показываем новый слайд
    };
} );
