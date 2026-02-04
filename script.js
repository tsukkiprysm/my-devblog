const nav = document.getElementById("nav");
const selectPosts = document.getElementById("selectPosts");
const latest_column = document.getElementById("latest_column");
const project_column = document.getElementById("project_column");
const mq_mobile = window.matchMedia("(max-width: 576px)");

function mudar_coluna (valor) {
    if (!mq_mobile.matches) return;
    latest_column.classList.toggle("hidden", valor === "other_projects");
    project_column.classList.toggle("hidden", valor === "latest_entries")
}

if (selectPosts) {
    mudar_coluna(selectPosts.value);
    selectPosts.addEventListener("change", function () {
        mudar_coluna(this.value);
    })
}
function openNav() {
    nav.classList.add("show");
}

function closeNav() {
    nav.classList.remove("show");
}