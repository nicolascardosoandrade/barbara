document.addEventListener('DOMContentLoaded', function() {
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

  // Gerencia a sidebar ao redimensionar a janela
  window.addEventListener('resize', () => {
    // Se a largura da tela for maior ou igual a 768px e a sidebar estiver em modo 'active' (mobile)
    if (window.innerWidth >= 768 && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      document.body.style.overflow = ''; // Restaura o overflow do body
    }
    // Você pode querer que em desktop ela comece expandida por padrão, então essa parte
    // depende da sua preferência de estado inicial no desktop.
    // Se você quer que em desktop ela *sempre* comece expandida e só colapse ao clicar:
    // if (window.innerWidth >= 768 && !sidebar.classList.contains('collapsed')) {
    //   sidebar.style.width = '250px'; // Ou remover classes de colapso
    //   sidebar.classList.remove('collapsed'); // Garante que não esteja colapsada
    // }
  });


  const userToggle = document.getElementById("userToggle");
  const userMenu = document.getElementById("userMenu");

  userToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    userMenu.style.display = userMenu.style.display === "flex" ? "none" : "flex";
  });

  document.addEventListener("click", function (e) {
    if (!userMenu.contains(e.target) && e.target !== userToggle) {
      userMenu.style.display = "none";
    }
  });

  // A função logout deve estar disponível globalmente ou no escopo correto
  window.logout = function() {
    alert("Você saiu com sucesso!");
    // window.location.href = "login.html"; // redirecionar se necessário
  };

  document.querySelector('.add-appointment').addEventListener('click', function() {
    alert('Adicionar agendamento');
  });

  // Torna a função exportToExcel globalmente acessível
  window.exportToExcel = function() {
    let table = document.getElementById("appointmentsTable");
    let rows = [];
    for (let i = 0; i < table.rows.length; i++) {
      let cells = table.rows[i].cells;
      let rowData = [];
      for (let j = 0; j < cells.length - 1; j++) { // Exclude OBS column
        rowData.push(cells[j].textContent);
      }
      rows.push(rowData);
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    rows.forEach(function(rowArray) {
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
    });

    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "agendamentos.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Remove o event listener duplicado se a função já é global pelo onclick no HTML
  // document.querySelector('.export-excel').addEventListener('click', exportToExcel);
});