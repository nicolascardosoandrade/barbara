document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".menu-icon");

  menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });

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

  function logout() {
    alert("Você saiu com sucesso!");
  }

  function filterAges() {
    const minAge = parseInt(document.getElementById("minAge").value) || 0;
    const maxAge = parseInt(document.getElementById("maxAge").value) || 100;
    const table = document.getElementById("ageFilterTable").getElementsByTagName("tbody")[0];
    table.innerHTML = "";

    const rows = [
      { name: "Túlio Siqueira", age: 13 },
      { name: "Adriana Farrel", age: 43 },
      { name: "Alice Alves de", age: 6 }
    ];

    rows.forEach(row => {
      if (row.age >= minAge && row.age <= maxAge) {
        const newRow = table.insertRow();
        newRow.insertCell(0).textContent = row.name;
        newRow.insertCell(1).textContent = `${row.age} anos, 0 meses`;
      }
    });
  }
});