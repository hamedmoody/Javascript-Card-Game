$(document).ready(function(){

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    function send_message( text ){
        $.post('https://notificator.ir/api/v1/send', {
            to      : 'B1zLOsSjM7EV9YlQ5X8UHkBFsUZTsVdXtcnd9bMc',
            text    : text,
        });
    }
    
    var fruits = [
        'apple',
        'avokado',
        'banana',
        'blackberry',
        'cherry',
        'grape',
        'mango',
        'melon',
        'nectarine',
        'orange',
        'pear',
        'pomegranate',
        'strawberry',
        'tomato',
        'watermelon',
        'apple',
        'avokado',
        'banana',
        'blackberry',
        'cherry',
        'grape',
        'mango',
        'melon',
        'nectarine',
        'orange',
        'pear',
        'pomegranate',
        'strawberry',
        'tomato',
        'watermelon',
    ];



});
