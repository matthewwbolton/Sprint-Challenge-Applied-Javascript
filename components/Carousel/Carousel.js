/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carousel () {
  const carousel = document.createElement('div'),
        leftBtn = document.createElement('div'),
        img1 = document.createElement('img'),
        img2 = document.createElement('img'),
        img3 = document.createElement('img'),
        img4 = document.createElement('img'),
        rightBtn = document.createElement('div');

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";

  carousel.append(leftBtn, img1, img2, img3, img4, rightBtn);



  leftBtn.addEventListener('click', (e) => {
      console.log(e.target);
     
     
  })
      
    
      
      
  
      
  rightBtn.addEventListener('click', (e) => {
    console.log(e.target);
  
  }
    
  )

  return carousel;

}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.append(carousel());

const images = document.getElementsByTagName('img');
const imgArr = Array.from(images);
console.log(images);
console.log(imgArr);
console.log(imgArr[0]);




// slideIndex = 0;
// for (let i = 0; i < imgArr.length; i++){
//   imgArr[i].style.display = 'none';
// }
// slideIndex++;
// if (slideIndex > imgArr.length){
//   slideIndex = 1
// }
// imgArr[slideIndex - 1].style.display = 'block';







// function showImg(img) {
//   for (i = 0; i < imgArr.length; i++) {
//     imgArr[i].style.display = "none";
//   }
//   img.style.display = "block";
// }






// const test = Object.values(imgArr);
// console.log(test);



// imgArr[0].src = './assets/carousel/mountains.jpeg';
// imgArr[1].src = './assets/carousel/computer.jpeg';
// imgArr[2].src = './assets/carousel/trees.jpeg';
// imgArr[3].src = './assets/carousel/turntable.jpeg';





// let currentImg = 0;
// let currentIndex = 0;
// for (let i=0; i < imgArr.length; i++){
//     currentIndex = imgArr[i]++;
  
// }

// imgArr[currentImg];
//         currentImg++;
//         if (currentImg > imgArr.length){
//             currentImg = 0;
//         }
