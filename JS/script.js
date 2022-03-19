
const btnToogle = document.querySelectorAll('.bloc-img img:nth-child(2)');

btnToogle.forEach((elt, index) =>{
    elt.addEventListener("click", e=> {
        document.querySelector(`.bloc-massage p.paragraphe${index+1} `).classList.toggle('toogle-paragraphe');
        elt.classList.toggle('rotate-btn');
    });    
})
