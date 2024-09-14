// Função para alternar a visibilidade do menu lateral
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

// Função para abrir o modal de publicação
function openPublication() {
    var modal = document.getElementById("publicationModal");
    modal.style.display = "block";
}

// Função para fechar o modal de publicação
function closePublication() {
    var modal = document.getElementById("publicationModal");
    modal.style.display = "none";
}

// Fechar o modal ao clicar fora da área de conteúdo
window.onclick = function(event) {
    var modal = document.getElementById("publicationModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
