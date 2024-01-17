
function changeBackgroundColor(){
    var theme = document.getElementById('styles');
    console.log(theme);
    if (theme.getAttribute('href') == "style_bright.css") {
        theme.setAttribute('href', 'style_night.css');
        localStorage.setItem("cssFile", "style_night.css");
    } else {
        theme.setAttribute('href', 'style_bright.css');
        localStorage.setItem("cssFile", "style_bright.css");
    }
}

function checkLocalStorage(cssFile){

    if(document.getElementById('styles').getAttribute('href') != localStorage.getItem('cssFile')){
        console.log(document.getElementById('styles').getAttribute('href'))
        changeBackgroundColor();
   } 
}



window.onload = function(){
    checkLocalStorage(localStorage.getItem("cssFile"));
    console.log(document.getElementById('styles'));
}
