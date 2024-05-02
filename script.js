document.addEventListener('DOMContentLoaded', function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    const strings = ["Whomp Whomp, you lost, click again", "Click Again you lost", "Uh oh you lost, Click Again", "You should click again", "You are now poor, Click again"];

    const onlineGamblingPageNumber = 7;

    const button = document.querySelector('.big-red-button');
    const resultText = document.getElementById('result');


    button.addEventListener('click', function() {

        const randomIndex = Math.floor(Math.random() * numbers.length);
        const selectedNumber = numbers[randomIndex];

        if (selectedNumber === onlineGamblingPageNumber) {
   
            resultText.innerHTML = 'MAX WIN! Congratulations, you won!<br><a href="online_gambling.html">Click Here!</a>';
        } else {
            const randomStringIndex = Math.floor(Math.random() * strings.length);
            const randomString = strings[randomStringIndex];
            resultText.textContent = randomString;
        
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