const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortenUrl);

function shortenUrl(){
    var originalUrl = document.getElementById("originalUrl").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    shortenUrlTextarea = document.getElementById("shortenedUrl");

    fetch(apiUrl).then(response => response.text()).then(data =>{
        shortenUrlTextarea.value =data;
    }).catch(error => {
        shortenUrlTextarea.value = "Error : Unable to shorten URL!";
    });
}

reloadBtn.addEventListener('click', () =>{
    location.reload();
});