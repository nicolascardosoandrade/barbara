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

  const modal = document.getElementById("modalConvenio")
  const btnAdicionar = document.getElementById("btnAdicionar")
  const closeModal = document.getElementById("closeModal")
  const btnCancelar = document.getElementById("btnCancelar")
  const formConvenio = document.getElementById("formConvenio")
  const inputDuracao = document.getElementById("duracao")
  const inputValor = document.getElementById("valor")

  btnAdicionar.addEventListener("click", () => {
    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  function fecharModal() {
    modal.classList.remove("active")
    document.body.style.overflow = ""
    formConvenio.reset()
  }

  closeModal.addEventListener("click", fecharModal)
  btnCancelar.addEventListener("click", fecharModal)

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      fecharModal()
    }
  })

  inputDuracao.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "")

    if (value.length >= 2) {
      value = value.substring(0, 2) + ":" + value.substring(2, 4)
    }

    e.target.value = value
  })

  inputValor.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "")
    value = (Number.parseInt(value) || 0).toString()

    while (value.length < 3) {
      value = "0" + value
    }

    const inteiro = value.slice(0, -2)
    const decimal = value.slice(-2)

    e.target.value = "R$ " + Number.parseInt(inteiro).toLocaleString("pt-BR") + "," + decimal
  })

  formConvenio.addEventListener("submit", (e) => {
    e.preventDefault()

    const dados = {
      nomeConvenio: document.getElementById("nomeConvenio").value,
      consulta: document.getElementById("consulta").value,
      duracao: document.getElementById("duracao").value,
      valor: document.getElementById("valor").value,
      pagamento: document.getElementById("pagamento").value,
    }

    console.log("Dados do convênio:", dados)
    alert("Convênio cadastrado com sucesso!")
    fecharModal()
  })

  // === Botão Filtrar ===
  const btnFiltrar = document.getElementById("btnFiltrar")
  btnFiltrar.addEventListener("click", () => {
    btnFiltrar.classList.toggle("active")
    alert("Funcionalidade de filtro será implementada aqui.")
  })

  // === Botão Selecionar ===
  const btnSelecionar = document.getElementById("btnSelecionar")
  let selectMode = false
  btnSelecionar.addEventListener("click", () => {
    selectMode = !selectMode
    btnSelecionar.classList.toggle("active")
    const icon = btnSelecionar.querySelector(".material-icons")
    icon.textContent = selectMode ? "check_box" : "check_box_outline_blank"

    if (selectMode) {
      alert("Modo de seleção ativado. Funcionalidade será implementada.")
    } else {
      alert("Modo de seleção desativado.")
    }
  })

  // === Integração com campo de pesquisa do cabeçalho ===
  const searchInput = document.getElementById("searchInput")
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      if (window.jQuery && window.$ && window.$.fn.dataTable) {
        const tabela = window.$("#conveniosTable").DataTable()
        tabela.search(this.value).draw()
      }
    })
  }

  // Inicializa DataTable com suporte a colunas arrastáveis
  if (window.jQuery && window.$ && window.$.fn.dataTable) {
    window.$("#conveniosTable").DataTable({
      colReorder: true,
      paging: false,
      searching: true,
      info: false,
      language: {
        emptyTable: "Nenhum convênio encontrado",
        loadingRecords: "Carregando...",
        processing: "Processando...",
        zeroRecords: "Nenhum registro encontrado",
      },
      createdRow: (row, data, dataIndex) => {
        window
          .$(row)
          .find("td")
          .each(function (index) {
            const labels = ["PACIENTE", "IDADE", "CPF", "CONVÊNIO", "AÇÕES"]
            window.$(this).attr("data-label", labels[index])
          })
      },
    })
  } else {
    console.warn("jQuery ou DataTables não carregados corretamente.")
  }

  // Edit convenio function
  window.editConvenio = (icon) => {
    const row = icon.parentElement.parentElement
    const cells = row.getElementsByTagName("td")
    alert(
      `Editando: ${cells[0].textContent}, Idade: ${cells[1].textContent}, CPF: ${cells[2].textContent}, Convênio: ${cells[3].textContent}`,
    )
  }
})
