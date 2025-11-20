import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function schedulesFetchByDay({ date }) {
    try {
        // Fazendo a requisição
        const response = await fetch(`${apiConfig.baseUrl}/schedules`);

        // Converte para JSON
        const data = await response.json();

        // Filtra os agendamentos pelo dia selecionado
        const dailySchedules = data.filter((schedule) =>
            dayjs(date).isSame(schedule.when, "day")
        );

        return dailySchedules;
    } catch (error) {
        console.error("Erro ao buscar os agendamentos:", error);
        alert("Não foi possível buscar os agendamentos");
    }
}