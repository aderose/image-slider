import slide from './slide';

export default function imageCarousel({ containerSelector, images }) {
  const container = document.querySelector(containerSelector);
  const slides = images.map((img) => slide.create(img));
  let iterator = 0;
  let nextSlide = slides[0];
  let direction = 'next';

  // remove classes when picture is active
  function active() {
    this.setAttribute('class', '');
    this.removeEventListener('animationend', active);
  }

  function showNextSlide() {
    // remove the animation class & listener from the previous element
    this.setAttribute('class', '');
    this.removeEventListener('animationend', showNextSlide);

    // clear container, append the next slide with animation
    container.innerHTML = '';
    nextSlide.addEventListener('animationend', active);
    nextSlide.setAttribute('class', direction);
    container.appendChild(nextSlide);
  }

  function switchSlide() {
    const previous = container.firstChild;
    previous.addEventListener('animationend', showNextSlide);
    previous.setAttribute('class', `before-${direction}`);
  }

  // compute the modulus of +ve & -ve numbers
  function mod(x, n) {
    return ((x % n) + n) % n;
  }

  // move forwards, loop back to first slide at the end
  function moveForward() {
    iterator = mod(iterator + 1, images.length);
    nextSlide = slides[iterator];
    direction = 'next';
    switchSlide();
  }

  // move backwards, loop back to last slide at the start
  function moveBackward() {
    iterator = mod(iterator - 1, images.length);
    nextSlide = slides[iterator];
    direction = 'previous';
    switchSlide();
  }

  // initialise carousel with the first slide
  container.appendChild(nextSlide);

  return { moveForward, moveBackward };
}
