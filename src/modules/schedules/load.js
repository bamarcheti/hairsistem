import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "./show.js";

const selectedDate = document.getElementById("date");
export async function schedulesDay() {
  // Busca na API os agendamentos para carregar do lado direito da tela.
  const date = selectedDate.value;

  // Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  // Exibe os agendamentos
  schedulesShow({ dailySchedules });

  // Renderiza as horas disponíveis.
  hoursLoad({ date });
  // Os horários disponíveis (horário futuro + não agendado) do lado esquerdo (form)
}
