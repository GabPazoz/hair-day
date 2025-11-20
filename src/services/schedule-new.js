import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
    try {
        // Faz a requisição para enviar os dados do agendamento
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                name,
                when,
            }),
        });

        // Exibe mensagem de agendamento realizado
        alert("Agendamento realizado com sucesso!");
    } catch (error) {
        console.error(error);
        alert("Não foi possível agendar. Tente novamente mais tarde");
    }
}