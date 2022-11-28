$(document).ready(function(){
    $(document).on('click','.control nav a',function(event){
        history.pushState(null, null, event.target.href);
        $('article').load(event.target.href+' article>.content');
        event.preventDefault(); 
    })
    $(window).on('popstate', function(event){
        $('article').load(location.href+' article>.content');
    })
    var audio = new Audio('goosebumpss.mp3');
   
    $(document).on('click', '.player .icon-play', function(event){
        $(".icon-play").attr("class","icon-stop");
        audio.play();
    })
    $(document).on('click', '.player .icon-stop', function(event){
        $(".icon-stop").attr("class","icon-play");
        audio.pause();

    })
   


});
