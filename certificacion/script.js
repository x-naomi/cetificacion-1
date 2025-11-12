document.addEventListener('DOMContentLoaded', () => {
  const cartCountEl = document.getElementById('cart-count');
  const addButtons = Array.from(document.querySelectorAll('.add-cart'));
  const loginBtn = document.getElementById('login');
  const emailInput = document.getElementById('email');

  let count = Number(localStorage.getItem('cartCount') || 0);
  cartCountEl.textContent = count;

  addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      count++;
      cartCountEl.textContent = count;
      localStorage.setItem('cartCount', count);
    });
  });

  loginBtn.addEventListener('click', () => {
    const email = (emailInput.value || '').trim();
    if (!email || !email.includes('@')) {
      alert('Ingrese un email válido.');
      return;
    }
    localStorage.setItem('userEmail', email);
    alert('Bienvenido: ' + email);
    emailInput.value = '';
  });

  // Mostrar mensaje de bienvenida al hacer login
  document.getElementById("login").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    if (email) {
      alert(`Bienvenido ${email}`);
    } else {
      alert("Por favor ingresa tu correo antes de iniciar sesión.");
    }
  });

  // Cambiar imagen al pasar el cursor
  const mainImg = document.getElementById("main-img");
  mainImg.addEventListener("mouseover", () => {
    mainImg.src = "https://i.pinimg.com/736x/10/57/a4/1057a4f7d408a5509186932721ca6ba4.jpg"; // imagen alternativa
  });
  mainImg.addEventListener("mouseout", () => {
    mainImg.src = ""https://i.pinimg.com/736x/10/57/a4/1057a4f7d408a5509186932721ca6ba4.jpg;
  });

  // Contador del carrito
  let cartCount = 0;
  const cartDisplay = document.getElementById("cart-count");
  const buttons = document.querySelectorAll(".add-cart");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      cartCount++;
      cartDisplay.textContent = cartCount;
      localStorage.setItem('cartCount', cartCount);
    });
  });

  // Pausa al hover / toque
  const track = document.querySelector('.carousel-track');
  if (!track) return;

  track.addEventListener('mouseenter', () => track.classList.add('paused'));
  track.addEventListener('mouseleave', () => track.classList.remove('paused'));

  // Soporte táctil: alterna pausa on touchstart/touchend
  track.addEventListener('touchstart', () => track.classList.add('paused'));
  track.addEventListener('touchend', () => track.classList.remove('paused'));
});
