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
// Função para buscar projetos do GitHub
async function fetchGitHubProjects() {
    const username = 'JessyTeixeira-QA'; // Seu nome de usuário do GitHub
    const projectsContainer = document.getElementById('github-projects');
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const projects = await response.json();
        
        if (!Array.isArray(projects)) {
            throw new Error('Não foi possível carregar os projetos');
        }
        
        projectsContainer.innerHTML = ''; // Limpa o carregando
        
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <div class="project-info">
                    <h3>${project.name}</h3>
                    <p>${project.description || 'Sem descrição disponível'}</p>
                    <div class="project-links">
                        <a href="${project.html_url}" target="_blank" aria-label="Ver no GitHub">
                            <i class="fab fa-github"></i> Código
                        </a>
                        ${project.homepage ? `
                            <a href="${project.homepage}" target="_blank" aria-label="Ver demonstração">
                                <i class="fas fa-external-link-alt"></i> Demo
                            </a>
                        ` : ''}
                    </div>
                    <div class="project-stats">
                        <span><i class="far fa-star"></i> ${project.stargazers_count}</span>
                        <span><i class="fas fa-code-branch"></i> ${project.forks_count}</span>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Erro ao carregar projetos:', error);
        projectsContainer.innerHTML = `
            <div class="error-message">
                Não foi possível carregar os projetos no momento. 
                <a href="https://github.com/JessyTeixeira-QA" target="_blank">Ver perfil no GitHub</a>
            </div>
        `;
    }
}

// Carregar projetos quando a página carregar
document.addEventListener('DOMContentLoaded', fetchGitHubProjects);