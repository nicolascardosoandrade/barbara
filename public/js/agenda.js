document.addEventListener('DOMContentLoaded', function() {
  // === CONFIGURAÇÃO DO FULLCALENDAR ===
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: window.innerWidth < 768 ? 'timeGridDay' : 'timeGridWeek',
    locale: 'pt-br',
    timeZone: 'America/Sao_Paulo', // Brasília time (UTC-3)
    slotMinTime: '00:00:00', // Start at midnight
    slotMaxTime: '24:00:00', // End at 23:59
    allDaySlot: false,
    slotDuration: '00:30:00', // 30-minute intervals
    slotLabelInterval: '00:30:00',
    slotLabelFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // 24-hour format
    },
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
    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next'
    }
  });

  calendar.render();

  // === COLAPSAR SIDEBAR (só ícones) ===
  const sidebar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".menu-icon");

  menuIcon.addEventListener("click", () => {
    // Se a largura da tela for menor que 768px, controla a classe 'active' para mobile
    if (window.innerWidth < 768) {
      sidebar.classList.toggle("active");
      // Quando a sidebar está ativa no mobile, o overflow do body pode ser ocultado
      document.body.style.overflow = sidebar.classList.contains("active") ? "hidden" : "";
    } else {
      // Para desktop, usa a classe 'collapsed' como antes
      sidebar.classList.toggle("collapsed");
    }
    setTimeout(() => {
      calendar.updateSize(); // recalcula o tamanho do calendário
    }, 310); // espera o fim da transição da sidebar (0.3s)
  });

  // Fecha a sidebar ao clicar em um item da lista em dispositivos móveis
  sidebar.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth < 768 && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        document.body.style.overflow = ''; // Restaura o overflow do body
      }
    });
  });

  // Fecha a sidebar ao clicar fora dela em dispositivos móveis
  document.addEventListener('click', function(e) {
    if (window.innerWidth < 768 && sidebar.classList.contains('active') && !sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
      sidebar.classList.remove('active');
      document.body.style.overflow = '';
    }
  });


  // === MUDANÇA DE VISUALIZAÇÃO (DIA, SEMANA, MÊS) ===
  document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', () => {
      const view = button.getAttribute('data-view');
      calendar.changeView(view);
      // Remove a classe 'active' de todos os botões e adiciona ao clicado
      document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // Adiciona a classe 'active' ao botão de visualização inicial
  if (window.innerWidth < 768) {
    document.querySelector('.view-btn[data-view="timeGridDay"]').classList.add('active');
  } else {
    document.querySelector('.view-btn[data-view="timeGridWeek"]').classList.add('active');
  }


  // === BOTÃO HOJE ===
  const todayBtn = document.getElementById('todayBtn');
  if (todayBtn) {
    todayBtn.addEventListener('click', () => {
      calendar.today(); // volta para hoje respeitando a view atual
    });
  }

  // === RESPONSIVIDADE DO CALENDÁRIO ===
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768 && calendar.view.type !== 'timeGridDay') {
      calendar.changeView('timeGridDay');
      // Atualiza a classe 'active' para o botão "Dia"
      document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelector('.view-btn[data-view="timeGridDay"]').classList.add('active');
    } else if (window.innerWidth >= 768 && calendar.view.type !== 'timeGridWeek' && calendar.view.type !== 'dayGridMonth') {
      // Adicionei dayGridMonth para que ele não mude para semana se já estiver em mês
      calendar.changeView('timeGridWeek');
      // Atualiza a classe 'active' para o botão "Semana"
      document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelector('.view-btn[data-view="timeGridWeek"]').classList.add('active');
    }
    // Garante que a sidebar esteja escondida em mobile ao redimensionar se estiver ativa
    if (window.innerWidth >= 768 && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// === DROPDOWN DO USUÁRIO ===
const userToggle = document.getElementById("userToggle");
const userMenu = document.getElementById("userMenu");

userToggle.addEventListener("click", function(e) {
  e.stopPropagation();
  userMenu.style.display = userMenu.style.display === "flex" ? "none" : "flex";
});

// Fecha dropdown ao clicar fora
document.addEventListener("click", function(e) {
  if (!userMenu.contains(e.target) && e.target !== userToggle) {
    userMenu.style.display = "none";
  }
});

// Função para logout (pode ser ajustada)
function logout() {
  alert("Você saiu com sucesso!");
  // window.location.href = "login.html"; // redirecionar se necessário
}