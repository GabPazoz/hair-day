import { hoursLoad } from "../form/hours-load.js";
import { schedulesFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { scheduleShow } from "./show.js";


// Seleciona o input de data
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
    try {
        // Obtém a data do input
        const date = selectedDate.value;

        // Busca na API os agendamentos
        const dailySchedules = await schedulesFetchByDay({ date });
       
        // Exibe os agendamentos
        scheduleShow({dailySchedules})
        // Renderiza as horas disponíveis
        hoursLoad({ date, dailySchedules });

    } catch (error) {
        console.error("Erro ao buscar agendamentos:", error);
        alert("Erro ao buscar os agendamentos.");
    }
}