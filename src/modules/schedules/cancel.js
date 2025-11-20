import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesDay } from "./load";

// Seleciona a lista de horarios
const periods = document.querySelectorAll(".period");

// Gera evento de click para cada lista(manha, tarde e noite)

periods.forEach((period) => {
    // Captura o evento de clique na lista
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            // Obtem a li pai do elemento clicado
            const item = event.target.closest("li");

            // Obtem o id do agendamento a partir do dataset da li
            const { id } = item.dataset;

            // Confirma que o id foi selecionado
            if (id) {
                // Pede confirmação para cancelar o agendamento
                const isConfirm = confirm(
                    "Tem certeza que deseja cancelar o agendamento?"
                );

                // Cancela o agendamento caso a confirmação seja positiva
                if (isConfirm) {
                    // Chama a função que cancela o agendamento e recarrega a lista de horario
                    await scheduleCancel({ id });
                    schedulesDay();
                }
            }
        }
    });
});