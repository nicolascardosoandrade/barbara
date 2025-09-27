document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".menu-icon");

  // Toggle sidebar
  menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });

  // Dropdown do usuário
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

  window.logout = function() {
    alert("Você saiu com sucesso!");
  };

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
    movableColumns: true, // permite arrastar colunas
    height: "500px",
    columns: [
      {title: "CONVÊNIO", field: "convenio"},
      {title: "CONSULTA", field: "consulta"},
      {title: "DURAÇÃO", field: "duracao"},
      {title: "VALOR", field: "valor"},
      {title: "PAGAMENTO", field: "pagamento"},
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