var switchButton1 = document.querySelector('#switch');
var switchButton2 = document.querySelector('#switch');
var switchButton3 = document.querySelector('#switch');
var image1 = document.querySelector('#img1');
var image2 = document.querySelector('#img2');
var image3 = document.querySelector('#img3');

switchButton1.addEventListener('click', function(){
  switchButton2.classList.remove('switch2');
  switchButton3.classList.remove('switch3');
  image1.classList.add('img3');
  image2.classList.add('img1');
  image3.classList.add('img2');
  image1.classList.remove('img1');
  image2.classList.remove('img2');
  image3.classList.remove('img3');
});

switchButton2.addEventListener('click', function(){
  switchButton1.classList.remove('switch1');
  switchButton3.classList.add('switch3');
  image1.classList.add('img2');
  image2.classList.add('img3');
  image3.classList.add('img1');
  image1.classList.remove('img3');
  image2.classList.remove('img1');
  image3.classList.remove('img2');
});

 