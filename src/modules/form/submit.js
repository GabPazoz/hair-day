import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

const today = dayjs().format("YYYY-MM-DD");
selectedDate.value = today;
selectedDate.min = today;

form.onsubmit = async (e) => {
    e.preventDefault();

    try {
        const name = clientName.value.trim();
        if (!name) return alert("Informe o nome do cliente");

        const selectedHourLi = document.querySelector(".hour-selected");
        if (!selectedHourLi) return alert("Selecione o horário");

        const hour = selectedHourLi.textContent; // "09:00"
        const [hh, mm] = hour.split(":");

        const when = dayjs(selectedDate.value)
            .hour(Number(hh))
            .minute(Number(mm));

        const id = String(Date.now());

        await scheduleNew({
            id,
            name,
            when: when.toISOString(),
        });

        await schedulesDay();

        clientName.value = "";

    } catch (error) {
        alert("Não foi possível realizar o agendamento");
        console.log(error);
    }
};
