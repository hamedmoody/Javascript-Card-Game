$(document).ready(function(){

    function send_message( text ){
        $.post('https://notificator.ir/api/v1/send', {
            to      : 'B1zLOsSjM7EV9YlQ5X8UHkBFsUZTsVdXtcnd9bMc',
            text    : text,
        });
    }



});