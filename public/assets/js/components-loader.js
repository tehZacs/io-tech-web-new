/**
 * Component Loader
 * Loads HTML components into mount points
 */

/**
 * Load all HTML components
 * @returns {Promise}
 */
export const loadComponents = () => {
  console.log('🔄 Loading components...');

  return Promise.all([
    fetch('/components/header/header.html')
      .then(response => {
        console.log('📥 Header response:', response.status);
        return response.text();
      })
      .then(html => {
        const headerMount = document.getElementById('header-mount');
        console.log('📍 Header mount point:', headerMount);
        if (headerMount) {
          headerMount.innerHTML = html;
          console.log('✅ Header loaded');
        } else {
          console.error('❌ Header mount point not found');
        }
      }),
    fetch('/components/header/mobile-menu.html')
      .then(response => response.text())
      .then(html => {
        const menuMount = document.getElementById('mobile-menu-mount');
        if (menuMount) {
          menuMount.innerHTML = html;
          console.log('✅ Mobile menu loaded');
        }
      }),
    fetch('/components/footer/footer.html')
      .then(response => response.text())
      .then(html => {
        const footerMount = document.getElementById('footer-mount');
        if (footerMount) {
          footerMount.innerHTML = html;
          console.log('✅ Footer loaded');
        }
      })
  ]).then(() => {
    console.log('🎉 All components loaded, dispatching event');
    // Components loaded, emit event for app to initialize
    document.dispatchEvent(new CustomEvent('components:loaded'));
  }).catch(error => {
    console.error('❌ Error loading components:', error);
  });
};

// Auto-load components when this module is imported
loadComponents();
