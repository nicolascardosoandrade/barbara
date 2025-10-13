document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar")
  const menuIcon = document.querySelector(".menu-icon")
  const userToggle = document.getElementById("userToggle")
  const userMenu = document.getElementById("userMenu")

  // Função para aplicar o estado inicial da sidebar com base no tamanho da tela
  function initializeSidebarState() {
    if (window.innerWidth >= 768) {
      // Em desktop, a sidebar começa colapsada
      sidebar.classList.add("collapsed")
      sidebar.classList.remove("active") // Garante que a classe 'active' não esteja presente
      document.body.classList.remove("no-scroll") // Garante que o scroll não esteja bloqueado
    } else {
      // Em mobile, a sidebar SEMPRE começa oculta (sem a classe 'active' e sem 'collapsed')
      sidebar.classList.remove("collapsed")
      sidebar.classList.remove("active") // ESSENCIAL: Garante que 'active' seja removida ao carregar em mobile
      document.body.classList.remove("no-scroll") // Garante que o scroll não esteja bloqueado
    }
  }

  // Chame a função ao carregar a página para definir o estado inicial correto
  initializeSidebarState()

  // Toggle sidebar (collapsed for desktop, active for mobile)
  menuIcon.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      sidebar.classList.toggle("active")
      document.body.classList.toggle("no-scroll") // Impede scroll quando sidebar ativa
    } else {
      sidebar.classList.toggle("collapsed")
      sidebar.classList.remove("active") // Garante que a classe 'active' não esteja presente em desktop
      document.body.classList.remove("no-scroll") // Garante que o scroll não esteja bloqueado em desktop
    }
  })

  // Fecha a sidebar ao clicar em um item da lista em dispositivos móveis
  sidebar.querySelectorAll("nav ul li a").forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth < 768 && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")
        document.body.classList.remove("no-scroll")
      }
    })
  })

  // Fecha a sidebar ao clicar fora dela em dispositivos móveis
  document.addEventListener("click", (e) => {
    // Verifica se o clique não foi na sidebar e nem no ícone do menu
    if (
      window.innerWidth < 768 &&
      sidebar.classList.contains("active") &&
      !sidebar.contains(e.target) &&
      !menuIcon.contains(e.target)
    ) {
      sidebar.classList.remove("active")
      document.body.classList.remove("no-scroll")
    }
  })

  // Gerencia a sidebar ao redimensionar a janela
  window.addEventListener("resize", () => {
    initializeSidebarState() // Reaplica o estado correto ao redimensionar
  })

  // User dropdown
  userToggle.addEventListener("click", (e) => {
    e.stopPropagation()
    userMenu.style.display = userMenu.style.display === "flex" ? "none" : "flex"
  })

  // Fecha dropdown ao clicar fora
  document.addEventListener("click", (e) => {
    if (!userMenu.contains(e.target) && e.target !== userToggle) {
      userMenu.style.display = "none"
    }
  })

  // Logout function
  window.logout = () => {
    alert("Você saiu com sucesso!")
    // window.location.href = "login.html";
  }

  // Add appointment button
  document.querySelector(".add-appointment").addEventListener("click", () => {
    alert("Adicionar agendamento")
  })

  // Export to Excel function
  window.exportToExcel = () => {
    const table = document.getElementById("appointmentsTable")
    const rows = []
    for (let i = 0; i < table.rows.length; i++) {
      const cells = table.rows[i].cells
      const rowData = []
      for (let j = 0; j < cells.length - 1; j++) {
        rowData.push(cells[j].textContent)
      }
      rows.push(rowData)
    }

    let csvContent = "data:text/csv;charset=utf-8,"
    rows.forEach((rowArray) => {
      const row = rowArray.join(",")
      csvContent += row + "\r\n"
    })

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "agendamentos.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Filter appointments function
  window.filterAppointments = () => {
    alert("Filtrar agendamentos")
    // Aqui você pode implementar a lógica de filtro
  }

  // Toggle select mode function
  window.toggleSelectMode = () => {
    const selectButton = document.querySelector(".select-button .material-icons")
    if (selectButton.textContent === "check_box_outline_blank") {
      selectButton.textContent = "check_box"
      alert("Modo de seleção ativado")
      // Aqui você pode implementar a lógica para ativar checkboxes nas linhas
    } else {
      selectButton.textContent = "check_box_outline_blank"
      alert("Modo de seleção desativado")
      // Aqui você pode implementar a lógica para desativar checkboxes nas linhas
    }
  }

  // Inicializa DataTable com suporte a colunas arrastáveis
  if (window.jQuery && window.$ && window.$.fn.dataTable) {
    window.$("#appointmentsTable").DataTable({
      colReorder: true,
      paging: false,
      searching: false,
      info: false,
      language: {
        emptyTable: "Nenhum dado disponível",
        loadingRecords: "Carregando...",
        processing: "Processando...",
        zeroRecords: "Nenhum registro encontrado",
      },
    })
  } else {
    console.warn("jQuery ou DataTables não carregados corretamente.")
  }
})
