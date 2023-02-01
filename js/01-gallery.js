import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

galleryContainer.addEventListener('click', onImgClick);


function createGalleryCards(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
}

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
   
const instance = basicLightbox.create(
    `<img src=${evt.target.dataset.source} width="800" height="600" />`,
    {
      onShow: () => {
        window.addEventListener('keydown', closeModal);
      },
      onClose: () => {
        window.removeEventListener('keydown', closeModal);
      },
    }
  );
  function closeModal(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
  instance.show();
};

console.log(galleryItems);
