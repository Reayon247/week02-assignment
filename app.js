console.log("hello world");

//Storing the image data
const images = [
  {
    imageSrc: "./Assets/Images/cat-1.jpg",
    imageAlt: "3 kittens next to each other",
    className: "catimg",
  },
  {
    imageSrc: "./Assets/Images/cat-2.jpg",
    imageAlt: "Kitten in a tree",
    className: "catimg",
  },
  {
    imageSrc: "./Assets/Images/cat-3.jpg",
    imageAlt: "kitten running in grass",
    className: "catimg",
  },
  {
    imageSrc: "./Assets/Images/cat-4.jpg",
    imageAlt: "sleepy cat",
    className: "catimg",
  },
  {
    imageSrc: "./Assets/Images/cat-5.jpg",
    imageAlt: "ginger and white cat staring at you",
    className: "catimg",
  },
  {
    imageSrc: "./Assets/Images/nala-1.jpg",
    imageAlt: "My kitten Nala",
    className: "catimg",
  },
];

//test
console.log(images[0]);

//getting the containers from the DOM
const thumbContainer = document.getElementById("thumbnailSection");
const fullContainer = document.getElementById("fullscreenSection");
let imageIndex = 0;

//function to make the thumbnail images
images.forEach(function (images, index) {
  let thumbImage = document.createElement("img");
  thumbImage.setAttribute("src", images.imageSrc);
  thumbImage.setAttribute("alt", images.imageAlt);
  thumbImage.setAttribute("class", images.className);
  let thumbIndex = index;
  thumbContainer.appendChild(thumbImage);

  thumbImage.addEventListener("click", function () {
    createBigImage(thumbImage, thumbIndex);
  });
});

function createBigImage(largeImage, index) {
  fullContainer.innerHTML = "";
  let fullImage = document.createElement("img");
  fullImage.setAttribute("src", largeImage.src);
  fullImage.setAttribute("alt", largeImage.alt);
  fullImage.setAttribute("class", "big-image");
  fullContainer.appendChild(fullImage);
  let imageIndex = index;
  console.log(imageIndex);
  return imageIndex;
}

// It console logs the correct imageIndex here, but i dont think its returning it or the rest of the code cant see it

const homeImage = images[0];
console.log(homeImage);
// createBigImage(homeImage)
// why wouldnt me putting currentImage in the fuction above work?? why did i have to type it out again and just do it like how ive done below im so confused
let mainImage = document.createElement("img");
mainImage.setAttribute("src", homeImage.imageSrc);
mainImage.setAttribute("alt", homeImage.imageAlt);
mainImage.setAttribute("class", "big-image");
fullContainer.appendChild(mainImage);

// function prevButtonClick(currentIndex) {
//   imageIndex = currentIndex - 1;
//   console.log(imageIndex);
//   return imageIndex;
// }
// function nextButtonClick(currentIndex) {
//   imageIndex = currentIndex + 1;
//   console.log(imageIndex);
//   return imageIndex;
// }

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// prevButton.addEventListener("click", prevButtonClick(imageIndex));

// nextButton.addEventListener("click", nextButtonClick(imageIndex));

//in my head, all of this should work to change the imageIndex value at least but it just doesnt work, and then i search up how and its so complicated and different it just gets me even more lost. I wouldnt even know where to begin to get the image to change when the index value changes. I see the eventlistener doesnt like me giving the funtion an argument, why???

prevButton.addEventListener("click", function () {
  imageIndex - 1;
  return imageIndex;
});

nextButton.addEventListener("click", function (imgIndex) {
  // imgIndex + 1
  imageIndex = imgIndex + 1;
  console.log(imageIndex);
  return imageIndex;
});
// why is this printing a pointer event instead of the image index??

if (imageIndex === 0) {
  console.log("0");
} else if (imageIndex === 1) {
  console.log("1");
} else if (imageIndex === 2) {
  console.log("2");
} else if (imageIndex === 3) {
  console.log("3");
} else if (imageIndex === 4) {
  console.log("4");
} else if (imageIndex === 5) {
  console.log("5");
} else if (imageIndex === 6) {
  console.log("6");
}
// i was thinking maybe using if the index === a number to run a funtion similar to the one above if not the same to switch the background if i used buttons to change the imageindex number. I think im just completely misunderstanding functions or the way arguments or parameters work though
