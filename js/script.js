if($('html').hasClass('js')){
    $('#noJs').remove();
}

$(function() {
    if($('html').hasClass('no-borderradius')){
        $('html').prepend('<div id="ie">Your browser doesn\'t support some of the new CSS styles.' +
                '<br>Consider upgrading to <a target="_blank" href="http://www.mozilla.com/en-US/firefox/">Firefox</a>, <a target="_blank" href="http://www.google.com/chrome">Chrome</a>, <a target="_blank" href="http://www.apple.com/safari/download/">Safari</a>, or <a target="_blank" href="http://windows.microsoft.com/ie9">IE9</a> for a better viewing experience. <span id="closeIE">X</span></span></div>');
        $('html').delegate('#closeIE','click',function(){
            $('#ie').slideUp(400, function(){
                $(this).remove();
            })
        });
    }

    $('#name').valid8();
    $('#emailAddress').valid8();
    $('#message').valid8();



    nav.init();

    $('#sendMailBtn').click(function(){
            if($('#name').isValid() && $('#email').isValid() && $('#message').isValid()){
                $this = $(this);
                var mailData = $('#contactDiv :input').serialize();
                var origText = $this.text();
                $this.text('Sending...');
                $.ajax({
                    url: 'sendMail.php',
                    dataType: 'text',
                    data: mailData,
                    type: 'post',
                    success:function(text){
                        $this.text(origText);
                        $('#contactDiv :input').val('');
                    },
                    error: function(){
                        alert('There was a problem sending the message');
                        $this.text(origText);
                    }
                });
            }else{
                return false;
            }

        return false;
    });

});
var nav = {
    init: function(){
        switch(location.hash){
            case '#about':
                this.about();
                break;
            case '#contact':
                this.contact();
                break;
            case '#gallery':
                this.gallery();
                break;
            default:
                this.home();
        }


        $('#homeBtn').click(this.home);
        $('#aboutBtn').click(this.about);
        $('#contactBtn').click(this.contact);
        $('#galleryBtn').click(this.gallery);
        return false;
    },
    home: function(){
        nav.removeOther();
        location.hash = '';
        $('#homeBtn').addClass('current');
        return false;
    },
    about: function(){
        nav.removeOther();
        location.hash = 'about';
        $('#aboutBtn').addClass('current');
        $('#aboutDiv').animate({bottom:0},400);
        return false;
    },
    contact: function(){
        nav.removeOther();
        location.hash = 'contact';
        $('#contacttBtn').addClass('current');
        $('#contactDiv').animate({bottom:0},400);
        return false;
    },
    gallery: function(){
        nav.removeOther();
        location.hash = 'gallery';
        $('#galleryBtn').addClass('current');
        $('#galleryDiv').animate({bottom:0},400);
        return false;
    },
    removeOther: function(){
        $('#mainDiv').find('.divSlide:visible').animate({bottom:'-500px'},100);
        $('#nav').find('.current').removeClass('current');
    }
};

