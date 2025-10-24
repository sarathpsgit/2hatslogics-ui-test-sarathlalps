// Search Script
document.addEventListener('DOMContentLoaded', function () {
    // Get the search icon element
    var searchIcon = document.getElementById('searchIcon');
    // Get the search bar element
    var searchBar = document.getElementById('searchBar');

    // Add a click event listener to the search icon
    searchIcon.addEventListener('click', function (event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Toggle the "d-none" class on the search bar
        searchBar.classList.toggle('d-none');
    });

    // Mobile-only Swiper init for grid slider
    var gridSwiperInstance = null;
    function enableGridSwiper() {
        if (gridSwiperInstance) return;
        var swiperEl = document.querySelector('#gridSwiper');
        if (!swiperEl) return;
        gridSwiperInstance = new Swiper('#gridSwiper', {
            slidesPerView: 1.1,
            spaceBetween: 12,
            centeredSlidesBounds: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    function destroyGridSwiper() {
        if (gridSwiperInstance) {
            gridSwiperInstance.destroy(true, true);
            gridSwiperInstance = null;
        }
    }

    function handleResponsive() {
        if (window.innerWidth < 768) {
            enableGridSwiper();
        } else {
            destroyGridSwiper();
        }
    }

    handleResponsive();
    window.addEventListener('resize', handleResponsive);
});



