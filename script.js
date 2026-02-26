const playlistConfig = {
    soundcloud: {
        buttonId: 'btn-carregar-playlist',
        containerId: 'playlist-container',
        closeClass: 'btn-fechar-sc',
        icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/soundcloud.svg',
        iframeClass: 'soundcloud',
        iframeTitle: 'SoundCloud playlist player',
        iframeAllow: 'autoplay',
        iframeSrc: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/xampsbeatz/sets/xampsbeatz',
        closeLabelKey: 'fecharSC'
    },
    youtube: {
        buttonId: 'btn-carregar-youtube',
        containerId: 'youtube-container',
        closeClass: 'btn-fechar-yt',
        icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg',
        iframeClass: 'youtube',
        iframeTitle: 'YouTube playlist player',
        iframeAllow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        iframeSrc: 'https://www.youtube.com/embed/videoseries?si=gQua6M-dFIldHVwB&amp;list=PLzGW71UVkXlQhNErYKmaYYGoaLG0j3XTU',
        closeLabelKey: 'fecharYT',
        extraIframeAttrs: 'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen'
    }
};

function renderPlaylist(type) {
    const config = playlistConfig[type];
    const button = document.getElementById(config.buttonId);
    const container = document.getElementById(config.containerId);
    const closeLabel = textos[idiomaAtual][config.closeLabelKey];
    const extraAttrs = config.extraIframeAttrs ?? '';

    container.innerHTML = `
        <div class="playlist-wrapper">
            <button type="button" class="btn-fechar-playlist ${config.closeClass}" data-type="${type}">
                <img src="${config.icon}" alt="" class="btn-icon-fechar" />
                ${closeLabel}
            </button>
            <div class="responsive-iframe">
                <iframe
                    class="${config.iframeClass}"
                    title="${config.iframeTitle}"
                    loading="lazy"
                    allow="${config.iframeAllow}"
                    src="${config.iframeSrc}"
                    ${extraAttrs}>
                </iframe>
            </div>
        </div>
    `;

    button.style.display = 'none';
    button.setAttribute('aria-expanded', 'true');
}

function fecharPlaylist(type) {
    const config = playlistConfig[type];
    const container = document.getElementById(config.containerId);
    const button = document.getElementById(config.buttonId);

    container.innerHTML = '';
    button.style.display = 'flex';
    button.setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', event => {
    const closeButton = event.target.closest('.btn-fechar-playlist');

    if (closeButton) {
        fecharPlaylist(closeButton.dataset.type);
    }
});

document.getElementById('btn-carregar-playlist').addEventListener('click', () => {
    renderPlaylist('soundcloud');
});

document.getElementById('btn-carregar-youtube').addEventListener('click', () => {
    renderPlaylist('youtube');
});

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        traduzir(btn.dataset.lang);
        document.querySelectorAll('.lang-btn').forEach(el => {
            el.classList.toggle('active', el === btn);
            el.setAttribute('aria-pressed', String(el === btn));
        });
    });
});

const initialLangButton = document.querySelector('.lang-btn[data-lang="pt-BR"]');
if (initialLangButton) {
    initialLangButton.classList.add('active');
    initialLangButton.setAttribute('aria-pressed', 'true');
}
