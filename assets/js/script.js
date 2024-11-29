$(document).ready(function() {
    /* ___________________ start home page ___________________ */
    
    // ... header secction
    $(".menu_toggleBtn,.header_backDrop").click(function() {
        $(".header").toggleClass("active_header");
    });

    function checkScroll() {
        if ($(window).scrollTop() > 50) {
            $("body").addClass('scrolled_header');
        } else {
            $("body").removeClass('scrolled_header');
        }
    }
    checkScroll();
    $(window).on('scroll', function() {
        checkScroll();
    });
    

    // ... feedback slider
    $(".feedback_slider").owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: false,
        onInitialized: updateCounter,
        onChanged: updateCounter
    });

    function updateCounter(event) {
        var totalItems = event.item.count;
        var currentItem = event.item.index - event.relatedTarget._clones.length / 2 + 1;

        if (currentItem > totalItems) {
            currentItem = currentItem - totalItems;
        }

        $(".current_number").text(currentItem.toString().padStart(2, '0'));
        $(".total_number").text(`/ ${totalItems.toString().padStart(2, '0')}`);
    }

    $(".feedback_sliderBox .btn_next").click(function() {
        $(".feedback_slider").trigger("next.owl.carousel");
    });

    $(".feedback_sliderBox .btn_prev").click(function() {
        $(".feedback_slider").trigger("prev.owl.carousel");
    });
    /* ___________________ end home page ___________________ */
});

$(window).on('load', function() {
    // ----- scroll trigger animation
    AOS.init({
        easing: 'ease-out',
        duration: 800,
        // once: true
    });
})