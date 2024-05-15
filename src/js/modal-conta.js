const btn_avaliar = document.getElementById('btn-avaliar')
const fecharModal = document.getElementById('transparencia')
const modal = document.querySelector('#modal')

btn_avaliar.addEventListener("click", () => {
    modal.style.display = 'block'
    modal.showModal()
})

modal.addEventListener("mouseleave", () => {
        modal.clone()
})