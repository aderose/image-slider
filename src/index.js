const carousel = [
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
];

const imageDiv = document.querySelector('#image');

// add the provided image to the image container
function showImage({ src, alt }) {
  imageDiv.innerHTML = '';
  const image = document.createElement('img');
  image.setAttribute('src', src);
  image.setAttribute('alt', alt);
  imageDiv.appendChild(image);
}

// show the first carousel image on load
showImage(carousel[0]);
