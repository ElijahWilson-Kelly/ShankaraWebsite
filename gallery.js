let photos = [];
let index = 0;

const slideShowSpeed = 100;

photos.push({
  'caption': '',
  'src': './images/1-low-resolution.jpg'
})

photos.push({
  'caption': '',
  'src': './images/2.jpg'
})

photos.push({
  'caption': '',
  'src': './images/3.jpeg'
})

photos.push({
  'caption': '',
  'src': './images/4.jpeg'
})

photos.push({
  'caption': '',
  'src': './images/6.jpeg'
})

photos.push({
  'caption': '',
  'src': './images/7.jpg'
})

photos.push({
  'caption': '',
  'src': './images/8.jpg'
})

photos.push({
  'caption': '',
  'src': './images/9.jpg'
})

const previous = document.getElementById('gallery-previous');

const next = document.getElementById('gallery-next');

const imageDiv = document.getElementById('photo-div');

const changePhoto = dir => {
  index += dir;
  if (index < 0) {
    index = photos.length - 1;
  } else if (index > photos.length - 1) {
    index = 0;
  }

  const url = photos[index].src;

  imageDiv.style.backgroundImage = `url('${url}'`;

  imageDiv.style.opacity = '1';
}


previous.addEventListener('click',function(e) {
  imageDiv.style.opacity = '0';
  setTimeout(function() {
    changePhoto(-1);
  }, 200)
});

next.addEventListener('click',function() {
  imageDiv.style.opacity = '0';
  setTimeout(function() {
    changePhoto(1);
  }, 200)
});
