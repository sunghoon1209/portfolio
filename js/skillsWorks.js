$(document).ready(function () {
    $(".hbm").css("display", "block");

    $('.hbm').on("click", function () {

        let hbmOn = $('.hbm>img').attr("src");
        if (hbmOn == "./images/hbm.gif" | hbmOn == "./images/hbmrev.gif") {
            $('.hbm>img').attr("src", "./images/hbmani.gif")
            $('header').css('right', '0');


        } else {
            $('.hbm>img').attr("src", "./images/hbmrev.gif")
            $('header').css('right', '');

        }


    });

    $(".details").on("click", function () {
        $(".modal").css("display", "block");
    });

    $(".xbtn").on("click", function () {
        $(".modal").css("display", "");
    });


});