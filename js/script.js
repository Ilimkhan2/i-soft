$(document).ready(function(){
    $("#menu li a").click(function(){
        $("#menu li a").removeClass('active');
        $(this).addClass('active')

        var targetedItems = $(this).data('target');
        if(targetedItems === 'all'){
            $(".care").fadeIn();
        }else{
            $(".care").hide();
            $("."+targetedItems).fadeIn();
        }
    })
});