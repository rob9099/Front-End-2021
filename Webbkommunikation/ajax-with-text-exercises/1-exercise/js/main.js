/** 
 * Skapa en knapp "Fetch data".
 * När man klickar på knappen, 
 * så skall texten från http://mardby.se/AJK15G/lorem_text.php hämtas och visas på sidan.
 * Hämta texten med hjälp av AJAX, se kodgenomgången js-ajax-intro
 */
		
document.getElementById('hämtaDataknapp').addEventListener('click', function(){

   fetch ('http://mardby.se/AJK15G/lorem_text.php')
   .then ((svar) => {
    console.log(svar);
    //console.log(svar.text());
    return svar.text();
   })
   
   .then ((data) => {
    console.log(data);
    //document.getElementsByTagName('div').innerHTML = data;
    document.getElementById('test').innerHTML = data;
   })

   .catch ((error) => {
      document.getElementById('test').innerHTML = 'Sorry, error'
   })
});