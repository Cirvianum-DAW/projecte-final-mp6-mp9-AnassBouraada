// navbar.js

export function renderNavbar(isLoggedIn = false, isAdmin = false) {
    if (!document.querySelector('header')) {
      const header = document.createElement('header');
      header.classList.add('bg-gray-600', 'p-4');
  
      const innerDiv = document.createElement('div');
      innerDiv.classList.add('flex', 'flex-col', 'md:flex-row', 'items-center', 'justify-between');
  
      const leftDiv = document.createElement('div');
      leftDiv.classList.add('text-yellow-500', 'mb-4', 'md:mb-0', 'md:mr-4');
  
      const h1 = document.createElement('h1');
      h1.classList.add('text-4xl', 'font-serif');
      h1.textContent = 'GOLD GYM A.B';
  
      leftDiv.appendChild(h1);
  
      const rightDiv = document.createElement('div');
      rightDiv.classList.add('flex', 'items-center');
  
      const img = document.createElement('img');
      img.setAttribute('src', '../Imatges/Logo_final.svg');
      img.classList.add('w-30', 'h-20');
      img.setAttribute('alt', 'Logo Gold Gym');
  
      rightDiv.appendChild(img);
  
      innerDiv.appendChild(leftDiv);
      innerDiv.appendChild(rightDiv);
  
      header.appendChild(innerDiv);
  
      document.body.prepend(header);
    }
  
    const navbar = document.createElement('nav');
    navbar.classList.add('w-full', 'mb-10', 'bg-white', 'shadow-md', 'text-lg');
  
    let links = `
      <li><a href="index.html" class="text-blue-500 font-bold hover:text-blue-700">Home</a></li>
    `;
  
    if (isLoggedIn) {
      links += `
      <li><a href="dashboard.html" class="text-blue-500 font-bold hover:text-blue-700">Dashboard</a></li>
      <li><a href="logout.html" class="btn btn-primary bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Logout</a></li>
    `;
    } else {
      links += `
        <li><a href="login.html" class="btn btn-primary bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Login</a></li>
      `;
    }
  
    if (isAdmin) {
      links += `
        <li><a href="admin.html" class="btn btn-primary bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Admin</a></li>
      `;
    }
  
    navbar.innerHTML = `
      <ul class="flex justify-between items-center p-4">
        ${links}
      </ul>
    `;
  
    document.body.prepend(navbar);
  }
  