(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-modal-open]'),
    closeModalBtnArray: document.querySelectorAll('[data-menu-modal-close]'),
    backdrop: document.querySelector('[data-menu-backdrop]'),
  };

  refs.openModalBtn?.addEventListener('click', toggleModal);
  for (let closeModalBtn of refs.closeModalBtnArray) {
    closeModalBtn?.addEventListener('click', toggleModal);
  }

  function toggleModal() {
    refs.backdrop.classList.toggle('backdrop--is-hidden');
  }
})();
