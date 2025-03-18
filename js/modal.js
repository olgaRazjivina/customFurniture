const openModalBtns = document.querySelectorAll('[data-action="modal"]');
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");

function openModal() {
  modal.classList.add("modal--opened");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  modal.classList.remove("modal--opened");
  document.body.classList.remove("no-scroll");
}

// Открываем модальное окно
openModalBtns.forEach(function (item) {
  item.addEventListener("click", function () {
    openModal();
  });
});

// Закрываем модальное окно по клику на оверлей
modal.addEventListener("click", function () {
  closeModal();
});

// Отменяем всплытие события с элементов формы внутри modalBody
modalContent.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Закрытие клавишей Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
