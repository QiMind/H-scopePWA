const splash = document.querySelector('.splash');
const mainmenu = document.querySelector('.mainmenu');
const horoscope = document.querySelector('.horoscope');
const tarot = document.querySelector('.tarrot');
var sign = document.getElementById('sign');


document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    },2000);
})


function toHoroscope()
{
    mainmenu.classList.add('display-none');
    horoscope.classList.remove('display-none');
    document.getElementById('p1').innerHTML = sign.options[sign.selectedIndex].text;
}

function backButton()
{
    mainmenu.classList.remove('display-none');
    horoscope.classList.add('display-none');
    tarot.classList.add('display-none');
}

function toTarrot()
{
    mainmenu.classList.add('display-none');
    tarot.classList.remove('display-none');
}