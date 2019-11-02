$(function () {

    // $('#square').animate({'backgroundColor': 'blue'},1000);

    
    function animacja() {
        $('#square').animate({ 'width': '100px', 'height': '100px', 'margin-left': '100px' }, 3000)
        $('#square').animate({'backgroundColor':'blue'},5000).queue(function (next) {
            $('#square h2').animate({'color':'white'});
            next();
        });
        // 
    }

    
        
    

    


   
    $('#button').click(animacja)

});