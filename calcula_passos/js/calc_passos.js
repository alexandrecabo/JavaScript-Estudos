const form = document.getElementById("form");
const resultadoContainer = document.getElementById("resultado");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const distancia = parseFloat(document.getElementById("distancia").value);
  
  if (distancia) {
    const passos = distancia * 1312.34; //em 1km anda 1312 passos
    const tempoMinutos = distancia * 12; //em 1km leva 12 minutos
    const tempoHoras = tempoMinutos / 60; //divide por 60 minutos para ter o tempo em horas
    const dias = tempoHoras / 24;
    
    resultadoContainer.innerHTML = `
      <table>
        <tr>
          <th>Distância (KM)</th>
          <td>${distancia.toFixed(2)}</td>
        </tr>
        <tr>
          <th>Tempo (Minutos)</th>
          <td>${tempoMinutos.toFixed(2)}</td
          </tr>
          <tr>
            <th>Tempo (Horas)</th>
            <td>${tempoHoras.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Dias (Horas/24)</th>
            <td>${dias.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Passos</th>
            <td>${passos.toFixed()}</td>
          </tr>
        </table>
      `;
    } else {
      resultadoContainer.innerHTML = "";
      alert("Por favor, informe uma distância válida.");
    }
  });
  