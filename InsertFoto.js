document.addEventListener("DOMContentLoaded", () => {
  const imageInput = document.getElementById("imageInput");
  const tagInput = document.getElementById("tagInput");
  const dateInput = document.getElementById("dateInput");
  const descriptionInput = document.getElementById("descriptionInput");
  const uploadButton = document.getElementById("uploadButton");
  const albumContainer = document.getElementById("albumContainer");

  loadImagesFromLocalStorage();

  uploadButton.addEventListener("click", () => {
    const files = imageInput.files;
    const tag = tagInput.value.trim();
    const date = dateInput.value;
    const description = descriptionInput.value.trim();

    if (files.length === 0) {
      alert("Please select at least one image.");
      return;
    }

    if (!tag) {
      alert("Please enter a tag.");
      return;
    }

    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageSrc = e.target.result;
          addImageToAlbum(imageSrc, tag, date, description);
          saveImageToLocalStorage(imageSrc, tag, date, description);
          console.log("prova");
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select a valid image file.");
      }
    });
    resetInputs();
  });

  function addImageToAlbum(imageSrc, tag, date, description) {
    let tagContainer = document.querySelector(`.album-tag[data-tag="${tag}"]`);

    if (!tagContainer) {
      tagContainer = document.createElement("div");
      tagContainer.classList.add("album-tag");
      tagContainer.setAttribute("data-tag", tag);

      const tagTitle = document.createElement("h3");
      tagTitle.textContent = tag;
      tagContainer.appendChild(tagTitle);

      albumContainer.appendChild(tagContainer);
    }

    const img = document.createElement("img");
    img.src = imageSrc;

    const imgContainer = document.createElement("div");
    imgContainer.appendChild(img);

    if (date) {
      const dateElement = document.createElement("p");
      dateElement.textContent = `Date: ${date}`;
      imgContainer.appendChild(dateElement);
    }

    if (description) {
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = `Description: ${description}`;
      imgContainer.appendChild(descriptionElement);
    }

    tagContainer.appendChild(imgContainer);
  }

  function saveImageToLocalStorage(imageSrc, tag, date, description) {
    const imageData = { imageSrc, tag, date, description };
    let images = JSON.parse(localStorage.getItem("images")) || [];
    images.push(imageData);
    localStorage.setItem("images", JSON.stringify(images));
    console.log("immagine salvata nel local storage");
  }

  function loadImagesFromLocalStorage() {
    const images = JSON.parse(localStorage.getItem("images")) || [];
    images.forEach((imageData) => {
      addImageToAlbum(
        imageData.imageSrc,
        imageData.tag,
        imageData.date,
        imageData.description
      );
    });
  }

  function resetInputs() {
    imageInput.value = "";
    tagInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
  }
});
