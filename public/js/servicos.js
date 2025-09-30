document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".menu-icon");

  // Garante que a sidebar inicie colapsada em desktop
  if (window.innerWidth >= 768 && !sidebar.classList.contains('collapsed')) {
    sidebar.classList.add('collapsed');
  }

  // Toggle sidebar (collapsed for desktop, active for mobile)
  menuIcon.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      sidebar.classList.toggle("active");
      document.body.style.overflow = sidebar.classList.contains("active") ? "hidden" : "";
    } else {
      sidebar.classList.toggle("collapsed");
    }
  });

  // Fecha a sidebar ao clicar em um item da lista em dispositivos móveis
  sidebar.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth < 768 && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        document.body.style.overflow = '';
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
    if (window.innerWidth >= 768 && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      document.body.style.overflow = '';
    }
    if (window.innerWidth < 768 && sidebar.classList.contains('collapsed')) {
      sidebar.classList.remove('collapsed');
    }
    if (window.innerWidth >= 768 && !sidebar.classList.contains('collapsed')) {
      sidebar.classList.add('collapsed');
    }
  });

  // User dropdown
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

  // Logout function
  window.logout = function() {
    alert("Você saiu com sucesso!");
    // window.location.href = "login.html";
  };

  // Add service button
  document.querySelector('.add-service').addEventListener('click', function() {
    alert('Adicionar serviço');
  });

  // ======= Dados da Tabela =======
  const dadosServicos = [
    {convenio: "AAPI", consulta: "Sessão de 1h", duracao: "1:00", valor: "R$120,00", pagamento: "30"},
    {convenio: "ABERTTA", consulta: "Sessão de 1h", duracao: "1:00", valor: "R$84,26", pagamento: "60"},
    {convenio: "ABERTTA", consulta: "1ª Sessão de 30 min", duracao: "0:30", valor: "R$54,46", pagamento: "60"},
    {convenio: "ABERTTA", consulta: "Sessão de 30 min", duracao: "0:30", valor: "R$42,13", pagamento: "60"},
    {convenio: "ALMOÇO", consulta: "Intervalo de 1:30 min", duracao: "1:30", valor: "R$0,00", pagamento: "-"},
    {convenio: "ALMOÇO", consulta: "Intervalo de 1 hora", duracao: "1:00", valor: "R$0,00", pagamento: "-"},
    {convenio: "AMIL", consulta: "Sessão de 30 min", duracao: "0:30", valor: "R$40,00", pagamento: "60"},
    {convenio: "CASAL", consulta: "Sessão de 1h", duracao: "1:00", valor: "R$250,00", pagamento: "30"},
  ];

  // ======= Criação da Tabela com Tabulator =======
  const tabela = new Tabulator("#tabela-servicos", {
    data: dadosServicos,
    layout: "fitColumns",
    movableColumns: true,
    height: "500px",
    responsiveLayout: "collapse",
    columns: [
      {title: "CONVÊNIO", field: "convenio", formatter: function(cell) {
        cell.getElement().setAttribute("data-label", "Convênio");
        return cell.getValue();
      }},
      {title: "CONSULTA", field: "consulta", formatter: function(cell) {
        cell.getElement().setAttribute("data-label", "Consulta");
        return cell.getValue();
      }},
      {title: "DURAÇÃO", field: "duracao", formatter: function(cell) {
        cell.getElement().setAttribute("data-label", "Duração");
        return cell.getValue();
      }},
      {title: "VALOR", field: "valor", formatter: function(cell) {
        cell.getElement().setAttribute("data-label", "Valor");
        return cell.getValue();
      }},
      {title: "PAGAMENTO", field: "pagamento", formatter: function(cell) {
        cell.getElement().setAttribute("data-label", "Pagamento");
        return cell.getValue();
      }},
    ],
  });

  // ======= Filtro de pesquisa =======
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keyup", function() {
    const value = searchInput.value;
    if (value) {
      tabela.setFilter([
        {field: "convenio", type: "like", value},
        {field: "consulta", type: "like", value},
      ]);
    } else {
      tabela.clearFilter();
    }
  });
});