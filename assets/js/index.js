let ticketsCarrusel = `<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>`;

let innerCarru = `<div class="carousel-item active" data-bs-interval="10000">
<div class="overlay-image" style="background-image: url(assets/images/baki.jpg);"></div>
</div>
<div class="carousel-item" data-bs-interval="2000">
<div class="overlay-image" style="background-image: url(assets/images/baki_hanma.jpg);"></div>
</div>
<div class="carousel-item">
<div class="overlay-image" style="background-image: url(assets/images/baki_hanma_1.jpg);"></div>
</div>`;
let numero = 2;
let variarFotos = 1;
const addImages = () => {
    ++numero;
    variarFotos == 1 ? ++variarFotos : --variarFotos;
    ticketsCarrusel += `<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${numero}" aria-label="Slide ${numero}"></button>`;
    innerCarru += `<div class="carousel-item">
    <div class="overlay-image" style="background-image: url(assets/images/baki_hanma_${variarFotos}.jpg);"></div>
    </div>`;

    document.getElementById("ticketsCarrusel").innerHTML = ticketsCarrusel;
    document.getElementById("innerCarru").innerHTML = innerCarru;
}

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}



