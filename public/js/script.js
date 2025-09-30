document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".menu-icon");

  // A sidebar já inicia colapsada em desktop devido à classe no HTML.
  // O comportamento do clique do menuIcon já é responsável por alternar a classe 'collapsed' em desktop.

  menuIcon.addEventListener("click", () => {
    // Se a largura da tela for menor que 768px, controla a classe 'active' para mobile
    if (window.innerWidth < 768) {
      sidebar.classList.toggle("active");
      // Quando a sidebar está ativa no mobile, o overflow do body pode ser ocultado
      document.body.style.overflow = sidebar.classList.contains("active") ? "hidden" : "";
    } else {
      // Para desktop, alterna a classe 'collapsed'
      sidebar.classList.toggle("collapsed");
    }
  });

  // Fecha a sidebar ao clicar em um item da lista em dispositivos móveis
  sidebar.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth < 768 && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        document.body.style.overflow = ''; // Restaura o overflow do body
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
    // Se a largura da tela for maior ou igual a 768px e a sidebar estiver em modo 'active' (mobile)
    // remove a classe 'active' para resetar o estado mobile
    if (window.innerWidth >= 768 && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      document.body.style.overflow = ''; // Restaura o overflow do body
    }
    // Se a largura da tela for menor que 768px e a sidebar estiver em modo 'collapsed' (desktop),
    // remove a classe 'collapsed' para garantir que ela volte ao estado oculto em mobile por padrão.
    // Isso evita que a sidebar fique colapsada em mobile, ao invés de oculta, se o usuário redimensionar.
    if (window.innerWidth < 768 && sidebar.classList.contains('collapsed')) {
      sidebar.classList.remove('collapsed');
    }
    // Se a largura da tela for maior ou igual a 768px e a sidebar não tiver a classe 'collapsed'
    // (o que significa que ela estava expandida antes de redimensionar ou o usuário a expandiu),
    // garantimos que ela não tenha a classe 'active' de mobile.
    // O estado inicial 'collapsed' já é definido no HTML para desktop.
    // Se você quiser que ela *sempre* inicie colapsada ao carregar a página e também ao redimensionar
    // de mobile para desktop, mesmo que estivesse expandida em mobile:
    if (window.innerWidth >= 768 && !sidebar.classList.contains('collapsed')) {
        sidebar.classList.add('collapsed');
    }
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

  // A função logout deve estar disponível globalmente ou no escopo correto
  // Como ela está no HTML com onclick="logout()", ela precisa estar acessível globalmente.
  // Você pode colocá-la fora do DOMContentLoaded ou em window.logout
  window.logout = function() {
    alert("Você saiu com sucesso!");
    // window.location.href = "login.html"; // redirecionar se necessário
  };
});