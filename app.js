if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

const splash = document.querySelector('.splash');
const mainmenu = document.querySelector('.mainmenu');
const horoscope = document.querySelector('.horoscope');
const tarot = document.querySelector('.tarrot');

const sign = document.getElementById('sign');
const btn_horoscope = document.createElement("button");
const btn_tarot = document.createElement("button");

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

function mainMenu()
{
    sign_array = ['aquarius','pisces','aries','taurus','gemini','cancer','leo','vigro','libra','scorpio','saggittarius','capricorn'];
}
