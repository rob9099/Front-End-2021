let content = document.getElementById('content');

async function getData (whichDataWouldYouLike) {
    try {
        let response = await fetch ('https://www.breakingbadapi.com/api/' + whichDataWouldYouLike);
        let data = await response.json();
    
        
        
        let occupationString = '';
        for(occupations of data[0].occupation){
            occupationString += occupations + ',';
        };
        occupationString = occupationString.slice(0, -1);


        let seasonAppearances = '';
        if(data[0].appearance == null){
            seasonAppearances = `<i>Missing data</i>`;
        }else{
            for(appearance of data[0].appearance){
                seasonAppearances += appearance + ', ';
            };
            seasonAppearances = seasonAppearances.slice(0, -2);
        };

        let birthday = '';
        if(data[0].birthday == null){
            birthday = 'Unknown'
        }else{
            birthday = data[0].birthday;
            birthday = birthday.slice(0, -14);
        }

        
        let result = 
        `
        <article>
        <h2>Name: ${data[0].name}<h2>
        <h3><i>Nickname: ${data[0].nickname}</i></h3>
        <img src='${data[0].img}'>
        <p>Appearance in season(s): ${seasonAppearances}</p>
        <p>Occupation: ${occupationString}</p>
        <p>Birthday: ${birthday}</p>
        <p>Portrayed by: ${data[0].portrayed}</p>
        <p>Status: ${data[0].status}</p>
        `
    
        content.innerHTML = result;
    
    
    
    
    
    } catch (error) {
        content.innerHTML = 'Sorry error: ' + error;
    }
}

document.getElementById('generateRandomCharacterButton').addEventListener('click', function(){
    let randomCharacter = 'character/random';
    getData(randomCharacter);
})