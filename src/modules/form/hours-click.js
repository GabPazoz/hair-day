export function hoursClick() {
    const availableHours = document.querySelectorAll(".hour-available");

    availableHours.forEach(hour => {
        hour.addEventListener("click", event => {
            // Remove o selecionado anterior
            availableHours.forEach(h => h.classList.remove("hour-selected"));

            // Marca o novo selecionado
            event.target.classList.add("hour-selected");
        });
    });
}