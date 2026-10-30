
document.getElementById("year").textContent =
  new Date().getFullYear();

// ========================================
// NOTIFICAÇÕES ILUSTRATIVAS
// ========================================

const toast = document.getElementById("activity-toast");
const toastName = document.getElementById("toast-name");
const toastAvatar = document.getElementById("toast-avatar");
const toastTime = document.getElementById("toast-time");

const nomes = [
  "Ana",
  "Paloma",
  "Patrícia",
  "Mariana",
  "Juliana",
  "Fernanda",
  "Camila",
  "Beatriz",
  "Larissa",
  "Amanda",
  "Isabela",
  "Gabriela",
  "Carolina",
  "Letícia",
  "Rafaela",
  "Vanessa",
  "Bruna",
  "Natália",
  "Débora",
  "Sabrina",
  "Lucas",
  "Gabriel",
  "Rafael",
  "Pedro",
  "Felipe"
];

let nomesDisponiveis = [...nomes];

function escolherNome() {
  if (nomesDisponiveis.length === 0) {
    nomesDisponiveis = [...nomes];
  }

  const indice = Math.floor(
    Math.random() * nomesDisponiveis.length
  );

  return nomesDisponiveis.splice(indice, 1)[0];
}

function mostrarNotificacao() {
  const nome = escolherNome();

  toastName.textContent = `${nome} entrou no grupo!`;
  toastAvatar.textContent = nome.charAt(0).toUpperCase();

  toast.classList.remove("show");

  void toast.offsetWidth;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 5000);
}

// Primeira notificação após 3 segundos
setTimeout(() => {
  mostrarNotificacao();

  function programarProxima() {
    const intervalo =
      Math.floor(Math.random() * 2000) + 3000;

    setTimeout(() => {
      mostrarNotificacao();
      programarProxima();
    }, intervalo);
  }

  programarProxima();

}, 1000);

// ========================================
// CLIQUE NO WHATSAPP
// ========================================

const joinButton = document.getElementById("join-button");

joinButton.addEventListener("click", () => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_group_click", {
      event_category: "conversion",
      event_label: "Radar de Ofertas"
    });
  }
});
