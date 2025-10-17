/**
 * IO-TECH Main JavaScript
 * JavaScript mínimo e indispensable
 */

// ============================================
// CARGAR COMPONENTES (Header y Footer)
// ============================================
function loadComponent(url, elementId) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = html;
        console.log('✅ Componente cargado:', url);
        // Re-inicializar funcionalidad después de cargar componentes
        if (document.readyState === 'complete') {
          initializeApp();
        }
      }
    })
    .catch(error => console.error('❌ Error cargando componente:', url, error));
}

// Cargar header y footer inmediatamente
loadComponent('/components/header.html', 'header-placeholder');
loadComponent('/components/footer.html', 'footer-placeholder');

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ DOM Ready');
  // Esperar un momento para que los componentes se carguen
  setTimeout(initializeApp, 200);
});

function initializeApp() {
  console.log('🚀 Inicializando aplicación...');

  // ============================================
  // MOBILE MENU
  // ============================================
  const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenuClose = document.querySelector('[data-mobile-menu-close]');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  function openMobileMenu() {
    if (mobileMenu && mobileMenuOverlay) {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
      mobileMenuOverlay.classList.remove('hidden');
      if (mobileMenuToggle) {
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
      }
      document.body.style.overflow = 'hidden';
      console.log('✅ Menú abierto');
    }
  }

  function closeMobileMenu() {
    if (mobileMenu && mobileMenuOverlay) {
      mobileMenu.classList.add('translate-x-full');
      mobileMenu.classList.remove('translate-x-0');
      mobileMenuOverlay.classList.add('hidden');
      if (mobileMenuToggle) {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
      document.body.style.overflow = '';
      console.log('✅ Menú cerrado');
    }
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      openMobileMenu();
    });
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', function() {
      closeMobileMenu();
    });
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', function() {
      closeMobileMenu();
    });
  }

  // ============================================
  // STICKY HEADER
  // ============================================
  const header = document.querySelector('[data-component="header"]');

  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('is-sticky');
      } else {
        header.classList.remove('is-sticky');
      }
    }, { passive: true });
  }

  // ============================================
  // ACTIVE PAGE HIGHLIGHTING
  // ============================================
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || currentPath.includes(href.replace('.html', '')))) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });

  console.log('✅ Aplicación inicializada');
}
