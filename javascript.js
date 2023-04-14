$(document).ready(function(){
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        if (scroll>=50) {
           $(".sticky").addClass("stickyadd"); 
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    })

    var typed = new Typed(".element",{
        strings: ["SHHYAAM KUMAR","a Web Designer"," a  Digital Photo Editor","an Editor","a student","a devloper"],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDealy:1000
    });

// progress bar
var p = documemt.querySelectorAll('.progress-bar');
p[0].setAttribute("style", "width:100%; transition:1s all");
p[1].setAttribute("style", "width:95%;transition:1.5s all");
p[2].setAttribute("style", "width:88%;transition:1.7s all");
p[3].setAttribute("style", "width:86%;transition:2s all");
p[4].setAttribute("style", "width:84%;transition:2.5s all");


})
// contact number
$(document).ready(function(){
    $("#contact").click(function(){
        alert("If you want my number mail me in shyam25.ranga@gmail.com with want number");
        console.log(alert);
    });
});