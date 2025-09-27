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

  // Edit convenio function
  function editConvenio(button) {
    const row = button.parentElement.parentElement;
    const cells = row.getElementsByTagName("td");
    alert(`Editando: ${cells[0].textContent}, Idade: ${cells[1].textContent}, CPF: ${cells[2].textContent}, Convênio: ${cells[3].textContent}`);
  }

  // Add convenio function
  function addConvenio() {
    alert("Adicionar novo convênio");
  }

  // Handle window resize to ensure sidebar state is correct
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});