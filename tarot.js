function tarotReading(){
    var cardPic = document.getElementById("cardPic");
    var cardName = document.getElementById("cardName");
    
    
    var fortuneTelling = document.getElementById("fortuneTelling");
    var lightMeaning = document.getElementById("lightMeaning");
    var shadowMeaning = document.getElementById("shadowMeaning");
    var question = document.getElementById("question");


    fetch('tarot-deck.json',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(result => result.json()).then(result => {
            cardNumber = Math.floor(Math.random() * 77) + 1; 
            fortuneNumber = Math.floor(Math.random() * 1) + 1;
            lightNumber = Math.floor(Math.random() * 3) + 1;
            shadowNumber = Math.floor(Math.random() * 3) + 1;
            questionNumber = Math.floor(Math.random() * 1) + 1;
             
            var card = result.cards[cardNumber];

            cardPic.src = "images/cards/" + card.img;
            cardName.innerHTML = card.name;

            if(card.fortune_telling.length > 1 && card.Questions_to_Ask.length > 1){
            fortuneTelling.innerHTML = card.fortune_telling[fortuneNumber];
            question.innerHTML = card.Questions_to_Ask[questionNumber];
        
        }
            else {
            fortuneTelling.innerHTML = card.fortune_telling[0];
            question.innerHTML = card.Questions_to_Ask[0];
       
            }

           if(card.meanings.light.length > lightNumber && card.meanings.shadow.length > shadowNumber){ 
            lightMeaning.innerHTML = card.meanings.light[lightNumber];
            shadowMeaning.innerHTML = card.meanings.shadow[shadowNumber];

           }
           else {
            lightMeaning.innerHTML = card.meanings.light[0];
            shadowMeaning.innerHTML = card.meanings.shadow[0];

           }


           

    });

    
}
    
document.getElementById("Tarot").addEventListener("click", tarotReading);
