document.getElementById("hamburger").addEventListener("click", function() { //Aanspreken van het hamburger element en een click event toevoegen
    var menu = document.getElementById("mobile-menu"); 
    menu.classList.toggle("active"); // Toggle de 'active' class om het menu te laten zien en te verbergen
});

document.getElementById("allfunctionstoggle").addEventListener("click", function(e) { //Aanspreken van de allfunctionstoggle en een click event toevoegen
    e.preventDefault() //De default settings 'preventen' zodat de pagina niet ververst na een klik op de button
    console.log('test')
    document.querySelector('#items-list').classList.toggle('functionsVisible')  //De item list laten zien wanneer er een click event plaatsvindt
    if (document.querySelector('#items-list').classList.contains('functionsVisible') ) {
        document.querySelector('#toggle-text').textContent = 'Sluiten'
    } else {
        document.querySelector('#toggle-text').textContent = 'Alle filters'

    }

});

