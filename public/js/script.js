document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".menu-icon");
  const userToggle = document.getElementById("userToggle");
  const userMenu = document.getElementById("userMenu");

  // Garante que a sidebar inicie colapsada em desktop
  if (window.innerWidth >= 768 && !sidebar.classList.contains('collapsed')) {
    sidebar.classList.add('collapsed');
  }

  // Toggle sidebar (collapsed for desktop, active for mobile)
  menuIcon.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      sidebar.classList.toggle("active");
      document.body.classList.toggle("no-scroll"); // Impede scroll quando sidebar ativa
    } else {
      sidebar.classList.toggle("collapsed");
    }
  });

  // Fecha a sidebar ao clicar em um item da lista em dispositivos móveis
  sidebar.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth < 768 && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        document.body.classList.remove("no-scroll");
      }
    });
  });

  // Fecha a sidebar ao clicar fora dela em dispositivos móveis
  document.addEventListener('click', function(e) {
    if (window.innerWidth < 768 && sidebar.classList.contains('active') && !sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
      sidebar.classList.remove('active');
      document.body.classList.remove("no-scroll");
    }
  });

  // Gerencia a sidebar ao redimensionar a janela
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      document.body.classList.remove("no-scroll");
    }
    if (window.innerWidth < 768 && sidebar.classList.contains('collapsed')) {
      sidebar.classList.remove('collapsed');
    }
    if (window.innerWidth >= 768 && !sidebar.classList.contains('collapsed')) {
      sidebar.classList.add('collapsed');
    }
  });

  // User dropdown
  userToggle.addEventListener("click", function(e) {
    e.stopPropagation();
    userMenu.style.display = userMenu.style.display === "flex" ? "none" : "flex";
  });

  // Fecha dropdown ao clicar fora
  document.addEventListener("click", function(e) {
    if (!userMenu.contains(e.target) && e.target !== userToggle) {
      userMenu.style.display = "none";
    }
  });

  // Logout function
  window.logout = function() {
    alert("Você saiu com sucesso!");
    // window.location.href = "login.html";
  };

  // Delete button (specific to financeiro.html)
  if (document.querySelector('.delete-btn')) {
    document.querySelector('.delete-btn').addEventListener('click', function() {
      alert('Excluir registros selecionados');
    });
  }
});