export default (function slide() {
  function create({ src, alt }) {
    const image = document.createElement('img');
    image.setAttribute('src', src);
    image.setAttribute('alt', alt);
    return image;
  }
  return { create };
})();
