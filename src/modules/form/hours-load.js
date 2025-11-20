import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "./hours-click";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
    // Limpa a lista
    hours.innerHTML = "";

    // Horários ocupados retornados pela API
    const unavailableHours = dailySchedules.map((schedule) =>
        dayjs(schedule.when).format("HH:mm")
    );

    const opening = openingHours.map((hour) => {
        // Cria um timestamp com dia + hora
        const scheduleDateTime = dayjs(`${date} ${hour}`);

        const isHourPast = scheduleDateTime.isBefore(dayjs());

        const available =
            !unavailableHours.includes(hour) && !isHourPast;

        return { hour, available };
    });

    // Renderiza horários com cabeçalhos
    opening.forEach(({ hour, available }) => {

        // Corrigido: Agora os horários batem 100%
        if (hour === "09:00") hourHeaderAdd("Manhã");
        if (hour === "13:00") hourHeaderAdd("Tarde");
        if (hour === "19:00") hourHeaderAdd("Noite");

        const li = document.createElement("li");
        li.classList.add("hour", available ? "hour-available" : "hour-unavailable");
        li.setAttribute("data-hour", hour);
        li.textContent = hour;

        hours.append(li);
    });

    hoursClick();
}

function hourHeaderAdd(title) {
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;
    hours.append(header);
}
