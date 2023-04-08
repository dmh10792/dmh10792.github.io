$(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({ 
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    }); 

});

$(document).ready(function() {

    $('#slides').superslides({ //functionality for the superslides
        animation: 'fade', //causes the images to fade
        play: 3500, //the speed in milliseconds at which each image will change
        pagination: false //dots at the bottom of the container
    });//end superslides

    var typed = new Typed(".typed", {
        strings: ["Software Engineer.", "Warrant Officer.", "Unmanned Aircraft Instructor.", "Non-Commissioned Officer."],
        typeSpeed: 70, 
        loop: true, //makes it loop through each string
        startDelay: 500, //delays when the typing starts
        showCursor: false,
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,// number of items in the carousel
        responsive:{ //changes the number of items based on the screen size
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    })


    var skillsTopOffset = $(".skillsSection").offset().top; //stores the top position of the skills section
    var statsTopOffset = $(".statsSection").offset().top; //stores the top position of the stats section
    var countUpFinished = false;
        
    $(window).scroll(function() { //when the window is scrolled

        //console.log(window.pageYOffset);//prints the page scroll position to the console

        //if the scroll position is greater than the position of the offset minus the height of the window 
         //with a 200px delay buffer
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent))
                }
            });
                
        }

        if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {

            $(".counter").each(function(){
                var element = $(this);
                var endVal = parseInt(element.text().replace(/,/g, ''));
            
                element.countup(endVal);
                    
            })
            countUpFinished = true;

        }//end if
    });

    //$("[data-fancybox]").fancybox();// old fancybox stuff

    Fancybox.bind("[data-fancybox]", {
        //and options go here
    });//new fancybox


    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        }); 

        return false;

    });


    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        var body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }

    }
    
});//end documentfunction