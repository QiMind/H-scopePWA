function preds(){
var preds = document.getElementById('preds');
var data;
fetch('/js/data.json',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(result => result.json()).then(result => {
    var out = "";
    var rng = Math.floor(Math.random() * 100) + 1;

    for(i = 0; i<result.length; i++) {
        if(i == rng )
        {
            out = result[i].text;
            preds.innerHTML = out;
        }
    }
});
}

document.getElementById("Horoscope").addEventListener("click", preds);