$(document).ready(function() {

$(function(){
    $('.type').typed({
        strings: [
            "a Coder.",
            "an Engineer.",
            "a Graphic Designer.",
            "a Runner.",
            "a Soccer Player."
        ],
        typeSpeed: 100,
        backDelay: 300,
        loop: true,
    })
});

$('.fullBackground').fullClip({
    images: [ "./images/baker.jpg",
             "./images/bench.jpg",
            "./images/darthall.jpg",
            "./images/frat.jpg"],
    transitionTime: 2000,
    wait: 5000
})
    

});

