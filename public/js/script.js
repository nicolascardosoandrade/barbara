document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".menu-icon");

  menuIcon.addEventListener("click", () => {
    // Se a largura da tela for menor que 768px, controla a classe 'active' para mobile
    if (window.innerWidth < 768) {
      sidebar.classList.toggle("active");
      // Quando a sidebar está ativa no mobile, o overflow do body pode ser ocultado
      document.body.style.overflow = sidebar.classList.contains("active") ? "hidden" : "";
    } else {
      // Para desktop, usa a classe 'collapsed' como antes
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
    if (window.innerWidth >= 768 && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      document.body.style.overflow = ''; // Restaura o overflow do body
    }
    // Para garantir que a sidebar se comporte como "colapsada" (apenas ícones) em desktop,
    // se ela não estiver expandida (sem a classe 'active' ou 'collapsed' inicial)
    // Você pode querer que em desktop ela comece expandida por padrão, então essa parte
    // depende da sua preferência de estado inicial no desktop.
    // Se você quer que em desktop ela *sempre* comece expandida e só colapse ao clicar:
    // if (window.innerWidth >= 768 && !sidebar.classList.contains('collapsed')) {
    //   sidebar.style.width = '250px'; // Ou remover classes de colapso
    //   sidebar.classList.remove('collapsed'); // Garante que não esteja colapsada
    // }
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

// Se preferir, a função logout pode ser definida aqui fora para ser global
/*
function logout() {
  alert("Você saiu com sucesso!");
  // window.location.href = "login.html";
}
*/