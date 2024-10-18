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
        location: "Goiânia - GO",
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
        salary: "R$ 6.500,00",
        location: "Rio de Janeiro-RJ",
        description: "Planejamento e gestão de projetos em diferentes áreas.",
        applyUrl: "https://dc.gupy.io/?gad_source=5&gclid=EAIaIQobChMI9oDhmZKYiQMVp0JIAB0C_gtzEAAYAiAAEgIvZfD_BwE"
    },
    {
        title: "Engenheiro de Software",
        salary: "R$ 5.000,00",
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
        title: "Home Office Eudora",
        salary: "R$ 2.000,00 + comissão",
        location: "Brasil",
        description: "Trabelhe de home office e começe a mudar o seu futuro virando nosso representante!",
        applyUrl: "https://cadastro.eudora.com.br/?utm_source=google_search&utm_medium=cpc&utm_campaign=eudora-interno-alwayson-ir-conversao-google-leads-cpc-search-nonbrand_emprego_e_renda_extra&utm_content=responsivo_jan-23-emprego&gad_source=5&gclid=EAIaIQobChMIkOq58pKYiQMVZ15IAB3aSA6UEAAYAiAAEgIxvPD_BwE"
    },
    {
        title: "Eletricista – Montagem de painéis elétricos / Instalação de comandos ",
        salary: "R$ 2.000,00",
        location: " Cotia – SP",
        description: "Montar painéis e fazer intalação de comandos.",
        applyUrl: "https://www.extraconsult.com.br/vagas-de-emprego/vaga-para-eletricista-montagem-de-paineis-eletricos-instalacao-de-comandos-clp-em-cotia-sp-4160/"
    },
    {
        title: "Assistente Virtual",
        salary: "R$80/h",
        location: "Recife - PE",
        description: "Auxilio Virtual.",
        applyUrl: "https://assistentevirtualk.com/p2?utm_source=GoogleAds&utm_medium=21224514915&utm_campaign=&utm_content=x&utm_term=&gad_source=5&gclid=EAIaIQobChMI667I-5OYiQMVYVxIAB3bFStBEAAYAiAAEgJIEfD_BwE"
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
