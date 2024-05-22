// Importar les funcions necessàries des de fetchAPI.js i auth.js
import { fetchAPI } from '../services/fetchAPI.js';
import { authenticateUser } from '../services/auth.js';

// Funció per gestionar el login
export function handleLogin(event) {
  event.preventDefault(); // Evita el comportament per defecte de l'enviament del formulari

  const username = document.querySelector('input[name="Usuari"]').value;
  const password = document.querySelector('input[name="Contraseña"]').value;

  // Validar les credencials amb la funció d'autenticació
  authenticateUser(username, password)
    .then(response => {
      if (response.success) {
        // Redirigir a una pàgina d'èxit o mostrar un missatge d'èxit
        alert('Login correcte!');
        // Redirigir a la pàgina principal o a una pàgina protegida
        window.location.href = 'index.html';
      } else {
        // Mostrar un missatge d'error
        alert('Credencials incorrectes. Torna-ho a intentar.');
      }
    })
    .catch(error => {
      console.error('Error durant el procés de login:', error);
      alert('S\'ha produït un error. Torna-ho a intentar més tard.');
    });
}

// Associar la funció handleLogin() amb l'event "submit" del formulari
document.getElementById('login-form').addEventListener('submit', handleLogin);
