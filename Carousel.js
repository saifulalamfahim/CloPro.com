







let activeImages = document.getElementsByClassName('active');
let thumbnails = document.getElementsByClassName('thumbnail');


// for (const thumbnail of thumbnails) {
//     thumbnail.addEventListener('click', function() {
//        document.getElementsByClassName.remove('carousel');
       
//     })
    
// }



for (var i=0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', function(){
        if (activeImages.length > 0){
            activeImages[0].classList.remove('active')
        }
        this.classList.add('active')
        document.getElementById('featured').src = this.src;
    })
}

let buttonLeft = document.getElementById('slideLeft');
let buttonRight = document.getElementById('slideRight');

// // thumbnails.addEventListener('click', function(){
// //     console.log("kaj")
// // })

buttonLeft.addEventListener('click', function() {
    document.getElementById('slider').scrollLeft -= 180
})
buttonRight.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft += 180
});



// const images = ["Images/Image-1.png", "Images/Image-2.png", "Images/Image-3.png"];
// const carousel = document.querySelector('.carousel');
// const thumbnails = document.getElementsByClassName('thumbnail');
// const activeImages = document.getElementsByClassName('active');







// const interval = setInterval(function() {
//     startCarousel();
    
// }, 3000);
// var index = 1;
// startCarousel = () => {
//     carousel.style.backgroundImage = `url(${images[index++]})`;
//     carousel.classList.remove('fade');
//     void carousel.offsetWidth;
//     carousel.classList.add('fade');
//     if(index > images.length -1) index = 0;
    
// }


