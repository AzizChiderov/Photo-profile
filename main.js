const pics = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
  "https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
  "https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
];
const gallery = document.querySelector(".portfolio");
const imageBox = document.createElement("div");
imageBox.classList.add('color')
const btn = document.querySelector(".btn");
const wrapper = document.querySelector(".wrapper");
const modal = document.querySelector(".modal");
const form = document.querySelector("form");
const modalBtn = document.querySelector(".modal-btn");

gallery.append(imageBox);
pics.forEach((pic) => {
  const imgWrapper = document.createElement("div");
  const img = document.createElement("img");
  img.src = pic;
  imgWrapper.classList.add("imgWrapper");
  img.classList.add("img-item");
  imgWrapper.appendChild(img);
  imageBox.appendChild(imgWrapper);
});

const imgBoxes = document.querySelectorAll('.img-item')
for (let i = 0; i < imgBoxes.length; i++) {
  imgBoxes[i].addEventListener('click', function () {
    const room = document.createElement('div')
    room.classList.add('image-zoom')
    const modalImg = document.createElement('img')
    modalImg.setAttribute('src', this.getAttribute('src'))
    modalImg.style.width = '50%'
    modalImg.style.height = '80%'
    modalImg.style.objectFit = 'cover'
    const closeBtn = document.createElement('button')
    closeBtn.classList.add('close-btn')
    closeBtn.textContent = 'close'
    closeBtn.addEventListener('click', function () {
      room.remove()
    });
    room.addEventListener('click', () => {
      room.remove()
    })
    room.appendChild(closeBtn)
    room.appendChild(modalImg)
    document.body.appendChild(room)
  });
}

btn.addEventListener("click", () => {
  wrapper.style.display = "flex";
  modal.style.display = "flex";
});

const iconX = document.querySelector(".icon-x");
iconX.addEventListener("click", () => {
  wrapper.style.display = "none";
  modal.style.display = "none";
  form.reset();
});

wrapper.addEventListener("click", () => {
  wrapper.style.display = "none";
  modal.style.display = "none";
  form.reset();
});

let obj = {}
modalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  obj.name = form.elements.name.value;
  obj.email = form.elements.email.value;
  obj.about = form.elements.text.value;

  console.log(obj);
  wrapper.style.display = "none";
  modal.style.display = "none";
  form.reset();
});
