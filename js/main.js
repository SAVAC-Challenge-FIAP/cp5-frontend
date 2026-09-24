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