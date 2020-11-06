import slide from './slide';

export default function imageCarousel({
  containerSelector,
  controlsSelector,
  images,
}) {
  const container = document.querySelector(containerSelector);
  const controls = document.querySelector(controlsSelector);
  const slides = images.map((img, index) => slide.create(img, index));
  let iterator = 0;
  let isSwitching = false;

  function switchSlide(previousIndex, nextIndex, direction) {
    slides[previousIndex].deactivate(direction);
    isSwitching = true;
    // after the previous slide has been hidden, show the next slide
    setTimeout(() => {
      const next = slides[nextIndex];
      container.innerHTML = '';
      next.activate(direction);
      container.appendChild(next.image);
      isSwitching = false;
    }, 200);
  }

  // compute the modulus of +ve & -ve numbers
  function mod(x, n) {
    return ((x % n) + n) % n;
  }

  // move forwards, loop back to first slide at the end
  function moveForward() {
    if (isSwitching) return;
    const previousIndex = iterator;
    iterator = mod(iterator + 1, images.length);
    switchSlide(previousIndex, iterator, 'next');
  }

  // move backwards, loop back to last slide at the start
  function moveBackward() {
    if (isSwitching) return;
    const previousIndex = iterator;
    iterator = mod(iterator - 1, images.length);
    switchSlide(previousIndex, iterator, 'previous');
  }

  function init() {
    // add slide navigation links to the display controls
    slides.forEach((s) => {
      const linkButton = s.slideLink.link;

      // when a link button is clicked, switch to the corresponding slide
      linkButton.addEventListener('click', () => {
        // if the display is currently switching, prevent execution
        if (isSwitching) return;
        const previousIndex = iterator;
        iterator = Number(linkButton.id);
        if (previousIndex === iterator) return;
        const direction = iterator > previousIndex ? 'next' : 'previous';
        switchSlide(previousIndex, iterator, direction);
      });
      controls.appendChild(linkButton);
    });

    // show first image
    const initial = slides[0];
    initial.slideLink.updateStatus({ isActive: true });
    container.appendChild(initial.image);

    // advance slides every 5 seconds
    setInterval(moveForward, 5000);
  }

  return { init, moveForward, moveBackward };
}
