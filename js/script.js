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
    const savedIcon = document.querySelector('.theme-toggle i');
    if (savedIcon) {
        savedIcon.classList.remove('fa-moon');
        savedIcon.classList.add('fa-sun');
    }
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
        
        if (!projectsContainer) return;
        
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
                        <span class="lang-dot" style="background-color: ${getLanguageColor(project.language)}"></span>
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
        if (projectsContainer) {
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
}

// Função auxiliar para obter cores de linguagem
function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f1e05a',
        'TypeScript': '#2b7489',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'Python': '#3572A5',
        'Java': '#b07219',
        'C++': '#f34b7d',
        'C#': '#178600',
        'PHP': '#4F5D95',
        'Ruby': '#701516',
        'Go': '#00ADD8',
        'Rust': '#dea584',
        'Swift': '#ffac45',
        'Kotlin': '#F18E33',
        'Dart': '#00B4AB',
        'Shell': '#89e051',
        'PowerShell': '#012456',
        'Vue': '#2c3e50',
        'React': '#61dafb',
        'Angular': '#dd0031',
        'Svelte': '#ff3e00'
    };
    return colors[language] || '#cccccc';
}

// ---------- DADOS ----------

const documentosTeste = [
    {
        id: 1,
        titulo: "Plano de Teste - Aplicativo Móvel",
        descricao: "Plano completo de testes para aplicativo móvel incluindo casos de teste e estratégias.",
        tipo: "PDF",
        data: "15/11/2025",
        arquivo: "planos-teste/plano-teste-mobile.pdf"
    }
];

const livrosLidos = [
    {
        id: 1,
        titulo: "Teste de Software - Produção de Qualidade",
        descricao: "Livro focado em fundamentos e boas práticas de testes de software.",
        tipo: "Livro (PDF)",
        data: "2024",
        arquivo: "livros/teste-software-producao-qualidade.pdf"
    },
    {
        id: 2,
        titulo: "Clean Code",
        descricao: "Práticas para escrever código mais limpo e fácil de manter.",
        tipo: "Livro (PDF)",
        data: "2024",
        arquivo: "livros/clean-code.pdf"
    },
    {
        id: 3,
        titulo: "O Guia Completo do Teste de Software",
        descricao: "Visão geral completa sobre processos e técnicas de teste.",
        tipo: "Livro (PDF)",
        data: "2025",
        arquivo: "livros/guia-completo-teste-software.pdf"
    }
];

const conteudosCriados = [
    {
        id: 1,
        titulo: "Guia Prático de Testes Automáticos com Cypress",
        descricao: "eBook com exemplos práticos e melhores práticas para automação de testes.",
        tipo: "eBook",
        data: "Novembro 2025",
        arquivo: "conteudo/ebook-cypress.pdf"
    }
];

// ---------- FUNÇÕES DE LISTAGEM (modelo igual ao de Planos de Teste) ----------

function carregarDocumentosTeste() {
    const container = document.getElementById('documentos-teste');
    if (!container) return;

    if (documentosTeste.length === 0) {
        container.innerHTML = `
            <div class="no-content">
                <i class="fas fa-folder-open"></i>
                <p>Nenhum documento disponível no momento.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = documentosTeste.map(doc => `
        <div class="documento-card" onclick="abrirDocumento('${doc.arquivo}')">
            <div class="documento-icon">
                <i class="far fa-file-pdf"></i>
            </div>
            <div class="documento-content">
                <h3>${doc.titulo}</h3>
                <p>${doc.descricao}</p>
                <div class="documento-meta">
                    <span class="documento-tipo">${doc.tipo}</span>
                    <span class="documento-data">${doc.data}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function carregarLivrosLidos() {
    const container = document.getElementById('livros-lista');
    if (!container) return;

    if (livrosLidos.length === 0) {
        container.innerHTML = `
            <div class="no-content">
                <i class="fas fa-book-open"></i>
                <p>Nenhum livro cadastrado ainda.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = livrosLidos.map(livro => `
        <div class="documento-card" onclick="abrirDocumento('${livro.arquivo}')">
            <div class="documento-icon">
                <i class="fas fa-book"></i>
            </div>
            <div class="documento-content">
                <h3>${livro.titulo}</h3>
                <p>${livro.descricao}</p>
                <div class="documento-meta">
                    <span class="documento-tipo">${livro.tipo}</span>
                    <span class="documento-data">${livro.data}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function carregarConteudoCriado() {
    const container = document.getElementById('conteudo-lista');
    if (!container) return;

    if (conteudosCriados.length === 0) {
        container.innerHTML = `
            <div class="no-content">
                <i class="fas fa-book-open"></i>
                <p>Nenhum conteúdo disponível no momento.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = conteudosCriados.map(conteudo => `
        <div class="documento-card" onclick="abrirConteudo('${conteudo.arquivo}')">
            <div class="documento-icon">
                <i class="far fa-file-alt"></i>
            </div>
            <div class="documento-content">
                <h3>${conteudo.titulo}</h3>
                <p>${conteudo.descricao}</p>
                <div class="documento-meta">
                    <span class="documento-tipo">${conteudo.tipo}</span>
                    <span class="documento-data">${conteudo.data}</span>
                </div>
            </div>
        </div>
    `).join('');
}
// Funções para abrir documentos/conteúdo
function abrirDocumento(arquivo) {
    window.open(arquivo, '_blank');
}

function abrirConteudo(arquivo) {
    window.open(arquivo, '_blank');
}

// Carregar tudo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    fetchGitHubProjects();
    carregarDocumentosTeste();
    carregarLivrosLidos();
    carregarConteudoCriado();
});