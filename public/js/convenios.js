document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".menu-icon");

  menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
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

  function editConvenio(button) {
    const row = button.parentElement.parentElement;
    const cells = row.getElementsByTagName("td");
    alert(`Editando: ${cells[0].textContent}, Idade: ${cells[1].textContent}, CPF: ${cells[2].textContent}, Convênio: ${cells[3].textContent}`);
  }

  function addConvenio() {
    alert("Adicionar novo convênio");
  }
});