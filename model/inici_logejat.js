document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.getElementById("dropdownMenuButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const modalOverlay = document.getElementById("modalOverlay");
    const modalOverlayModify = document.getElementById("modalOverlayModify");
    const closeModal = document.querySelector(".close-modal");
    const closeModalModify = document.querySelector(".close-modal-modify");
    const openModalButtons = document.querySelectorAll(".open-modal");
    const openModalModifyButtons = document.querySelectorAll(".open-modal-modify");

    // Mostrar el menú desplegable
    dropdownButton.addEventListener("click", function(event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle("show");
    });

    // Cerrar el menú si se hace clic fuera
    document.addEventListener("click", function(event) {
        if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });

    // Cerrar el menú con la tecla Escape
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            dropdownMenu.classList.remove("show");
        }
    });

    // Mostrar el modal para "Inserir Article"
    function openModal(event) {
        event.preventDefault();
        modalOverlay.style.display = "flex";
    }

    openModalButtons.forEach(button => {
        button.addEventListener("click", openModal);
    });

    // Mostrar el modal para "Modificar"
    function openModalModify(event) {
        event.preventDefault();
        modalOverlayModify.style.display = "flex";
    }

    openModalModifyButtons.forEach(button => {
        button.addEventListener("click", openModalModify);
    });

    // Cerrar el modal para "Inserir Article"
    closeModal.addEventListener("click", function() {
        modalOverlay.style.display = "none";
    });

    // Cerrar el modal para "Modificar"
    closeModalModify.addEventListener("click", function() {
        modalOverlayModify.style.display = "none";
    });

    // Cerrar el modal si se hace clic fuera de él
    modalOverlay.addEventListener("click", function(event) {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = "none";
        }
    });

    modalOverlayModify.addEventListener("click", function(event) {
        if (event.target === modalOverlayModify) {
            modalOverlayModify.style.display = "none";
        }
    });
});