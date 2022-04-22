// Tabs
const btns = document.getElementById('btns');
const contents = document.getElementById('contents');
const btnEl = Array.from(document.querySelectorAll('.btn')) ;

const changeClass = el => {
    for(let i = 0; i < btns.children.length; i++){
        btns.children[i].classList.remove('active');
    }
    el.classList.add('active');
}
for(let index  = 0; index < btnEl.length; index ++) {
    btnEl[index].addEventListener('click', e => {
        const currBtn = e.target.dataset.btn;
        changeClass(e.target);
        for (let i = 0; i < contents.children.length; i++) {
            contents.children[i].classList.remove('active');
            if(contents.children[i].dataset.content == currBtn) {
                contents.children[i].classList.add('active');
            }
    
        }
    })
}
// window-modal
const btnOpen = document.getElementById('btn-modal');
const modal = document.getElementById('modal-window');
const overlay = document.getElementById('overlay');
btnOpen.addEventListener('click', () => {
    modal.classList.add('modal-window__active');
})
const closeModal = () => {
    modal.classList.remove('modal-window__active');
}
overlay.addEventListener('click', closeModal);

// sliders
const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot'),
      slidesWrap = document.querySelectorAll('.slider-wrapper');

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('slide__active');
    }
    slides[n].classList.add('slide__active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('dot__active');
    }
    dots[n].classList.add('dot__active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    }else{
        index++;
        prepareCurrentSlide(index);
    }
};
const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    }else{
        index--;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
        clearInterval(interval);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 2500);
