fetch('/HTML/NavBar.html')
    .then(response => response.text())
    .then( data => {
        document.getElementById('NavBar-HTML').innerHTML = data;
    });