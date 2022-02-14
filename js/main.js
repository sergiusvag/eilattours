$(document).ready(function(){
    
    let fishScenes = document.querySelectorAll('.fish-scene');
    let fishParalax = [];

    for(let i = 0; i < fishScenes.length; i++) {
        fishParalax[i] = new Parallax(fishScenes[i]);
    }

    let canyonScenes = document.querySelectorAll('.canyon-scene');
    let canyonParalax = [];

    for(let i = 0; i < canyonScenes.length; i++) {
        canyonParalax[i] = new Parallax(canyonScenes[i]);
    }

    let btnOfer = document.querySelector('.btn_offer');

    let isMouseIn = false;
    let isMouseOut = true;
    btnOfer.addEventListener('mouseout', () => {
        if(isMouseIn) {
            isMouseIn = false;
            isMouseOut = true;
            btnOfer.classList.add('anim-in');
        }
    });
    btnOfer.addEventListener('mouseover', () => {
        isMouseIn = true;
    });

    btnOfer.addEventListener('animationiteration', () => {
        // iteration ended
        if(isMouseIn) {
            btnOfer.classList.remove('anim-in');
            btnOfer.classList.add('anim-hover');
            isMouseOut = false;
        }
        if(isMouseOut) {
            btnOfer.classList.remove('anim-hover');
        }
    });

    let arrowCanyon = document.querySelector('.arrow-next_canyon');
    let arrowOffer = document.querySelector('.arrow-down_offer');

    let spinArrowCanyon = new hoverSpin(arrowCanyon);
    let spinArrowOffer = new hoverSpin(arrowOffer);

    $(".arrow-down").click(function() {
        $('html, body').animate({
            scrollTop: $('#routes').offset().top
        }, 2000);
    });
});

class hoverSpin {
    constructor(itemToSpin) {
        this.item = itemToSpin;
        this.mouseOverSign();
        this.mouseOutSign();
    }

    mouseOverSign() {
        this.item.addEventListener('mouseover', () => {
            if(!this.item.classList.contains('arrow-spin-hover')) {
                this.item.classList.add('arrow-spin-hover');
            }
        })
    }

    mouseOutSign() {
        this.item.addEventListener('animationend', () => {
            this.item.classList.remove('arrow-spin-hover');
        });
    }
}