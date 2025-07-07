const profile_icon = document.getElementsByClassName('profile-icon')[0]
const fecharModal = document.getElementById('transparencia')
const modal = document.querySelector('#modal-container')
const aa = document.querySelectorAll('.a-nav')

profile_icon.addEventListener("click", () => {
    modal.style.display = 'flex'
})

// Abrindo o menu através do teclado
profile_icon.addEventListener('keypress', (tecla) => {
    if (tecla.key === "Enter") {
        tecla.target.click()
        document.querySelector("#account").focus()
    }
})

fecharModal.addEventListener("click", () => {
    modal.style.display = 'none'
})

aa.forEach((a) => {
    a.addEventListener('click', () => {
        modal.style.display = 'none'
    })
})