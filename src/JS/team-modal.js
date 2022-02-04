const refs = {
  body: document.querySelector('body'),
  modalBtn: document.querySelector('.icon-close'),
  modalOverlay: document.querySelector('.modal-overlay'),
  footerTeamOpenModal: document.querySelector('.footer-link'),

}

refs.footerTeamOpenModal.addEventListener('click', openModal);

function openModal() {
  refs.body.classList.add('onOpenModal');
  refs.modalOverlay.classList.remove('is-hidden');
  refs.modalBtn.addEventListener('click', closeModal);
}
  
function closeModal () {
  refs.body.classList.remove('onOpenModal');
  refs.modalOverlay.classList.add('is-hidden');
  refs.modalBtn.removeEventListener('click', closeModal);
}