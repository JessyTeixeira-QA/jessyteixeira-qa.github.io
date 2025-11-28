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
    const username = 'JessyTeixeira-QA';
    const projectsContainer = document.getElementById('github-projects');
    const excludedRepos = ['jessyteixeira-qa', 'jessyteixeira-qa.github.io', 'jessicaferreirateixeira-blip'];
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
        let projects = await response.json();
        
        if (!Array.isArray(projects)) {
            throw new Error('Não foi possível carregar os projetos');
        }
        
        // Filtrar repositórios excluídos
        projects = projects.filter(project => !excludedRepos.includes(project.name));
        
        // Ordenar por data de atualização (mais recentes primeiro)
        projects.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        
        projectsContainer.innerHTML = ''; // Limpa o carregando
        
        if (projects.length === 0) {
            projectsContainer.innerHTML = `
                <div class="no-projects">
                    <i class="fas fa-folder-open"></i>
                    <p>Nenhum projeto encontrado</p>
                </div>
            `;
            return;
        }
        
        projects.forEach(project => {
            // Formatar a data
            const updatedAt = new Date(project.updated_at);
            const formattedDate = updatedAt.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            }).replace(/ de /g, ' ');
            
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <div class="project-header">
                    <i class="fas fa-folder"></i>
                    <div class="project-links">
                        <a href="${project.html_url}" target="_blank" rel="noopener noreferrer" aria-label="Ver no GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        ${project.homepage ? `
                            <a href="${project.homepage}" target="_blank" rel="noopener noreferrer" aria-label="Ver demonstração">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
                <div class="project-content">
                    <h3>${project.name}</h3>
                    <p>${project.description || 'Sem descrição disponível'}</p>
                </div>
                <div class="project-footer">
                    <div class="project-lang">
                        <span class="lang-dot"></span>
                        <span>${project.language || 'Text'}</span>
                    </div>
                    <div class="project-updated">
                        <i class="far fa-clock"></i>
                        <span>Atualizado em ${formattedDate}</span>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Erro ao carregar projetos:', error);
        projectsContainer.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Não foi possível carregar os projetos no momento.</p>
                <a href="https://github.com/JessyTeixeira-QA" target="_blank" rel="noopener noreferrer" class="btn">
                    Ver perfil no GitHub
                </a>
            </div>
        `;
    }
}

// Carregar projetos quando a página carregar
document.addEventListener('DOMContentLoaded', fetchGitHubProjects);