// SLIDER
const copySlide = document.querySelector('.logos-slide').cloneNode(true);
document.querySelector('.slider').appendChild(copySlide);

// ACCORDION
const accordion = document.querySelectorAll('.accordion');

accordion.forEach(acc => {
    acc.addEventListener("click", () => {
        acc.classList.toggle("active");
    })
})

