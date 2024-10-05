fetch('/HTML/Footer.html')
    .then(response => response.text())
    .then( data => {
        document.getElementById('Footer-HTML').innerHTML = data;
    });