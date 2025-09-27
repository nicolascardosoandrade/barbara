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

  document.querySelector('.add-appointment').addEventListener('click', function() {
    alert('Adicionar agendamento');
  });

  function exportToExcel() {
    let table = document.getElementById("appointmentsTable");
    let rows = [];
    for (let i = 0; i < table.rows.length; i++) {
      let cells = table.rows[i].cells;
      let rowData = [];
      for (let j = 0; j < cells.length - 1; j++) { // Exclude OBS column
        rowData.push(cells[j].textContent);
      }
      rows.push(rowData);
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    rows.forEach(function(rowArray) {
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
    });

    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "agendamentos.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  document.querySelector('.export-excel').addEventListener('click', exportToExcel);
});