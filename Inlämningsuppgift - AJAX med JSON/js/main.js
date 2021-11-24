let content = document.getElementById('content');

async function getData (whichDataWouldYouLike) {
    try {
        let response = await fetch ('https://www.breakingbadapi.com/api/' + whichDataWouldYouLike);
        let data = await response.json();
        console.log(data);
        console.log(data[0].name);
    
        
    
    
    
    
    
    
    
    
    
    } catch (error) {
        content.innerHTML = 'Sorry error: ' + error;
    }
}

document.getElementById('generateRandomCharacterButton').addEventListener('click', function(){

    let randomCharacter = 'character/random';
    getData(randomCharacter);
})