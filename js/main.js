// ============================================================
// Melodia — interações da landing page
// TODO: menu fixo com efeito de transparência no scroll
// TODO: menu mobile (hamburger)
// TODO: validação do formulário de contato
// ============================================================

// Player da lista "Últimas músicas": um único <audio> compartilhado,
// cada botão traz o arquivo em data-src.
const playlist = document.querySelector('[data-playlist]');
const player = new Audio();
let botaoAtivo = null;

if (playlist) {
    playlist.addEventListener('click', (event) => {
        const botao = event.target.closest('.play-btn');
        if (!botao) return;

        if (botao === botaoAtivo) {
            player.paused ? player.play() : player.pause();
            return;
        }

        if (botaoAtivo) marcarTocando(botaoAtivo, false);
        botaoAtivo = botao;
        player.src = botao.dataset.src;
        player.play();
    });

    player.addEventListener('play', () => marcarTocando(botaoAtivo, true));
    player.addEventListener('pause', () => marcarTocando(botaoAtivo, false));
}

function marcarTocando(botao, tocando) {
    const titulo = botao.closest('li').querySelector('.song-title');

    botao.setAttribute('aria-label', `${tocando ? 'Pausar' : 'Tocar'} ${titulo.textContent}`);
    // o kit do Font Awesome troca o <i> por <svg>, então recriamos o ícone
    botao.innerHTML = `<i class="fa-solid fa-${tocando ? 'pause' : 'play'}"></i>`;
    titulo.classList.toggle('text-tertiary-pink', tocando);
}

// Mobile sidebar toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileCloseButton = document.getElementById('mobile-close-button');
const mobileSidebar = document.getElementById('mobile-sidebar');

function openMobileSidebar() {
    mobileSidebar.classList.remove('-translate-x-full');
    document.body.style.overflow = 'hidden';
    if (mobileMenuButton) mobileMenuButton.setAttribute('aria-expanded', 'true');
}

function closeMobileSidebar() {
    mobileSidebar.classList.add('-translate-x-full');
    document.body.style.overflow = '';
    if (mobileMenuButton) mobileMenuButton.setAttribute('aria-expanded', 'false');
}

if (mobileMenuButton) mobileMenuButton.addEventListener('click', openMobileSidebar);
if (mobileCloseButton) mobileCloseButton.addEventListener('click', closeMobileSidebar);

// Player das seções "Músicas em alta" e "Bibliotecas": cada botão com
// data-src toca o áudio; tocar aqui pausa a lista "Últimas músicas" e vice-versa.
const playerSecoes = new Audio();
let botaoSecaoAtivo = null;

document.querySelectorAll('[data-player]').forEach((secao) => {
    secao.addEventListener('click', (event) => {
        const botao = event.target.closest('[data-src]');
        if (!botao) return;

        if (botao === botaoSecaoAtivo) {
            playerSecoes.paused ? playerSecoes.play() : playerSecoes.pause();
            return;
        }

        if (botaoSecaoAtivo) marcarTocandoSecao(botaoSecaoAtivo, false);
        botaoSecaoAtivo = botao;
        playerSecoes.src = botao.dataset.src;
        playerSecoes.play();
    });
});

playerSecoes.addEventListener('play', () => {
    player.pause();
    marcarTocandoSecao(botaoSecaoAtivo, true);
});
playerSecoes.addEventListener('pause', () => marcarTocandoSecao(botaoSecaoAtivo, false));
player.addEventListener('play', () => playerSecoes.pause());

function marcarTocandoSecao(botao, tocando) {
    const card = botao.closest('article') || botao;
    const titulo = card.querySelector('[data-titulo]');
    const icone = botao.querySelector('[data-icone]');

    botao.setAttribute('aria-label', `${tocando ? 'Pausar' : 'Tocar'} ${titulo.textContent}`);
    icone.innerHTML = `<i class="fa-solid fa-${tocando ? 'pause' : 'play'}"></i>`;
    titulo.classList.toggle('text-tertiary-pink', tocando);
}


// Carrossel da seção "Bibliotecas": as setas rolam um card por vez e
// ficam desabilitadas quando não há mais para onde rolar.
const carrossel = document.querySelector('[data-carrossel]');
const setaAnterior = document.querySelector('[data-carrossel-anterior]');
const setaProximo = document.querySelector('[data-carrossel-proximo]');

if (carrossel && setaAnterior && setaProximo) {
    const passo = () => carrossel.firstElementChild.offsetWidth + 16; // largura do card + gap-4

    function atualizarSetas() {
        const fim = carrossel.scrollWidth - carrossel.clientWidth;
        setaAnterior.disabled = carrossel.scrollLeft <= 1;
        setaProximo.disabled = carrossel.scrollLeft >= fim - 1;
    }

    setaAnterior.addEventListener('click', () => carrossel.scrollBy({ left: -passo() }));
    setaProximo.addEventListener('click', () => carrossel.scrollBy({ left: passo() }));
    carrossel.addEventListener('scroll', atualizarSetas);
    window.addEventListener('resize', atualizarSetas);
    atualizarSetas();
}
