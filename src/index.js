import imageCarousel from './imageCarousel';

// initialise the image carousel module within a parent container using the
// provided list of images
const carousel = imageCarousel({
  containerSelector: '#image',
  controlsSelector: '#controls',
  images: [
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      alt: 'Lovely Beach',
    },
    {
      src: 'https://images.unsplash.com/photo-1532124957326-34c5605398',
      alt: 'Ski Slope',
    },
    {
      src: 'https://images.unsplash.com/photo-1467453678174-768ec283a940',
      alt: 'Healthy Living',
    },
    {
      src: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b',
      alt: 'Working',
    },
    {
      src: 'https://images.unsplash.com/photo-1519852476561-ec618b0183ba',
      alt: 'Grand river',
    },
  ],
});

carousel.init();

// move forward when the forward button is clicked
const forward = document.querySelector('#forward');
forward.addEventListener('click', carousel.moveForward);

// move backward when the backward button is clicked
const backward = document.querySelector('#backward');
backward.addEventListener('click', carousel.moveBackward);
