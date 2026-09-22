
const btnSurpresa = document.getElementById('btnSurpresa');
const overlayPedido = document.getElementById('overlayPedido');
const btnSim = document.getElementById('btnSim');
const musica = document.getElementById('musicaFundo');

// Abre o pedido, toca a música e ativa chuva de corações
btnSurpresa.addEventListener('click', () => {
    overlayPedido.classList.add('active');
    musica.play().catch(() => console.log("Áudio necessita de interação prévia"));
    iniciarChuvaDeCoracoes();
});

// Clique no Aceito
btnSim.addEventListener('click', () => {
    alert('AEEE! VOCÊ FEZ A MELHOR ESCOLHA DA SUA VIDA! 💖🎉');
    overlayPedido.classList.remove('active');
});

// Função para gerar corações caindo de fundo
function iniciarChuvaDeCoracoes() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.opacity = Math.random();
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}