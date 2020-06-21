window.addEventListener('load', getUsers)

function getUsers(){
    fetch('htps://api.kanye.rest')
    .then(res => res.json())
    .then(data => {
        document.getElementById('quote').innerHTML = `${data.quote}`;
        document.getElementById('author').innerHTML = '- Mr. West';
    })
    .catch(err => {
        document.getElementById('quote').innerHTML = `${err}`;
        document.getElementById('author').innerHTML = '- NOT Mr. West';
    })
}