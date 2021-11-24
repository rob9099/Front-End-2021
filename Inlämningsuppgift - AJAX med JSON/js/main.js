let content = document.getElementById('content');

async function getData (whichDataWouldYouLike) {
    try {
        let response = await fetch ('https://www.breakingbadapi.com/api/' + whichDataWouldYouLike);
        let data = await response.json();
        console.log(data);
        console.log(data[0].name);
    
        
        
        let occupationString = '';
        for(occupations of data[0].occupation){
            occupationString += occupations + ',';
        };
        occupationString = occupationString.slice(0, -1);
        
        let result = 
        `
        <article>
        <h2>Name: ${data[0].name}<h2>
        <h3><i>Nickname: ${data[0].nickname}</i></h3>
        <img src='${data[0].img}'>
        <p>Occupation: ${occupationString}</p>
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