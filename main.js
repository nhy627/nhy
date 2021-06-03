$(function(){

    var n = 0;

    setInterval( moveing , 2500)

    // function moveing(){
    //         if(n <2){
    //             n++;
    //         } else{
    //             n=0;
    //         }
    //     var pos = n * (-1200) +"px";
    //     console.log("n : ", n);
    //     console.log("pos : " , pos);
    //     $("#slid_img ul").animate({left:pos }, 500)

    // }

    function moveing(){
        $("#slid_img ul").animate({left: "-=1200px"}, 500, function(){
            $("#slid_img ul").append($("#slid_img ul li").first())
            $("#slid_img ul").css("left", "0")
        })
    };

    $(".main > li > a , .sub").hover(function(){
        $(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    });

    

    $(".tab h2").click(function(){
        $(".tab h2").removeClass("on");
        $(".tab ul").hide();
        $(this).addClass("on").next().show();
    });

    $(".popup").click(function(){
        $(".pop div").fadeIn();
    })
    $(".close").click(function(){
        $(".pop div").fadeOut();
    })
})