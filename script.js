var dropdown = false;
$(document).ready(function(){
    $(window).scroll(function() {
        if(dropdown){
            $(".dropdown-content").removeClass("dropdown-active");
            $(".arrow").removeClass("arrow-active");
            dropdown = false;
        }
    });
    $(".dropdown").click(function() {
        if(!dropdown){
            $(".dropdown-content").addClass("dropdown-active");
            $(".arrow").addClass("arrow-active");
            dropdown = true;
        }else {
            $(".dropdown-content").removeClass("dropdown-active");
            $(".arrow").removeClass("arrow-active");
            dropdown = false;
        }
    });
    $("#container-content").click(function() {
        if(dropdown) {
            $(".dropdown-content").removeClass("dropdown-active");
            $(".arrow").removeClass("arrow-active");
            dropdown = false;
        }
    })
    $(".container-contenance").click(function() {
        if(dropdown) {
            $(".dropdown-content").removeClass("dropdown-active");
            $(".arrow").removeClass("arrow-active");
            dropdown = false;
        }
    })

    $("#menuitem").click(function() {
        $(".menumobile").addClass("menuselected");
        $("#closeitem").show();
        $(".opacitylayer").addClass("opacitylayer-active");
        $("body").css("overflow", "hidden");
    })

    $("#closeitem").click(function() {
        $(this).hide();
        $(".menumobile").removeClass("menuselected");
        $(".opacitylayer").removeClass("opacitylayer-active");
        $("body").css("overflow", "auto");
    })

    $(".opacitylayer").click(function() {
        $("#closeitem").hide();
        $(".menumobile").removeClass("menuselected");
        $(".opacitylayer").removeClass("opacitylayer-active");
        $("body").css("overflow", "auto");
    })

    $("#link-products-mobile").click(function() {
        $('.products-mobile').addClass("products-mobile-active");
    })

    $("#link-back-mobile").click(function() {
        $('.products-mobile').removeClass("products-mobile-active");
    })
  
  });