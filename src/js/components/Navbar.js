import { isAuthenticated } from "../services/auth";

// import { isAuthenticated } from '../services/auth.js';
export function renderNavbar() {

    const button = document.getElementById('classes');

    console.log('button,', button);

    console.log(isAuthenticated());

    if(isAuthenticated()) {
      button.classList.remove("hidden");
    }
  
  }
  
  renderNavbar();
