

let läggTillSyssla = document.getElementById('läggTillSysslaKnapp');

skapaÅterställningsknappVariabel = skapaÅterställningsknapp();

function skapaÅterställningsknapp (){
    let återställningsknapp = document.createElement('button');
    återställningsknapp.id = "återställningsknapp";
    återställningsknapp.className = "btn btn-secondary";
    let main = document.getElementsByTagName('main');
    återställningsknapp.innerHTML = 'Återställ';
    main.item(0).insertBefore(återställningsknapp, felmeddelanderuta);
}



läggTillSyssla.addEventListener('click', function(){
    
    
    let liPlusAlltAnnat = '';
    liPlusAlltAnnat = document.createElement('li');
    
    let input = document.getElementById('läggTillSysslaFält').value;
    document.getElementById('läggTillSysslaFält').value = '';
    
    skapaInputfältVariabel = skapaInputfält();
    
    function skapaInputfält(){
        let inputfält = document.createElement('input');
        inputfält.value = input;
        inputfält.disabled = true;
        inputfält.size = '35';
        liPlusAlltAnnat.appendChild(inputfält);
        return inputfält;
    }

    tryckÄndraknapp = skapaÄndraknapp();

    function skapaÄndraknapp(){
        
        let ändraknapp = document.createElement('button');
        ändraknapp.innerHTML = 'Ändra';
        ändraknapp.className = 'btn btn-warning';
        ändraknapp
        liPlusAlltAnnat.appendChild(ändraknapp);
        return ändraknapp;
    }

    tryckFärdigställknapp = skapaFärdigställknapp();
    
    function skapaFärdigställknapp(){
        let färdigställknapp = document.createElement('button');
        färdigställknapp.innerHTML = 'Färdig';
        färdigställknapp.className = 'btn btn-success';
        liPlusAlltAnnat.appendChild(färdigställknapp);
        return färdigställknapp;
    };

    tryckRaderaknapp = skapaRaderaknapp();

    function skapaRaderaknapp(){
        let raderaknapp = document.createElement('button');
        raderaknapp.innerHTML = 'Radera';
        raderaknapp.className = 'btn btn-danger';
        liPlusAlltAnnat.appendChild(raderaknapp);
        return raderaknapp;
    }

    tryckÄndraknapp.addEventListener('click', function(){

        tryckÄndraknapp.innerHTML = 'Spara';
        
        if(skapaInputfältVariabel.disabled == false){
            skapaInputfältVariabel.disabled = true;
                
            if(skapaInputfältVariabel.value == ''){
                felmeddelanden = 'Får ej spara tomma sysslor!';
                document.getElementById('felmeddelanderuta').innerHTML = felmeddelanden;
                skapaInputfältVariabel.disabled = false;
            }else{
                input = skapaInputfältVariabel.value;
                document.getElementById('felmeddelanderuta').innerHTML = '';
                tryckÄndraknapp.innerHTML = 'Ändra';
            }

        }else{
            skapaInputfältVariabel.disabled = false;
        };
    });
    

    tryckFärdigställknapp.addEventListener('click', function(){
        attGöraLista.nextElementSibling.appendChild(liPlusAlltAnnat);
        tryckFärdigställknapp.style.display = 'none';
    })

    tryckRaderaknapp.addEventListener('click', function(){
        liPlusAlltAnnat.remove();
    })

    återställningsknapp.addEventListener('click', function(){
        liPlusAlltAnnat.remove();
    })

    let felmeddelanden = '';
    document.getElementById('felmeddelanderuta').innerHTML = felmeddelanden;
    
    if(input == ''){
        felmeddelanden = 'Du måste skriva in en syssla';
        document.getElementById('felmeddelanderuta').innerHTML = felmeddelanden;
        document.getElementById('felmeddelanderuta').style.backgroundColor = 'Red';
    }else{
        attGöraLista.appendChild(liPlusAlltAnnat);
    }
})