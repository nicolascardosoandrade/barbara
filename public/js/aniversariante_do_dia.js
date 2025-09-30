document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".menu-icon");

  // Garante que a sidebar inicie colapsada em desktop
  if (window.innerWidth >= 768 && !sidebar.classList.contains('collapsed')) {
    sidebar.classList.add('collapsed');
  }

  // Toggle sidebar (collapsed for desktop, active for mobile)
  menuIcon.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      sidebar.classList.toggle("active");
      document.body.style.overflow = sidebar.classList.contains("active") ? "hidden" : "";
    } else {
      sidebar.classList.toggle("collapsed");
    }
  });

  // Fecha a sidebar ao clicar em um item da lista em dispositivos móveis
  sidebar.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth < 768 && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Fecha a sidebar ao clicar fora dela em dispositivos móveis
  document.addEventListener('click', function(e) {
    if (window.innerWidth < 768 && sidebar.classList.contains('active') && !sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
      sidebar.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Gerencia a sidebar ao redimensionar a janela
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      document.body.style.overflow = '';
    }
    if (window.innerWidth < 768 && sidebar.classList.contains('collapsed')) {
      sidebar.classList.remove('collapsed');
    }
    if (window.innerWidth >= 768 && !sidebar.classList.contains('collapsed')) {
      sidebar.classList.add('collapsed');
    }
  });

  // User dropdown
  const userToggle = document.getElementById("userToggle");
  const userMenu = document.getElementById("userMenu");

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

  // Add birthday button
  document.querySelector('.add-birthday').addEventListener('click', function() {
    alert('Adicionar aniversariante');
  });
});