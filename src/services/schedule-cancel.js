import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
            method: "DELETE",
        });

        alert("Agendamento cancelado com sucesso!");
    } catch (error) {
        console.error(error);
        alert("Não foi possível cancelar o agendamento. Tente novamente mais tarde.");
    }
}

