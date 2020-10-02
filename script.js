$(document).ready(function(){

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