const openModal = document.querySelector('.modal__button')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close__modal')

openModal.addEventListener('click', ()=>{
    modal.classList.add('modal-show')

})

closeModal.addEventListener('click', (e)=>{
    e.preventDefault()
    modal.classList.remove('modal-show')

})