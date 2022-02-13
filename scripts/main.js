// I really don't know how to do JavaScript, pls don't hate
var Cooper = document.getElementById("SuperCooper");

function playAudio(url) {
    new Audio(url).play();
    Cooper.style.width = '375px';
    Cooper.style.height = '250px';
    dir = 'images/',
    delayInSeconds = 5,
    num = 1,
    len = 2,
    setInterval(function(){                           
        Cooper.src = dir + 'Cooper' + num +'.png';               
        num = (num === len) ? 1 : ++num;              
    }, delayInSeconds * 50);
  }

