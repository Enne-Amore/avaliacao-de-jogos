const profile_icon = document.getElementsByClassName('profile-icon')[0]
const fecharModal = document.getElementById('transparencia')
const modal = document.querySelector('#modal-container')
const aa = document.querySelectorAll('.a-nav')

profile_icon.addEventListener("click", () => {
    modal.style.display = 'flex'
})

fecharModal.addEventListener("click", () => {
    modal.style.display = 'none'
})

aa.forEach((a) => {
    a.addEventListener('click', () => {
        modal.style.display = 'none'
    })
})