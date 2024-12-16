document.getElementById("hamburger").addEventListener("click", function() {
    var menu = document.getElementById("mobile-menu");
    menu.classList.toggle("active"); // Toggle the 'active' class to show/hide the menu
});

document.getElementById("allfunctionstoggle").addEventListener("click", function(e) {
    e.preventDefault()
    console.log('test')
    document.querySelector('#items-list').classList.toggle('functionsVisible')
});

