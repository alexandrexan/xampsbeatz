//* Tradução de textos
const textos = {
    "pt-BR": {
        sobreTitulo: "Quem é xampsbeatz?",
        sobreTexto: "Beatmaker com mais de 10 anos de experiência, XAMPSBEATZ transforma seu hobby favorito — produzir música e dar vida a ideias — em beats que unem criatividade e técnica. Utilizando o FL Studio 25, dedica-se principalmente a rap, hip-hop e trap, explorando novas texturas e sonoridades para entregar produções autênticas e impactantes.",
        btnSC: "Carregar Playlist SoundCloud",
        btnYT: "Carregar Playlist YouTube",
        fecharSC: "Fechar Playlist",
        fecharYT: "Fechar Playlist",
        footer: "© {year} XAMPSBEATZ — Todos os direitos reservados."
    },
    en: {
        sobreTitulo: "Who is xampsbeatz?",
        sobreTexto: "With over 10 years of experience, XAMPSBEATZ turns his favorite hobby — producing music and bringing ideas to life — into beats that blend creativity and technical skill. Using FL Studio 25, he focuses mainly on rap, hip-hop, and trap, exploring new textures and sounds to deliver authentic and impactful productions.",
        btnSC: "Load SoundCloud Playlist",
        btnYT: "Load YouTube Playlist",
        fecharSC: "Close Playlist",
        fecharYT: "Close Playlist",
        footer: "© {year} XAMPSBEATZ — All rights reserved."
    },
    es: {
        sobreTitulo: "¿Quién es xampsbeatz?",
        sobreTexto: "Con más de 10 años de experiencia, XAMPSBEATZ convierte su pasatiempo favorito — producir música y dar vida a las ideas — en beats que combinan creatividad y técnica. Utilizando FL Studio 25, se dedica principalmente al rap, hip-hop y trap, explorando nuevas texturas y sonidos para ofrecer producciones auténticas e impactantes.",
        btnSC: "Cargar Playlist de SoundCloud",
        btnYT: "Cargar Playlist de YouTube",
        fecharSC: "Cerrar Playlist",
        fecharYT: "Cerrar Playlist",
        footer: "© {year} XAMPSBEATZ — Todos los derechos reservados."
    }
};

let idiomaAtual = 'pt-BR';

function traduzir(lang) {
    idiomaAtual = lang;
    const t = textos[lang];
    const currentYear = new Date().getFullYear();
    document.querySelector('.sobre h2').textContent = t.sobreTitulo;
    document.querySelector('.sobre p').textContent = t.sobreTexto;
    document.getElementById('btn-carregar-playlist').innerHTML = `
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/soundcloud.svg" alt="SoundCloud" class="btn-icon" /> ${t.btnSC}`;
    document.getElementById('btn-carregar-youtube').innerHTML = `
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" class="btn-icon" /> ${t.btnYT}`;
    document.querySelector('footer p').textContent = t.footer.replace('{year}', currentYear);
}
