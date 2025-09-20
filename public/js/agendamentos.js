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

  document.querySelector('.add-appointment').addEventListener('click', function() {
    alert('Adicionar agendamento');
  });
});