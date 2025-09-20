document.addEventListener('DOMContentLoaded', function() {
  // === CONFIGURAÇÃO DO FULLCALENDAR ===
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridWeek',
    slotMinTime: '12:00:00',
    slotMaxTime: '23:00:00',
    allDaySlot: false,
    slotDuration: '01:00:00',
    slotLabelInterval: '01:00',
    height: 'auto',

    events: [
      { title: 'LAYLA PEREIRA DA SILVA', start: '2025-09-14T15:00:00', className: 'green' },
      { title: 'ALMOÇO', start: '2025-09-14T16:00:00', className: 'blue' },
      { title: 'LUANA SILVA OLIVEIRA MÃE', start: '2025-09-14T17:00:00', className: 'green' },
      { title: 'LETICIA DIAS PLATINIR', start: '2025-09-14T18:00:00', className: 'green' },
      { title: 'MARIA JULIA DIVINO AVELAR', start: '2025-09-14T19:00:00', className: 'green' },
      { title: 'SOPHIA MEIRA DE PAULA MÃE', start: '2025-09-14T20:00:00', className: 'green' },
      { title: 'ANA LUIZA MENDES DE', start: '2025-09-14T21:00:00', className: 'green' },
      { title: 'CAROLINE MARTINS DE', start: '2025-09-14T22:00:00', className: 'green' },
      { title: 'CLARA SOUTO CHAVES DE', start: '2025-09-14T23:00:00', className: 'green' },
      { title: 'MÃE CAMILA', start: '2025-09-15T15:00:00', className: 'red' },
      { title: 'CRISTINA', start: '2025-09-15T16:00:00', className: 'green' },
      { title: 'ALMOÇO', start: '2025-09-15T17:00:00', className: 'blue' },
      { title: 'WAILANE DE SOUZA GOMES', start: '2025-09-15T18:00:00', className: 'green' },
      { title: 'MELISSA COELHO MARQUES', start: '2025-09-15T19:00:00', className: 'green' },
      { title: 'MÃE LARISSA', start: '2025-09-15T20:00:00', className: 'green' },
      { title: 'MELISSA COELHO MARQUES', start: '2025-09-15T21:00:00', className: 'green' },
      { title: 'MÃE LARISSA', start: '2025-09-15T22:00:00', className: 'green' },
      { title: 'KENYA CRISTINI FERREIRA RIBE', start: '2025-09-15T23:00:00', className: 'red' },
      { title: 'DIENIFER KEIT DA SILVA MAGALHÃES', start: '2025-09-16T15:00:00', className: 'green' },
      { title: 'ALMOÇO', start: '2025-09-16T16:00:00', className: 'blue' },
      { title: 'JULIA CRISTINA CARVALHO', start: '2025-09-16T17:00:00', className: 'green' },
      { title: 'STEFANY SARA OLIVEIRA', start: '2025-09-16T18:00:00', className: 'green' },
      { title: 'JOSE ELIAS RIBEIRO', start: '2025-09-16T19:00:00', className: 'green' },
      { title: 'ELTON MARCOS ANSELMO MÃE', start: '2025-09-16T20:00:00', className: 'green' },
      { title: 'SOPHIA MEIRA DE PAULA MÃE', start: '2025-09-16T21:00:00', className: 'green' },
      { title: 'VALENTINA DAMASCENO', start: '2025-09-16T22:00:00', className: 'green' },
      { title: 'DEBORA DUARTE DE PAULA', start: '2025-09-16T23:00:00', className: 'red' },
      { title: 'NATHAN ROGERIO SILVA', start: '2025-09-17T15:00:00', className: 'green' },
      { title: 'ALMOÇO', start: '2025-09-17T16:00:00', className: 'blue' },
      { title: 'VINIUS AUGUSTO ALMEIDA', start: '2025-09-17T17:00:00', className: 'green' },
      { title: 'JULIA CARVALHO SANTOS MÃE', start: '2025-09-17T18:00:00', className: 'green' },
      { title: 'ELTON MARCOS ANSELMO MÃE', start: '2025-09-17T19:00:00', className: 'green' },
      { title: 'CIERO JOSE DA SILVA', start: '2025-09-17T20:00:00', className: 'green' },
      { title: 'MELISA RODRIGUES DIAS MÃE', start: '2025-09-17T21:00:00', className: 'green' },
      { title: 'PRISCILA BATISTA RODRIGUES', start: '2025-09-17T22:00:00', className: 'green' },
      { title: 'CLARA SOUTO CHAVES DE', start: '2025-09-17T23:00:00', className: 'green' },
      { title: 'LUIZ HENRIQUE DE OLIVEIRA', start: '2025-09-18T15:00:00', className: 'green' },
      { title: 'ALMOÇO', start: '2025-09-18T16:00:00', className: 'blue' },
      { title: 'TULIO SIQUEIRA DE OLIVEIRA', start: '2025-09-18T17:00:00', className: 'green' },
      { title: 'THALLY HENRIQUE ASSIS MÃE', start: '2025-09-18T18:00:00', className: 'green' },
      { title: 'CIERO JOSE DA SILVA', start: '2025-09-18T19:00:00', className: 'green' },
      { title: 'ROSA DABIEN', start: '2025-09-18T20:00:00', className: 'green' },
      { title: 'CRISTAL FERREIRA DA SILVA', start: '2025-09-18T21:00:00', className: 'green' },
      { title: 'GEORGISON OLIVEIRA BASTOS', start: '2025-09-18T22:00:00', className: 'green' },
      { title: 'THALISSON AVELINO PERES', start: '2025-09-18T23:00:00', className: 'green' },
      { title: 'ALMOÇO', start: '2025-09-19T15:00:00', className: 'blue' }
    ],

    eventDidMount: function(info) {
      if (info.event.classNames.includes('green')) {
        info.el.style.backgroundColor = 'green';
      } else if (info.event.classNames.includes('red')) {
        info.el.style.backgroundColor = 'red';
      } else if (info.event.classNames.includes('blue')) {
        info.el.style.backgroundColor = '#0366d6';
      }
    },

    customButtons: {
      addEventButton: {
        text: '+ ADICIONAR',
        click: function() {
          alert('Adicionar evento');
        }
      }
    },

    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next addEventButton'
    }
  });

  calendar.render();

  // === COLAPSAR SIDEBAR (só ícones) ===
  const sidebar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".menu-icon");

  menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });

  // === CLIQUE NOS ITENS DA SIDEBAR PARA NAVEGAR ===
  document.querySelectorAll(".sidebar nav ul li").forEach((item, index) => {
    item.addEventListener("click", () => {
      switch (index) {
        case 0: window.location.href = "index.html"; break;
        case 1: window.location.href = "convenios.html"; break;
        case 2: window.location.href = "filtrar_idades.html"; break;
        case 3: window.location.href = "pacientes.html"; break;
        case 4: window.location.href = "agenda.html"; break;
        case 5: window.location.href = "agendamentos.html"; break;
        case 6: window.location.href = "aniversariante_do_dia.html"; break;
        case 7: window.location.href = "servicos.html"; break;
        case 8: window.location.href = "financeiro.html"; break;
      }
    });
  });
});

// === DROPDOWN DO USUÁRIO ===
const userToggle = document.getElementById("userToggle");
const userMenu = document.getElementById("userMenu");

userToggle.addEventListener("click", function (e) {
  e.stopPropagation();
  userMenu.style.display = userMenu.style.display === "flex" ? "none" : "flex";
});

// Fecha dropdown ao clicar fora
document.addEventListener("click", function (e) {
  if (!userMenu.contains(e.target) && e.target !== userToggle) {
    userMenu.style.display = "none";
  }
});

// Função para logout (pode ser ajustada)
function logout() {
  alert("Você saiu com sucesso!");
  // window.location.href = "login.html"; // redirecionar se necessário
}