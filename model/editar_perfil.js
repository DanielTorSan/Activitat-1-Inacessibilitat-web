document.addEventListener("DOMContentLoaded", function() {
    const changePasswordBtn = document.getElementById("changePasswordBtn");
    const modalOverlayPassword = document.getElementById("modalOverlayPassword");
    const closeModalPassword = document.querySelector(".close-modal-password");

    // Mostrar el modal para "Canviar Contrasenya"
    changePasswordBtn.addEventListener("click", function(event) {
        event.preventDefault();
        modalOverlayPassword.style.display = "flex";
    });

    // Cerrar el modal para "Canviar Contrasenya"
    closeModalPassword.addEventListener("click", function() {
        modalOverlayPassword.style.display = "none";
    });

    // Cerrar el modal si se hace clic fuera de él
    modalOverlayPassword.addEventListener("click", function(event) {
        if (event.target === modalOverlayPassword) {
            modalOverlayPassword.style.display = "none";
        }
    });
});