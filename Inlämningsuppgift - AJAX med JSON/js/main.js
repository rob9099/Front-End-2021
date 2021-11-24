let content = document.getElementById('content');

async function getData (whichDataWouldYouLike) {
    try {
        let response = await fetch ('https://www.breakingbadapi.com/api/' + whichDataWouldYouLike);
        let data = await response.json();


        let result = 
        `
        <article>
        <h2>Name: ${data[0].name}<h2>
        <h3><i>Nickname: ${data[0].nickname}</i></h3>
        <img src='${data[0].img}'>
        <p>Appearance in season(s): ${seasonAppearances(data[0].appearance)}</p>
        <p>Occupation: ${occupation(data[0].occupation)}</p>
        <p>Birthday: ${birthday(data[0].birthday)}</p>
        <p>Portrayed by: ${data[0].portrayed}</p>
        <p>Status: ${data[0].status}</p>
        `
    
        content.innerHTML = result;
    
    } catch (error) {
        content.innerHTML = 'Sorry error: ' + error;
    }
}



let generateRandomCharacterButton = document.getElementById('generateRandomCharacterButton');

generateRandomCharacterButton.addEventListener('click', function(){
    let randomCharacter = 'character/random';
    getData(randomCharacter);
})


function occupation(occupationData){
    let occupationString = '';
    for(occupations of occupationData){
        occupationString += occupations + ',';
    };
    occupationString = occupationString.slice(0, -1);
    return occupationString;
}


function seasonAppearances(seasonAppearanceData){
        let seasonAppearancesString = '';
        if(seasonAppearanceData == null){
            seasonAppearancesString = `<i>Missing data</i>`;
        }else{
            for(appearance of seasonAppearanceData){
                seasonAppearancesString += appearance + ', ';
            };
            seasonAppearancesString = seasonAppearancesString.slice(0, -2);
        };
        return seasonAppearancesString;
}


function birthday (birthdayData){
    let birthday = '';
    if(birthdayData == null){
        birthday = 'Unknown'
    }else{
        birthday = birthdayData;
        birthday = birthday.slice(0, -14);
    }
    return birthday;
}