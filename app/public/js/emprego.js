let page = 1;
let isLoading = false;
let jobs = [
    {
        title: "Auxiliar Administrativo",
        salary: "R$ 1500,00",
        location: "São Paulo - SP",
        description: "Responsável por auxiliar diversas áreas de uma organização nas rotinas de digitação, arquivo de documentos, distribuição de correspondência e serviços externos."
    },
    {
        title: "Desenvolvedor Web",
        salary: "R$ 4000,00",
        location: "Rio de Janeiro - RJ",
        description: "Desenvolvimento e manutenção de websites e aplicativos web, trabalhando com tecnologias como HTML, CSS, JavaScript e frameworks modernos."
    },
    {
        title: "Analista de Marketing",
        salary: "R$ 3000,00",
        location: "Belo Horizonte - MG",
        description: "Criação de campanhas publicitárias, análise de mercado, planejamento estratégico e comunicação com o cliente."
    },
    {
        title: "Gerente de Projetos",
        salary: "R$ 7000,00",
        location: "Curitiba - PR",
        description: "Responsável pelo planejamento, execução e monitoramento de projetos, garantindo que sejam concluídos no prazo e dentro do orçamento."
    },
    {
        title: "Engenheiro de Software",
        salary: "R$ 8000,00",
        location: "Porto Alegre - RS",
        description: "Desenvolvimento de software, análise de requisitos, testes e manutenção de sistemas complexos."
    },
    {
        title: "Designer UX/UI",
        salary: "R$ 5000,00",
        location: "Florianópolis - SC",
        description: "Criação de interfaces de usuário e experiências de usuário, focando na usabilidade e estética dos produtos."
    },
    {
        title: "Analista de Dados",
        salary: "R$ 6000,00",
        location: "Brasília - DF",
        description: "Coleta, análise e interpretação de grandes volumes de dados para apoiar a tomada de decisões estratégicas."
    },
    {
        title: "Consultor de Vendas",
        salary: "R$ 2500,00 + comissão",
        location: "Salvador - BA",
        description: "Prospecção de novos clientes, manutenção de carteira de clientes e fechamento de vendas."
    },
    {
        title: "Arquiteto",
        salary: "R$ 7000,00",
        location: "Fortaleza - CE",
        description: "Desenvolvimento de projetos arquitetônicos, coordenação de obras e acompanhamento de cronogramas."
    },
    {
        title: "Enfermeiro",
        salary: "R$ 4000,00",
        location: "Recife - PE",
        description: "Prestação de cuidados de enfermagem a pacientes, administração de medicamentos e acompanhamento de tratamentos."
    },
    {
        title: "Professor de Inglês",
        salary: "R$ 3000,00",
        location: "Manaus - AM",
        description: "Ministração de aulas de inglês para diferentes níveis de proficiência, planejamento de aulas e avaliação de alunos."
    },
    {
        title: "Técnico em Informática",
        salary: "R$ 2500,00",
        location: "Goiânia - GO",
        description: "Manutenção de hardware e software, suporte técnico a usuários e instalação de sistemas operacionais."
    },
    {
        title: "Auxiliar de Logística",
        salary: "R$ 2000,00",
        location: "Campinas - SP",
        description: "Controle de estoque, emissão de notas fiscais, separação e conferência de mercadorias."
    },
    {
        title: "Analista Financeiro",
        salary: "R$ 5000,00",
        location: "Vitória - ES",
        description: "Controle de fluxo de caixa, análise de despesas e receitas, elaboração de relatórios financeiros."
    },
    {
        title: "Desenvolvedor Mobile",
        salary: "R$ 6000,00",
        location: "São Paulo - SP",
        description: "Desenvolvimento de aplicativos móveis para Android e iOS, manutenção e atualização de aplicações existentes."
    },
];


function fetchJobs() {
    if (isLoading) return; 

    isLoading = true;
    const jobListings = document.getElementById('job-listings');
    const jobTitle = document.getElementById('job-title').value.toLowerCase();
    const location = document.getElementById('location').value.toLowerCase();

    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.display = 'block'; 
    setTimeout(() => {
        const filteredJobs = jobs.filter(job => 
            (job.title.toLowerCase().includes(jobTitle) || jobTitle === '') &&
            (job.location.toLowerCase().includes(location) || location === '')
        ).slice((page - 1) * 15, page * 15);

        if (filteredJobs.length === 0 && page === 1) {
            const noJobsMessage = document.createElement('p');
            noJobsMessage.id = 'no-jobs-message';
            noJobsMessage.textContent = 'Não há vagas disponíveis';
            jobListings.appendChild(noJobsMessage);
        } else {
            filteredJobs.forEach(job => {
                const jobCard = document.createElement('div');
                jobCard.className = 'job-card';

                jobCard.innerHTML = `
                    <h3>${job.title}</h3>
                    <p class="salary">Salário: ${job.salary}</p>
                    <p class="location">Localização: ${job.location}</p>
                    <p class="description">${job.description}</p>
                    <button onclick="applyForJob('${job.title}')">Quero me candidatar</button>
                `;

                jobListings.appendChild(jobCard);
            });
        }

        page += 1;
        isLoading = false;
        loadingSpinner.style.display = 'none'; 
    }, 1000); 
}

function searchJobs() {
    const jobListings = document.getElementById('job-listings');
    jobListings.innerHTML = ''; 
    page = 1; 

    
    const noJobsMessage = document.getElementById('no-jobs-message');
    if (noJobsMessage) {
        noJobsMessage.remove();
    }

    fetchJobs(); 
}

function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        fetchJobs(); 
    }
}

function applyForJob(jobTitle) {
    alert(`Você se candidatou para a vaga: ${jobTitle}`);
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', fetchJobs);
