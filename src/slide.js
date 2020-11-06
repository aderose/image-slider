import navLink from './navLink';

export default (function slide() {
  function create({ src, alt }, id) {
    const slideLink = navLink.create(id);
    const image = document.createElement('img');
    image.setAttribute('src', src);
    image.setAttribute('alt', alt);
    image.setAttribute('id', id);

    async function activate(direction) {
      slideLink.updateStatus({ isActive: true });
      image.setAttribute('class', direction);
      // reset the image class to blank after the animation duration
      await new Promise((r) => setTimeout(r, 500));
      image.setAttribute('class', '');
    }

    async function deactivate(direction) {
      slideLink.updateStatus({ isActive: false });
      image.setAttribute('class', `before-${direction}`);
      await new Promise((r) => setTimeout(r, 200));
      image.setAttribute('class', '');
    }

    return { image, slideLink, activate, deactivate };
  }
  return { create };
})();
