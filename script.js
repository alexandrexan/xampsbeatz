document.getElementById('btn-carregar-playlist').onclick = function () {
    const container = document.getElementById('playlist-container');
    container.innerHTML = `
        <div class="responsive-iframe">
            <iframe class="soundcloud" scrolling="no" frameborder="no" allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/xampsbeatz/sets/xampsbeatz"></iframe>
        </div>
    `;
    this.style.display = 'none';
};

document.getElementById('btn-carregar-youtube').onclick = function() {
    const yt = document.getElementById('youtube-container');
    yt.innerHTML = `
        <div class="responsive-iframe">
            <iframe class="youtube"
                src="https://www.youtube.com/embed/videoseries?si=gQua6M-dFIldHVwB&amp;list=PLzGW71UVkXlQhNErYKmaYYGoaLG0j3XTU"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        </div>
    `;
    this.style.display = 'none';
};