// Alternar tema claro/escuro
const themeToggle = document.querySelector('.theme-toggle');
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Alternar ícone
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    
    // Salvar preferência
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkMode', isDark);
});

// Verificar preferência salva
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-theme');
    const icon = document.querySelector('.theme-toggle i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}