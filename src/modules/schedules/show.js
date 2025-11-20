import dayjs from "dayjs";

// Seleciona as sessões manha, tarde e noite

const periodMorning = document.getElementById("period-morning");
const perioAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function scheduleShow({ dailySchedules }) {
    try {
        // Limpa os horarios da sessão
        periodMorning.innerHTML = "";
        perioAfternoon.innerHTML = "";
        periodNight.innerHTML = "";

        // Renderiza os agendamentos por período

        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li");
            const time = document.createElement("strong");
            const name = document.createElement("span");

            // Adicionar o id do agendamento
            item.setAttribute("data-id", schedule.id);

            time.textContent = dayjs(schedule.when).format("HH:mm");
            name.textContent = schedule.name;

            //Cria o ícone de cancelar o agendamento

            const cancelIcon = document.createElement("img");
            cancelIcon.classList.add("cancel-icon");
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
            cancelIcon.setAttribute("alt", "Cancelar");

            // Adciona o tempo, nome e icone no item
            item.append(time, name, cancelIcon);

            // Obtem somente a hora
            const hour = dayjs(schedule.when).hour();

            // Renderiza o agendamento na sessão (manhã, tarde ou noite)
            if (hour >= 9 && hour <= 12) {
                periodMorning.appendChild(item);
            } else if (hour > 12 && hour < 18) {
                perioAfternoon.appendChild(item);
            } else   {
                periodNight.appendChild(item);
            }
        });
    } catch (error) {
        console.log(error);
        alert("Não foi possivel exibir os agendamentos");
    }
}