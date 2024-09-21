document.addEventListener( "DOMContentLoaded", function ()
{
    function initSlideshow ( slideClass, interval, nextFnName )
    {
        let slideIndex = 0;
        const slides = document.getElementsByClassName( slideClass );

        function showSlides ()
        {
            for ( let i = 0; i < slides.length; i++ ) {
                slides[ i ].style.display = "none"; // Скрываем все слайды
            }
            slideIndex = ( slideIndex + 1 ) % slides.length; // Переходим к следующему слайду
            slides[ slideIndex ].style.display = "block"; // Показываем текущий слайд
            setTimeout( showSlides, interval ); // Автоматическая смена через заданный интервал
        }

        window[ nextFnName ] = function ( n )
        {
            slides[ slideIndex ].style.display = "none"; // Скрываем текущий слайд
            slideIndex = ( slideIndex + n + slides.length ) % slides.length; // Изменяем индекс
            slides[ slideIndex ].style.display = "block"; // Показываем новый слайд
        };

        showSlides(); // Запуск слайдшоу
    }

    // Инициализация слайдшоу с разными параметрами
    initSlideshow( "slide", 30000, "changeSlide" );
    initSlideshow( "slide2", 30000, "changeSlide2" );
} );
