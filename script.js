document.addEventListener('DOMContentLoaded', function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7];

    const onlineGamblingPageNumber = 7;

    const button = document.querySelector('.big-red-button');
    const resultText = document.getElementById('result');


    button.addEventListener('click', function() {

        const randomIndex = Math.floor(Math.random() * numbers.length);
        const selectedNumber = numbers[randomIndex];

        if (selectedNumber === onlineGamblingPageNumber) {
   
            resultText.innerHTML = 'Congratulations! You won!<br><a href="online_gambling.html">Go to Online Gambling</a>';
        } else {
            resultText.textContent = 'Sorry, you lost. Click Again';
        }
    });
});


window.addEventListener('scroll', reveal);

function reveal(){
    console.log('Scrolling...');
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}