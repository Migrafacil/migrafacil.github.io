let page = 1;
let isLoading = false;
let jobs = [
    {
        title: "Auxiliar Administrativo",
        salary: "R$ 2.000,00",
        location: "São Paulo - SP",
        description: "Responsável por rotinas administrativas e atendimento a clientes.",
        applyUrl: "https://api.whatsapp.com/send?phone=5511987654321&text=Olá,%20gostaria%20de%20me%20candidatar%20à%20vaga%20de%20Auxiliar%20Administrativo"
    },
    {
        title: "Desenvolvedor Web",
        salary: "R$ 4.500,00",
        location: "Rio de Janeiro - RJ",
        description: "Desenvolvimento e manutenção de websites usando HTML, CSS e JavaScript.",
        applyUrl: "https://www.linkedin.com/jobs/view/359023123/"
    },
    {
        title: "Analista de Marketing",
        salary: "R$ 3.800,00",
        location: "Belo Horizonte - MG",
        description: "Criação de campanhas publicitárias e análise de desempenho.",
        applyUrl: "https://api.whatsapp.com/send?phone=5531998765432&text=Olá,%20gostaria%20de%20me%20candidatar%20à%20vaga%20de%20Analista%20de%20Marketing"
    },
    {
        title: "Gerente de Projetos",
        salary: "R$ 7.500,00",
        location: "Curitiba - PR",
        description: "Planejamento e gestão de projetos em diferentes áreas.",
        applyUrl: "https://jobs.kenoby.com/empresa-talento/vaga/gerente-de-projetos/123456"
    },
    {
        title: "Engenheiro de Software",
        salary: "R$ 8.000,00",
        location: "Porto Alegre - RS",
        description: "Desenvolvimento de software e suporte técnico para sistemas complexos.",
        applyUrl: "https://api.whatsapp.com/send?phone=5551987654321&text=Olá,%20gostaria%20de%20me%20candidatar%20à%20vaga%20de%20Engenheiro%20de%20Software"
    },
    {
        title: "Designer UX/UI",
        salary: "R$ 5.500,00",
        location: "Florianópolis - SC",
        description: "Design de interfaces e experiências de usuário focando na usabilidade.",
        applyUrl: "https://www.linkedin.com/jobs/view/852147369/"
    },
    {
        title: "Analista de Dados",
        salary: "R$ 6.500,00",
        location: "Brasília - DF",
        description: "Coleta e análise de dados para apoiar a tomada de decisões estratégicas.",
        applyUrl: "https://api.whatsapp.com/send?phone=5561987654321&text=Olá,%20gostaria%20de%20me%20candidatar%20à%20vaga%20de%20Analista%20de%20Dados"
    },
    {
        title: "Consultor de Vendas",
        salary: "R$ 2.800,00 + comissão",
        location: "Salvador - BA",
        description: "Prospecção de clientes e fechamento de vendas de serviços.",
        applyUrl: "https://api.whatsapp.com/send?phone=5571987654321&text=Olá,%20gostaria%20de%20me%20candidatar%20à%20vaga%20de%20Consultor%20de%20Vendas"
    },
    {
        title: "Arquiteto",
        salary: "R$ 7.500,00",
        location: "Fortaleza - CE",
        description: "Desenvolvimento de projetos arquitetônicos e supervisão de obras.",
        applyUrl: "https://jobs.empresa-arquitetura.com/vagas/arquiteto/54321"
    },
    {
        title: "Enfermeiro",
        salary: "R$ 4.500,00",
        location: "Recife - PE",
        description: "Prestação de cuidados de enfermagem a pacientes.",
        applyUrl: "https://www.linkedin.com/jobs/view/243908876/"
    }
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

        if (filteredJobs.length === 0) {
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
                    <button onclick="applyForJob('${job.applyUrl}')">Quero me candidatar</button>
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

function applyForJob(applyUrl) {
    window.location.href = applyUrl; 
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', fetchJobs);
