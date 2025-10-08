document.getElementById('btn-carregar-playlist').onclick = function () {
    const container = document.getElementById('playlist-container');
    container.innerHTML = `
        <div class="playlist-wrapper">
            <button class="btn-fechar-playlist btn-fechar-sc" onclick="fecharPlaylist('playlist-container', 'btn-carregar-playlist')">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/soundcloud.svg" alt="Fechar SoundCloud" class="btn-icon-fechar" />
                Fechar Playlist
            </button>
            <div class="responsive-iframe">
                <iframe class="soundcloud" scrolling="no" frameborder="no" allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/xampsbeatz/sets/xampsbeatz"></iframe>
            </div>
        </div>
    `;
    this.style.display = 'none';
};

document.getElementById('btn-carregar-youtube').onclick = function() {
    const yt = document.getElementById('youtube-container');
    yt.innerHTML = `
        <div class="playlist-wrapper">
            <button class="btn-fechar-playlist btn-fechar-yt" onclick="fecharPlaylist('youtube-container', 'btn-carregar-youtube')">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="Fechar YouTube" class="btn-icon-fechar" />
                Fechar Playlist
            </button>
            <div class="responsive-iframe">
                <iframe class="youtube"
                    src="https://www.youtube.com/embed/videoseries?si=gQua6M-dFIldHVwB&amp;list=PLzGW71UVkXlQhNErYKmaYYGoaLG0j3XTU"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>
        </div>
    `;
    this.style.display = 'none';
};

// Função global para fechar playlist e mostrar o botão novamente
function fecharPlaylist(containerId, btnId) {
    document.getElementById(containerId).innerHTML = '';
    document.getElementById(btnId).style.display = 'flex';
}

// Tradução de textos

const textos = {
    "pt-BR": {
        sobreTitulo: "Quem é xampsbeatz?",
        sobreTexto: "Beatmaker com mais de 10 anos de experiência, XAMPSBEATZ transforma seu hobby favorito — produzir música e dar vida a ideias — em beats que unem criatividade e técnica. Utilizando o FL Studio 25, dedica-se principalmente a rap, hip-hop e trap, explorando novas texturas e sonoridades para entregar produções autênticas e impactantes.",
        btnSC: "Carregar Playlist SoundCloud",
        btnYT: "Carregar Playlist YouTube",
        fecharSC: "Fechar Playlist",
        fecharYT: "Fechar Playlist",
        footer: "© 2025 XAMPSBEATZ — Todos os direitos reservados."
    },
    en: {
        sobreTitulo: "Who is xampsbeatz?",
        sobreTexto: "With over 10 years of experience, XAMPSBEATZ turns his favorite hobby — producing music and bringing ideas to life — into beats that blend creativity and technical skill. Using FL Studio 25, he focuses mainly on rap, hip-hop, and trap, exploring new textures and sounds to deliver authentic and impactful productions.",
        btnSC: "Load SoundCloud Playlist",
        btnYT: "Load YouTube Playlist",
        fecharSC: "Close Playlist",
        fecharYT: "Close Playlist",
        footer: "© 2025 XAMPSBEATZ — All rights reserved."
    },
    es: {
        sobreTitulo: "¿Quién es xampsbeatz?",
        sobreTexto: "Con más de 10 años de experiencia, XAMPSBEATZ convierte su pasatiempo favorito — producir música y dar vida a las ideas — en beats que combinan creatividad y técnica. Utilizando FL Studio 25, se dedica principalmente al rap, hip-hop y trap, explorando nuevas texturas y sonidos para ofrecer producciones auténticas e impactantes.",
        btnSC: "Cargar Playlist de SoundCloud",
        btnYT: "Cargar Playlist de YouTube",
        fecharSC: "Cerrar Playlist",
        fecharYT: "Cerrar Playlist",
        footer: "© 2025 XAMPSBEATZ — Todos los derechos reservados."
    }
};

let idiomaAtual = 'pt-BR';

function traduzir(lang) {
    idiomaAtual = lang;
    const t = textos[lang];
    document.querySelector('.sobre h2').textContent = t.sobreTitulo;
    document.querySelector('.sobre p').textContent = t.sobreTexto;
    document.getElementById('btn-carregar-playlist').innerHTML = `
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/soundcloud.svg" alt="SoundCloud" class="btn-icon" /> ${t.btnSC}`;
    document.getElementById('btn-carregar-youtube').innerHTML = `
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" class="btn-icon" /> ${t.btnYT}`;
    document.querySelector('footer p').textContent = t.footer;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => traduzir(btn.dataset.lang));
});

document.getElementById('btn-carregar-playlist').onclick = function () {
    const t = textos[idiomaAtual];
    const container = document.getElementById('playlist-container');
    container.innerHTML = `
        <div class="playlist-wrapper">
            <button class="btn-fechar-playlist btn-fechar-sc" onclick="fecharPlaylist('playlist-container', 'btn-carregar-playlist')">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/soundcloud.svg" alt="Fechar SoundCloud" class="btn-icon-fechar" />
                ${t.fecharSC}
            </button>
            <div class="responsive-iframe">
                <iframe class="soundcloud" scrolling="no" frameborder="no" allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/xampsbeatz/sets/xampsbeatz"></iframe>
            </div>
        </div>
    `;
    this.style.display = 'none';
};

document.getElementById('btn-carregar-youtube').onclick = function() {
    const t = textos[idiomaAtual];
    const yt = document.getElementById('youtube-container');
    yt.innerHTML = `
        <div class="playlist-wrapper">
            <button class="btn-fechar-playlist btn-fechar-yt" onclick="fecharPlaylist('youtube-container', 'btn-carregar-youtube')">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="Fechar YouTube" class="btn-icon-fechar" />
                ${t.fecharYT}
            </button>
            <div class="responsive-iframe">
                <iframe class="youtube"
                    src="https://www.youtube.com/embed/videoseries?si=gQua6M-dFIldHVwB&amp;list=PLzGW71UVkXlQhNErYKmaYYGoaLG0j3XTU"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>
        </div>
    `;
    this.style.display = 'none';
};

function fecharPlaylist(containerId, btnId) {
    document.getElementById(containerId).innerHTML = '';
    document.getElementById(btnId).style.display = 'flex';
}