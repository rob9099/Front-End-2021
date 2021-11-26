'use strict';

let content = document.getElementById('content');

async function getData (whichDataWouldYouLike) {
    try {
        let response = await fetch ('https://www.breakingbadapi.com/api/' + whichDataWouldYouLike);
        let data = await response.json();
        console.log(data);

        if (!response.ok){
            throw new Error ('Some network problems')
        };

        createElements(data);

    } catch (error) {
        content.innerHTML = 'Sorry error: ' + error;
    }
}



let pressGenerateRandomCharacterButton = document.getElementById('generateRandomCharacterButton');

pressGenerateRandomCharacterButton.addEventListener('click', function(){
    let randomCharacterAPI = 'character/random';
    
    document.body.style.backgroundImage = "url('img/1-16.jpg')";
    let backgroundImage = document.body.style.backgroundImage;
    //backgroundImage.opacity = '0.5';
    console.log(backgroundImage);
    
    getData(randomCharacterAPI);
})

let pressSearchButton = document.getElementById('searchButton');

pressSearchButton.addEventListener('click', function(){
    document.body.style.backgroundImage = "url('img/1-16.jpg')";
    let searchFieldInput = document.getElementById('searchField').value;
    let searchCharacterAPI = 'characters?name=' + searchFieldInput;
    document.getElementById('searchField').value = '';
    getData(searchCharacterAPI);
});


function occupation(occupationData){
    let occupationString = '';
    for(let occupations of occupationData){
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
            for(let appearance of seasonAppearanceData){
                seasonAppearancesString += appearance + ', ';
            };
            seasonAppearancesString = seasonAppearancesString.slice(0, -2);
        };
        return seasonAppearancesString;
}


function birthday (birthdayData){
    let birthday = '';
    if(birthdayData == null){
        birthday = `<i>Unknown</i>`;
    }else if(birthdayData.length == 24){
        birthday = birthdayData;
        birthday = birthday.slice(0, -14);
    }else{
        birthday = birthdayData;
    }
    return birthday;
}

function createElements (data){
    
    let result = '';
    for (let article of data){
        
        result += 
        `
        <article>
        <h2>Name: ${article.name}<h2>
        <h3><i>Nickname: ${article.nickname}</i></h3>
        <img src='${article.img}'>
        <p>Appearance in season(s): ${seasonAppearances(article.appearance)}</p>
        <p>Occupation: ${occupation(article.occupation)}</p>
        <p>Birthday: ${birthday(article.birthday)}</p>
        <p>Portrayed by: ${article.portrayed}</p>
        <p>Status: ${article.status}</p>
        </article>
        `
    };

    content.innerHTML = result;
}