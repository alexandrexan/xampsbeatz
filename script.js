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