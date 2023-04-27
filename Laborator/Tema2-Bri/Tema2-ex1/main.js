const sec = document.querySelector('#seconds');
const start = document.querySelector('#start');
const timeLeft = document.querySelector('#timeLeft');
let stopTime = false;

start.addEventListener('click', () => {
    let time = sec.value;
    startTimer(time);
})



function startTimer(t) {

    let countdown = setInterval(() => {
        if(t > 0){
            t--;
            timeLeft.innerHTML = `${t} secunde ramase`;
        }
        else{
            clearInterval(countdown);
            alert('Timpul a expirat');
        }

    }, 1000)
   }




