
const btnToogle = document.querySelectorAll('.bloc-droite img');

btnToogle.forEach((elt, index) =>{
    elt.addEventListener("click", e=> {
        let btn = e.target;
        console.log(index + " " + elt);
        document.querySelector(`.bloc-gauche p.paragraphe${index+1} `).classList.toggle('toogle-paragraphe');
        elt.classList.toggle('rotate-btn');

    });    
})
