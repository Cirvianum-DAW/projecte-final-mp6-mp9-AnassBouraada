import { isAuthenticated } from "../services/auth";

export function renderNavbar() {

    const button = document.getElementById('classes');

    console.log('button,', button);

    console.log(isAuthenticated());

    if(isAuthenticated()) {
      button.classList.remove("hidden");
    }
  
  }