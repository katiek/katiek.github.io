
window.addEventListener('load', function() {
    var myCard = document.querySelector('#katiekorngold');
    myCard.getElementsByClassName('headshot')[0].addEventListener('mouseover', function(){
    	myCard.getElementsByClassName('headshot')[0].style.backgroundImage = "url(https://s3.amazonaws.com/katiek/IMG_8305_profile_picture_blink.jpg)"
    	myCard.getElementsByClassName('headshot')[0].style.backgroundSize = 'cover';
    	setTimeout(function(){
    		myCard.getElementsByClassName('headshot')[0].style.backgroundImage = "url(https://s3.amazonaws.com/katiek/IMG_8305_profile_picture_no_blink.jpg)";}, 300);

    });
    var flipButtons = Array.prototype.slice.call(myCard.querySelectorAll('i.flip'));
    flipButtons.forEach(function(button) {
    	button.addEventListener('mousedown',function(){
    		myCard.getElementsByClassName('headshot')[0].style.backgroundImage = "url(https://s3.amazonaws.com/katiek/IMG_8305_profile_picture_blink.jpg)"
    	});
        button.addEventListener('mouseup', function() {
        	myCard.getElementsByClassName('headshot')[0].style.backgroundImage = "url(https://s3.amazonaws.com/katiek/IMG_8305_profile_picture_no_blink.jpg)"
            myCard.classList.toggle('flipped');
        });
    });
});

