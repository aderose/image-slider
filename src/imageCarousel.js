import slide from './slide';

export default function imageCarousel({ containerSelector, images }) {
  const container = document.querySelector(containerSelector);
  const slides = images.map((img) => slide.create(img));
  let iterator = 0;

  // empty the container and show the new slide
  function showSlide(slideObj) {
    container.innerHTML = '';
    container.appendChild(slideObj);
  }

  // compute the modulus of +ve & -ve numbers
  function mod(x, n) {
    return ((x % n) + n) % n;
  }

  // move forwards, loop back to first slide at the end
  function moveForward() {
    iterator = mod(iterator + 1, images.length);
    showSlide(slides[iterator]);
  }

  // move backwards, loop back to last slide at the start
  function moveBackward() {
    iterator = mod(iterator - 1, images.length);
    showSlide(slides[iterator]);
  }

  // initialise carousel with the first slide
  showSlide(slides[0]);

  return { moveForward, moveBackward };
}
