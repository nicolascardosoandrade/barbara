document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".menu-icon");
  const userToggle = document.getElementById("userToggle");
  const userMenu = document.getElementById("userMenu");

  // Função para aplicar o estado inicial da sidebar com base no tamanho da tela
  function initializeSidebarState() {
    if (window.innerWidth >= 768) {
      // Em desktop, a sidebar começa colapsada
      sidebar.classList.add('collapsed');
      sidebar.classList.remove('active'); // Garante que a classe 'active' não esteja presente
      document.body.classList.remove("no-scroll"); // Garante que o scroll não esteja bloqueado
    } else {
      // Em mobile, a sidebar SEMPRE começa oculta (sem a classe 'active' e sem 'collapsed')
      sidebar.classList.remove('collapsed');
      sidebar.classList.remove('active'); // ESSENCIAL: Garante que 'active' seja removida ao carregar em mobile
      document.body.classList.remove("no-scroll"); // Garante que o scroll não esteja bloqueado
    }
  }

  // Chame a função ao carregar a página para definir o estado inicial correto
  initializeSidebarState();

  // Toggle sidebar (collapsed for desktop, active for mobile)
  menuIcon.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      sidebar.classList.toggle("active");
      document.body.classList.toggle("no-scroll"); // Impede scroll quando sidebar ativa
    } else {
      sidebar.classList.toggle("collapsed");
      sidebar.classList.remove('active'); // Garante que a classe 'active' não esteja presente em desktop
      document.body.classList.remove("no-scroll"); // Garante que o scroll não esteja bloqueado em desktop
    }
  });

  // Fecha a sidebar ao clicar em um item da lista em dispositivos móveis
  sidebar.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth < 768 && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        document.body.classList.remove("no-scroll");
      }
    });
  });

  // Fecha a sidebar ao clicar fora dela em dispositivos móveis
  document.addEventListener('click', function(e) {
    // Verifica se o clique não foi na sidebar e nem no ícone do menu
    if (window.innerWidth < 768 && sidebar.classList.contains('active') && !sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
      sidebar.classList.remove('active');
      document.body.classList.remove("no-scroll");
    }
  });

  // Gerencia a sidebar ao redimensionar a janela
  window.addEventListener('resize', () => {
    initializeSidebarState(); // Reaplica o estado correto ao redimensionar
  });

  // User dropdown
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