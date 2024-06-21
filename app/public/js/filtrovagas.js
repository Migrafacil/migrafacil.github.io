function applyFilters() {
    const filters = {
        minSalary: document.getElementById('min-salary').value,
        maxSalary: document.getElementById('max-salary').value,
        jobTypes: {
            fullTime: document.getElementById('full-time').checked,
            partTime: document.getElementById('part-time').checked,
            internship: document.getElementById('internship').checked,
            temporary: document.getElementById('temporary').checked,
        },
        experience: document.querySelector('input[name="experience"]:checked').value,
        education: document.querySelector('input[name="education"]:checked').value,
        remote: document.querySelector('input[name="remote"]:checked').value,
    };

    console.log('Filtros aplicados:', filters);
}
