import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from "./gallery-items.js";

const ul = document.querySelector(".gallery");

let newArr = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</li>`;
  })
  .join("");
ul.insertAdjacentHTML("afterbegin", newArr);
new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: "250",
});
