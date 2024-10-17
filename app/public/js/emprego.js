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
        location: "São Paulo - SP",
        description: "Desenvolvimento e manutenção de websites usando HTML, CSS e JavaScript.",
        applyUrl: "https://fitbank.vagas.solides.com.br/vaga/469691?origem=linkedin"
    },
    {
        title: "Riachuelo Vagas Gerais",
        salary: "A definir",
        location: "Brasil",
        description: "Temos 926 vagas, no Brasil todo! Somos moda, varejo, tech, logística, financeira, indústria e o maior ecossistema de moda, lifestyle, produtos e serviços financeiros do Brasil.",
        applyUrl: "https://carreiras.riachuelo.com.br/"
    },
    {
        title: "Gerente de Projetos",
        salary: "R$ 7.500,00",
        location: "Curitiba - PR",
        description: "Planejamento e gestão de projetos em diferentes áreas.",
        applyUrl: "https://www.linkedin.com/jobs/view/4017292679?trk=li_Jooble-CPC-LI-BR-USD_BR_careers_jobsgtm_9acc4371-6a56-4365-8141-56da4b817626_job-dist&utm_medium=jobdist&mcid=6864282706205925377&utm_source=Jooble-CPC-LI-BR-USD&ePP=CwEAAAGSIXs4roOiS-5hGopFN-LVAS0b2I7mekjrPEl9fabSxszH94GGF1GTAhq2RhZLMcgzhGcAzpuZ2jslZsGlArYwW6MTP13wfGyaHQ&ccuid=56947595248"
    },
    {
        title: "Engenheiro de Software",
        salary: "R$ 8.000,00",
        location: "Porto Alegre - RS",
        description: "Desenvolvimento de software e suporte técnico para sistemas complexos.",
        applyUrl: "https://api.whatsapp.com/send?phone=5551987654321&text=Olá,%20gostaria%20de%20me%20candidatar%20à%20vaga%20de%20Engenheiro%20de%20Software"
    },
    {
        title: "Sodimac Vagas",
        salary: "A definir",
        location: "Brasil",
        description: "Confira todas as nossas vagas no Brasil todo",
        applyUrl: "https://www.99jobs.com/sodimac"
    },
    {
        title: "Vagas C&A",
        salary: "R$ 6.500,00",
        location: "Brasil",
        description: "Venha conhecer nossas vagas !",
        applyUrl: "https://www.empregoligado.com.br/pt-br/empresa/2347/vagas-de-emprego-na-empresa-canda?locale=pt-br"
    },
    {
        title: "Consultor de Vendas",
        salary: "R$ 2.800,00 + comissão",
        location: "Salvador - BA",
        description: "Prospecção de clientes e fechamento de vendas de serviços.",
        applyUrl: "https://www.linkedin.com/jobs/view/4028295567?trk=li_JobRapido-LIBR_BR_careers_jobsgtm_9acc4371-6a56-4365-8141-56da4b817626_job-dist&utm_medium=jobdist&mcid=6864282706205925377&utm_source=JobRapido-LIBR&ePP=CwEAAAGSIXsx4XAoxQ2JhWaq82X4GqJvSat1QrtjJMpSsTKf0zluS2yrUG0-ObYUs1Lgqc8SSJUwtruQLq4PAgJ3PxRJmAcKTzpYE-19ZQ&ccuid=56947748915&original_referer=https%3A%2F%2Fclick.appcast.io%2F"
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
