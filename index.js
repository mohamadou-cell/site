let images = document.querySelectorAll('.im');
let boutons = document.querySelectorAll('.btn');
let step = 0;
let suivant = document.getElementById('suivant');
let precedent = document.getElementById('precedent');
function defiler(){
    for(let i=0; i<images.length; i++){
        images[i].classList.remove('active');
        boutons[i].classList.remove('couleur');
    }
}
suivant.addEventListener('click', function(){
    step++;
    if(step >= images.length){
        step = 0;
    }
    defiler();
    images[step].classList.add('active');
    boutons[step].classList.add('couleur');
})
precedent.addEventListener('click', function(){
    step--;
    if(step < 0){
        step = images.length - 1;
    }
    defiler();
    images[step].classList.add('active');
    boutons[step].classList.add('couleur');
})

    
boutons[0].addEventListener('click',()=>{
    step = 0;  
    defiler();
    images[step].classList.add('active');
    boutons[step].classList.add('couleur');
})
boutons[1].addEventListener('click',()=>{
    step = 1;
    defiler();
    images[step].classList.add('active');
    boutons[step].classList.add('couleur');
})
boutons[2].addEventListener('click',()=>{
    step = 2;
    defiler();
    images[step].classList.add('active');
    boutons[step].classList.add('couleur');
})
boutons[3].addEventListener('click',()=>{
    step = 3;
    defiler();
    images[step].classList.add('active');
    boutons[step].classList.add('couleur');
})
boutons[4].addEventListener('click',()=>{
    step = 4;
    defiler();
    images[step].classList.add('active');
    boutons[step].classList.add('couleur');
})


setInterval(() => {
    step++;
    if(step >= images.length){
        step = 0;
    }
    defiler();
    images[step].classList.add('active');
    boutons[step].classList.add('couleur');
}, 2500);

let bouton1 = document.querySelector('#footer1');
let bouton2 = document.querySelector('#footer2');
bouton1.disabled =true;
function afficher(){
    let haut = document.querySelectorAll('.haut');
    let bas = document.querySelectorAll('.bas');
    for(let i=0; i<haut.length; i++){
        let team1 = haut[i];
        let team2 = bas[i];
        if(team1.style.display == 'flex'){
            team1.style.display = 'none';
            team2.style.display = 'flex';
            bouton2.disabled = true;
            bouton1.disabled = false;
        }
        else{
            team1.style.display = 'flex';
            team2.style.display = 'none';
            bouton1.disabled = true;
            bouton2.disabled = false;
        }
    }
}



