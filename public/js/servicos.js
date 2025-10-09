document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".menu-icon");
  const userToggle = document.getElementById("userToggle");
  const userMenu = document.getElementById("userMenu");

  function initializeSidebarState() {
    if (window.innerWidth >= 768) {
      sidebar.classList.add("collapsed");
      sidebar.classList.remove("active");
      document.body.classList.remove("no-scroll");
    } else {
      sidebar.classList.remove("collapsed");
      sidebar.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  }

  initializeSidebarState();

  menuIcon.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      sidebar.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
    } else {
      sidebar.classList.toggle("collapsed");
      sidebar.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });

  sidebar.querySelectorAll("nav ul li a").forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth < 768 && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        document.body.classList.remove("no-scroll");
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (
      window.innerWidth < 768 &&
      sidebar.classList.contains("active") &&
      !sidebar.contains(e.target) &&
      !menuIcon.contains(e.target)
    ) {
      sidebar.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });

  window.addEventListener("resize", initializeSidebarState);

  userToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    userMenu.style.display =
      userMenu.style.display === "flex" ? "none" : "flex";
  });

  document.addEventListener("click", function (e) {
    if (!userMenu.contains(e.target) && e.target !== userToggle) {
      userMenu.style.display = "none";
    }
  });

  window.logout = function () {
    alert("Você saiu com sucesso!");
    // window.location.href = "login.html";
  };

  document
    .querySelector(".add-service")
    .addEventListener("click", function () {
      alert("Adicionar serviço");
    });

  // === Dados dos serviços ===
  const dadosServicos = [
    ["AAPI", "Sessão de 1h", "1:00", "R$120,00", "30"],
    ["ABERTTA", "Sessão de 1h", "1:00", "R$84,26", "60"],
    ["ABERTTA", "1ª Sessão de 30 min", "0:30", "R$54,46", "60"],
    ["ABERTTA", "Sessão de 30 min", "0:30", "R$42,13", "60"],
    ["ALMOÇO", "Intervalo de 1:30 min", "1:30", "R$0,00", "-"],
    ["ALMOÇO", "Intervalo de 1 hora", "1:00", "R$0,00", "-"],
    ["AMIL", "Sessão de 30 min", "0:30", "R$40,00", "60"],
    ["CASAL", "Sessão de 1h", "1:00", "R$250,00", "30"],
  ];

  // === Inicializar DataTable ===
  const tabela = $("#tabela-servicos").DataTable({
    data: dadosServicos,
    columns: [
      { title: "Convênio" },
      { title: "Consulta" },
      { title: "Duração" },
      { title: "Valor" },
      { title: "Pagamento (dias)" },
    ],
    responsive: true,
    language: {
      search: "Buscar:",
      lengthMenu: "Mostrar _MENU_ registros por página",
      zeroRecords: "Nenhum serviço encontrado",
      info: "Mostrando página _PAGE_ de _PAGES_",
      infoEmpty: "Nenhum serviço disponível",
      infoFiltered: "(filtrado de _MAX_ serviços no total)",
      paginate: {
        first: "Primeiro",
        last: "Último",
        next: "Próximo",
        previous: "Anterior",
      },
    },
  });

  // 🔎 Integração com campo de pesquisa do cabeçalho
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function () {
    tabela.search(this.value).draw();
  });
});

