let firstImage = document.getElementById("my");
firstImage.src = "https://picsum.photos/id/237/1000/500";

const slides = document.querySelectorAll(".slide");

let counter = 0;
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

const goPrev =()=>{
  counter--
  slideImage()
} 

const goNext = () => {
  counter++
  slideImage()
}

const slideImage = () =>{
  slides.forEach((slide) =>{
      slide.style.transform = `translateX(-${counter * 100}%)`
    }
  )
}

