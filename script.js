
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form_container');
  const emailInput = document.getElementById('email_field');
  const passwordInput = document.getElementById('password_field');
  const nameContainer = document.getElementById('name_container');
  const submitBtn = document.getElementById('submit_btn');
  const toggleLink = document.getElementById('toggle_link');
  const formTitle = document.getElementById('form_title');
  const formSubtitle = document.getElementById('form_subtitle');
  const loadingSpinner = document.getElementById('loading_spinner');

  let isLoginMode = true;

  // Toggle between login and signup modes
  toggleLink.addEventListener('click', () => {
    isLoginMode = !isLoginMode;

    nameContainer.style.display = isLoginMode ? 'none' : 'flex';
    formTitle.textContent = isLoginMode ? 'Iniciar Sesión' : 'Crear Cuenta';
    formSubtitle.textContent = isLoginMode
      ? 'Comienza con nuestra aplicación, crea una cuenta y disfruta la experiencia.'
      : 'Regístrate para comenzar tu experiencia con nosotros.';
    submitBtn.textContent = isLoginMode ? 'Iniciar Sesión' : 'Registrarse';
    toggleLink.textContent = isLoginMode ? 'Registrarse' : 'Iniciar Sesión';
  });

  // Handle form submission
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name_field');
    loadingSpinner.style.display = 'block';
    submitBtn.disabled = true;

    // Simulate server request
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Redirect to video.html after submission
    window.location.href = 'video.html';
  });
});
