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