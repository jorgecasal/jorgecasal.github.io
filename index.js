let theme = localStorage.getItem('theme');
let themeDots = document.getElementsByClassName('theme-dot');

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
