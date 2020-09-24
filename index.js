let theme = localStorage.getItem('theme');
let themeDots = document.getElementsByClassName('theme-dot');

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("contact-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
        form.reset();
        status.classList.add('success')
        status.innerHTML = "Thanks! Your message has been sent";
    }

    function error() {
        status.classList.add('error')
        status.innerHTML = "Oops! There was a problem submitting your message.";
    }

    // handle the form submission event

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

  // helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
        } else {
        error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

if(theme === null){
    setTheme('light');
}else{
    setTheme(theme);
};

for(let i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode === 'light'){
        document.getElementById('theme-style').href = 'style.css';
        document.getElementById('linkedinDark').style.display = "none";
        document.getElementById('linkedinLight').style.display = "block";
    }
    if(mode === 'blue'){
        document.getElementById('theme-style').href = 'blue.css';
        document.getElementById('linkedinLight').style.display = "none";
        document.getElementById('linkedinDark').style.display = "block";
    }
    if(mode === 'green'){
        document.getElementById('theme-style').href = 'green.css';
        document.getElementById('linkedinLight').style.display = "none";
        document.getElementById('linkedinDark').style.display = "block";
    }
    if(mode === 'pink'){
        document.getElementById('theme-style').href = 'pink.css';
        document.getElementById('linkedinDark').style.display = "none";
        document.getElementById('linkedinLight').style.display = "block";
    }

    localStorage.setItem('theme', mode)
}

const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}


navSlide();




window.onscroll = function() {myFunction()};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}