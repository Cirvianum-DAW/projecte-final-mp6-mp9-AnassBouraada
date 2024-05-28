import './styles/tailwind.css';
import './styles/global.css';

// Import main page components based on the current page
import { renderNavbar } from './components/Navbar';

import { renderLoginPage } from './pages/loginPage';
// import { renderAdminPage } from './pages/AdminPage';
// import { renderDashboardPage } from './pages/DashboardPage';
// import { isdAuthenticated } from './services/auth';

// Main application logic
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  const path = window.location.pathname;

  console.log('Path:', path);

  // Check the current page and render the appropriate content
  if (path === '/index.html' || path === '/') {
    console.log('Landing page');
    renderNavbar();
  } else if (path === '/quiSom.html') {
    renderLoginPage();
  } 
});