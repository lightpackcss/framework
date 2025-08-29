/*
 * Lightpack JS Library for dynamic css components.
 */
(function(window) {
  const Lightpack = window.Lightpack = window.Lightpack || {};

  // Tabs
  Lightpack.initTabs = function(root = document) {
    root.querySelectorAll('.tabs-group').forEach(function (group) {
      const tabs = group.querySelectorAll('.tabs .tab');
      const panels = Array.from(group.children).filter(
        el => !el.classList.contains('tabs')
      );
      tabs.forEach((tab, idx) => {
        tab.addEventListener('click', function () {
          tabs.forEach(t => t.classList.remove('tab-active'));
          panels.forEach(p => p.setAttribute('hidden', ''));
          tab.classList.add('tab-active');
          panels[idx].removeAttribute('hidden');
        });
      });
    });
  };

  // Accordion
  Lightpack.initAccordions = function(root = document) {
    root.querySelectorAll('.accordion').forEach(function (accordion) {
      const headers = accordion.querySelectorAll('.accordion-header');
      const panels = accordion.querySelectorAll('.accordion-panel');
      headers.forEach((header, idx) => {
        header.addEventListener('click', function () {
          const isOpen = panels[idx].classList.contains('open');
          panels.forEach(p => p.classList.remove('open'));
          headers.forEach(h => h.classList.remove('open'));
          if (!isOpen) {
            panels[idx].classList.add('open');
            header.classList.add('open');
          }
        });
      });
    });
  };

  // Alerts (close buttons)
  Lightpack.initAlerts = function(root = document) {
    root.addEventListener('click', function (e) {
      if (e.target.classList.contains('alert-close')) {
        const alert = e.target.closest('.alert');
        if (alert) alert.remove();
      }
    });
  };

  // Toasts
  let toastId = 0;
  const TOAST_POSITIONS = {
    'bottom-right': 'toast-bottom-right',
    'bottom-left': 'toast-bottom-left',
    'top-right': 'toast-top-right',
    'top-left': 'toast-top-left'
  };

  function getOrCreateToastContainer(pos) {
    const id = 'toast-container-' + pos;
    let container = document.getElementById(id);
    if (!container) {
      container = document.createElement('div');
      container.id = id;
      container.className = TOAST_POSITIONS[pos] || TOAST_POSITIONS['bottom-right'];
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }
    return container;
  }

  Lightpack.showToast = function(options) {
    if (!options || typeof options !== 'object') return;
    const id = ++toastId;
    const msg = options.message || '';
    const type = options.type || '';
    const sticky = !!options.sticky;
    const pos = options.position || 'bottom-right';
    const container = getOrCreateToastContainer(pos);
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast show' + (type ? ' toast-' + type : '');
    toast.setAttribute('role', 'status');
    toast.setAttribute('data-toast-id', id);
    toast.innerHTML = `
      <span>${msg}</span>
      <button class="toast-close" title="Close">×</button>
    `;
    toast.querySelector('.toast-close').onclick = function() {
      Lightpack.removeToast(id, pos);
    };
    container.appendChild(toast);
    if (!sticky) {
      toast._timeout = setTimeout(function() {
        Lightpack.removeToast(id, pos);
      }, 5000);
    }
  };
  Lightpack.removeToast = function(id, pos) {
    const container = document.getElementById('toast-container-' + (pos || 'bottom-right'));
    const toast = container && container.querySelector(`[data-toast-id='${id}']`);
    if (toast) {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast._timeout) clearTimeout(toast._timeout);
        toast.remove();
        // Remove container if empty
        if (container && container.children.length === 0) {
          container.remove();
        }
      }, 250);
    }
  };
  // Modal (multi-modal support)
  Lightpack.initModals = function(root = document) {
    // Open modal buttons: <button data-modal-open="modalId">
    root.querySelectorAll('[data-modal-open]').forEach(function(btn) {
      const modalId = btn.getAttribute('data-modal-open');
      const backdrop = root.querySelector('.modal-backdrop[data-modal="' + modalId + '"]');
      if (!backdrop) return;
      const modal = backdrop.querySelector('.modal');
      btn.addEventListener('click', function() {
        backdrop.style.display = 'flex';
        if (modal) modal.focus();
        document.body.style.overflow = 'hidden';
      });
    });
    // Close/cancel buttons inside modal: <button data-modal-close> or <button data-modal-cancel>
    root.querySelectorAll('.modal-backdrop').forEach(function(backdrop) {
      const modal = backdrop.querySelector('.modal');
      const closeBtns = backdrop.querySelectorAll('[data-modal-close], .modal-close');
      const cancelBtns = backdrop.querySelectorAll('[data-modal-cancel]');
      function closeModal() {
        backdrop.style.display = 'none';
        document.body.style.overflow = '';
        // Optionally return focus to opener if needed
      }
      closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
      cancelBtns.forEach(btn => btn.addEventListener('click', closeModal));
      backdrop.addEventListener('click', function(e) {
        if (e.target === backdrop) closeModal();
      });
      document.addEventListener('keydown', function(e) {
        if (backdrop.style.display === 'flex' && e.key === 'Escape') closeModal();
      });
    });
  };


  /**
   * Initialize password show/hide toggles
   * User controls markup and icon. JS only toggles input type and .showing class.
   * Usage: <input type="password"> <button type="button" class="toggle-password"><i class="fa fa-eye"></i></button>
   */
  Lightpack.initPasswordToggles = function(root = document) {
    root.querySelectorAll('input[type="password"] + .toggle-password').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const input = btn.previousElementSibling;
        if (!input || (input.type !== 'password' && input.type !== 'text')) return;
        const showing = input.type === 'text';
        input.type = showing ? 'password' : 'text';
        btn.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
        btn.classList.toggle('showing', !showing); // for icon swap logic
      });
    });
  };

  /**
   * Initialize drawers (slide-in panels)
   * Supports multiple drawers and triggers per page.
   * Usage: 
   *   <button data-drawer-open="drawerId">Open Drawer</button>
   *   <div class="drawer" id="drawerId">...</div>
   *   <div class="drawer-backdrop" ... onclick="closeDrawer()"></div>
   *   <button data-drawer-close>×</button>
   */
  Lightpack.initDrawers = function(root = document) {
    // Open triggers: <button data-drawer-open="drawerId">
    root.querySelectorAll('[data-drawer-open]').forEach(function(btn) {
      const drawerId = btn.getAttribute('data-drawer-open');
      const drawer = root.querySelector('.drawer#' + drawerId);
      if (!drawer) return;
      btn.addEventListener('click', function() {
        drawer.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    // Close triggers: inside drawer, anything with [data-drawer-close]
    root.querySelectorAll('.drawer').forEach(function(drawer) {
      // Close buttons
      drawer.querySelectorAll('[data-drawer-close]').forEach(function(btn) {
        btn.addEventListener('click', function() {
          drawer.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
      // Backdrop
      const backdrop = drawer.querySelector('.drawer-backdrop');
      if (backdrop) {
        backdrop.addEventListener('click', function() {
          drawer.classList.remove('open');
          document.body.style.overflow = '';
        });
      }
      // ESC to close
      document.addEventListener('keydown', function(e) {
        if (drawer.classList.contains('open') && e.key === 'Escape') {
          drawer.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });
  };

  // ========== Theme Persistence ==========
  /**
   * Lightpack.setTheme(theme)
   *   theme: 'theme-dark' or 'theme-light' (or any theme class you define)
   *   Persists selection in localStorage and applies to <body>.
   * Lightpack.toggleTheme() toggles between 'theme-dark' and 'theme-light'.
   */
  /**
   * Lightpack.setTheme('theme-dark') enables dark mode (adds class),
   * Lightpack.setTheme('') or Lightpack.setTheme(null) disables dark mode (removes class).
   * Lightpack.toggleTheme() toggles dark mode only.
   */
  Lightpack.setTheme = function(theme) {
    if (theme === 'theme-dark') {
      document.body.classList.add('theme-dark');
      localStorage.setItem('lightpack-theme', 'theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
      localStorage.removeItem('lightpack-theme');
    }
  };
  Lightpack.toggleTheme = function() {
    if (document.body.classList.contains('theme-dark')) {
      Lightpack.setTheme('');
    } else {
      Lightpack.setTheme('theme-dark');
    }
  };

  // Theme init (modular)
  Lightpack.initTheme = function() {
    const savedTheme = localStorage.getItem('lightpack-theme');
    if (savedTheme === 'theme-dark') {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
  };

  Lightpack.initCollapsibles = function(root = document) {
    root.querySelectorAll('.collapsible').forEach(function(collapsible) {
      const mode = collapsible.getAttribute('data-collapse') || 'multi';
      const items = collapsible.querySelectorAll('.collapse-item');
      items.forEach(function(item) {
        const toggle = item.querySelector('.collapse-toggle');
        const content = item.querySelector('.collapse-content');
        if (!toggle || !content) return;
        toggle.addEventListener('click', function() {
          const isOpen = content.classList.contains('open');
          if (mode === 'accordion') {
            // Close all
            collapsible.querySelectorAll('.collapse-content').forEach(p => p.classList.remove('open'));
            collapsible.querySelectorAll('.collapse-toggle').forEach(h => h.classList.remove('open'));
            if (!isOpen) {
              content.classList.add('open');
              toggle.classList.add('open');
            }
          } else {
            content.classList.toggle('open');
            toggle.classList.toggle('open');
          }
        });
      });
    });
  };

  // Master init
  Lightpack.initAll = function(root = document) {
    Lightpack.initTheme();
    Lightpack.initTabs(root);
    Lightpack.initAccordions(root);
    Lightpack.initAlerts(root);
    Lightpack.initModals(root);
    Lightpack.initPasswordToggles(root);
    Lightpack.initDrawers(root);
    Lightpack.initCollapsibles(root);
    // ...add more initializers here as needed
  };


  // Auto-init on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    Lightpack.initAll();
  });

})(window);
