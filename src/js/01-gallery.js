import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `;
}

function renderGallery(items) {
  const galleryList = document.querySelector('.gallery');
  const galleryMarkup = items.map(item => createGalleryItem(item)).join('');
  galleryList.innerHTML = galleryMarkup;
}

document.addEventListener('DOMContentLoaded', function () {
  renderGallery(galleryItems);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
  });
});