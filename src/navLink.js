export default (function navLink() {
  // create a nav link object
  function create(id) {
    const link = document.createElement('button');
    const icon = document.createElement('i');
    link.setAttribute('id', id);
    icon.setAttribute('class', 'far fa-circle');
    link.appendChild(icon);

    // update the nav link display when active
    function updateStatus({ isActive }) {
      icon.setAttribute('class', `${isActive ? 'fas' : 'far'} fa-circle`);
    }

    return { link, updateStatus };
  }

  return { create };
})();
