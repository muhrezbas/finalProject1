    
const draw = document.getElementById('draw');

draw.onclick = function(){

    var varNum = Math.floor(Math.random()*7);

    var card = './img/'+varNum+'.jpg';
    if(varNum === 0){
        document.getElementById('gambar').src = card;
        document.getElementById('effect').innerHTML = "If your opponent controls more monsters than you do, you can Special Summon this card (from your hand). You can only Special Summon Dinowrestler Pankratops once per turn this way. (Quick Effect): You can Tribute 1 Dinowrestler monster, then target 1 card your opponent controls; destroy it. You can only use this effect of Dinowrestler Pankratops once per turn.";
    }
    else if(varNum === 1){
        document.getElementById('gambar').src = card;
        document.getElementById('effect').innerHTML = "5 Dragon-Type monsters. Must be Fusion Summoned, and cannot be Special Summoned by other ways. Cannot be destroyed by battle with a DARK, EARTH, WATER, FIRE, or WIND monster.";
    }
    else if(varNum === 2){
        document.getElementById('gambar').src = card;
        document.getElementById('effect').innerHTML = "During the End Phase, if this card was Normal or Special Summoned this turn: You can target 1 Spell Card in your Graveyard; add it to your hand. You can only use this effect of Dark Magician of Chaos once per turn. If this card destroys an opponent's monster by battle, after damage calculation: Banish that opponent's monster. If this face-up card would leave the field, banish it instead.";
    }
    else if(varNum === 3){
        document.getElementById('gambar').src = card;
        document.getElementById('effect').innerHTML = "Cannot be Special Summoned from the Graveyard. Negate the effects of monsters destroyed by battle with Fiend-Type monsters you control.";
    }
    else if(varNum === 4){
        document.getElementById('gambar').src = card;
        document.getElementById('effect').innerHTML = "Cannot be Normal Summoned/Set. Must be Special Summoned (from your hand) by having exactly 3 DARK monsters in your Graveyard, and cannot be Special Summoned by other ways. You can banish 1 DARK monster from your Graveyard, then target 1 card on the field; destroy that target.";
    }
    else if(varNum === 5){
        document.getElementById('gambar').src = card;
        document.getElementById('effect').innerHTML = "Once per turn, you can activate this effect to remove from play the top card of your Deck and give this card 500 ATK until the End Phase. When this card is destroyed and sent from your side of the field to your Graveyard, you can select 1 of your removed from play monsters and return it to your hand.";
    }
    else if(varNum === 6){
        document.getElementById('gambar').src = card;
        document.getElementById('effect').innerHTML = "You can Ritual Summon this card with Chaos Form. This card's name becomes Dark Magician while on the field or in the GY. Once per turn, when a Spell/Trap Card, or its effect, is activated (Quick Effect): You can target 1 card on the field; destroy it. If this Ritual Summoned card is destroyed by battle or card effect: You can Special Summon 1 Chaos or Black Luster Soldier Ritual Monster from your hand, except Magician of Chaos, ignoring its Summoning conditions.";
    }
}