document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".menu-icon");

  // Toggle sidebar (collapsed for desktop, active for mobile)
  menuIcon.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      sidebar.classList.toggle("active");
      document.body.style.overflow = sidebar.classList.contains("active") ? "hidden" : "";
    } else {
      sidebar.classList.toggle("collapsed");
    }
  });

  // Close sidebar when clicking a menu item on mobile
  sidebar.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth < 768 && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', function(e) {
    if (window.innerWidth < 768 && sidebar.classList.contains('active') && !sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
      sidebar.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // User dropdown
  const userToggle = document.getElementById("userToggle");
  const userMenu = document.getElementById("userMenu");

  userToggle.addEventListener("click", function(e) {
    e.stopPropagation();
    userMenu.style.display = userMenu.style.display === "flex" ? "none" : "flex";
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function(e) {
    if (!userMenu.contains(e.target) && e.target !== userToggle) {
      userMenu.style.display = "none";
    }
  });

  // Logout function
  function logout() {
    alert("Você saiu com sucesso!");
  }

  // Filter ages function
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

  // Handle window resize to ensure sidebar state is correct
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});